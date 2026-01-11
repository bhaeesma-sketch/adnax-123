# Quick Deploy to Vercel (Get Public Link in 2 Minutes)

## Option 1: Deploy via Vercel Website (Easiest)

1. **Go to:** https://vercel.com
2. **Sign up/Login** with GitHub (free)
3. **Click:** "Add New Project"
4. **Import Git Repository:**
   - If you have the code on GitHub: Select your repository
   - If not on GitHub: See Option 2 below
5. **Configure:**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: .next (auto-filled)
6. **Click:** "Deploy"
7. **Wait 1-2 minutes** for deployment
8. **Get your link:** Vercel will provide a link like `adnex-xxxxx.vercel.app`

## Option 2: Deploy Without GitHub (Using Vercel CLI)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   cd /Users/bhaeesma/Desktop/adnax
   vercel
   ```
   - Follow prompts (use defaults)
   - Say "Yes" to deploy to production

4. **Get your link:** Vercel will show the deployment URL

## Option 3: Deploy via GitHub (Recommended for ongoing updates)

1. **Create GitHub Repository:**
   ```bash
   cd /Users/bhaeesma/Desktop/adnax
   git init
   git add .
   git commit -m "Initial commit"
   # Create repo on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/adnex.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Follow Option 1 above
   - Select your GitHub repository
   - Every push to GitHub will auto-deploy

## Your Public Link Will Be:

After deployment, Vercel provides:
- **Production URL:** `your-project-name.vercel.app`
- **Custom Domain:** Can be added in Vercel settings (optional)

## Important Before Deploying:

1. ✅ Update WhatsApp number in `lib/whatsapp.ts`
2. ✅ Review content (optional, can update later)
3. ✅ Ready to deploy!

## Need Help?

The deployment takes 1-2 minutes. Your site will be live with a public link immediately after deployment completes.
