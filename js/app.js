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
        const target = document.getElementById(tab.dataset.target);
        if (!parent || !target) return;

        parent.querySelectorAll(".example-tab").forEach((t) => {
            t.classList.remove("is-active");
            t.setAttribute("aria-selected", "false");
        });
        parent.querySelectorAll(".example-pane").forEach((p) => p.classList.remove("is-active"));
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");
        target.classList.add("is-active");
    });
});
