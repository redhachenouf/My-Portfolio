console.log('Portfolio JS Loaded');

// Gestion des menus et de la navigation
const burgerMenu = document.getElementById('menu-burger');
const menuOverlay = document.getElementById('menu-overlay');
let menuOpen = false;

function toggleMenu() {
    menuOpen = !menuOpen;
    menuOverlay.style.transform = menuOpen ? 'translateX(0%)' : 'translateX(100%)';
    document.body.classList.toggle('no-scroll');
}
if (burgerMenu) burgerMenu.addEventListener('click', toggleMenu);

// Scroll Smooth vers les sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Effet de texte loading
const loadingText = document.querySelector(".loading-text");
if (loadingText) {
    let dots = 0;
    setInterval(() => {
        dots = (dots + 1) % 4;
        loadingText.textContent = "Loading" + ".".repeat(dots);
    }, 500);
}

// Animation Scroll Fade
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('fade-in');
    });
});
document.querySelectorAll('.section').forEach(section => observer.observe(section));
