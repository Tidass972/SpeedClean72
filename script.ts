// Gestion interactive de la navigation
class NavigationManager {
  private mobileMenuButton: HTMLElement | null;
  private desktopMenu: HTMLElement | null;
  private dropdownTriggers: NodeListOf<HTMLElement>;

  constructor() {
    this.mobileMenuButton = document.getElementById('mobileMenu');
    this.desktopMenu = document.querySelector('.md\\:flex');
    this.dropdownTriggers = document.querySelectorAll('.dropdown-trigger');

    this.initEventListeners();
  }

  private initEventListeners(): void {
    // Menu mobile
    this.mobileMenuButton?.addEventListener('click', () => this.toggleMobileMenu());

    // Dropdowns desktop
    this.dropdownTriggers.forEach(trigger => {
      trigger.addEventListener('mouseenter', () => this.openDropdown(trigger));
      trigger.addEventListener('mouseleave', () => this.closeDropdown(trigger));
    });
  }

  private toggleMobileMenu(): void {
    this.desktopMenu?.classList.toggle('hidden');
    this.desktopMenu?.classList.toggle('absolute');
    this.desktopMenu?.classList.toggle('bg-white');
    this.desktopMenu?.classList.toggle('w-full');
    this.desktopMenu?.classList.toggle('top-20');
    this.desktopMenu?.classList.toggle('left-0');
    this.desktopMenu?.classList.toggle('py-4');
    this.desktopMenu?.classList.toggle('px-4');
  }

  private openDropdown(trigger: HTMLElement): void {
    const dropdown = trigger.nextElementSibling as HTMLElement;
    dropdown?.classList.remove('hidden');
  }

  private closeDropdown(trigger: HTMLElement): void {
    const dropdown = trigger.nextElementSibling as HTMLElement;
    dropdown?.classList.add('hidden');
  }
}

// Initialisation quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
  new NavigationManager();
});
