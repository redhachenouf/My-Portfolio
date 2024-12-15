// Défilement fluide pour les liens d'ancrage
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-links a, .scroll-link");

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});

// Animation d'apparition progressive des projets
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll(".project-card").forEach(card => {
    observer.observe(card);
});
