# Lesson 02 - Frontend-Grunddateien

Tags: #lager-manager #frontend #html #css #javascript #dom

## Ziel der Lektion

In dieser Lektion wurden die grundlegenden Frontend-Dateien für das Projekt **LagerManager** erstellt.

Das Ziel war, eine einfache Webseite mit HTML, CSS und JavaScript vorzubereiten.

## Was wurde gemacht?

* Datei `index.html` erstellt
* Datei `style.css` erstellt
* Datei `script.js` erstellt
* HTML mit CSS verbunden
* HTML mit JavaScript verbunden
* Ein Test-Button wurde erstellt
* Eine einfache JavaScript-Funktion wurde getestet

## Projektstruktur nach dieser Lektion

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
│   ├── begriffe/
│   └── cheatsheets/
└── .gitignore
```

## Wichtige Begriffe

* [[Frontend]]
* [[HTML]]
* [[CSS]]
* [[JavaScript]]
* [[DOM]]
* [[Event Listener]]
* [[Live Server]]

## Kurze Erklärung

Das Frontend ist der sichtbare Teil einer Anwendung.

Die Datei `index.html` beschreibt die Struktur der Webseite.
Die Datei `style.css` gestaltet die Webseite.
Die Datei `script.js` fügt Interaktivität hinzu.

Mit JavaScript wurde ein Button-Klick erkannt und eine Nachricht auf der Webseite angezeigt.

## Verwendete Befehle

```powershell
New-Item frontend\index.html
New-Item frontend\style.css
New-Item frontend\script.js
```

## Wichtiger HTML-Code

```html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

## Wichtiger JavaScript-Code

```javascript
const testButton = document.getElementById("testButton");
const message = document.getElementById("message");

testButton.addEventListener("click", function () {
  message.textContent = "Frontend funktioniert!";
});
```

## Git-Befehle

```powershell
git status
git add .
git commit -m "Create frontend base files"
git push
```

## Merksatz

HTML erstellt die Struktur, CSS gestaltet die Oberfläche und JavaScript macht die Webseite interaktiv.

## Typische Prüfungsfragen

### Frage 1

Welche Aufgabe hat HTML?

### Antwort

HTML beschreibt die Struktur und den Inhalt einer Webseite.

### Frage 2

Welche Aufgabe hat CSS?

### Antwort

CSS gestaltet das Aussehen einer Webseite.

### Frage 3

Welche Aufgabe hat JavaScript?

### Antwort

JavaScript macht eine Webseite interaktiv.

### Frage 4

Was ist ein Event Listener?

### Antwort

Ein Event Listener wartet auf ein bestimmtes Ereignis, zum Beispiel einen Klick auf einen Button.

## Eigene Notizen

*

## Offene Fragen

*
