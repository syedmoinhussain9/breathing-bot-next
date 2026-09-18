"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ChevronDown, Volume2, Moon, Sun } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const { currentLangName, setLanguage } = useLanguage();

  const toolsRef = useRef<HTMLDivElement>(null);
  const learnRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    function handleClickOutside(event: MouseEvent) {
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) setToolsOpen(false);
      if (learnRef.current && !learnRef.current.contains(event.target as Node)) setLearnOpen(false);
      if (langRef.current && !langRef.current.contains(event.target as Node)) setLangOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toolsLinks = [
    { name: "Guided Breathing", path: "/guided" },
    { name: "Coherent Breathing (Panic Room)", path: "/panicroom" },
    { name: "Meditation Room", path: "/meditate" },
    { name: "Sleep Sanctuary", path: "/sleep" }, 
  ];

  const learnLinks = [
    { name: "Box Breathing", path: "/learn/box-breathing" },
    { name: "1-4-2 Breathing", path: "/learn/1-4-2-breathing" },
    { name: "Tactical Breathing", path: "/learn/tactical-breathing" },
    { name: "Belly Breathing", path: "/learn/belly-breathing" },
    { name: "Alternate Nostril", path: "/learn/alternate-nostril-breathing" },
    { name: "Coherent Breathing", path: "/learn/coherent-breathing" },
    { name: "Extended Cardiac Exhale", path: "/learn/cardiac-ext-breathing" },
    { name: "Physiological Sigh", path: "/learn/physio-sigh" },
    { name: "Pursed-Lip Breathing", path: "/learn/pursed-lip-breathing" },
    { name: "Noise Guide", path: "/learn/noise-guide" },
  ];

  const languages = [
    { name: "English", code: "en" },
    { name: "Arabic", code: "ar" },
    { name: "Assamese", code: "as" },
    { name: "Bengali", code: "bn" },
    { name: "Chinese", code: "zh-hans" },
    { name: "French", code: "fr" },
    { name: "German", code: "de" },
    { name: "Gujarati", code: "gu" },
    { name: "Hebrew", code: "he" },
    { name: "Hindi", code: "hi" },
    { name: "Indonesian", code: "id" },
    { name: "Italian", code: "it" },
    { name: "Japanese", code: "ja" },
    { name: "Kannada", code: "kn" },
    { name: "Korean", code: "ko" },
    { name: "Malayalam", code: "ml" },
    { name: "Marathi", code: "mr" },
    { name: "Portuguese", code: "pt" },
    { name: "Russian", code: "ru" },
    { name: "Spanish", code: "es" },
    { name: "Swedish", code: "sv" },
    { name: "Tamil", code: "ta" },
    { name: "Telugu", code: "te" },
    { name: "Urdu", code: "ur" },
    { name: "Vietnamese", code: "vi" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <span className="text-2xl">🍃</span>
              Breathing Bot
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            
            {/* Tools Dropdown */}
            <div className="relative" ref={toolsRef}>
              <button 
                onClick={() => { setToolsOpen(!toolsOpen); setLearnOpen(false); setLangOpen(false); }}
                className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors focus:outline-none"
              >
                Breathing <ChevronDown className={`w-4 h-4 transition-transform ${toolsOpen ? "rotate-180" : ""}`} />
              </button>
              
              {toolsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg py-2 overflow-hidden z-50">
                  {toolsLinks.map((link) => (
                    <Link 
                      key={link.path} 
                      href={link.path}
                      onClick={() => setToolsOpen(false)}
                      className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Learn Dropdown */}
            <div className="relative" ref={learnRef}>
              <button 
                onClick={() => { setLearnOpen(!learnOpen); setToolsOpen(false); setLangOpen(false); }}
                className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors focus:outline-none"
              >
                Learn <ChevronDown className={`w-4 h-4 transition-transform ${learnOpen ? "rotate-180" : ""}`} />
              </button>
              
              {learnOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg py-2 overflow-hidden z-50 max-h-[70vh] overflow-y-auto">
                  {learnLinks.map((link) => (
                    <Link 
                      key={link.path} 
                      href={link.path}
                      onClick={() => setLearnOpen(false)}
                      className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {mounted && theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Audio Voice Language Selector Dropdown */}
            <div className="relative" ref={langRef}>
              <button 
                onClick={() => { setLangOpen(!langOpen); setToolsOpen(false); setLearnOpen(false); }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus:outline-none"
                title="Select spoken audio voiceover language"
              >
                <Volume2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="flex flex-col text-left leading-tight">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Voice Audio</span>
                  <span>{currentLangName}</span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ml-1 ${langOpen ? "rotate-180" : ""}`} />
              </button>
              
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 w-52 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg py-2 overflow-hidden z-50 max-h-[70vh] overflow-y-auto">
                  <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 mb-1">
                    Select Audio Language
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code, lang.name);
                        setLangOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-between"
                    >
                      <span>{lang.name}</span>
                      {currentLangName === lang.name && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}