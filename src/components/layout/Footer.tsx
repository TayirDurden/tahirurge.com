import React from 'react';
import { Feather } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { content } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200/80 bg-neutral-900 text-neutral-300 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-amber-400 mb-6">
          <Feather className="w-6 h-6" />
        </div>

        <h3 className="font-serif text-2xl font-bold text-white mb-2 tracking-wide">
          {content.meta.title}
        </h3>
        <p className="text-sm text-neutral-400 max-w-md mb-8">
          "{content.meta.quote.text}"
        </p>

        <div className="w-16 h-px bg-neutral-700 mb-8" />

        <div className="text-xs text-neutral-500 flex flex-col sm:flex-row items-center gap-2">
          <span>&copy; {year} Tahir Ürge. Tüm hakları saklıdır.</span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1">
            Edebiyat ve estetik ile tasarlandı
          </span>
        </div>
      </div>
    </footer>
  );
};
