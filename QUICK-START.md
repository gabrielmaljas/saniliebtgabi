# 🚀 Quick Start Guide - Valentine's Puzzle Website

## ⚡ Fast Track (Minimum Steps to Deploy)

### 1. Add Your Photo (REQUIRED!)
```
📁 Location: valentine-puzzle/public/assets/
📝 Filename: valentine-image.jpg
📏 Size: Square image (e.g., 1000x1000)
```

### 2. Test It
```powershell
cd valentine-puzzle
ng serve
```
Open: http://localhost:4200

### 3. Build It
```powershell
ng build --configuration production
```

### 4. Deploy It (Choose ONE):

#### 🟢 Option A: Netlify (EASIEST!)
1. Go to https://www.netlify.com
2. Sign up (free)
3. Drag & drop folder: `dist/valentine-puzzle/browser/`
4. Done! Get URL: `yourname.netlify.app`

#### 🔵 Option B: Traditional Hosting
1. Buy domain + hosting (Hostinger, Bluehost, etc.)
2. Upload files from `dist/valentine-puzzle/browser/` via FTP
3. Done!

---

## ✅ Complete Checklist

- [ ] Photo added to `public/assets/valentine-image.jpg`
- [ ] Tested locally (looks good!)
- [ ] Built for production
- [ ] Deployed to hosting
- [ ] Tested live site
- [ ] Link sent to wife 💕

---

## 🆘 Having Issues?

**Image not showing?**
- File must be: `valentine-image.jpg` (lowercase)
- Location: `public/assets/`
- Try: Clear browser cache (Ctrl+Shift+R)

**Build errors?**
```powershell
Remove-Item -Recurse -Force node_modules
npm install
ng build --configuration production
```

**Need help?**
- Check: `PROJECT-PLAN.md` for detailed steps
- Check: `DEPLOYMENT-GUIDE.md` for hosting details
- Check: `public/assets/README.md` for image requirements

---

## 📱 Mobile Testing

Same WiFi:
```powershell
ng serve --host 0.0.0.0
# Then access from phone: http://YOUR-IP:4200
```

---

## 💝 That's It!

1. Photo → 2. Test → 3. Build → 4. Deploy → 5. Send to wife!

**Total time: ~1 hour**

Good luck! She's going to love it! ❤️
