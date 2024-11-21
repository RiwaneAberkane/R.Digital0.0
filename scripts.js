window.addEventListener('load', () => {
    const typingDemo = document.querySelector('.typing-demo');
    const logo = document.getElementById('logo');

    // Lorsque l'animation de texte est terminée
    typingDemo.addEventListener('animationend', () => {
        setTimeout(() => {
            logo.classList.add('show-logo');
        }, 500);

        setTimeout(() => {
            document.querySelector('.socials').classList.add('show-socials');
        }, 1400);
    });
});
