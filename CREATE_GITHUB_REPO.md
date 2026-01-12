# Create GitHub Repository - Step by Step

## Quick Steps (2 minutes)

### Step 1: Create Repository on GitHub

1. **Go to:** https://github.com/new
   - (Login if not already logged in)

2. **Repository Settings:**
   - **Repository name:** `adnex` (or your preferred name)
   - **Description:** (optional) "ADNEX - Heavy Equipment Trading Platform"
   - **Visibility:** 
     - ✅ Public (free, anyone can see)
     - ✅ Private (only you can see, free for personal use)
   - **⚠️ IMPORTANT:** 
     - ❌ DO NOT check "Add a README file"
     - ❌ DO NOT add .gitignore
     - ❌ DO NOT choose a license
     - (We already have these files!)

3. **Click:** "Create repository" (green button)

### Step 2: Copy the Repository URL

After creating, GitHub will show you a page with setup instructions. You'll see a URL like:
```
https://github.com/YOUR_USERNAME/adnex.git
```

**Copy this URL** - you'll need it in the next step.

### Step 3: Add Remote and Push (Run in Terminal)

After you have the repository URL, come back here and I'll help you push, OR run these commands:

```bash
cd /Users/bhaeesma/Desktop/adnax

# Add remote (replace with YOUR actual repository URL)
git remote add origin https://github.com/YOUR_USERNAME/adnex.git

# Push to GitHub
git push -u origin main
```

## What Happens Next?

After pushing:
- ✅ All your code will be on GitHub
- ✅ You can view it at: https://github.com/YOUR_USERNAME/adnex
- ✅ You can deploy to Vercel by importing this repository
- ✅ You can share the repository with others

## Need Help?

Once you create the repository and get the URL, let me know and I'll help you push the code!
