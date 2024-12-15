// Fixer la barre de navigation en haut
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('fixed', window.scrollY > 50);
});

// Animation d'apparition des éléments au scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
