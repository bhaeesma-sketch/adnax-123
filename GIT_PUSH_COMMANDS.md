# Git Push Commands for ADNEX

## Current Status
✅ All files committed locally
❌ No remote repository configured

## Option 1: Push to GitHub (Recommended)

### Step 1: Create GitHub Repository
1. Go to: https://github.com/new
2. Repository name: `adnex` (or your choice)
3. Choose: Public or Private
4. **DO NOT** initialize with README (we have files already)
5. Click "Create repository"

### Step 2: Add Remote and Push
After creating the repository, GitHub will show you commands. Use these:

```bash
cd /Users/bhaeesma/Desktop/adnax

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/adnex.git

# Push to GitHub
git push -u origin main
```

**If using SSH instead:**
```bash
git remote add origin git@github.com:YOUR_USERNAME/adnex.git
git push -u origin main
```

## Option 2: Push to Existing Repository

If you already have a repository URL:

```bash
cd /Users/bhaeesma/Desktop/adnax
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

## Option 3: Deploy to Vercel from GitHub

1. Push to GitHub (follow Option 1 above)
2. Go to https://vercel.com
3. Import GitHub repository
4. Deploy automatically

## Quick Commands Reference

```bash
# Check status
git status

# View commits
git log --oneline

# View remote (after adding)
git remote -v

# Push changes
git push

# Push to specific branch
git push origin main
```

## Troubleshooting

### "Remote origin already exists"
```bash
# Remove existing remote
git remote remove origin

# Add new remote
git remote add origin YOUR_REPOSITORY_URL
```

### "Authentication failed"
- Use GitHub Personal Access Token instead of password
- Or set up SSH keys for GitHub

### "Branch not found"
```bash
# Check current branch
git branch

# If on different branch, push to main
git push -u origin main
```

---
Replace `YOUR_USERNAME` with your actual GitHub username when running commands.
