import React from 'react';
import { ExternalLink, BookOpen, Clock, Check } from 'lucide-react';
import { ProjectItem, PortalContent } from '../../types/portal';
import { UrgeIQLogo } from '../common/UrgeIQLogo';

interface ProjectsHubProps {
  content: PortalContent;
  projects: ProjectItem[];
}

export const ProjectsHub: React.FC<ProjectsHubProps> = ({ content, projects }) => {
  return (
    <section id="projects-section" className="py-20 md:py-24 max-w-5xl mx-auto px-4 sm:px-6">
      
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-14">
        <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold mb-2 block">
          PORTFOLIO & VENTURES
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-900 tracking-tight mb-3">
          {content.projectsSection.title}
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-sans">
          {content.projectsSection.subtitle}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => {
          const isActive = project.status === 'active';

          return (
            <div
              key={project.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-2xs hover:shadow-md hover:border-neutral-300/90 transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                {/* Header Row: Custom Icon / Badge & Status */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="flex items-center">
                    {project.id === 'urgeiq-financial' ? (
                      <UrgeIQLogo size={36} withBg={true} className="rounded-xl shadow-2xs group-hover:scale-105 transition-transform" />
                    ) : project.id === 'zero-sum-city' ? (
                      <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 shadow-2xs">
                        <BookOpen className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center text-white shadow-2xs">
                        <UrgeIQLogo size={24} withBg={false} />
                      </div>
                    )}
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                        : 'bg-neutral-100 text-neutral-600 border border-neutral-200/60'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                    {!isActive && (
                      <Clock className="w-3 h-3 text-neutral-400" />
                    )}
                    <span>{project.statusText}</span>
                  </span>
                </div>

                {/* Subtitle & Title */}
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium block mb-1">
                  {project.tag}
                </span>
                <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-1 group-hover:text-neutral-950 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-500 mb-4 font-sans font-medium">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-2 pt-4 border-t border-neutral-100 mb-6">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-500">
                      <Check className="w-3.5 h-3.5 text-neutral-400 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                {isActive ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-2xs group-hover:shadow-xs cursor-pointer"
                  >
                    <span>{project.linkText}</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400 group-hover:text-white transition-colors" />
                  </a>
                ) : (
                  <div className="w-full py-2.5 px-4 rounded-xl bg-neutral-100/90 text-neutral-400 text-xs font-medium flex items-center justify-center gap-1.5 cursor-not-allowed">
                    <Clock className="w-3 h-3" />
                    <span>{project.linkText}</span>
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
