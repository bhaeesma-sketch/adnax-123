# GoDaddy Domain Setup Guide for ADNEX

This guide explains how to connect your GoDaddy domain to your ADNEX website after deployment.

## Prerequisites

1. ✅ ADNEX website deployed to Vercel (or another hosting platform)
2. ✅ GoDaddy domain account and domain name
3. ✅ Access to GoDaddy DNS management

## Step 1: Deploy Your Site to Vercel

### Option A: Deploy via Vercel Website (Recommended)

1. **Go to:** https://vercel.com
2. **Sign up/Login** with GitHub (free account)
3. **Click:** "Add New Project"
4. **Import your repository:**
   - If code is on GitHub: Select your repository
   - If not: Upload via GitHub first, or use Vercel CLI (Option B)
5. **Configure:**
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. **Click:** "Deploy"
7. **Wait for deployment** (1-2 minutes)
8. **Note your Vercel URL:** `your-project-name.vercel.app`

### Option B: Deploy via Vercel CLI

```bash
cd /Users/bhaeesma/Desktop/adnax
vercel login
vercel --prod
```

After deployment, Vercel will provide you with:
- **Deployment URL:** `your-project-name.vercel.app`
- **Project settings** for domain configuration

## Step 2: Add Domain to Vercel

1. **Go to Vercel Dashboard:**
   - Navigate to your project
   - Click on **"Settings"** tab
   - Click on **"Domains"** in the left sidebar

2. **Add Your Domain:**
   - Enter your domain (e.g., `adnex.com` or `www.adnex.com`)
   - Click **"Add"**
   - Vercel will show you DNS configuration instructions

3. **Vercel will provide:**
   - **A Record** or **CNAME Record** configuration
   - **Name servers** (if using Vercel nameservers)
   - **SSL Certificate** (automatic, free)

## Step 3: Configure DNS in GoDaddy

### Method 1: Using A Records (Recommended for root domain)

1. **Login to GoDaddy:**
   - Go to https://dcc.godaddy.com
   - Login with your account

2. **Access DNS Management:**
   - Click on **"My Products"**
   - Find your domain
   - Click on **"DNS"** or **"Manage DNS"**

3. **Add/Edit A Records:**
   - Find existing A records for your domain (if any)
   - Vercel will provide you with IP addresses (usually 2-4 addresses)
   - **For root domain (adnex.com):**
     - **Type:** A
     - **Name:** @ (or leave blank)
     - **Value:** Vercel IP address (e.g., `76.76.21.21`)
     - **TTL:** 3600 (or 1 Hour)
     - Click **"Save"**
   - **Add multiple A records** with different IP addresses if Vercel provides multiple

4. **Add CNAME for www (www.adnex.com):**
   - **Type:** CNAME
   - **Name:** www
   - **Value:** `cname.vercel-dns.com` (or value provided by Vercel)
   - **TTL:** 3600
   - Click **"Save"**

### Method 2: Using CNAME (For subdomains)

1. **In GoDaddy DNS Management:**
   - **Type:** CNAME
   - **Name:** www (or subdomain name)
   - **Value:** `cname.vercel-dns.com` (or value from Vercel)
   - **TTL:** 3600
   - Click **"Save"**

### Method 3: Using Vercel Nameservers (Alternative)

1. **Get Nameservers from Vercel:**
   - In Vercel Domain settings
   - Copy the nameserver addresses (usually 2-4 addresses)

2. **Update Nameservers in GoDaddy:**
   - In GoDaddy, go to **"DNS"** → **"Nameservers"**
   - Click **"Change"**
   - Select **"Custom"**
   - Enter Vercel nameservers (one per line)
   - Click **"Save"**
   - Wait 24-48 hours for propagation

## Step 4: Verify Domain Configuration

1. **In Vercel Dashboard:**
   - Go to **Settings** → **Domains**
   - Check domain status
   - Status should change from "Pending" to "Valid Configuration"

2. **DNS Propagation:**
   - DNS changes can take 24-48 hours to propagate globally
   - Usually works within 1-2 hours
   - Check status: https://dnschecker.org

3. **Test Your Domain:**
   - Visit your domain in browser
   - Should redirect to your ADNEX website
   - SSL certificate should be active (HTTPS)

## Common DNS Records for Vercel

### For Root Domain (adnex.com):
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

### For www (www.adnex.com):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**Note:** Vercel provides specific values in their dashboard. Use the exact values shown in your Vercel project settings.

## Step-by-Step: GoDaddy DNS Configuration

### Detailed GoDaddy Steps:

1. **Login to GoDaddy:**
   ```
   https://dcc.godaddy.com
   ```

2. **Navigate to DNS:**
   - Click "My Products"
   - Find your domain
   - Click "DNS" or "Manage DNS"

3. **Edit/Create Records:**
   - Scroll to "Records" section
   - Find existing A records (delete if pointing to old server)
   - Click "Add" to create new records

4. **Add A Record for Root Domain:**
   ```
   Type: A
   Name: @
   Value: [IP from Vercel]
   TTL: 1 Hour
   ```

5. **Add CNAME for www:**
   ```
   Type: CNAME
   Name: www
   Value: [cname from Vercel]
   TTL: 1 Hour
   ```

6. **Save All Changes:**
   - Click "Save" after each record
   - Wait for DNS propagation

## Troubleshooting

### Domain Not Connecting?

1. **Check DNS Propagation:**
   - Use https://dnschecker.org
   - Enter your domain
   - Check if A/CNAME records are propagated globally

2. **Verify Vercel Configuration:**
   - Go to Vercel Dashboard → Settings → Domains
   - Ensure domain is added correctly
   - Check for error messages

3. **Clear DNS Cache:**
   - On your computer: `sudo dscacheutil -flushcache` (Mac) or `ipconfig /flushdns` (Windows)
   - Or wait for cache to expire

4. **Check GoDaddy Records:**
   - Ensure no conflicting records
   - Remove old A/CNAME records pointing elsewhere
   - Verify TTL is reasonable (3600 = 1 hour)

### SSL Certificate Issues?

- Vercel provides free SSL certificates automatically
- Takes 1-24 hours to activate after domain is connected
- Check SSL status in Vercel Dashboard → Settings → Domains

### www vs Root Domain?

- Add both: A record for root (adnex.com) and CNAME for www (www.adnex.com)
- Vercel can handle both automatically
- Configure redirect in Vercel if needed (www → root or root → www)

## Quick Reference: GoDaddy DNS Record Types

| Type | Purpose | Example |
|------|---------|---------|
| A | Points to IP address | Root domain (adnex.com) |
| CNAME | Points to another domain | www (www.adnex.com) |
| MX | Email routing | (Not needed for website) |
| TXT | Text records | (For verification, if needed) |

## After Domain is Connected

1. ✅ Your site will be accessible at your domain
2. ✅ HTTPS/SSL certificate will be active
3. ✅ Both www and root domain will work
4. ✅ Update any internal links if needed
5. ✅ Update WhatsApp links if domain-specific

## Need Help?

- **Vercel Support:** https://vercel.com/support
- **GoDaddy Support:** https://www.godaddy.com/help
- **DNS Checker:** https://dnschecker.org
- **Vercel DNS Docs:** https://vercel.com/docs/concepts/projects/domains

---

**Domain Setup Complete!** Your ADNEX website will be live at your custom domain once DNS propagates.
