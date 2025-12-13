export function affichage(tab, totalInteret) {
  const colonnes = [
    { key: "mois", label: "Période" },
    { key: "capitalRembourse", label: "Capital amorti" },
    { key: "interet", label: "Intérêts" },
    { key: "capitalRestant", label: "Capital restant dû" },
    { key: "mensualite", label: "Mensualité" }
  ];

  return `
    <table>
      <thead>
        <tr>
          ${colonnes.map(col => `<th>${col.label}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${tab.map(ligne => {
          const couleur = ligne.interet > ligne.mensualite / 2 ? "highlight" : "";

          return `
            <tr class="${couleur}">
              ${colonnes.map(col => `<td>${Number(ligne[col.key])}</td>`).join("")}
            </tr>
          `;
        }).join("")}

        <tr style="font-weight:bold; background-color:#6bbb5b;">
          <td>TOTAL</td>
          <td>-</td>
          <td>${totalInteret.toFixed(2)}</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  `;
}
