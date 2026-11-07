/**
 * Application Engine for CV Page
 * Handles multilingual rendering, responsive behavior, and print/PDF support across desktop and tablet/mobile devices.
 */

(function () {
  let currentLang = localStorage.getItem("preferred_lang") || "pl";

  const isIframe = window.self !== window.top;
  const isTouchOrMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);

  const elements = {
    langPlBtn: document.getElementById("lang-pl"),
    langEnBtn: document.getElementById("lang-en"),
    printBtn: document.getElementById("btn-print"),
    printBtnText: document.getElementById("btn-print-text"),

    // Personal info & Contact
    candidateName: document.getElementById("candidate-name"),
    candidateTitle: document.getElementById("candidate-title"),
    candidateSubtitle: document.getElementById("candidate-subtitle"),
    candidatePhoto: document.getElementById("candidate-photo"),
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
    rodoContainer: document.getElementById("rodo-container"),

    // Modal elements
    printModal: document.getElementById("print-modal"),
    modalClose: document.getElementById("modal-close"),
    modalTitleText: document.getElementById("modal-title-text"),
    modalDesc: document.getElementById("modal-desc"),
    btnOpenTab: document.getElementById("btn-open-tab"),
    btnOpenTabText: document.getElementById("btn-open-tab-text"),
    btnDownloadHtml: document.getElementById("btn-download-html"),
    btnDownloadHtmlText: document.getElementById("btn-download-html-text"),
    modalTipTitle: document.getElementById("modal-tip-title"),
    modalTipS1: document.getElementById("modal-tip-s1"),
    modalTipS2: document.getElementById("modal-tip-s2"),
    modalTipS3: document.getElementById("modal-tip-s3")
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

    // Competencies / Cechy i mocne strony
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

    // Update Modal texts
    if (data.meta.printModal && elements.modalTitleText) {
      const pm = data.meta.printModal;
      elements.modalTitleText.textContent = pm.title;
      elements.modalDesc.textContent = pm.desc;
      elements.btnOpenTabText.textContent = pm.openTab;
      elements.btnDownloadHtmlText.textContent = pm.downloadHtml;
      elements.modalTipTitle.textContent = pm.tipTitle;
      elements.modalTipS1.textContent = pm.tipStep1;
      elements.modalTipS2.textContent = pm.tipStep2;
      elements.modalTipS3.textContent = pm.tipStep3;
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

  function showModal() {
    if (elements.printModal) {
      elements.printModal.classList.add("active");
      elements.printModal.setAttribute("aria-hidden", "false");
    }
  }

  function hideModal() {
    if (elements.printModal) {
      elements.printModal.classList.remove("active");
      elements.printModal.setAttribute("aria-hidden", "true");
    }
  }

  function buildFullStandaloneHtml() {
    const styles = Array.from(document.querySelectorAll("style, link[rel='stylesheet']"))
      .map(tag => tag.outerHTML)
      .join("\n");

    const cvContainer = document.querySelector(".cv-container").outerHTML;

    return `<!DOCTYPE html>
<html lang="${currentLang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHTML(document.title)}</title>
  ${styles}
  <style>
    body { padding: 20px 0; }
    .direct-print-bar {
      max-width: 900px;
      margin: 0 auto 20px auto;
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      padding: 0 10px;
    }
    @media print {
      body { padding: 0 !important; }
      .direct-print-bar { display: none !important; }
    }
  </style>
</head>
<body>
  <div class="direct-print-bar">
    <button onclick="window.print()" style="background:#1e3a8a;color:#fff;border:none;padding:10px 20px;border-radius:6px;font-size:14px;font-weight:600;cursor:pointer;box-shadow:0 2px 4px rgba(0,0,0,0.1);">
      🖨️ ${currentLang === 'pl' ? 'Wydrukuj / Zapisz jako PDF' : 'Print / Save as PDF'}
    </button>
  </div>
  ${cvContainer}
</body>
</html>`;
  }

  function openInNewTab() {
    const html = buildFullStandaloneHtml();
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const blobUrl = URL.createObjectURL(blob);
    const win = window.open(blobUrl, "_blank");
    if (!win) {
      window.location.href = blobUrl;
    }
  }

  function downloadHtmlFile() {
    const html = buildFullStandaloneHtml();
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = `Artur_Petrusiewicz_CV_${currentLang.toUpperCase()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 3000);
  }

  function handlePrint() {
    if (isIframe || isTouchOrMobile) {
      try {
        window.print();
      } catch (e) {}
      showModal();
    } else {
      try {
        window.print();
      } catch (e) {
        showModal();
      }
    }
  }

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

  elements.printBtn.addEventListener("click", handlePrint);

  if (elements.modalClose) elements.modalClose.addEventListener("click", hideModal);
  if (elements.printModal) {
    elements.printModal.addEventListener("click", e => {
      if (e.target === elements.printModal) hideModal();
    });
  }
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") hideModal();
  });

  // 3D Avatar Flip Interaction (Initials <-> Photo)
  const avatarFlip = document.getElementById("avatar-flip");
  if (avatarFlip) {
    const toggleAvatar = () => {
      avatarFlip.classList.toggle("flipped");
      const isFlipped = avatarFlip.classList.contains("flipped");
      avatarFlip.setAttribute(
        "title",
        isFlipped
          ? (currentLang === "pl" ? "Kliknij, aby zobaczyć inicjały" : "Click to view initials")
          : (currentLang === "pl" ? "Kliknij, aby zobaczyć zdjęcie" : "Click to view photo")
      );
    };

    avatarFlip.addEventListener("click", toggleAvatar);
    avatarFlip.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleAvatar();
      }
    });
  }

  renderCV(currentLang);
})();
