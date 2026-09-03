import React from 'react';
import { BookOpen } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface NavbarProps {
  onOpenReader: (chapterId?: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReader }) => {
  const { language, setLanguage, content } = useLanguage();

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FAF9F6]/85 border-b border-neutral-200/60 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-neutral-900 text-[#FAF9F6] flex items-center justify-center font-serif text-lg font-bold shadow-sm group-hover:scale-105 transition-transform">
            TÜ
          </div>
          <div>
            <span className="block text-lg font-semibold tracking-tight text-neutral-900 font-serif">
              Tahir Ürge
            </span>
            <span className="block text-xs uppercase tracking-widest text-neutral-500 font-medium">
              Novella
            </span>
          </div>
        </a>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Switcher */}
          <div className="flex items-center bg-neutral-100 p-1 rounded-full border border-neutral-200/80 text-xs font-semibold text-neutral-600">
            <button
              onClick={() => setLanguage('tr')}
              className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                language === 'tr'
                  ? 'bg-white text-neutral-900 shadow-xs font-bold'
                  : 'hover:text-neutral-900'
              }`}
            >
              <span>TR</span>
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                language === 'en'
                  ? 'bg-white text-neutral-900 shadow-xs font-bold'
                  : 'hover:text-neutral-900'
              }`}
            >
              <span>EN</span>
            </button>
          </div>

          {/* Quick Read Button */}
          <button
            onClick={() => onOpenReader(1)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-[#FAF9F6] text-sm font-medium transition-all shadow-sm hover:shadow active:scale-98 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-amber-300" />
            <span className="hidden sm:inline">{content.ui.readNow}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
