import React from 'react';
import { Feather, Layers, Code2 } from 'lucide-react';
import { PortalContent } from '../../types/portal';

interface AboutSectionProps {
  content: PortalContent;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  const getFocusIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-4 h-4 text-neutral-800" />;
      case 1:
        return <Layers className="w-4 h-4 text-indigo-600" />;
      default:
        return <Feather className="w-4 h-4 text-amber-700" />;
    }
  };

  return (
    <section id="about-section" className="py-20 md:py-24 bg-white/70 border-t border-neutral-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: Bio */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold mb-3 block">
              {content.aboutSection.title}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-900 tracking-tight mb-2">
              {content.brand.name}
            </h2>

            <p className="text-xs uppercase tracking-wider text-amber-800/80 font-medium mb-6 font-sans">
              {content.aboutSection.subtitle}
            </p>

            <div className="space-y-4 text-neutral-600 text-sm leading-relaxed font-sans">
              {content.aboutSection.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Minimalist Quote */}
            <div className="mt-8 pt-6 border-t border-neutral-200/60 w-full">
              <p className="font-serif italic text-sm text-neutral-700 leading-relaxed mb-1.5">
                "{content.footer.quote}"
              </p>
              <span className="text-[11px] text-neutral-400 font-medium">
                — {content.brand.name}
              </span>
            </div>
          </div>

          {/* Right: 3 Focus Areas */}
          <div className="lg:col-span-6 space-y-4 pt-1 lg:pt-0">
            <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold mb-2 block">
              {content.aboutSection.focusAreasTitle}
            </span>

            {content.aboutSection.focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-neutral-200/70 hover:border-neutral-300 transition-all flex items-start gap-3.5 shadow-2xs"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center flex-shrink-0">
                  {getFocusIcon(idx)}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-1 font-sans">
                    {area.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-sans">
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
