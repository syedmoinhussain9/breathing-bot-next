"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Phase = "Ready" | "Inhale" | "Exhale";

const PHASES = [
  { key: "Inhale" as Phase, duration: 4 },
  { key: "Exhale" as Phase, duration: 4 },
];

export default function PanicRoom() {
  const [isRunning, setIsRunning] = useState(false);
  const [phase, setPhase] = useState<Phase>("Ready");
  const [timeLeft, setTimeLeft] = useState<number>(0);

  // We use refs to track values inside the interval without causing unnecessary re-renders
  const endTimeRef = useRef<number>(0);
  const phaseIndexRef = useRef<number>(0);
  const wakeLockRef = useRef<any>(null); // any used as WakeLock isn't fully typed in standard TS yet
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // --- 1. Wake Lock Logic ---
  const requestWakeLock = async () => {
    try {
      if ("wakeLock" in navigator) {
        wakeLockRef.current = await (navigator as any).wakeLock.request("screen");
      }
    } catch (err) {
      console.warn("Wake Lock request failed:", err);
    }
  };

  const releaseWakeLock = async () => {
    if (wakeLockRef.current) {
      try {
        await wakeLockRef.current.release();
      } catch (e) {
        // already released
      }
      wakeLockRef.current = null;
    }
  };

  // --- 2. Audio Logic ---
  const playCue = (key: Phase) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    
    // Assumes your TTS files are stored in public/audio/tts/en/
    const fileName = key.toLowerCase();
    audioRef.current = new Audio(`/audio/tts/en/${fileName}.mp3`);
    audioRef.current.play().catch((e) => console.warn("Audio playback failed:", e));
  };

  // --- 3. Core Engine (Drift-Proof) ---
  const startPhase = (index: number) => {
    const currentPhase = PHASES[index];
    endTimeRef.current = Date.now() + currentPhase.duration * 1000;
    
    setPhase(currentPhase.key);
    setTimeLeft(currentPhase.duration);
    playCue(currentPhase.key);
  };

  const runInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const msLeft = endTimeRef.current - Date.now();

      if (msLeft <= 0) {
        // Move to next phase
        phaseIndexRef.current = (phaseIndexRef.current + 1) % PHASES.length;
        startPhase(phaseIndexRef.current);
      } else {
        // Update display every 250ms
        setTimeLeft(Math.ceil(msLeft / 1000));
      }
    }, 250);
  };

  // --- 4. Controls ---
  const startSession = () => {
    if (isRunning) return;
    setIsRunning(true);
    phaseIndexRef.current = 0;
    
    requestWakeLock();
    startPhase(0);
    runInterval();

    // Media Session API mapping
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: "Coherent Breathing",
        artist: "Breathing Bot",
        album: "Guided Sessions",
      });
    }
  };

  const stopSession = () => {
    setIsRunning(false);
    releaseWakeLock();
    
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setPhase("Ready");
    setTimeLeft(0);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      releaseWakeLock();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4 py-8 md:py-12 min-h-[80vh]">
      
      {/* Top Back Navigation */}
      <div className="w-full max-w-sm mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Home
        </Link>
      </div>

      <header className="text-center max-w-sm mb-8 space-y-2">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          Coherent Breathing
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          4 seconds in, 4 seconds out. Calms the nervous system.
        </p>
      </header>

      {/* Main Interactive Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl rounded-3xl w-full max-w-sm p-8 flex flex-col items-center justify-between min-h-[400px]">
        
        <div className="flex-1 flex items-center justify-center w-full my-8 relative">
          {/* Static Background Ring for Reference */}
          <div className="absolute w-24 h-24 rounded-full border-4 border-slate-100 dark:border-slate-800" />
          
          {/* Animated Breathing Ring */}
          <div
            className="rounded-full bg-blue-600 dark:bg-blue-500 transition-all ease-linear"
            style={{
              width: phase === "Inhale" ? "220px" : phase === "Exhale" ? "80px" : "100px",
              height: phase === "Inhale" ? "220px" : phase === "Exhale" ? "80px" : "100px",
              opacity: phase === "Inhale" ? 1 : phase === "Exhale" ? 0.5 : 0.85,
              transitionDuration: isRunning ? "4000ms" : "800ms", // Instantly snaps back if stopped
            }}
          />
        </div>

        <div className="text-center space-y-2 mb-4">
          <span className="text-sm font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase block">
            {phase}
          </span>
          <span className="text-6xl font-mono font-light text-slate-900 dark:text-white block tabular-nums">
            {timeLeft === 0 ? "00" : `0${timeLeft}`}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-sm mt-8">
        {!isRunning ? (
          <button
            onClick={startSession}
            className="w-full py-4 rounded-2xl font-bold text-white text-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 bg-emerald-600 hover:bg-emerald-700"
          >
            Start
          </button>
        ) : (
          <button
            onClick={stopSession}
            className="w-full py-4 rounded-2xl font-bold text-white text-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 bg-red-600 hover:bg-red-700"
          >
            Stop
          </button>
        )}
      </div>
    </div>
  );
}