function openMenu() {
    const menu = document.querySelector('nav ul');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    menu.classList.add('show');
    menuIcon.style.display = 'none'; // Hide hamburger
    closeIcon.style.display = 'block'; // Show close icon
}

function closeMenu() {
    const menu = document.querySelector('nav ul');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    menu.classList.remove('show');
    menuIcon.style.display = 'block'; // Show hamburger
    closeIcon.style.display = 'none'; // Hide close icon
}
//Animation for Stats-Homepage
// Counter Animation
function animateCount(el, target) {
    let count = 0;
    const speed = 200; // lower = faster
    const increment = target / speed;

    const updateCount = () => {
        count += increment;
        if (count < target) {
            el.textContent = Math.ceil(count);
            requestAnimationFrame(updateCount);
        } else {
            el.textContent = target;
        }
    };

    updateCount();
}

// Scroll Detection
let statsAnimated = false;

window.addEventListener('scroll', () => {
    const statsSection = document.getElementById('stats');
    const statsPosition = statsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (statsPosition < screenPosition && !statsAnimated) {
        statsAnimated = true;

        const stats = document.querySelectorAll('.stat');
        stats.forEach((stat, index) => {
            setTimeout(() => {
                stat.classList.add('show');
                const countEl = stat.querySelector('.count');
                const target = +countEl.getAttribute('data-target');
                animateCount(countEl, target);
            }, index * 300); // Stagger delay
        });
    }
});
