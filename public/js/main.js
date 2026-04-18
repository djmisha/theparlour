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

// Contact form overlay
window.openContactForm = function () {
  var html =
    '<div class="overlay-contact-form">' +
      '<h2>Request an Invitation</h2>' +
      '<p class="section-intro">Admission to The Parlour is by petition only. Complete the form below and our Council will review your inquiry. Not all petitions are granted — we seek only those with genuine dedication to the art.</p>' +
      '<div class="form-container">' +
        '<form id="contact-form" class="contact-form" method="post" name="contact" novalidate>' +
          '<input type="hidden" name="form-name" value="contact">' +
          '<div class="form-row">' +
            '<div class="form-group form-group-half">' +
              '<label for="name">Full Name</label>' +
              '<input type="text" id="name" name="name" placeholder="Your full name" required>' +
              '<span class="error-message" id="name-error"></span>' +
            '</div>' +
            '<div class="form-group form-group-half">' +
              '<label for="email">Email Address</label>' +
              '<input type="email" id="email" name="email" placeholder="Your private email" required>' +
              '<span class="error-message" id="email-error"></span>' +
            '</div>' +
          '</div>' +
          '<div class="form-row">' +
            '<div class="form-group form-group-half">' +
              '<label for="phone">Phone Number</label>' +
              '<input type="tel" id="phone" name="phone" placeholder="Your phone number" required>' +
              '<span class="error-message" id="phone-error"></span>' +
            '</div>' +
            '<div class="form-group form-group-half">' +
              '<label for="experience">Years of Experience in Magic</label>' +
              '<input type="text" id="experience" name="experience" placeholder="How long have you practiced the art?">' +
              '<span class="error-message" id="experience-error"></span>' +
            '</div>' +
          '</div>' +
          '<div class="form-row">' +
            '<div class="form-group form-group-half">' +
              '<label for="specialization">Primary Discipline</label>' +
              '<input type="text" id="specialization" name="specialization" placeholder="e.g. Close-up, Mentalism, Stage, Card Magic">' +
              '<span class="error-message" id="specialization-error"></span>' +
            '</div>' +
            '<div class="form-group form-group-half">' +
              '<label for="referral">Were You Referred by a Current Member?</label>' +
              '<input type="text" id="referral" name="referral" placeholder="Member name (if applicable)">' +
              '<span class="error-message" id="referral-error"></span>' +
            '</div>' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="message">Tell Us About Your Journey in Magic</label>' +
            '<textarea id="message" name="message" placeholder="Describe your experience, what draws you to the art, and why you seek admission to The Parlour" rows="4" required></textarea>' +
            '<span class="error-message" id="message-error"></span>' +
          '</div>' +
          '<div class="form-group honeypot">' +
            '<label for="bot-field">Bot Field</label>' +
            '<input type="text" id="bot-field" name="bot-field" autocomplete="off">' +
          '</div>' +
          '<div class="form-submit">' +
            '<button type="submit" class="btn" id="submit-button">Submit Your Petition</button>' +
          '</div>' +
        '</form>' +
        '<div id="form-response" class="form-response"><p></p></div>' +
      '</div>' +
    '</div>';

  window.ParlourOverlay.open(html);
  window.setupContactForm();
};

// Enrollment form overlay (The Conservatory of Conjury)
window.openEnrollmentForm = function () {
  var html =
    '<div class="overlay-contact-form">' +
      '<h2>Declare Your Intent</h2>' +
      '<p class="section-intro">We are seeking new enrollees for The Conservatory of Conjury. Sessions are limited and acceptance is not guaranteed — but those who declare their intent now will be first to receive word when a new session opens. Enter your information below and we will summon you when the time comes.</p>' +
      '<div class="form-container">' +
        '<form id="enrollment-form" class="contact-form" method="post" name="enrollment" novalidate>' +
          '<input type="hidden" name="form-name" value="enrollment">' +
          '<div class="form-group">' +
            '<label for="enroll-name">Full Name</label>' +
            '<input type="text" id="enroll-name" name="name" placeholder="Your full name" required>' +
            '<span class="error-message" id="enroll-name-error"></span>' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="enroll-email">Email Address</label>' +
            '<input type="email" id="enroll-email" name="email" placeholder="Your email address" required>' +
            '<span class="error-message" id="enroll-email-error"></span>' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="enroll-phone">Phone Number</label>' +
            '<input type="tel" id="enroll-phone" name="phone" placeholder="Your phone number" required>' +
            '<span class="error-message" id="enroll-phone-error"></span>' +
          '</div>' +
          '<div class="form-group honeypot">' +
            '<label for="enroll-bot-field">Bot Field</label>' +
            '<input type="text" id="enroll-bot-field" name="bot-field" autocomplete="off">' +
          '</div>' +
          '<div class="form-submit">' +
            '<button type="submit" class="btn" id="enroll-submit-button">Declare My Intent</button>' +
          '</div>' +
        '</form>' +
        '<div id="enrollment-form-response" class="form-response"><p></p></div>' +
      '</div>' +
    '</div>';

  window.ParlourOverlay.open(html);
  window.setupEnrollmentForm();
};

// Delegated click handler for enrollment form triggers
document.addEventListener('click', function (e) {
  var trigger = e.target.closest('.open-enrollment-form');
  if (trigger) {
    e.preventDefault();
    e.stopPropagation();
    window.openEnrollmentForm();
  }
}, true);

// Delegated click handler for contact form triggers
document.addEventListener('click', function (e) {
  var trigger = e.target.closest('.open-contact-form');
  if (trigger) {
    e.preventDefault();
    e.stopPropagation();
    window.openContactForm();
  }
}, true);

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
