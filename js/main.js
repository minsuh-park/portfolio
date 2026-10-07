/* ==========================================================================
   Minsuh Park — Portfolio
   Renders case studies from data.js, runs the mobile menu, and highlights
   the current section in the nav. No dependencies.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- Small DOM helper (uses textContent, never innerHTML) ---------- */
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  /* ---------- Case studies ---------- */
  function renderProjects(projects) {
    var root = document.getElementById("projects");
    if (!root || !Array.isArray(projects)) return;

    projects.forEach(function (project, i) {
      var number = String(i + 1).padStart(2, "0");
      var titleId = "project-" + number + "-title";

      var article = el("article", "project");
      article.setAttribute("aria-labelledby", titleId);

      // Left column: number, title, standfirst, tags
      var intro = el("div", "project__intro");
      intro.appendChild(el("p", "project__index", "Case Study " + number));
      var title = el("h3", "project__title", project.title);
      title.id = titleId;
      intro.appendChild(title);
      if (project.summary) intro.appendChild(el("p", "project__summary", project.summary));

      if (project.tags && project.tags.length) {
        var tags = el("ul", "badges");
        tags.setAttribute("aria-label", "Tags");
        project.tags.forEach(function (tag) {
          tags.appendChild(el("li", "badge", tag));
        });
        intro.appendChild(tags);
      }

      if (project.note) intro.appendChild(el("p", "project__note", project.note));

      // Right column: problem, approach, results
      var details = el("div", "project__details");

      [
        ["Problem", project.problem],
        ["Approach", project.approach],
        ["Recommendation", project.recommendation]
      ].forEach(function (pair) {
        if (!pair[1]) return;
        var block = el("div", "project__block");
        block.appendChild(el("h4", "project__label", pair[0]));
        block.appendChild(el("p", null, pair[1]));
        details.appendChild(block);
      });

      if (project.results && project.results.length) {
        var resultsBlock = el("div", "project__block");
        resultsBlock.appendChild(el("h4", "project__label", "Results"));
        var metrics = el("ul", "metrics");
        project.results.forEach(function (result) {
          var item = el("li", "metric");
          item.appendChild(el("span", "metric__value", result.value));
          item.appendChild(el("span", "metric__label", result.label));
          metrics.appendChild(item);
        });
        resultsBlock.appendChild(metrics);
        details.appendChild(resultsBlock);
      }

      if (project.link && project.link.href) {
        var link = el("a", "project__link", project.link.text || "Read the full case study");
        link.href = project.link.href;
        details.appendChild(link);
      }

      article.appendChild(intro);
      article.appendChild(details);
      root.appendChild(article);
    });
  }

  /* ---------- Mobile menu (disclosure pattern) ---------- */
  function initMenu() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    var header = document.querySelector(".site-header");
    if (!toggle || !nav) return;

    var label = toggle.querySelector(".nav-toggle__label");

    function setOpen(open, returnFocus) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.setAttribute("data-open", String(open));
      if (label) label.textContent = open ? "Close" : "Menu";
      if (!open && returnFocus) toggle.focus();
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Close after choosing a section
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    // Escape closes and returns focus to the button
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false, true);
      }
    });

    // Close if focus or a click moves outside the header
    header.addEventListener("focusout", function (event) {
      if (event.relatedTarget && !header.contains(event.relatedTarget)) setOpen(false);
    });
    document.addEventListener("click", function (event) {
      if (!header.contains(event.target)) setOpen(false);
    });

    // Reset when resizing up to the desktop layout
    window.matchMedia("(min-width: 768px)").addEventListener("change", function (mq) {
      if (mq.matches) setOpen(false);
    });
  }

  /* ---------- Highlight the section currently in view ---------- */
  function initScrollSpy() {
    if (!("IntersectionObserver" in window)) return;

    var links = Array.prototype.slice.call(document.querySelectorAll(".site-nav a[href^='#']"));
    var byId = {};
    links.forEach(function (link) {
      byId[link.getAttribute("href").slice(1)] = link;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (link) { link.removeAttribute("aria-current"); });
          var active = byId[entry.target.id];
          if (active) active.setAttribute("aria-current", "true");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    Object.keys(byId).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  /* ---------- Move focus to in-page targets for keyboard & screen reader users ---------- */
  function initInPageFocus() {
    document.addEventListener("click", function (event) {
      var link = event.target.closest("a[href^='#']");
      if (!link) return;
      var id = link.getAttribute("href").slice(1);
      var target = id && document.getElementById(id);
      if (!target) return;
      // Focus the section heading so the next Tab continues from there.
      var heading = target.querySelector("h1, h2") || target;
      if (!heading.hasAttribute("tabindex")) heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    });
  }

  /* ---------- Footer year ---------- */
  function setYear() {
    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  renderProjects(window.PORTFOLIO_PROJECTS);
  initMenu();
  initScrollSpy();
  initInPageFocus();
  setYear();
})();
