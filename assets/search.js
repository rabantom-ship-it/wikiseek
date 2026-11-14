(function () {
  "use strict";

  var DATA = window.WIKI_DATA || [];
  var page = document.body.getAttribute("data-page") || "";
  var isIndex = page === "inicio";

  function norm(s) {
    return (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function esc(s) {
    return (s || "").replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function fmt(n) {
    return (n || 0).toLocaleString("es-PE");
  }

  function highlight(text, q) {
    var safe = esc(text);
    if (!q) return safe;
    var terms = q.split(/\s+/).filter(Boolean).slice(0, 4);
    terms.forEach(function (t) {
      var re = new RegExp("(" + esc(t).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
      safe = safe.replace(re, "<mark>$1</mark>");
    });
    return safe;
  }

  function snippet(text, q) {
    if (!q) return esc(text.slice(0, 165)) + "…";
    var lower = text.toLowerCase();
    var idx = lower.indexOf(q.toLowerCase());
    if (idx < 0) {
      var terms = q.toLowerCase().split(/\s+/);
      for (var i = 0; i < terms.length; i++) {
        idx = lower.indexOf(terms[i]);
        if (idx >= 0) break;
      }
    }
    if (idx < 0) return esc(text.slice(0, 165)) + "…";
    var start = Math.max(0, idx - 75);
    var end = Math.min(text.length, idx + q.length + 110);
    return (start > 0 ? "…" : "") + highlight(text.slice(start, end).trim(), q) + "…";
  }

  function score(a, q) {
    var t = norm(a.title), d = norm(a.desc), tags = norm((a.tags || []).join(" ")), x = norm(a.text);
    var s = 0;
    if (t.indexOf(q) >= 0) s += 50;
    if (tags.indexOf(q) >= 0) s += 16;
    if (d.indexOf(q) >= 0) s += 10;
    var idx = x.indexOf(q);
    if (idx >= 0) s += 6;
    return s;
  }

  function cardHTML(a, q) {
    var body = q ? (a.text || a.desc) : a.desc;
    return '<a class="card" href="' + a.url + '" data-cat="' + a.cat + '">' +
      '<span class="card-cat">' + esc(a.catlabel) + '</span>' +
      '<h2>' + highlight(a.title, q) + '</h2>' +
      '<p>' + snippet(body, q) + '</p>' +
      '<span class="card-meta">' + fmt(a.words) + ' palabras · ' + esc(a.kind || "") + '</span>' +
      '</a>';
  }

  // ---------------------------------------------------------- índice
  if (isIndex) {
    var results = document.getElementById("results");
    var empty = document.getElementById("empty");
    var inputs = [document.getElementById("q"), document.getElementById("qTop")].filter(Boolean);
    var chips = Array.prototype.slice.call(document.querySelectorAll(".chip"));
    var activeCat = "all";
    var query = "";

    function render() {
      var list = DATA.slice();
      if (activeCat !== "all") {
        list = list.filter(function (a) { return a.cat === activeCat; });
      }
      var q = norm(query.trim());
      if (q) {
        list = list.filter(function (a) {
          return q.split(/\s+/).every(function (t) { return norm(a.title + " " + a.desc + " " + (a.tags || []).join(" ") + " " + a.text).indexOf(t) >= 0; });
        });
        list.sort(function (x, y) { return score(y, q) - score(x, q); });
      }
      if (!list.length) {
        results.innerHTML = "";
        if (empty) empty.hidden = false;
      } else {
        if (empty) empty.hidden = true;
        results.innerHTML = list.map(function (a) { return cardHTML(a, query.trim()); }).join("");
      }
    }

    inputs.forEach(function (inp) {
      inp.addEventListener("input", function () {
        query = inp.value;
        inputs.forEach(function (other) { if (other !== inp) other.value = query; });
        render();
      });
    });

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.remove("active"); });
        chip.classList.add("active");
        activeCat = chip.getAttribute("data-filter");
        render();
      });
    });

    var params = new URLSearchParams(window.location.search);
    var initial = params.get("q");
    if (initial) {
      query = initial;
      inputs.forEach(function (inp) { inp.value = initial; });
      render();
    }
  }

  // ---------------------------------------------------------- menú móvil
  var btn = document.getElementById("menuBtn");
  var sidebar = document.getElementById("sidebar");
  if (btn && sidebar) {
    var scrim = document.createElement("div");
    scrim.className = "scrim";
    document.body.appendChild(scrim);

    function closeMenu() {
      sidebar.classList.remove("open");
      scrim.classList.remove("show");
      btn.setAttribute("aria-expanded", "false");
    }

    btn.addEventListener("click", function () {
      var open = sidebar.classList.toggle("open");
      scrim.classList.toggle("show", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    scrim.addEventListener("click", closeMenu);
    sidebar.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
  }

  // ---------------------------------------------------------- atajos
  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      var target = document.getElementById("q") || document.getElementById("qTop");
      if (target) { target.focus(); target.select(); }
    }
    if (e.key === "Escape") {
      var active = document.activeElement;
      if (active && active.tagName === "INPUT" && active.type === "search") {
        active.value = "";
        active.dispatchEvent(new Event("input"));
        active.blur();
      }
    }
  });

  // ---------------------------------------------------------- progreso
  if (document.querySelector(".article")) {
    var bar = document.createElement("div");
    bar.className = "progress";
    document.body.appendChild(bar);
    function updateBar() {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    }
    window.addEventListener("scroll", updateBar, { passive: true });
    updateBar();
  }
})();
