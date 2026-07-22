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

// ================= HERO ANIMATION =================

document.addEventListener("DOMContentLoaded", () => {

    const heroItems = document.querySelectorAll(".hero-item");

    heroItems.forEach((item, index) => {

        setTimeout(() => {

            item.classList.add("show");

        }, index * 180);

    });

});

// ================= ORIENTATION NOTICE =================

document.addEventListener("DOMContentLoaded", () => {

    const overlay = document.getElementById("orientationOverlay");
    const closeBtn = document.getElementById("closeOrientation");

    if (!overlay || !closeBtn) return;

    const viewed = sessionStorage.getItem("orientationNotice");

    if (
        !viewed &&
        window.innerWidth < 768 &&
        window.innerHeight > window.innerWidth
    ) {
        overlay.classList.add("show");
    }

    closeBtn.addEventListener("click", () => {

        overlay.classList.remove("show");

        sessionStorage.setItem("orientationNotice", "true");

    });

});