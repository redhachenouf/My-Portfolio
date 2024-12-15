console.log('Portfolio JS Loaded');

// Gestion des menus et de la navigation const menu
const burgerMenu = document.getElementById('menu-burger');
const menuOverlay = document.getElementById('menu-overlay');
let menuOpen = false;

function toggleMenu() {
    menuOpen = !menuOpen;
    menuOverlay.style.transform = menuOpen ? 'translateX(0%)' : 'translateX(100%)';
    document.body.classList.toggle('no-scroll');
}

burgerMenu.addEventListener('click', toggleMenu);

// Scroll Smooth vers les sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Gestion des projets dynamiques const projets
document.addEventListener("DOMContentLoaded", () => {
    const projets = [
        {
            title: 'Audit de Sécurité',
            image: 'images/audit.png',
            description: 'Analyse des vulnérabilités réalisée avec Nmap et Metasploit.',
            link: 'https://github.com/RedhaChenouf/Audit-Security'
        },
        {
            title: 'Réseau DMZ',
            image: 'images/dmz.png',
            description: 'Mise en place d’une DMZ et configuration des pare-feux.',
            link: '#'
        },
        {
            title: 'Jeu Multijoueur',
            image: 'images/navy.png',
            description: 'Jeu multijoueur réseau en langage C.',
            link: '#'
        }
    ];

    const projectContainer = document.getElementById('projects-container');

    projets.forEach(projet => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <img src="${projet.image}" alt="${projet.title}" class="project-img">
            <h3>${projet.title}</h3>
            <p>${projet.description}</p>
            <a href="${projet.link}" target="_blank" class="btn-project">Voir Plus</a>
        `;
        projectContainer.appendChild(projectCard);
    });
});

// Animation Scroll Fade
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Merci pour votre message, je reviendrai vers vous rapidement.');
    this.reset();
});
