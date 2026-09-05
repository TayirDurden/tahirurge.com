import React from 'react';
import { BookOpen, Sparkles, Feather, ExternalLink, Clock, Check, Compass } from 'lucide-react';
import { PortalContent, HobbyProject } from '../../types/portal';

interface HobbyCornerProps {
  content: PortalContent;
}

export const HobbyCorner: React.FC<HobbyCornerProps> = ({ content }) => {
  const { hobbyCorner } = content;

  const getProjectIcon = (id: string, category: string) => {
    if (id === 'zero-sum-city') {
      return (
        <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 shadow-2xs">
          <BookOpen className="w-5 h-5" />
        </div>
      );
    }
    if (category.toLowerCase().includes('yazı') || category.toLowerCase().includes('writing') || category.toLowerCase().includes('edebi')) {
      return (
        <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200/80 flex items-center justify-center text-rose-700 shadow-2xs">
          <Feather className="w-5 h-5" />
        </div>
      );
    }
    return (
      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700 shadow-2xs">
        <Sparkles className="w-5 h-5" />
      </div>
    );
  };

  return (
    <section id="hobby-corner" className="py-20 md:py-28 max-w-5xl mx-auto px-4 sm:px-6">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/70 text-amber-800 text-[11px] font-semibold tracking-wider uppercase mb-3.5">
          <Compass className="w-3.5 h-3.5 text-amber-600" />
          <span>{hobbyCorner.badge}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-900 tracking-tight mb-3">
          {hobbyCorner.title}
        </h2>

        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans mb-3">
          {hobbyCorner.subtitle}
        </p>

        <p className="text-xs text-neutral-400 max-w-lg mx-auto font-sans">
          {hobbyCorner.intro}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hobbyCorner.projects.map((project: HobbyProject) => {
          const isActive = project.status === 'active';
          const isPlanned = project.status === 'planned';
          const isFeatured = project.id === 'zero-sum-city';

          return (
            <div
              key={project.id}
              className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group relative ${
                isFeatured 
                  ? 'bg-gradient-to-b from-amber-50/40 via-white to-white border-amber-200/80 shadow-xs hover:shadow-md hover:border-amber-300' 
                  : 'bg-white border-neutral-200/80 shadow-2xs hover:shadow-sm hover:border-neutral-300'
              }`}
            >
              <div>
                {/* Header Row: Icon & Status */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  {getProjectIcon(project.id, project.category)}

                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                        : isPlanned
                        ? 'bg-neutral-100 text-neutral-500 border border-neutral-200/60'
                        : 'bg-blue-50 text-blue-700 border border-blue-200/60'
                    }`}
                  >
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                    {!isActive && <Clock className="w-3 h-3 text-neutral-400" />}
                    <span>{project.statusText}</span>
                  </span>
                </div>

                {/* Tag & Title */}
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium block mb-1">
                  {project.category}
                </span>

                <h3 className={`font-serif text-2xl font-bold mb-1 group-hover:text-neutral-950 transition-colors ${
                  isFeatured ? 'text-amber-950' : 'text-neutral-900'
                }`}>
                  {project.title}
                </h3>

                <p className="text-xs text-neutral-500 mb-4 font-sans font-medium">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>

                {/* Feature Highlights */}
                <div className="space-y-2 pt-4 border-t border-neutral-100 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-500 font-sans">
                      <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${isFeatured ? 'text-amber-600' : 'text-neutral-400'}`} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link / Button */}
              <div className="pt-2">
                {isActive && project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isFeatured
                        ? 'bg-neutral-900 hover:bg-neutral-800 text-white shadow-2xs group-hover:shadow-xs'
                        : 'bg-neutral-800 hover:bg-neutral-900 text-white shadow-2xs'
                    }`}
                  >
                    <span>{project.linkText}</span>
                    <ExternalLink className="w-3 h-3 text-amber-300 group-hover:text-white transition-colors" />
                  </a>
                ) : (
                  <div className="w-full py-2.5 px-4 rounded-xl bg-neutral-100/90 text-neutral-400 text-xs font-medium flex items-center justify-center gap-1.5 cursor-not-allowed">
                    <Clock className="w-3 h-3" />
                    <span>{project.linkText || 'Çok Yakında'}</span>
                  </div>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
