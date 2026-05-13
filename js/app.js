const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeLabel = document.querySelector("[data-theme-label]");
const themeStorageKey = "agent-memory-theme";
const themeOrder = ["auto", "light", "dark"];

function closeNav() {
    if (!navToggle || !siteNav) return;

    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
}

if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
        const isOpen = siteNav.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
            closeNav();
            navToggle.focus();
        }
    });
}

function applyTheme(theme) {
    const normalizedTheme = themeOrder.includes(theme) ? theme : "auto";

    if (normalizedTheme === "auto") {
        delete document.documentElement.dataset.theme;
        localStorage.removeItem(themeStorageKey);
    } else {
        document.documentElement.dataset.theme = normalizedTheme;
        localStorage.setItem(themeStorageKey, normalizedTheme);
    }

    if (themeLabel) {
        themeLabel.textContent = normalizedTheme;
    }

    if (themeToggle) {
        themeToggle.setAttribute("aria-label", `Theme: ${normalizedTheme}`);
        themeToggle.setAttribute("aria-pressed", String(normalizedTheme !== "auto"));
    }
}

if (themeToggle) {
    applyTheme(localStorage.getItem(themeStorageKey));

    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.dataset.theme || "auto";
        const nextTheme = themeOrder[(themeOrder.indexOf(currentTheme) + 1) % themeOrder.length];
        applyTheme(nextTheme);
    });
}

document.querySelectorAll(".example-preview").forEach((preview) => {
    const tabs = Array.from(preview.querySelectorAll(".example-tab"));
    const panes = Array.from(preview.querySelectorAll(".example-pane"));

    function activateTab(tab, shouldFocus = false) {
        const target = document.getElementById(tab.dataset.target);
        if (!target) return;

        tabs.forEach((candidate) => {
            candidate.classList.remove("is-active");
            candidate.setAttribute("aria-selected", "false");
            candidate.setAttribute("tabindex", "-1");
        });

        panes.forEach((pane) => pane.classList.remove("is-active"));

        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");
        tab.setAttribute("tabindex", "0");
        target.classList.add("is-active");

        if (shouldFocus) {
            tab.focus();
        }
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => activateTab(tab));

        tab.addEventListener("keydown", (event) => {
            const lastIndex = tabs.length - 1;
            let nextIndex = null;

            if (event.key === "ArrowRight") nextIndex = index === lastIndex ? 0 : index + 1;
            if (event.key === "ArrowLeft") nextIndex = index === 0 ? lastIndex : index - 1;
            if (event.key === "Home") nextIndex = 0;
            if (event.key === "End") nextIndex = lastIndex;

            if (nextIndex === null) return;

            event.preventDefault();
            activateTab(tabs[nextIndex], true);
        });
    });
});
