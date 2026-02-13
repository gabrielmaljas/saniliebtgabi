# 🔍 Wimmelbild-Level Anleitung

## Was ist das?

Nach dem Puzzle-Level kommt jetzt ein **Wimmelbild-Level**, wo deine Frau dich auf einem Bild finden muss! Sie kann auf das Bild klicken und muss die richtige Stelle finden, wo du drauf bist.

## Spielablauf (komplett)

```
1. Quiz-Frage (Tage berechnen)
   ↓
2. Puzzle lösen
   ↓
3. 🆕 Wimmelbild (Dich finden!)
   ↓
4. Valentine-Frage
   ↓
5. Celebration! 🎉
```

---

## 📸 Schritt 1: Dein Bild vorbereiten

### Bild erstellen/auswählen:
- Nimm ein Foto wo **du** irgendwo drauf bist
- Ideal: Gruppenfoto, Menschenmenge, Party, Event
- Je voller das Bild, desto schwieriger!
- **Du solltest nicht zu offensichtlich sein** 😉

### Bild-Anforderungen:
- **Format**: JPG oder PNG
- **Name**: `hidden-object-image.jpg`
- **Größe**: 1200-1920px Breite empfohlen
- **Qualität**: Gute Auflösung für Mobile

### Wo speichern?
```
📁 valentine-puzzle/
  └── 📁 public/
      └── 📁 assets/
          ├── valentine-image.jpg      ← (Puzzle-Bild)
          └── hidden-object-image.jpg  ← 🆕 DEIN WIMMELBILD HIER!
```

---

## 🎯 Schritt 2: Deine Position im Bild festlegen

### Wichtig: Die "Klick-Zone" definieren!

Das System arbeitet mit **Prozent-Koordinaten** (funktioniert auf allen Bildschirmgrößen!).

### Öffne diese Datei:
**`src/app/puzzle/puzzle.component.ts`**

### Finde diese Zeilen (um Zeile 40-47):
```typescript
// Target area where user needs to click (in percentages for responsiveness)
// YOU NEED TO ADJUST THESE after adding your image!
targetArea = {
  xMin: 40,  // Left edge (40% from left)
  xMax: 60,  // Right edge (60% from left)
  yMin: 30,  // Top edge (30% from top)
  yMax: 50   // Bottom edge (50% from top)
};
```

### Diese Werte anpassen:

Stell dir dein Bild wie ein Koordinatensystem vor:
- **0% links**, **100% rechts** (X-Achse)
- **0% oben**, **100% unten** (Y-Achse)

#### Beispiele:

**Du bist in der Mitte des Bildes:**
```typescript
targetArea = {
  xMin: 40,  // 40% von links
  xMax: 60,  // 60% von links
  yMin: 40,  // 40% von oben
  yMax: 60   // 60% von oben
};
```

**Du bist oben links:**
```typescript
targetArea = {
  xMin: 10,
  xMax: 30,
  yMin: 10,
  yMax: 30
};
```

**Du bist unten rechts:**
```typescript
targetArea = {
  xMin: 70,
  xMax: 90,
  yMin: 70,
  yMax: 90
};
```

**Du bist genau mittig (kleiner Bereich = schwieriger!):**
```typescript
targetArea = {
  xMin: 45,
  xMax: 55,
  yMin: 45,
  yMax: 55
};
```

### 💡 Tipp: Wie finde ich die richtige Position?

1. **Öffne das Bild in einem Bildbearbeitungsprogramm**
2. **Aktiviere das Lineal/Grid** (z.B. in Photoshop, GIMP)
3. **Schau wo du bist** und schätze die Prozente ab
4. **Oder**: Teste es einfach, starte die App und klick rum! 😄

---

## 🎮 Schritt 3: Features anpassen (Optional)

### Schwierigkeit ändern

In `src/app/puzzle/puzzle.component.ts`:

**Anzahl falsche Klicks bis Hinweis:**
```typescript
maxWrongClicks = 3;  // Nach 3 falschen Klicks kommt ein Hint
```

Ändern zu:
- `maxWrongClicks = 1;` → Hint kommt früh (leichter)
- `maxWrongClicks = 5;` → Hint kommt spät (schwieriger)
- `maxWrongClicks = 999;` → Kein Hint (sehr schwer!)

### Hint-Text ändern

In `src/app/puzzle/puzzle.component.html` (um Zeile 100):
```html
<div class="hint-box" *ngIf="showHint && !hiddenObjectFound">
  💡 Tipp: Schau genau in die Mitte des Bildes!
</div>
```

Ändere den Text passend zu deiner Bildposition:
- "💡 Tipp: Schau oben links!"
- "💡 Tipp: Ich bin bei den Leuten im Hintergrund!"
- "💡 Tipp: Ich trage ein rotes Shirt!"

### Instruktionen ändern

In `src/app/puzzle/puzzle.component.html` (um Zeile 76):
```html
<p class="instructions">Tippe auf das Bild, wo du mich findest!</p>
```

Kannst du erweitern:
```html
<p class="instructions">Finde Gabriel im Bild! Tippe auf ihn!</p>
```

### Success-Nachricht ändern

In `src/app/puzzle/puzzle.component.html` (um Zeile 105-106):
```html
<h2>🎉 Gefunden! 🎉</h2>
<p>Da bin ich ja! 💕</p>
```

