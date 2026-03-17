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

document.querySelectorAll(".example-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
        const parent = tab.closest(".example-preview");
        parent.querySelectorAll(".example-tab").forEach((t) => t.classList.remove("is-active"));
        parent.querySelectorAll(".example-pane").forEach((p) => p.classList.remove("is-active"));
        tab.classList.add("is-active");
        document.getElementById(tab.dataset.target).classList.add("is-active");
    });
});
