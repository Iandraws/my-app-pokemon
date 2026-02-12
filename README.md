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

## 📚 Lern-Aufgaben für Jugendliche

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

**Hint:**

- Öffne `components/PokemonCard.js`
- Füge unter dem `<h2 className="pokemon-name">` diese Zeile ein:

```javascript
<p className="pokemon-id">#{pokemon.id}</p>
```

---

#### Aufgabe 2: Basis-Erfahrung anzeigen

**Was machen?** Zeige die Basis-Erfahrung (base_experience) des Pokemon an.

**Hint:**

- In `components/PokemonCard.js` bei den anderen `<p>` Tags (Größe, Gewicht) einfügen:

```javascript
<p>
  <strong>Basis-Erfahrung:</strong> {pokemon.base_experience}
</p>
```

---

#### Aufgabe 3: Fähigkeiten anzeigen

**Was machen?** Zeige alle Fähigkeiten (abilities) des Pokemon an.

**Hint:**

- In `components/PokemonCard.js` nach den Typen einfügen:

```javascript
<div className="pokemon-abilities">
  <strong>Fähigkeiten:</strong>
  {pokemon.abilities.map((ability, index) => (
    <span key={index} className="ability-badge">
      {ability.ability.name}
    </span>
  ))}
</div>
```

---

#### Aufgabe 4: Anzahl der Attacken anzeigen

**Was machen?** Zeige an, wie viele Attacken das Pokemon lernen kann.

**Hint:**

- In `components/PokemonCard.js` einfach diese Zeile kopieren:

```javascript
<p>
  <strong>Attacken:</strong> Kann {pokemon.moves.length} Attacken lernen
</p>
```

---

#### Aufgabe 5: Rückseiten-Bild anzeigen

**Was machen?** Zeige auch das Bild von der Rückseite des Pokemon.

**Hint:**

- In `components/PokemonCard.js` unter dem ersten `<img>` Tag einfügen:

```javascript
<img
  src={pokemon.sprites.back_default}
  alt={`${pokemon.name} hinten`}
  className="pokemon-image"
/>
```

---

#### Aufgabe 6: Shiny-Version anzeigen

**Was machen?** Zeige die glitzernde (shiny) Version des Pokemon.

**Hint:**

- In `components/PokemonCard.js` noch ein `<img>` Tag hinzufügen:

```javascript
<img
  src={pokemon.sprites.front_shiny}
  alt={`${pokemon.name} shiny`}
  className="pokemon-image"
/>
```

**Tipp:** Um Bilder nebeneinander zu zeigen, wickle alle `<img>` Tags in ein `<div className="pokemon-images">` ein!

---

### 🎨 Teil 2: CSS-Styling - Farben und Design

Öffne die Datei `App.css` für alle Aufgaben in Teil 2!

**Was machen?** Ändere den Hintergrund-Farbverlauf der App!

**Hint:**

- Datei: `App.css` → Suche nach `.App` und `linear-gradient`
- Ändere die Farben: z.B. `#ff6b6b`, `#4ecdc4`, `#95e1d3`
- Du brauchst 2 Farben für den Verlauf

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

**Hint:**

- Datei: `App.css` → Füge am Ende hinzu:

```css
.pokemon-card:hover {
  transform: scale(1.05);
  transition: transform 0.3s;
}
```

---

#### Aufgabe 15: Text-Schatten für Pokemon-Name

**Was machen?** Gib dem Pokemon-Namen einen coolen Schatten-Effekt!

**Hint:**

- Datei: `App.css` → `.pokemon-name`
- Füge hinzu: `text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);`
- Spiele mit den Werten!

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

---7: Fähigkeiten-Badges stylen (CSS)

**Was machen?** Style die Fähigkeiten-Badges (falls du Aufgabe 3 gemacht hast).

**Hint:**

- Datei: `App.css` → Füge am Ende hinzu:

````css
.ability-badge {
#### Aufgabe 18: Pokemon-Bilder nebeneinander (CSS)

**Was machen?** Wenn du mehrere Bilder hinzugefügt hast (Aufgabe 5 & 6), zeige sie nebeneinander.

**Hint:**

- Datei: `App.css` → Füge hinzu:

```css
.pokemon-images {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}
````

- Wickle dann in `PokemonCard.js` alle `<img>` Tags in ein `<div className="pokemon-images">` ein

---

#### Aufgabe 19: Pokemon-ID stylen

**Was machen?** Mach die Pokemon-ID (#25) größer und in einer anderen Farbe.

**Hint:**

- Datei: `App.css` → Füge hinzu:

```css
.pokemon-id {
  font-size: 1.5rem;
  color: #7f8c8d;
  font-weight: bold;
}
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

- **Aufgaben 1-6:** Datei `components/PokemonCard.js` (HTML/JSX Code kopieren)
- **Aufgaben 7-20:** Datei `App.css` (CSS-Werte ändern)
- Datei: `App.css` → Füge hinzu:

````css
.pokemon-image:hover {
  transform: rotate(15deg) scale(1.1);
  transition: 0.3s;
}
```Aufgaben 1-6:** Datei `components/PokemonCard.js` (HTML/JSX Code kopieren)
- **Aufgaben 7-20:** Datei `App.css` (CSS-Werte ändern)

**Brauchst du Hilfe?**

- Alle Code-Beispiele sind fertig zum Kopieren!
- Bei CSS: Probiere verschiedene Werte aus und schau was passiert!
- F5 drücken um die Seite neu zu laden und Änderungen zu sehen

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
