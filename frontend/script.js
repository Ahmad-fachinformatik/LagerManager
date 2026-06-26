const loadArticlesButton = document.getElementById("loadArticlesButton");
const articlesResult = document.getElementById("articlesResult");

const articles = [
  {
    artikelnummer: "A-1001",
    name: "Tastatur",
    kategorie: "Hardware",
    bestand: 12,
    lagerort: "Regal A1"
  },
  {
    artikelnummer: "A-1002",
    name: "Maus",
    kategorie: "Hardware",
    bestand: 5,
    lagerort: "Regal A2"
  },
  {
    artikelnummer: "A-1003",
    name: "Monitor",
    kategorie: "Hardware",
    bestand: 2,
    lagerort: "Regal B1"
  },
  {
    artikelnummer: "A-1004",
    name: "Drucker",
    kategorie: "Hardware",
    bestand: 3,
    lagerort: "Regal C1"
  }
];

loadArticlesButton.addEventListener("click", function () {
  let output = `
    <table class="articles-table">
        <thead>
            <tr>
                <th>Artikelnummer</th>
                <th>Name</th>
                <th>Kategorie</th>
                <th>Bestand</th>
                <th>Lagerort</th>
            </tr>
        </thead>
        <tbody>
  `;

  articles.forEach(function (article) {
    output += `
        <tr>
            <td>${article.artikelnummer}</td>
            <td>${article.name}</td>
            <td>${article.kategorie}</td>
            <td>${article.bestand}</td>
            <td>${article.lagerort}</td>
        </tr>
    `;
  });

  output += `
        </tbody>
    </table>
  `;

  articlesResult.innerHTML = output;
});