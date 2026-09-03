import React, { createContext, useContext, useState, useEffect } from 'react';
import { ReadingTheme, FontSize, FontFamily, ReaderSettings } from '../types';

interface ReaderContextType {
  settings: ReaderSettings;
  setTheme: (theme: ReadingTheme) => void;
  setFontSize: (size: FontSize) => void;
  setFontFamily: (font: FontFamily) => void;
  setLineSpacing: (spacing: 'normal' | 'relaxed' | 'loose') => void;
  activeChapterId: number;
  setActiveChapterId: (id: number) => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
}

const defaultSettings: ReaderSettings = {
  theme: 'paper',
  fontSize: 'md',
  fontFamily: 'serif',
  lineSpacing: 'relaxed',
};

const ReaderContext = createContext<ReaderContextType | undefined>(undefined);

export const ReaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<ReaderSettings>(() => {
    try {
      const saved = localStorage.getItem('tahirurge_reader_settings');
      if (saved) return { ...defaultSettings, ...JSON.parse(saved) };
    } catch {
      // ignore
    }
    return defaultSettings;
  });

  const [activeChapterId, setActiveChapterId] = useState<number>(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem('tahirurge_reader_settings', JSON.stringify(settings));
    } catch {
      // ignore
    }
  }, [settings]);

  const setTheme = (theme: ReadingTheme) => {
    setSettings((prev) => ({ ...prev, theme }));
  };

  const setFontSize = (fontSize: FontSize) => {
    setSettings((prev) => ({ ...prev, fontSize }));
  };

  const setFontFamily = (fontFamily: FontFamily) => {
    setSettings((prev) => ({ ...prev, fontFamily }));
  };

  const setLineSpacing = (lineSpacing: 'normal' | 'relaxed' | 'loose') => {
    setSettings((prev) => ({ ...prev, lineSpacing }));
  };

  return (
    <ReaderContext.Provider
      value={{
        settings,
        setTheme,
        setFontSize,
        setFontFamily,
        setLineSpacing,
        activeChapterId,
        setActiveChapterId,
        isDrawerOpen,
        setIsDrawerOpen,
      }}
    >
      {children}
    </ReaderContext.Provider>
  );
};

export const useReader = (): ReaderContextType => {
  const ctx = useContext(ReaderContext);
  if (!ctx) throw new Error('useReader must be used within ReaderProvider');
  return ctx;
};
