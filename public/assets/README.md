# Assets Folder

## Required Images 📸

### 1. Puzzle Image (REQUIRED!)
**YOU MUST ADD THIS IMAGE!**

**Filename**: `valentine-image.jpg`
- **Format**: JPG/JPEG recommended (PNG also works, but rename to .jpg)
- **Size**: Square images work best (e.g., 1000x1000 pixels)
- **Content**: A romantic photo of you and your wife!

### 2. Hidden Object Image (REQUIRED!)  
**YOU MUST ADD THIS IMAGE TOO!**

**Filename**: `hidden-object-image.jpg`
- **Format**: JPG/JPEG recommended
- **Size**: 1200-1920px width recommended
- **Content**: A photo where you appear somewhere in it (group photo, crowd, event, etc.)
- **Tip**: The more crowded/detailed, the harder the game!

⚠️ **After adding this image, you MUST configure where you are in the picture!**

See: `WIMMELBILD-ANLEITUNG.md` for detailed instructions.

---

## Image Requirements:

### valentine-image.jpg
- **Name**: Must be exactly `valentine-image.jpg` (all lowercase)
- **Size**: Square images work best (e.g., 1000x1000 pixels)
- **Content**: A romantic photo of you and your wife!

### hidden-object-image.jpg  
- **Name**: Must be exactly `hidden-object-image.jpg` (all lowercase)
- **Size**: 1200-1920px width recommended, any height
- **Content**: Photo where you (Gabriel) appear somewhere
- **Quality**: High resolution for mobile devices

---

## Tips for Best Results:

### For valentine-image.jpg:
1. Use a high-quality image (at least 800x800 pixels)
2. Square images display perfectly in the puzzle
3. Choose a photo with good contrast and clear details
4. Bright, colorful photos work best for puzzles

### For hidden-object-image.jpg:
1. Choose a busy photo (many people/objects)
2. Don't be TOO obvious in the picture (more fun!)
3. Good lighting and resolution
4. Landscape orientation works well

---

## Current Status:

### valentine-image.jpg
⚠️ **Not found!** The puzzle will not display correctly until you add this image.

### hidden-object-image.jpg
⚠️ **Not found!** The hidden object game will not work until you add this image.

---

## How to Add:

### For valentine-image.jpg:
1. Choose your romantic photo
2. Resize it to a square if needed (use any photo editor)
3. Save/rename it as `valentine-image.jpg`
4. Copy it to this `public/assets/` folder
5. Test by running `ng serve` and opening http://localhost:4200

### For hidden-object-image.jpg:
1. Choose a photo where you appear
2. Save/rename it as `hidden-object-image.jpg`  
3. Copy it to this `public/assets/` folder
4. **IMPORTANT**: Open `src/app/puzzle/puzzle.component.ts`
5. Find the `targetArea` object (around line 40)
6. Set the coordinates where you are in the picture (in percentages)
7. Test by running `ng serve`

See `WIMMELBILD-ANLEITUNG.md` for detailed configuration instructions!

---

That's it! The game will automatically use these images. 💕

