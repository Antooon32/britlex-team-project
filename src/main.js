// import './sass/main.scss';
import './js/loader';
// !!! Важливо: НЕ імпортуємо burger тут, бо він запускається зарано
// import './js/burger';

document.addEventListener('partialsLoaded', () => {

  // === Запускаємо бургер тільки після того, як header підключився ===
  import('./js/burger').then(module => {
    module.default(); // виклик функції з burger.js
  });

  // === Плавний скрол після partials ===
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.getAttribute('href').substring(1);
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', `#${id}`);
      }
    });
  });
});
