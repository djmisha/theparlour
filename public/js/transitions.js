/* transitions.js — Magical page transition with sparkle rain
 * Strategy: reliable real-page-load approach
 * Outgoing: fade to black (0.3s) → navigate
 * Incoming: sparkle rain from top → fade in after sparkles settle
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
  var GOLD_SPARKLE_RATIO = 0.4;

  // --- Sparkle rain wave ---
  function createSparkleWave(count, startDelay) {
    for (var i = 0; i < count; i++) {
      (function (index) {
        setTimeout(function () {
          var sparkle = document.createElement("div");
          sparkle.className = "sparkle-rain";
          var size = 1.5 + Math.random() * 3.5;
          sparkle.style.width = size + "px";
          sparkle.style.height = size + "px";
          sparkle.style.left = Math.random() * 100 + "%";
          sparkle.style.setProperty(
            "--fall-distance",
            150 + Math.random() * window.innerHeight * 0.7 + "px"
          );
          sparkle.style.setProperty(
            "--fall-duration",
            0.7 + Math.random() * 1.2 + "s"
          );
          var drift = (Math.random() - 0.5) * 80;
          sparkle.style.setProperty("--drift-x", drift + "px");
          sparkle.style.background =
            Math.random() > GOLD_SPARKLE_RATIO ? "#ffffff" : "#c9a959";
          overlay.appendChild(sparkle);
          setTimeout(function () {
            if (sparkle.parentNode) sparkle.parentNode.removeChild(sparkle);
          }, 2500);
        }, startDelay + index * 8);
      })(i);
    }
  }

  // --- Incoming: arriving on a new page ---
  if (sessionStorage.getItem(SESSION_KEY)) {
    sessionStorage.removeItem(SESSION_KEY);

    // Remove the init style that hid page content
    var initStyle = document.getElementById("parlour-transition-init");
    if (initStyle) initStyle.parentNode.removeChild(initStyle);

    // Ensure overlay is fully opaque — it should already be from the init style
    overlay.style.opacity = "1";
    overlay.classList.add("active");

    // Immediately start sparkles (no delay)
    createSparkleWave(120, 0);
    // Second wave at 200ms
    createSparkleWave(100, 200);
    // Third wave at 500ms
    createSparkleWave(80, 500);

    // Show page content and fade overlay after sparkles have been going
    setTimeout(function () {
      // Unhide all body content (in case init style is still active)
      var s = document.getElementById("parlour-transition-init");
      if (s) s.parentNode.removeChild(s);
      document.body.style.opacity = "";

      overlay.style.transition = "opacity 0.7s ease";
      overlay.style.opacity = "0";
      setTimeout(function () {
        overlay.classList.remove("active");
        overlay.style.transition = "";
        overlay.style.opacity = "";
      }, 750);
    }, 1400);
  }

  // --- Outgoing: leaving current page ---
  function performTransition(url) {
    if (overlay.classList.contains("active")) return;

    sessionStorage.setItem(SESSION_KEY, "1");

    // Snap to dark immediately (no CSS transition — avoid partial flash)
    overlay.style.transition = "none";
    overlay.style.opacity = "1";
    overlay.classList.add("active");

    // Small buffer to ensure overlay renders at opacity 1 before navigation
    setTimeout(function () {
      window.location.href = url;
    }, 80);
  }

  // --- Intercept navigation clicks ---
  document.addEventListener(
    "click",
    function (e) {
      var target = e.target.closest("a");
      if (!target || !target.href) return;

      if (
        target.getAttribute("target") === "_blank" ||
        target.hasAttribute("download") ||
        (target.protocol !== "http:" && target.protocol !== "https:") ||
        target.hostname !== window.location.hostname
      ) {
        return;
      }

      if (target.pathname === window.location.pathname && target.hash) return;
      if (target.href === window.location.href) return;
      if (target.hasAttribute("data-no-transition")) return;

      e.preventDefault();
      performTransition(target.href);
    },
    true
  );

  window.addEventListener("popstate", function () {
    sessionStorage.setItem(SESSION_KEY, "1");
  });
})();

