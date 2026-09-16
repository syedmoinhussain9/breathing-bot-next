"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type LanguageContextType = {
  currentLangCode: string;
  currentLangName: string;
  setLanguage: (code: string, name: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  currentLangCode: "en",
  currentLangName: "English",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLangCode, setCurrentLangCode] = useState("en");
  const [currentLangName, setCurrentLangName] = useState("English");

  useEffect(() => {
    const savedCode = localStorage.getItem("breathing_bot_lang_code");
    const savedName = localStorage.getItem("breathing_bot_lang_name");
    if (savedCode && savedName) {
      setCurrentLangCode(savedCode);
      setCurrentLangName(savedName);
    }
  }, []);

  const setLanguage = (code: string, name: string) => {
    setCurrentLangCode(code);
    setCurrentLangName(name);
    localStorage.setItem("breathing_bot_lang_code", code);
    localStorage.setItem("breathing_bot_lang_name", name);
  };

  return (
    <LanguageContext.Provider value={{ currentLangCode, currentLangName, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);