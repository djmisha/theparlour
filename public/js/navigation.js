window.setupSmoothScrolling = function () {
  $('a[href^="#"]')
    .off("click")
    .on("click", function (event) {
      if (
        this.getAttribute("target") === "_blank" ||
        !this.pathname.endsWith(
          location.pathname.substring(location.pathname.lastIndexOf("/") + 1)
        )
      ) {
        return;
      }

      event.preventDefault();

      var href = this.getAttribute("href");

      if (href === "#") {
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          2000
        );
        return;
      }

      var target = $(href);

      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 80,
          },
          800
        );
      }
    });
};

window.setupHamburgerMenu = function () {
  // Get the nav inner content for the overlay
  var jumboNavEl = document.querySelector(".jumbo-nav");
  var jumboNavInnerEl = document.querySelector(".jumbo-nav .nav-inner");

  $(".hamburger-menu")
    .off("click")
    .on("click", function () {
      $(this).toggleClass("active");

      if (window.ParlourOverlay && jumboNavInnerEl) {
        // Use the ParlourOverlay system
        var navHtml = jumboNavInnerEl.outerHTML;
        var overlay = window.ParlourOverlay.open(navHtml);

        // Handle nav link clicks to close overlay
        overlay.querySelectorAll(".parlour-overlay-body a").forEach(function (a) {
          a.addEventListener("click", function () {
            // Close immediately (transition will handle the page change)
            window.ParlourOverlay.close(overlay);
            $(".hamburger-menu").removeClass("active");
          });
        });

        // Handle span (tell-secret, flip-trick) clicks
        overlay.querySelectorAll(".parlour-overlay-body span").forEach(function (span) {
          span.addEventListener("click", function () {
            window.ParlourOverlay.close(overlay);
            $(".hamburger-menu").removeClass("active");
            // Re-fire the original click handler
            var origId = span.id;
            if (origId) {
              var origEl = document.querySelector("." + (origId === "secret-trick" ? "tell-secret" : "do-magic"));
              if (origEl && origEl !== span) origEl.click();
            }
          });
        });

        // When overlay is closed via ESC or close button, reset hamburger
        var observer = new MutationObserver(function () {
          if (!overlay.classList.contains("visible")) {
            $(".hamburger-menu").removeClass("active");
          }
        });
        observer.observe(overlay, { attributes: true, attributeFilter: ["class"] });
      } else if (jumboNavEl) {
        // Fallback to original behavior
        if ($(jumboNavEl).hasClass("open")) {
          $(jumboNavEl).css("right", "-100%");
          setTimeout(function () {
            $(jumboNavEl).removeClass("open");
            $(jumboNavEl).css("right", "");
          }, 300);
        } else {
          $(jumboNavEl).addClass("open");
          $(jumboNavEl).css("right", "0");
        }
      }
    });

  // Keep jumbo-nav link clicks working if it's open the old way
  if (jumboNavEl) {
    $(".jumbo-nav a")
      .off("click.hamburger")
      .on("click.hamburger", function () {
        $(".hamburger-menu").removeClass("active");
        $(".jumbo-nav").css("right", "-100%");
        setTimeout(function () {
          $(".jumbo-nav").removeClass("open");
          $(".jumbo-nav").css("right", "");
        }, 300);
      });
  }
};

window.setupBackToTopButton = function () {
  var backToTopBtn = $("#back-to-top-btn");
  if (!backToTopBtn.length) return;

  $(window)
    .off("scroll.backToTop")
    .on("scroll.backToTop", function () {
      if ($(this).scrollTop() > 300) {
        backToTopBtn.fadeIn(300);
      } else {
        backToTopBtn.fadeOut(300);
      }
    });

  backToTopBtn.off("click").on("click", function (e) {
    e.preventDefault();
    $(this).addClass("levitating");
    var textElements = $("p, h1, h2, h3, h4, h5, h6, a").filter(function () {
      return !$(this).closest("").length;
    });
    textElements.each(function () {
      var element = $(this);
      var direction = Math.random() > 0.5 ? 1 : -1;
      var delay = Math.random() * 0.8;
      element.css({
        transition: "transform 1s ease " + delay + "s",
        "transform-origin": "center center",
      });
      setTimeout(function () {
        element.css("transform", "rotate(" + 360 * direction + "deg)");
        setTimeout(function () {
          element.css({ transition: "", transform: "" });
        }, 4000);
      }, 1000);
    });
    $("html, body").animate({ scrollTop: 0 }, 1000, function () {
      backToTopBtn.removeClass("levitating");
    });
  });
};
