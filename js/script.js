'use strict';

/**
 * Element toggle function
 */
const elemToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

/**
 * Header sticky & go to top
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**
 * Navbar toggle
 */
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});

/**
 * Skills toggle
 */
const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { 
      elemToggleFunc(toggleBtns[i]); 
    }
    elemToggleFunc(skillsBox);
  });
}

/**
 * Dark & light theme toggle
 */
const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {
  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");
    localStorage.setItem("theme", "dark_theme");
  }
});

/**
 * Check & apply last time selected theme from localStorage
 */
if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

/**
 * Wrap function to determine target element
 */
function wrap(_el) {
  if (!_el || _el === document.body) return null;
  if (_el.classList && _el.classList.contains('wrap')) return _el;
  return wrap(_el.parentNode);
}

// Update the custom cursor position based on elements' offset
addEventListener('mousemove', e => {
  let _t = wrap(e.target);

  if (_t) {
    let rect = _t.getBoundingClientRect();

    _t.style.setProperty('--x', `${e.clientX - 0.7 * rect.width}px`);
    _t.style.setProperty('--y', `${e.clientY - 0.5 * rect.height - rect.y}px`);
  }
});

/**
 * Welcome Layer & Main Content Interaction
 */
const welcomeLayer = document.getElementById('welcome-layer');
const mainContent = document.getElementById('main-content');

// Function to hide the welcome layer and show the main content
function hideWelcomeLayer() {
  welcomeLayer.classList.add('hidden'); // Hide welcome layer
  mainContent.classList.add('show');   // Show main content
}

// Add event listeners for click and scroll
welcomeLayer.addEventListener('click', hideWelcomeLayer);
window.addEventListener('scroll', hideWelcomeLayer);


/**
 * Welcome Layer & Main Content Interaction
 */

