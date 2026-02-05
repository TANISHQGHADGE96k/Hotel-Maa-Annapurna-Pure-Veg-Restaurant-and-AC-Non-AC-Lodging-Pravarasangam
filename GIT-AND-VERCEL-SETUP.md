# Git Repository & Vercel Deployment Setup Guide

This guide will help you set up Git version control and deploy your Hotel Maa Annapurna website to Vercel with automatic deployments.

## 📋 Prerequisites

1. **Git** - Install from [git-scm.com](https://git-scm.com/)
2. **GitHub Account** - Create one at [github.com](https://github.com/)
3. **Vercel Account** - Sign up at [vercel.com](https://vercel.com/) (you can use your GitHub account)

---

## 🚀 Part 1: Initialize Git Repository

### Step 1: Initialize Git
Open your terminal in the website folder and run:

```bash
git init
```

This creates a new Git repository in your project.

### Step 2: Configure Git (First-time setup)
If you haven't configured Git before, set your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 3: Add All Files
Add all your project files to Git:

```bash
git add .
```

### Step 4: Create Initial Commit
Create your first commit:

```bash
git commit -m "Initial commit: Hotel Maa Annapurna website"
```

---

## 🌐 Part 2: Connect to GitHub

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com/) and log in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `hotel-maa-annapurna` (or any name you prefer)
4. Description: "Hotel Maa Annapurna official website"
5. Keep it **Public** or **Private** (your choice)
6. **DO NOT** initialize with README, .gitignore, or license
7. Click **"Create repository"**

### Step 2: Connect Local Repository to GitHub

GitHub will show you commands. Use these (replace `YOUR_USERNAME` with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/hotel-maa-annapurna.git
git branch -M main
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/tanishq123/hotel-maa-annapurna.git
git branch -M main
git push -u origin main
```

You may be prompted to enter your GitHub credentials.

### Step 3: Verify Connection
Check if the remote is connected:

```bash
git remote -v
```

You should see your GitHub repository URL.

---

## ☁️ Part 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Log in to Vercel**
   - Go to [vercel.com](https://vercel.com/)
   - Sign in with your GitHub account

2. **Import Your Repository**
   - Click **"Add New..."** → **"Project"**
   - Click **"Import Git Repository"**
   - Select your `hotel-maa-annapurna` repository
   - Click **"Import"**

3. **Configure Project**
   - **Framework Preset:** Vite (should auto-detect)
   - **Root Directory:** `hotel-maa-annapurna-frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

4. **Environment Variables**
   - Click **"Environment Variables"**
   - Add your backend API URL:
     ```
     VITE_API_URL = your-backend-url
     ```

5. **Deploy**
   - Click **"Deploy"**
   - Wait for the deployment to complete
   - Your site will be live at a Vercel URL (e.g., `hotel-maa-annapurna.vercel.app`)

### Option B: Deploy via Vercel CLI

Install Vercel CLI:
```bash
npm install -g vercel
```

Deploy:
```bash
cd hotel-maa-annapurna-frontend
vercel
```

Follow the prompts to link your project.

---

## 🔄 Part 4: Automatic Deployments (Continuous Deployment)

Once you've connected your GitHub repository to Vercel, **automatic deployments are already enabled**! 

### How It Works:

1. **Make changes** to your code locally
2. **Commit changes:**
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```
3. **Push to GitHub:**
   ```bash
   git push
   ```
4. **Vercel automatically deploys** your changes within 1-2 minutes!

### Deployment Branches:
- **Production:** Commits to `main` branch deploy to your production URL
- **Preview:** Other branches create preview deployments

---

## 📝 Daily Workflow

### Making Changes and Deploying:

```bash
# 1. Make your code changes in your editor

# 2. Check what files changed
git status

# 3. Add files to staging
git add .

# 4. Commit with a descriptive message
git commit -m "Updated restaurant menu and fixed booking form"

# 5. Push to GitHub (triggers automatic Vercel deployment)
git push
```

### Quick Commands Reference:

```bash
# Check current status
git status

# View commit history
git log --oneline

# Undo changes (before commit)
git restore <filename>

# View connected remotes
git remote -v

# Pull latest changes (if working with a team)
git pull
```

---

## ⚙️ Backend Deployment (Separate)

**Note:** Vercel is primarily for frontend. For your Node.js backend, consider:

1. **Railway** - [railway.app](https://railway.app/)
2. **Render** - [render.com](https://render.com/)
3. **Heroku** - [heroku.com](https://heroku.com/)
4. **DigitalOcean App Platform** - [digitalocean.com](https://www.digitalocean.com/products/app-platform)

I can help you set up backend deployment separately if needed!

---

## 🔒 Important Security Notes

1. **Never commit `.env` files** - Already excluded in `.gitignore`
2. **Use Vercel Environment Variables** for sensitive data
3. **Keep your backend secrets** in environment variables on your backend hosting
4. **Review commits before pushing** to avoid exposing API keys

---

## 🆘 Troubleshooting

### Issue: Git push requires authentication
**Solution:** Set up SSH keys or use Personal Access Token:
- GitHub Settings → Developer settings → Personal access tokens → Generate new token
- Use token as password when pushing

### Issue: Vercel build fails
**Solution:** Check build logs in Vercel dashboard and verify:
- Correct build command
- Correct output directory
- All dependencies in `package.json`

### Issue: Environment variables not working
**Solution:** Ensure they're prefixed with `VITE_` for Vite projects and added in Vercel dashboard

---

## ✅ Next Steps

1. ✓ Initialize Git repository
2. ✓ Create `.gitignore` file
3. ☐ Create GitHub repository
4. ☐ Push code to GitHub
5. ☐ Connect GitHub repo to Vercel
6. ☐ Configure Vercel project settings
7. ☐ Deploy frontend to Vercel
8. ☐ Deploy backend (separate service)
9. ☐ Test the live website
10. ☐ Set up custom domain (optional)

---

**Author:** Tanishq  
**Project:** Hotel Maa Annapurna  
**Last Updated:** February 2026
