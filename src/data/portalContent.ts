import { PortalContent, ProjectItem, Language } from '../types/portal';

export const portalContent: Record<Language, PortalContent> = {
  tr: {
    brand: {
      name: "Mehmet Tahir Ürge",
      title: "Yazılım Mühendisliği & Edebiyat",
      location: "İstanbul, TR"
    },
    hero: {
      badge: "Dijital Ekosistem & Kişisel Portal",
      greeting: "Merhaba, ben Mehmet Tahir Ürge.",
      lead: "Yazılım mimarisi, finansal veri sistemleri ve edebi kurgunun kesişiminde dijital deneyimler inşa ediyorum.",
      sublead: "Bu portal; kaleme aldığım edebiyat eserlerimin, geliştirdiğim finansal yönetim sistemlerinin ve geleceğe dönük teknolojik girişimlerimin ana giriş kapısıdır.",
      ctaProjects: "Projeleri İncele",
      ctaAbout: "Hakkımda"
    },
    projectsSection: {
      title: "Dijital Ekosistem & Projeler",
      subtitle: "Edebiyattan işletme zekasına, üzerinde çalıştığım aktif ve geleceğe dönük çalışmalar.",
      viewProject: "Projeyi Aç",
      statusActive: "Yayında & Aktif",
      statusUpcoming: "Geliştirme Aşamasında"
    },
    aboutSection: {
      title: "Hakkımda & Yaklaşım",
      subtitle: "Fikirlerin, sistemlerin ve kelimelerin bir araya geldiği nokta.",
      paragraphs: [
        "Modern çağın karmaşık veri akışlarını anlamlı sistemlere dönüştürürken, aynı zamanda insan ruhunun içsel labirentlerini felsefi ve edebi eserlerle keşfetmeyi amaçlıyorum.",
        "Finansal analiz ve POS otomasyonlarından, felsefi bilim kurgu novellalarına uzanan bu çok yönlü yolculuk; teknik mükemmeliyetçilik ile sanatsal özgünlüğü bir araya getirme tutkumun bir yansımasıdır."
      ],
      focusAreasTitle: "Odak Alanları",
      focusAreas: [
        {
          title: "Edebi Kurgu & Felsefe",
          description: "Varoluşsal ikilemleri, distopik mükemmeliyetçiliği ve insan bilincini irdeleyen derin anlatılar."
        },
        {
          title: "Finansal Sistemler & PnL",
          description: "İşletmeler için gerçek zamanlı nakit akışı, POS komisyon yönetimi ve bulut tabanlı karar destek araçları."
        },
        {
          title: "Modern Web Mimarisi",
          description: "Vite, React, TypeScript ve bulut veritabanlarıyla hızlı, güvenli ve estetik dijital platformlar."
        }
      ]
    },
    footer: {
      quote: "Mükemmellik sıkıcıdır; aslolan sistemin içindeki o keşfedilmeyi bekleyen çatlağı bulmaktır.",
      copyright: "Tüm hakları saklıdır.",
      builtWith: "React 19 & Tailwind CSS ile tasarlandı."
    }
  },
  en: {
    brand: {
      name: "Mehmet Tahir Ürge",
      title: "Software Engineering & Literature",
      location: "Istanbul, TR"
    },
    hero: {
      badge: "Digital Ecosystem & Personal Portal",
      greeting: "Hello, I am Mehmet Tahir Ürge.",
      lead: "Building digital experiences at the intersection of software architecture, financial data systems, and literary fiction.",
      sublead: "This portal serves as the primary gateway to my published novellas, financial intelligence platforms, and future technological ventures.",
      ctaProjects: "Explore Projects",
      ctaAbout: "About Me"
    },
    projectsSection: {
      title: "Digital Ecosystem & Works",
      subtitle: "From literature to business intelligence, exploring active and forthcoming initiatives.",
      viewProject: "Open Project",
      statusActive: "Live & Active",
      statusUpcoming: "Under Development"
    },
    aboutSection: {
      title: "About & Philosophy",
      subtitle: "Where ideas, systems, and words converge.",
      paragraphs: [
        "While transforming complex modern data streams into cohesive, elegant architectures, I also endeavor to explore the labyrinth of human consciousness through philosophical and literary narratives.",
        "Spanning from real-time cash flow analytics to philosophical science fiction novellas, this journey reflects my passion for merging technical rigor with creative authenticity."
      ],
      focusAreasTitle: "Areas of Focus",
      focusAreas: [
        {
          title: "Literary Fiction & Philosophy",
          description: "Narratives exploring existential paradoxes, dystopian perfection, and human alienation."
        },
        {
          title: "Financial Systems & PnL",
          description: "Real-time cash flow trackers, POS reconciliation tools, and cloud-native decision support engines."
        },
        {
          title: "Modern Web Architecture",
          description: "High-performance, secure, and aesthetic digital platforms engineered with React, Vite, and TypeScript."
        }
      ]
    },
    footer: {
      quote: "Perfection was boring; what truly matters is discovering the crack waiting inside the system.",
      copyright: "All rights reserved.",
      builtWith: "Crafted with React 19 & Tailwind CSS."
    }
  }
};

