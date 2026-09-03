import React from 'react';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ChapterListProps {
  onOpenReader: (chapterId: number) => void;
}

export const ChapterList: React.FC<ChapterListProps> = ({ onOpenReader }) => {
  const { content } = useLanguage();

  return (
    <section id="chapters-section" className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-14">
        <span className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2 block">
          {content.meta.title}
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-3">
          {content.ui.tableOfContents}
        </h2>
        <p className="text-sm text-neutral-500 max-w-md mx-auto">
          Her bölüm, içsel labirentin farklı bir durağına kapı aralıyor.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.chapters.map((chapter) => (
          <div
            key={chapter.id}
            onClick={() => onOpenReader(chapter.id)}
            className="group bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-xs hover:shadow-md hover:border-amber-400/80 transition-all duration-200 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-4 pb-3 border-b border-neutral-100">
                <span className="font-semibold uppercase tracking-wider text-amber-800">
                  {content.ui.chapterNumber(chapter.id)}
                </span>
                <span className="flex items-center gap-1 text-neutral-500">
                  <Clock className="w-3.5 h-3.5" />
                  {chapter.readTime}
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-neutral-900 mb-2 group-hover:text-amber-800 transition-colors">
                {chapter.title}
              </h3>

              {chapter.subtitle && (
                <p className="text-xs italic text-neutral-500 mb-4 font-serif">
                  {chapter.subtitle}
                </p>
              )}

              <p className="text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                {chapter.preview}
              </p>
            </div>

            <div className="pt-6 mt-4 flex items-center justify-between text-xs font-semibold text-neutral-800 group-hover:text-amber-700 transition-colors border-t border-neutral-50">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                {content.ui.readNow}
              </span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
