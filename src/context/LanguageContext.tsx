import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, LocalizedContent } from '../types';
import { bookData } from '../data/bookContent';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: LocalizedContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('tahirurge_lang');
    if (saved === 'tr' || saved === 'en') return saved;
    // Browser language detection
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('tr') ? 'tr' : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('tahirurge_lang', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const content = bookData[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
