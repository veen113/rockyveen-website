# Deploy to Vercel - Step by Step Guide

## Prerequisites
- GitHub account
- Vercel account (free)

---

## Method 1: Deploy via Vercel Dashboard (Easiest)

### Step 1: Push to GitHub

1. **Initialize Git** (if not already done)
   ```bash
   cd "/Users/fathimachowdhury/Downloads/UGC 2"
   git init
   ```

2. **Create .gitignore** (if not exists)
   ```bash
   echo "node_modules
   .next
   .env.local
   .DS_Store
   *.log" > .gitignore
   ```

3. **Commit your code**
   ```bash
   git add .
   git commit -m "Initial commit - RockyVeen website"
   ```

4. **Create GitHub repository**
   - Go to https://github.com/new
   - Name: `rockyveen-website` (or any name)
   - Don't initialize with README
   - Click "Create repository"

5. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/rockyveen-website.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to Vercel**
   - Visit: https://vercel.com/
   - Click "Sign Up" or "Log In"
   - Sign in with GitHub

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `rockyveen-website`
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

4. **Environment Variables** (Optional)
   - You don't need any for this project
   - EmailJS credentials are already in the code

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build
   - ✅ Your site is live!

---

## Method 2: Deploy via Vercel CLI (Alternative)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
cd "/Users/fathimachowdhury/Downloads/UGC 2"
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project's name? `rockyveen-website`
- In which directory is your code located? `./`
- Want to override settings? **N**

### Step 4: Deploy to Production
```bash
vercel --prod
```

---

## After Deployment

### Your Website URLs

**Production URL**: `https://rockyveen-website.vercel.app`
(or custom domain if you set one up)

**Preview URLs**: Every git push creates a preview URL

### Custom Domain (Optional)

1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `rockyveen.com`)
4. Follow DNS configuration instructions
5. Vercel will auto-generate SSL certificate

---

## Automatic Deployments

Once connected to GitHub:
- ✅ Every push to `main` branch = Production deployment
- ✅ Every push to other branches = Preview deployment
- ✅ Every pull request = Preview deployment

---

## Environment Variables (If Needed Later)

If you need to add environment variables:

1. Go to Vercel Dashboard
2. Select your project
3. Go to "Settings" → "Environment Variables"
4. Add variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

(Currently not needed - credentials are in code)

---

## Build Settings

Your `package.json` should have these scripts:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

Vercel will automatically run `npm run build` during deployment.

---

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Verify no TypeScript errors locally: `npm run build`

### Images Not Loading
- Make sure images are in `/public` folder
- Use relative paths: `/images/photo.jpg`

### EmailJS Not Working
- Verify public key is correct
- Check browser console for errors
- Make sure EmailJS service is active

### 404 Errors
- Check file paths are correct
- Verify routing in Next.js app directory

---

## Quick Commands Reference

```bash
# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Your message"

# Push to GitHub
git push origin main

# Deploy to Vercel (CLI)
vercel

# Deploy to production (CLI)
vercel --prod

# Check deployment status
vercel ls
```

---

## What Gets Deployed

✅ All source code  
✅ Public assets (images, fonts)  
✅ Built Next.js application  
✅ API routes (if any)  
✅ Environment variables (if configured)  

❌ `node_modules` (rebuilt on Vercel)  
❌ `.next` folder (rebuilt on Vercel)  
❌ `.env.local` (use Vercel env vars)  

---

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All pages accessible
- [ ] Images loading
- [ ] Navigation works
- [ ] Contact form sends emails
- [ ] Portfolio shows all collaborations
- [ ] Mobile responsive
- [ ] Theme switcher works

---

## Your Project is Ready!

Everything is configured and ready to deploy. Just follow the steps above and your website will be live in minutes! 🚀

**Recommended**: Use Method 1 (Vercel Dashboard) - it's the easiest and gives you automatic deployments from GitHub.
