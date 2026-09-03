export type Language = 'tr' | 'en';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  status: 'active' | 'in-progress' | 'concept';
  statusText: string;
  description: string;
  features: string[];
  link: string;
  linkText: string;
  isExternal: boolean;
  accentColor: string;
  category: 'literature' | 'finance' | 'experimental';
}

export interface PortalContent {
  brand: {
    name: string;
    title: string;
    location: string;
  };
  hero: {
    badge: string;
    greeting: string;
    lead: string;
    sublead: string;
    ctaProjects: string;
    ctaAbout: string;
  };
  projectsSection: {
    title: string;
    subtitle: string;
    viewProject: string;
    statusActive: string;
    statusUpcoming: string;
  };
  aboutSection: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    focusAreasTitle: string;
    focusAreas: {
      title: string;
      description: string;
    }[];
  };
  footer: {
    quote: string;
    copyright: string;
    builtWith: string;
  };
}
