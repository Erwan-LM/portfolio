/* heure */
function HeureCheckEJS() {
  krucial = new Date;
  heure = krucial.getHours();
  min = krucial.getMinutes();
  sec = krucial.getSeconds();
  jour = krucial.getDate();
  mois = krucial.getMonth() + 1;
  annee = krucial.getFullYear();

  if (sec < 10) {
    sec0 = "0";
  } else {
    sec0 = "";
  }

  if (min < 10) {
    min0 = "0";
  } else {
    min0 = "";
  }

  if (heure < 10) {
    heure0 = "0";
  } else {
    heure0 = "";
  }

  DinaHeure = heure0 + heure + ":" + min0 + min + ":" + sec0 + sec;

  document.getElementById("ejs_heure").innerHTML = DinaHeure;
  setTimeout("HeureCheckEJS()", 1000);
}
HeureCheckEJS();




