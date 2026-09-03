import React from 'react';
import { Feather, ArrowUp } from 'lucide-react';
import { PortalContent } from '../../types/portal';

interface PortalFooterProps {
  content: PortalContent;
}

export const PortalFooter: React.FC<PortalFooterProps> = ({ content }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-200/80 bg-neutral-900 text-neutral-300 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand & Quote */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-amber-400">
              <Feather className="w-4 h-4" />
            </div>
            <span className="font-serif text-lg font-bold text-white">
              {content.brand.name}
            </span>
          </div>
          <p className="text-xs text-neutral-400 max-w-sm">
            {content.brand.title} &bull; {content.brand.location}
          </p>
        </div>

        {/* Subdomain Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-medium">
          <a
            href="https://novel.tahirurge.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
          >
            <span>novel.tahirurge.com</span>
          </a>
          <span className="text-neutral-700">•</span>
          <a
            href="https://pnl.tahirurge.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-300 transition-colors flex items-center gap-1.5"
          >
            <span>pnl.tahirurge.com</span>
          </a>
        </div>

        {/* Copyright & Scroll to top */}
        <div className="flex items-center gap-4 text-xs text-neutral-500">
          <span>&copy; {currentYear} {content.brand.name}. {content.footer.copyright}</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors cursor-pointer"
            title="Yukarı Çık"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
