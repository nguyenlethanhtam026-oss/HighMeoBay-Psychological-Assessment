// ================= FOOTER ANIMATION =================

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".footer");

    window.addEventListener("scroll", () => {
        if (!footer) return;

        const rect = footer.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
            footer.style.opacity = "1";
            footer.style.transform = "translateY(0)";
        }
    });
    const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
});