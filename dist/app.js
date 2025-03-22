"use strict";
// Gestion du menu déroulant
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    // Gestion desktop
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseover', () => {
            dropdown.querySelector('.dropdown-content')?.classList.add('show');
        });
        dropdown.addEventListener('mouseout', () => {
            dropdown.querySelector('.dropdown-content')?.classList.remove('show');
        });
    });
    // Gestion mobile
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    document.querySelector('.nav-container')?.appendChild(menuToggle);
    menuToggle.addEventListener('click', () => {
        document.querySelector('.nav-menu')?.classList.toggle('show');
    });
    // Fermer le menu en cliquant à l'extérieur
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.nav-menu')) {
            document.querySelector('.nav-menu')?.classList.remove('show');
        }
    });
});
