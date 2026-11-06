/**
 * Application Engine for CV Page
 * Handles multilingual rendering and print actions
 */

(function () {
  // Default language or saved preference
  let currentLang = localStorage.getItem("preferred_lang") || "pl";

  const elements = {
    langPlBtn: document.getElementById("lang-pl"),
    langEnBtn: document.getElementById("lang-en"),
    printBtn: document.getElementById("btn-print"),
    printBtnText: document.getElementById("btn-print-text"),
    
    // Personal info
    candidateName: document.getElementById("candidate-name"),
    candidateTitle: document.getElementById("candidate-title"),
    candidateSubtitle: document.getElementById("candidate-subtitle"),
    badgeMonogram: document.getElementById("badge-monogram"),
    locationText: document.getElementById("location-text"),
    emailLink: document.getElementById("email-link"),
    githubLink: document.getElementById("github-link"),
    
    // Section Titles
    aboutTitle: document.getElementById("about-title"),
    skillsTitle: document.getElementById("skills-title"),
    experienceTitle: document.getElementById("experience-title"),
    educationTitle: document.getElementById("education-title"),
    languagesTitle: document.getElementById("languages-title"),
    
    // Containers
    summaryContainer: document.getElementById("summary-container"),
    skillsContainer: document.getElementById("skills-container"),
    experienceContainer: document.getElementById("experience-container"),
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
    elements.locationText.textContent = data.personal.location;
    elements.emailLink.textContent = data.personal.email;
    elements.emailLink.href = `mailto:${data.personal.email}`;
    elements.githubLink.textContent = data.personal.githubUser;
    elements.githubLink.href = data.personal.github;

    // Section Titles
    elements.aboutTitle.textContent = data.meta.aboutTitle;
    elements.skillsTitle.textContent = data.meta.skillsTitle;
    elements.experienceTitle.textContent = data.meta.experienceTitle;
    elements.educationTitle.textContent = data.meta.educationTitle;
    elements.languagesTitle.textContent = data.meta.languagesTitle;

    // Professional Summary
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

    // Experience & Projects
    elements.experienceContainer.innerHTML = data.experience
      .map(exp => {
        const projectsHTML = exp.projects
          .map(proj => {
            const pointsHTML = proj.points
              .map(pt => `<li>${escapeHTML(pt)}</li>`)
              .join("");
            return `
              <div class="project-card">
                <div class="project-title">${escapeHTML(proj.name)}</div>
                <div class="project-role-stack">${escapeHTML(proj.role)}</div>
                <div class="project-summary">${escapeHTML(proj.summary)}</div>
                <ul class="project-points">${pointsHTML}</ul>
              </div>
            `;
          })
          .join("");

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
            ${projectsHTML}
          </article>
        `;
      })
      .join("");

    // Education
    elements.educationContainer.innerHTML = data.education
      .map(edu => `
        <div class="edu-card">
          <div class="edu-institution">${escapeHTML(edu.institution)}</div>
          <div class="edu-degree">${escapeHTML(edu.degree)} – ${escapeHTML(edu.field)}</div>
          <div class="edu-period">📍 ${escapeHTML(edu.period)}</div>
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

  elements.printBtn.addEventListener("click", () => {
    window.print();
  });

  // Initial Render
  renderCV(currentLang);
})();
