function createFloatingElements() {
  const container = document.querySelector(".floating-elements");
  for (let i = 0; i < 20; i++) {
    const element = document.createElement("div");
    element.className = "floating-element";
    element.style.left = Math.random() * 100 + "%";
    element.style.top = Math.random() * 100 + "%";
    element.style.animationDelay = Math.random() * 6 + "s";
    element.style.animationDuration = 6 + Math.random() * 4 + "s";
    container.appendChild(element);
  }
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, observerOptions);

// Observe elements
document.addEventListener("DOMContentLoaded", () => {
  createFloatingElements();

  // Observe all animated elements
  const animatedElements = document.querySelectorAll(
    ".section-title, .about-content, .skill-category, .project, .card"
  );
  animatedElements.forEach((el) => observer.observe(el));

  // Stagger skill category animations
  const skillCategories = document.querySelectorAll(".skill-category");
  skillCategories.forEach((category, index) => {
    category.style.transitionDelay = index * 0.2 + "s";
  });

  // Stagger project animations
  const projects = document.querySelectorAll(".project");
  projects.forEach((project, index) => {
    project.style.transitionDelay = index * 0.3 + "s";
  });
});

// Smooth scrolling for any navigation links (if added later)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});
x