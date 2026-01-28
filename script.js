// Dark mode toggle dengan localStorage
const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const currentTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
  html.setAttribute('data-theme', 'dark');
}

toggle.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// Page load animations advanced (Intersection Observer - performant)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe semua elemen .fade-in setelah DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Hide preloader jika ada
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.classList.add('hidden');
    setTimeout(() => preloader.remove(), 500);
  }

  // Tambah class fade-in ke sections umum portfolio
  document.querySelectorAll('header, .hero, .section, .card, .project, nav').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});
