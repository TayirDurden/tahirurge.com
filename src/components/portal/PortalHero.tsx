import React from 'react';
import { ArrowDown, Sparkles, BookOpen, LineChart, Code2 } from 'lucide-react';
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
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 border-b border-neutral-200/60">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-amber-100/40 via-indigo-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-neutral-200/90 shadow-2xs text-xs font-semibold text-neutral-800 mb-8 backdrop-blur-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>{content.hero.badge}</span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.15] mb-6">
          {content.hero.greeting}
        </h1>

        {/* Lead Text */}
        <p className="font-serif text-xl sm:text-2xl text-neutral-700 font-normal leading-snug max-w-2xl mx-auto mb-6">
          {content.hero.lead}
        </p>

        {/* Sublead */}
        <p className="text-sm sm:text-base text-neutral-500 leading-relaxed max-w-xl mx-auto mb-10">
          {content.hero.sublead}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
          <button
            onClick={onScrollToProjects}
            className="px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-semibold transition-all shadow-sm hover:shadow active:scale-98 flex items-center gap-2 cursor-pointer"
          >
            <span>{content.hero.ctaProjects}</span>
            <ArrowDown className="w-4 h-4 text-amber-400" />
          </button>

          <button
            onClick={onScrollToAbout}
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-50 text-neutral-700 border border-neutral-300 text-sm font-semibold transition-all shadow-2xs cursor-pointer"
          >
            <span>{content.hero.ctaAbout}</span>
          </button>
        </div>

        {/* Quick Micro-Badges */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-500 font-medium py-3 px-6 rounded-2xl bg-white/60 border border-neutral-200/60 shadow-2xs">
          <div className="flex items-center gap-1.5 text-amber-900">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>Zero Sum City</span>
          </div>
          <span className="text-neutral-300">•</span>
          <div className="flex items-center gap-1.5 text-indigo-900">
            <LineChart className="w-4 h-4 text-indigo-600" />
            <span>Murat Finansal PnL</span>
          </div>
          <span className="text-neutral-300">•</span>
          <div className="flex items-center gap-1.5 text-emerald-900">
            <Code2 className="w-4 h-4 text-emerald-600" />
            <span>Yapay Zeka & Lab</span>
          </div>
        </div>

      </div>
    </section>
  );
};