Personalisiere:
```html
<h2>🎉 Super! Du hast mich gefunden! 🎉</h2>
<p>Jetzt kommt die wichtigste Frage... 💕</p>
```

---

## 🧪 Schritt 4: Testen!

### Lokal testen:
```powershell
ng serve
```

### Test-Checkliste:
- [ ] Bild wird angezeigt
- [ ] Kann auf das Bild klicken
- [ ] Falscher Klick → Roter Marker erscheint
- [ ] Nach 3 falschen Klicks → Hint erscheint
- [ ] Richtiger Klick → Grüner Marker + Success-Screen
- [ ] Nach 2 Sekunden → Valentine-Frage erscheint
- [ ] Funktioniert auf dem Handy

### Auf dem Handy testen:
```powershell
ng serve --host 0.0.0.0
# Dann auf Handy: http://DEINE-IP:4200
```

---

## 🎨 Design anpassen (Optional)

### Click-Marker größer/kleiner:

In `src/app/puzzle/puzzle.component.css` (um Zeile 559):
```css
.click-marker {
  width: 40px;   /* Größe ändern */
  height: 40px;
```

### Hint-Box Farbe ändern:

```css
.hint-box {
  background: rgba(255, 193, 7, 0.95);  /* Gelb */
  ...
}
```

Andere Farben:
- Blau: `rgba(0, 123, 255, 0.95)`
- Grün: `rgba(40, 167, 69, 0.95)`
- Pink: `rgba(214, 51, 132, 0.95)`

---

## 🔧 Troubleshooting

### Problem: Bild wird nicht angezeigt
**Lösung:**
1. Prüfe Dateiname: Exakt `hidden-object-image.jpg` (Kleinbuchstaben!)
2. Prüfe Pfad: `public/assets/hidden-object-image.jpg`
3. Browser-Cache leeren (Ctrl+Shift+R)

### Problem: Ich kann nicht treffen!
**Lösung:**
1. Öffne Browser DevTools (F12)
2. Klicke auf das Bild
3. Schau in die Console - dort siehst du die X,Y Prozente deiner Klicks!
4. Passe `targetArea` entsprechend an

### Problem: Es ist zu schwer/leicht
**Lösung:**
- **Zu schwer**: Vergrößere die `targetArea` (größerer Bereich)
- **Zu leicht**: Verkleinere die `targetArea` (kleinerer Bereich)
- **Zu schwer**: Reduziere `maxWrongClicks` für frühere Hints

### Problem: Level wird übersprungen
**Lösung:**
Prüfe in `puzzle.component.ts` die `checkIfSolved()` Methode:
```typescript
this.showHiddenObject = true;  // Diese Zeile muss da sein!
```

---

## 📱 Wie es aussieht:

```
┌─────────────────────────────────────┐
│      💝 Finde mich! 💝              │
│                                     │
│  Tippe auf das Bild, wo du mich    │
│  findest!                           │
│                                     │
│  Versuche: 2 / 3                    │
│                                     │
│  ┌───────────────────────────────┐ │
│  │                               │ │
│  │    [DEIN WIMMELBILD]         │ │
│  │         ❌                     │ │ ← Falsche Klicks
│  │     ❌                         │ │
│  │                    ✅         │ │ ← Richtiger Klick!
│  │                               │ │
│  │  💡 Tipp: Schau in die Mitte!│ │ ← Hint nach 3 Fehlern
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘
```

Nach richtigem Klick:
```
┌─────────────────────────────────────┐
│  ┌───────────────────────────────┐ │
│  │                               │ │
│  │    [Grünes Overlay]           │ │
│  │                               │ │
│  │      🎉 Gefunden! 🎉          │ │
│  │      Da bin ich ja! 💕        │ │
│  │                               │ │
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## ✅ Quick Reference

### Dateien die du brauchst:

1. **Dein Bild**: `public/assets/hidden-object-image.jpg`
2. **Konfiguration**: `src/app/puzzle/puzzle.component.ts` (Zeile 40-47)

### Standard-Einstellungen:
- Click-Zone: Mitte des Bildes (40-60%)
- Max falsche Klicks: 3
- Hint: "Schau genau in die Mitte des Bildes!"

### Zum Anpassen:
- **Position**: `targetArea` in `puzzle.component.ts`
- **Schwierigkeit**: `maxWrongClicks` in `puzzle.component.ts`
- **Texte**: In `puzzle.component.html`
- **Styling**: In `puzzle.component.css`

---

## 🎉 Fertig!

Nach dem Wimmelbild kommt die Valentine-Frage! Die komplette Journey:

1. ✅ Quiz → Tage zusammen erraten
2. ✅ Puzzle → Bild zusammensetzen
3. ✅ Wimmelbild → Dich finden
4. ✅ Frage → "Will you be my Valentine?"
5. ✅ Celebration! 💕

**Sie wird begeistert sein!** 🌹

---

## 💡 Pro-Tipps:

1. **Wähle ein Bild mit vielen Details** → schwieriger und spannender!
2. **Sei nicht zu offensichtlich im Bild** → macht mehr Spaß!
3. **Teste auf dem Handy** → das ist wo sie es spielen wird!
4. **Passe die Hints an** → personalisiere sie!
5. **Mach den Click-Bereich nicht zu klein** → sonst frustrierend!

Viel Erfolg! 🎮💝
