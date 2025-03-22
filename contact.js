document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const phoneInput = document.getElementById('phone');

    // Formater automatiquement le numéro de téléphone pendant la saisie
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Garde uniquement les chiffres
        if (value.length > 0) {
            // Format: XX XX XX XX XX
            value = value.match(/.{1,2}/g).join(' ');
            e.target.value = value;
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validation supplémentaire si nécessaire
        const phone = phoneInput.value.replace(/\D/g, '');
        if (phone && (phone.length < 10 || phone.length > 10)) {
            alert('Le numéro de téléphone doit contenir 10 chiffres');
            return;
        }

        // Ici, vous pouvez ajouter le code pour envoyer le formulaire
        // Par exemple, avec fetch() vers votre backend

        // Pour l'instant, on simule juste un succès
        const button = form.querySelector('.send-button');
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
        button.style.backgroundColor = '#2ecc71';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.backgroundColor = '';
            form.reset();
        }, 3000);
    });
});
