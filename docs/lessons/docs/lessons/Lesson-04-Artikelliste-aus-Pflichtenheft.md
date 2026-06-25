# Lesson 04 - Artikelliste aus dem Pflichtenheft ableiten

Tags: #lager-manager #pflichtenheft #frontend #javascript #array #object #foreach #dom

## Ziel der Lektion

In dieser Lektion wurde aus einer Anforderung des Pflichtenhefts eine erste Artikelliste im Frontend abgeleitet.

Das Ziel war, zu verstehen, wie Anforderungen in Datenstrukturen und JavaScript-Code umgesetzt werden können.

## Anforderung aus dem Pflichtenheft

Die Anwendung soll eine Bestandsübersicht anzeigen.

Folgende Daten sollen pro Artikel angezeigt werden:

* Artikelnummer
* Name
* Kategorie
* Bestand
* Lagerort

## Ableitung für den Code

Aus der Anforderung ergibt sich:

* Ein Artikel kann als JavaScript-Object dargestellt werden.
* Mehrere Artikel können in einem Array gespeichert werden.
* Die Artikelliste kann mit `forEach` durchlaufen werden.
* Die Daten können dynamisch im HTML angezeigt werden.

## Datenmodell im Frontend

Ein einzelner Artikel wird als Object gespeichert.

Beispiel:

```javascript
{
  artikelnummer: "A-1001",
  name: "Tastatur",
  kategorie: "Hardware",
  bestand: 12,
  lagerort: "Regal A1"
}
```

Mehrere Artikel werden in einem Array gespeichert.

```javascript
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
  }
];
```

## Wichtige Begriffe

* [[Pflichtenheft]]
* [[Frontend]]
* [[JavaScript]]
* [[Array]]
* [[Object]]
* [[forEach]]
* [[DOM]]
* [[innerHTML]]

## Kurze Erklärung

Das Pflichtenheft beschreibt, welche Informationen angezeigt werden müssen.

Diese Informationen wurden zuerst als JavaScript-Objects modelliert.
Mehrere Objects wurden in einem Array gespeichert.
Mit `forEach` wurde das Array durchlaufen.
Für jeden Artikel wurde HTML erzeugt und anschließend im Browser angezeigt.

## Wichtiger JavaScript-Code

```javascript
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
```

## Warum wird `forEach` verwendet?

`forEach` wird verwendet, um jedes Element eines Arrays zu durchlaufen.

In diesem Projekt bedeutet das:

Für jeden Artikel im Array wird ein eigener HTML-Bereich erzeugt.

## Warum wird `innerHTML` verwendet?

`innerHTML` wird verwendet, weil HTML-Code dynamisch in die Webseite eingefügt wird.

Mit `textContent` würde der HTML-Code nur als normaler Text angezeigt werden.

## Unterschied zwischen Object und Array

Ein Object beschreibt einen einzelnen Datensatz.

Beispiel:

```javascript
{
  name: "Tastatur",
  bestand: 12
}
```

Ein Array speichert mehrere Datensätze.

Beispiel:

```javascript
const articles = [
  article1,
  article2,
  article3
];
```

## Ergebnis der Lektion

Beim Klick auf den Button `Artikel laden` werden mehrere Beispielartikel im Frontend angezeigt.

## Merksatz

Aus Anforderungen im Pflichtenheft entstehen Datenstrukturen, Benutzeroberflächen und Programmlogik.

## Typische Prüfungsfragen

### Frage 1

Warum kann ein Artikel als Object dargestellt werden?

### Antwort

Ein Artikel besteht aus mehreren zusammengehörenden Eigenschaften, zum Beispiel Artikelnummer, Name, Kategorie, Bestand und Lagerort. Diese Eigenschaften können in einem Object gespeichert werden.

### Frage 2

Warum verwenden wir ein Array?

### Antwort

Ein Array wird verwendet, um mehrere Artikel gemeinsam zu speichern und zu verarbeiten.

### Frage 3

Wozu dient `forEach`?

### Antwort

`forEach` durchläuft jedes Element eines Arrays und führt für jedes Element eine Funktion aus.

### Frage 4

Was ist der Unterschied zwischen `textContent` und `innerHTML`?

### Antwort

`textContent` fügt reinen Text ein.
`innerHTML` fügt HTML-Code ein und lässt den Browser diesen HTML-Code interpretieren.

## Eigene Notizen

*

## Offene Fragen

*
