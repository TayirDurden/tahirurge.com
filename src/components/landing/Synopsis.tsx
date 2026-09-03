import React from 'react';
import { Quote, Feather } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Synopsis: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white border-y border-neutral-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-50 text-amber-700 mb-4 border border-amber-200/60">
            <Feather className="w-5 h-5" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-3 tracking-tight">
            {content.ui.synopsis}
          </h2>
          <div className="w-12 h-0.5 bg-amber-500 mx-auto rounded-full" />
        </div>

        {/* Synopsis Paragraphs with Drop Cap */}
        <div className="prose prose-neutral max-w-none text-neutral-700 text-lg leading-relaxed space-y-6 font-serif">
          {content.meta.synopsisFull.map((paragraph, index) => (
            <p
              key={index}
              className={
                index === 0
                  ? "first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:text-neutral-900 first-letter:mr-3 first-letter:float-left first-letter:leading-none text-neutral-800"
                  : ""
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Evocative Quote Callout */}
        <div className="mt-14 relative rounded-2xl bg-gradient-to-r from-amber-50/80 via-[#FAF7F2] to-amber-50/80 p-8 sm:p-10 border border-amber-200/70 text-center">
          <Quote className="w-8 h-8 text-amber-600/40 mx-auto mb-4" />
          <blockquote className="font-serif italic text-xl sm:text-2xl text-neutral-800 leading-snug mb-4 max-w-2xl mx-auto">
            "{content.meta.quote.text}"
          </blockquote>
          <cite className="block text-xs uppercase tracking-widest text-neutral-500 font-semibold not-italic">
            — {content.meta.quote.author}
          </cite>
        </div>

      </div>
    </section>
  );
};
