
// ===== Mobile Navigation =====

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after clicking a navigation link

navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// ===== Class Selection =====

const message = document.getElementById("message");

document.querySelectorAll("[data-class]").forEach(function (link) {
  link.addEventListener("click", function () {
    const className = link.dataset.class;

    message.textContent =
      "You've selected " + className +
      ". Your next step is to choose a session!";
  });
});

// ===== Start Your Journey Button =====

const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {
  message.textContent =
    "Welcome to InnerPeace! Take a deep breath and begin at your own pace.";
});



// ===== Active Navigation Highlighting =====

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(
  '.nav-links a[href^="#"]'
);

function updateActiveLink() {
  let currentSection = "home";

  sections.forEach(function (section) {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop <= 150) {
      currentSection = section.id;
    }
  });

  navigationLinks.forEach(function (link) {
    const isActive =
      link.getAttribute("href") === "#" + currentSection;

    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

// Update when the visitor scrolls
window.addEventListener("scroll", updateActiveLink, {
  passive: true
});

// Set the correct active link when the page loads
window.addEventListener("load", updateActiveLink);

// Update when the visitor clicks a navigation link
navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    updateActiveLink();
  });
});



// ===== Back to Top Button =====

const backToTop = document.getElementById("backToTop");

// Show the button after scrolling down
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
}, { passive: true });

// Smoothly return to the top
backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
