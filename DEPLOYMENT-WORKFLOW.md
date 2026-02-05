# 🔄 Automatic Deployment Workflow

This document explains how your changes automatically reach Vercel after you push to Git.

---

## 📊 The Complete Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                     YOUR DEVELOPMENT WORKFLOW                        │
└─────────────────────────────────────────────────────────────────────┘

  1. MAKE CHANGES                    2. COMMIT TO GIT                
  ┌──────────────┐                   ┌──────────────┐               
  │   Edit your  │                   │  Run:        │               
  │   code files │  ────────────────▶│  git add .   │               
  │   in VS Code │                   │  git commit  │               
  └──────────────┘                   └──────────────┘               
                                            │                         
                                            │                         
                                            ▼                         
  3. PUSH TO GITHUB                  4. AUTOMATIC TRIGGER           
  ┌──────────────┐                   ┌──────────────┐               
  │  Run:        │                   │   GitHub     │               
  │  git push    │  ────────────────▶│   notifies   │               
  │              │                   │   Vercel     │               
  └──────────────┘                   └──────────────┘               
                                            │                         
                                            │                         
                                            ▼                         
  5. VERCEL BUILDS                   6. VERCEL DEPLOYS              
  ┌──────────────┐                   ┌──────────────┐               
  │   Vercel     │                   │   Your site  │               
  │   runs:      │  ────────────────▶│   is now     │               
  │   npm build  │                   │   LIVE! 🎉   │               
  └──────────────┘                   └──────────────┘               


┌─────────────────────────────────────────────────────────────────────┐
│                         TIME BREAKDOWN                               │
└─────────────────────────────────────────────────────────────────────┘

Step 1-3 (Local):  ~30 seconds (you do this)
Step 4 (GitHub):   ~5 seconds (automatic)
Step 5-6 (Vercel): ~45-90 seconds (automatic)
                   ─────────────────────────────
TOTAL TIME:        ~1-2 minutes from push to live!
```

---

## 🎯 What Happens Automatically

### After you run `git push`:

1. ✅ **GitHub receives your code**
   - Stores your latest changes
   - Maintains complete history

2. ✅ **GitHub webhook triggers Vercel**
   - Instantly notifies Vercel of new changes
   - Sends commit information

3. ✅ **Vercel starts build process**
   - Clones your repository
   - Installs dependencies (`npm install`)
   - Runs build command (`npm run build`)
   - Optimizes assets

4. ✅ **Vercel deploys to CDN**
   - Distributes to global edge network
   - Makes site available worldwide
   - Updates your live URL

5. ✅ **You get notified**
   - Deployment status in Vercel dashboard
   - Optional: Email/Slack notifications
   - View deployment logs

---

## 🔍 Behind The Scenes

### What Vercel Does During Build:

```bash
# 1. Install dependencies
npm install

# 2. Build your Vite project
npm run build

# 3. Optimize output
# - Minifies JavaScript
# - Optimizes images
# - Generates source maps
# - Creates static HTML

# 4. Deploy to CDN
# - Uploads to global network
# - Configures caching
# - Sets up SSL certificate
```

### Where Files Go:

```
YOUR COMPUTER                 GITHUB                    VERCEL
─────────────                 ──────                    ──────

website/
├── frontend/      ────push──▶  Repository   ────build──▶  Live Site
│   ├── pages/                   (Source)                  (Optimized)
│   ├── styles/
│   └── ...
└── .git/
```

---

## 🌍 Deployment Environments

### Production Deployment
- **Trigger:** Push to `main` branch
- **URL:** `hotel-maa-annapurna.vercel.app`
- **Purpose:** Live website users see

### Preview Deployments (Bonus!)
- **Trigger:** Push to any other branch
- **URL:** Unique preview URL for each branch
- **Purpose:** Test changes before going live

#### Example:
```bash
# Create a test branch
git checkout -b test-new-feature

# Make changes and push
git add .
git commit -m "Testing new menu design"
git push -u origin test-new-feature

# Result: Vercel creates a preview URL!
# URL: hotel-maa-annapurna-git-test-new-feature.vercel.app
```

---

## 📧 Monitoring Deployments

### Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Click your project
3. See all deployments with:
   - ✅ Build status
   - ⏱️ Build time
   - 📊 Build logs
   - 🔗 Deployment URL

### GitHub Integration
- See deployment status on commits
- Green checkmark = successful deploy
- Red X = build failed (check logs)

---

## 🛠️ Customization Options

### Build & Deploy Settings (vercel.json)

Already configured for you at:
`hotel-maa-annapurna-frontend/vercel.json`

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Environment Variables

Set in Vercel Dashboard:
1. Project Settings → Environment Variables
2. Add variables like:
   - `VITE_API_URL` - Your backend URL
   - `VITE_GOOGLE_MAPS_KEY` - API keys
   - etc.

---

## 🎓 Advanced: Branch-Based Deployments

```
main branch (production)       feature branches (preview)
─────────────────────         ──────────────────────────

git push origin main      →   hotel-maa-annapurna.vercel.app
                               ✅ Live Production Site

git push origin dev       →   hotel-maa-annapurna-git-dev.vercel.app  
                               🔍 Preview Deployment

git push origin redesign  →   hotel-maa-annapurna-git-redesign.vercel.app
                               🔍 Preview Deployment
```

**Benefits:**
- Test changes without affecting production
- Share preview links with team/clients
- Automatic cleanup when branch is deleted

---

## ✨ Summary

### What You Do:
```bash
git add .
git commit -m "Your changes"
git push
```

### What Happens Automatically:
1. ✅ Code pushed to GitHub
2. ✅ Vercel notified
3. ✅ Build process runs
4. ✅ Site deployed globally
5. ✅ Users see your changes

### Time: ~1-2 minutes total! 🚀

---

**Pro Tip:** After pushing, you can immediately check deployment status at:
https://vercel.com/dashboard

No need to wait - Vercel shows real-time build progress!
