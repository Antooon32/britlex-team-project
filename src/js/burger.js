function burgerMenu() {
  const openBtn = document.querySelector('[data-burger-open]');
  const burger = document.querySelector('[data-burger]');
  const closeBtn = document.querySelector('[data-burger-close]');
  const backdrop = document.querySelector('[data-backdrop]');
  const links = document.querySelectorAll('[data-burger] a[href^="#"]');

  if (!openBtn || !burger || !closeBtn || !backdrop) return;

  // ================= OPEN =================
  function openBurger() {
    burger.classList.add('is-open');
    backdrop.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  // ================= CLOSE =================
  function closeBurger() {
    burger.classList.remove('is-open');
    backdrop.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  // ✅ старт завжди закритий
  closeBurger();

  // ================= BUTTONS =================
  openBtn.addEventListener('click', openBurger);
  closeBtn.addEventListener('click', closeBurger);
  backdrop.addEventListener('click', closeBurger);

  // ================= ESC =================
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeBurger();
    }
  });

  // ================= LINKS =================
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetId = link.getAttribute('href').slice(1);
      const section = document.getElementById(targetId);

      closeBurger();

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
}

export default burgerMenu;