export const portalProjects: Record<Language, ProjectItem[]> = {
  tr: [
    {
      id: "zero-sum-city",
      title: "Zero Sum City",
      subtitle: "Felsefi Bilim Kurgu Novellası",
      tag: "Edebiyat & Roman",
      status: "active",
      statusText: "Yayında • 31 Bölüm",
      description: "Mükemmelliğin sıkıcı hale geldiği, tüm sürtünmelerin sistem tarafından emildiği distopik bir gelecekte; sistem gözlemcisi Taylor'ın keşfettiği açıklanamaz anomaliyi konu alan modern bir novella.",
      features: [
        "31 Tam Bölüm (İngilizce & Türkçe)",
        "Dikkat Dağıtmayan E-Kitap Okuma Odası",
        "Kağıt, Sepya ve Gece Temaları",
        "İlerleme Takibi ve Bölüm Çekmecesi"
      ],
      link: "https://novel.tahirurge.com",
      linkText: "Romanı Oku (novel.tahirurge.com)",
      isExternal: true,
      accentColor: "from-amber-500/20 to-neutral-900/10",
      category: "literature"
    },
    {
      id: "pnl-dashboard",
      title: "Murat Finansal Dashboard",
      subtitle: "Gerçek Zamanlı POS & Nakit Akışı Yönetimi",
      tag: "Finans & İş Zekası",
      status: "active",
      statusText: "Canlı Operasyon • v0.15",
      description: "Gıda ve perakende operasyonları için geliştirilmiş; günlük kasa, çoklu banka POS komisyon optimizasyonu, MSSQL Server ve Supabase çift yönlü veri eşitleme merkezi.",
      features: [
        "Banka Bazlı Dinamik Komisyon Hesaplama",
        "Günlük Kasa, Fatura ve Harcama Analitiği",
        "MSSQL & Supabase Bulut Veritabanı Entegrasyonu",
        "Excel Dışa/İçe Aktarım ve Snapshot Yedekleme"
      ],
      link: "https://pnl.tahirurge.com",
      linkText: "Finansal Portala Git (pnl.tahirurge.com)",
      isExternal: true,
      accentColor: "from-indigo-500/20 to-neutral-900/10",
      category: "finance"
    },
    {
      id: "future-lab",
      title: "Gelecek Girişimler & Lab",
      subtitle: "Yeni Nesil SaaS, AI & Açık İnovasyon",
      tag: "Ar-Ge & Teknoloji",
      status: "in-progress",
      statusText: "Geliştirme Aşamasında",
      description: "Yapay zekâ destekli analiz araçları, yeni edebi metinler ve mikro web ürünleri için kuluçka merkezi. Gelecekte hayata geçirilecek yeni projelerin başlangıç noktası.",
      features: [
        "Yapay Zekâ Tabanlı İçerik ve Analiz Araçları",
        "Yeni Nesil Dijital Ürün Denemeleri",
        "Açık Kaynak Geliştirici Kütüphaneleri",
        "Çok Yakında Duyurulacak"
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
      tag: "Literature & Fiction",
      status: "active",
      statusText: "Published • 31 Chapters",
      description: "Set in a frictionless dystopian future where perfection has rendered existence mundane, systems observer Taylor encounters an unverified anomaly that begins to unravel the illusion of certainty.",
      features: [
        "31 Complete Chapters (EN & TR)",
        "Immersive Distraction-Free Reader Room",
        "Paper, Sepia, and Obsidian Themes",
        "Progress Tracker and Dynamic Chapter Drawer"
      ],
      link: "https://novel.tahirurge.com",
      linkText: "Read Novella (novel.tahirurge.com)",
      isExternal: true,
      accentColor: "from-amber-500/20 to-neutral-900/10",
      category: "literature"
    },
    {
      id: "pnl-dashboard",
      title: "Murat Financial Dashboard",
      subtitle: "Real-Time POS & Cash Flow Intelligence",
      tag: "Finance & BI",
      status: "active",
      statusText: "Live Production • v0.15",
      description: "Tailored for retail and commercial enterprise operations; tracks multi-bank POS settlements, commission optimization, MSSQL Server and Supabase bi-directional cloud synchronization.",
      features: [
        "Dynamic Multi-Bank POS Commission Engine",
        "Daily Cash, Invoices, and Expense Breakdown",
        "MSSQL & Supabase Cloud Database Integration",
        "Excel Export/Import & Automatic Cloud Snapshot"
      ],
      link: "https://pnl.tahirurge.com",
      linkText: "Access Portal (pnl.tahirurge.com)",
      isExternal: true,
      accentColor: "from-indigo-500/20 to-neutral-900/10",
      category: "finance"
    },
    {
      id: "future-lab",
      title: "Future Ventures & Lab",
      subtitle: "Next-Gen SaaS, AI & Open Innovation",
      tag: "R&D & Tech",
      status: "in-progress",
      statusText: "Under Development",
      description: "An incubator for AI-assisted analytical utilities, upcoming literature installments, and micro-web products. The genesis hub for future initiatives.",
      features: [
        "AI-Powered Content & Intelligence Tools",
        "Experimental Digital Product MVPs",
        "Open-Source Developer Utilities",
        "Announcing Soon"
      ],
      link: "#",
      linkText: "Coming Soon",
      isExternal: false,
      accentColor: "from-emerald-500/20 to-neutral-900/10",
      category: "experimental"
    }
  ]
};
