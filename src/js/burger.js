function burgerMenu() {
  const openBtn = document.querySelector('[data-burger-open]');
  const burger = document.querySelector('[data-burger]');
  const closeBtn = document.querySelector('[data-burger-close]');
  const backdrop = document.querySelector('[data-backdrop]');

  if (!openBtn || !burger || !closeBtn || !backdrop) return;

  function toggleBurger() {
    burger.classList.toggle('is-open');
    backdrop.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  }

  openBtn.addEventListener('click', toggleBurger);
  closeBtn.addEventListener('click', toggleBurger);
  backdrop.addEventListener('click', toggleBurger);
}

export default burgerMenu;
