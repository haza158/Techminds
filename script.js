function openMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        document.getElementById('formStatus').textContent = "Thank you for your message!";
        
        this.reset();
    } else {
        document.getElementById('formStatus').textContent = "Please fill in all fields.";
    }
});

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
