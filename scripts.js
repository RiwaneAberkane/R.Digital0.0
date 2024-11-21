// Fonction pour animer le texte "R.Digital"
window.addEventListener('load', () => {
    const logoText = document.getElementById('logo-text');

    // Animer l'opacité et la position du texte pour qu'il apparaisse avec un effet de décalage
    logoText.style.transition = 'opacity 1s ease, transform 1s ease';
    logoText.style.opacity = '1';
    logoText.style.transform = 'translateY(0)';
});
