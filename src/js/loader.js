document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".britlex-loader");

    // Блокуємо скрол, поки показується лоадер
    document.body.style.overflow = "hidden";

    // Даємо сторінці догрузитися
    window.addEventListener("load", () => {
        setTimeout(() => {
            // Додаємо клас для плавного зникнення
            loader.classList.add("britlex-loader--hide");

            // Повертаємо скрол
            document.body.style.overflow = "auto";

            // Видаляємо лоадер з DOM після анімації
            setTimeout(() => {
                loader.remove();
            }, 700);
        }, 400); // Затримка, щоб лоадер виглядав плавно
    });
});
