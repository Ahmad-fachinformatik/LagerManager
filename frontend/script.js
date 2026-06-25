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
  let output = "";

  articles.forEach(function (article) {
    output += `
      <div class="article-card">
        <p><strong>Artikelnummer:</strong> ${article.artikelnummer}</p>
        <p><strong>Name:</strong> ${article.name}</p>
        <p><strong>Kategorie:</strong> ${article.kategorie}</p>
        <p><strong>Bestand:</strong> ${article.bestand}</p>
        <p><strong>Lagerort:</strong> ${article.lagerort}</p>
      </div>
    `;
  });

  articlesResult.innerHTML = output;
});