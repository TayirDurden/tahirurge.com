import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Language, PortalContent } from '../../types/portal';
import { UrgeIQLogo } from '../common/UrgeIQLogo';

interface PortalNavbarProps {
  language: Language;
  content: PortalContent;
  onToggleLanguage: () => void;
  onScrollTo: (id: string) => void;
}

export const PortalNavbar: React.FC<PortalNavbarProps> = ({
  language,
  content,
  onToggleLanguage,
  onScrollTo,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#FAF9F6]/90 border-b border-neutral-200/60 transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <UrgeIQLogo size={32} withBg={true} className="group-hover:scale-105 transition-transform duration-200 shadow-2xs" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-neutral-900 font-sans">
              Mehmet Tahir Ürge
            </span>
            <span className="text-[10px] text-neutral-400 font-medium tracking-wide">
              UrgeIQ & Studio
            </span>
          </div>
        </a>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          <nav className="flex items-center gap-4 sm:gap-6 text-xs font-medium text-neutral-600">
            <button
              onClick={() => onScrollTo('urgeiq-section')}
              className="hover:text-indigo-600 transition-colors cursor-pointer font-semibold text-neutral-800"
            >
              {content.nav.urgeiq}
            </button>
            <button
              onClick={() => onScrollTo('hobby-corner')}
              className="hover:text-amber-800 transition-colors cursor-pointer"
            >
              {content.nav.hobbyCorner}
            </button>
            <button
              onClick={() => onScrollTo('about-section')}
              className="hover:text-neutral-950 transition-colors cursor-pointer"
            >
              {content.nav.about}
            </button>
          </nav>

          <div className="h-4 w-px bg-neutral-200 hidden sm:block" />

          {/* Primary Action Button to Live App */}
          <a
            href="https://pnl.tahirurge.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold transition-all shadow-2xs hover:shadow-xs active:scale-98"
          >
            <span>{content.nav.openApp}</span>
            <ArrowUpRight className="w-3 h-3 text-indigo-300" />
          </a>

          {/* Language Switch */}
          <button
            onClick={onToggleLanguage}
            className="px-2.5 py-1 rounded-full border border-neutral-300 bg-white hover:bg-neutral-50 text-xs font-semibold text-neutral-800 transition-all shadow-2xs cursor-pointer flex items-center gap-1"
            title="Dili Değiştir / Switch Language"
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
