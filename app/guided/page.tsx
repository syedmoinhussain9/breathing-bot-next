"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Rocket, StopCircle } from "lucide-react";
import { BREATHING_PRESETS, PRESET_ORDER } from "@/lib/presets";

type PhaseKey = "Inhale" | "Hold" | "Exhale" | "Rest";

function GuidedBreathingContent() {
  const searchParams = useSearchParams();
  const urlTechnique = searchParams.get("technique");

  const [selectedTech, setSelectedTech] = useState<string>("box");
  const [activeLevel, setActiveLevel] = useState<number>(1);
  const [targetCycles, setTargetCycles] = useState<number>(10);
  const [customSettings, setCustomSettings] = useState<[number, number, number, number]>([4, 0, 4, 0]);

  // Safely update dropdown from URL
  useEffect(() => {
    if (urlTechnique && PRESET_ORDER.includes(urlTechnique)) {
      setSelectedTech(urlTechnique);
    }
  }, [urlTechnique]);

  const [isRunning, setIsRunning] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<PhaseKey>("Inhale");
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [currentCycle, setCurrentCycle] = useState<number>(0);

  const endTimeRef = useRef<number>(0);
  const phaseIndexRef = useRef<number>(0);
  const cycleRef = useRef<number>(1);
  const wakeLockRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Crash-proof timing calculation
  const presetData = BREATHING_PRESETS[selectedTech];
  const activeTimings = selectedTech === "custom" 
    ? customSettings 
    : (presetData?.levels[activeLevel] || [4, 0, 4, 0]);

  // --- Audio & Wake Lock ---
  const playCue = (key: PhaseKey | "Ended") => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    const fileName = key.toLowerCase();
    audioRef.current = new Audio(`/audio/tts/en/${fileName}.mp3`);
    audioRef.current.play().catch(() => {});
  };

  const requestWakeLock = async () => {
    try {
      if ("wakeLock" in navigator) {
        wakeLockRef.current = await (navigator as any).wakeLock.request("screen");
      }
    } catch (err) {}
  };

  const releaseWakeLock = async () => {
    if (wakeLockRef.current) {
      try { await wakeLockRef.current.release(); } catch (e) {}
      wakeLockRef.current = null;
    }
  };

  // --- Engine Logic ---
  const startSession = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTimings[0] === 0 || activeTimings[2] === 0) {
      alert("Inhale and Exhale durations must be greater than 0.");
      return;
    }

    setIsRunning(true);
    cycleRef.current = 1;
    setCurrentCycle(1);
    
    const phaseDefinitions = [
      { key: "Inhale" as PhaseKey, duration: activeTimings[0] },
      { key: "Hold" as PhaseKey, duration: activeTimings[1] },
      { key: "Exhale" as PhaseKey, duration: activeTimings[2] },
      { key: "Rest" as PhaseKey, duration: activeTimings[3] },
    ].filter((p) => p.duration > 0);

    const startPhase = (index: number) => {
      const phase = phaseDefinitions[index];
      endTimeRef.current = Date.now() + phase.duration * 1000;
      setCurrentPhase(phase.key);
      setTimeLeft(phase.duration);
      playCue(phase.key);
    };

    phaseIndexRef.current = 0;
    startPhase(0);
    requestWakeLock();

    intervalRef.current = setInterval(() => {
      const msLeft = endTimeRef.current - Date.now();
      
      if (msLeft <= 0) {
        phaseIndexRef.current++;
        
        if (phaseIndexRef.current >= phaseDefinitions.length) {
          phaseIndexRef.current = 0;
          cycleRef.current++;
          
          if (cycleRef.current > targetCycles) {
            endSession(true);
            return;
          }
          setCurrentCycle(cycleRef.current);
        }
        startPhase(phaseIndexRef.current);
      } else {
        setTimeLeft(Math.ceil(msLeft / 1000));
      }
    }, 250);
  };

  const endSession = (completed = false) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    releaseWakeLock();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (completed) playCue("Ended");
    setIsRunning(false);
  };

  useEffect(() => {
    return () => endSession();
  }, []);

  return (
    <div className="flex flex-col items-center p-4 py-8 max-w-4xl mx-auto w-full min-h-[80vh]">
      {!isRunning && (
        <div className="w-full mb-6">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
        </div>
      )}

      {!isRunning ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl rounded-2xl w-full p-6 md:p-8">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Configure Exercise</h1>
          
          <form onSubmit={startSession} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Breathing Technique</label>
              <select 
                className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
              >
                {PRESET_ORDER.map((key) => {
                  const data = BREATHING_PRESETS[key];
                  if (!data) return null; // Crash-proof check
                  return (
                    <option key={key} value={key}>
                      {data.name}
                    </option>
                  );
                })}
                <option value="custom">Custom Manual Rhythm...</option>
              </select>
            </div>

            {selectedTech !== "custom" && presetData && (
              <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 p-4 rounded-lg text-sm border border-blue-100 dark:border-blue-800/30">
                {presetData.description}
              </div>
            )}

            {selectedTech !== "custom" ? (
              <div>
                <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Intensity Level</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setActiveLevel(level)}
                      className={`flex-1 py-2 rounded-lg font-bold border transition-colors ${
                        activeLevel === level 
                          ? "bg-blue-600 text-white border-blue-600" 
                          : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4 bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                {(['Inhale', 'Hold', 'Exhale', 'Rest'] as const).map((label, idx) => (
                  <div key={label}>
                    <div className="flex justify-between text-sm font-medium mb-1 dark:text-slate-300">
                      <span>{label}</span>
                      <span>{customSettings[idx]}s</span>
                    </div>
                    <input 
                      type="range" min="0" max="20" 
                      value={customSettings[idx]}
                      onChange={(e) => {
                        const newSettings = [...customSettings] as [number, number, number, number];
                        newSettings[idx] = parseInt(e.target.value);
                        setCustomSettings(newSettings);
                      }}
                      className="w-full accent-blue-600"
                    />
                  </div>
                ))}
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Target Exercise Cycles</label>
              <input 
                type="number" min="1" max="100" 
                value={targetCycles}
                onChange={(e) => setTargetCycles(parseInt(e.target.value) || 1)}
                className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition-all active:scale-95 shadow-md">
              <Rocket className="w-5 h-5" /> Initialize Breathing Tracker
            </button>
          </form>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center w-full min-h-[60vh]">
          <div className="text-center space-y-4 mb-12">
            <span className="text-2xl font-bold tracking-widest text-blue-500 uppercase block">
              {currentPhase}
            </span>
            <span className="text-8xl font-mono font-light text-slate-900 dark:text-white block tabular-nums">
              {timeLeft === 0 ? "00" : timeLeft.toString().padStart(2, '0')}
            </span>
          </div>

          <div className="relative flex items-center justify-center w-64 h-64 mb-12">
            <div className="absolute w-32 h-32 rounded-full border-4 border-slate-200 dark:border-slate-700" />
            <div
              className={`rounded-full border-4 border-blue-500 transition-all ease-linear ${
                currentPhase === "Hold" || currentPhase === "Rest" ? "opacity-50" : "opacity-100"
              }`}
              style={{
                width: currentPhase === "Inhale" || currentPhase === "Hold" ? "280px" : "120px",
                height: currentPhase === "Inhale" || currentPhase === "Hold" ? "280px" : "120px",
                transitionDuration: `${timeLeft * 1000}ms`,
              }}
            />
          </div>

          <div className="text-lg font-medium text-slate-500 dark:text-slate-400 mb-12">
            Cycle: <span className="text-slate-900 dark:text-white font-bold">{currentCycle}</span> / {targetCycles}
          </div>

          <button onClick={() => endSession(false)} className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors">
            <StopCircle className="w-5 h-5" /> Terminate Session
          </button>
        </div>
      )}
    </div>
  );
}

export default function GuidedBreathing() {
  return (
    <Suspense fallback={<div className="min-h-[80vh] flex items-center justify-center font-bold text-slate-500">Loading Breathing Engine...</div>}>
      <GuidedBreathingContent />
    </Suspense>
  );
}