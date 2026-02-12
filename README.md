# 🎮 Pokemon Finder - Lern-Projekt

Eine interaktive Pokemon-App zum Lernen von Daten-Darstellung und CSS!

## 🚀 App Starten

```bash
npm start
```

Die App öffnet sich auf [http://localhost:3000](http://localhost:3000)

**⚡ Die App lädt beim Start automatisch 20 Pokemon!** Du kannst auch gezielt nach einem Pokemon suchen (z.B. pikachu, charizard, bulbasaur)

---

## 📁 Projekt-Struktur

```
src/
├── components/           # React-Komponenten
│   ├── PokemonCard.js   # Zeigt Pokemon-Daten an
│   ├── PokemonGrid.js   # Zeigt Pokemon-Liste als Grid
│   ├── SearchForm.js    # Such-Formular
│   ├── LoadingSpinner.js # Lade-Animation
│   └── ErrorMessage.js  # Fehler-Anzeige
├── services/            # API-Services
│   └── pokemonService.js # Pokemon-API Aufrufe
├── App.js              # Haupt-Component
├── App.css             # Haupt-Styling
└── index.js            # App-Start
```

**So ist die App organisiert:**

- **Components** = Einzelne UI-Teile (Bausteine)
- **Services** = API-Logik (Daten holen)
- **App.js** = Kombiniert alles zusammen

---

## 🎯 HAUPTAUFGABE: Pokemon Detail-Seite (Fortgeschritten)

**📄 Siehe: [AUFGABE_REACT_ROUTER.md](AUFGABE_REACT_ROUTER.md)**

Wenn du die Basis-Aufgaben unten gemeistert hast, versuche die **Hauptaufgabe**:

- Erstelle eine Detail-Seite für jedes Pokemon
- Nutze **React Router** für Navigation
- Wenn man auf ein Pokemon klickt → Detail-Seite öffnet sich
- Zeige mehr Infos, Bilder und Stats

**Schwierigkeit:** ⭐⭐⭐⭐ (Fortgeschritten)
**Zeit:** 2-3 Stunden
**Was du lernst:** React Router, URL-Parameter, Navigation, Fetch API

---

## 📚 Basis-Aufgaben für Jugendliche

**🎯 Was ist schon fertig?**

- ✅ Die App lädt automatisch 20 Pokemon beim Start
- ✅ Die Suche funktioniert
- ✅ Alle JavaScript/React Logik ist implementiert

**🎨 Deine Aufgaben:**

- HTML: Mehr Daten in der Pokemon-Card anzeigen
- CSS: Die Cards schön stylen und Farben anpassen

**Wichtig:** Du musst nur HTML-Code kopieren/einfügen und CSS ändern - kein JavaScript schreiben!

---

### 📊 Teil 1: Mehr Daten in der Pokemon-Card anzeigen

Öffne die Datei `components/PokemonCard.js` für alle Aufgaben in Teil 1!

#### Aufgabe 1: Pokemon-ID anzeigen

**Was machen?** Zeige die Nummer des Pokemon auf der Card an (z.B. "#25" für Pikachu).

**Hints:**

- Öffne `components/PokemonCard.js`
- Füge unter dem `<h2 className="pokemon-name">` ein neues Element ein
- Nutze ein `<p>` Tag mit className="pokemon-id"
- Die ID liegt in: `pokemon.___` (welche Eigenschaft?)
- Zeige das # Symbol vor der ID: `#` + die Zahl
- Tipp: Schau wie der Name angezeigt wird: `{pokemon.name}`

---

#### Aufgabe 2: Basis-Erfahrung anzeigen

**Was machen?** Zeige die Basis-Erfahrung (base_experience) des Pokemon an.

**Hints:**

- In `components/PokemonCard.js` bei den anderen `<p>` Tags (Größe, Gewicht)
- Kopiere eine Zeile von Größe oder Gewicht und ändere sie
- Ändere den Text zu: "Basis-Erfahrung:"
- Die Eigenschaft heißt: `pokemon.base_experience`
- Struktur: `<p><strong>Label:</strong> {pokemon.___}</p>`

---

#### Aufgabe 3: Fähigkeiten anzeigen

**Was machen?** Zeige alle Fähigkeiten (abilities) des Pokemon an.

**Hints:**

- In `components/PokemonCard.js` nach den Typen (pokemon-types)
- 🤔 Frage: Ist das ähnlich wie Typen anzeigen?
- Kopiere den Code von `pokemon-types` und ändere:
  - className von "pokemon-types" → "pokemon-abilities"
  - Array von `pokemon.types` → `pokemon.___` (welches?)
  - Badge-Klasse von "type-badge" → "ability-badge"
  - Der Name liegt verschachtelt: `ability.ability.name`
- Tipp: Schau dir die Typen-Anzeige genau an und passe sie an!

---

#### Aufgabe 4: Anzahl der Attacken anzeigen

**Was machen?** Zeige an, wie viele Attacken das Pokemon lernen kann.

**Hints:**

- In `components/PokemonCard.js` bei den anderen `<p>` Tags
- Erstelle ein `<p>` Tag mit dem Label "Attacken:"
- Die Attacken liegen in einem Array: `pokemon.moves`
- 🤔 Wie zeigt man die LÄNGE eines Arrays in JavaScript?
- Tipp: Arrays haben eine Eigenschaft die die Anzahl anzeigt
- Zeige: "Kann \_\_\_ Attacken lernen" (fülle die Lücke!)

---

#### Aufgabe 5: Rückseiten-Bild anzeigen

**Was machen?** Zeige auch das Bild von der Rückseite des Pokemon.

**Hints:**

- In `components/PokemonCard.js` unter dem ersten `<img>` Tag
- Kopiere das vorhandene `<img>` Tag und ändere nur den `src`
- Das erste Bild nutzt: `pokemon.sprites.front_default`
- Das Rückseiten-Bild heißt: `pokemon.sprites.back_____` (was kommt nach back?)
- Ändere auch das `alt` Attribut zu einem passenden Text
- Behalte className="pokemon-image"

````

---

#### Aufgabe 6: Shiny-Version anzeigen

**Was machen?** Zeige die glitzernde (shiny) Version des Pokemon.

**Hints:**

- In `components/PokemonCard.js` noch ein `<img>` Tag hinzufügen
- Struktur ist genau wie bei Aufgabe 5
- Das Shiny-Bild heißt: `pokemon.sprites.front_____` (glitzernd auf Englisch?)
- Tipp: "shiny" bedeutet glitzernd!
- Vergiss nicht das `alt` Attribut anzupassen

**💡 Bonus-Tipp:** Um alle Bilder nebeneinander zu zeigen:
- Wickle alle `<img>` Tags in ein `<div>` ein
- Nutze className="pokemon-images"
- Das CSS ist schon fertig in App.css!

---

### 🎨 Teil 2: CSS-Styling - Farben und Design

Öffne die Datei `App.css` für alle Aufgaben in Teil 2!

#### Aufgabe 7: Hintergrund-Farbverlauf ändern

**Was machen?** Ändere den Hintergrund-Farbverlauf der App!

**Hints:**

- Datei: `App.css` → Suche nach `.App` und `linear-gradient`
- Du brauchst 2 Farben für den Verlauf
- Gute Farbkombinationen:
  - Rot zu Orange: `#ff6b6b`, `#ee5a6f`
  - Blau zu Türkis: `#4ecdc4`, `#556270`
  - Grün zu Gelb: `#95e1d3`, `#f1c40f`
- Struktur: `background: linear-gradient(Farbe1, Farbe2);`

---

#### Aufgabe 8: Card-Ecken stylen

**Was machen?** Ändere die Rundung der Pokemon-Card Ecken.

**Hint:**

- Datei: `App.css` → Suche nach `.pokemon-card`
- Ändere `border-radius: 20px` auf einen anderen Wert
- Probiere: `5px` (eckig), `50px` (sehr rund), `10px` (leicht rund)

---

#### Aufgabe 9: Pokemon-Name Farbe ändern

**Was machen?** Mach den Pokemon-Namen in einer coolen Farbe!

**Hint:**

- Datei: `App.css` → Suche nach `.pokemon-name`
- Ändere die `color` Eigenschaft
- Gute Farben: `#e74c3c` (rot), `#3498db` (blau), `#2ecc71` (grün)

---

#### Aufgabe 10: Pokemon-Bild größer machen

**Was machen?** Mach das Pokemon-Bild größer!

**Hint:**

- Datei: `App.css` → Suche nach `.pokemon-image`
- Ändere `width` und `height`
- Probiere: `250px`, `300px` oder `350px`

---

#### Aufgabe 11: Card-Hintergrundfarbe ändern

**Was machen?** Gib der Pokemon-Card eine andere Hintergrundfarbe.

**Hint:**

- Datei: `App.css` → Suche nach `.pokemon-card`
- Ändere `background: white` zu einer anderen Farbe
- Probiere: `#f0f0f0`, `#e8f4f8`, `#fff9e6`

---

#### Aufgabe 12: Typ-Badges größer machen

**Was machen?** Mach die Typ-Badges größer und besser lesbar.

**Hint:**

- Datei: `App.css` → `.type-badge`
- Ändere `padding` und `font-size`
- Probiere: `padding: 12px 24px` und `font-size: 1.2rem`

---

#### Aufgabe 13: Schatten der Card verstärken

**Was machen?** Mach den Schatten der Card stärker und dramatischer!

**Hint:**

- Datei: `App.css` → `.pokemon-card`
- Suche nach `box-shadow`
- Ändere die Werte: `0 20px 40px rgba(0, 0, 0, 0.5)`
- Größere Zahlen = stärkerer Schatten!

---

#### Aufgabe 14: Hover-Effekt für Card

**Was machen?** Lass die Pokemon-Card wachsen wenn man mit der Maus drüber geht.

**Hints:**

- Datei: `App.css` → Füge am Ende eine neue CSS-Regel hinzu
- Nutze einen `:hover` Selektor: `.pokemon-card:hover { ... }`
- Eigenschaften die du brauchst:
  - `transform: scale(___)` - Werte > 1.0 machen größer (probiere 1.05 oder 1.1)
  - `transition: transform ___s` - Wie lange die Animation dauert (z.B. 0.3s)
- 💡 Tipp: `:hover` wird aktiviert wenn die Maus drüber ist!`

---

#### Aufgabe 15: Text-Schatten für Pokemon-Name

**Was machen?** Gib dem Pokemon-Namen einen coolen Schatten-Effekt!

**Hints:**

- Datei: `App.css` → Suche nach `.pokemon-name`
- Die CSS-Eigenschaft heißt: `text-shadow`
- Struktur: `text-shadow: X Y Blur Farbe;`
  - X = horizontale Verschiebung (z.B. 3px)
  - Y = vertikale Verschiebung (z.B. 3px)
  - Blur = Unschärfe (z.B. 6px)
  - Farbe = rgba(0, 0, 0, 0.3) für halbtransparent schwarz
- Probiere verschiedene Werte aus!

---

### 🌟 Teil 3: Bonus-Aufgaben (Nur CSS!)

#### Aufgabe 16: Grid-Layout ändern

**Was machen?** Ändere wie viele Pokemon nebeneinander angezeigt werden.

**Hint:**

- Datei: `App.css` → Suche nach `.pokemon-grid`
- Finde die Zeile: `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`
- Ändere `250px` zu einem anderen Wert:
  - Größere Zahl (z.B. `350px`) = weniger Cards nebeneinander
  - Kleinere Zahl (z.B. `200px`) = mehr Cards nebeneinander

---

#### Aufgabe 17: Fähigkeiten-Badges stylen (CSS)

**Was machen?** Style die Fähigkeiten-Badges (falls du Aufgabe 3 gemacht hast).

**Hints:**

- Datei: `App.css` → Füge am Ende eine neue CSS-Klasse hinzu
- Klassenname: `.ability-badge`
- Eigenschaften die du brauchst:
  - `background` oder `background-color` (wähle eine Farbe!)
  - `color` für die Textfarbe
  - `padding` für Abstand innen (z.B. 8px 16px)
  - `border-radius` für runde Ecken
  - `margin` für Abstand zwischen Badges (z.B. 5px)
  - `display: inline-block` damit sie nebeneinander sind
- 💡 Tipp: Schau dir `.type-badge` an und passe es an!

---

#### Aufgabe 18: Pokemon-Bilder nebeneinander (CSS)

**Was machen?** Wenn du mehrere Bilder hinzugefügt hast (Aufgabe 5 & 6), zeige sie nebeneinander.

**Hints:**

- Datei: `App.css` → Füge eine neue CSS-Klasse hinzu
- Klassenname: `.pokemon-images`
- Du brauchst CSS Flexbox:
  - `display: ____` (welcher Wert für Flexbox?)
  - `gap: ____` (Abstand zwischen Bildern, z.B. 10px)
  - `justify-content: ____` (zentrieren!)
  - `flex-wrap: wrap` (damit Bilder umbrechen können)
- Dann in `PokemonCard.js`: Wickle alle `<img>` Tags in `<div className="pokemon-images">`
- 💡 Tipp: Google "CSS Flexbox" wenn du nicht weiter weißt!

---

#### Aufgabe 19: Pokemon-ID stylen

**Was machen?** Mach die Pokemon-ID (#25) größer und in einer anderen Farbe.

**Hints:**

- Datei: `App.css` → Füge eine neue CSS-Klasse hinzu
- Klassenname: `.pokemon-id`
- Eigenschaften:
  - `font-size: ____` (größer als normal! Probiere: 1.5rem oder 24px)
  - `color: ____` (wähle eine Farbe! z.B. #7f8c8d ist grau)
  - `font-weight: ____` (bold für fett!)
```

---

#### Aufgabe 20: Titel-Animation anpassen

**Was machen?** Ändere die Bounce-Animation des Titels.

**Hint:**

- Datei: `App.css` → Suche nach `@keyframes bounce`
- Ändere die `transform: translateY(-10px)` Werte
- Probiere: `-20px` (höher springen) oder `-5px` (weniger springen)

---

## 💡 Hilfreiche Tipps

**Was musst du wissen?**

- **HTML kopieren:** Die meisten Aufgaben sind Copy & Paste von HTML-Code
- **CSS ändern:** Farben, Größen und Abstände in `App.css` anpassen
- **Kein JavaScript:** Du musst kein JavaScript verstehen oder schreiben!

**Wo bearbeite ich was?**

- **Aufgaben 1-6:** Datei `components/PokemonCard.js` (HTML/JSX Code)
- **Aufgaben 7-20:** Datei `App.css` (CSS-Werte ändern)

**Brauchst du Hilfe?**

- Die Aufgaben geben dir Hints und halbe Lösungen
- Bei CSS: Probiere verschiedene Werte aus und schau was passiert!
- F5 drücken um die Seite neu zu laden und Änderungen zu sehen

**Welche Pokemon kann ich suchen?**

- Alle Pokemon-Namen auf Englisch (kleingeschrieben)
- Beispiele: pikachu, charizard, bulbasaur, mewtwo, eevee, squirtle, charmander

**Was sind gute Farben für CSS?**

- Rot: `#e74c3c`
- Blau: `#3498db`
- Grün: `#2ecc71`
- Lila: `#9b59b6`
- Gelb: `#f1c40f`
- Orange: `#e67e22`
- Grau: `#95a5a6`

**Wo bearbeite ich was?**

- **Daten anzeigen (Pokemon-Card)** → `components/PokemonCard.js` (HTML/JSX Code)
- **Suchformular** → `components/SearchForm.js`
- **API-Aufrufe** → `services/pokemonService.js`
- **Styling/Farben** → `App.css` (CSS Code)
- **Haupt-App** → `App.js` (kombiniert alle Components)

**Wie funktioniert die neue Struktur?**

1. **App.js** = Hauptdatei, holt Daten und koordiniert alles
2. **PokemonCard.js** = Zeigt die Pokemon-Daten schön an
3. **SearchForm.js** = Das Suchfeld und Button
4. **pokemonService.js** = Holt Daten von der PokeAPI
5. **App.css** = Alle Farben, Größen und Styles

---

## 📖 Wichtige Links

- **PokeAPI Doku:** https://pokeapi.co/docs/v2
- **React Basis:** https://react.dev/learn
- **CSS Farben:** https://htmlcolorcodes.com
- **CSS Tutorial:** https://www.w3schools.com/css

---

Viel Spaß beim Lernen und Experimentieren! 🚀✨
````
