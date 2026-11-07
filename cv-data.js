/**
 * Dane CV Artura Petrusiewicza
 * Zsynchronizowane z oryginalnym CV i wzbogacone o pełne 10-letnie doświadczenie komercyjne i inżynieryjne.
 */
const cvData = {
  pl: {
    meta: {
      langBtn: "Wersja językowa",
      printBtn: "Drukuj / Pobierz PDF",
      updated: "Ostatnia aktualizacja",
      contactTitle: "Kontakt",
      skillsTitle: "Umiejętności i Technologie",
      experienceTitle: "Doświadczenie zawodowe",
      projectsTitle: "Kluczowe Projekty",
      educationTitle: "Edukacja",
      languagesTitle: "Języki obce",
      aboutTitle: "O mnie",
      competenciesTitle: "Cechy i kompetencje",
      keyAchievementsTitle: "Kluczowe osiągnięcia i zakres odpowiedzialności:",
      printModal: {
        title: "Drukowanie / Zapis do PDF",
        desc: "Przeglądarki na tabletach i smartfonach (zwłaszcza Safari na iPadzie) ze względów bezpieczeństwa blokują wywołanie systemowego okna drukowania z wewnątrz osadzonej ramki podglądu (iframe).",
        openTab: "Otwórz stronę w nowej karcie (Zalecane)",
        downloadHtml: "Pobierz plik CV (.html) na urządzenie",
        tipTitle: "💡 Jak zapisać do PDF na iPadzie / tablecie:",
        tipStep1: "Kliknij „Otwórz stronę w nowej karcie” powyżej.",
        tipStep2: "W nowej karcie kliknij „Drukuj” lub użyj menu przeglądarki (ikona Udostępnij ⎋ → Drukuj).",
        tipStep3: "W oknie podglądu wydruku rozsuń dwoma palcami podgląd (gest pinch-to-zoom) lub kliknij ikonę udostępnienia i wybierz „Zapisz w Plikach”, by uzyskać gotowy plik PDF A4!"
      }
    },
    personal: {
      name: "Artur Petrusiewicz",
      title: "Senior Fullstack Developer",
      subtitle: "10+ lat doświadczenia · Java (Spring Boot) · TypeScript (Angular) · PostgreSQL",
      location: "Warszawa / Remote",
      phone: "+48 790 431 020",
      phoneRaw: "+48790431020",
      email: "pecixx@gmail.com",
      website: "petrusiewicz.pl",
      websiteUrl: "https://petrusiewicz.pl",
      linkedin: "linkedin.com/in/artur-petrusiewicz",
      linkedinUrl: "https://linkedin.com/in/artur-petrusiewicz",
      github: "https://github.com/pecix",
      githubUser: "github.com/pecix",
      photo: "artur-petrusiewicz.png",
      about: "Jestem Senior Fullstack Developerem z ponad 10-letnim doświadczeniem zawodowym, łączącym zaawansowaną inżynierię oprogramowania klasy Enterprise z wykształceniem ekonomicznym i wieloletnią praktyką w obszarze finansów publicznych i księgowości.\n\nKieruję się w życiu zasadą: „Droga do sukcesu jest zawsze w budowie”. Cechuje mnie duże zaangażowanie, wysoka kultura osobista, odporność na stres oraz dążenie do doskonałości w każdym realizowanym zadaniu.\n\nSpecjalizuję się w projektowaniu, implementacji i utrzymaniu skalowalnych, bezpiecznych systemów webowych w oparciu o ekosystem Java (Spring Boot, Kotlin), relacyjne bazy danych (PostgreSQL) oraz nowoczesny frontend (Angular, TypeScript). Jako programista Centralnego Zarządu Służby Więziennej współtworzyłem i wdrażałem ogólnokrajowe systemy o znaczeniu krytycznym, m.in. System Finansowo-Księgowy, Kadrowo-Płacowy oraz moduł e-skierowań."
    },
    skills: [
      {
        category: "Backend & Architektura",
        items: ["JAVA", "Spring Boot", "Kotlin", "Spring Data / JPA", "Hibernate", "Keycloak", "Spring Security", "RESTful APIs", "Architektura Enterprise"]
      },
      {
        category: "Bazy Danych & SQL",
        items: ["SQL", "PostgreSQL", "Modelowanie relacyjnych baz danych", "Optymalizacja wydajności zapytań", "Procedury składowane", "Spójność transakcyjna (ACID)"]
      },
      {
        category: "Frontend & Web",
        items: ["TypeScript", "JavaScript", "Angular", "HTML5", "CSS3 / SCSS", "Responsive Web Design (RWD)", "State Management / RxJS"]
      },
      {
        category: "Testy & Narzędzia",
        items: ["IDEA IntelliJ", "VS Code", "GIT / GitHub", "JUnit", "Cypress", "Docker", "Maven", "Code Review"]
      }
    ],
    competencies: [
      "Techniczne, koncepcyjne i kreatywne myślenie",
      "Umiejętności analityczne i planowania architektury",
      "Dobra i efektywna organizacja pracy własnej oraz zespołu",
      "Wysoka kultura osobista, prezencja i zdolności komunikacyjne",
      "Konsekwencja, skuteczność w działaniu i duża odporność na stres",
      "Inicjatywa, samodzielność oraz zaangażowanie w sukces projektu"
    ],
    experience: [
      {
        role: "Instruktor Biura Informatyki i Łączności / Senior Fullstack Developer",
        company: "Centralny Zarząd Służby Więziennej",
        period: "2019 – obecnie",
        location: "Warszawa / Polska",
        projectBadge: "Służba Więzienna",
        description: "Projektowanie, wytwarzanie i utrzymywanie oprogramowania na wewnętrzne potrzeby formacji. Praca w zespole inżynierów oprogramowania, prowadzenie code review, udział w spotkaniach architektonicznych i współtworzenie koncepcji wdrażanych programów z Product Ownerami.",
        points: [
          "Tworzenie i długoterminowe utrzymywanie systemów webowych klasy Enterprise w architekturze Spring Boot + Angular + PostgreSQL.",
          "Współpraca w zespołach programistycznych, realizacja procesów Code Review i dbałość o standardy czystego kodu (Clean Code, SOLID).",
          "Współtworzenie założeń koncepcyjnych i technicznych nowych modułów w bezpośrednim porozumieniu z Product Ownerami i kierownictwem formacji.",
          "Implementacja mechanizmów bezpieczeństwa i centralnej autoryzacji (Keycloak, RBAC) w celu spełnienia rygorystycznych norm poufności."
        ]
      },
      {
        role: "Technik Działu Finansowego",
        company: "Areszt Śledczy w Szczecinie",
        period: "2011 – 2019",
        location: "Szczecin, Polska",
        projectBadge: "Finanse & Księgowość",
        description: "Wieloletnia praca operacyjna w obszarze księgowości budżetowej, kadr i płac, stanowiąca fundament późniejszego sukcesu przy projektowaniu i wdrażaniu systemów informatycznych dla całego więziennictwa.",
        points: [
          "Prowadzenie bieżącej księgowości budżetowej jednostki penitencjarnej.",
          "Sporządzanie i rozliczanie list płac funkcjonariuszy oraz pracowników cywilnych.",
          "Prowadzenie rozliczeń komorniczych oraz ewidencji środków finansowych i kont depozytowych osób pozbawionych wolności.",
          "Wystawianie i obsługa deklaracji skarbowych i ubezpieczeniowych, m.in. PIT-11, PIT-8c, ZUS-RP7."
        ]
      }
    ],
    projects: [
      {
        name: "Projektowanie i tworzenie systemu finansowo-księgowego",
        stack: "Java Spring Boot · Keycloak · PostgreSQL · Angular",
        summary: "Ogólnokrajowy system centralny do obsługi księgowości budżetowej jednostek penitencjarnych oraz gospodarki depozytowej osób pozbawionych wolności.",
        points: [
          "Zaprojektowanie i wdrożenie modułu księgowości budżetowej w oparciu o Spring Boot i Angular.",
          "Stworzenie bezpiecznego podsystemu depozytowego osób pozbawionych wolności z obsługą potrąceń komorniczych i wypłat.",
          "Integracja z centralnym serwerem tożsamości Keycloak oraz optymalizacja zapytań w bazie PostgreSQL."
        ]
      },
      {
        name: "Utrzymanie i modyfikacje systemu kadrowo-płacowego",
        stack: "Java Spring Boot · Angular · PostgreSQL",
        summary: "Centralny system ewidencji i zarządzania zasobami ludzkimi dla formacji mundurowej.",
        points: [
          "Rozwój modułów ewidencji przebiegu służby funkcjonariuszy: etaty, stopnie służbowe, awanse, dodatki i uposażenia.",
          "Dostosowywanie algorytmów naliczania świadczeń i generowania sprawozdawczości kadrowej do zmieniającego się otoczenia prawnego."
        ]
      },
      {
        name: "Implementacja projektu e-skierowania",
        stack: "Java / Kotlin · Spring Boot · PostgreSQL",
        summary: "Elektroniczny obieg skierowań medycznych w jednostkach penitencjarnych.",
        points: [
          "Projekt i budowa niezawodnego backendu w Java / Kotlin ze Spring Boot i PostgreSQL.",
          "Zapewnienie rygorystycznej integralności oraz poufności przetwarzanej dokumentacji medycznej."
        ]
      }
    ],
    education: [
      {
        institution: "Uniwersytet Szczeciński",
        faculty: "Wydział Nauk Ekonomicznych i Zarządzania",
        degree: "Tytuł magistra ekonomii",
        field: "specjalizacja: handel zagraniczny",
        period: "2004 – 2009",
        description: "Ukończenie 5-letnich studiów magisterskich z zakresu ekonomii i handlu zagranicznego. Znajomość procesów makroekonomicznych, bilansów finansowych i analizy ilościowej."
      },
      {
        institution: "Zespół Szkół Ogólnokształcących w Goleniowie",
        faculty: "Klasa Matematyczno - Informatyczna",
        degree: "Świadectwo dojrzałości",
        field: "profil matematyczno-informatyczny",
        period: "2000 – 2004",
        description: "Rozszerzony program matematyki, logiki oraz podstaw programowania i algorytmiki."
      }
    ],
    languages: [
      { name: "Język polski", level: "Ojczysty (Native)" },
      { name: "Język angielski", level: "Komunikacja techniczna i dokumentacja (Professional working proficiency)" }
    ],
    rodo: "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko. Wyrażam również zgodę na przetwarzanie moich danych osobowych w celu prowadzenia przyszłych rekrutacji."
  },

  en: {
    meta: {
      langBtn: "Language",
      printBtn: "Print / Save PDF",
      updated: "Last updated",
      contactTitle: "Contact Information",
      skillsTitle: "Skills & Technologies",
      experienceTitle: "Professional Experience",
      projectsTitle: "Key Projects",
      educationTitle: "Education",
      languagesTitle: "Languages",
      aboutTitle: "About Me",
      competenciesTitle: "Key Strengths & Competencies",
      keyAchievementsTitle: "Key Responsibilities & Achievements:",
      printModal: {
        title: "Print / Save to PDF",
        desc: "Mobile and tablet browsers (especially Safari on iPad) block system print dialogs from inside embedded preview frames (iframes) for security reasons.",
        openTab: "Open in New Tab (Recommended)",
        downloadHtml: "Download CV (.html) to device",
        tipTitle: "💡 How to save as PDF on iPad / tablet:",
        tipStep1: "Click 'Open in New Tab' above.",
        tipStep2: "In the new tab, click 'Print' or use the browser Share menu (⎋ → Print).",
        tipStep3: "In the print preview, pinch outward with two fingers (zoom-out) or tap Share to Files to save as a clean A4 PDF document!"
      }
    },
    personal: {
      name: "Artur Petrusiewicz",
      title: "Senior Fullstack Developer",
      subtitle: "10+ years of professional experience · Java (Spring Boot) · TypeScript (Angular) · PostgreSQL",
      location: "Warsaw, Poland / Remote",
      phone: "+48 790 431 020",
      phoneRaw: "+48790431020",
      email: "pecixx@gmail.com",
      website: "petrusiewicz.pl",
      websiteUrl: "https://petrusiewicz.pl",
      linkedin: "linkedin.com/in/artur-petrusiewicz",
      linkedinUrl: "https://linkedin.com/in/artur-petrusiewicz",
      github: "https://github.com/pecix",
      githubUser: "github.com/pecix",
      photo: "artur-petrusiewicz.png",
      about: "Accomplished Senior Fullstack Developer with over 10 years of professional track record, uniting mission-critical enterprise software engineering with an academic degree in Economics and hands-on domain expertise in public finance and statutory accounting.\n\nGuided by the principle: 'The road to success is always under construction'. Characterized by high commitment, strong interpersonal communication, resilience under pressure, and dedicated craftsmanship.\n\nSpecialized in engineering robust, performant, and secure web platforms using the Java ecosystem (Spring Boot, Kotlin), relational databases (PostgreSQL), and modern front-end technologies (Angular, TypeScript). As a lead engineer at the Central Board of the Prison Service, co-architected and delivered nationwide enterprise systems including statutory Financial & Accounting, HR & Payroll, and Electronic Medical Referrals (e-skierowania)."
    },
    skills: [
      {
        category: "Backend & Architecture",
        items: ["JAVA", "Spring Boot", "Kotlin", "Spring Data / JPA", "Hibernate", "Keycloak", "Spring Security", "RESTful APIs", "Enterprise Architecture"]
      },
      {
        category: "Databases & SQL",
        items: ["SQL", "PostgreSQL", "Relational Data Modeling", "Query & Index Optimization", "Stored Procedures", "ACID Transactions"]
      },
      {
        category: "Frontend & Web",
        items: ["TypeScript", "JavaScript", "Angular", "HTML5", "CSS3 / SCSS", "Responsive Web Design (RWD)", "State Management / RxJS"]
      },
      {
        category: "Testing & Tooling",
        items: ["IDEA IntelliJ", "VS Code", "GIT / GitHub", "JUnit", "Cypress", "Docker", "Maven", "Code Review"]
      }
    ],
    competencies: [
      "Technical, conceptual, and creative systems thinking",
      "Analytical capacity & architectural planning",
      "High work ethic, proactive organization, and teamwork",
      "Strong executive presence and communication skills",
      "Consistency, execution precision, and resilience under pressure",
      "Initiative, autonomy, and ownership of deliverable outcomes"
    ],
    experience: [
      {
        role: "IT & Telecommunications Bureau Instructor / Senior Fullstack Developer",
        company: "Central Board of the Prison Service (CZSW)",
        period: "2019 – Present",
        location: "Warsaw, Poland",
        projectBadge: "Prison Service Headquarters",
        description: "Designing, engineering, and maintaining nationwide enterprise software for prison administration operations. Collaborating with software engineering squads, conducting code reviews, participating in architectural design reviews, and co-shaping features with Product Owners.",
        points: [
          "Developed and maintained enterprise web applications on Spring Boot, Angular, and PostgreSQL.",
          "Championed code reviews and clean code standards (SOLID, design patterns) across distributed teams.",
          "Co-authored technical specifications and software requirements in tight alignment with Product Owners and executive leadership.",
          "Implemented central identity management and security protocols (Keycloak, RBAC) for classified and protected data."
        ]
      },
      {
        role: "Financial Department Specialist",
        company: "Remand Prison in Szczecin (Areszt Śledczy)",
        period: "2011 – 2019",
        location: "Szczecin, Poland",
        projectBadge: "Finance & Accounting",
        description: "8 years of operational responsibility in statutory public finance, payroll, and inmate deposit accounts, providing foundational domain knowledge for architecting financial and HR software systems.",
        points: [
          "Managed budgetary accounting and financial reporting for penitentiary facilities.",
          "Processed payroll runs for officers and civilian employees.",
          "Administered bailiff garnishments, legal deductions, and inmate deposit funds.",
          "Prepared official tax and social security reporting documentation (including PIT-11, PIT-8c, ZUS-RP7)."
        ]
      }
    ],
    projects: [
      {
        name: "Financial & Accounting Enterprise System",
        stack: "Java Spring Boot · Keycloak · PostgreSQL · Angular",
        summary: "Nationwide core platform managing budget accounting and inmate deposit funds across correctional facilities.",
        points: [
          "Engineered full statutory budget accounting engine using Spring Boot and Angular.",
          "Built a secure inmate deposit ledger with automated judicial and alimony deduction routines.",
          "Integrated Keycloak central IAM and tuned high-throughput PostgreSQL queries."
        ]
      },
      {
        name: "HR & Payroll Management System",
        stack: "Java Spring Boot · Angular · PostgreSQL",
        summary: "Centralized personnel records and service trajectory system for prison officers and staff.",
        points: [
          "Developed modules for tracking officer rank progression, postings, allowances, and statutory benefits.",
          "Updated payroll computation formulas and administrative reporting according to legislative updates."
        ]
      },
      {
        name: "Electronic Medical Referrals (e-skierowania)",
        stack: "Java / Kotlin · Spring Boot · PostgreSQL",
        summary: "Digital medical referral system streamlining inmate healthcare workflows.",
        points: [
          "Implemented resilient backend microservices in Java / Kotlin with Spring Boot and PostgreSQL.",
          "Enforced strict healthcare data confidentiality and audit trails."
        ]
      }
    ],
    education: [
      {
        institution: "University of Szczecin",
        faculty: "Faculty of Economics and Management",
        degree: "Master's Degree in Economics (M.Sc.)",
        field: "Specialization: Foreign Trade",
        period: "2004 – 2009",
        description: "5-year comprehensive university program in Economics and Foreign Trade. Quantitative analysis, public finance, and corporate accounting principles."
      },
      {
        institution: "Secondary Comprehensive School in Goleniów (ZSO)",
        faculty: "Mathematics & Computer Science Profile",
        degree: "Matura Certificate",
        field: "Mathematics & Computer Science",
        period: "2000 – 2004",
        description: "Advanced curriculum in mathematics, algorithms, and fundamental computer programming."
      }
    ],
    languages: [
      { name: "Polish", level: "Native proficiency" },
      { name: "English", level: "Technical communication & documentation (Professional working proficiency)" }
    ],
    rodo: "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko. Wyrażam również zgodę na przetwarzanie moich danych osobowych w celu prowadzenia przyszłych rekrutacji."
  }
};
