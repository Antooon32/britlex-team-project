//! Burger
const t=document.querySelector("[data-burger-open]"),r=document.querySelector("[data-burger]"),o=document.querySelector("[data-burger-close]");t.addEventListener("click",e);o.addEventListener("click",e);function e(){r.classList.toggle("displaynone"),document.body.classList.toggle("no-scroll")}
