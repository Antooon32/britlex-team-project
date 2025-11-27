// contact-message.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("contact-message loaded");

    // Чекаємо, поки partials loader вставить HTML
    const observer = new MutationObserver(() => {
        const form = document.querySelector(".contact__form");
        const messageBox = document.querySelector(".contact__message");

        if (form && messageBox) {
            console.log("contact form found");

            form.addEventListener("submit", (e) => {
                e.preventDefault();

                form.style.display = "none";

                messageBox.innerHTML = `
          <div class="contact-thanks">
            <h3>Thank you!</h3>
            <p>We will contact you soon.</p>
            <p class="britlex">Brit<span>lex</span></p>
          </div>
        `;

                messageBox.classList.add("visible");
            });

            observer.disconnect();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
