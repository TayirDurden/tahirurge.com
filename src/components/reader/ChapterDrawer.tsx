import React from 'react';
import { X, Clock } from 'lucide-react';
import { useReader } from '../../context/ReaderContext';
import { useLanguage } from '../../context/LanguageContext';

interface ChapterDrawerProps {
  onSelectChapter: (chapterId: number) => void;
}

export const ChapterDrawer: React.FC<ChapterDrawerProps> = ({ onSelectChapter }) => {
  const { isDrawerOpen, setIsDrawerOpen, activeChapterId, settings } = useReader();
  const { content } = useLanguage();

  if (!isDrawerOpen) return null;

  const isDark = settings.theme === 'dark';
  const isSepia = settings.theme === 'sepia';

  const drawerBg = isDark ? 'bg-[#18181B] text-[#D4D4D8] border-neutral-800' : isSepia ? 'bg-[#F2EAD8] text-[#3D3020] border-[#D8CCB5]' : 'bg-white text-neutral-900 border-neutral-200';

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={() => setIsDrawerOpen(false)}
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
      />

      {/* Slide-over Content */}
      <div className={`relative w-full max-w-sm h-full shadow-2xl p-6 flex flex-col justify-between border-l z-10 transition-transform ${drawerBg}`}>
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-black/10 dark:border-white/10 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-600 font-bold block mb-1">
                {content.meta.title}
              </span>
              <h3 className="font-serif text-xl font-bold">
                {content.ui.tableOfContents}
              </h3>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chapter Links */}
          <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-180px)] pr-1">
            {content.chapters.map((chapter) => {
              const isActive = chapter.id === activeChapterId;

              return (
                <div
                  key={chapter.id}
                  onClick={() => {
                    onSelectChapter(chapter.id);
                    setIsDrawerOpen(false);
                  }}
                  className={`p-4 rounded-xl cursor-pointer transition-all border ${
                    isActive
                      ? 'bg-amber-500/15 border-amber-500 font-semibold shadow-xs'
                      : 'border-transparent hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                    <span className="font-bold text-amber-600">
                      {content.ui.chapterNumber(chapter.id)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {chapter.readTime}
                    </span>
                  </div>
                  <h4 className="font-serif text-base mb-1">
                    {chapter.title}
                  </h4>
                  {chapter.subtitle && (
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                      {chapter.subtitle}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-black/10 dark:border-white/10 text-xs text-neutral-400 text-center">
          {content.meta.author} &bull; {content.meta.releaseDate}
        </div>
      </div>
    </div>
  );
};
