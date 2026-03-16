// Reposition BMC button to bottom center
window.addEventListener("load", () => {
    const checkBmc = setInterval(() => {
        const btn = document.querySelector("[id^='bmc'],.bmc-btn-container,.bmc-btn")
            || document.querySelector("body > div[style*='position: fixed']");
        if (btn) {
            clearInterval(checkBmc);
            btn.style.setProperty("left", "50%", "important");
            btn.style.setProperty("transform", "translateX(-50%)", "important");
            btn.style.setProperty("right", "auto", "important");
        }
    }, 200);
    setTimeout(() => clearInterval(checkBmc), 5000);
});

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
        const isOpen = siteNav.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            siteNav.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}
