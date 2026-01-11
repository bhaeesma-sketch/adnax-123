# ADNEX Quick Start Guide

Get your ADNEX platform up and running in minutes.

## Prerequisites

- Node.js 18+ installed
- WhatsApp Business account with phone number
- Code editor (VS Code recommended)

## Setup Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure WhatsApp Number

Edit `lib/whatsapp.ts`:

```typescript
export const WHATSAPP_NUMBER = '+968XXXXXXXXX'; // Replace with your WhatsApp Business number
```

**Format:** +[country code][number] (no spaces, no dashes)

Example for Oman: `+96891234567`

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Next Steps

### Update Content

1. **Equipment Data:**
   - Edit `data/equipment.ts`
   - Add your equipment inventory
   - Add images to `public/equipment/`

2. **Page Content:**
   - Update company information in `app/about/page.tsx`
   - Update services in `app/services/page.tsx`
   - Review all pages and customize content

3. **Legal Pages:**
   - Review `app/privacy/page.tsx`
   - Review `app/terms/page.tsx`
   - Update with actual legal content

### Add Equipment Images

1. Create `public/equipment/` directory (if not exists)
2. Add equipment images
3. Update image paths in `data/equipment.ts`

Recommended image specs:
- Format: JPG or WebP
- Size: 800x600px or similar
- File size: Under 500KB

### Test WhatsApp Integration

1. Click any "Enquire on WhatsApp" button
2. Verify WhatsApp opens with correct number
3. Verify pre-filled message appears correctly
4. Test on mobile device (required for WhatsApp Web)

### Build for Production

```bash
npm run build
npm start
```

## Deployment

### Quick Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Click "Deploy"

See `DEPLOYMENT.md` for detailed deployment options.

## Key Files to Customize

| File | Purpose |
|------|---------|
| `lib/whatsapp.ts` | WhatsApp Business number |
| `data/equipment.ts` | Equipment catalogue data |
| `app/about/page.tsx` | Company information |
| `app/services/page.tsx` | Services description |
| `app/contact/page.tsx` | Contact information |
| `app/privacy/page.tsx` | Privacy policy |
| `app/terms/page.tsx` | Terms of service |
| `app/globals.css` | Brand colors (if needed) |

## Common Tasks

### Add New Equipment

1. Open `data/equipment.ts`
2. Add new equipment object to `equipment` array
3. Add image to `public/equipment/`
4. Update image path in equipment object

### Change Brand Colors

1. Open `app/globals.css`
2. Update CSS custom property values
3. Colors are used throughout the site automatically

### Update WhatsApp Message

1. Open `lib/whatsapp.ts`
2. Edit message functions
3. Messages are pre-filled in WhatsApp links

## Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### WhatsApp Links Not Working

- Verify phone number format: +[country code][number]
- Remove spaces and special characters
- Test on mobile device
- Ensure number includes country code

### Styling Issues

- Clear browser cache
- Check `app/globals.css` for custom properties
- Verify Tailwind classes are correct

### Images Not Showing

- Check image paths in `data/equipment.ts`
- Verify images exist in `public/equipment/`
- Use relative paths starting with `/equipment/`

## Need Help?

- Check `README.md` for detailed documentation
- Review `DEPLOYMENT.md` for deployment help
- See `TECH_STACK.md` for technical details
- Review `CONTENT_GUIDE.md` for content guidelines

## Ready to Launch?

1. ✅ Update WhatsApp number
2. ✅ Add equipment data
3. ✅ Customize page content
4. ✅ Add equipment images
5. ✅ Review legal pages
6. ✅ Test all functionality
7. ✅ Deploy to production

---

**Welcome to ADNEX!** 🚀
