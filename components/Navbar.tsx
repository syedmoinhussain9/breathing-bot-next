"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ChevronDown, Globe, Moon, Sun, Wind } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("English");

  const toolsRef = useRef<HTMLDivElement>(null);
  const learnRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
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
    { name: "Hindi (हिन्दी)", code: "hi" },
    { name: "Bengali (বাংলা)", code: "bn" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <span className="text-2xl">🍃</span>
              Breathing Bot
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* Tools (Breathing) Dropdown */}
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

            {/* Language Selector Dropdown */}
            <div className="relative" ref={langRef}>
              <button 
                onClick={() => { setLangOpen(!langOpen); setToolsOpen(false); setLearnOpen(false); }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              >
                <Globe className="w-4 h-4" />
                {currentLang}
                <ChevronDown className={`w-4 h-4 transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>
              
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg py-2 overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.name.split(" ")[0]);
                        setLangOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      {lang.name}
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