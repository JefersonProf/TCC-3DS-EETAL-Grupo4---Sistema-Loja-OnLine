// ===== Marcar link ativo pela URL =====
const navLinks = document.querySelectorAll('nav a');
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// ===== Efeito fade-in para os cards =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target); // só anima 1 vez
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.founder-card, .value').forEach(card => {
  observer.observe(card);
});
