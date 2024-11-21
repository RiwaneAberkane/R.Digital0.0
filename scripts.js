window.addEventListener('load', () => {
    const typingDemo = document.querySelector('.typing-demo');
    const logo = document.getElementById('logo');

    // Lorsque l'animation de la phrase est terminée, on affiche le logo
    typingDemo.addEventListener('animationend', () => {
        logo.style.opacity = '2'; // Rendre le logo visible
        logo.style.transform = 'translateY(0)'; // Le faire glisser vers le bas
    });
});

window.onload = function () {
    // Ajoutez la classe show-logo au logo pour déclencher l'animation
    document.getElementById('logo').classList.add('show-logo');

    // Après 1.5 secondes (pour permettre au logo de finir son animation), affichez les réseaux sociaux
    setTimeout(function () {
        document.querySelector('.socials').classList.add('show-socials');
    }, 800); // Temps ajusté pour correspondre à la durée de l'animation du logo
};
