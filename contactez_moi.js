// Récupération des éléments du formulaire
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Fonction pour envoyer les données du formulaire en utilisant Ajax
function sendFormData(formData) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "process-form.php", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      alert("Votre message a été envoyé avec succès !");
      form.reset();
    }
  };
  xhr.send(formData);
}

// Écouteur d'événement pour le formulaire
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  sendFormData(JSON.stringify(formData));
});
