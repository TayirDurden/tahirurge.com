import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Menu, 
  Sun, 
  Moon, 
  Coffee, 
  Share2, 
  Check 
} from 'lucide-react';
import { useReader } from '../../context/ReaderContext';
import { useLanguage } from '../../context/LanguageContext';
import { ReadingTheme, FontSize } from '../../types';

interface ReaderControlsProps {
  onBackToHome: () => void;
  chapterTitle: string;
}

export const ReaderControls: React.FC<ReaderControlsProps> = ({
  onBackToHome,
  chapterTitle
}) => {
  const { 
    settings, 
    setTheme, 
    setFontSize, 
    setFontFamily, 
    setIsDrawerOpen 
  } = useReader();
  const { language, setLanguage, content } = useLanguage();
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // Calculate reading progress as page scrolls
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const currentProgress = (totalScroll / windowHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // fallback
    }
  };

  const nextFontSize = () => {
    const order: FontSize[] = ['sm', 'md', 'lg', 'xl'];
    const idx = order.indexOf(settings.fontSize);
    setFontSize(order[(idx + 1) % order.length]);
  };

  const getThemeClass = (t: ReadingTheme) => {
    switch (t) {
      case 'dark':
        return 'bg-[#18181B] text-[#D4D4D8] border-[#27272A]';
      case 'sepia':
        return 'bg-[#EDE4D0] text-[#3D3020] border-[#D8CCB5]';
      default:
        return 'bg-white text-neutral-800 border-neutral-200';
    }
  };

  return (
    <header className={`sticky top-0 z-40 w-full backdrop-blur-md border-b transition-colors duration-200 ${getThemeClass(settings.theme)}`}>
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-all duration-150" style={{ width: `${scrollProgress}%` }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Back to Home + Chapters Drawer Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={onBackToHome}
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center gap-1 text-xs font-semibold cursor-pointer"
            title={content.ui.backToHome}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{content.ui.backToHome}</span>
          </button>

          <button
            onClick={() => setIsDrawerOpen(true)}
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
            title={content.ui.tableOfContents}
          >
            <Menu className="w-4 h-4" />
            <span className="hidden md:inline">{content.ui.chapters}</span>
          </button>
        </div>

        {/* Center: Current Chapter Title */}
        <div className="text-center truncate px-2 max-w-[200px] sm:max-w-[320px]">
          <span className="font-serif text-xs sm:text-sm font-bold truncate block">
            {chapterTitle}
          </span>
        </div>

        {/* Right: Reading Customizer Bar */}
        <div className="flex items-center gap-1 sm:gap-2">
          
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-xs font-bold uppercase cursor-pointer"
            title="Dili Değiştir / Switch Language"
          >
            {language === 'tr' ? 'EN' : 'TR'}
          </button>

          {/* Theme Switcher Toggle */}
          <div className="flex items-center rounded-lg border border-black/10 dark:border-white/10 p-0.5">
            <button
              onClick={() => setTheme('paper')}
              className={`p-1.5 rounded-md transition-all cursor-pointer ${settings.theme === 'paper' ? 'bg-amber-100 text-neutral-900 shadow-xs' : 'opacity-60 hover:opacity-100'}`}
              title={content.ui.themePaper}
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setTheme('sepia')}
              className={`p-1.5 rounded-md transition-all cursor-pointer ${settings.theme === 'sepia' ? 'bg-[#E2D5BE] text-[#3D3020] shadow-xs' : 'opacity-60 hover:opacity-100'}`}
              title={content.ui.themeSepia}
            >
              <Coffee className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`p-1.5 rounded-md transition-all cursor-pointer ${settings.theme === 'dark' ? 'bg-neutral-700 text-white shadow-xs' : 'opacity-60 hover:opacity-100'}`}
              title={content.ui.themeDark}
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Font Size Toggle */}
          <button
            onClick={nextFontSize}
            className="px-2 py-1.5 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 text-xs font-bold transition-colors cursor-pointer flex items-center gap-0.5"
            title={`${content.ui.fontSize}: ${settings.fontSize.toUpperCase()}`}
          >
            <span>A</span>
            <span className="text-[10px] text-amber-500 font-normal">
              {settings.fontSize === 'sm' ? '1' : settings.fontSize === 'md' ? '2' : settings.fontSize === 'lg' ? '3' : '4'}
            </span>
          </button>

          {/* Font Family Toggle (Serif vs Sans) */}
          <button
            onClick={() => setFontFamily(settings.fontFamily === 'serif' ? 'sans' : 'serif')}
            className="p-1.5 sm:px-2 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 text-xs font-semibold transition-colors cursor-pointer"
            title={settings.fontFamily === 'serif' ? 'Serif Yazı Tipi' : 'Sans-Serif Yazı Tipi'}
          >
            <span className={settings.fontFamily === 'serif' ? 'font-serif font-bold' : 'font-sans font-bold'}>
              {settings.fontFamily === 'serif' ? 'Serif' : 'Sans'}
            </span>
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-xs cursor-pointer relative"
            title={content.ui.share}
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
          </button>

        </div>

      </div>
    </header>
  );
};
