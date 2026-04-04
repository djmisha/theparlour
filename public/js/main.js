// Main.js - Initializes all functionality

// reinitPage is called both on first load and after every AJAX navigation
window.reinitPage = function () {
  window.setupSmoothScrolling();
  window.setupEventCardHover();
  window.setupMembershipAnimations();
  window.setupContactForm();
  window.setupOwlChatbot();
  window.setupHeaderEyes();
  window.setupArtFormHover();
  window.setupHamburgerMenu();
  window.setupMagicTricks();
  window.setupBackToTopButton();
  window.setupLinksPage();
  if (typeof window.initHeroSparkles === "function") {
    window.initHeroSparkles();
  }
};

$(document).ready(function () {
  window.reinitPage();
});
