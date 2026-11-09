/**
 * Application Engine for CV Page
 * Handles multilingual rendering, responsive behavior, 3D flip avatar, dark mode, and direct print/PDF execution.
 */

(function () {
  let currentLang = localStorage.getItem("preferred_lang") || "pl";
  let currentTheme =
    localStorage.getItem("preferred_theme") ||
    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  const elements = {
    langPlBtn: document.getElementById("lang-pl"),
    langEnBtn: document.getElementById("lang-en"),
    themeToggle: document.getElementById("theme-toggle"),
    printBtn: document.getElementById("btn-print"),
    printBtnText: document.getElementById("btn-print-text"),

    // Personal info & Contact
    candidateName: document.getElementById("candidate-name"),
    candidateTitle: document.getElementById("candidate-title"),
    candidateSubtitle: document.getElementById("candidate-subtitle"),
    candidatePhoto: document.getElementById("candidate-photo"),
    avatarFlip: document.getElementById("avatar-flip"),
    locationText: document.getElementById("location-text"),
    phoneLink: document.getElementById("phone-link"),
    emailLink: document.getElementById("email-link"),
    websiteLink: document.getElementById("website-link"),
    linkedinLink: document.getElementById("linkedin-link"),
    githubLink: document.getElementById("github-link"),

    // Section Titles
    aboutTitle: document.getElementById("about-title"),
    skillsTitle: document.getElementById("skills-title"),
    competenciesTitle: document.getElementById("competencies-title"),
    experienceTitle: document.getElementById("experience-title"),
    projectsTitle: document.getElementById("projects-title"),
    educationTitle: document.getElementById("education-title"),
    languagesTitle: document.getElementById("languages-title"),

    // Containers
    summaryContainer: document.getElementById("summary-container"),
    skillsContainer: document.getElementById("skills-container"),
    competenciesContainer: document.getElementById("competencies-container"),
    experienceContainer: document.getElementById("experience-container"),
    projectsContainer: document.getElementById("projects-container"),
    educationContainer: document.getElementById("education-container"),
    languagesContainer: document.getElementById("languages-container"),
    rodoContainer: document.getElementById("rodo-container")
  };

  function renderCV(lang) {
    const data = cvData[lang];
    if (!data) return;

    // Set HTML lang attribute
    document.documentElement.lang = lang;
    document.title = `${data.personal.name} - ${data.personal.title} (CV)`;

    // Update Action Bar buttons
    if (elements.printBtnText) {
      elements.printBtnText.textContent = data.meta.printBtn;
    }
    if (elements.printBtn) {
      elements.printBtn.title = data.meta.printBtn;
      elements.printBtn.setAttribute("aria-label", data.meta.printBtn);
    }

    if (lang === "pl") {
      elements.langPlBtn.classList.add("active");
      elements.langEnBtn.classList.remove("active");
    } else {
      elements.langEnBtn.classList.add("active");
      elements.langPlBtn.classList.remove("active");
    }

    // Header & Personal details
    elements.candidateName.textContent = data.personal.name;
    elements.candidateTitle.textContent = data.personal.title;
    elements.candidateSubtitle.textContent = data.personal.subtitle;
    if (elements.candidatePhoto && data.personal.photo) {
      elements.candidatePhoto.src = data.personal.photo;
    }

    // Contact bar
    elements.locationText.textContent = data.personal.location;
    if (elements.phoneLink) {
      elements.phoneLink.textContent = data.personal.phone;
      elements.phoneLink.href = `tel:${data.personal.phoneRaw || data.personal.phone}`;
    }
    if (elements.emailLink) {
      elements.emailLink.textContent = data.personal.email;
      elements.emailLink.href = `mailto:${data.personal.email}`;
    }
    if (elements.websiteLink) {
      elements.websiteLink.textContent = data.personal.website;
      elements.websiteLink.href = data.personal.websiteUrl;
    }
    if (elements.linkedinLink) {
      elements.linkedinLink.textContent = data.personal.linkedin.replace("linkedin.com/", "");
      elements.linkedinLink.href = data.personal.linkedinUrl;
    }
    if (elements.githubLink) {
      elements.githubLink.textContent = data.personal.githubUser;
      elements.githubLink.href = data.personal.github;
    }

    // Section Titles
    elements.aboutTitle.textContent = data.meta.aboutTitle;
    elements.skillsTitle.textContent = data.meta.skillsTitle;
    if (elements.competenciesTitle && data.meta.competenciesTitle) {
      elements.competenciesTitle.textContent = data.meta.competenciesTitle;
    }
    elements.experienceTitle.textContent = data.meta.experienceTitle;
    if (elements.projectsTitle && data.meta.projectsTitle) {
      elements.projectsTitle.textContent = data.meta.projectsTitle;
    }
    elements.educationTitle.textContent = data.meta.educationTitle;
    elements.languagesTitle.textContent = data.meta.languagesTitle;

    // Professional Summary / O mnie
    const paragraphs = data.personal.about
      .split("\n\n")
      .map(p => `<p>${escapeHTML(p)}</p>`)
      .join("");
    elements.summaryContainer.innerHTML = paragraphs;

    // Skills Matrix
    elements.skillsContainer.innerHTML = data.skills
      .map(cat => {
        const tags = cat.items
          .map(item => `<span class="skill-tag">${escapeHTML(item)}</span>`)
          .join("");
        return `
          <div class="skill-category-card">
            <h3 class="skill-category-title">${escapeHTML(cat.category)}</h3>
            <div class="skill-tags">${tags}</div>
          </div>
        `;
      })
      .join("");

    // Competencies
    if (elements.competenciesContainer && data.competencies) {
      elements.competenciesContainer.innerHTML = data.competencies
        .map(comp => `<div class="competency-item"><span>${escapeHTML(comp)}</span></div>`)
        .join("");
    }

    // Professional Experience
    elements.experienceContainer.innerHTML = data.experience
      .map(exp => {
        const pointsHTML = exp.points
          ? `<ul class="project-points" style="margin-top: 8px;">${exp.points.map(pt => `<li>${escapeHTML(pt)}</li>`).join("")}</ul>`
          : "";

        return `
          <article class="experience-item">
            <div class="exp-header">
              <div class="exp-role-company">
                <span>${escapeHTML(exp.role)}</span> · <span class="exp-company">${escapeHTML(exp.company)}</span>
              </div>
              <span class="exp-period">${escapeHTML(exp.period)}</span>
            </div>
            <div class="exp-meta">
              <span>📍 ${escapeHTML(exp.location)}</span>
              ${exp.projectBadge ? `<span class="badge-tag">${escapeHTML(exp.projectBadge)}</span>` : ""}
            </div>
            <p class="exp-overview">${escapeHTML(exp.description)}</p>
            ${pointsHTML}
          </article>
        `;
      })
      .join("");

    // Key Projects
    if (elements.projectsContainer && data.projects) {
      elements.projectsContainer.innerHTML = data.projects
        .map(proj => {
          const pointsHTML = proj.points
            .map(pt => `<li>${escapeHTML(pt)}</li>`)
            .join("");
          return `
            <div class="project-card" style="margin-bottom: 12px;">
              <div class="project-title">${escapeHTML(proj.name)}</div>
              <div class="project-role-stack">${escapeHTML(proj.stack)}</div>
              <div class="project-summary">${escapeHTML(proj.summary)}</div>
              <ul class="project-points">${pointsHTML}</ul>
            </div>
          `;
        })
        .join("");
    }

    // Education
    elements.educationContainer.innerHTML = data.education
      .map(edu => `
        <div class="edu-card" style="margin-bottom: 12px;">
          <div class="edu-institution">${escapeHTML(edu.institution)}</div>
          <div class="edu-degree">${escapeHTML(edu.faculty ? edu.faculty + ' · ' : '')}${escapeHTML(edu.degree)}</div>
          <div class="edu-period">📍 ${escapeHTML(edu.period)} · ${escapeHTML(edu.field)}</div>
          <p class="edu-desc">${escapeHTML(edu.desc || edu.description)}</p>
        </div>
      `)
      .join("");

    // Languages
    elements.languagesContainer.innerHTML = `
      <div class="lang-card">
        <ul class="lang-list">
          ${data.languages
            .map(l => `
              <li class="lang-item">
                <span class="lang-name">${escapeHTML(l.name)}</span>
                <span class="lang-level">${escapeHTML(l.level)}</span>
              </li>
            `)
            .join("")}
        </ul>
      </div>
    `;

    // RODO / GDPR
    if (data.rodo) {
      elements.rodoContainer.style.display = "block";
      elements.rodoContainer.textContent = data.rodo;
    } else {
      elements.rodoContainer.style.display = "none";
    }

    // Update avatar tooltip
    if (elements.avatarFlip) {
      const isFlipped = elements.avatarFlip.classList.contains("flipped");
      elements.avatarFlip.setAttribute(
        "title",
        isFlipped
          ? (lang === "pl" ? "Kliknij, aby zobaczyć inicjały" : "Click to view initials")
          : (lang === "pl" ? "Kliknij, aby zobaczyć zdjęcie" : "Click to view photo")
      );
    }

    updateThemeToggleLabel();
  }

  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("preferred_theme", theme);
    updateThemeToggleLabel();
  }

  function updateThemeToggleLabel() {
    if (elements.themeToggle) {
      const isDark = currentTheme === "dark";
      const title = currentLang === "pl"
        ? (isDark ? "Przełącz na motyw jasny" : "Przełącz na motyw ciemny")
        : (isDark ? "Switch to light theme" : "Switch to dark theme");
      elements.themeToggle.setAttribute("title", title);
      elements.themeToggle.setAttribute("aria-label", title);
    }
  }

  function escapeHTML(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Event Listeners
  elements.langPlBtn.addEventListener("click", () => {
    currentLang = "pl";
    localStorage.setItem("preferred_lang", "pl");
    renderCV("pl");
  });

  elements.langEnBtn.addEventListener("click", () => {
    currentLang = "en";
    localStorage.setItem("preferred_lang", "en");
    renderCV("en");
  });

  // Dark/Light Theme Toggle
  if (elements.themeToggle) {
    elements.themeToggle.addEventListener("click", () => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
    });
  }

  // Ensure dark mode never affects print rendering across any browser or device
  window.addEventListener("beforeprint", () => {
    document.documentElement.removeAttribute("data-theme");
  });

  window.addEventListener("afterprint", () => {
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
    }
  });

  // Direct print trigger (without modal prompt)
  elements.printBtn.addEventListener("click", () => {
    window.print();
  });

  // 3D Avatar Flip Interaction (Initials <-> Photo)
  if (elements.avatarFlip) {
    const toggleAvatar = () => {
      elements.avatarFlip.classList.toggle("flipped");
      const isFlipped = elements.avatarFlip.classList.contains("flipped");
      elements.avatarFlip.setAttribute(
        "title",
        isFlipped
          ? (currentLang === "pl" ? "Kliknij, aby zobaczyć inicjały" : "Click to view initials")
          : (currentLang === "pl" ? "Kliknij, aby zobaczyć zdjęcie" : "Click to view photo")
      );
    };

    elements.avatarFlip.addEventListener("click", toggleAvatar);
    elements.avatarFlip.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleAvatar();
      }
    });
  }

  applyTheme(currentTheme);
  renderCV(currentLang);
})();
