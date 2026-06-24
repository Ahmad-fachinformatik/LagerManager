# Lesson 01 - Projektstruktur

Tags: #lager-manager #projektstruktur #frontend #backend #git #obsidian

## Ziel der Lektion

In dieser Lektion wurde die grundlegende Projektstruktur für das Projekt **LagerManager** erstellt.

Das Ziel ist eine klare Trennung zwischen Frontend, Backend und Dokumentation.

## Was wurde gemacht?

* Projektordner erstellt
* Frontend-Ordner erstellt
* Backend-Ordner erstellt
* Dokumentationsordner erstellt
* Obsidian-Struktur vorbereitet
* `.gitignore`-Datei angelegt
* Git vorbereitet

## Projektstruktur

```text
lager-manager/
│
├── frontend/
├── backend/
├── docs/
│   ├── lessons/
│   ├── begriffe/
│   └── cheatsheets/
└── .gitignore
```

## Wichtige Begriffe

* [[Frontend]]
* [[Backend]]
* [[Git]]
* [[Projektstruktur]]
* [[Obsidian]]
* [[Markdown]]
* [[Repository]]

## Kurze Erklärung

Das Projekt wurde in mehrere Bereiche aufgeteilt.

Der Ordner `frontend` enthält später die Benutzeroberfläche der Anwendung.

Der Ordner `backend` enthält später den Server, die Programmlogik und die Kommunikation mit der Datenbank.

Der Ordner `docs` enthält die Lernnotizen und die Projektdokumentation für Obsidian.

Eine klare Projektstruktur hilft dabei, ein Softwareprojekt übersichtlich, wartbar und erweiterbar zu halten.

## Verwendete Befehle

```powershell
mkdir lager-manager
cd lager-manager

mkdir frontend
mkdir backend
mkdir docs

mkdir docs\lessons
mkdir docs\begriffe
mkdir docs\cheatsheets

New-Item .gitignore
```

## Git-Befehle

```powershell
git init
git status
git add .
git commit -m "Initial project structure"
```

## Erklärung der Git-Befehle

`git init` startet Git im aktuellen Projektordner.

`git status` zeigt den aktuellen Zustand des Projekts.

`git add .` bereitet alle neuen und geänderten Dateien für den Commit vor.

`git commit -m "Initial project structure"` speichert den aktuellen Projektstand lokal in Git.

## Merksatz

Eine saubere Projektstruktur ist die Grundlage für ein wartbares Softwareprojekt.

## Typische Prüfungsfragen

### Frage 1

Was ist der Unterschied zwischen Frontend und Backend?

### Antwort

Das Frontend ist die Benutzeroberfläche einer Anwendung.
Das Backend verarbeitet Daten, Logik und später die Kommunikation mit der Datenbank.

### Frage 2

Wozu dient eine `.gitignore`-Datei?

### Antwort

Eine `.gitignore`-Datei legt fest, welche Dateien oder Ordner nicht von Git gespeichert werden sollen.

### Frage 3

Warum ist eine klare Projektstruktur wichtig?

### Antwort

Eine klare Projektstruktur macht ein Projekt übersichtlicher, wartbarer und leichter erweiterbar.

## Eigene Notizen

*

## Offene Fragen

*
c