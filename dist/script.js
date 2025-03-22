"use strict";
// Gestion interactive de la navigation
class NavigationManager {
    mobileMenuButton;
    desktopMenu;
    dropdownTriggers;
    constructor() {
        this.mobileMenuButton = document.getElementById('mobileMenu');
        this.desktopMenu = document.querySelector('.md\\:flex');
        this.dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
        this.initEventListeners();
    }
    initEventListeners() {
        // Menu mobile
        this.mobileMenuButton?.addEventListener('click', () => this.toggleMobileMenu());
        // Dropdowns desktop
        this.dropdownTriggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', () => this.openDropdown(trigger));
            trigger.addEventListener('mouseleave', () => this.closeDropdown(trigger));
        });
    }
    toggleMobileMenu() {
        this.desktopMenu?.classList.toggle('hidden');
        this.desktopMenu?.classList.toggle('absolute');
        this.desktopMenu?.classList.toggle('bg-white');
        this.desktopMenu?.classList.toggle('w-full');
        this.desktopMenu?.classList.toggle('top-20');
        this.desktopMenu?.classList.toggle('left-0');
        this.desktopMenu?.classList.toggle('py-4');
        this.desktopMenu?.classList.toggle('px-4');
    }
    openDropdown(trigger) {
        const dropdown = trigger.nextElementSibling;
        dropdown?.classList.remove('hidden');
    }
    closeDropdown(trigger) {
        const dropdown = trigger.nextElementSibling;
        dropdown?.classList.add('hidden');
    }
}
// Initialisation quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    new NavigationManager();
});
