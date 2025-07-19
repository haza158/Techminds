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

function toggleProgram() {
    const expandedContent = document.getElementById('expandedContent');
    const expandIcon = document.getElementById('expandIcon');
    
    if (expandedContent.classList.contains('show')) {
        expandIcon.textContent = '>';
        expandedContent.classList.remove('show');
        expandIcon.classList.remove('expanded');

    } else {
        expandIcon.textContent = 'v'; 
        expandedContent.classList.add('show');
        expandIcon.classList.add('expanded');
       
    }
}
