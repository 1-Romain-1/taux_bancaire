export const calculTauxMensuel = (tauxAnnuel) => tauxAnnuel / 100 / 12;

export const calculMensualite = (C, tauxMensuel, n) => {
  return (
    (C * tauxMensuel * Math.pow(1 + tauxMensuel, n)) /
    (Math.pow(1 + tauxMensuel, n) - 1)
  );
};

export const interetMois = (capitalRestant, tauxMensuel) =>
  capitalRestant * tauxMensuel;

export const capitalRembourseMois = (M, interetMois) => M - interetMois;
