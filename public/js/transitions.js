/* transitions.js - Magical page transition */
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Get or create overlay
  let overlay = document.getElementById("magic-transition-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "magic-transition-overlay";
    overlay.id = "magic-transition-overlay";
    body.appendChild(overlay);
  }

  // Create sparkle burst effect
  function createSparkles(x, y) {
    const count = 30;
    for (let i = 0; i < count; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const distance = 40 + Math.random() * 80;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      const tx2 = tx * 1.5;
      const ty2 = ty * 1.5;
      sparkle.style.setProperty("--tx", tx + "px");
      sparkle.style.setProperty("--ty", ty + "px");
      sparkle.style.setProperty("--tx2", tx2 + "px");
      sparkle.style.setProperty("--ty2", ty2 + "px");
      sparkle.style.left = x + "px";
      sparkle.style.top = y + "px";
      sparkle.style.width = (2 + Math.random() * 4) + "px";
      sparkle.style.height = sparkle.style.width;
      overlay.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 800);
    }
  }

  const performTransition = async (url, clickX, clickY) => {
    body.classList.add("transitioning");

    // Show sparkles at click point
    overlay.style.background = "transparent";
    overlay.classList.add("active");
    createSparkles(clickX, clickY);

    // Fade to dark after sparkles start
    await new Promise((resolve) => setTimeout(resolve, 150));
    overlay.style.background = "#0a0a0a";
    overlay.style.transition = "opacity 0.3s ease";

    // Wait for dark overlay to be fully visible
    await new Promise((resolve) => setTimeout(resolve, 300));

    window.isTransitioning = true;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        window.location.href = url;
        window.isTransitioning = false;
        return;
      }

      const text = await response.text();
      const parser = new DOMParser();
      const newDoc = parser.parseFromString(text, "text/html");
      const newBody = newDoc.body;
      const newTitle = newDoc.title;

      // Extract inline scripts
      const inlineScripts = [];
      newDoc.querySelectorAll("script:not([src])").forEach((script) => {
        inlineScripts.push(script.textContent);
      });

      // Replace body content
      document.body.innerHTML = newBody.innerHTML;
      document.title = newTitle;

      // Re-create overlay
      overlay = document.createElement("div");
      overlay.className = "magic-transition-overlay active";
      overlay.id = "magic-transition-overlay";
      overlay.style.background = "#0a0a0a";
      overlay.style.opacity = "1";
      document.body.appendChild(overlay);

      // Execute inline scripts
      inlineScripts.forEach((script) => {
        try {
          eval(script);
        } catch (e) {
          console.error("Error executing inline script:", e);
        }
      });

      // Update URL
      history.pushState({ path: url }, "", url);

      // Re-initialize scripts
      initializePageSpecificScripts();
    } catch (error) {
      console.error("Error during page transition:", error);
      window.location.href = url;
      window.isTransitioning = false;
      return;
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Brief pause then fade in
    await new Promise((resolve) => setTimeout(resolve, 100));
    overlay.style.transition = "opacity 0.4s ease";
    overlay.classList.remove("active");
    overlay.style.opacity = "0";

    await new Promise((resolve) => setTimeout(resolve, 400));
    body.classList.remove("transitioning");
    overlay.style.background = "";
    window.isTransitioning = false;
  };

  // Intercept navigation clicks
  document.addEventListener(
    "click",
    (event) => {
      const target = event.target.closest("a");

      if (target && target.href) {
        // Skip external links and new tab links
        if (
          target.getAttribute("target") === "_blank" ||
          target.hasAttribute("download")
        ) {
          return;
        }

        // Only transition for internal navigation links (not anchor links on same page)
        if (target.hostname === window.location.hostname) {
          // Skip anchor links on same page
          if (target.pathname === window.location.pathname && target.hash) {
            return;
          }

          // Skip same-page links
          if (target.href === window.location.href) {
            return;
          }

          // Skip non-page links (like mailto, tel, javascript)
          if (target.protocol !== "http:" && target.protocol !== "https:") {
            return;
          }

          event.preventDefault();
          const rect = target.getBoundingClientRect();
          const clickX = event.clientX || rect.left + rect.width / 2;
          const clickY = event.clientY || rect.top + rect.height / 2;
          performTransition(target.href, clickX, clickY);
        }
      }
    },
    true
  );

  window.addEventListener("popstate", (event) => {
    if (event.state && event.state.path) {
      performTransition(event.state.path, window.innerWidth / 2, window.innerHeight / 2);
    } else {
      window.location.reload();
    }
  });

  function initializePageSpecificScripts() {
    console.log("Re-initializing page-specific scripts...");

    if (typeof window.setupSmoothScrolling === "function") {
      window.setupSmoothScrolling();
    }
    if (typeof window.setupEventCardHover === "function") {
      window.setupEventCardHover();
    }
    if (typeof window.setupMembershipAnimations === "function") {
      window.setupMembershipAnimations();
    }
    if (typeof window.setupContactForm === "function") {
      if ($ && $("#contact-form").length) {
        window.setupContactForm();
      }
    }
    if (typeof window.setupOwlChatbot === "function") {
      if ($ && $(".owl-chatbot").length) {
        window.setupOwlChatbot();
      }
    }
    if (typeof window.setupHeaderEyes === "function") {
      if ($ && $(".magic-eyes").length) {
        window.setupHeaderEyes();
      }
    }
    if (typeof window.setupArtFormHover === "function") {
      window.setupArtFormHover();
    }
    if (typeof window.setupHamburgerMenu === "function") {
      if ($ && $(".hamburger-menu").length) {
        window.setupHamburgerMenu();
      }
    }
    if (typeof window.setupMagicTricks === "function") {
      window.setupMagicTricks();
    }
    if (typeof window.setupBackToTopButton === "function") {
      if ($ && $("#back-to-top-btn").length) {
        window.setupBackToTopButton();
      }
    }
    if (typeof window.setupLinksPage === "function") {
      if ($ && $("#links-display").length) {
        window.setupLinksPage();
      }
    }
    if (typeof window.createHeroSparkles === "function") {
      window.createHeroSparkles();
    }

    console.log("Page specific scripts re-initialized.");
  }
});
