document.addEventListener('DOMContentLoaded', () => {
    // Gestion du menu hamburger accessible
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fermer le menu avec Echap
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                hamburger.click();
            }
        });

        // Fermer le menu quand on clique sur un lien
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Navigation au clavier dans le menu
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.addEventListener('keydown', (e) => {
            let targetLink;

            switch(e.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                    e.preventDefault();
                    targetLink = navLinks[index + 1] || navLinks[0];
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    targetLink = navLinks[index - 1] || navLinks[navLinks.length - 1];
                    break;
                case 'Home':
                    e.preventDefault();
                    targetLink = navLinks[0];
                    break;
                case 'End':
                    e.preventDefault();
                    targetLink = navLinks[navLinks.length - 1];
                    break;
            }

            targetLink?.focus();
        });
    });

    // Gestion du scroll pour la navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Gestion du bouton retour en haut
    const scrollTopButton = document.querySelector('.scroll-top');
    if (scrollTopButton) {
        window.addEventListener('scroll', () => {
            scrollTopButton.style.display = window.scrollY > 300 ? 'flex' : 'none';
        });
    }

    // Gestion des focus pour les éléments interactifs
    document.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(el => {
        el.addEventListener('focus', () => {
            el.classList.add('focus-visible');
        });
        
        el.addEventListener('blur', () => {
            el.classList.remove('focus-visible');
        });
    });

    // Gestion du formulaire de contact
    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Désactiver le bouton pendant l'envoi
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalButtonText = submitButton.innerHTML;
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
                
                // Préparer les paramètres pour EmailJS
                const templateParams = {
                    from_name: document.getElementById('name').value,
                    from_email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value || 'Non renseigné',
                    message: document.getElementById('message').value,
                    to_email: 'dorian.speedclean@gmail.com'
                };

                // Envoyer l'email via EmailJS
                emailjs.send('VOTRE_SERVICE_ID', 'VOTRE_TEMPLATE_ID', templateParams)
                    .then(function() {
                        alert('Message envoyé avec succès !');
                        contactForm.reset();
                    }, function(error) {
                        console.error('Erreur:', error);
                        alert('Une erreur est survenue lors de l\'envoi du message.');
                    })
                    .finally(() => {
                        // Réactiver le bouton
                        submitButton.disabled = false;
                        submitButton.innerHTML = originalButtonText;
                    });
            });
        }
    });
});
