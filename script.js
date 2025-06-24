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