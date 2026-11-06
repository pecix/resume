/**
 * Dane CV Artura Petrusiewicza
 * Dedykowany plik danych umożliwiający łatwą edycję i wsparcie dla języka polskiego i angielskiego.
 */
const cvData = {
  pl: {
    meta: {
      langBtn: "Wersja językowa",
      printBtn: "Drukuj / Pobierz PDF",
      updated: "Ostatnia aktualizacja",
      contactTitle: "Kontakt",
      skillsTitle: "Umiejętności techniczne",
      experienceTitle: "Doświadczenie zawodowe i projekty",
      educationTitle: "Edukacja i wykształcenie",
      languagesTitle: "Języki obce",
      aboutTitle: "Podsumowanie zawodowe",
      keyAchievementsTitle: "Kluczowe osiągnięcia i zakres odpowiedzialności:"
    },
    personal: {
      name: "Artur Petrusiewicz",
      title: "Senior Fullstack Developer",
      subtitle: "10+ lat doświadczenia komercyjnego w projektowaniu i wdrażaniu systemów klasy enterprise",
      location: "Warszawa / Remote",
      email: "pecixx@gmail.com",
      github: "https://github.com/pecix",
      githubUser: "github.com/pecix",
      about: "Doświadczony Senior Fullstack Developer z ponad 10-letnim stażem w inżynierii oprogramowania i architekturze systemów o znaczeniu krytycznym (mission-critical). Specjalizuję się w tworzeniu bezpiecznych, wysoko wydajnych aplikacji webowych w oparciu o ekosystem Java (Spring Boot), relacyjne bazy danych (PostgreSQL) oraz nowoczesny frontend (Angular, TypeScript).\n\nPosiadam unikalne połączenie głębokiej wiedzy technicznej z wykształceniem ekonomicznym, co pozwala mi doskonale rozumieć złożone procesy biznesowe, obrót finansowo-księgowy oraz rygorystyczne wymagania audytowe i prawne. Jako główny programista i współtwórca zrealizowałem od podstaw oraz wdrożyłem ogólnokrajowe systemy klasy Enterprise dla polskiej Służby Więziennej (obsługa kadr funkcjonariuszy oraz pełna księgowość budżetowa i depozytowa)."
    },
    skills: [
      {
        category: "Backend & Architektura",
        items: ["Java", "Spring Boot", "Spring Data / JPA", "Hibernate", "RESTful APIs", "Architektura Enterprise", "Mikrousługi", "Bezpieczeństwo aplikacji (Spring Security)"]
      },
      {
        category: "Bazy Danych & SQL",
        items: ["PostgreSQL", "SQL (zaawansowane zapytania)", "Modelowanie relacyjnych baz danych", "Optymalizacja wydajności zapytań", "Procedury składowane", "Transakcyjność ACID"]
      },
      {
        category: "Frontend & Web",
        items: ["TypeScript", "Angular", "HTML5", "CSS3 / SCSS", "Responsive Web Design (RWD)", "State Management", "Integracja API / RxJS"]
      },
      {
        category: "Narzędzia & Metodologia",
        items: ["Git / GitHub", "Maven / Gradle", "Docker", "Dobre praktyki Clean Code & SOLID", "Testy jednostkowe i integracyjne", "Metodologie Agile / Scrum", "Zarządzanie bezpieczeństwem danych poufnych"]
      }
    ],
    experience: [
      {
        role: "Senior Fullstack Developer / Główny Programista",
        company: "Służba Więzienna / Projekty Rządowe & Enterprise",
        period: "2014 – obecnie",
        location: "Warszawa / Polska",
        projectBadge: "Projekty Strategiczne",
        description: "Projektowanie, rozwój architektury oraz pełne wdrożenie produkcyjne dwóch kluczowych ogólnokrajowych systemów informatycznych obsługujących tysiące użytkowników w jednostkach penitencjarnych w całej Polsce.",
        projects: [
          {
            name: "System Finansowo-Księgowy (Służba Więzienna)",
            role: "Architektura & Rozwój Fullstack (Java, Spring Boot, PostgreSQL, Angular)",
            summary: "Zaawansowany system centralny do obsługi księgowości budżetowej jednostek penitencjarnych oraz gospodarki depozytowej osób pozbawionych wolności.",
            points: [
              "Zaprojektowanie i wdrożenie kompletnego modułu księgowości budżetowej, zgodnego z polskimi przepisami o finansach publicznych i rachunkowości.",
              "Stworzenie bezpiecznego modułu ewidencji i operacji na środkach finansowych (kontach depozytowych) osób pozbawionych wolności, w tym obsługa potrąceń komorniczych, alimentacyjnych oraz wypłat.",
              "Zapewnienie pełnej spójności transakcyjnej (ACID) oraz audytowalności każdej operacji finansowej na poziomie bazy danych PostgreSQL.",
              "Opracowanie intuicyjnego interfejsu w Angular/TypeScript ułatwiającego pracę pracownikom działów finansowych i kadr w kilkudziesięciu jednostkach w kraju."
            ]
          },
          {
            name: "System Kadrowy (Obsługa Funkcjonariuszy Służby Więziennej)",
            role: "Architektura & Rozwój Fullstack (Java, Spring Boot, PostgreSQL, Angular)",
            summary: "Centralny system ewidencji i zarządzania zasobami ludzkimi dla formacji mundurowej.",
            points: [
              "Wdrożenie modułów ewidencji przebiegu służby funkcjonariuszy i pracowników cywilnych: etaty, stopnie służbowe, awanse, uposażenia, dodatki branżowe i wysługa lat.",
              "Automatyzacja naliczania świadczeń, urlopów, delegacji oraz sprawozdawczości kadrowej do centralnych organów nadzorczych.",
              "Implementacja rygorystycznych mechanizmów kontroli dostępu (Role-Based Access Control) ze względu na przetwarzanie danych niejawnych i wrażliwych.",
              "Optymalizacja bazy PostgreSQL pod kątem szybkiego generowania zagregowanych raportów i zestawień analitycznych dla kierownictwa formacji."
            ]
          }
        ]
      },
      {
        role: "Senior Fullstack Software Engineer",
        company: "Projekty Komercyjne & Doradztwo IT",
        period: "10+ lat doświadczenia",
        location: "Warszawa / Zdalnie",
        projectBadge: "Fullstack Engineering",
        description: "Wieloletnia praktyka w budowie dedykowanych rozwiązań webowych, integracji systemów z zewnętrznymi API oraz optymalizacji baz danych.",
        projects: [
          {
            name: "Rozwój systemów webowych i integracji API",
            role: "Fullstack Engineer",
            summary: "Kompleksowa realizacja aplikacji biznesowych od koncepcji po deployment i utrzymanie.",
            points: [
              "Projektowanie skalowalnych architektur backendowych w Spring Boot z wykorzystaniem wzorców projektowych i czystej architektury.",
              "Tworzenie nowoczesnych, responsywnych interfejsów użytkownika w oparciu o Angular i TypeScript.",
              "Optymalizacja zapytań SQL, indeksowania i struktury bazy PostgreSQL w celu eliminacji wąskich gardeł wydajnościowych."
            ]
          }
        ]
      }
    ],
    education: [
      {
        institution: "Uniwersytet Szczeciński",
        degree: "Studia Wyższe",
        field: "Ekonomia",
        period: "Szczecin, Polska",
        description: "Wykształcenie ekonomiczne dało mi dogłębne zrozumienie analizy ilościowej, mechanizmów finansowo-księgowych oraz procesów biznesowych. Stanowi ono kluczowy atut przy tworzeniu zaawansowanego oprogramowania dedykowanego finansom, kadrom i zarządzaniu kapitałem."
      }
    ],
    languages: [
      { name: "Język polski", level: "Ojczysty (Native)" },
      { name: "Język angielski", level: "B2 / C1 – Płynna komunikacja techniczna i biznesowa" }
    ],
    rodo: "Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych (RODO)."
  },

  en: {
    meta: {
      langBtn: "Language",
      printBtn: "Print / Save PDF",
      updated: "Last updated",
      contactTitle: "Contact Information",
      skillsTitle: "Technical Skills",
      experienceTitle: "Professional Experience & Projects",
      educationTitle: "Education",
      languagesTitle: "Languages",
      aboutTitle: "Professional Summary",
      keyAchievementsTitle: "Key Responsibilities & Achievements:"
    },
    personal: {
      name: "Artur Petrusiewicz",
      title: "Senior Fullstack Developer",
      subtitle: "10+ years of commercial experience engineering & deploying mission-critical enterprise systems",
      location: "Warsaw, Poland / Remote",
      email: "pecixx@gmail.com",
      github: "https://github.com/pecix",
      githubUser: "github.com/pecix",
      about: "Accomplished Senior Fullstack Developer with over 10 years of experience in software engineering and enterprise architecture for mission-critical systems. Specializing in designing resilient, highly performant web applications using the Java ecosystem (Spring Boot), relational databases (PostgreSQL), and modern front-end technologies (Angular, TypeScript).\n\nPossesses a rare blend of deep technical mastery and an educational background in Economics, enabling seamless communication with stakeholders, precise modeling of complex financial/budgeting domains, and strict compliance with legal/auditing standards. Architected and successfully deployed nationwide, production-grade enterprise solutions for the Polish Prison Service (comprehensive personnel & service records management, alongside statutory budget and inmate deposit accounting)."
    },
    skills: [
      {
        category: "Backend & Architecture",
        items: ["Java", "Spring Boot", "Spring Data / JPA", "Hibernate", "RESTful APIs", "Enterprise Architecture", "Microservices", "Application Security (Spring Security)"]
      },
      {
        category: "Databases & SQL",
        items: ["PostgreSQL", "Advanced SQL", "Relational Data Modeling", "Query & Index Optimization", "Stored Procedures", "ACID Transactions"]
      },
      {
        category: "Frontend & Web",
        items: ["TypeScript", "Angular", "HTML5", "CSS3 / SCSS", "Responsive Web Design (RWD)", "State Management", "API Integration / RxJS"]
      },
      {
        category: "Engineering & Methodologies",
        items: ["Git / GitHub", "Maven / Gradle", "Docker", "Clean Code & SOLID Principles", "Unit & Integration Testing", "Agile / Scrum", "Data Privacy & Confidential Data Handling"]
      }
    ],
    experience: [
      {
        role: "Senior Fullstack Developer / Lead Software Engineer",
        company: "Prison Service / Government & Enterprise Systems",
        period: "2014 – Present",
        location: "Warsaw, Poland",
        projectBadge: "Mission-Critical Systems",
        description: "Architected, developed, and deployed nationwide enterprise software systems serving thousands of active operational users across correctional facilities across Poland.",
        projects: [
          {
            name: "Financial & Accounting Enterprise System (Prison Service)",
            role: "Architecture & Fullstack Development (Java, Spring Boot, PostgreSQL, Angular)",
            summary: "Nationwide enterprise software for statutory budget accounting and financial deposit management for incarcerated individuals.",
            points: [
              "Designed and deployed the central budget accounting engine conforming to national public finance regulations and auditing frameworks.",
              "Implemented an immutable, auditable inmate deposit accounting module managing bailiff deductions, alimony allocations, and financial disbursements.",
              "Guaranteed strict ACID transactional consistency and comprehensive event logging across PostgreSQL databases.",
              "Crafted a high-throughput, ergonomic user interface in Angular & TypeScript used daily by financial department specialists nationwide."
            ]
          },
          {
            name: "Personnel & Human Resources Management System (Prison Service)",
            role: "Architecture & Fullstack Development (Java, Spring Boot, PostgreSQL, Angular)",
            summary: "Centralized HR and service trajectory system managing officers and civilian staff across all penitentiary units.",
            points: [
              "Delivered core modules for tracking service progression: organizational charts, military/prison ranks, promotions, remuneration formulas, special allowances, and statutory leaves.",
              "Automated payroll computations, statutory allowances, and scheduled compliance reports for ministerial oversight.",
              "Enforced strict Role-Based Access Control (RBAC) and data classification policies for protected sensitive personnel records.",
              "Optimized PostgreSQL schema and complex analytical reporting queries for senior management decision-making."
            ]
          }
        ]
      },
      {
        role: "Senior Fullstack Software Engineer",
        company: "Commercial Projects & IT Consulting",
        period: "10+ Years Track Record",
        location: "Warsaw / Remote",
        projectBadge: "Fullstack Engineering",
        description: "Long-standing engineering practice delivering tailored enterprise web platforms, custom integrations, and database performance tuning.",
        projects: [
          {
            name: "Enterprise Web Systems & API Development",
            role: "Fullstack Engineer",
            summary: "Comprehensive software lifecycle execution from business analysis to production deployment.",
            points: [
              "Engineered scalable Java/Spring Boot backend architectures applying clean design patterns and domain-driven design principles.",
              "Developed responsive, accessible, and fast single-page applications using Angular, TypeScript, and modern CSS.",
              "Tuned database queries, indexes, and connection pools to eliminate latency and ensure high availability."
            ]
          }
        ]
      }
    ],
    education: [
      {
        institution: "University of Szczecin",
        degree: "Higher Education Degree",
        field: "Economics",
        period: "Szczecin, Poland",
        description: "The academic background in Economics provided deep analytical training, quantitative modeling skills, and an in-depth understanding of financial accounting and business operations—serving as a cornerstone for engineering mission-critical financial and personnel software systems."
      }
    ],
    languages: [
      { name: "Polish", level: "Native proficiency" },
      { name: "English", level: "B2 / C1 – Professional working proficiency (technical & business)" }
    ],
    rodo: "I hereby consent to my personal data being processed for the purpose of recruitment in accordance with the applicable Personal Data Protection Act and General Data Protection Regulation (GDPR)."
  }
};
