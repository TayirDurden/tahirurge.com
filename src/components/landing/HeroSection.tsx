import React from 'react';
import { BookOpen, Clock, FileText, ArrowDown, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface HeroSectionProps {
  onOpenReader: (chapterId?: number) => void;
  onScrollToChapters: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenReader, onScrollToChapters }) => {
  const { language, setLanguage, content } = useLanguage();

  const handleReadInLanguage = (lang: 'tr' | 'en') => {
    setLanguage(lang);
    onOpenReader(1);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Subtle literary background aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text / Info */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/70 border border-amber-200/80 text-amber-900 text-xs font-semibold tracking-wide uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{content.meta.genre}</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.15] mb-4">
              {content.meta.title}
            </h1>

            {/* Subtitle */}
            <p className="font-serif italic text-xl sm:text-2xl text-neutral-600 font-normal mb-6">
              {content.meta.subtitle}
            </p>

            {/* Synopsis Lead */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl mb-8">
              {content.meta.synopsisLead}
            </p>

            {/* Key Metadata Stats */}
            <div className="flex flex-wrap items-center gap-6 py-4 border-y border-neutral-200/70 w-full mb-8 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-neutral-400" />
                <span>{content.ui.readingTime}: <strong className="text-neutral-900">{content.meta.readTime}</strong></span>
              </div>
              <div className="w-1 h-1 rounded-full bg-neutral-300" />
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-neutral-400" />
                <span>{content.ui.words}: <strong className="text-neutral-900">{content.meta.wordCount}</strong></span>
              </div>
              <div className="w-1 h-1 rounded-full bg-neutral-300" />
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-neutral-400" />
                <span><strong className="text-neutral-900">{content.chapters.length}</strong> {content.ui.chapters}</span>
              </div>
            </div>

            {/* Action Buttons (Dual Language Direct Links) */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => handleReadInLanguage('tr')}
                className={`px-6 py-3.5 rounded-xl font-medium text-sm transition-all shadow-sm hover:shadow active:scale-98 flex items-center gap-2 cursor-pointer ${
                  language === 'tr'
                    ? 'bg-neutral-900 hover:bg-neutral-800 text-white font-semibold'
                    : 'bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300'
                }`}
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Türkçe Oku</span>
              </button>

              <button
                onClick={() => handleReadInLanguage('en')}
                className={`px-6 py-3.5 rounded-xl font-medium text-sm transition-all shadow-sm hover:shadow active:scale-98 flex items-center gap-2 cursor-pointer ${
                  language === 'en'
                    ? 'bg-neutral-900 hover:bg-neutral-800 text-white font-semibold'
                    : 'bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300'
                }`}
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Read in English</span>
              </button>

              <button
                onClick={onScrollToChapters}
                className="px-5 py-3.5 rounded-xl text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80 text-sm font-medium transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>{content.ui.tableOfContents}</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Realistic 3D Literary Book Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group cursor-pointer" onClick={() => onOpenReader(1)}>
              {/* Soft Ambient Shadow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-600/20 to-neutral-900/10 rounded-2xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />

              {/* Book Cover Frame */}
              <div className="relative w-64 sm:w-72 md:w-80 aspect-[1/1.5] bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950 rounded-r-xl rounded-l-sm p-7 text-[#FAF9F6] shadow-2xl flex flex-col justify-between border-l-4 border-l-amber-600/60 border-r border-t border-b border-neutral-700 transform hover:-translate-y-2 transition-all duration-300">
                
                {/* Book Spine Texture Line */}
                <div className="absolute top-0 bottom-0 left-3 w-px bg-white/10" />

                {/* Top: Author & Tag */}
                <div className="relative z-10">
                  <span className="block text-[11px] uppercase tracking-[0.25em] text-amber-400/90 font-medium mb-1">
                    {content.meta.author}
                  </span>
                  <div className="w-8 h-px bg-amber-500/50 mb-4" />
                </div>

                {/* Center: Title & Ornament */}
                <div className="relative z-10 text-center my-auto">
                  <div className="w-12 h-12 mx-auto rounded-full border border-amber-400/30 flex items-center justify-center mb-4 text-amber-300">
                    <span className="font-serif italic text-xl">✦</span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold tracking-tight text-white mb-2 leading-tight">
                    {content.meta.title}
                  </h2>
                  <p className="font-serif italic text-xs text-neutral-400 tracking-wide">
                    {content.meta.subtitle}
                  </p>
                </div>

                {/* Bottom: Edition & Action prompt */}
                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10 text-[10px] text-neutral-400 uppercase tracking-widest">
                  <span>{content.meta.releaseDate}</span>
                  <span className="group-hover:text-amber-300 transition-colors flex items-center gap-1">
                    {content.ui.readNow} &rarr;
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
