(function () {
  const data = window.portfolioData;

  if (!data) {
    return;
  }

  const root = document.body.dataset.root || ".";

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function pathTo(path) {
    if (!path) {
      return root;
    }

    if (/^(https?:|mailto:)/.test(path) || path.startsWith("#")) {
      return path;
    }

    return `${root.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
  }

  function projectUrl(project) {
    return pathTo(`projects/${project.slug}.html`);
  }

  function mediaClass(item) {
    return item.imageFit === "contain" ? "media--contain" : "";
  }

  function renderHeader() {
    const host = document.querySelector("[data-site-header]");

    if (!host) {
      return;
    }

    const page = document.body.dataset.page || "";
    const profile = data.profile;
    const socialLinks = profile.links
      .map((link) => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener">${escapeHtml(link.label)}</a>`)
      .join("");

    host.innerHTML = `
      <header class="site-header">
        <div class="shell nav-shell">
          <a class="brand" href="${pathTo("index.html")}" aria-label="William de Try home">
            ${escapeHtml(profile.name)}
            <span>${escapeHtml(profile.role)}</span>
          </a>
          <nav class="nav-links" aria-label="Primary navigation">
            <a href="${pathTo("index.html#projects")}" ${page === "projects" ? "aria-current=\"page\"" : ""}>Projects</a>
            <a href="${pathTo("index.html#services")}">Studio Fit</a>
            <a href="${pathTo("index.html#skills")}">Skills</a>
            <a href="${pathTo("index.html#contact")}">Contact</a>
            ${socialLinks}
            <a class="button button--small button--quiet" href="${pathTo(profile.resume)}" target="_blank" rel="noopener">Resume</a>
          </nav>
        </div>
      </header>
    `;
  }

  function renderFooter() {
    const host = document.querySelector("[data-site-footer]");

    if (!host) {
      return;
    }

    host.innerHTML = `
      <footer class="site-footer">
        <div class="shell site-footer__layout">
          <span>${escapeHtml(data.profile.name)} - ${escapeHtml(data.profile.role)}</span>
          <span>${escapeHtml(data.profile.location)}</span>
        </div>
      </footer>
    `;
  }

  function renderProjectCard(project) {
    const links = project.links
      .map((link) => `<a class="button button--quiet" href="${escapeHtml(link.url)}" target="_blank" rel="noopener">${escapeHtml(link.label)}</a>`)
      .join("");

    return `
      <article class="project-card">
        <a class="project-card__media ${mediaClass(project)}" href="${projectUrl(project)}" aria-label="Read the ${escapeHtml(project.title)} case study">
          <img src="${pathTo(project.image)}" alt="${escapeHtml(project.alt)}" decoding="async">
        </a>
        <div class="project-card__body">
          <div>
            <p class="eyebrow">${escapeHtml(project.type)}</p>
            <h3><a href="${projectUrl(project)}">${escapeHtml(project.title)}</a></h3>
          </div>
          <p class="project-card__highlight">${escapeHtml(project.highlight)}</p>
          <p class="project-card__summary">${escapeHtml(project.summary)}</p>
          <div class="tag-list" aria-label="Project tags">
            ${project.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
          </div>
          <div class="action-row">
            <a class="button" href="${projectUrl(project)}">Case Study</a>
            ${links}
          </div>
        </div>
      </article>
    `;
  }

  function renderProjectGrids() {
    document.querySelectorAll("[data-project-grid]").forEach((host) => {
      const mode = host.dataset.projectGrid;
      const projects = mode === "featured"
        ? data.projects.filter((project) => project.featured)
        : data.projects;

      host.classList.add("project-grid");
      host.innerHTML = projects.map(renderProjectCard).join("");
    });
  }

  function renderInfoGrid(selector, items) {
    const host = document.querySelector(selector);

    if (!host) {
      return;
    }

    host.classList.add("info-grid");
    host.innerHTML = items
      .map((item) => `
        <article class="info-card">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.body)}</p>
        </article>
      `)
      .join("");
  }

  function renderContact() {
    const host = document.querySelector("[data-contact-card]");

    if (!host) {
      return;
    }

    const profile = data.profile;
    host.innerHTML = `
      <section class="contact-card" aria-label="Availability and contact">
        <div class="contact-card__layout">
          <div>
            <p class="eyebrow">Availability and contact</p>
            <h2>Get In Touch</h2>
            <p>Looking for programming roles with Stockholm studios - internship, contract, part-time, or full-time. Happy hybrid or onsite.</p>
            <div class="contact-list">
              <span><strong>Location:</strong> ${escapeHtml(profile.location)}.</span>
              <span><strong>Availability:</strong> ${escapeHtml(profile.availability)}.</span>
              <span><strong>Focus:</strong> ${escapeHtml(profile.focus)}.</span>
              <span><strong>Email:</strong> <a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a></span>
            </div>
          </div>
          <div class="action-row">
            <a class="button" href="mailto:${escapeHtml(profile.email)}">Email Me</a>
            <a class="button button--quiet" href="${pathTo(profile.resume)}" target="_blank" rel="noopener">Download CV</a>
          </div>
        </div>
      </section>
    `;
  }

  function renderProjectDetail() {
    const host = document.querySelector("[data-project-detail]");

    if (!host) {
      return;
    }

    const slug = host.dataset.projectDetail;
    const project = data.projects.find((item) => item.slug === slug);

    if (!project) {
      host.innerHTML = `
        <section class="band">
          <div class="shell empty-state">
            <h1>Project not found</h1>
            <p>This project page does not match an entry in assets/js/data.js.</p>
          </div>
        </section>
      `;
      return;
    }

    document.title = `${project.title} | William de Try`;

    const links = project.links
      .map((link) => `<a class="button button--quiet" href="${escapeHtml(link.url)}" target="_blank" rel="noopener">${escapeHtml(link.label)}</a>`)
      .join("");

    const gallery = project.gallery && project.gallery.length
      ? `
        <section class="band band--muted">
          <div class="shell">
            <div class="section-head">
              <p class="eyebrow">Supporting images</p>
              <h2>More From The Project</h2>
            </div>
            <div class="gallery-grid">
              ${project.gallery.map((item) => `
                <figure class="gallery-item ${mediaClass(item)}">
                  <img src="${pathTo(item.image)}" alt="${escapeHtml(item.alt)}" loading="lazy" decoding="async">
                  <figcaption>${escapeHtml(item.caption)}</figcaption>
                </figure>
              `).join("")}
            </div>
          </div>
        </section>
      `
      : "";

    host.innerHTML = `
      <section class="project-detail-hero band">
        <div class="shell">
          <a class="back-link" href="${pathTo("projects/index.html")}">Back to all projects</a>
          <div class="project-detail-hero__grid">
            <div class="project-detail-hero__media ${mediaClass(project)}">
              <img src="${pathTo(project.image)}" alt="${escapeHtml(project.alt)}" loading="eager" decoding="async">
            </div>
            <div class="project-detail">
              <p class="eyebrow">${escapeHtml(project.type)}</p>
              <h1 class="project-detail__title">${escapeHtml(project.title)}</h1>
              <p class="project-detail__subtitle">${escapeHtml(project.subtitle)}</p>
              <p>${escapeHtml(project.summary)}</p>
              <div class="metric-strip project-detail__meta">
                ${project.stats.map((stat) => `<span class="metric">${escapeHtml(stat)}</span>`).join("")}
              </div>
              <div class="tag-list project-detail__meta">
                ${project.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
              </div>
              <div class="action-row">
                ${links}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="band">
        <div class="shell project-detail-grid">
          ${project.sections.map((section) => `
            <article class="detail-section">
              <h2>${escapeHtml(section.heading)}</h2>
              <p>${escapeHtml(section.body)}</p>
              ${section.bullets ? `
                <ul class="detail-list">
                  ${section.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
                </ul>
              ` : ""}
            </article>
          `).join("")}
        </div>
      </section>
      ${gallery}
    `;
  }

  renderHeader();
  renderFooter();
  renderProjectGrids();
  renderInfoGrid("[data-service-grid]", data.services);
  renderInfoGrid("[data-skill-grid]", data.skills);
  renderContact();
  renderProjectDetail();
}());
