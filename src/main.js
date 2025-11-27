// ==== ЛОАДЕР ====
import './js/loader';

// ==== БУРГЕР ====
import burgerMenu from './js/burger';
burgerMenu();

// ==== ПЛАВНИЙ СКРОЛ ДО СЕКЦІЙ ====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const id = link.getAttribute('href').substring(1);
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', `#${id}`);
    }
  });
});
