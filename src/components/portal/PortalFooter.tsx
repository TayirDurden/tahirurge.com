import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PortalContent } from '../../types/portal';
import { UrgeIQLogo } from '../common/UrgeIQLogo';

interface PortalFooterProps {
  content: PortalContent;
}

export const PortalFooter: React.FC<PortalFooterProps> = ({ content }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-200/70 bg-[#FAF9F6] text-neutral-600 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <UrgeIQLogo size={24} withBg={true} className="rounded-lg shadow-2xs" />
          <span className="text-xs font-semibold text-neutral-900 font-sans">
            {content.brand.name}
          </span>
          <span className="text-neutral-300">•</span>
          <span className="text-[11px] text-neutral-400">
            {content.brand.title}
          </span>
        </div>

        {/* Subdomain Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-neutral-500 font-medium">
          <a
            href="https://novel.tahirurge.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            novel.tahirurge.com
          </a>
          <span className="text-neutral-300">•</span>
          <a
            href="https://pnl.tahirurge.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            pnl.tahirurge.com (UrgeIQ)
          </a>
        </div>

        {/* Copyright & Scroll to top */}
        <div className="flex items-center gap-3 text-[11px] text-neutral-400">
          <span>&copy; {currentYear} {content.brand.name}</span>
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer shadow-2xs"
            title="Yukarı Çık"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
