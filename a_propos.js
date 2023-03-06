// Navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');


navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

// Récupération de l'élément navbar
const navbar = document.querySelector('.navbar');

// Récupération des liens de la navbar
const navbarLinks = navbar.getElementsByTagName('a');

// Parcours des liens de la navbar pour ajouter la classe "active" à l'onglet correspondant à la page active
for (let i = 0; i < navbarLinks.length; i++) {
  if (navbarLinks[i].href === document.URL) {
    navbarLinks[i].classList.add('active');
    break;
  }
}
const button = document.querySelector('.about button');
const paragraph = document.querySelector('#tap');


if (button){
  button.addEventListener('click', () => {
    button.textContent = `Bonjour et bienvenue sur mon portfolio ! 
  Anciennement cuisinier pendant 10 ans, je cherchais de nouvelles expériences et j'ai décidé de me reconvertir dans le développement web et mobile.
  Depuis le 1er septembre 2022, je me forme avec la plateforme STUDI. 
  Je me sens plus Front-end et j'aime ce que je découvre en codant. 
  En dehors de la programmation, je suis un passionné de jeux vidéo et j'accorde un regard détaillé sur le sujet. 
  Qui sait, peut-être qu'un jour je pourrais créer mon propre jeu indépendant ? 
  N'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez en savoir plus sur mes projets !`;
  });
}

