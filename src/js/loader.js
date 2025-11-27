// === PARTIALS LOADER ===

async function loadPartials() {
    const elements = document.querySelectorAll('load');

    for (const el of elements) {
        // підтримка синтаксису: <load src="partials/..."></load>
        const file = el.getAttribute('src');

        if (!file) continue;

        try {
            const res = await fetch(file);
            const html = await res.text();

            // замінюємо <load> на завантажений HTML
            el.insertAdjacentHTML('afterend', html);
            el.remove();

        } catch (err) {
            console.error("Помилка завантаження partial:", file, err);
        }
    }

    // 👉 повідомляємо, що partials завантажені
    document.dispatchEvent(new Event('partialsLoaded'));
}

loadPartials();



// === LOADER ANIMATION (твій оригінальний код) ===

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".britlex-loader");
    document.body.style.overflow = "hidden";

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.classList.add("britlex-loader--hide");
            document.body.style.overflow = "auto";

            setTimeout(() => loader.remove(), 700);
        }, 400);
    });
});
