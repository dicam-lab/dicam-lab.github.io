/* Builds every page from content/site-data.js. You normally don't need to edit this file. */
(function () {
  const S = window.SITE || SITE;
  const page = document.body.dataset.page;
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const initials = n => esc(n.replace(/^Dr\.?\s*/i, "").split(/\s+/).filter(w => /^[A-Za-z]/.test(w)).map(w => w[0]).slice(0, 2).join("").toUpperCase());
  const avatar = (p, big) => p.photo
    ? `<img class="avatar" src="assets/img/people/${esc(p.photo)}" alt="Photo of ${esc(p.name)}">`
    : `<div class="avatar initials" aria-hidden="true">${initials(p.name)}</div>`;

  const ICONS = {
    brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
    layer: '<path d="M3 20h18"/><path d="M4 19C5 9 7 6 11 6s7 0 9-1"/>',
    network: '<circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 7l3 4M7 17l3-4M14 11l3-4M14 13l3 4"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/>'
  };
  const icon = k => `<div class="icon"><svg viewBox="0 0 24 24">${ICONS[k] || ICONS.spark}</svg></div>`;

  /* ---------- Header & footer ---------- */
  const NAV = [["index", "Home"], ["research", "Research"], ["team", "Team"], ["publications", "Publications"], ["news", "News"], ["join", "Join Us"]];
  document.title = (page === "index" ? "" : NAV.find(n => n[0] === page)[1] + " | ") + S.shortName + " · " + S.labName;
  document.getElementById("header").innerHTML = `
    <header class="site-header"><div class="wrap">
      <a class="brand" href="index.html"><img src="assets/img/logo-mark.svg" alt=""><span class="brand-text"><span class="brand-name">${esc(S.shortName)}</span><span class="brand-sub">${esc(S.labName)}</span></span></a>
      <button class="menu-btn" aria-label="Menu" onclick="document.querySelector('.nav').classList.toggle('open')">☰</button>
      <nav class="nav">${NAV.map(([k, l]) => `<a href="${k}.html" class="${k === page ? "active" : ""}">${l}</a>`).join("")}</nav>
    </div></header>`;
  document.getElementById("footer").innerHTML = `
    <footer class="site-footer"><div class="wrap">
      <img src="assets/img/logo-full-white.svg" alt="${esc(S.labName)} (${esc(S.shortName)})">
      <div>${esc(S.department)} · ${esc(S.university)}<br>${esc(S.location)} · <a href="mailto:${esc(S.email)}">${esc(S.email)}</a></div>
      <div>© ${new Date().getFullYear()} ${esc(S.shortName)}<br>${esc(S.labName)}</div>
    </div></footer>`;

  const head = (title, sub) => `<div class="page-head"><div class="wrap"><h1>${title}</h1>${sub ? `<p>${sub}</p>` : ""}</div></div>`;
  const areaCards = () => `<div class="grid grid-4">${S.areas.map(a => `<div class="card">${icon(a.icon)}<h3>${esc(a.title)}</h3><p>${esc(a.text)}</p></div>`).join("")}</div>`;
  const newsList = items => items.length ? `<ul class="list">${items.map(n => `<li><span class="news-date">${esc(n.date)}</span>${esc(n.text)}</li>`).join("")}</ul>` : `<p class="empty">No news yet.</p>`;
  const pubItem = p => `<li><span class="yr">${esc(p.year)}</span>${p.type ? `<span class="pill gold">${esc(p.type)}</span>` : ""}${esc(p.authors)}. <strong>${p.link ? `<a href="${esc(p.link)}">${esc(p.title)}</a>` : esc(p.title)}</strong>. <span class="venue">${esc(p.venue)}</span>.</li>`;

  const PAGES = {
    index: () => `
      <div class="hero"><div class="wrap">
        <div>
          <p class="tag">${esc(S.tagline)}</p>
          <h1>${esc(S.shortName)}</h1>
          <p class="fullname">${esc(S.labName)}</p>
          <p class="lead">${esc(S.welcome)}</p>
          <a class="btn btn-primary" href="research.html">Our Research</a>
          <a class="btn btn-ghost" href="join.html">Join the Lab</a>
        </div>
        <img class="logo-big" src="assets/img/logo-mark.svg" alt="">
      </div></div>
      <section><div class="wrap">
        <h2 class="sec">What we study</h2>
        <p class="sec-sub">${esc(S.department)}, ${esc(S.university)}</p>
        ${areaCards()}
      </div></section>
      <section style="padding-top:0"><div class="wrap">
        <h2 class="sec">Latest news</h2><p class="sec-sub"><a href="news.html">See all news →</a></p>
        ${newsList(S.news.slice(0, 3))}
      </div></section>`,

    research: () => head("Research", "Mathematical models and computational methods for real-world problems") + `
      <section><div class="wrap">
        <h2 class="sec">Research areas</h2><p class="sec-sub">The themes that connect our projects.</p>
        ${areaCards()}
      </div></section>
      <section style="padding-top:0"><div class="wrap">
        <h2 class="sec">Current projects</h2><p class="sec-sub">Each project is led by a team of undergraduate researchers. Earlier projects are marked with the institution where they took place.</p>
        ${S.projects.map(p => `
          <div class="card project">
            ${p.image ? `<img class="thumb" src="assets/img/${esc(p.image)}" alt="">` : `<div class="thumb thumb-icon">${icon(p.icon)}</div>`}
            <div>
              <span class="pill">${esc(p.status)}</span>${p.institution ? `<span class="pill gold">${esc(p.institution)}</span>` : ""}
              <h3>${esc(p.title)}</h3>
              <p>${esc(p.summary)}</p>
              <p class="team-line"><strong>Team:</strong> ${p.team.map(esc).join(", ")}</p>
            </div>
          </div>`).join("")}
      </div></section>`,

    team: () => head("Team", "The people behind our research") + `
      <section><div class="wrap">
        <div class="card pi-card">
          ${avatar(S.pi, true)}
          <div>
            <span class="pill">Principal Investigator</span>
            <h3 style="font-size:1.5rem;margin-top:8px">${esc(S.pi.name)}</h3>
            <p style="color:var(--teal);font-weight:600;margin-bottom:10px">${esc(S.pi.role)}</p>
            <p>${esc(S.pi.bio)}</p>
            <p class="links" style="margin-top:12px">${S.pi.links.map(l => `<a href="${esc(l.url)}">${esc(l.label)}</a>`).join("")}</p>
          </div>
        </div>
      </div></section>
      <section style="padding-top:0"><div class="wrap">
        <h2 class="sec">Undergraduate researchers</h2><p class="sec-sub">${S.students.length} students working on ${S.projects.length} projects.</p>
        <div class="grid grid-3">
          ${S.students.map(s => `
            <div class="card person">
              ${avatar(s)}
              <h3>${esc(s.name)}</h3>
              <div class="meta">${esc(s.major)} · ${esc(s.year)}</div>
              <span class="pill" style="margin-top:8px">${esc(s.project)}</span>
              <p>${esc(s.bio)}</p>
            </div>`).join("")}
        </div>
      </div></section>
      ${S.alumni.length ? `<section style="padding-top:0"><div class="wrap"><h2 class="sec">Alumni</h2><ul class="list">${S.alumni.map(a => `<li><strong>${esc(a.name)}</strong> (${esc(a.years)}): ${esc(a.now)}</li>`).join("")}</ul></div></section>` : ""}`,

    publications: () => head("Publications & Presentations", "Papers, posters, and talks by lab members") + `
      <section><div class="wrap">
        <h2 class="sec">Publications</h2><p class="sec-sub">Student co-authors are listed with their names.</p>
        ${S.publications.length ? `<ul class="list">${S.publications.map(pubItem).join("")}</ul>` : `<p class="empty">Coming soon. Our first papers are in progress.</p>`}
      </div></section>
      <section style="padding-top:0"><div class="wrap">
        <h2 class="sec">Presentations</h2><p class="sec-sub">Conference talks and posters.</p>
        ${S.presentations.length ? `<ul class="list">${S.presentations.map(pubItem).join("")}</ul>` : `<p class="empty">Coming soon.</p>`}
      </div></section>`,

    news: () => head("News", "What's happening in the lab") + `<section><div class="wrap">${newsList(S.news)}</div></section>`,

    join: () => head("Join Us", "Undergraduate research opportunities") + `
      <section><div class="wrap">
        <p style="font-size:1.1rem;max-width:760px">${esc(S.join.intro)}</p>
        <div class="grid grid-3" style="margin-top:24px">
          <div class="card"><h3>What we look for</h3><ul class="check">${S.join.lookingFor.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
          <div class="card"><h3>What you will gain</h3><ul class="check">${S.join.youGet.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
          <div class="card"><h3>How to apply</h3><p>${esc(S.join.applyText)}</p><p style="margin-top:16px"><a class="btn btn-primary" href="${esc(S.join.applyLink)}">Email to apply</a></p></div>
        </div>
      </div></section>`
  };

  document.getElementById("app").innerHTML = (PAGES[page] || PAGES.index)();
})();
