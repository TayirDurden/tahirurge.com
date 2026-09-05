import React from 'react';
import { ArrowDown, ExternalLink, BookOpen, User } from 'lucide-react';
import { PortalContent } from '../../types/portal';
import { UrgeIQLogo } from '../common/UrgeIQLogo';

interface PortalHeroProps {
  content: PortalContent;
  onScrollToUrgeIQ: () => void;
  onScrollToHobby: () => void;
  onScrollToAbout: () => void;
}

export const PortalHero: React.FC<PortalHeroProps> = ({
  content,
  onScrollToUrgeIQ,
  onScrollToHobby,
  onScrollToAbout,
}) => {
  const { hero, urgeiqSection } = content;

  return (
    <section className="relative overflow-hidden pt-14 pb-16 md:pt-20 md:pb-24 border-b border-neutral-200/60">
      
      {/* Subtle ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[380px] bg-gradient-to-b from-indigo-100/40 via-purple-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Live Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-neutral-200/80 shadow-2xs text-[11px] font-semibold text-neutral-700 mb-6 backdrop-blur-xs tracking-wide">
          <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
          <span>{hero.badge}</span>
          <span className="text-neutral-300">•</span>
          <span className="text-indigo-600 font-medium">{hero.liveBadge}</span>
        </div>

        {/* Brand Icon & Heading */}
        <div className="flex flex-col items-center justify-center mb-4">
          <UrgeIQLogo size={54} withBg={true} className="mb-4 shadow-sm hover:scale-105 transition-transform" />
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.1]">
            {hero.title}
          </h1>
        </div>

        {/* Lead */}
        <p className="font-serif text-xl sm:text-2xl text-neutral-700 font-light leading-relaxed max-w-2xl mx-auto mb-4">
          {hero.lead}
        </p>

        {/* Sublead */}
        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-xl mx-auto mb-8 font-sans">
          {hero.sublead}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          
          {/* Primary Action: Direct App Link */}
          <a
            href={urgeiqSection.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold transition-all shadow-xs hover:shadow-md active:scale-98 flex items-center gap-2 cursor-pointer"
          >
            <span>{hero.ctaPrimary}</span>
            <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
          </a>

          {/* Secondary Action: Architecture / Features */}
          <button
            onClick={onScrollToUrgeIQ}
            className="px-5 py-3 rounded-xl bg-white hover:bg-neutral-50 text-neutral-700 border border-neutral-300 text-xs font-semibold transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
          >
            <span>{hero.ctaSecondary}</span>
            <ArrowDown className="w-3.5 h-3.5 text-neutral-400" />
          </button>

          {/* Hobby Corner Jump */}
          <button
            onClick={onScrollToHobby}
            className="px-4 py-3 rounded-xl bg-amber-50/70 hover:bg-amber-100/70 text-amber-900 border border-amber-200/80 text-xs font-medium transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            <span>{content.nav.hobbyCorner}</span>
          </button>

          {/* About Section Jump */}
          <button
            onClick={onScrollToAbout}
            className="px-4 py-3 rounded-xl bg-white hover:bg-neutral-50 text-neutral-600 border border-neutral-200 text-xs font-medium transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
          >
            <User className="w-3.5 h-3.5 text-neutral-400" />
            <span>{content.nav.about}</span>
          </button>

        </div>

        {/* Highlight Stats Bar */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs py-3 px-6 rounded-2xl bg-white/70 border border-neutral-200/70 shadow-2xs">
          {hero.highlights.map((item, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <span className="text-neutral-300 hidden sm:inline">•</span>}
              <div className="flex items-center gap-2 text-neutral-600 font-sans">
                <span className="text-neutral-400 text-[11px] font-medium uppercase tracking-wider">{item.label}:</span>
                <span className="font-semibold text-neutral-800">{item.value}</span>
              </div>
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};
