/* heroSparkles.js - Ambient sparkle effect for hero sections */
document.addEventListener("DOMContentLoaded", function () {
  function createHeroSparkles() {
    const heroes = document.querySelectorAll(".hero-section, .content-hero");
    
    heroes.forEach(function (hero) {
      // Create sparkle container
      const sparkleContainer = document.createElement("div");
      sparkleContainer.className = "hero-sparkle-container";
      sparkleContainer.style.position = "absolute";
      sparkleContainer.style.bottom = "0";
      sparkleContainer.style.left = "0";
      sparkleContainer.style.width = "100%";
      sparkleContainer.style.height = "80px";
      sparkleContainer.style.overflow = "hidden";
      sparkleContainer.style.pointerEvents = "none";
      sparkleContainer.style.zIndex = "3";
      hero.appendChild(sparkleContainer);

      // Continuously spawn sparkles
      function spawnSparkle() {
        if (!document.body.contains(sparkleContainer)) return;
        
        const sparkle = document.createElement("div");
        sparkle.style.position = "absolute";
        sparkle.style.width = (1 + Math.random() * 3) + "px";
        sparkle.style.height = sparkle.style.width;
        sparkle.style.background = "#ffffff";
        sparkle.style.borderRadius = "50%";
        sparkle.style.left = Math.random() * 100 + "%";
        sparkle.style.bottom = Math.random() * 40 + "px";
        sparkle.style.opacity = "0";
        sparkle.style.boxShadow = "0 0 4px rgba(255,255,255,0.6)";
        sparkleContainer.appendChild(sparkle);

        // Animate: fade in, drift, fade out
        const duration = 1500 + Math.random() * 2000;
        const driftX = (Math.random() - 0.5) * 30;
        const driftY = -(10 + Math.random() * 20);
        
        sparkle.animate([
          { opacity: 0, transform: "translate(0, 0) scale(0)" },
          { opacity: 0.9, transform: "translate(" + (driftX * 0.3) + "px, " + (driftY * 0.3) + "px) scale(1)", offset: 0.3 },
          { opacity: 0.7, transform: "translate(" + (driftX * 0.7) + "px, " + (driftY * 0.7) + "px) scale(1.2)", offset: 0.7 },
          { opacity: 0, transform: "translate(" + driftX + "px, " + driftY + "px) scale(0)" }
        ], {
          duration: duration,
          easing: "ease-in-out"
        }).onfinish = function () {
          sparkle.remove();
        };

        // Schedule next sparkle
        setTimeout(spawnSparkle, 100 + Math.random() * 200);
      }

      // Start spawning with a small delay per hero
      setTimeout(spawnSparkle, Math.random() * 500);
    });
  }

  createHeroSparkles();

  // Make it available for re-init after transitions
  window.createHeroSparkles = createHeroSparkles;
});
