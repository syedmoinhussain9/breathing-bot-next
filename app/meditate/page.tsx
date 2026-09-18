"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Play, Square, Circle, Waves, Volume2 } from "lucide-react";

type SoundType = "brown" | "white" | "pink" | "warm_major" | "wistful_minor" | "deep_sleep";

// Translated from GenerateAmbientPad.py
const PAD_PRESETS: Record<string, any> = {
  warm_major: { chord_notes_hz: [130.81, 196.00, 329.63, 587.33], detune_cents: 6, voices_per_note: 3, lfo_period_sec: 8.0, lfo_depth: 0.35, master_gain_db: -28.0 },
  wistful_minor: { chord_notes_hz: [130.81, 155.56, 329.63, 466.16], detune_cents: 8, voices_per_note: 3, lfo_period_sec: 9.0, lfo_depth: 0.40, master_gain_db: -28.0 },
  deep_sleep: { chord_notes_hz: [98.00, 146.83, 220.00, 293.66], detune_cents: 5, voices_per_note: 4, lfo_period_sec: 14.0, lfo_depth: 0.45, master_gain_db: -30.0 },
};

export default function MeditationRoom() {
  const [isRunning, setIsRunning] = useState(false);
  const [soundType, setSoundType] = useState<SoundType>("brown");
  const [totalSeconds, setTotalSeconds] = useState(300); // Default 5m
  const [timeLeft, setTimeLeft] = useState(300);
  const [customInput, setCustomInput] = useState("");
  
  // Real-time volume state
  const [volume, setVolume] = useState(0.8);

  // Audio & Engine Refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const activeNodesRef = useRef<any[]>([]);
  const masterGainRef = useRef<GainNode | null>(null);
  const finalUserGainRef = useRef<GainNode | null>(null);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const endTimeRef = useRef<number>(0);
  const wakeLockRef = useRef<any>(null);

  // --- WAKE LOCK ---
  const requestWakeLock = async () => {
    try {
      if ("wakeLock" in navigator) wakeLockRef.current = await (navigator as any).wakeLock.request("screen");
    } catch (err) {}
  };
  const releaseWakeLock = async () => {
    if (wakeLockRef.current) {
      try { await wakeLockRef.current.release(); } catch (e) {}
      wakeLockRef.current = null;
    }
  };

  // --- AUDIO SYNTHESIS ENGINE ---
  const stopAudio = () => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.linearRampToValueAtTime(0, audioCtxRef.current.currentTime + 2);
      setTimeout(() => {
        activeNodesRef.current.forEach(node => {
          try { node.stop(); } catch(e) {}
          try { node.disconnect(); } catch(e) {}
        });
        activeNodesRef.current = [];
        masterGainRef.current?.disconnect();
        finalUserGainRef.current?.disconnect();
        masterGainRef.current = null;
        finalUserGainRef.current = null;
      }, 2100);
    }
  };

  const playEndingTing = () => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") ctx.resume();
    
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    g.gain.setValueAtTime(0.1, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);
    
    // Connect bell directly to speakers, bypassing user volume control
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 1.5);
  };

  const startAudio = () => {
    if (!audioCtxRef.current) audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") ctx.resume();

    stopAudio();

    const isNoise = ["brown", "white", "pink"].includes(soundType);
    const targetGain = isNoise 
      ? 0.3 
      : Math.pow(10, PAD_PRESETS[soundType].master_gain_db / 20.0);

    // User volume controller (maps to the slider)
    finalUserGainRef.current = ctx.createGain();
    finalUserGainRef.current.gain.value = volume;
    finalUserGainRef.current.connect(ctx.destination);

    // Master mathematical gain (handles the 3s fade in/out)
    masterGainRef.current = ctx.createGain();
    masterGainRef.current.gain.setValueAtTime(0, ctx.currentTime);
    masterGainRef.current.gain.linearRampToValueAtTime(targetGain, ctx.currentTime + 3);
    masterGainRef.current.connect(finalUserGainRef.current);

    if (isNoise) {
      const bufferSize = ctx.sampleRate * 3;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      if (soundType === "white") {
        for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
      } else if (soundType === "brown") {
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          data[i] = (lastOut + 0.02 * white) / 1.02;
          lastOut = data[i];
        }
      } else if (soundType === "pink") {
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
          b6 = white * 0.115926;
        }
      }

      let peak = 0;
      for (let i = 0; i < bufferSize; i++) peak = Math.max(peak, Math.abs(data[i]));
      for (let i = 0; i < bufferSize; i++) data[i] *= (0.1 / peak);

      const sourceNode = ctx.createBufferSource();
      sourceNode.buffer = buffer;
      sourceNode.loop = true;

      const lpf = ctx.createBiquadFilter();
      lpf.type = "lowpass";
      lpf.frequency.value = soundType === "brown" ? 400 : soundType === "pink" ? 1500 : 3000;

      sourceNode.connect(lpf);
      lpf.connect(masterGainRef.current);
      sourceNode.start(0);
      activeNodesRef.current.push(sourceNode, lpf);

    } else {
      const cfg = PAD_PRESETS[soundType];
      const linearGain = Math.pow(10, cfg.master_gain_db / 20.0);
      masterGainRef.current.gain.linearRampToValueAtTime(linearGain, ctx.currentTime + 3);

      cfg.chord_notes_hz.forEach((baseFreq: number, noteIdx: number) => {
        for (let v = 0; v < cfg.voices_per_note; v++) {
          const spread = -cfg.detune_cents + (v * (cfg.detune_cents * 2) / Math.max(1, cfg.voices_per_note - 1));
          const detunedFreq = baseFreq * Math.pow(2, spread / 1200.0);
          
          const panner = ctx.createStereoPanner();
          let panVal = -0.6 + (v * 1.2 / Math.max(1, cfg.voices_per_note - 1));
          panner.pan.value = noteIdx % 2 === 1 ? -panVal : panVal;

          const lfo = ctx.createOscillator();
          lfo.type = "sine";
          lfo.frequency.value = 1.0 / cfg.lfo_period_sec;
          
          const lfoGain = ctx.createGain();
          lfoGain.gain.value = cfg.lfo_depth / 2.0;

          const voiceGain = ctx.createGain();
          voiceGain.gain.value = 1.0 - (cfg.lfo_depth / 2.0);
          
          lfo.connect(lfoGain);
          lfoGain.connect(voiceGain.gain);

          const osc1 = ctx.createOscillator();
          osc1.type = "sine";
          osc1.frequency.value = detunedFreq;

          const osc2 = ctx.createOscillator();
          osc2.type = "sine";
          osc2.frequency.value = detunedFreq * 2;
          const osc2Gain = ctx.createGain();
          osc2Gain.gain.value = 0.15; 

          osc1.connect(voiceGain);
          osc2.connect(osc2Gain);
          osc2Gain.connect(voiceGain);
          voiceGain.connect(panner);
          panner.connect(masterGainRef.current!);

          osc1.start(0);
          osc2.start(0);
          lfo.start(0);

          activeNodesRef.current.push(osc1, osc2, lfo, voiceGain, lfoGain, osc2Gain, panner);
        }
      });
    }
  };

  // Update volume smoothly in real-time
  useEffect(() => {
    if (finalUserGainRef.current && audioCtxRef.current) {
      finalUserGainRef.current.gain.setTargetAtTime(volume, audioCtxRef.current.currentTime, 0.1);
    }
  }, [volume]);

  // --- TIMER ENGINE ---
  const handleStart = () => {
    let finalSeconds = totalSeconds;
    if (customInput) {
      const val = parseInt(customInput, 10);
      if (!isNaN(val) && val >= 1 && val <= 120) {
        finalSeconds = val * 60;
        setTotalSeconds(finalSeconds);
      }
    }
    
    setIsRunning(true);
    setTimeLeft(finalSeconds);
    endTimeRef.current = Date.now() + finalSeconds * 1000;
    
    startAudio();
    requestWakeLock();

    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const msLeft = endTimeRef.current - Date.now();
      if (msLeft <= 0) {
        handleStop(true);
      } else {
        setTimeLeft(Math.ceil(msLeft / 1000));
      }
    }, 250);
  };

  const handleStop = (completed = false) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    releaseWakeLock();
    stopAudio();
    setIsRunning(false);
    
    if (completed) {
      setTimeLeft(0);
      playEndingTing();
    } else {
      setTimeLeft(totalSeconds);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      stopAudio();
      releaseWakeLock();
    };
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 py-8 max-w-2xl mx-auto min-h-[80vh]">
      
      {!isRunning && (
        <div className="w-full mb-6">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
        </div>
      )}

      <div className="text-center mb-8">
        <Waves className={`w-10 h-10 mx-auto mb-4 transition-colors duration-1000 ${isRunning ? "text-emerald-600 dark:text-emerald-500" : "text-slate-400 dark:text-slate-600"}`} />
        <h1 className="text-3xl font-light text-slate-900 dark:text-white mb-2">Meditation Room</h1>
        <p className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-widest font-semibold">Pure sound, no distractions</p>
      </div>

      {!isRunning ? (
        <div className="w-full space-y-6">
          
          <div className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 p-6 md:p-8 rounded-3xl shadow-sm dark:shadow-xl space-y-8">
            <div className="text-center">
              <h2 className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-4">Continuous Noise</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {(["brown", "white", "pink"] as const).map(type => (
                  <button
                    key={type}
                    onClick={() => setSoundType(type)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all border ${
                      soundType === type 
                        ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50" 
                        : "bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    <Circle className={`w-3 h-3 fill-current ${type === "brown" ? "text-amber-700 dark:text-amber-600" : type === "pink" ? "text-pink-400" : "text-slate-300 dark:text-slate-500"}`} />
                    {type.charAt(0).toUpperCase() + type.slice(1)} Noise
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center pt-6 border-t border-slate-100 dark:border-slate-800/60">
              <h2 className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-4">Ambient Pads</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {(["warm_major", "wistful_minor", "deep_sleep"] as const).map(type => (
                  <button
                    key={type}
                    onClick={() => setSoundType(type)}
                    className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all border ${
                      soundType === type 
                        ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50" 
                        : "bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {type.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 p-6 md:p-8 rounded-3xl shadow-sm dark:shadow-xl text-center">
            <h2 className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-4">Duration</h2>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {[5, 10, 15, 20, 30].map(mins => (
                <button
                  key={mins}
                  onClick={() => { setTotalSeconds(mins * 60); setCustomInput(""); }}
                  className={`px-5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all border ${
                    totalSeconds === mins * 60 && !customInput 
                      ? "bg-emerald-600 dark:bg-emerald-900/30 text-white dark:text-emerald-400 border-emerald-600 dark:border-emerald-800/50" 
                      : "bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {mins}m
                </button>
              ))}
            </div>
            <div className="max-w-[200px] mx-auto">
              <input
                type="number"
                placeholder="Custom (1–120m)"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                min="1" max="120"
                className="w-full text-center px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-300 outline-none focus:ring-2 focus:ring-emerald-500/50 dark:focus:ring-emerald-500/30 transition-shadow placeholder:text-slate-400 dark:placeholder:text-slate-600"
              />
            </div>
          </div>

          <div className="pt-2">
            <button onClick={handleStart} className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all shadow-lg shadow-emerald-900/20 active:scale-[0.98]">
              <Play className="w-4 h-4 fill-current" /> Start Session
            </button>
          </div>
        </div>

      ) : (
        <div className="flex-1 flex flex-col items-center justify-center w-full min-h-[50vh]">
          <h1 className="text-[6rem] sm:text-[8rem] font-light text-emerald-600 dark:text-emerald-400 tracking-widest tabular-nums leading-none mb-6">
            {formatTime(timeLeft)}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 italic mb-12 tracking-wide">Session in progress...</p>
          
          <button onClick={() => handleStop(false)} className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <Square className="w-4 h-4 fill-current" /> Stop
          </button>

          {/* Minimalist volume slider that fades into the background unless hovered */}
          <div className="mt-12 flex items-center gap-4 w-full max-w-xs mx-auto opacity-30 hover:opacity-100 transition-opacity duration-300">
            <Volume2 className="w-5 h-5 text-slate-500 shrink-0" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-600 dark:accent-emerald-500"
            />
          </div>
        </div>
      )}
    </div>
  );
}