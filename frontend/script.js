const loadArticlesButton = document.getElementById("loadArticlesButton");
const articlesResult = document.getElementById("articlesResult");

loadArticlesButton.addEventListener("click", function () {
  articlesResult.textContent = "Artikel werden später vom Backend geladen.";
});