const fr = [
  "Je suis un développeur web débutant avec une passion pour la programmation et l'envie de créer des sites web dynamiques et modernes. De nature serieuse, j'ai a coeur a réalisé un travail bien fait.",
  "J'utilise les langages de programmation comme HTML, CSS et JavaScript, et j'ai également des notions en bases de données. Mon objectif est de travailler sur des projets ambitieux et passionnants, où je peux mettre en pratique mes compétences pour fournir des solutions innovantes.",
  "Je suis à l'écoute de vos besoins et de vos idées pour créer des sites web qui correspondent à votre vision et à vos objectifs. N'hésitez pas à me contacter pour discuter de votre projet, j'ai hâte de travailler avec vous !",
];

const eng = [
  "I am a beginner web developer with a passion for programming and a desire to create dynamic and modern websites. I am serious and committed to doing a job well done.",
  "I use programming languages such as HTML, CSS, and JavaScript, and I also have some knowledge of databases. My goal is to work on ambitious and exciting projects where I can put my skills into practice to provide innovative solutions.",
  "I am open to your needs and ideas to create websites that match your vision and goals. Please feel free to contact me to discuss your project, I am eager to work with you!",
];

let frClick = true;

button.addEventListener("click", () => {
  if (frClick) {
    sectionTrad.innerHTML = "";
    fr.map((frItem) => {
      sectionTrad.innerHTML += "<p>" + frItem + "</p>";
    });
    frClick = !frClick;
  } else {
    sectionTrad.innerHTML = "";
    eng.map((frItem) => {
      sectionTrad.innerHTML += "<p>" + frItem + "</p>";
    });
    frClick = !frClick;
  }
});
