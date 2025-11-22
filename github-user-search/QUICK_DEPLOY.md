# Quick Deployment Steps to Vercel

## Prerequisites
- GitHub account with the repository pushed
- Vercel account (free tier is sufficient)

## Fast Track Deployment (5 minutes)

### 1. Connect Vercel to GitHub
1. Go to https://vercel.com
2. Click "Sign Up" → Choose "Continue with GitHub"
3. Authorize Vercel to access your repositories

### 2. Import Project
1. Click "Add New..." → "Project"
2. Find `alx-fe-reactjs` repository
3. Click "Import"

### 3. Configure Build Settings
- **Framework Preset**: Vite
- **Root Directory**: `github-user-search`
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `dist` (auto-detected)

### 4. Add Environment Variable (Optional)
If you have a GitHub Personal Access Token:
- Click "Environment Variables"
- Add: `VITE_GITHUB_API_KEY` = `your_token_here`

### 5. Deploy
1. Click "Deploy"
2. Wait 1-2 minutes for build
3. Get your live URL!

## Your Deployment URL
After deployment, you'll get a URL like:
- `https://your-project-name.vercel.app`

## Test Your Live App
- Search for users
- Test location filter
- Test minimum repos filter
- Try "Load More"
- Test on mobile devices

## Redeploy
Any push to `main` branch automatically redeploys!

---

**That's it! Your app is live! 🚀**

For detailed instructions, see DEPLOYMENT.md
