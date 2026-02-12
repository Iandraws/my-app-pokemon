# 🚀 Hauptaufgabe: Pokemon Detail-Seite mit React Router

## 🎯 Was sollst du bauen?

Wenn ein Benutzer auf ein Pokemon klickt, soll eine **Detail-Seite** geöffnet werden, die mehr Informationen über das Pokemon zeigt.

**Beispiel:**

- Startseite: Zeigt 20 Pokemon im Grid
- Klick auf "Pikachu"
- → Neue Seite öffnet sich: `/pokemon/pikachu`
- → Zeigt große Detail-Ansicht von Pikachu

---

## 📚 Was du lernen wirst:

1. **React Router** installieren und einrichten
2. **Navigation** zwischen Seiten
3. **URL-Parameter** nutzen (z.B. `/pokemon/25` oder `/pokemon/pikachu`)
4. **Fetch API** für Detail-Daten
5. **Links** erstellen für Navigation

---

## ✅ Schritt-für-Schritt Anleitung

### Schritt 1: React Router installieren

```bash
npm install react-router-dom
```

---

### Schritt 2: Router in der App einrichten

**Datei: `src/index.js`**

Importiere React Router:

```javascript
import { BrowserRouter } from "react-router-dom";
```

Wickle die App in den Router:

```javascript
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
```

---

### Schritt 3: Routen definieren

**Datei: `src/App.js`**

Importiere die Router-Komponenten:

```javascript
import { Routes, Route } from "react-router-dom";
```

Erstelle zwei Routen (eine für die Liste, eine für Details):

```javascript
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
      </Routes>
    </div>
  );
}
```

**Erklärung:**

- `path="/"` = Startseite (Pokemon-Liste)
- `path="/pokemon/:name"` = Detail-Seite (`:name` ist ein Parameter)

---

### Schritt 4: HomePage erstellen

**Datei: `src/pages/HomePage.js` (NEU erstellen!)**

```javascript
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPokemonList } from "../services/pokemonService";

function HomePage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);
      const list = await fetchPokemonList(20);
      setPokemonList(list);
      setLoading(false);
    };
    loadPokemon();
  }, []);

  if (loading) return <div className="loading">Lädt Pokemon...</div>;

  return (
    <div className="home-page">
      <h1 className="title">🎮 Pokemon Finder 🎮</h1>

      <div className="pokemon-grid">
        {pokemonList.map((pokemon) => (
          <Link
            key={pokemon.id}
            to={`/pokemon/${pokemon.name}`}
            className="pokemon-card-link"
          >
            <div className="pokemon-card">
              <h2>{pokemon.name}</h2>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>#{pokemon.id}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
```

**🎯 Aufgabe für dich:**

- Verstehe wie `<Link to={...}>` funktioniert
- Warum benutzen wir Link statt `<a href>`?
- Was passiert bei `/pokemon/${pokemon.name}`?

---

### Schritt 5: Detail-Seite erstellen

**Datei: `src/pages/PokemonDetailPage.js` (NEU erstellen!)**

```javascript
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPokemonData } from "../services/pokemonService";

function PokemonDetailPage() {
  const { name } = useParams(); // Holt ":name" aus der URL
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPokemonDetail = async () => {
      setLoading(true);

      // 🎯 DEINE AUFGABE: Fetch die Pokemon-Daten
      // Hint: Nutze fetchPokemonData(name)
      // Speichere das Ergebnis in setPokemon()

      setLoading(false);
    };

    loadPokemonDetail();
  }, [name]); // Neu laden wenn sich der Name ändert

  if (loading) return <div className="loading">Lädt {name}...</div>;
  if (!pokemon) return <div>Pokemon nicht gefunden!</div>;

  return (
    <div className="detail-page">
      <Link to="/" className="back-button">
        ← Zurück zur Liste
      </Link>

      <div className="pokemon-detail">
        <h1>{pokemon.name}</h1>
        <p className="pokemon-id">#{pokemon.id}</p>

        <div className="pokemon-images">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <img
            src={pokemon.sprites.back_default}
            alt={pokemon.name + " back"}
          />
          <img
            src={pokemon.sprites.front_shiny}
            alt={pokemon.name + " shiny"}
          />
        </div>

        <div className="pokemon-info">
          <p>
            <strong>Größe:</strong> {pokemon.height / 10} m
          </p>
          <p>
            <strong>Gewicht:</strong> {pokemon.weight / 10} kg
          </p>
          <p>
            <strong>Basis-Erfahrung:</strong> {pokemon.base_experience}
          </p>

          {/* 🎯 DEINE AUFGABE: Füge mehr Infos hinzu!
              - Typen (types)
              - Fähigkeiten (abilities)
              - Stats (stats)
              - Attacken-Anzahl (moves.length)
          */}
        </div>
      </div>
    </div>
  );
}

export default PokemonDetailPage;
```

---

### Schritt 6: CSS für die neuen Seiten

**Datei: `src/App.css` - Am Ende hinzufügen:**

