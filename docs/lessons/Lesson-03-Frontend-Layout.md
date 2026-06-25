# Lesson 03 - Frontend Layout

Tags: #lager-manager #frontend #html #css #javascript #layout #dashboard

## Ziel der Lektion

In dieser Lektion wurde die einfache Testseite zu einem ersten Layout für den **LagerManager** erweitert.

Das Ziel war, eine klare Benutzeroberfläche mit Header, Dashboard und Artikelbereich zu erstellen.

## Was wurde gemacht?

* Header für den Projektnamen erstellt
* Dashboard-Bereich erstellt
* Karten für Kennzahlen erstellt
* Artikelverwaltungsbereich erstellt
* Button `Artikel laden` erstellt
* Ergebnisbereich für spätere Artikeldaten erstellt
* CSS-Layout verbessert
* JavaScript-Klickfunktion angepasst

## Projektstruktur

```text
lager-manager/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
├── docs/
│   ├── lessons/
│   │   ├── Lesson-01-Projektstruktur.md
│   │   ├── Lesson-02-Frontend-Grunddateien.md
│   │   └── Lesson-03-Frontend-Layout.md
│   ├── begriffe/
│   └── cheatsheets/
└── .gitignore
```

## Wichtige Begriffe

* [[Frontend]]
* [[HTML]]
* [[CSS]]
* [[JavaScript]]
* [[Layout]]
* [[Dashboard]]
* [[DOM]]
* [[Event Listener]]

## Kurze Erklärung

Das Frontend wurde in sinnvolle Bereiche aufgeteilt.

Der `header` enthält den Namen und die kurze Beschreibung der Anwendung.
Der `main`-Bereich enthält die Hauptinhalte.
Das Dashboard zeigt später wichtige Kennzahlen.
Der Artikelbereich wird später verwendet, um Daten aus dem Backend anzuzeigen.

Mit JavaScript wurde ein Klick auf den Button erkannt und eine Testnachricht angezeigt.

## Wichtiger HTML-Code

```html
<header>
  <h1>LagerManager</h1>
  <p>Lager- und Inventarverwaltung</p>
</header>
```

```html
<section class="dashboard">
  <h2>Dashboard</h2>
</section>
```

```html
<button id="loadArticlesButton">Artikel laden</button>
<div id="articlesResult">
  Hier erscheinen später die Artikel.
</div>
```

## Wichtiger CSS-Code

```css
.dashboard-cards {
  display: flex;
  gap: 16px;
}
```

```css
.card {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
}
```

## Wichtiger JavaScript-Code

```javascript
const loadArticlesButton = document.getElementById("loadArticlesButton");
const articlesResult = document.getElementById("articlesResult");

loadArticlesButton.addEventListener("click", function () {
  articlesResult.textContent = "Artikel werden später vom Backend geladen.";
});
```

## Git-Befehle

```powershell
git status
git add .
git commit -m "Create frontend layout"
git push
```

## Merksatz

Ein klares Layout macht eine Anwendung übersichtlicher und erleichtert die spätere Erweiterung.

## Typische Prüfungsfragen

### Frage 1

Wozu dient der `header` in einer HTML-Seite?

### Antwort

Der `header` enthält typischerweise den Kopfbereich einer Seite, zum Beispiel den Namen, das Logo oder eine kurze Beschreibung.

### Frage 2

Wozu dient der `main`-Bereich?

### Antwort

Der `main`-Bereich enthält den wichtigsten Inhalt einer Webseite.

### Frage 3

Warum verwenden wir CSS-Klassen?

### Antwort

CSS-Klassen ermöglichen es, mehrere HTML-Elemente gezielt zu gestalten und den Code übersichtlicher zu halten.

### Frage 4

Was macht `display: flex`?

### Antwort

`display: flex` ordnet Elemente flexibel nebeneinander oder untereinander an und erleichtert das Layout.

## Eigene Notizen

*

## Offene Fragen

*
