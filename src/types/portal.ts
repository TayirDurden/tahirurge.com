export type Language = 'tr' | 'en';

export interface UrgeIQFeature {
  title: string;
  description: string;
  badge?: string;
  iconName?: 'cpu' | 'database' | 'trending-up' | 'layers' | 'shield-check' | 'zap';
}

export interface UrgeIQMetric {
  label: string;
  value: string;
  subtext: string;
}

export interface HobbyProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status: 'active' | 'in-progress' | 'planned';
  statusText: string;
  description: string;
  highlights: string[];
  link?: string;
  linkText?: string;
  isExternal?: boolean;
}

export interface PortalContent {
  brand: {
    name: string;
    title: string;
    location: string;
  };
  nav: {
    urgeiq: string;
    showcase: string;
    hobbyCorner: string;
    about: string;
    openApp: string;
  };
  hero: {
    badge: string;
    title: string;
    lead: string;
    sublead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    liveBadge: string;
    highlights: {
      label: string;
      value: string;
    }[];
  };
  urgeiqSection: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    liveUrl: string;
    liveUrlText: string;
    metricsTitle: string;
    metrics: UrgeIQMetric[];
    featuresTitle: string;
    features: UrgeIQFeature[];
    techStackTitle: string;
    techStack: string[];
  };
  hobbyCorner: {
    badge: string;
    title: string;
    subtitle: string;
    intro: string;
    projects: HobbyProject[];
  };
  aboutSection: {
    badge: string;
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
