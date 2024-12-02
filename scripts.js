window.addEventListener('load', () => {
    const typingDemo = document.querySelector('.typing-demo');
    const logo = document.getElementById('logo');
    const socials = document.querySelector('.socials');
    let animationPlayed = false; // Empêche la relance de l'animation

    // Attendre la fin de l'animation de texte
    typingDemo.addEventListener('animationend', () => {
        if (!animationPlayed) {
            animationPlayed = true; // Marquer comme joué

            // Afficher le logo avec un délai de 0.5 seconde
            setTimeout(() => {
                logo.classList.add('show-logo');
            }, 500);

            // Afficher les réseaux sociaux après le logo
            setTimeout(() => {
                socials.classList.add('show-socials');
            }, 2000);
        }
    });
});
