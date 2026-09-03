import React from 'react';
import { Feather, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const AuthorBio: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-neutral-100/60 border-t border-neutral-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-xs flex flex-col md:flex-row items-center md:items-start gap-8">
          
          {/* Author Avatar / Monogram */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-neutral-900 text-amber-300 flex flex-col items-center justify-center shadow-md border-2 border-amber-400/30">
              <span className="font-serif text-3xl font-bold">TÜ</span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 mt-1">Yazar</span>
            </div>
          </div>

          {/* Author Details */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4">
              <h3 className="font-serif text-2xl font-bold text-neutral-900">
                {content.meta.authorBio.name}
              </h3>
              <p className="text-sm font-medium text-amber-800">
                {content.meta.authorBio.title}
              </p>
            </div>

            <div className="space-y-3 text-neutral-600 text-sm leading-relaxed mb-6 font-serif">
              {content.meta.authorBio.description.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4 border-t border-neutral-100 text-xs font-medium text-neutral-600">
              <span className="flex items-center gap-1.5 hover:text-neutral-900 transition-colors">
                <Globe className="w-4 h-4 text-neutral-400" />
                tahirurge.com
              </span>
              <span className="flex items-center gap-1.5 hover:text-neutral-900 transition-colors">
                <Feather className="w-4 h-4 text-neutral-400" />
                Gölgenin Yankısı &bull; 2026
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
