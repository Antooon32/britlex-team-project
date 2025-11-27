//! Burger
const openBurgerBtn = document.querySelector("[data-burger-open]");
const burger = document.querySelector("[data-burger]");
const closeBurgerBtn = document.querySelector("[data-burger-close]");
const burgerBackdrop = document.querySelector("[data-backdrop]"); 

openBurgerBtn.addEventListener("click", toggleburger);
closeBurgerBtn.addEventListener("click", toggleburger);
if (burgerBackdrop) {
    burgerBackdrop.addEventListener("click", toggleburger);
}


function toggleburger() {
    burger.classList.toggle("is-open");
    document.body.classList.toggle("no-scroll");
    if (burgerBackdrop) {
        burgerBackdrop.classList.toggle("open");
    }
};

const mediaQuery = window.matchMedia('(max-width: 766px)');

function handleMobileState(event) {
    if (event.matches) {
        if (!burger.classList.contains('is-open')) {
            burger.classList.add('is-open');
        }
        
    } else {
        if (burger.classList.contains('is-open')) {
            burger.classList.remove('is-open');
        }
        
        if (document.body.classList.contains('no-scroll')) {
            document.body.classList.remove('no-scroll');
        }
    }
}

handleMobileState(mediaQuery);

mediaQuery.addListener(handleMobileState);