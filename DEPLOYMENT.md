# ADNEX Deployment Guide

This guide covers deployment options and requirements for the ADNEX platform.

## Pre-Deployment Checklist

- [ ] Update WhatsApp Business number in `lib/whatsapp.ts`
- [ ] Review and update all content on pages (About, Services, etc.)
- [ ] Add real equipment images to `public/equipment/` directory
- [ ] Update equipment data in `data/equipment.ts` with real inventory
- [ ] Review Privacy Policy and Terms of Service content
- [ ] Test WhatsApp integration on mobile and desktop
- [ ] Test all pages and navigation
- [ ] Verify mobile responsiveness
- [ ] Check all links and CTAs

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Best for:** Quick deployment, automatic builds, global CDN

1. **Create Vercel Account:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub/GitLab/Bitbucket

2. **Deploy:**
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Next.js
   - Click "Deploy"

3. **Configure:**
   - No environment variables needed for basic setup
   - Custom domain: Add in Vercel project settings

4. **Automatic Deployments:**
   - Every push to main branch triggers deployment
   - Preview deployments for pull requests

**Vercel Advantages:**
- Free tier for personal/small projects
- Automatic HTTPS
- Global CDN
- Zero configuration
- Instant deployments

### Option 2: Netlify

**Best for:** Alternative to Vercel, similar ease of use

1. **Create Netlify Account:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub/GitLab/Bitbucket

2. **Deploy:**
   - Click "New site from Git"
   - Connect repository
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Configure:**
   - No environment variables needed
   - Custom domain in Domain settings

### Option 3: Self-Hosted (Node.js Server)

**Best for:** Full control, existing server infrastructure

1. **Server Requirements:**
   - Node.js 18+ installed
   - npm or yarn
   - 512MB+ RAM (1GB recommended)
   - 1GB+ disk space

2. **Build Steps:**
   ```bash
   # Clone repository
   git clone <repository-url>
   cd adnax
   
   # Install dependencies
   npm install
   
   # Build production bundle
   npm run build
   
   # Start production server
   npm start
   ```

3. **Process Management (PM2):**
   ```bash
   # Install PM2
   npm install -g pm2
   
   # Start application
   pm2 start npm --name "adnex" -- start
   
   # Save PM2 configuration
   pm2 save
   pm2 startup
   ```

4. **Reverse Proxy (Nginx):**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **SSL Certificate (Let's Encrypt):**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

### Option 4: Docker

**Best for:** Containerized deployments, Kubernetes, cloud platforms

1. **Create Dockerfile:**
   ```dockerfile
   FROM node:18-alpine AS base
   
   # Install dependencies only when needed
   FROM base AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app
   COPY package.json package-lock.json ./
   RUN npm ci
   
   # Rebuild the source code only when needed
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build
   
   # Production image, copy all the files and run next
   FROM base AS runner
   WORKDIR /app
   ENV NODE_ENV production
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
   USER nextjs
   EXPOSE 3000
   ENV PORT 3000
   CMD ["node", "server.js"]
   ```

2. **Build and Run:**
   ```bash
   docker build -t adnex .
   docker run -p 3000:3000 adnex
   ```

## Post-Deployment Steps

1. **Verify Deployment:**
   - Visit your domain
   - Test all pages
   - Check mobile responsiveness
   - Test WhatsApp integration

2. **Update WhatsApp Number:**
   - Edit `lib/whatsapp.ts` if not done before deployment
   - Redeploy if needed

3. **Add Analytics (Optional):**
   - Google Analytics
   - Vercel Analytics (if using Vercel)
   - Plausible Analytics

4. **SEO Setup:**
   - Update `app/layout.tsx` metadata
   - Add Open Graph tags
   - Submit sitemap to search engines

5. **Monitor Performance:**
   - Use Vercel Analytics or similar
   - Monitor Core Web Vitals
   - Check error logs

## Environment-Specific Configuration

Currently, no environment variables are required. If you need to add them:

1. Create `.env.local` for local development
2. Add environment variables in hosting platform
3. Access via `process.env.VARIABLE_NAME`

Example use cases:
- API keys
- Database connections
- Third-party service credentials

## Custom Domain Setup

### Vercel/Netlify:
1. Go to Domain settings in project dashboard
2. Add custom domain
3. Follow DNS configuration instructions
4. SSL certificate is automatic

### Self-Hosted:
1. Point domain A record to server IP
2. Configure Nginx/Apache virtual host
3. Install SSL certificate (Let's Encrypt)

## Performance Optimization

1. **Image Optimization:**
   - Use Next.js Image component (already implemented)
   - Compress images before upload
   - Use WebP format when possible

2. **Caching:**
   - Vercel/Netlify: Automatic
   - Self-hosted: Configure Nginx caching

3. **CDN:**
   - Vercel/Netlify: Included
   - Self-hosted: Consider Cloudflare

## Monitoring & Maintenance

1. **Error Monitoring:**
   - Sentry (optional)
   - Vercel/Netlify built-in error tracking

2. **Uptime Monitoring:**
   - UptimeRobot
   - Pingdom
   - StatusCake

3. **Regular Updates:**
   - Update dependencies: `npm update`
   - Security patches: `npm audit fix`
   - Next.js updates

## Troubleshooting

### Build Failures:
- Check Node.js version (18+)
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### WhatsApp Links Not Working:
- Verify phone number format: +[country code][number]
- Test on mobile device (desktop requires WhatsApp Desktop)
- Check number has no spaces or special characters

### Styling Issues:
- Clear browser cache
- Check Tailwind CSS compilation
- Verify `globals.css` is imported in layout

## Support

For deployment issues:
1. Check Next.js deployment documentation
2. Review hosting platform documentation
3. Contact ADNEX technical support via WhatsApp

---

**Last Updated:** {Current Date}
