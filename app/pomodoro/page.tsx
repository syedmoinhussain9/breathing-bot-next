"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Play, Pause, RotateCcw, Timer, Settings2, Coffee, Brain, Repeat, Headphones, Volume2 } from "lucide-react";

type SessionType = "focus" | "break";
type PresetType = "sprint" | "standard" | "deep" | "custom";
type NoiseType = "brown" | "pink" | "white";

const PRESETS = {
  sprint: { focus: 15, break: 3, label: "Sprint (15/3)" },
  standard: { focus: 25, break: 5, label: "Standard (25/5)" },
  deep: { focus: 50, break: 10, label: "Deep Work (50/10)" },
};

export default function PomodoroTimer() {
  const [activePreset, setActivePreset] = useState<PresetType>("deep");
  const [sessionType, setSessionType] = useState<SessionType>("focus");
  const [isActive, setIsActive] = useState(false);
  
  // Custom durations in minutes
  const [customFocus, setCustomFocus] = useState(50);
  const [customBreak, setCustomBreak] = useState(10);
  
  // Cycle Tracking
  const [targetCycles, setTargetCycles] = useState<number | "endless">(4);
  const [cycles, setCycles] = useState(0);

  // Timer state in seconds
  const [timeLeft, setTimeLeft] = useState(50 * 60);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // --- Noise State ---
  const [noiseEnabled, setNoiseEnabled] = useState(false);
  const [noiseType, setNoiseType] = useState<NoiseType>("brown");
  const [noiseVolume, setNoiseVolume] = useState(0.5);
  
  const audioCtxRef = useRef<AudioContext | null>(null);
  const noiseGainRef = useRef<GainNode | null>(null);
  const noiseSourceRef = useRef<AudioBufferSourceNode | null>(null);

  // --- Audio Generation Utilities ---
  const playEndingTing = () => {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    
    g.gain.setValueAtTime(0.1, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);
    
    osc.connect(g);
    g.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 1.5);
  };

  const createNoiseBuffer = (ctx: AudioContext, type: NoiseType) => {
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);
    
    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      if (type === "brown") {
        output[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5; 
      } else if (type === "pink") {
        output[i] = (lastOut * 0.99) + (white * 0.05);
        lastOut = output[i];
        output[i] *= 2.0; 
      } else if (type === "white") {
        output[i] = white * 0.5;
      }
    }
    return buffer;
  };

  // --- Background Noise Lifecycle ---
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    const ctx = audioCtxRef.current;

    // Only play noise if timer is running, it is a focus session, and noise is enabled
    if (isActive && sessionType === "focus" && noiseEnabled) {
      if (ctx.state === "suspended") ctx.resume();

      if (noiseSourceRef.current) {
        noiseSourceRef.current.stop();
        noiseSourceRef.current.disconnect();
      }

      noiseGainRef.current = ctx.createGain();
      noiseGainRef.current.gain.value = noiseVolume * 0.25; // Clamp output
      noiseGainRef.current.connect(ctx.destination);

      noiseSourceRef.current = ctx.createBufferSource();
      noiseSourceRef.current.buffer = createNoiseBuffer(ctx, noiseType);
      noiseSourceRef.current.loop = true;
      noiseSourceRef.current.connect(noiseGainRef.current);
      noiseSourceRef.current.start();
    } else {
      // Stop noise for breaks, pauses, or toggling off
      if (noiseSourceRef.current) {
        noiseSourceRef.current.stop();
        noiseSourceRef.current.disconnect();
        noiseSourceRef.current = null;
      }
    }

    return () => {
      if (noiseSourceRef.current) {
        noiseSourceRef.current.stop();
        noiseSourceRef.current.disconnect();
        noiseSourceRef.current = null;
      }
    };
  }, [isActive, sessionType, noiseEnabled, noiseType]);

  // Handle Real-Time Volume Adjustments
  useEffect(() => {
    if (noiseGainRef.current && audioCtxRef.current) {
      const safeVolume = noiseVolume * 0.25; 
      noiseGainRef.current.gain.setTargetAtTime(safeVolume, audioCtxRef.current.currentTime, 0.1);
    }
  }, [noiseVolume]);


  // --- Timer Logic ---
  const getDuration = (type: SessionType) => {
    if (activePreset === "custom") {
      return type === "focus" ? customFocus : customBreak;
    }
    return type === "focus" ? PRESETS[activePreset].focus : PRESETS[activePreset].break;
  };

  const resetTimer = () => {
    setIsActive(false);
    setSessionType("focus");
    setCycles(0);
    setTimeLeft(getDuration("focus") * 60);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (isActive && timeLeft <= 0) {
      playEndingTing();
      
      if (sessionType === "focus") {
        const newCycleCount = cycles + 1;
        setCycles(newCycleCount);
        
        if (targetCycles !== "endless" && newCycleCount >= targetCycles) {
          setIsActive(false);
          setSessionType("focus");
          setTimeLeft(getDuration("focus") * 60);
        } else {
          setSessionType("break");
          setTimeLeft(getDuration("break") * 60);
        }
      } else {
        setSessionType("focus");
        setTimeLeft(getDuration("focus") * 60);
      }
    }
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft, sessionType, cycles, targetCycles]);

  useEffect(() => {
    if (!isActive) {
      setTimeLeft(getDuration(sessionType) * 60);
    }
  }, [activePreset, customFocus, customBreak]);


  // --- Formatting ---
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 font-sans flex justify-center py-12 px-4">
      <div className="w-full max-w-xl">
        
        <Link href="/" className="inline-flex items-center text-sm text-slate-500 hover:text-blue-400 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Home
        </Link>

        <div className="text-center mb-10">
          <Timer className="w-10 h-10 mx-auto mb-4 text-blue-500" />
          <h1 className="text-3xl font-light tracking-wide text-slate-200">Focus Timer</h1>
          <p className="text-xs text-slate-500 mt-2 uppercase tracking-widest">Developer-First Pomodoro</p>
        </div>

        <div className="bg-[#0f172a] rounded-3xl p-6 md:p-8 border border-slate-800 shadow-2xl space-y-8 relative overflow-hidden">
          
          <div 
            className="absolute bottom-0 left-0 h-1 transition-all duration-1000 ease-linear"
            style={{ 
              width: `${100 - (timeLeft / (getDuration(sessionType) * 60)) * 100}%`,
              backgroundColor: sessionType === "focus" ? "#3b82f6" : "#10b981" 
            }}
          />

          <div className="flex justify-center space-x-2">
            <div className={`flex items-center px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                sessionType === "focus"
                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  : "text-slate-500 border border-transparent"
              }`}
            >
              <Brain className="w-4 h-4 mr-2" /> Focus
            </div>
            <div className={`flex items-center px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                sessionType === "break"
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "text-slate-500 border border-transparent"
              }`}
            >
              <Coffee className="w-4 h-4 mr-2" /> Break
            </div>
          </div>

          <div className="text-center">
            <div className={`text-8xl font-extralight tracking-tight tabular-nums transition-colors duration-500 ${
              sessionType === "focus" ? "text-blue-400" : "text-emerald-400"
            }`}>
              {formatTime(timeLeft)}
            </div>
            <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-slate-500">
              <span className="flex items-center font-medium">
                <Brain className="w-4 h-4 mr-2" /> 
                {targetCycles === "endless" ? `${cycles} Completed` : `Cycle ${cycles} of ${targetCycles}`}
              </span>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-6 pt-4">
            <button
              onClick={resetTimer}
              className="p-3 text-slate-500 hover:text-slate-300 hover:bg-slate-800 rounded-full transition-all"
            >
              <RotateCcw className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsActive(!isActive)}
              className={`flex items-center justify-center w-20 h-20 rounded-full transition-all shadow-lg ${
                isActive
                  ? "bg-slate-800 text-slate-400 hover:bg-slate-700"
                  : sessionType === "focus"
                    ? "bg-blue-600 text-white hover:bg-blue-500 shadow-blue-900/50"
                    : "bg-emerald-600 text-white hover:bg-emerald-500 shadow-emerald-900/50"
              }`}
            >
              {isActive ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-2" />}
            </button>
            <button
              onClick={() => setActivePreset(activePreset === "custom" ? "deep" : "custom")}
              className={`p-3 rounded-full transition-all ${
                activePreset === "custom" ? "text-blue-400 bg-blue-900/20" : "text-slate-500 hover:text-slate-300 hover:bg-slate-800"
              }`}
            >
              <Settings2 className="w-6 h-6" />
            </button>
          </div>

          <div className="pt-6 border-t border-slate-800/50 space-y-8">
            
            {/* Focus Soundscape Configuration */}
            <div className="space-y-4">
              <div className="flex items-center justify-center text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                <Headphones className="w-3 h-3 mr-1" /> Focus Soundscape
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { id: "brown", label: "Brown" },
                  { id: "pink", label: "Pink" },
                  { id: "white", label: "White" },
                ].map((noise) => (
                  <button
                    key={noise.id}
                    onClick={() => {
                      setNoiseType(noise.id as NoiseType);
                      setNoiseEnabled(true);
                    }}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                      noiseEnabled && noiseType === noise.id
                        ? "bg-blue-900/30 text-blue-400 border border-blue-800/50"
                        : "bg-transparent text-slate-500 hover:bg-slate-800 border border-transparent"
                    }`}
                  >
                    {noise.label}
                  </button>
                ))}
                <button
                  onClick={() => setNoiseEnabled(false)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    !noiseEnabled
                      ? "bg-slate-700 text-slate-300"
                      : "bg-transparent text-slate-500 hover:bg-slate-800 border border-transparent"
                  }`}
                >
                  Off
                </button>
              </div>
              
              <div className={`transition-all duration-300 overflow-hidden ${noiseEnabled ? "max-h-12 opacity-100 pt-1" : "max-h-0 opacity-0"}`}>
                <div className="flex items-center space-x-4 px-6 max-w-sm mx-auto">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={noiseVolume}
                    onChange={(e) => setNoiseVolume(parseFloat(e.target.value))}
                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <Volume2 className="w-4 h-4 text-slate-500 shrink-0" />
                </div>
              </div>
            </div>

            {/* Auto-Cycles Selection */}
            <div className="space-y-4 pt-4 border-t border-slate-800/30">
              <div className="flex items-center justify-center text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                <Repeat className="w-3 h-3 mr-1" /> Auto-Cycle Target
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {[1, 2, 3, 4, "endless"].map((val) => (
                  <button
                    key={val}
                    disabled={isActive}
                    onClick={() => setTargetCycles(val as any)}
                    className={`w-12 h-10 rounded-lg text-xs font-semibold transition-all ${
                      targetCycles === val
                        ? "bg-slate-700 text-slate-200"
                        : "bg-transparent text-slate-500 hover:bg-slate-800 border border-transparent disabled:opacity-50"
                    }`}
                  >
                    {val === "endless" ? "∞" : val}
                  </button>
                ))}
              </div>
            </div>

            {/* Presets */}
            <div className="flex flex-wrap justify-center gap-2">
              {(Object.keys(PRESETS) as Array<keyof typeof PRESETS>).map((key) => (
                <button
                  key={key}
                  disabled={isActive}
                  onClick={() => setActivePreset(key)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    activePreset === key
                      ? "bg-slate-700 text-slate-200"
                      : "bg-transparent text-slate-500 hover:text-slate-300 hover:bg-slate-800 disabled:opacity-50"
                  }`}
                >
                  {PRESETS[key].label}
                </button>
              ))}
            </div>

            {/* Custom Time Inputs */}
            <div className={`transition-all duration-300 overflow-hidden ${activePreset === "custom" ? "max-h-24 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="flex justify-center items-center space-x-6 px-4 bg-slate-900/50 rounded-xl p-4">
                <div className="flex flex-col items-center">
                  <label className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Focus (min)</label>
                  <input
                    type="number"
                    disabled={isActive}
                    value={customFocus}
                    onChange={(e) => setCustomFocus(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 bg-slate-800 text-center text-sm py-1 rounded border border-slate-700 text-slate-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <label className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Break (min)</label>
                  <input
                    type="number"
                    disabled={isActive}
                    value={customBreak}
                    onChange={(e) => setCustomBreak(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 bg-slate-800 text-center text-sm py-1 rounded border border-slate-700 text-slate-300 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}