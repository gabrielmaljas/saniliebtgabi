# 🌐 GitHub Pages Deployment Guide

## Repository Name: `saniliebtgabi`

Follow these steps to deploy your Valentine's Day website to GitHub Pages.

---

## Step 1: Create GitHub Repository

1. Go to [https://github.com/new](https://github.com/new)
2. **Repository name:** `saniliebtgabi`
3. **Description:** "Valentine's Day puzzle game for Gabi ❤️" (optional)
4. **Visibility:** Choose **Private** or **Public**
   - Private: Only you can see it
   - Public: Anyone can see it (but they won't know the URL unless you share it)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **"Create repository"**

---

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub shows you commands. Use these:

```powershell
git remote add origin https://github.com/gabrielmaljas/saniliebtgabi.git
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy to GitHub Pages

Run this single command in PowerShell:

```powershell
npm run deploy
```

This will:
1. Build the Angular app for production
2. Configure it for the `/saniliebtgabi/` path
3. Push the built files to the `gh-pages` branch
4. Automatically configure GitHub Pages

**Wait 1-2 minutes for GitHub to process the deployment.**

---

## Step 4: Verify Deployment

Your website will be live at:

```
https://gabrielmaljas.github.io/saniliebtgabi/
```

**Tip:** Share this URL with your wife on Valentine's Day! 💝

---

## Updating the Website

Whenever you make changes:

1. **Save your changes in VS Code**
2. **Commit changes:**
   ```powershell
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. **Redeploy to GitHub Pages:**
   ```powershell
   npm run deploy
   ```

---

## Troubleshooting

### Issue: "failed to push some refs"
**Solution:** Pull changes first
```powershell
git pull origin main --rebase
git push
```

### Issue: 404 Page Not Found
**Solution:** 
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select branch: **gh-pages**, folder: **/ (root)**
4. Click **Save**
5. Wait 1-2 minutes and refresh

### Issue: Videos not working
**Solution:** Check video file sizes. GitHub has a 100MB per-file limit.
- Each video should be under 10MB
- Total repository should be under 1GB

### Issue: Styles/Images not loading
**Solution:** The base href is set to `/saniliebtgabi/`
- Make sure all asset paths use relative paths (e.g., `assets/image.jpg` not `/assets/image.jpg`)
- This is already configured in your project ✅

---

## Security Notes

- The repository contains the videos and images
- If using **Public** repository: Anyone can see the source code
- If using **Private** repository: Only you can see code, but the website is still public
- To make website private, you need GitHub Pro (private Pages)

---

## Quick Commands Reference

```powershell
# Deploy website
npm run deploy

# Start local dev server
npm start

# Commit changes
git add .
git commit -m "Your message"
git push

# Check status
git status

# View remote URL
git remote -v
```

---

## 💝 Final Step

On Valentine's Day, send this URL to your wife:

```
https://gabrielmaljas.github.io/saniliebtgabi/
```

**Good luck! 🎉❤️**
