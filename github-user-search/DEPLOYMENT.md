# Deployment Guide for GitHub User Search Application

This guide provides step-by-step instructions for deploying the GitHub User Search Application to Vercel.

## Pre-Deployment Checklist

- ✅ Code optimized for production (console logs removed)
- ✅ .env file added to .gitignore
- ✅ Application tested locally
- ✅ vercel.json configuration file added
- ✅ All features working correctly

## Step 1: Create a Vercel Account

1. Visit [Vercel's website](https://vercel.com)
2. Click "Sign Up" and create an account using:
   - GitHub (recommended for easy repository integration)
   - GitLab
   - Bitbucket
   - Email

## Step 2: Import Your Project

### Option A: Deploy from Vercel Dashboard

1. Log in to your Vercel dashboard
2. Click "Add New..." → "Project"
3. Import your Git repository:
   - Select "Import Git Repository"
   - Choose your GitHub account
   - Find and select the `alx-fe-reactjs` repository
4. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: `github-user-search`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Option B: Deploy Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project directory
cd github-user-search

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## Step 3: Configure Environment Variables

If you have a GitHub Personal Access Token (optional but recommended for higher API rate limits):

1. Go to your project settings in Vercel dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add the following variable:
   - **Key**: `VITE_GITHUB_API_KEY`
   - **Value**: Your GitHub Personal Access Token
   - **Environment**: Production, Preview, Development

### How to Get a GitHub Personal Access Token:

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Select scopes: `public_repo` or `read:user`
4. Copy the generated token
5. Add it to Vercel environment variables

## Step 4: Deploy the Application

1. After importing and configuring, click "Deploy"
2. Vercel will:
   - Clone your repository
   - Install dependencies (`npm install`)
   - Build the application (`npm run build`)
   - Deploy to their CDN
3. Monitor the deployment logs for any errors
4. Once complete, you'll receive a deployment URL

## Step 5: Verify the Deployment

### Check the Live Application

1. Visit the deployment URL provided by Vercel (e.g., `your-app.vercel.app`)
2. Test all features:
   - ✅ Search by username
   - ✅ Advanced filters (location, minimum repos)
   - ✅ Load more functionality
   - ✅ Responsive design on mobile/tablet/desktop
   - ✅ Error handling (search for non-existent user)
   - ✅ Loading states

### Performance Checks

1. Test on different devices and browsers
2. Check page load speed
3. Verify API calls are working correctly
4. Test with slow network connection

## Step 6: Custom Domain (Optional)

1. In Vercel dashboard, go to project Settings → Domains
2. Add your custom domain
3. Follow Vercel's instructions to configure DNS settings
4. Wait for DNS propagation (usually takes a few minutes)

## Continuous Deployment

Vercel automatically deploys:
- **Production**: Pushes to the `main` branch
- **Preview**: Pull requests and other branches

Every push to your repository will trigger a new deployment automatically.

## Troubleshooting

### Build Failures

- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify build command is correct

### Environment Variables Not Working

- Ensure variables start with `VITE_` prefix
- Redeploy after adding environment variables
- Check variable names match exactly

### API Rate Limiting

- Add GitHub Personal Access Token
- Token increases rate limit from 60 to 5,000 requests/hour

## Monitoring and Analytics

1. Use Vercel Analytics for performance monitoring
2. Check deployment logs for errors
3. Monitor API usage and rate limits

## Rollback (if needed)

1. Go to project Deployments page
2. Find a previous working deployment
3. Click "..." → "Promote to Production"

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub API Documentation](https://docs.github.com/en/rest)

## Security Best Practices

- ✅ Never commit `.env` files
- ✅ Use environment variables for API keys
- ✅ Keep dependencies updated
- ✅ Monitor for security vulnerabilities

---

**Your application is now live and accessible worldwide! 🎉**
