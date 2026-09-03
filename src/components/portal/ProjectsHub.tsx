import React from 'react';
import { ExternalLink, BookOpen, LineChart, Code2, CheckCircle2, Clock } from 'lucide-react';
import { ProjectItem, PortalContent } from '../../types/portal';

interface ProjectsHubProps {
  content: PortalContent;
  projects: ProjectItem[];
}

export const ProjectsHub: React.FC<ProjectsHubProps> = ({ content, projects }) => {
  const getProjectIcon = (category: ProjectItem['category']) => {
    switch (category) {
      case 'literature':
        return <BookOpen className="w-6 h-6 text-amber-600" />;
      case 'finance':
        return <LineChart className="w-6 h-6 text-indigo-600" />;
      default:
        return <Code2 className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="projects-section" className="py-20 md:py-28 max-w-6xl mx-auto px-4 sm:px-6">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-widest text-amber-700 font-bold mb-2 block">
          PORTFOLIO & ECOSYSTEM
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
          {content.projectsSection.title}
        </h2>
        <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
          {content.projectsSection.subtitle}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          const isActive = project.status === 'active';

          return (
            <div
              key={project.id}
              className="bg-white rounded-3xl p-8 border border-neutral-200/90 shadow-2xs hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top accent gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${
                project.category === 'literature'
                  ? 'from-amber-500 to-amber-300'
                  : project.category === 'finance'
                  ? 'from-indigo-600 to-indigo-400'
                  : 'from-emerald-500 to-teal-400'
              }`} />

              <div>
                {/* Header Row: Icon + Status Pill */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getProjectIcon(project.category)}
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                        : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
                    }`}
                  >
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    ) : (
                      <Clock className="w-3 h-3 text-neutral-400" />
                    )}
                    <span>{project.statusText}</span>
                  </span>
                </div>

                {/* Subtitle & Title */}
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium block mb-1">
                  {project.tag}
                </span>
                <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-2 group-hover:text-neutral-950 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs italic text-neutral-500 font-serif mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-2.5 pt-4 border-t border-neutral-100 mb-8">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                {isActive ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-xs group-hover:shadow cursor-pointer"
                  >
                    <span>{project.linkText}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                  </a>
                ) : (
                  <div className="w-full py-3 px-4 rounded-xl bg-neutral-100 text-neutral-400 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-not-allowed">
                    <Clock className="w-3.5 h-3.5" />
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
