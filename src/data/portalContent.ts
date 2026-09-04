import { PortalContent, ProjectItem, Language } from '../types/portal';

export const portalContent: Record<Language, PortalContent> = {
  tr: {
    brand: {
      name: "Mehmet Tahir Ürge",
      title: "Yazılım Sistemleri & Edebiyat",
      location: "İstanbul, TR"
    },
    hero: {
      badge: "Kişisel Ekosistem",
      greeting: "Mehmet Tahir Ürge",
      lead: "Yazılım mimarisi, finansal zeka ve edebi kurgu.",
      sublead: "Teknoloji, veri odaklı analitik sistemler ve felsefi anlatıların buluştuğu bağımsız üretim alanı.",
      ctaProjects: "Çalışmaları İncele",
      ctaAbout: "Hakkımda"
    },
    projectsSection: {
      title: "Ekosistem & Projeler",
      subtitle: "Edebiyattan finansal istihbarata, aktif ve geliştirme aşamasındaki çalışmalar.",
      viewProject: "İncele",
      statusActive: "Yayında",
      statusUpcoming: "Geliştiriliyor"
    },
    aboutSection: {
      title: "Hakkımda",
      subtitle: "Sistemler, kod ve kelimeler.",
      paragraphs: [
        "Karmaşık veri akışlarını yalın ve yüksek performanslı yazılım mimarilerine dönüştürüyorum. UrgeIQ ile finansal operasyonları akılcılaştırırken, edebiyat çalışmalarımla varoluşsal ikilemleri ve sistem dinamiklerini araştırıyorum.",
        "Mühendislik titizliğini felsefi derinlikle buluşturarak hem güvenilir analitik araçlar hem de düşündüren anlatılar inşa ediyorum."
      ],
      focusAreasTitle: "Odak Alanları",
      focusAreas: [
        {
          title: "Yazılım Mimarisi",
          description: "React, TypeScript ve bulut altyapılarıyla hızlı, güvenli ve dayanıklı web sistemleri."
        },
        {
          title: "UrgeIQ Finansal Zekası",
          description: "İşletmeler için gerçek zamanlı nakit akışı, dinamik POS komisyon optimizasyonu ve karar destek motorları."
        },
        {
          title: "Edebi Kurgu & Felsefe",
          description: "Varoluşsal temaları, distopik mükemmeliyetçiliği ve insan bilincini irdeleyen derin anlatılar."
        }
      ]
    },
    footer: {
      quote: "Mükemmellik sıkıcıdır; aslolan sistemin içindeki o çatlağı bulmaktır.",
      copyright: "Tüm hakları saklıdır.",
      builtWith: "React 19 & Tailwind CSS"
    }
  },
  en: {
    brand: {
      name: "Mehmet Tahir Ürge",
      title: "Software Systems & Literature",
      location: "Istanbul, TR"
    },
    hero: {
      badge: "Personal Ecosystem",
      greeting: "Mehmet Tahir Ürge",
      lead: "Software architecture, financial intelligence, and literary fiction.",
      sublead: "An independent nexus where modern software, data-driven systems, and philosophical fiction converge.",
      ctaProjects: "Explore Works",
      ctaAbout: "About"
    },
    projectsSection: {
      title: "Ecosystem & Projects",
      subtitle: "Active and forthcoming initiatives spanning fiction to financial decision engines.",
      viewProject: "Explore",
      statusActive: "Live",
      statusUpcoming: "In Progress"
    },
    aboutSection: {
      title: "About",
      subtitle: "Systems, code, and narrative.",
      paragraphs: [
        "I build elegant, high-performance software systems from complex data streams. Through UrgeIQ, I streamline real-world commercial finance, while exploring existential paradoxes through literary fiction.",
        "Blending technical rigor with narrative depth to build dependable analytical tools and thought-provoking literature."
      ],
      focusAreasTitle: "Areas of Focus",
      focusAreas: [
        {
          title: "Software Architecture",
          description: "High-performance, secure digital platforms engineered with React, TypeScript, and modern cloud stacks."
        },
        {
          title: "UrgeIQ Financial OS",
          description: "Real-time cash flow intelligence, multi-bank POS commission optimization, and cloud decision engines."
        },
        {
          title: "Literary Fiction & Philosophy",
          description: "Narratives examining existential dilemmas, dystopian perfection, and human alienation."
        }
      ]
    },
    footer: {
      quote: "Perfection was boring; what truly matters is discovering the crack waiting inside the system.",
      copyright: "All rights reserved.",
      builtWith: "React 19 & Tailwind CSS"
    }
  }
};

