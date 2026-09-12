# VYBE - Vercel Deployment Guide

## 🚀 Deploy to Vercel

Your VYBE app is now ready to be deployed to Vercel with web support enabled!

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository: `PrachiGautam24/Vybe`
4. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: `frontend`
   - **Build Command**: `expo export -p web`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to frontend directory
cd frontend

# Deploy
vercel

# For production deployment
vercel --prod
```

### Environment Configuration

If your app requires environment variables, add them in Vercel:
1. Go to Project Settings → Environment Variables
2. Add your variables (e.g., API keys, backend URLs)

### Post-Deployment

After deployment, you'll get a URL like:
- **Preview**: `https://vybe-xxx.vercel.app`
- **Production**: `https://vybe.vercel.app` (or your custom domain)

### Testing Web Version Locally

```bash
# Start web development server
npx expo start --web

# Or build and serve locally
npx expo export -p web
npx serve dist
```

### Important Notes

- ✅ Web platform is enabled in `app.json`
- ✅ React Native Web dependencies are installed
- ✅ Vercel configuration is set up in `vercel.json`
- ✅ The app will automatically handle routing for web

### Troubleshooting

If you encounter issues:
1. Clear build cache: `rm -rf dist .expo`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Rebuild: `npx expo export -p web`

### Share Your App

Once deployed, share the Vercel URL with anyone to access VYBE in their web browser! 🎉
