export type Language = 'tr' | 'en';

export type ReadingTheme = 'paper' | 'dark' | 'sepia';

export type FontFamily = 'serif' | 'sans';

export type FontSize = 'sm' | 'md' | 'lg' | 'xl';

export interface Chapter {
  id: number;
  title: string;
  subtitle?: string;
  readTime: string;
  preview: string;
  content: string[];
}

export interface BookMetadata {
  title: string;
  subtitle: string;
  author: string;
  genre: string;
  releaseDate: string;
  readTime: string;
  wordCount: string;
  synopsisLead: string;
  synopsisFull: string[];
  quote: {
    text: string;
    author: string;
  };
  authorBio: {
    name: string;
    title: string;
    description: string[];
  };
}

export interface LocalizedContent {
  meta: BookMetadata;
  chapters: Chapter[];
  ui: {
    readNow: string;
    readInLanguage: string;
    chapters: string;
    tableOfContents: string;
    author: string;
    synopsis: string;
    readingTime: string;
    words: string;
    backToHome: string;
    previousChapter: string;
    nextChapter: string;
    readingProgress: string;
    fontSize: string;
    fontFamily: string;
    theme: string;
    themePaper: string;
    themeDark: string;
    themeSepia: string;
    share: string;
    copied: string;
    close: string;
    openMenu: string;
    chapterNumber: (num: number) => string;
  };
}

export interface ReaderSettings {
  theme: ReadingTheme;
  fontSize: FontSize;
  fontFamily: FontFamily;
  lineSpacing: 'normal' | 'relaxed' | 'loose';
}
