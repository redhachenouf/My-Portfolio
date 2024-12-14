// Scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = 0;
    section.style.transition = 'opacity 1s';
});

window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 1.3) {
            section.style.opacity = 1;
        }
    });
});
