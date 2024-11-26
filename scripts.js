window.addEventListener("load", () => {
  const typingDemo = document.querySelector(".typing-demo");
  const logo = document.getElementById("logo");

  typingDemo.addEventListener("animationend", () => {
    if (!animationPlayed) {
      animationPlayed = true; // Marquez l'animation comme jouée

      // Ajoutez un délai pour afficher le logo
      setTimeout(() => {
        logo.classList.add("show-logo");
      }, 500); // 0,5 seconde après la fin de l'animation typing

      // Affichez les réseaux sociaux après l'animation du logo
      setTimeout(() => {
        document.querySelector(".socials").classList.add("show-socials");
      }, 2000); // 1.5s après l'affichage du logo
    }
  });
});
