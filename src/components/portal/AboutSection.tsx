import React from 'react';
import { Feather, Layers, Cpu, Sparkles } from 'lucide-react';
import { PortalContent } from '../../types/portal';

interface AboutSectionProps {
  content: PortalContent;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  const getFocusIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Feather className="w-5 h-5 text-amber-600" />;
      case 1:
        return <Layers className="w-5 h-5 text-indigo-600" />;
      default:
        return <Cpu className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="about-section" className="py-20 md:py-28 bg-white border-t border-neutral-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Bio & Monogram */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-neutral-500" />
              <span>{content.aboutSection.title}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
              {content.brand.name}
            </h2>

            <p className="text-sm font-medium text-amber-800 mb-6 font-serif">
              {content.aboutSection.subtitle}
            </p>

            <div className="space-y-4 text-neutral-600 text-base leading-relaxed font-serif">
              {content.aboutSection.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Quote badge */}
            <div className="mt-8 p-6 rounded-2xl bg-[#FAF9F6] border border-neutral-200/70 text-left w-full">
              <p className="font-serif italic text-sm text-neutral-700 leading-relaxed mb-2">
                "{content.footer.quote}"
              </p>
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block">
                — {content.brand.name}
              </span>
            </div>
          </div>

          {/* Right: 3 Core Focus Area Cards */}
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-bold mb-4">
              {content.aboutSection.focusAreasTitle}
            </h3>

            {content.aboutSection.focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF9F6] border border-neutral-200/70 hover:border-neutral-300 transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200/80 flex items-center justify-center flex-shrink-0 shadow-2xs">
                  {getFocusIcon(idx)}
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-neutral-900 mb-1">
                    {area.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
