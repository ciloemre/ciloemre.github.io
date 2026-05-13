export type Lang = 'en' | 'tr';

export type SkillCard = {
  title: string;
  badge?: string;
  items: readonly string[];
  overlayWhat: string;
  overlayExperience: string;
  overlayWhatLabel?: string;
  overlayExperienceLabel?: string;
};

type ProjectItem = {
  slug: string;
  title: string;
  description: string;
};

export type LocaleBlock = {
  nav: {
    skills: string;
    experience: string;
    projects: string;
    homeAria: string;
  };
  hero: {
    kicker: string;
    name: string;
    title: string;
    bioP1: string;
    bioP2: string;
    bioP3: string;
  };
  skills: {
    title: string;
    subtitle: string;
    overlayWhatLabel: string;
    overlayExperienceLabel: string;
    cards: {
      core: SkillCard;
      backend: SkillCard;
      architecture: SkillCard;
      ecosystem: SkillCard;
    };
  };

  experience: {
    title: string;
    subtitle?: string;
    roles: readonly {
      company: string;
      title: string;
      period?: string;
      bullets?: readonly { categoryLabel: string; text: string }[];
      body?: string;
    }[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: readonly ProjectItem[];
  };
  footer: { ariaLabel: string };
};

export const portfolioCopy: Record<Lang, LocaleBlock> = {
  en: {
    nav: {
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      homeAria: 'Emre Çilo — home',
    },
    hero: {
      kicker: 'Portfolio',
      name: 'Emre Çilo',
      title: 'Systems Architect & Senior Full Stack Developer',
      bioP1:
        'I build durable software solutions that streamline business processes. I am experienced in modernizing legacy systems and transforming complex operations into digital applications such as CRMs, web platforms, and e-commerce infrastructures.',
      bioP2:
        'Taking ownership across the entire tech stack—from database architecture to the user interface—I develop projects with clean code, sustainable architecture, and a user-centric approach that add real value to companies.',
      bioP3:
        "Furthermore, with my experience in business analysis and project management, I don't just focus on the code; I accurately understand business needs and plan the entire process from start to finish.",
    },
    skills: {
      title: 'Tech Stack',
      subtitle: 'The tools I use and how I apply them.',
      overlayWhatLabel: 'What I did',
      overlayExperienceLabel: 'Experience',
      cards: {
        core: {
          title: 'Frontend',
          badge: 'React & Next.js',
          items: [
            'React',
            'Next.js',
            'JavaScript',
            'TypeScript',
            'Tailwind CSS',
            'Mantine',
            'Zustand',
          ],
          overlayWhat:
            'Enterprise CRM dashboards, high-volume e-commerce interfaces, and micro-frontend modules.',
          overlayExperience:
            'Performance optimization via SSR/SSG and scalable component architecture using modern UI libraries.',
        },
        backend: {
          title: 'Backend & Database',
          badge: 'Scalable Systems',
          items: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'REST API'],
          overlayWhatLabel: 'WHAT I DID',
          overlayExperienceLabel: 'EXPERIENCE',
          overlayWhat:
            'Core business logic for enterprise CRM and e-commerce infrastructures, secure data flow, and 3rd-party API integrations.',
          overlayExperience:
            'NoSQL (MongoDB) and SQL (PostgreSQL) database modeling tailored to data nature, and high-performance RESTful service design.',
        },
        architecture: {
          title: 'Architecture & SDLC',
          badge: 'End-to-End Delivery',
          items: [
            'SDLC',
            'Business Analysis',
            'Agile / Scrum',
            'Jest & RTL',
            'CI/CD',
          ],
          overlayWhatLabel: 'WHAT I DID',
          overlayExperienceLabel: 'EXPERIENCE',
          overlayWhat:
            'Translating business processes into technical architecture, sprint planning, and SDLC management.',
          overlayExperience:
            'End-to-end project management with Agile practices, unit testing (Jest/RTL), and sustainable code quality.',
        },
        ecosystem: {
          title: 'Ecosystem & DevOps',
          badge: 'Enterprise Exposure',
          items: ['Docker', 'Azure', 'Microservices', 'Elasticsearch', 'Git'],
          overlayWhatLabel: 'WHAT I DID',
          overlayExperienceLabel: 'EXPERIENCE',
          overlayWhat:
            'Operational support in large-scale projects, cloud integrations, and platform search optimizations.',
          overlayExperience:
            'Containerization with Docker, Azure DevOps workflows, and high-performance data search structures via Elasticsearch.',
        },
      },
    },
    experience: {
      title: 'Work Experience',
      roles: [
        {
          company: 'Gerdem Makine',
          title: 'Systems Architect & Senior Full Stack Developer',
          bullets: [
            {
              categoryLabel: 'Architecture & Business Logic:',
              text: "Leading the company's digital transformation by migrating legacy PHP structures to high-performance modern Next.js and Node.js architectures. Moving beyond basic web frameworks, I integrate complex product trees containing thousands of specifications from global brands, along with advanced engineering calculations, into digital systems.",
            },
            {
              categoryLabel: 'CRM & Data Automation:',
              text: 'Designing a comprehensive CRM to automate internal operations, including sales rep reports, field visit calendars, dynamic quote/proforma generation, customer management, personnel management, and order/stock tracking.',
            },
            {
              categoryLabel: 'Custom E-Commerce & Integration:',
              text: 'Developing our custom in-house e-commerce platform for external markets while simultaneously managing API integrations and data synchronization with 3rd-party systems like IdeaSoft.',
            },
            {
              categoryLabel: 'Database & Server Infrastructure:',
              text: 'Designing scalable database schemas and managing the configuration and data security of internal QNAP servers end-to-end.',
            },
          ],
        },
        {
          company: 'New Mind',
          title: 'Full Stack Developer',
          bullets: [
            {
              categoryLabel: 'Microservices Ecosystem & UI:',
              text: 'Worked on enterprise projects developed within a microservices architecture isolated by business domains. Built high-performance, user-focused web interfaces using React and Next.js on independently runnable, modular structures.',
            },
            {
              categoryLabel: 'Backend & Data Integration:',
              text: 'Supported data flow processes in systems developed with Go (Golang) and worked on structures communicating with Elasticsearch-based backend services.',
            },
            {
              categoryLabel: 'Corporate Agile Workflows:',
              text: 'Participated in the product development cycle in full compliance with sprint-based Agile/Scrum methodologies managed via Azure DevOps, coordinating closely with business analysts and technical teams.',
            },
          ],
        },
      ],
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Core systems I have architected and built.',
      items: [
        {
          slug: 'otomatika',
          title: 'Otomatika E-Commerce Architecture',
          description:
            'High-volume commerce platform—a deliberate technical backbone for integrations, throughput, and a UI that survives real traffic spikes.',
        },
        {
          slug: 'crm',
          title: 'Enterprise CRM Modernization',
          description:
            'Rebuilt internal operations and personnel tracking from fragile legacy flows into coherent data models teams could trust day to day.',
        },
      ],
    },
    footer: { ariaLabel: 'Footer' },
  },
  tr: {
    nav: {
      skills: 'Teknoloji',
      experience: 'Deneyim',
      projects: 'Projeler',
      homeAria: 'Emre Çilo — ana sayfa',
    },
    hero: {
      kicker: 'Portfolyo',
      name: 'Emre Çilo',
      title: 'Systems Architect & Senior Full Stack Developer',
      bioP1:
        'İş süreçlerini kolaylaştıran kalıcı yazılım çözümleri üretiyorum. Eski (legacy) sistemlerin modernleştirilmesi; karmaşık operasyonların CRM, web platformları ve e-ticaret altyapıları gibi dijital uygulamalara dönüştürülmesinde tecrübeliyim.',
      bioP2:
        'Veritabanı kurgusundan kullanıcı arayüzüne kadar tüm teknolojik süreçlerde sorumluluk alıyor; temiz kod, sürdürülebilir mimari ve kullanıcı odaklı bir yaklaşımla şirketlere gerçek değer katan projeler geliştiriyorum.',
      bioP3:
        'Bununla beraber sahip olduğum iş analizi ve proje yönetimi tecrübesiyle sadece koda odaklanmıyor; işin ihtiyaçlarını doğru anlayarak süreci baştan sona planlıyorum.',
    },
    skills: {
      title: 'Teknoloji',
      subtitle: 'Kullandığım teknolojiler ve projelerdeki rolüm.',
      overlayWhatLabel: 'Ne Yaptım',
      overlayExperienceLabel: 'Tecrübe',
      cards: {
        core: {
          title: 'Önyüz Geliştirme',
          badge: 'React & Next.js',
          items: [
            'React',
            'Next.js',
            'JavaScript',
            'TypeScript',
            'Tailwind CSS',
            'Mantine',
            'Zustand',
          ],
          overlayWhat:
            'Kurumsal CRM panelleri, yüksek hacimli e-ticaret arayüzleri ve mikro-frontend modülleri.',
          overlayExperience:
            'SSR/SSG ile performans optimizasyonu ve modern UI kütüphaneleriyle ölçeklenebilir bileşen mimarisi.',
        },
        backend: {
          title: 'Sunucu & Veritabanı',
          badge: 'Ölçeklenebilir Sistemler',
          items: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'REST API'],
          overlayWhatLabel: 'NE YAPTIM',
          overlayExperienceLabel: 'TECRÜBE',
          overlayWhat:
            'Kurumsal CRM ve e-ticaret altyapılarının çekirdek iş mantığı (business logic), güvenli veri akışı ve 3. parti API entegrasyonları.',
          overlayExperience:
            'Verinin doğasına uygun NoSQL (MongoDB) ve SQL (PostgreSQL) veritabanı modellemesi ile yüksek performanslı RESTful servis tasarımı.',
        },
        architecture: {
          title: 'Mimari & Süreç',
          badge: 'Uçtan Uca Teslimat',
          items: [
            'SDLC',
            'İş Analizi',
            'Agile / Scrum',
            'Jest & RTL',
            'CI / CD',
          ],
          overlayWhatLabel: 'NE YAPTIM',
          overlayExperienceLabel: 'TECRÜBE',
          overlayWhat:
            'İş süreçlerinin analiz edilerek teknik mimariye dönüştürülmesi, sprint planlamaları ve yazılım yaşam döngüsü (SDLC) yönetimi.',
          overlayExperience:
            'Agile pratikleri ile uçtan uca proje yönetimi, birim testleri (Jest/RTL) ve sürdürülebilir kod kalitesi standartları.',
        },
        ecosystem: {
          title: 'Ekosistem & DevOps',
          badge: 'Kurumsal Deneyim',
          items: ['Docker', 'Azure', 'Microservices', 'Elasticsearch', 'Git'],
          overlayWhatLabel: 'NE YAPTIM',
          overlayExperienceLabel: 'TECRÜBE',
          overlayWhat:
            'Büyük ölçekli projelerde operasyonel destek, bulut (cloud) entegrasyonları ve platform arama optimizasyonları.',
          overlayExperience:
            'Docker ile konteynerizasyon, Azure DevOps süreçleri ve Elasticsearch ile yüksek performanslı veri arama yapıları.',
        },
      },
    },
    experience: {
      title: 'İş Geçmişi',
      roles: [
        {
          company: 'Gerdem Makine',
          title: 'Systems Architect & Senior Full Stack Developer',
          bullets: [
            {
              categoryLabel: 'Mimari & İş Mantığı:',
              text: 'Eski PHP tabanlı "legacy" yapıları, yüksek performanslı modern Next.js ve Node.js mimarilerine taşıyarak şirketin dijital dönüşümüne liderlik ediyorum. Basit web yapılarının ötesine geçerek; global markaların binlerce spesifikasyon içeren karmaşık ürün ağaçlarını ve mühendislik hesaplamalarını dijital sistemlere entegre ediyorum.',
            },
            {
              categoryLabel: 'CRM & Veri Otomasyonu:',
              text: 'Şirket içi operasyonlar için; satış personeli raporları, saha ziyaret takvimleri, dinamik teklif/proforma hazırlama, müşteri havuzu, personel yönetimi ve sipariş/stok takibi süreçlerini otomatize eden kapsamlı bir CRM kurguluyorum.',
            },
            {
              categoryLabel: 'Özel E-Ticaret & Entegrasyon:',
              text: 'Dış pazara yönelik kendi özel e-ticaret platformumuzu geliştiriyor; eşzamanlı olarak IdeaSoft gibi 3. parti sistemlerin API entegrasyonlarını ve veri senkronizasyonunu yönetiyorum.',
            },
            {
              categoryLabel: 'Veritabanı & Sunucu Altyapısı:',
              text: 'Ölçeklenebilir veritabanı şemalarını kurguluyor, şirket içi QNAP sunucularının yapılandırmasını ve veri güvenliğini uçtan uca yönetiyorum.',
            },
          ],
        },
        {
          company: 'New Mind',
          title: 'Full Stack Developer',
          bullets: [
            {
              categoryLabel: 'Mikroservis Ekosistemi & Arayüz:',
              text: 'İş birimlerine göre izole edilmiş mikroservis mimarisinde geliştirilen kurumsal projelerde görev aldım. Bağımsız çalıştırılabilen modüler yapılar üzerinde React ve Next.js teknolojilerini kullanarak yüksek performanslı ve kullanıcı odaklı web arayüzleri inşa ettim.',
            },
            {
              categoryLabel: 'Backend & Veri Entegrasyonu:',
              text: 'Go (Golang) dili ile geliştirilen sistemlerde veri akış süreçlerine destek verdim; Elasticsearch tabanlı backend servisleriyle iletişim kuran yapılar üzerinde çalıştım.',
            },
            {
              categoryLabel: 'Kurumsal Agile Süreçleri:',
              text: 'İş analistleri ve teknik ekiplerin koordinasyonunda, Azure DevOps platformu üzerinden yürütülen sprint tabanlı Agile/Scrum metodolojilerine tam uyumlu bir yapıda ürün geliştirme döngüsünde yer aldım.',
            },
          ],
        },
      ],
    },
    projects: {
      title: 'Öne Çıkan Projeler',
      subtitle: 'Geliştirdiğim ve mimarisini kurduğum temel sistemler.',
      items: [
        {
          slug: 'otomatika',
          title: 'Otomatika E-Ticaret Altyapısı',
          description:
            'Yüksek hacimli e-ticaret için bilinçli teknik çerçeve—entegrasyonlar, iş yükü ve gerçek trafikte ayakta kalan kullanıcı arayüzü.',
        },
        {
          slug: 'crm',
          title: 'Kurumsal CRM Modernizasyonu',
          description:
            'Kırılgan miras akışlarından çıkıp; iç operasyon ve personel takibini güvenilir veri modellerine oturtarak yeniden inşa etmek.',
        },
      ],
    },
    footer: { ariaLabel: 'Alt bilgi' },
  },
};