```css
/* Detail Page Styling */
.detail-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.back-button {
  display: inline-block;
  padding: 10px 20px;
  background: white;
  color: #333;
  text-decoration: none;
  border-radius: 20px;
  margin-bottom: 20px;
  font-weight: bold;
}

.back-button:hover {
  background: #f0f0f0;
}

.pokemon-detail {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
}

.pokemon-detail h1 {
  font-size: 3rem;
  color: #333;
  text-transform: capitalize;
  margin-bottom: 10px;
}

.pokemon-images {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 30px 0;
  flex-wrap: wrap;
}

.pokemon-images img {
  width: 200px;
  height: 200px;
}

.pokemon-card-link {
  text-decoration: none;
  color: inherit;
}

.pokemon-card-link:hover .pokemon-card {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}
```

---

## 🎯 Deine Aufgaben:

### ✅ Pflichtaufgaben:

1. **React Router installieren** und einrichten
2. **Routes in App.js** definieren
3. **HomePage.js** erstellen mit Pokemon-Grid
4. **PokemonDetailPage.js** erstellen
5. **Fetch-Logik** in der Detail-Seite implementieren
6. **Zurück-Button** testen

---

### 🌟 Bonus-Aufgaben:

#### Bonus 1: Suchfunktion auf der Startseite

Füge ein Suchfeld hinzu, um Pokemon zu filtern.

**Hint:**

```javascript
const [searchTerm, setSearchTerm] = useState("");

const filteredPokemon = pokemonList.filter((p) =>
  p.name.includes(searchTerm.toLowerCase()),
);
```

---

#### Bonus 2: Detail-Seite mit ID statt Name

Ändere die Route zu `/pokemon/:id` und nutze die Pokemon-ID.

**Hint:**

- Route ändern: `path="/pokemon/:id"`
- Link ändern: `to={`/pokemon/${pokemon.id}`}`
- useParams: `const { id } = useParams()`

---

#### Bonus 3: Loading-Spinner Animation

Erstelle eine schöne Loading-Animation.

**Hint:**

```css
.loading {
  font-size: 2rem;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

---

#### Bonus 4: 404-Seite

Erstelle eine "Pokemon nicht gefunden"-Seite.

**Hint:**

```javascript
<Route path="*" element={<NotFoundPage />} />
```

---

#### Bonus 5: Vorheriges/Nächstes Pokemon

Füge Buttons hinzu, um zum vorherigen/nächsten Pokemon zu navigieren.

**Hint:**

```javascript
const previousId = pokemon.id - 1;
const nextId = pokemon.id + 1;

<Link to={`/pokemon/${previousId}`}>← Vorheriges</Link>
<Link to={`/pokemon/${nextId}`}>Nächstes →</Link>
```

---

#### Bonus 6: Breadcrumbs Navigation

Zeige den Navigationspfad: Home > Pokemon > Pikachu

**Hint:**

```javascript
<div className="breadcrumbs">
  <Link to="/">Home</Link> >
  <span>Pokemon</span> >
  <span>{pokemon.name}</span>
</div>
```

---

#### Bonus 7: Evolutionskette anzeigen

Zeige die Entwicklung des Pokemon (z.B. Glumanda → Glutexo → Glurak).

**Hinweis:** Dies erfordert einen zusätzlichen API-Call zu:

```
https://pokeapi.co/api/v2/pokemon-species/{id}/
```

---

#### Bonus 8: Teilen-Button

Füge einen Button hinzu, um die Pokemon-Detail-Seite zu teilen.

**Hint:**

```javascript
const shareUrl = () => {
  navigator.clipboard.writeText(window.location.href);
  alert("Link kopiert!");
};
```

---

## 💡 Debugging-Tipps:

**Problem: "Cannot read property of undefined"**

- Lösung: Prüfe ob `pokemon` existiert bevor du darauf zugreifst
- Nutze: `if (!pokemon) return <div>Loading...</div>;`

**Problem: "Seite wird nicht neu geladen"**

- Lösung: Füge den URL-Parameter zu den useEffect Dependencies hinzu
- Richtig: `useEffect(() => {...}, [name])`

**Problem: "Links funktionieren nicht"**

- Lösung: Prüfe ob `<BrowserRouter>` in index.js ist
- Nutze `<Link>` statt `<a href>`

**Problem: "Styling funktioniert nicht"**

- Lösung: Importiere CSS in der Component
- `import '../App.css'`

---

## 📖 Weitere Ressourcen:

- **React Router Docs:** https://reactrouter.com/
- **useParams Hook:** https://reactrouter.com/en/main/hooks/use-params
- **Link Component:** https://reactrouter.com/en/main/components/link
- **PokeAPI Docs:** https://pokeapi.co/docs/v2

---

## ✅ Checkliste:

- [ ] React Router installiert (`npm install react-router-dom`)
- [ ] BrowserRouter in index.js hinzugefügt
- [ ] Routes in App.js definiert
- [ ] HomePage.js erstellt und funktioniert
- [ ] PokemonDetailPage.js erstellt
- [ ] Fetch-Logik implementiert
- [ ] Klick auf Pokemon öffnet Detail-Seite
- [ ] Zurück-Button funktioniert
- [ ] CSS für beide Seiten hinzugefügt
- [ ] Bonus-Aufgaben (optional)

---

Viel Erfolg! 🚀 Diese Aufgabe zeigt dir, wie moderne Single-Page-Applications funktionieren!
