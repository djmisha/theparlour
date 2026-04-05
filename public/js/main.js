// Main.js - Initializes all functionality

// Random hero image for the homepage
window.setupRandomHero = function () {
  var hero = document.getElementById('hero');
  if (!hero || !hero.classList.contains('hero-home')) return;
  var total = 10;
  var index = Math.floor(Math.random() * total) + 1;
  var pad = index < 10 ? '0' + index : '' + index;
  hero.style.backgroundImage = 'url(/image/hero-' + pad + '.webp)';
};

// reinitPage is called both on first load and after every AJAX navigation
window.reinitPage = function () {
  window.setupRandomHero();
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
