function burgerMenu() {
  const openBtn = document.querySelector('[data-burger-open]');
  const burger = document.querySelector('[data-burger]'); 
  const closeBtn = document.querySelector('[data-burger-close]');
  const backdrop = document.querySelector('[data-backdrop]');

  if (!openBtn || !burger || !closeBtn || !backdrop) return;

  const MOBILE_WIDTH = 767;
  function initializeBurgerState() {
    if (window.innerWidth < MOBILE_WIDTH) {
      burger.classList.add('is-open');
    }
  }

  function toggleBurger() {
    burger.classList.toggle('is-open');
    backdrop.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  }

  initializeBurgerState();
  openBtn.addEventListener('click', toggleBurger);
  closeBtn.addEventListener('click', toggleBurger);
  backdrop.addEventListener('click', toggleBurger);
}

export default burgerMenu;
