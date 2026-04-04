/* transitions.js — Magical page transition with sparkle rain
 * Strategy: reliable real-page-load approach
 * Outgoing: fade to black (0.3s) → navigate
 * Incoming: sparkle rain from top (0.8s) → fade in (0.5s)
 */
(function () {
  "use strict";

  var overlay = document.getElementById("magic-transition-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "magic-transition-overlay";
    overlay.className = "magic-transition-overlay";
    document.body.appendChild(overlay);
  }

  var SESSION_KEY = "parlour-transition";

  // --- Sparkle rain effect ---
  function createSparkleRain() {
    var count = 80;
    for (var i = 0; i < count; i++) {
      (function (index) {
        setTimeout(function () {
          var sparkle = document.createElement("div");
          sparkle.className = "sparkle-rain";
          var size = 1 + Math.random() * 3;
          sparkle.style.width = size + "px";
          sparkle.style.height = size + "px";
          sparkle.style.left = Math.random() * 100 + "%";
          sparkle.style.setProperty(
            "--fall-distance",
            200 + Math.random() * window.innerHeight * 0.5 + "px"
          );
          sparkle.style.setProperty(
            "--fall-duration",
            0.6 + Math.random() * 1.0 + "s"
          );
          // Slight horizontal drift
          var drift = (Math.random() - 0.5) * 60;
          sparkle.style.setProperty("--drift-x", drift + "px");
          // Gold + white sparkle colors
          sparkle.style.background =
            Math.random() > 0.4 ? "#ffffff" : "#c9a959";
          overlay.appendChild(sparkle);
          setTimeout(function () {
            if (sparkle.parentNode) sparkle.parentNode.removeChild(sparkle);
          }, 2000);
        }, index * 12);
      })(i);
    }
  }

  // --- Incoming: arriving on a new page ---
  if (sessionStorage.getItem(SESSION_KEY)) {
    sessionStorage.removeItem(SESSION_KEY);

    // Start fully dark
    overlay.style.opacity = "1";
    overlay.classList.add("active");

    // Rain sparkles, then fade in
    setTimeout(function () {
      createSparkleRain();
    }, 50);

    setTimeout(function () {
      overlay.style.transition = "opacity 0.6s ease";
      overlay.style.opacity = "0";
      setTimeout(function () {
        overlay.classList.remove("active");
        overlay.style.transition = "";
      }, 650);
    }, 900);
  }

  // --- Outgoing: leaving current page ---
  function performTransition(url) {
    // Prevent double-firing
    if (overlay.classList.contains("active")) return;

    // Mark next page as arriving from transition
    sessionStorage.setItem(SESSION_KEY, "1");

    // Fade to dark
    overlay.style.transition = "opacity 0.3s ease";
    overlay.classList.add("active");
    overlay.style.opacity = "1";

    setTimeout(function () {
      window.location.href = url;
    }, 350);
  }

  // --- Intercept navigation clicks ---
  document.addEventListener(
    "click",
    function (e) {
      var target = e.target.closest("a");
      if (!target || !target.href) return;

      // Skip external, new-tab, download, or non-http links
      if (
        target.getAttribute("target") === "_blank" ||
        target.hasAttribute("download") ||
        (target.protocol !== "http:" && target.protocol !== "https:") ||
        target.hostname !== window.location.hostname
      ) {
        return;
      }

      // Skip same-page anchor links
      if (target.pathname === window.location.pathname && target.hash) return;

      // Skip links that go to the exact current URL
      if (target.href === window.location.href) return;

      // Skip links that open overlays or have data-no-transition
      if (target.hasAttribute("data-no-transition")) return;

      e.preventDefault();
      performTransition(target.href);
    },
    true
  );

  // --- Handle browser back/forward ---
  window.addEventListener("popstate", function () {
    sessionStorage.setItem(SESSION_KEY, "1");
    // Let the browser navigate naturally; the incoming handler will animate
  });
})();

