// Gestionnaire de formulaire de contact
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const button = form.querySelector('button');
    const loader = form.querySelector('.button-loader');
    const formData = new FormData(form);
    
    button.disabled = true;
    loader.style.display = 'inline-block';
    
    try {
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            form.reset();
            showMessage('Message envoyé avec succès !', 'success');
        } else {
            throw new Error('Erreur lors de l\'envoi du message');
        }
    } catch (error) {
        showMessage('Une erreur est survenue. Veuillez réessayer.', 'error');
    } finally {
        button.disabled = false;
        loader.style.display = 'none';
    }
});

function showMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = text;
    
    const formSection = document.querySelector('.contact-form-section');
    formSection.prepend(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}
