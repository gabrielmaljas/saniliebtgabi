# Quiz-Level Update 🎯

## Neue Funktion hinzugefügt!

### Was ist neu?

Es wurde ein Quiz-Level **vor** dem Puzzle hinzugefügt. Deine Frau muss zuerst eine Frage beantworten, bevor sie das Puzzle lösen kann.

### Die Quiz-Frage

**"Wie viele Tage sind wir schon zusammen?"**

- **Startdatum**: 14. August 2011
- **Bis heute**: 13. Februar 2026
- **Richtige Antwort**: Wird automatisch berechnet (ca. 5297 Tage)

### Wie es funktioniert

1. **Quiz erscheint zuerst**
   - Sie sieht 3 Antwortmöglichkeiten
   - Eine davon ist richtig (die tatsächlichen Tage)
   - Die anderen beiden sind falsch (±1-2 Jahre)

2. **Sie wählt eine Antwort**
   - Klickt auf eine der drei Optionen
   - Bestätigt ihre Antwort

3. **Feedback**
   - ✅ **Richtig**: Grüne Animation, nach 2 Sekunden erscheint das Puzzle
   - ❌ **Falsch**: Rote Animation, sie kann es nochmal versuchen

4. **Nach dem Quiz: Das Puzzle**
   - Erst nach der richtigen Antwort erscheint das Puzzle
   - Rest bleibt wie vorher

### Spielablauf (komplett)

```
1. Quiz-Frage 
   ↓ (richtige Antwort)
2. Puzzle lösen
   ↓ (Puzzle gelöst)
3. Valentine-Frage
   ↓ (Ja!)
4. Celebration! 🎉
```

### Technische Details

#### Automatische Berechnung
Die Tage werden automatisch basierend auf dem heutigen Datum berechnet:

```typescript
relationshipStartDate = new Date(2011, 7, 14); // 14. August 2011
today = new Date();
// Berechnet automatisch die Differenz
```

#### Falsche Antworten
- Falsche Antwort 1: Richtige Tage - 365 (ein Jahr weniger)
- Falsche Antwort 2: Richtige Tage + 730 (zwei Jahre mehr)
- Die Reihenfolge wird zufällig gemischt

#### Responsive Design
- Funktioniert auf Desktop, Tablet und Mobile
- Touch-friendly Buttons
- Schöne Animationen

### Anpassen (optional)

#### Startdatum ändern
In der Datei `src/app/puzzle/puzzle.component.ts`, Zeile 21:
```typescript
relationshipStartDate = new Date(2011, 7, 14); // Jahr, Monat-1, Tag
```

#### Quiz-Frage ändern
In der Datei `src/app/puzzle/puzzle.component.html`, Zeile 11:
```html
<h2>Wie viele Tage sind wir schon zusammen?</h2>
```

#### Schwierigkeit ändern
In der Datei `src/app/puzzle/puzzle.component.ts`, um Zeile 73:
```typescript
// Aktuell:
const wrongAnswer1 = this.correctDays - 365; // 1 Jahr weniger
const wrongAnswer2 = this.correctDays + 730; // 2 Jahre mehr

// Schwieriger (näher an der richtigen Antwort):
const wrongAnswer1 = this.correctDays - 180; // 6 Monate weniger
const wrongAnswer2 = this.correctDays + 180; // 6 Monate mehr

// Leichter (weiter weg):
const wrongAnswer1 = this.correctDays - 1000; // ~3 Jahre weniger
const wrongAnswer2 = this.correctDays + 1500; // ~4 Jahre mehr
```

### Stil/Design

- **Farben**: Passen zum Valentine-Theme (Pink/Rot)
- **Animationen**:
  - Richtige Antwort: Grüner Puls
  - Falsche Antwort: Rote Shake-Animation
  - Übergang zum Puzzle: Smooth fade
- **Buttons**: Hover-Effekte, Touch-friendly

### Testen

```powershell
# Starte den Dev-Server
ng serve

# Öffne im Browser
http://localhost:4200
```

**Test-Szenarios:**
1. ✅ Wähle die richtige Antwort → Puzzle erscheint
2. ❌ Wähle falsche Antwort → "Nochmal versuchen" Button
3. 📱 Teste auf Mobile (Touch funktioniert?)

### Bekannte Werte (für dein Testing)

- **Start**: 14. August 2011
- **Heute**: 13. Februar 2026
- **Tage**: ~5297 Tage (wird automatisch berechnet)

### Was passiert beim "Nochmal spielen"?

Der "Nochmal spielen" Button setzt **alles** zurück:
- Quiz wird wieder angezeigt
- Neue zufällige Reihenfolge der Antworten
- Puzzle wird zurückgesetzt
- Alles startet von vorne

### Screenshots/Demo

Das Quiz sieht so aus:

```
┌─────────────────────────────────┐
│    💝 Valentine's Quiz 💝       │
│                                 │
│  Wie viele Tage sind wir        │
│  schon zusammen?                │
│                                 │
│  Seit dem 14. August 2011...    │
│                                 │
│  ┌───────────────────────────┐ │
│  │      5297 Tage            │ │ ← Richtig!
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │      4932 Tage            │ │ ← Falsch
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │      6027 Tage            │ │ ← Falsch
│  └───────────────────────────┘ │
│                                 │
│    [Antwort bestätigen]         │
└─────────────────────────────────┘
```

### Viel Erfolg! 🌹

Die Website ist jetzt bereit für den Valentine's Day!

**Vergiss nicht:**
- Füge dein Foto hinzu: `public/assets/valentine-image.jpg`
- Teste alles lokal
- Deploye rechtzeitig vor dem 14. Februar!

❤️ Sie wird es lieben! ❤️
