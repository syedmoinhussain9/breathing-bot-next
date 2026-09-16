import Link from "next/link";
import { Wind, HeartPulse, Waves } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 max-w-4xl mx-auto min-h-[80vh]">
      {/* Header Section */}
      <div className="text-center mb-12 space-y-3">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
          Welcome to Breathing Bot
        </h1>
        <p className="text-slate-600 text-lg max-w-md mx-auto">
          Free breathing exercises, coherent breathing, and meditation — all in one place.
        </p>
      </div>

      {/* Three Feature Circles */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full">
        
        {/* Guided Breathing */}
        <Link href="/guided" className="group focus:outline-none" aria-label="Guided Breathing — free breathing exercises">
          <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-blue-600 text-white flex flex-col items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-105 group-focus-visible:ring-4 group-focus-visible:ring-slate-900">
            <Wind className="w-10 h-10 sm:w-12 sm:h-12 mb-2" strokeWidth={2} />
            <span className="font-semibold text-base sm:text-lg px-2 text-center">Guided Breathing</span>
            <span className="text-white/80 text-xs sm:text-sm mt-1">Guest</span>
          </div>
        </Link>

        {/* Coherent Breathing */}
        <Link href="/panicroom" className="group focus:outline-none" aria-label="Coherent Breathing — panic relief">
          <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-red-600 text-white flex flex-col items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-105 group-focus-visible:ring-4 group-focus-visible:ring-slate-900">
            <HeartPulse className="w-10 h-10 sm:w-12 sm:h-12 mb-2" strokeWidth={2} />
            <span className="font-semibold text-base sm:text-lg px-2 text-center">Coherent Breathing</span>
            <span className="text-white/80 text-xs sm:text-sm mt-1">Panic Relief</span>
          </div>
        </Link>

        {/* Meditation Room */}
        <Link href="/meditate" className="group focus:outline-none" aria-label="Meditation Room — brown noise">
          <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-emerald-600 text-white flex flex-col items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-105 group-focus-visible:ring-4 group-focus-visible:ring-slate-900">
            <Waves className="w-10 h-10 sm:w-12 sm:h-12 mb-2" strokeWidth={2} />
            <span className="font-semibold text-base sm:text-lg px-2 text-center">Meditation Room</span>
            <span className="text-white/80 text-xs sm:text-sm mt-1">Brown Noise</span>
          </div>
        </Link>

      </div>
    </div>
  );
}