# ADNEX - Heavy Equipment Trading Platform

A professional website + WhatsApp Business hybrid platform for heavy equipment trading, import & export services in Oman and the GCC region.

## Overview

ADNEX (Adnan + Nexus) is a B2B platform that combines a professional company website with direct WhatsApp Business communication. The website serves as a catalogue showcase, while all enquiries and transactions are routed through WhatsApp for personalized B2B service.

## Brand Context

**Brand:** ADNEX  
**Meaning:** Adnan + Nexus (connection, sourcing, execution)  
**Industry:** Heavy equipment trading, import & export  
**Market:** Oman & GCC  
**Audience:** Contractors, construction firms, machinery buyers  
**Tone:** Industrial, professional, trustworthy, export-focused

## Design System

### Color Palette

- **Primary:** Charcoal Black (#0E0E0E) - Background, headers, footer
- **Secondary:** Industrial Yellow (#F2B705) - CTA buttons, highlights
- **Neutral:** Steel Gray (#2A2A2A) - Cards, catalogue sections
- **Light:** Concrete Light (#F5F5F5) - Text backgrounds
- **Text:** White (#FFFFFF), Muted Gray (#B3B3B3)

### Typography

- **Headings:** Poppins (Google Fonts)
- **Body:** Inter (Google Fonts)

## Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Google Fonts (Inter, Poppins)
- **Deployment:** Vercel (recommended) or any Node.js hosting

## Project Structure

```
adnax/
├── app/                    # Next.js app router pages
│   ├── about/             # About ADNEX page
│   ├── contact/           # Contact page
│   ├── equipment/         # Equipment catalogue page
│   ├── how-it-works/      # How It Works page
│   ├── privacy/           # Privacy Policy page
│   ├── services/          # Import & Export Services page
│   ├── terms/             # Terms of Service page
│   ├── layout.tsx         # Root layout with Header, Footer, WhatsApp button
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles and design system
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── WhatsAppFloat.tsx  # Floating WhatsApp button
│   └── EquipmentCard.tsx  # Equipment card component
├── lib/                   # Utility functions
│   └── whatsapp.ts        # WhatsApp integration utilities
├── data/                  # Data files
│   └── equipment.ts       # Equipment catalogue data
└── public/                # Static assets
```

## Features

### Core Functionality

1. **Professional Website Pages:**
   - Home page with hero and key highlights
   - About ADNEX with company story and values
   - Equipment Catalogue with category filtering
   - Import & Export Services information
   - How It Works process explanation
   - Contact page with WhatsApp CTA
   - Privacy Policy and Terms of Service

2. **Equipment Catalogue:**
   - 5 categories: Backhoe Loaders, Wheel Loaders, Skid Steer Loaders, Telehandlers, Others
   - Category filtering
   - Equipment details (name, description, year, condition, availability)
   - "Enquire on WhatsApp" button on each item
   - No public pricing (discussed via WhatsApp)

3. **WhatsApp Integration:**
   - Floating WhatsApp button on all pages
   - Pre-filled enquiry messages
   - Equipment-specific enquiry messages
   - Direct WhatsApp Business link

### Hybrid Model

- Website serves as catalogue and information platform
- All enquiries route to WhatsApp Business
- No e-commerce checkout functionality
- Direct communication for all transactions

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- WhatsApp Business account with phone number

### Installation

1. Clone the repository or use the existing codebase
2. Install dependencies:

```bash
npm install
```

3. Configure WhatsApp Business number:

Edit `lib/whatsapp.ts` and update the `WHATSAPP_NUMBER` constant with your WhatsApp Business number (format: +968XXXXXXXXX for Oman).

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Setup

No environment variables are required for basic functionality. All configuration is in code files.

## Customization

### Adding Equipment

Edit `data/equipment.ts` to add, modify, or remove equipment items. Each item requires:

- `id`: Unique identifier
- `name`: Equipment name
- `category`: One of the defined categories
- `description`: Factual description
- `year`: Optional year of manufacture
- `condition`: New, Used, or Refurbished
- `availability`: Available, In Stock, or Subject to Confirmation
- `image`: Image path (add images to `public/equipment/`)

### Updating Content

All page content is in the respective page files in the `app/` directory. Edit these files to update:

- Company information
- Service descriptions
- Process explanations
- Contact information

### Brand Colors

Colors are defined in `app/globals.css` using CSS custom properties. Update the color values to match your brand if needed.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub/GitLab/Bitbucket
2. Import project in Vercel
3. Deploy (automatic builds on push)

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform
- Self-hosted with Node.js

### Build Command

```bash
npm run build
```

### Start Command (Production)

```bash
npm start
```

## WhatsApp Business Setup

1. **Get WhatsApp Business Account:**
   - Use WhatsApp Business app or WhatsApp Business API
   - Obtain your WhatsApp Business phone number

2. **Update WhatsApp Number:**
   - Edit `lib/whatsapp.ts`
   - Replace `WHATSAPP_NUMBER` with your number (format: +968XXXXXXXXX)

3. **Test Integration:**
   - Click any "Enquire on WhatsApp" button
   - Verify the pre-filled message format
   - Ensure WhatsApp opens with correct number

## Important Notes

- **No Pricing:** Pricing is not displayed on the website and is discussed via WhatsApp
- **Availability:** Equipment availability is subject to confirmation
- **No Guarantees:** No price or delivery guarantees are made on the website
- **B2B Focus:** Platform is designed for B2B transactions, not consumer e-commerce
- **WhatsApp-First:** All transactions are finalized through WhatsApp communication

## License

Private - ADNEX

## Support

For technical support or questions about this platform, contact ADNEX via WhatsApp Business.

---

**Built for ADNEX - Connecting buyers with quality heavy equipment across Oman and the GCC region.**