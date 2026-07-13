const translations = {
  en: {
    langName: 'English',
    nav: { about: 'About', skills: 'Skills', experience: 'Experience', education: 'Education', contact: 'Contact' },
    hero: {
      name: 'Ivan Yurkevych',
      role: 'Frontend Developer',
      location: 'Nürnberg, Germany',
      tagline: 'Building toward IoT & Industrie 4.0',
      cta: 'Contact me',
      cvCta: 'Full CV (German)',
    },
    about: {
      title: 'About',
      text: 'JavaScript developer with several years of experience in software development, technical teaching, and team coordination. Comfortable turning complex technical topics into clear, practical guidance, with a growing focus on IoT, automation, and Industrie 4.0.',
    },
    skills: {
      title: 'Skills',
      technical: { label: 'Technical', items: ['JavaScript (ES6+)', 'React (basics of TypeScript)', 'REST APIs', 'Node.js basics', 'Client–server data handling'] },
      practice: { label: 'Also comfortable with', items: ['Structured code analysis', 'Debugging & troubleshooting', 'API integration', 'Technical documentation'] },
      iot: { label: 'IoT (foundations)', items: ['IoT architectures', 'Event-driven systems', 'MQTT basics', 'Interest in Node-RED & smart-home systems'] },
      soft: { label: 'Soft skills', items: ['Structured & analytical approach', 'Explaining complex topics clearly', 'Team & leadership experience', 'Self-organized', 'Continuous learner', 'Goal-oriented under deadlines'] },
      languages: { label: 'Languages', items: ['German — B1 (working toward B2)', 'English — reads technical documentation', 'Russian — native', 'Ukrainian — native'] },
    },
    experience: {
      title: 'Experience',
      items: [
        { period: '2022–2024', role: 'JavaScript Instructor', org: 'Lemon School', text: 'Designed and taught JavaScript courses for teens and adults, one-on-one and in groups.' },
        { period: '2023–2024', role: 'Frontend Instructor (JavaScript, React, TypeScript)', org: 'YBP Ukraine', text: 'Built and delivered original React/TypeScript courses; mentored practice projects.' },
        { period: '10/2021–02/2022', role: 'Junior Developer', org: 'Realis.Network · JavaScript, C#', text: 'Onboarded onto an existing codebase, API integration, bug fixing.' },
        { period: '07/2019–09/2021', role: 'Frontend Developer (Freelance)', org: 'JavaScript, React', text: 'Built and maintained UIs, API integration, self-organized delivery.' },
        { period: '2005–2020', role: 'Conductor / Educator / Organizer', org: 'Various education & cultural institutions, Ukraine', text: 'Led ensembles, coordinated teams, events, and logistics.' },
      ],
    },
    education: {
      title: 'Education',
      school: 'Kharkiv National University of Arts (I. P. Kotlyarevsky)',
      degree: "Master's degree, 2007–2012",
    },
    objective: {
      title: 'Objective',
      text: 'Looking to grow long-term in IoT, automation, and Industrie 4.0 — applying JavaScript-based technologies to connected systems and smart-home solutions.',
    },
    contact: {
      title: 'Contact',
      cvNote: 'Full detailed CV is available in German.',
    },
    footer: 'Built with React · Source on GitHub',
  },

  de: {
    langName: 'Deutsch',
    nav: { about: 'Über mich', skills: 'Kompetenzen', experience: 'Erfahrung', education: 'Ausbildung', contact: 'Kontakt' },
    hero: {
      name: 'Ivan Yurkevych',
      role: 'Frontend-Entwickler',
      location: 'Nürnberg, Deutschland',
      tagline: 'Auf dem Weg zu IoT & Industrie 4.0',
      cta: 'Kontakt aufnehmen',
      cvCta: 'Vollständiger Lebenslauf',
    },
    about: {
      title: 'Über mich',
      text: 'JavaScript-Entwickler mit mehrjähriger Erfahrung in Softwareentwicklung, technischer Lehre und Teamkoordination. Erfahren darin, komplexe technische Themen klar und praxisnah zu vermitteln — mit wachsendem Fokus auf IoT, Automatisierung und Industrie 4.0.',
    },
    skills: {
      title: 'Kompetenzen',
      technical: { label: 'Technisch', items: ['JavaScript (ES6+)', 'React (Grundlagen TypeScript)', 'REST APIs', 'Grundlagen Node.js', 'Client-Server-Kommunikation'] },
      practice: { label: 'Weitere Fähigkeiten', items: ['Strukturierte Codeanalyse', 'Debugging & Fehlersuche', 'API-Integration', 'Technische Dokumentation'] },
      iot: { label: 'IoT (Grundlagen)', items: ['IoT-Architekturen', 'Ereignisbasierte Systeme', 'MQTT-Grundlagen', 'Interesse an Node-RED & Smart-Home-Systemen'] },
      soft: { label: 'Soft Skills', items: ['Strukturierte & analytische Arbeitsweise', 'Klare Vermittlung komplexer Sachverhalte', 'Team- und Führungserfahrung', 'Selbstständige Organisation', 'Kontinuierliche Lernbereitschaft', 'Zielorientiertes Arbeiten unter Zeitdruck'] },
      languages: { label: 'Sprachen', items: ['Deutsch — B1 (B2 in Vorbereitung)', 'Englisch — Lesen technischer Dokumentation', 'Russisch — Muttersprache', 'Ukrainisch — Muttersprache'] },
    },
    experience: {
      title: 'Berufserfahrung',
      items: [
        { period: '2022–2024', role: 'Dozent für Webentwicklung (JavaScript)', org: 'Lemon School', text: 'Entwicklung und Durchführung von JavaScript-Kursen für Jugendliche und Erwachsene.' },
        { period: '2023–2024', role: 'Dozent für Frontend-Technologien (JavaScript, React, TypeScript)', org: 'YBP Ukraine', text: 'Eigene React/TypeScript-Kurse konzipiert und unterrichtet; Betreuung von Praxisprojekten.' },
        { period: '10/2021–02/2022', role: 'Junior Entwickler', org: 'Realis.Network · JavaScript, C#', text: 'Einarbeitung in bestehende Codestrukturen, API-Anbindung, Fehleranalyse.' },
        { period: '07/2019–09/2021', role: 'Frontend Developer (Freelance)', org: 'JavaScript, React', text: 'Entwicklung und Pflege von Benutzeroberflächen, API-Integration.' },
        { period: '2005–2020', role: 'Dirigent / Pädagoge / Organisator', org: 'Diverse Bildungs- und Kultureinrichtungen, Ukraine', text: 'Leitung von Ensembles, Koordination von Teams, Veranstaltungen und Logistik.' },
      ],
    },
    education: {
      title: 'Ausbildung',
      school: 'Charkiwer Nationale Universität der Künste I. P. Kotljarewskyj',
      degree: 'Masterabschluss, 2007–2012',
    },
    objective: {
      title: 'Berufliches Ziel',
      text: 'Langfristige Entwicklung im Bereich IoT, Automatisierung und Industrie 4.0 — mit Fokus auf der Integration JavaScript-basierter Technologien in vernetzte Systeme und Smart-Home-Lösungen.',
    },
    contact: {
      title: 'Kontakt',
      cvNote: 'Der vollständige, ausführliche Lebenslauf ist auf Deutsch verfügbar.',
    },
    footer: 'Erstellt mit React · Quellcode auf GitHub',
  },

  ru: {
    langName: 'Русский',
    nav: { about: 'Обо мне', skills: 'Навыки', experience: 'Опыт', education: 'Образование', contact: 'Контакты' },
    hero: {
      name: 'Иван Юркевич',
      role: 'Frontend-разработчик',
      location: 'Нюрнберг, Германия',
      tagline: 'Развиваюсь в сторону IoT и Industrie 4.0',
      cta: 'Связаться',
      cvCta: 'Полное резюме (нем.)',
    },
    about: {
      title: 'Обо мне',
      text: 'JavaScript-разработчик с многолетним опытом в разработке ПО, техническом преподавании и координации команд. Умею доступно объяснять сложные технические темы — с растущим фокусом на IoT, автоматизацию и Industrie 4.0.',
    },
    skills: {
      title: 'Навыки',
      technical: { label: 'Технические', items: ['JavaScript (ES6+)', 'React (основы TypeScript)', 'REST API', 'Основы Node.js', 'Работа с клиент-серверным взаимодействием'] },
      practice: { label: 'Также умею', items: ['Структурный анализ кода', 'Отладка и поиск ошибок', 'Интеграция API', 'Техническая документация'] },
      iot: { label: 'IoT (основы)', items: ['Архитектуры IoT', 'Событийно-ориентированные системы', 'Основы MQTT', 'Интерес к Node-RED и умному дому'] },
      soft: { label: 'Гибкие навыки', items: ['Структурированный и аналитический подход', 'Умение просто объяснять сложное', 'Опыт работы в команде и на руководящих ролях', 'Самостоятельная организация работы', 'Постоянное обучение', 'Работа на результат в условиях дедлайнов'] },
      languages: { label: 'Языки', items: ['Немецкий — B1 (готовлюсь к B2)', 'Английский — чтение технической документации', 'Русский — родной', 'Украинский — родной'] },
    },
    experience: {
      title: 'Опыт работы',
      items: [
        { period: '2022–2024', role: 'Преподаватель веб-разработки (JavaScript)', org: 'Lemon School', text: 'Разработка и проведение курсов JavaScript для подростков и взрослых.' },
        { period: '2023–2024', role: 'Преподаватель frontend-технологий (JavaScript, React, TypeScript)', org: 'YBP Ukraine', text: 'Разработка и проведение собственных курсов по React/TypeScript, сопровождение практических проектов.' },
        { period: '10/2021–02/2022', role: 'Junior-разработчик', org: 'Realis.Network · JavaScript, C#', text: 'Работа с существующей кодовой базой, интеграция API, поиск и исправление ошибок.' },
        { period: '07/2019–09/2021', role: 'Frontend-разработчик (фриланс)', org: 'JavaScript, React', text: 'Разработка и поддержка интерфейсов, интеграция API.' },
        { period: '2005–2020', role: 'Дирижёр / педагог / организатор', org: 'Образовательные и культурные учреждения, Украина', text: 'Руководство коллективами, координация команд, мероприятий и логистики.' },
      ],
    },
    education: {
      title: 'Образование',
      school: 'Харьковский национальный университет искусств им. И. П. Котляревского',
      degree: 'Магистратура, 2007–2012',
    },
    objective: {
      title: 'Цель',
      text: 'Долгосрочное развитие в сфере IoT, автоматизации и Industrie 4.0 — применение JavaScript-технологий в связанных системах и решениях умного дома.',
    },
    contact: {
      title: 'Контакты',
      cvNote: 'Полное подробное резюме доступно на немецком языке.',
    },
    footer: 'Сделано на React · Исходный код на GitHub',
  },

  uk: {
    langName: 'Українська',
    nav: { about: 'Про мене', skills: 'Навички', experience: 'Досвід', education: 'Освіта', contact: 'Контакти' },
    hero: {
      name: 'Іван Юркевич',
      role: 'Frontend-розробник',
      location: 'Нюрнберг, Німеччина',
      tagline: 'Рухаюся в бік IoT та Industrie 4.0',
      cta: "Зв'язатися",
      cvCta: 'Повне резюме (нім.)',
    },
    about: {
      title: 'Про мене',
      text: "JavaScript-розробник з багаторічним досвідом у розробці ПЗ, технічному викладанні та координації команд. Вмію доступно пояснювати складні технічні теми — з фокусом на IoT, автоматизацію та Industrie 4.0.",
    },
    skills: {
      title: 'Навички',
      technical: { label: 'Технічні', items: ['JavaScript (ES6+)', 'React (основи TypeScript)', 'REST API', 'Основи Node.js', "Робота з клієнт-серверною взаємодією"] },
      practice: { label: 'Також вмію', items: ['Структурний аналіз коду', 'Налагодження та пошук помилок', 'Інтеграція API', 'Технічна документація'] },
      iot: { label: 'IoT (основи)', items: ['Архітектури IoT', 'Подієво-орієнтовані системи', 'Основи MQTT', 'Інтерес до Node-RED та розумного дому'] },
      soft: { label: 'Гнучкі навички', items: ['Структурований та аналітичний підхід', 'Вміння просто пояснювати складне', 'Досвід роботи в команді та на керівних ролях', 'Самостійна організація роботи', 'Постійне навчання', 'Орієнтація на результат у стислі терміни'] },
      languages: { label: 'Мови', items: ['Німецька — B1 (готуюсь до B2)', 'Англійська — читання технічної документації', 'Російська — рідна', 'Українська — рідна'] },
    },
    experience: {
      title: 'Досвід роботи',
      items: [
        { period: '2022–2024', role: 'Викладач веброзробки (JavaScript)', org: 'Lemon School', text: 'Розробка та проведення курсів JavaScript для підлітків і дорослих.' },
        { period: '2023–2024', role: 'Викладач frontend-технологій (JavaScript, React, TypeScript)', org: 'YBP Ukraine', text: "Розробка та проведення власних курсів з React/TypeScript, супровід практичних проєктів." },
        { period: '10/2021–02/2022', role: 'Junior-розробник', org: 'Realis.Network · JavaScript, C#', text: 'Робота з наявною кодовою базою, інтеграція API, пошук і виправлення помилок.' },
        { period: '07/2019–09/2021', role: 'Frontend-розробник (фриланс)', org: 'JavaScript, React', text: 'Розробка та підтримка інтерфейсів, інтеграція API.' },
        { period: '2005–2020', role: 'Диригент / педагог / організатор', org: 'Освітні та культурні заклади, Україна', text: 'Керівництво колективами, координація команд, заходів і логістики.' },
      ],
    },
    education: {
      title: 'Освіта',
      school: 'Харківський національний університет мистецтв ім. І. П. Котляревського',
      degree: 'Магістратура, 2007–2012',
    },
    objective: {
      title: 'Мета',
      text: "Довгострокове зростання у сфері IoT, автоматизації та Industrie 4.0 — застосування JavaScript-технологій у зв'язаних системах та рішеннях розумного дому.",
    },
    contact: {
      title: 'Контакти',
      cvNote: 'Повне детальне резюме доступне німецькою мовою.',
    },
    footer: 'Створено на React · Вихідний код на GitHub',
  },
};

export default translations;
