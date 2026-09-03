import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useReader } from '../../context/ReaderContext';
import { useLanguage } from '../../context/LanguageContext';
import { ReaderControls } from './ReaderControls';
import { ChapterDrawer } from './ChapterDrawer';

interface ReaderViewProps {
  onBackToHome: () => void;
}

export const ReaderView: React.FC<ReaderViewProps> = ({ onBackToHome }) => {
  const { settings, activeChapterId, setActiveChapterId } = useReader();
  const { content } = useLanguage();

  const currentChapter = content.chapters.find((c) => c.id === activeChapterId) || content.chapters[0];
  const currentIndex = content.chapters.findIndex((c) => c.id === activeChapterId);
  const prevChapter = currentIndex > 0 ? content.chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < content.chapters.length - 1 ? content.chapters[currentIndex + 1] : null;

  // Scroll to top when changing chapters
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeChapterId]);

  // Determine theme styles
  const getThemeClass = () => {
    switch (settings.theme) {
      case 'dark':
        return 'theme-dark';
      case 'sepia':
        return 'theme-sepia';
      default:
        return 'theme-paper';
    }
  };

  // Determine font size
  const getFontSizeClass = () => {
    switch (settings.fontSize) {
      case 'sm':
        return 'text-base sm:text-lg leading-relaxed';
      case 'lg':
        return 'text-xl sm:text-2xl leading-loose';
      case 'xl':
        return 'text-2xl sm:text-3xl leading-loose';
      default:
        return 'text-lg sm:text-xl leading-relaxed';
    }
  };

  // Determine font family
  const getFontFamilyClass = () => {
    return settings.fontFamily === 'serif' ? 'font-book-serif' : 'font-book-sans';
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${getThemeClass()}`}>
      {/* Top Reading HUD */}
      <ReaderControls
        onBackToHome={onBackToHome}
        chapterTitle={currentChapter.title}
      />

      {/* Slide-over Table of Contents Drawer */}
      <ChapterDrawer onSelectChapter={(id) => setActiveChapterId(id)} />

      {/* Main Reading Room Container */}
      <main className="max-w-3xl mx-auto px-6 sm:px-8 py-12 md:py-20">
        
        {/* Chapter Header */}
        <header className="text-center mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-amber-600 font-bold block mb-3">
            {content.ui.chapterNumber(currentChapter.id)} &bull; {currentChapter.readTime}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {currentChapter.title}
          </h1>
          {currentChapter.subtitle && (
            <p className="font-serif italic text-base sm:text-lg opacity-75 max-w-xl mx-auto">
              {currentChapter.subtitle}
            </p>
          )}
          <div className="w-16 h-px bg-current opacity-20 mx-auto mt-8" />
        </header>

        {/* Chapter Text Content */}
        <article className={`space-y-6 sm:space-y-8 ${getFontSizeClass()} ${getFontFamilyClass()}`}>
          {currentChapter.content.map((paragraph, idx) => (
            <p
              key={idx}
              className={
                idx === 0
                  ? "first-letter:font-serif first-letter:text-5xl sm:first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-none"
                  : ""
              }
            >
              {paragraph}
            </p>
          ))}
        </article>

        {/* End of Chapter Ornament */}
        <div className="my-16 flex items-center justify-center gap-3 opacity-30 text-lg">
          <span>&bull;</span>
          <span>✦</span>
          <span>&bull;</span>
        </div>

        {/* Chapter Navigation Footer */}
        <nav className="pt-8 border-t border-current/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium">
          {prevChapter ? (
            <button
              onClick={() => setActiveChapterId(prevChapter.id)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-current/20 hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{content.ui.previousChapter}</span>
            </button>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextChapter ? (
            <button
              onClick={() => setActiveChapterId(nextChapter.id)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer ml-auto"
            >
              <span>{content.ui.nextChapter}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onBackToHome}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer ml-auto"
            >
              <span>{content.ui.backToHome}</span>
            </button>
          )}
        </nav>

      </main>
    </div>
  );
};
