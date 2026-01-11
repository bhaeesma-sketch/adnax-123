# ADNEX Technical Documentation

## Technology Stack Overview

### Core Framework

**Next.js 16 (App Router)**
- React framework for production
- Server-side rendering and static generation
- Built-in routing and API routes
- Image optimization
- Font optimization
- TypeScript support

**Why Next.js:**
- Excellent performance out of the box
- SEO-friendly (important for B2B visibility)
- Easy deployment to Vercel
- Modern React features
- Great developer experience

### Language

**TypeScript**
- Type safety for React components
- Better IDE support
- Catch errors at compile time
- Improved code maintainability

### Styling

**Tailwind CSS v4**
- Utility-first CSS framework
- Custom design system integration
- Responsive design utilities
- Dark mode support (via custom colors)
- Small production bundle size

**Google Fonts:**
- Inter (body text)
- Poppins (headings)

### Component Architecture

**React 19**
- Functional components with hooks
- Client-side interactivity where needed
- Server components by default (Next.js App Router)

## Project Architecture

### File Structure

```
adnax/
├── app/                      # Next.js App Router
│   ├── (pages)/             # Route pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── Header.tsx           # Navigation
│   ├── Footer.tsx           # Footer
│   ├── WhatsAppFloat.tsx    # Floating button
│   └── EquipmentCard.tsx    # Equipment display
├── lib/                     # Utilities
│   └── whatsapp.ts          # WhatsApp integration
├── data/                    # Static data
│   └── equipment.ts         # Equipment catalogue
└── public/                  # Static assets
```

### Routing System

Next.js App Router uses file-based routing:
- `app/page.tsx` → `/`
- `app/about/page.tsx` → `/about`
- `app/equipment/page.tsx` → `/equipment`
- etc.

### Component Patterns

1. **Server Components (Default):**
   - Most pages are server components
   - Better performance
   - Direct database/API access (if needed)

2. **Client Components:**
   - Marked with `'use client'`
   - Used for interactivity (Header, EquipmentCard)
   - Required for useState, useEffect, event handlers

### State Management

- **Local State:** React useState for component-specific state
- **URL State:** Next.js router for filter state (category selection)
- **No Global State:** Simple app doesn't require Redux/Zustand

### Data Management

**Static Data:**
- Equipment data in `data/equipment.ts`
- TypeScript interfaces for type safety
- Easy to update and maintain

**Future Considerations:**
- Could migrate to CMS (Contentful, Strapi)
- Could add database (PostgreSQL, MongoDB)
- Could add API routes for dynamic data

## Design System Implementation

### Color System

Defined in `app/globals.css` using CSS custom properties:

```css
--charcoal-black: #0E0E0E
--industrial-yellow: #F2B705
--steel-gray: #2A2A2A
--concrete-light: #F5F5F5
--muted-gray: #B3B3B3
```

Tailwind CSS v4 uses `@theme inline` to map these to utility classes.

### Typography Scale

- Headings: Poppins (bold, 700 weight)
- Body: Inter (regular, 400 weight)
- Scales: text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl, text-6xl

### Spacing System

Tailwind's default spacing scale:
- Consistent padding/margin (p-4, p-6, p-8, etc.)
- Container max-widths for responsive design

## WhatsApp Integration

### Implementation

**File:** `lib/whatsapp.ts`

Functions:
- `generateWhatsAppUrl(message)`: Creates WhatsApp deep link
- `generateEquipmentEnquiryMessage(equipmentName)`: Pre-fills equipment enquiry
- `generateGeneralEnquiryMessage()`: General enquiry message

**Format:**
- URL: `https://wa.me/{number}?text={message}`
- Number format: Country code + number (no spaces/special chars)
- Message: URL-encoded

### Usage

1. Floating button: Always available, general enquiry
2. Equipment cards: Equipment-specific enquiry
3. CTA buttons: Context-specific messages

## Performance Optimizations

### Built-in (Next.js)

