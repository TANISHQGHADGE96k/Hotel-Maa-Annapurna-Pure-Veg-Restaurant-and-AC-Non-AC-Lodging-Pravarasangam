# 🚀 Quick Reference: Git & Vercel Workflow

## ⚡ Super Quick Start (After Initial Setup)

### Daily workflow to deploy changes:

1. **Make your changes** in the code
2. **Double-click** `PUSH-TO-GIT.bat`
3. **Enter a commit message** (e.g., "Updated menu prices")
4. **Done!** Vercel will deploy automatically in 1-2 minutes

---

## 📋 One-Time Setup Checklist

### Before First Use:

- [ ] Run `SETUP-GIT.bat` (one time only)
- [ ] Create GitHub account at https://github.com
- [ ] Create Vercel account at https://vercel.com
- [ ] Connect GitHub repo to Vercel (see full guide)

---

## 🎯 Common Commands

### Check what changed:
```bash
git status
```

### Quick commit and push:
```bash
git add .
git commit -m "Your message here"
git push
```

### View history:
```bash
git log --oneline
```

### Undo uncommitted changes:
```bash
git restore <filename>
```

---

## 🔗 Important Links

- **GitHub Repository:** https://github.com/YOUR_USERNAME/hotel-maa-annapurna
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Your Live Site:** Will be at `hotel-maa-annapurna.vercel.app` (or custom domain)

---

## 📁 Files You Created

- ✅ `.gitignore` - Tells Git what to ignore
- ✅ `vercel.json` - Vercel deployment config
- ✅ `SETUP-GIT.bat` - One-time setup script
- ✅ `PUSH-TO-GIT.bat` - Daily push script
- ✅ `GIT-AND-VERCEL-SETUP.md` - Full detailed guide

---

## 🆘 Quick Troubleshooting

### "Push failed" error
→ Make sure you ran SETUP-GIT.bat first  
→ Check internet connection  
→ Verify GitHub credentials

### Vercel build failed
→ Check Vercel dashboard for error logs  
→ Verify `VITE_API_URL` environment variable is set  
→ Ensure all dependencies are in package.json

### Changes not appearing on website
→ Wait 1-2 minutes for Vercel to deploy  
→ Hard refresh browser (Ctrl + Shift + R)  
→ Check Vercel deployment logs

---

## 💡 Best Practices

1. **Write clear commit messages**
   - ✅ "Fixed booking form validation"
   - ❌ "updates"

2. **Commit frequently**
   - Save your progress often
   - Small commits are better than big ones

3. **Test locally first**
   - Run `npm run dev` before pushing
   - Make sure it works on your computer

4. **Never commit sensitive data**
   - .env files are automatically ignored
   - Use Vercel environment variables

---

## 🎓 Learning Resources

- Git basics: https://git-scm.com/doc
- Vercel docs: https://vercel.com/docs
- GitHub guides: https://guides.github.com

---

**Need help?** Check `GIT-AND-VERCEL-SETUP.md` for the complete guide!
