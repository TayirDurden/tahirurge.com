import React from 'react';
import { Sparkles } from 'lucide-react';
import { Language } from '../../types/portal';

interface PortalNavbarProps {
  language: Language;
  onToggleLanguage: () => void;
  onScrollTo: (id: string) => void;
}

export const PortalNavbar: React.FC<PortalNavbarProps> = ({
  language,
  onToggleLanguage,
  onScrollTo,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#FAF9F6]/85 border-b border-neutral-200/70 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-neutral-900 text-[#FAF9F6] flex items-center justify-center font-serif text-base font-bold shadow-xs group-hover:scale-105 transition-transform">
            TÜ
          </div>
          <div>
            <span className="block text-base font-semibold tracking-tight text-neutral-900 font-serif">
              Mehmet Tahir Ürge
            </span>
            <span className="block text-[11px] uppercase tracking-widest text-neutral-500 font-medium">
              Portal
            </span>
          </div>
        </a>

        {/* Navigation & Language */}
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-neutral-600">
            <button
              onClick={() => onScrollTo('projects-section')}
              className="hover:text-neutral-900 transition-colors cursor-pointer"
            >
              {language === 'tr' ? 'Projeler' : 'Projects'}
            </button>
            <button
              onClick={() => onScrollTo('about-section')}
              className="hover:text-neutral-900 transition-colors cursor-pointer"
            >
              {language === 'tr' ? 'Hakkımda' : 'About'}
            </button>
          </nav>

          {/* Subdomain shortcut button */}
          <a
            href="https://novel.tahirurge.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold hover:bg-amber-100 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>novel.tahirurge.com</span>
          </a>

          {/* Language Switch */}
          <button
            onClick={onToggleLanguage}
            className="px-3 py-1.5 rounded-full border border-neutral-300 bg-white hover:bg-neutral-50 text-xs font-bold text-neutral-800 transition-all shadow-2xs cursor-pointer flex items-center gap-1"
          >
            <span>{language.toUpperCase()}</span>
            <span className="text-[10px] text-neutral-400 font-normal">
              ({language === 'tr' ? 'EN' : 'TR'})
            </span>
          </button>
        </div>

      </div>
    </header>
  );
};
