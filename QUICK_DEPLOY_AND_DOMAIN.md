# Quick Deploy & GoDaddy Domain Setup

## Quick Steps Summary

### 1. Deploy to Vercel (2 minutes)

**Option A: Via Website (Easiest)**
1. Go to https://vercel.com
2. Sign up/Login (free)
3. Click "Add New Project"
4. Import GitHub repo OR use Vercel CLI (see below)

**Option B: Via CLI**
```bash
cd /Users/bhaeesma/Desktop/adnax
vercel login
vercel --prod
```

### 2. Add Domain in Vercel (1 minute)

1. Vercel Dashboard → Your Project → Settings → Domains
2. Enter your domain: `adnex.com` (or your domain)
3. Click "Add"
4. Copy the DNS values shown

### 3. Configure GoDaddy DNS (5 minutes)

1. Login to GoDaddy: https://dcc.godaddy.com
2. Go to: My Products → Your Domain → DNS
3. Add/Edit Records:

   **For Root Domain (adnex.com):**
   ```
   Type: A
   Name: @
   Value: [IP from Vercel - usually 76.76.21.21]
   TTL: 1 Hour
   ```

   **For www (www.adnex.com):**
   ```
   Type: CNAME
   Name: www
   Value: [cname.vercel-dns.com or value from Vercel]
   TTL: 1 Hour
   ```

4. Save all changes

### 4. Wait for DNS Propagation (1-24 hours)

- Usually works within 1-2 hours
- Check status: https://dnschecker.org
- Domain will be live once propagated

## What You'll Need

✅ GoDaddy account login
✅ Domain name (e.g., adnex.com)
✅ Vercel account (free)
✅ DNS values from Vercel (provided after adding domain)

## Important Notes

- Vercel provides free SSL certificate (automatic)
- Both www and root domain will work
- DNS changes can take 24-48 hours (usually faster)
- Remove old DNS records pointing to other servers

## Detailed Guide

See `GODADDY_DOMAIN_SETUP.md` for complete step-by-step instructions.

---

**Ready to deploy? Start with Step 1 above!**
