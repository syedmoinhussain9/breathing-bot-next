"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { 
  Menu, X, Wind, HeartPulse, Waves, 
  Box, Target, Activity, Globe, Leaf, Sun, Moon 
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by mounting the theme toggle only on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-md transition-colors duration-300 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 text-lg font-bold hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <Leaf className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
            <span>Breathing Bot</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            
            {/* Breathing Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors py-4 font-medium">
                Breathing ▾
              </button>
              <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white dark:bg-slate-800 rounded-md shadow-lg py-2 w-56 z-50 border border-slate-200 dark:border-slate-700">
                <Link href="/session" className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm"><Wind className="w-4 h-4"/> Guided Breathing</Link>
                <Link href="/panicroom" className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm"><HeartPulse className="w-4 h-4"/> Coherent Breathing</Link>
                <Link href="/meditate" className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm"><Waves className="w-4 h-4"/> Meditation Room</Link>
              </div>
            </div>

            {/* Learn Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors py-4 font-medium">
                Learn ▾
              </button>
              <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white dark:bg-slate-800 rounded-md shadow-lg py-2 w-64 z-50 border border-slate-200 dark:border-slate-700">
                <Link href="/learn/box-breathing" className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm"><Box className="w-4 h-4"/> Box Breathing</Link>
                <Link href="/learn/1-4-2-breathing" className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm"><Wind className="w-4 h-4"/> 1-4-2 Breathing</Link>
                <Link href="/learn/tactical-breathing" className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm"><Target className="w-4 h-4"/> Tactical Breathing</Link>
                <Link href="/learn/belly-breathing" className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm"><Activity className="w-4 h-4"/> Belly Breathing</Link>
                <div className="border-t border-slate-200 dark:border-slate-700 my-1"></div>
                <Link href="/learn/noise-guide" className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm"><Waves className="w-4 h-4"/> Noise Guide</Link>
              </div>
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
              </button>
            )}

            {/* Language Selector */}
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-300 dark:border-slate-700">
              <Globe className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              <select className="bg-transparent text-sm text-slate-900 dark:text-white outline-none cursor-pointer">
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="bn">Bengali</option>
              </select>
            </div>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
          <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
            
            {/* Mobile Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center gap-2 pl-4 py-2 text-sm hover:text-blue-500 dark:hover:text-blue-400"
              >
                {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
                Toggle Theme
              </button>
            )}

            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-2">Breathing</span>
            <Link href="/session" className="pl-4 py-2 text-sm hover:text-blue-500 dark:hover:text-blue-400">Guided Breathing</Link>
            <Link href="/panicroom" className="pl-4 py-2 text-sm hover:text-blue-500 dark:hover:text-blue-400">Coherent Breathing</Link>
            
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-4">Learn</span>
            <Link href="/learn/box-breathing" className="pl-4 py-2 text-sm hover:text-blue-500 dark:hover:text-blue-400">Box Breathing</Link>
            <Link href="/learn/1-4-2-breathing" className="pl-4 py-2 text-sm hover:text-blue-500 dark:hover:text-blue-400">1-4-2 Breathing</Link>
          </div>
        </div>
      )}
    </nav>
  );
}