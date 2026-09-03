import React, { useState, useEffect } from 'react';
import { Language } from './types/portal';
import { portalContent, portalProjects } from './data/portalContent';
import { PortalNavbar } from './components/portal/PortalNavbar';
import { PortalHero } from './components/portal/PortalHero';
import { ProjectsHub } from './components/portal/ProjectsHub';
import { AboutSection } from './components/portal/AboutSection';
import { PortalFooter } from './components/portal/PortalFooter';

export const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('tahirurge_portal_lang');
    if (saved === 'tr' || saved === 'en') return saved;
    return navigator.language.toLowerCase().startsWith('tr') ? 'tr' : 'en';
  });

  const handleToggleLanguage = () => {
    const nextLang: Language = language === 'tr' ? 'en' : 'tr';
    setLanguage(nextLang);
    localStorage.setItem('tahirurge_portal_lang', nextLang);
    document.documentElement.lang = nextLang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === 'tr'
      ? 'Mehmet Tahir Ürge — Dijital Ekosistem & Kişisel Portal'
      : 'Mehmet Tahir Ürge — Digital Ecosystem & Personal Hub';
  }, [language]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentContent = portalContent[language];
  const currentProjects = portalProjects[language];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-neutral-900 selection:bg-amber-200 selection:text-neutral-900">
      <PortalNavbar
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onScrollTo={handleScrollTo}
      />

      <main className="flex-1">
        <PortalHero
          content={currentContent}
          onScrollToProjects={() => handleScrollTo('projects-section')}
          onScrollToAbout={() => handleScrollTo('about-section')}
        />

        <ProjectsHub
          content={currentContent}
          projects={currentProjects}
        />

        <AboutSection content={currentContent} />
      </main>

      <PortalFooter content={currentContent} />
    </div>
  );
};

export default App;
