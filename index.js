// simple fade-in
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    // trigger the CSS transition
    requestAnimationFrame(() => {
        hero.classList.add('visible');
    });
});
