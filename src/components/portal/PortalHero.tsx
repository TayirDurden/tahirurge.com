import React from 'react';
import { ArrowDown, BookOpen, LineChart, Code2 } from 'lucide-react';
import { PortalContent } from '../../types/portal';

interface PortalHeroProps {
  content: PortalContent;
  onScrollToProjects: () => void;
  onScrollToAbout: () => void;
}

export const PortalHero: React.FC<PortalHeroProps> = ({
  content,
  onScrollToProjects,
  onScrollToAbout,
}) => {
  return (
    <section className="relative overflow-hidden pt-16 pb-16 md:pt-24 md:pb-24 border-b border-neutral-200/50">
      {/* Subtle, soft ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-b from-amber-100/30 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Subtle Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-neutral-200/80 shadow-2xs text-[11px] font-medium text-neutral-600 mb-6 backdrop-blur-xs tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
          <span>{content.hero.badge}</span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.1] mb-5">
          {content.hero.greeting}
        </h1>

        {/* Lead */}
        <p className="font-serif text-xl sm:text-2xl text-neutral-700 font-light leading-relaxed max-w-2xl mx-auto mb-4">
          {content.hero.lead}
        </p>

        {/* Sublead - Concise */}
        <p className="text-sm sm:text-base text-neutral-500 leading-relaxed max-w-xl mx-auto mb-8 font-sans font-normal">
          {content.hero.sublead}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={onScrollToProjects}
            className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold transition-all shadow-xs hover:shadow active:scale-98 flex items-center gap-2 cursor-pointer"
          >
            <span>{content.hero.ctaProjects}</span>
            <ArrowDown className="w-3.5 h-3.5 text-amber-400" />
          </button>

          <button
            onClick={onScrollToAbout}
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-neutral-50 text-neutral-700 border border-neutral-300 text-xs font-semibold transition-all shadow-2xs cursor-pointer"
          >
            <span>{content.hero.ctaAbout}</span>
          </button>
        </div>

        {/* Minimal Ecosystem Footprint */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-neutral-500 font-medium py-2.5 px-5 rounded-xl bg-white/60 border border-neutral-200/60 shadow-2xs">
          <div className="flex items-center gap-1.5 text-neutral-700">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>Zero Sum City</span>
          </div>
          <span className="text-neutral-300">•</span>
          <div className="flex items-center gap-1.5 text-neutral-700">
            <LineChart className="w-3.5 h-3.5 text-indigo-600" />
            <span>UrgeIQ</span>
          </div>
          <span className="text-neutral-300">•</span>
          <div className="flex items-center gap-1.5 text-neutral-700">
            <Code2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>UrgeIQ Labs</span>
          </div>
        </div>

      </div>
    </section>
  );
};
