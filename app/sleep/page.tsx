"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Moon, Play, Square, ArrowLeft, Volume2 } from "lucide-react";

type TimerDuration = 15 | 30 | 45 | 60 | null;

export default function SleepSanctuary() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const [noiseEnabled, setNoiseEnabled] = useState(true);
  const [noiseVolume, setNoiseVolume] = useState(0.5);
  
  const [padEnabled, setPadEnabled] = useState(true);
  const [padVolume, setPadVolume] = useState(0.5);
  
  const [timerMinutes, setTimerMinutes] = useState<TimerDuration>(30);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  
  const noiseGainRef = useRef<GainNode | null>(null);
  const noiseSourceRef = useRef<AudioBufferSourceNode | null>(null);
  
  const padGainRef = useRef<GainNode | null>(null);
  const padNodesRef = useRef<AudioNode[]>([]);
  
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // --- Audio Generation Utilities ---
  const createBrownNoiseBuffer = (ctx: AudioContext) => {
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);
    
    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      output[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = output[i];
      output[i] *= 3.5; // Compensate for low-pass volume drop
    }
    return buffer;
  };

  const createDeepSleepPad = (ctx: AudioContext, destination: AudioNode) => {
    const padNodes: AudioNode[] = [];
    
    const frequencies = [98.00, 146.83, 220.00, 293.66]; // G2, D3, A3, D4
    const voices = 4;
    const detune = 5;
    const lfoPeriod = 14.0;
    const depth = 0.45;

    const padMaster = ctx.createGain();
    padMaster.gain.value = 0.15; 
    padMaster.connect(destination);
    padNodes.push(padMaster);

    frequencies.forEach(baseFreq => {
      for (let v = 0; v < voices; v++) {
        const spread = -detune + (2 * detune * v / (voices - 1 || 1));
        const detunedFreq = baseFreq * Math.pow(2, spread / 1200.0);

        const voiceGain = ctx.createGain();
        voiceGain.gain.value = 1.0 - (depth * 0.5); 

        const lfo = ctx.createOscillator();
        lfo.type = "sine";
        lfo.frequency.value = 1.0 / lfoPeriod; 
        const lfoScale = ctx.createGain();
        lfoScale.gain.value = depth * 0.5;
        
        lfo.connect(lfoScale);
        lfoScale.connect(voiceGain.gain);
        lfo.start();

        voiceGain.connect(padMaster);
        padNodes.push(voiceGain, lfo, lfoScale);

        // Fundamental Sine
        const osc1 = ctx.createOscillator();
        osc1.type = "sine";
        osc1.frequency.value = detunedFreq;
        osc1.connect(voiceGain);
        osc1.start();
        padNodes.push(osc1);

        // 15% Second Harmonic for thickness
        const harmonicGain = ctx.createGain();
        harmonicGain.gain.value = 0.15;
        harmonicGain.connect(voiceGain);
        padNodes.push(harmonicGain);

        const osc2 = ctx.createOscillator();
        osc2.type = "sine";
        osc2.frequency.value = detunedFreq * 2;
        osc2.connect(harmonicGain);
        osc2.start();
        padNodes.push(osc2);
      }
    });

    return padNodes;
  };

  const startSession = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") ctx.resume();

    masterGainRef.current = ctx.createGain();
    masterGainRef.current.gain.value = 1;
    masterGainRef.current.connect(ctx.destination);

    if (noiseEnabled) {
      noiseGainRef.current = ctx.createGain();
      noiseGainRef.current.gain.value = noiseVolume * 0.25; 
      noiseGainRef.current.connect(masterGainRef.current);

      noiseSourceRef.current = ctx.createBufferSource();
      noiseSourceRef.current.buffer = createBrownNoiseBuffer(ctx);
      noiseSourceRef.current.loop = true;
      noiseSourceRef.current.connect(noiseGainRef.current);
      noiseSourceRef.current.start();
    }

    if (padEnabled) {
      padGainRef.current = ctx.createGain();
      padGainRef.current.gain.value = padVolume; 
      padGainRef.current.connect(masterGainRef.current);
      
      padNodesRef.current = createDeepSleepPad(ctx, padGainRef.current);
    }

    setIsPlaying(true);
    if (timerMinutes) {
      setTimeLeft(timerMinutes * 60);
    }
  };

  const stopSession = () => {
    if (noiseSourceRef.current) {
      noiseSourceRef.current.stop();
      noiseSourceRef.current.disconnect();
    }
    padNodesRef.current.forEach(node => {
      if (node instanceof OscillatorNode) {
        node.stop();
      }
      node.disconnect();
    });
    padNodesRef.current = [];
    setIsPlaying(false);
    setTimeLeft(null);
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
  };

  useEffect(() => {
    if (noiseGainRef.current && audioCtxRef.current) {
      const safeVolume = noiseVolume * 0.25; 
      noiseGainRef.current.gain.setTargetAtTime(safeVolume, audioCtxRef.current.currentTime, 0.1);
    }
  }, [noiseVolume]);

  useEffect(() => {
    if (padGainRef.current && audioCtxRef.current) {
      padGainRef.current.gain.setTargetAtTime(padVolume, audioCtxRef.current.currentTime, 0.1);
    }
  }, [padVolume]);

  useEffect(() => {
    if (isPlaying && timeLeft !== null && timeLeft > 0) {
      timerIntervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = (prev || 0) - 1;
          
          if (newTime <= 120 && newTime > 0 && masterGainRef.current && audioCtxRef.current) {
            masterGainRef.current.gain.setTargetAtTime(
              newTime / 120, 
              audioCtxRef.current.currentTime, 
              0.5
            );
          }
          
          if (newTime <= 0) {
            stopSession();
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [isPlaying, timeLeft]);

  useEffect(() => {
    return () => {
      if (isPlaying) stopSession();
    };
  }, [isPlaying]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <main className="min-h-screen bg-black text-slate-300 font-sans flex justify-center py-12 px-4 transition-colors duration-1000">
      <div className="w-full max-w-xl">
        
        <Link href="/" className="inline-flex items-center text-sm text-zinc-500 hover:text-amber-600 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Home
        </Link>

        <div className="text-center mb-10">
          <Moon className={`w-10 h-10 mx-auto mb-4 transition-colors duration-1000 ${isPlaying ? "text-amber-600" : "text-zinc-700"}`} />
          <h1 className="text-3xl font-light tracking-widest text-zinc-300">SLEEP SANCTUARY</h1>
          <p className="text-xs text-zinc-600 mt-3 uppercase tracking-widest">Deep frequencies for uninterrupted rest</p>
        </div>

        {isPlaying && timeLeft !== null && (
          <div className="text-center mb-8 text-5xl font-extralight text-amber-700/80 tracking-widest">
            {formatTime(timeLeft)}
          </div>
        )}

        <div className="bg-zinc-950 rounded-3xl p-6 md:p-8 border border-zinc-900 shadow-2xl space-y-8">
          
          {/* Sound Texture Section */}
          <div className="space-y-4">
            <h2 className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase text-center">Sound Texture</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                disabled={isPlaying}
                onClick={() => setNoiseEnabled(true)}
                className={`px-6 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  noiseEnabled
                    ? "bg-amber-900/10 text-amber-600 border border-amber-900/50"
                    : "bg-transparent text-zinc-600 hover:text-zinc-400 border border-transparent disabled:opacity-50"
                }`}
              >
                Brown Noise
              </button>
              <button
                disabled={isPlaying}
                onClick={() => setNoiseEnabled(false)}
                className={`px-6 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  !noiseEnabled
                    ? "bg-amber-900/10 text-amber-600 border border-amber-900/50"
                    : "bg-transparent text-zinc-600 hover:text-zinc-400 border border-transparent disabled:opacity-50"
                }`}
              >
                Off
              </button>
            </div>
            
            <div className={`transition-all duration-300 overflow-hidden ${noiseEnabled ? "max-h-12 opacity-100 pt-2" : "max-h-0 opacity-0"}`}>
              <div className="flex items-center space-x-4 px-6">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={noiseVolume}
                  onChange={(e) => setNoiseVolume(parseFloat(e.target.value))}
                  className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-amber-700"
                />
                <Volume2 className="w-4 h-4 text-zinc-600 shrink-0" />
              </div>
            </div>
          </div>

          {/* Ambient Pad Section */}
          <div className="space-y-4 pt-6 border-t border-zinc-900/50">
            <h2 className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase text-center">Ambient Pad</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                disabled={isPlaying}
                onClick={() => setPadEnabled(true)}
                className={`px-6 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  padEnabled
                    ? "bg-amber-900/10 text-amber-600 border border-amber-900/50"
                    : "bg-transparent text-zinc-600 hover:text-zinc-400 border border-transparent disabled:opacity-50"
                }`}
              >
                Deep Sleep Drone
              </button>
              <button
                disabled={isPlaying}
                onClick={() => setPadEnabled(false)}
                className={`px-6 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  !padEnabled
                    ? "bg-amber-900/10 text-amber-600 border border-amber-900/50"
                    : "bg-transparent text-zinc-600 hover:text-zinc-400 border border-transparent disabled:opacity-50"
                }`}
              >
                Off
              </button>
            </div>

            <div className={`transition-all duration-300 overflow-hidden ${padEnabled ? "max-h-12 opacity-100 pt-2" : "max-h-0 opacity-0"}`}>
              <div className="flex items-center space-x-4 px-6">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={padVolume}
                  onChange={(e) => setPadVolume(parseFloat(e.target.value))}
                  className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-amber-700"
                />
                <Volume2 className="w-4 h-4 text-zinc-600 shrink-0" />
              </div>
            </div>
          </div>

          {/* Duration Section */}
          <div className="space-y-4 pt-6 border-t border-zinc-900/50">
            <h2 className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase text-center">Auto Fade Timer</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[15, 30, 45, 60].map((mins) => (
                <button
                  key={mins}
                  disabled={isPlaying}
                  onClick={() => setTimerMinutes(mins as TimerDuration)}
                  className={`w-14 h-10 rounded-lg flex items-center justify-center text-xs font-medium transition-all ${
                    timerMinutes === mins
                      ? "bg-zinc-900 text-amber-600 border border-zinc-800"
                      : "bg-transparent text-zinc-600 hover:text-zinc-400 border border-transparent disabled:opacity-50"
                  }`}
                >
                  {mins}m
                </button>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-8">
            <button
              onClick={isPlaying ? stopSession : startSession}
              className={`w-full flex items-center justify-center py-4 rounded-xl text-sm tracking-widest uppercase font-semibold transition-all duration-500 ${
                isPlaying 
                  ? "bg-zinc-900 text-amber-600 hover:bg-zinc-800" 
                  : "bg-amber-900/20 text-amber-600 border border-amber-900/30 hover:bg-amber-900/40"
              }`}
            >
              {isPlaying ? (
                <>
                  <Square className="w-4 h-4 mr-3 fill-current" /> Stop Sanctuary
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-3 fill-current" /> Enter Sanctuary
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}