export const portalProjects: Record<Language, ProjectItem[]> = {
  tr: [
    {
      id: "zero-sum-city",
      title: "Zero Sum City",
      subtitle: "Felsefi Bilim Kurgu Novellası",
      tag: "Edebiyat",
      status: "active",
      statusText: "31 Bölüm • Çift Dil",
      description: "Mükemmelliğin tektipleştirdiği distopik bir gelecekte, sistem gözlemcisi Taylor'ın keşfettiği anomaliyi konu alan modern bir anlatı.",
      features: [
        "31 Tam Bölüm (Türkçe & İngilizce)",
        "Odaklanmış Minimalist Okuma Deneyimi",
        "Kağıt, Sepya ve Gece Temaları"
      ],
      link: "https://novel.tahirurge.com",
      linkText: "novel.tahirurge.com",
      isExternal: true,
      accentColor: "from-amber-500/20 to-neutral-900/10",
      category: "literature"
    },
    {
      id: "urgeiq-financial",
      title: "UrgeIQ",
      subtitle: "Finansal İstihbarat & POS Kontrol Sistemi",
      tag: "FinTech & SaaS",
      status: "active",
      statusText: "Canlı Operasyon • v0.15",
      description: "Çoklu banka POS komisyon optimizasyonu, net kâr/zarar takibi ve MSSQL-Supabase çift yönlü veri eşitleme işletim sistemi.",
      features: [
        "Banka Bazlı Dinamik Komisyon & Net Kâr Hesaplama",
        "MSSQL & Supabase Çift Yönlü Bulut Entegrasyonu",
        "Gerçek Zamanlı Kasa, Fatura ve Harcama Analitiği"
      ],
      link: "https://pnl.tahirurge.com",
      linkText: "pnl.tahirurge.com",
      isExternal: true,
      accentColor: "from-indigo-500/20 to-neutral-900/10",
      category: "finance"
    },
    {
      id: "urgeiq-labs",
      title: "UrgeIQ Labs",
      subtitle: "Yeni Nesil SaaS & Deneysel Araçlar",
      tag: "Ar-Ge & Teknoloji",
      status: "in-progress",
      statusText: "Geliştiriliyor",
      description: "Yapay zekâ destekli karar destek araçları, analitik mikro servisler ve deneysel dijital ürünler için kuluçka merkezi.",
      features: [
        "Yapay Zekâ Tabanlı İçerik ve Analiz Araçları",
        "Açık Kaynak Geliştirici Kütüphaneleri",
        "Yeni Nesil Dijital Ürün Denemeleri"
      ],
      link: "#",
      linkText: "Pek Yakında",
      isExternal: false,
      accentColor: "from-emerald-500/20 to-neutral-900/10",
      category: "experimental"
    }
  ],
  en: [
    {
      id: "zero-sum-city",
      title: "Zero Sum City",
      subtitle: "Philosophical Sci-Fi Novella",
      tag: "Literature",
      status: "active",
      statusText: "31 Chapters • Bilingual",
      description: "In a frictionless dystopian future where perfection eliminates humanity, systems observer Taylor encounters an unverified anomaly.",
      features: [
        "31 Complete Chapters (EN & TR)",
        "Distraction-Free Minimalist Reader",
        "Paper, Sepia, and Obsidian Themes"
      ],
      link: "https://novel.tahirurge.com",
      linkText: "novel.tahirurge.com",
      isExternal: true,
      accentColor: "from-amber-500/20 to-neutral-900/10",
      category: "literature"
    },
    {
      id: "urgeiq-financial",
      title: "UrgeIQ",
      subtitle: "Financial Intelligence & POS Control OS",
      tag: "FinTech & SaaS",
      status: "active",
      statusText: "Live Production • v0.15",
      description: "Next-gen financial operating system offering multi-bank POS settlement tracking, commission optimization, and bi-directional cloud sync.",
      features: [
        "Dynamic Multi-Bank POS Commission Engine",
        "MSSQL & Supabase Bi-Directional Cloud Sync",
        "Real-Time Cash Flow, Invoices & Expense Analytics"
      ],
      link: "https://pnl.tahirurge.com",
      linkText: "pnl.tahirurge.com",
      isExternal: true,
      accentColor: "from-indigo-500/20 to-neutral-900/10",
      category: "finance"
    },
    {
      id: "urgeiq-labs",
      title: "UrgeIQ Labs",
      subtitle: "Next-Gen SaaS & Experimental Utilities",
      tag: "R&D & Tech",
      status: "in-progress",
      statusText: "In Development",
      description: "An innovation incubator for AI-assisted analytical tools, modern micro-services, and experimental digital product MVPs.",
      features: [
        "AI-Powered Content & Intelligence Engines",
        "Open-Source Developer Utilities",
        "Next-Gen Experimental Web MVPs"
      ],
      link: "#",
      linkText: "Coming Soon",
      isExternal: false,
      accentColor: "from-emerald-500/20 to-neutral-900/10",
      category: "experimental"
    }
  ]
};
