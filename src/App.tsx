import React, { useState, useEffect } from 'react';
import { Language } from './types/portal';
import { portalContent } from './data/portalContent';
import { useUrgeIQVersion } from './hooks/useUrgeIQVersion';
import { PortalNavbar } from './components/portal/PortalNavbar';
import { PortalHero } from './components/portal/PortalHero';
import { UrgeIQShowcase } from './components/portal/UrgeIQShowcase';
import { HobbyCorner } from './components/portal/HobbyCorner';
import { AboutSection } from './components/portal/AboutSection';
import { PortalFooter } from './components/portal/PortalFooter';

export const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('tahirurge_portal_lang');
    if (saved === 'tr' || saved === 'en') return saved;
    return navigator.language.toLowerCase().startsWith('tr') ? 'tr' : 'en';
  });

  const urgeiqVersion = useUrgeIQVersion();

  const handleToggleLanguage = () => {
    const nextLang: Language = language === 'tr' ? 'en' : 'tr';
    setLanguage(nextLang);
    localStorage.setItem('tahirurge_portal_lang', nextLang);
    document.documentElement.lang = nextLang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === 'tr'
      ? 'Mehmet Tahir Ürge — UrgeIQ & Sistem Mimarisi'
      : 'Mehmet Tahir Ürge — UrgeIQ & Software Systems';
  }, [language]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentContent = portalContent[language];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-neutral-900 selection:bg-indigo-100 selection:text-indigo-950 font-sans">
      <PortalNavbar
        language={language}
        content={currentContent}
        onToggleLanguage={handleToggleLanguage}
        onScrollTo={handleScrollTo}
      />

      <main className="flex-1">
        <PortalHero
          content={currentContent}
          version={urgeiqVersion}
          onScrollToUrgeIQ={() => handleScrollTo('urgeiq-section')}
          onScrollToHobby={() => handleScrollTo('hobby-corner')}
          onScrollToAbout={() => handleScrollTo('about-section')}
        />

        <UrgeIQShowcase content={currentContent} version={urgeiqVersion} />

        <HobbyCorner content={currentContent} />

        <AboutSection content={currentContent} />
      </main>

      <PortalFooter content={currentContent} />
    </div>
  );
};

export default App;
