// C capital emprunté
// t taux mensuel = taux_annuel(%)/100 / 12
// n nombre de mensualités
// M mensualité constante = (C*t*(1+t)^n)/(1+t)^n -1
// Imois intérêt du mois = Crestant * t
// CRmois Capital remboursé du mois = M - Imois
// Crestant Capital restant = Crestant - CRmois
// Itotal intérêt totaux sur toute la durée = M*n - C

import { calculTableauAmortissement } from "./calculTableauAmortissement.mjs";
import { calculTauxMensuel, calculMensualite } from "./fonctionCalcul.mjs";
import { affichage } from "./affichage.mjs";

function simulerPret() {
  const capital = Number(document.querySelector("#montant").value);
  const annee = Number(document.querySelector("#duree").value);
  const tauxAnnuel = Number(document.querySelector("#taux").value);

  if (!capital || !annee || !tauxAnnuel) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  const n = annee * 12;
  const t = calculTauxMensuel(tauxAnnuel);
  const M = calculMensualite(capital, t, n);

  const tableContainer = document.querySelector("#resultat");
  const tab = calculTableauAmortissement(capital, t, M, n);

  const totalInteret = tab.reduce((acc, cur) => acc + cur.interet, 0);
  
  // console.log(tab);


  let table = affichage(tab, totalInteret);
  tableContainer.innerHTML = table;
}

const btnCalculer = document.querySelector("#btnCalculer");
btnCalculer.addEventListener("click", simulerPret);