1. **Image Optimization:**
   - Next.js Image component
   - Automatic format optimization
   - Lazy loading
   - Responsive images

2. **Code Splitting:**
   - Automatic route-based splitting
   - Dynamic imports if needed

3. **Font Optimization:**
   - Google Fonts optimized loading
   - Font display optimization

### Custom Optimizations

1. **Static Generation:**
   - All pages are statically generated
   - Fast page loads
   - Good SEO

2. **Minimal JavaScript:**
   - Server components reduce client JS
   - Only interactive components on client

3. **CSS Optimization:**
   - Tailwind purges unused styles
   - Small CSS bundle

## SEO Considerations

### Implemented

1. **Metadata:**
   - Page titles and descriptions
   - Open Graph tags (can be added)
   - Structured data (can be added)

2. **Semantic HTML:**
   - Proper heading hierarchy
   - Semantic elements (header, footer, nav, main, section)

3. **Performance:**
   - Fast load times (Core Web Vitals)
   - Mobile-friendly (responsive design)

### Future Enhancements

1. Add sitemap.xml
2. Add robots.txt
3. Add structured data (JSON-LD)
4. Add Open Graph and Twitter Card metadata
5. Add canonical URLs

## Security Considerations

### Current Implementation

1. **No User Input:**
   - No forms requiring validation
   - No SQL injection risk (no database)
   - No XSS risk (no user-generated content)

2. **External Links:**
   - WhatsApp links open in new tab
   - `rel="noopener noreferrer"` on external links

### Future Considerations

If adding forms or user input:
1. Input validation
2. CSRF protection
3. Rate limiting
4. Sanitization

## Browser Support

### Modern Browsers

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Features Used

- CSS Grid
- Flexbox
- CSS Custom Properties
- ES6+ JavaScript
- React 19 features

No polyfills needed for modern browser support.

## Development Workflow

### Local Development

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

### Code Quality

- TypeScript for type safety
- ESLint for code quality
- Next.js built-in linting rules

### Version Control

- Git for version control
- Recommended: GitHub/GitLab/Bitbucket
- .gitignore included for Next.js

## Deployment Architecture

### Static Export (Optional)

Next.js can export static HTML:
```bash
# Add to next.config.ts:
output: 'export'
```

However, current setup uses standard Next.js (recommended for better features).

### Hosting Recommendations

1. **Vercel (Best):**
   - Zero configuration
   - Automatic deployments
   - Global CDN
   - Free tier

2. **Netlify:**
   - Similar to Vercel
   - Good alternative

3. **Self-Hosted:**
   - Full control
   - Requires server management
   - Node.js server required

## Future Scalability

### Current Limitations

- Static equipment data
- No user accounts
- No backend API
- No database

### Potential Enhancements

1. **CMS Integration:**
   - Contentful/Strapi for equipment management
   - Easy content updates

2. **Database:**
   - PostgreSQL/MongoDB for equipment data
   - Dynamic inventory management

3. **API Routes:**
   - Next.js API routes for backend logic
   - Equipment search/filter API
   - Enquiry submission API

4. **Admin Panel:**
   - Equipment management
   - Enquiry management
   - Analytics dashboard

5. **Additional Features:**
   - Equipment search
   - Comparison tool
   - PDF quotation generation
   - Email notifications

## Maintenance

### Regular Updates

1. **Dependencies:**
   ```bash
   npm update              # Update packages
   npm audit fix           # Security fixes
   ```

2. **Next.js Updates:**
   - Follow Next.js release notes
   - Test before updating major versions

3. **Content Updates:**
   - Update equipment data
   - Update page content
   - Update legal pages if needed

### Monitoring

1. **Performance:**
   - Vercel Analytics (if using Vercel)
   - Google PageSpeed Insights
   - Web Vitals

2. **Errors:**
   - Browser console
   - Server logs
   - Sentry (if added)

---

**Documentation Version:** 1.0  
**Last Updated:** {Current Date}
