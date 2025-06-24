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
