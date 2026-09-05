import { PortalContent, Language } from '../types/portal';

export const portalContent: Record<Language, PortalContent> = {
  tr: {
    brand: {
      name: "Mehmet Tahir Ürge",
      title: "Yazılım Sistemleri & Finansal Zeka",
      location: "İstanbul, TR"
    },
    nav: {
      urgeiq: "UrgeIQ",
      showcase: "Özellikler",
      hobbyCorner: "Hobi Köşesi",
      about: "Hakkımda",
      openApp: "UrgeIQ'yu Aç"
    },
    hero: {
      badge: "Amiral Gemisi Yazılım",
      title: "UrgeIQ Finansal Zeka & Karar Destek Sistemi",
      lead: "Çoklu banka POS komisyon optimizasyonu, net kâr-zarar analitiği ve çift yönlü bulut veri hattı.",
      sublead: "Mehmet Tahir Ürge tarafından geliştirilen; karmaşık işletme nakit akışını akılcılaştıran ve operasyonel kayıpları önleyen yeni nesil finansal işletim sistemi.",
      ctaPrimary: "UrgeIQ'yu İncele",
      ctaSecondary: "Sistem Yetenekleri",
      liveBadge: "Canlı Operasyon • v0.15",
      highlights: [
        { label: "Mimari", value: "MSSQL ↔ Supabase" },
        { label: "Optimizasyon", value: "Dinamik POS Komisyonu" },
        { label: "Analitik", value: "Net Kâr & Kasa Kontrolü" }
      ]
    },
    urgeiqSection: {
      badge: "Temel Çözüm",
      title: "UrgeIQ: Ticari Finansın Akılcı İşletim Sistemi",
      subtitle: "Bankaların karmaşık komisyon oranlarını, blokaj vadelerini ve kasa hareketlerini tek merkezde optimize eden finansal yönetim omurgası.",
      description: "Geleneksel muhasebe ve ERP sistemlerinin yetersiz kaldığı dinamik perakende ve ticari süreçlerde; çoklu şube, çoklu banka ve karmaşık POS blokaj vadelerini anlık olarak işler. İşletmelerin nakit kayıplarını önler ve gerçek zamanlı net kârlılığı görünür kılar.",
      liveUrl: "https://pnl.tahirurge.com",
      liveUrlText: "pnl.tahirurge.com'a Git",
      metricsTitle: "Operasyonel Hassasiyet & Finansal Güç",
      metrics: [
        {
          label: "POS Optimizasyonu",
          value: "%100 Dinamik",
          subtext: "Farklı bankaların güncel oranlarında en avantajlı tahsilat yönlendirmesi"
        },
        {
          label: "Veri Senkronizasyonu",
          value: "Çift Yönlü",
          subtext: "Yerel MSSQL altyapısı ile bulut Supabase arasında kesintisiz köprü"
        },
        {
          label: "Kâr & Zarar Şeffaflığı",
          value: "Gerçek Zamanlı",
          subtext: "Faturalar, masraflar ve POS komisyonları düşüldükten sonra net nakit"
        }
      ],
      featuresTitle: "Öne Çıkan Mimari Yetenekler",
      features: [
        {
          title: "Dinamik POS Komisyon & Vade Motoru",
          description: "Hangi bankanın hangi gün daha avantajlı komisyon ve blokaj sunduğunu analiz eder, kârlılığı doğrudan artırır.",
          badge: "Finansal Zeka",
          iconName: "trending-up"
        },
        {
          title: "MSSQL ↔ Supabase Bulut Veri Köprüsü",
          description: "Yerel ERP veri tabanı ile modern bulut mimarisi arasında milisaniye düzeyinde, güvenli veri akışı sağlar.",
          badge: "Veri Hattı",
          iconName: "database"
        },
        {
          title: "Gerçek Zamanlı Kasa & Fatura Akışı",
          description: "Şube kasaları, vadeli çek/ödemeler ve banka hareketlerini tek ekranda toplayarak nakit açığını önler.",
          badge: "Nakit Yönetimi",
          iconName: "layers"
        },
        {
          title: "Gelişmiş Karar Destek Raporlaması",
          description: "Şube kârlılığı, dönemsel marjlar ve işletme maliyet eğilimlerini görselleştirerek stratejik kararları hızlandırır.",
          badge: "Analitik",
          iconName: "cpu"
        }
      ],
      techStackTitle: "Mimari & Teknoloji Yığını",
      techStack: ["React 19", "TypeScript", "Tailwind CSS", "Supabase Cloud", "MSSQL Server", "Vite", "Edge APIs"]
    },
    hobbyCorner: {
      badge: "Atölye & Yan Projeler",
      title: "Hobi Köşesi",
      subtitle: "Kod satırlarının ve finansal sistemlerin ötesinde; edebi kurgu, felsefe ve deneysel üretimler.",
      intro: "Mühendislik titizliğinin yanında zihnimi besleyen bağımsız edebi eserlerim ve ileride ekleyeceğim yaratıcı projelerim için ayrılmış kişisel üretim alanım.",
      projects: [
        {
          id: "zero-sum-city",
          title: "Zero Sum City",
          subtitle: "Felsefi Bilim Kurgu Novellası",
          category: "Edebiyat",
          status: "active",
          statusText: "31 Bölüm • Çift Dil",
          description: "Mükemmelliğin tektipleştirdiği distopik bir gelecekte, sistem gözlemcisi Taylor'ın keşfettiği anomaliyi ve insan bilincinin sınırlarını konu alan modern felsefi anlatı.",
          highlights: [
            "31 Tam Bölüm (Türkçe & İngilizce)",
            "Gözü Yormayan Minimalist Okuyucu Deneyimi",
            "Kağıt, Sepya ve Gece Temaları"
          ],
          link: "https://novel.tahirurge.com",
          linkText: "novel.tahirurge.com'da Oku",
          isExternal: true
        },
        {
          id: "urgeiq-labs",
          title: "UrgeIQ Labs",
          subtitle: "Deneysel Yazılımlar & Araçlar",
          category: "Ar-Ge & Kod",
          status: "in-progress",
          statusText: "Geliştiriliyor",
          description: "Yapay zekâ tabanlı veri işleme araçları, bağımsız mikro-servisler ve açık kaynaklı geliştirici kütüphaneleri için kişisel kuluçka merkezi.",
          highlights: [
            "Yapay zekâ destekli analitik araç prototipleri",
            "Açık kaynak yardımcı kütüphaneler",
            "Hafif ve amaca odaklı mikro web araçları"
          ],
          link: "#",
          linkText: "Pek Yakında",
          isExternal: false
        },
        {
          id: "creative-writings",
          title: "Denemeler & Gelecek Kurgular",
          subtitle: "Sistem Felsefesi ve Yeni Anlatılar",
          category: "Yazı & Notlar",
          status: "planned",
          statusText: "Taslak Aşamasında",
          description: "Teknoloji, insan psikolojisi ve sistem dinamikleri üzerine kısa felsefi denemeler ile yeni kurgusal öykülerin yer alacağı edebi çalışma alanı.",
          highlights: [
            "Sistemik düşünce & teknoloji sosyolojisi yazıları",
            "Yeni bilim kurgu öykü taslakları",
            "Okuma & araştırma notları"
          ],
          link: "#",
          linkText: "Hazırlanıyor",
          isExternal: false
        }
      ]
    },
    aboutSection: {
      badge: "Geliştirici & Yazar",
      title: "Mehmet Tahir Ürge",
      subtitle: "Sistemler, kod ve kelimeler.",
      paragraphs: [
        "Karmaşık veri akışlarını yalın ve yüksek performanslı yazılım mimarilerine dönüştürüyorum. UrgeIQ ile ticari işletmelerin finansal operasyonlarını ve POS maliyetlerini akılcılaştırırken, modern web teknolojileri ve güvenilir veri hatları inşa ediyorum.",
        "Mühendislik yaklaşımımı edebiyat ve felsefeyle dengeliyorum. Zero Sum City novellam ve gelecekteki hobi projelerimle sistem dinamiklerini, insan bilincini ve mükemmeliyetçiliğin getirdiği paradoksları araştırıyorum."
      ],
      focusAreasTitle: "Uzmanlık & Üretim Alanları",
      focusAreas: [
        {
          title: "UrgeIQ Finansal Mimarisi",
          description: "Çoklu banka POS komisyon optimizasyonu, net kâr analitiği, dinamik nakit akışı ve çift yönlü bulut veri akışı."
        },
        {
          title: "Modern Web & Veri Mühendisliği",
          description: "React 19, TypeScript, Supabase ve kurumsal MSSQL entegrasyonlarıyla yüksek performanslı yazılım sistemleri."
        },
        {
          title: "Edebi Kurgu & Felsefi Anlatı",
          description: "Distopik gelecekleri, varoluşsal ikilemleri ve insan bilincinin sistemlerle çatışmasını işleyen bağımsız eserler."
        }
      ]
    },
    footer: {
      quote: "Mükemmellik sıkıcıdır; aslolan sistemin içindeki o çatlağı bulmaktır.",
      copyright: "Tüm hakları saklıdır.",
      builtWith: "React 19, TypeScript & Tailwind CSS"
    }
  },
  en: {
    brand: {
      name: "Mehmet Tahir Ürge",
      title: "Software Systems & Financial Intelligence",
      location: "Istanbul, TR"
    },
    nav: {
      urgeiq: "UrgeIQ",
      showcase: "Capabilities",
      hobbyCorner: "Hobby Corner",
      about: "About",
      openApp: "Launch UrgeIQ"
    },
    hero: {
      badge: "Flagship Software",
      title: "UrgeIQ Financial Intelligence & Decision OS",
      lead: "Dynamic multi-bank POS commission optimization, real-time net PnL analytics, and bi-directional cloud data pipelines.",
      sublead: "Engineered by Mehmet Tahir Ürge; an advanced financial operating system that rationalizes enterprise cash flow and eliminates merchant settlement leakage.",
      ctaPrimary: "Explore UrgeIQ",
      ctaSecondary: "System Architecture",
      liveBadge: "Live Production • v0.15",
      highlights: [
        { label: "Architecture", value: "MSSQL ↔ Supabase" },
        { label: "Optimization", value: "Dynamic POS Commission" },
        { label: "Analytics", value: "Real-Time Net PnL" }
      ]
    },
    urgeiqSection: {
      badge: "Primary Venture",
      title: "UrgeIQ: Intelligent Operating System for Commercial Finance",
      subtitle: "A centralized decision engine optimizing multi-bank settlement fees, blocking terms, and treasury cash flow in real-time.",
      description: "Where legacy ERPs and static spreadsheets stumble, UrgeIQ dynamically routes transactions across multiple banks, tracks rolling blockages, and provides accurate net profitability visibility for commercial retail operations.",
      liveUrl: "https://pnl.tahirurge.com",
      liveUrlText: "Visit pnl.tahirurge.com",
      metricsTitle: "Operational Precision & Analytical Power",
      metrics: [
        {
          label: "POS Commission Engine",
          value: "100% Dynamic",
          subtext: "Automated cost-minimizing bank routing and settlement terms"
        },
        {
          label: "Cloud Synchronization",
          value: "Bi-Directional",
          subtext: "Seamless low-latency bridge between local MSSQL and Supabase cloud"
        },
        {
          label: "Profit Visibility",
          value: "Real-Time",
          subtext: "Accurate net profit calculations factoring fees, taxes, and expenditures"
        }
      ],
      featuresTitle: "Core Architectural Capabilities",
      features: [
        {
          title: "Dynamic POS Commission & Maturity Engine",
          description: "Calculates which bank offers optimal commission and settlement terms daily, directly reducing processing losses.",
          badge: "Financial AI",
          iconName: "trending-up"
        },
        {
          title: "MSSQL ↔ Supabase Cloud Data Bridge",
          description: "Synchronizes legacy on-premise transactional databases with modern cloud infrastructure securely and instantaneously.",
          badge: "Data Pipeline",
          iconName: "database"
        },
        {
          title: "Consolidated Treasury & Invoicing Flow",
          description: "Harmonizes bank accounts, physical cash drawers, and upcoming payables to provide a cohesive cash flow forecast.",
          badge: "Cash Flow",
          iconName: "layers"
        },
        {
          title: "Executive Decision Support & Reporting",
          description: "Visualizes branch margins, periodic financial trajectories, and cost anomalies to empower executive decisions.",
          badge: "Analytics",
          iconName: "cpu"
        }
      ],
      techStackTitle: "Architecture & Technology Stack",
      techStack: ["React 19", "TypeScript", "Tailwind CSS", "Supabase Cloud", "MSSQL Server", "Vite", "Edge APIs"]
    },
    hobbyCorner: {
      badge: "Workshop & Side Pursuits",
      title: "Hobby Corner",
      subtitle: "Beyond software architecture and financial systems; literary fiction, philosophy, and creative experiments.",
      intro: "An independent workshop where I explore existential themes, speculative fiction, and experimental side utilities to balance technical discipline.",
      projects: [
        {
          id: "zero-sum-city",
          title: "Zero Sum City",
          subtitle: "Philosophical Sci-Fi Novella",
          category: "Literature",
          status: "active",
          statusText: "31 Chapters • Bilingual",
          description: "A contemplative narrative set in a frictionless dystopian future where flawless optimization erodes human consciousness, following observer Taylor's encounter with an anomaly.",
          highlights: [
            "31 Full Chapters (Turkish & English)",
            "Distraction-Free Minimalist Reader",
            "Paper, Sepia, and Obsidian Themes"
          ],
          link: "https://novel.tahirurge.com",
          linkText: "Read on novel.tahirurge.com",
          isExternal: true
        },
        {
          id: "urgeiq-labs",
          title: "UrgeIQ Labs",
          subtitle: "Experimental Utilities & Tools",
          category: "R&D & Code",
          status: "in-progress",
          statusText: "In Development",
          description: "A sandbox incubator for AI-assisted data tools, standalone micro-services, and open-source developer utilities.",
          highlights: [
            "AI-assisted analytical prototypes",
            "Open-source developer utilities",
            "Lightweight purposeful web tools"
          ],
          link: "#",
          linkText: "Coming Soon",
          isExternal: false
        },
        {
          id: "creative-writings",
          title: "Essays & Future Narratives",
          subtitle: "Systems Philosophy & Explorations",
          category: "Writings",
          status: "planned",
          statusText: "In Planning",
          description: "Short essays on technology sociology, conscious systems, and speculative fiction outlines exploring future human conditions.",
          highlights: [
            "Systems thinking & tech essays",
            "New speculative fiction drafts",
            "Research & reading logs"
          ],
          link: "#",
          linkText: "In Preparation",
          isExternal: false
        }
      ]
    },
    aboutSection: {
      badge: "Engineer & Author",
      title: "Mehmet Tahir Ürge",
      subtitle: "Systems, code, and narrative.",
      paragraphs: [
        "I engineer elegant, high-performance software systems from intricate operational data. Through UrgeIQ, I rationalize commercial finance and merchant POS overhead while building resilient cloud architectures with React 19 and TypeScript.",
        "I balance engineering rigor with philosophical storytelling. Through my novella Zero Sum City and future creative pursuits, I investigate system dynamics, human alienation, and the paradoxes of perfectionism."
      ],
      focusAreasTitle: "Areas of Expertise & Creation",
      focusAreas: [
        {
          title: "UrgeIQ Financial Architecture",
          description: "Dynamic multi-bank POS commission routing, net profit visibility, cash flow intelligence, and bi-directional cloud synchronization."
        },
        {
          title: "Modern Web & Data Engineering",
          description: "High-performance digital platforms using React 19, TypeScript, Supabase, and enterprise MSSQL integrations."
        },
        {
          title: "Literary Fiction & Philosophy",
          description: "Independent creative works exploring dystopian realities, consciousness, and human friction inside flawless systems."
        }
      ]
    },
    footer: {
      quote: "Perfection was boring; what truly matters is discovering the crack waiting inside the system.",
      copyright: "All rights reserved.",
      builtWith: "React 19, TypeScript & Tailwind CSS"
    }
  }
};
