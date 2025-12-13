import { interetMois, capitalRembourseMois } from "./fonctionCalcul.mjs";

export function calculTableauAmortissement(
  capital,
  tauxMensuel,
  mensualite,
  nbMois
) {
  const tableau = [];
  let capitalRestant = capital;

  for (let mois = 1; mois <= nbMois; mois++) {
    let interet = interetMois(capitalRestant, tauxMensuel);
    let capitalRembourse = capitalRembourseMois(mensualite, interet);
    capitalRestant -= capitalRembourse;

    if (capitalRestant < 0) {
      // evite les chiffres neg
      capitalRestant = 0;
    }

    capitalRestant = Number(capitalRestant);
    capitalRembourse = Number(capitalRembourse);
    interet = Number(interet);
    
    // Math.round(x * 100)/100 = arrondi a 2 chiffres apres la virgule
    tableau.push({
      mois: mois,
      mensualite: Math.round(mensualite * 100)/100,
      interet: Math.round(interet * 10)/10,
      capitalRestant: Math.round(capitalRestant * 100)/100,
      capitalRembourse: Math.round(capitalRembourse * 100)/100,
    });
  }
  console.log(tableau);
  return tableau;
}
