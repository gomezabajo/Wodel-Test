/* side-menu.js — deployable left-side navigation drawer for the Wodel-Test
 * website, shaped after the Gotten website drawer: brand panel with logo tile,
 * tagline and action pills, section labels, and icon-led rounded option rows.
 *
 * Self-contained, dependency-free. At page load it reads the site's Bootstrap
 * navbar (after the theme's own priority-reordering script has run) and builds:
 *   - a fixed round toggle button at the top-left, just below the navbar,
 *   - a left drawer (aside.side-menu) in the Gotten drawer layout,
 *   - a dark overlay behind the drawer.
 * The "Wodel-Test tutorial" and "Wodel" links are promoted to brand action
 * pills; the remaining links are grouped under "Explore", and each navbar
 * dropdown (e.g. "Wodel-Test plugins") becomes its own labelled section.
 * Dismiss with the close button, the overlay, the Escape key, or a link.
 * Site data (title, tagline, logo, home URL) is read from the data-*
 * attributes on this script's <script> tag, filled in by Liquid.
 */
(function () {
  "use strict";

  var me = document.querySelector('script[src*="side-menu.js"]');
  var CFG = {
    title: me && me.getAttribute("data-title") || "Wodel-Test",
    tagline: me && me.getAttribute("data-tagline") || "",
    logo: me && me.getAttribute("data-logo") || "",
    home: me && me.getAttribute("data-home") || "/"
  };

  /* Material Icons font (same family used by the Gotten drawer). */
  (function loadIcons() {
    if (document.querySelector('link[href*="family=Material+Icons"]')) { return; }
    var l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    document.head.appendChild(l);
  })();

  /* keyword -> Material icon; first match wins, order matters. */
  var ICON_RULES = [
    [/designer/i, "build"],
    [/atl/i, "swap_horiz"],
    [/chatbot/i, "chat"],
    [/automata/i, "timeline"],
    [/java/i, "code"],
    [/logic/i, "memory"],
    [/tutorial|wiki/i, "school"],
    [/authors|contributors/i, "people"],
    [/publications|funding/i, "description"],
    [/blog/i, "rss_feed"],
    [/^home$/i, "home"],
    [/^wodel$/i, "extension"]
  ];

  function iconFor(label) {
    for (var i = 0; i < ICON_RULES.length; i++) {
      if (ICON_RULES[i][0].test(label)) { return ICON_RULES[i][1]; }
    }
    return "chevron_right";
  }

  function clean(t) {
    return (t || "").replace(/\s+/g, " ").replace(/^\.\//, "").trim();
  }

  function ready(fn) {
    if (document.readyState !== "loading") { fn(); }
    else { document.addEventListener("DOMContentLoaded", fn); }
  }

  ready(function () {
    var navbar = document.querySelector(".navbar .navbar-nav");
    if (!navbar) { return; }

    var here = window.location.href.split("#")[0].split("?")[0]
      .replace(/index\.html$/, "").replace(/\/$/, "");
    function norm(u) {
      return (u || "").split("#")[0].split("?")[0]
        .replace(/index\.html$/, "").replace(/\/$/, "");
    }

    /* ---------- harvest the navbar ---------- */
    var explore = [];        /* [{label, href, target}] */
    var sections = [];       /* [{name, items: [...]}] */
    var tutorialLink = null, wodelLink = null;

    Array.prototype.forEach.call(navbar.children, function (li) {
      if (li.tagName !== "LI") { return; }
      if (li.classList.contains("dropdown")) {
        var toggleA = li.querySelector("a.dropdown-toggle");
        var name = toggleA ? clean(toggleA.childNodes[0] ? toggleA.textContent : "") : "Menu";
        name = clean(name);
        var items = [], seen = {};
        Array.prototype.forEach.call(li.querySelectorAll("ul li a"), function (a) {
          if (a.classList.contains("dropdown-toggle")) { return; }
          var raw = a.getAttribute("href");
          if (!raw || raw === "#") { return; }
          var lab = clean(a.textContent);
          var key = norm(a.href) + "|" + lab;
          if (!lab || seen[key]) { return; }
          seen[key] = true;
          items.push({ label: lab, href: a.href, target: a.target });
        });
        if (items.length) { sections.push({ name: name, items: items }); }
        return;
      }
      var a = li.querySelector("a");
      if (!a || !a.getAttribute("href") || a.getAttribute("href") === "#") { return; }
      var label = clean(a.textContent);
      if (!label) { return; }
      if (!tutorialLink && /tutorial|wiki/i.test(label)) {
        tutorialLink = { label: "Tutorial", href: a.href };
      } else if (!wodelLink && /^wodel$/i.test(label)) {
        wodelLink = { label: "Wodel", href: a.href };
      } else {
        explore.push({ label: label, href: a.href, target: a.target });
      }
    });

    if (!explore.length && !sections.length && !tutorialLink && !wodelLink) { return; }

    /* ---------- toggle button ---------- */
    var toggle = document.createElement("button");
    toggle.className = "side-menu-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-label", "Open navigation menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", "side-menu");
    toggle.title = "Menu";
    toggle.innerHTML = "<span></span><span></span><span></span>";

    /* ---------- overlay ---------- */
    var overlay = document.createElement("div");
    overlay.className = "side-menu-overlay";
    overlay.setAttribute("aria-hidden", "true");

    /* ---------- drawer ---------- */
    var menu = document.createElement("aside");
    menu.className = "side-menu";
    menu.id = "side-menu";
    menu.setAttribute("role", "navigation");
    menu.setAttribute("aria-label", "Site navigation");
    menu.setAttribute("aria-hidden", "true");

    var brand = document.createElement("div");
    brand.className = "side-menu-brand";

    var close = document.createElement("button");
    close.className = "side-menu-close";
    close.type = "button";
    close.setAttribute("aria-label", "Close navigation menu");
    close.title = "Close menu";
    close.innerHTML = '<i class="material-icons" aria-hidden="true">close</i>';
    brand.appendChild(close);

    if (CFG.logo) {
      var lockRow = document.createElement("p");
      lockRow.className = "side-menu-lockup-row";
      var homeA = document.createElement("a");
      homeA.className = "side-menu-lockup";
      homeA.href = CFG.home;
      homeA.setAttribute("aria-label", CFG.title + " home");
      var img = document.createElement("img");
      img.src = CFG.logo;
      img.alt = CFG.title + " logo";
      homeA.appendChild(img);
      lockRow.appendChild(homeA);
      brand.appendChild(lockRow);
    }

    if (CFG.tagline) {
      var tg = document.createElement("p");
      tg.className = "side-menu-tagline";
      tg.textContent = CFG.tagline;
      brand.appendChild(tg);
    }

    if (tutorialLink || wodelLink) {
      var actions = document.createElement("div");
      actions.className = "side-menu-actions";
      if (tutorialLink) {
        var ta = document.createElement("a");
        ta.className = "side-menu-btn side-menu-btn--solid";
        ta.href = tutorialLink.href;
        ta.textContent = tutorialLink.label;
        actions.appendChild(ta);
      }
      if (wodelLink) {
        var wa = document.createElement("a");
        wa.className = "side-menu-btn side-menu-btn--flat";
        wa.href = wodelLink.href;
        wa.textContent = wodelLink.label;
        actions.appendChild(wa);
      }
      brand.appendChild(actions);
    }
    menu.appendChild(brand);

    var nav = document.createElement("nav");
    nav.className = "side-menu-nav";
    var list = document.createElement("ul");

    function addSection(name, items) {
      if (!items.length) { return; }
      var li = document.createElement("li");
      li.className = "side-menu-label";
      li.textContent = name;
      list.appendChild(li);
      items.forEach(function (it) {
        var item = document.createElement("li");
        var a = document.createElement("a");
        a.href = it.href;
        if (it.target) { a.target = it.target; }
        if (it.target === "_blank") { a.rel = "noopener"; }
        var ic = document.createElement("i");
        ic.className = "material-icons";
        ic.setAttribute("aria-hidden", "true");
        ic.textContent = iconFor(it.label);
        a.appendChild(ic);
        a.appendChild(document.createTextNode(it.label));
        if (norm(it.href) === here) { a.className = "is-active"; }
        item.appendChild(a);
        list.appendChild(item);
      });
    }
    addSection("Explore", explore);
    sections.forEach(function (s) { addSection(s.name, s.items); });

    nav.appendChild(list);
    menu.appendChild(nav);

    document.body.appendChild(toggle);
    document.body.appendChild(overlay);
    document.body.appendChild(menu);

    /* ---------- behaviour ---------- */
    var lastFocus = null;

    function openMenu() {
      lastFocus = document.activeElement;
      document.body.classList.add("side-menu-open");
      menu.setAttribute("aria-hidden", "false");
      toggle.setAttribute("aria-expanded", "true");
      close.focus();
    }

    function closeMenu() {
      document.body.classList.remove("side-menu-open");
      menu.setAttribute("aria-hidden", "true");
      toggle.setAttribute("aria-expanded", "false");
      if (lastFocus && typeof lastFocus.focus === "function") { lastFocus.focus(); }
      else { toggle.focus(); }
    }

    toggle.addEventListener("click", function () {
      if (document.body.classList.contains("side-menu-open")) { closeMenu(); }
      else { openMenu(); }
    });
    close.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
    document.addEventListener("keydown", function (e) {
      if ((e.key === "Escape" || e.keyCode === 27) &&
          document.body.classList.contains("side-menu-open")) {
        closeMenu();
      }
    });
    nav.addEventListener("click", function (e) {
      var t = e.target;
      while (t && t !== nav) {
        if (t.tagName === "A") { closeMenu(); break; }
        t = t.parentNode;
      }
    });
  });
})();
