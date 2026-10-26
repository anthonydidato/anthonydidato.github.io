// ==========================================
// CURRENT YEAR
// ==========================================

const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");

});


// Close the mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

    });

});


// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});


// ==========================================
// NAVIGATION SHADOW ON SCROLL
// ==========================================

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 5px 20px rgba(0, 0, 0, 0.05)";

    } else {

        header.style.boxShadow = "none";

    }

});

// Escape closes the mobile menu and restores keyboard focus.
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.focus();
    }
});
