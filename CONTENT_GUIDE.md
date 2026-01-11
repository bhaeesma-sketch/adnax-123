# ADNEX Content Guide

This guide explains the content strategy, tone, and how to update content across the ADNEX platform.

## Brand Tone & Voice

### Core Principles

- **Industrial:** Professional, no-nonsense language
- **Trustworthy:** Factual, transparent, no hype
- **Professional:** B2B-focused, business-oriented
- **Export-Focused:** Emphasizes import/export capabilities
- **No Fake Claims:** Honest about availability and limitations

### Writing Guidelines

✅ **Do:**
- Use clear, direct language
- Be factual about equipment specifications
- Clearly state limitations (subject to confirmation, etc.)
- Use professional terminology
- Keep sentences concise
- Focus on value propositions

❌ **Avoid:**
- Hype language ("amazing", "best ever", "guaranteed")
- Fake guarantees or claims
- Over-promising
- Consumer marketing language
- Emotional appeals
- Vague statements

## Page Content Overview

### Home Page (`app/page.tsx`)

**Purpose:** First impression, key value propositions

**Key Sections:**
1. Hero: Main headline + value proposition
2. Key Highlights: 3 core benefits (GCC Focus, Verified Equipment, Direct Communication)
3. Equipment Preview: Category links
4. CTA: WhatsApp contact

**Update Locations:**
- Hero headline and description
- Key highlight cards (3 benefits)
- CTA messaging

### About Page (`app/about/page.tsx`)

**Purpose:** Company story, values, market focus

**Key Sections:**
1. Company Story: ADNEX origin and purpose
2. Values: 4 core values (Transparency, Professionalism, Reliability, Export Focus)
3. Market Focus: Target audience and regions
4. CTA: WhatsApp contact

**Update Locations:**
- Company story narrative
- Values descriptions
- Market focus details

### Equipment Catalogue (`app/equipment/page.tsx`)

**Purpose:** Showcase equipment inventory

**Content Source:** `data/equipment.ts`

**Update Process:**
1. Edit `data/equipment.ts`
2. Add/modify equipment objects
3. Update image paths in `public/equipment/`

**Equipment Data Structure:**
```typescript
{
  id: string,              // Unique identifier
  name: string,            // Equipment name (e.g., "JCB 3DX Super")
  category: string,        // One of: Backhoe Loaders, Wheel Loaders, etc.
  description: string,     // Factual description
  year: number,            // Optional year
  condition: string,       // "New", "Used", "Refurbished"
  availability: string,    // "Available", "In Stock", "Subject to Confirmation"
  image: string            // Path to image
}
```

### Import & Export Services (`app/services/page.tsx`)

**Purpose:** Explain import/export capabilities

**Key Sections:**
1. Services Overview
2. Service Details (4 services)
3. Process (4 steps)
4. Service Coverage (GCC countries)
5. CTA

**Update Locations:**
- Service descriptions
- Process steps
- Coverage areas

### How It Works (`app/how-it-works/page.tsx`)

**Purpose:** Explain the enquiry process

**Key Sections:**
1. 4-Step Process
2. Key Points (No E-commerce, WhatsApp-First)
3. Important Notes (limitations, disclaimers)
4. CTA

**Update Locations:**
- Process steps
- Important notes and disclaimers

### Contact Page (`app/contact/page.tsx`)

**Purpose:** Primary contact point

**Key Sections:**
1. Primary WhatsApp CTA
2. Contact Information
3. Enquiry Types
4. Quick Links

**Update Locations:**
- Contact information
- Business hours
- Enquiry types list

### Legal Pages

**Privacy Policy (`app/privacy/page.tsx`):**
- Update with actual privacy practices
- Review compliance requirements
- Update contact information

**Terms of Service (`app/terms/page.tsx`):**
- Update with actual terms
- Review legal requirements for Oman/GCC
- Update limitations and disclaimers

## Content Update Workflow

### Equipment Updates

1. **Add New Equipment:**
   ```typescript
   // In data/equipment.ts
   {
     id: 'new-001',
     name: 'Equipment Name',
     category: 'Backhoe Loaders', // or other category
     description: 'Factual description...',
     year: 2024,
     condition: 'Used',
     availability: 'Available',
     image: '/equipment/filename.jpg'
   }
   ```

2. **Add Equipment Images:**
   - Save images to `public/equipment/`
   - Use descriptive filenames
   - Recommended format: WebP or JPG
   - Recommended size: 800x600px or similar

3. **Update Categories:**
   - Current categories: Backhoe Loaders, Wheel Loaders, Skid Steer Loaders, Telehandlers, Others
   - To add new category: Update `EquipmentCategory` type in `data/equipment.ts`

### Page Content Updates

1. **Text Updates:**
   - Open relevant page file in `app/` directory
   - Update text content directly in JSX
   - Maintain HTML structure

2. **Structural Changes:**
   - Modify JSX structure as needed
   - Maintain responsive classes
   - Test on mobile and desktop

3. **Styling Updates:**
   - Colors: Update `app/globals.css`
   - Component styles: Use Tailwind classes
   - Custom styles: Add to `globals.css`

## WhatsApp Messages

### Message Templates

**General Enquiry:**
```
Hello ADNEX, I would like to inquire about your heavy equipment and services.
```

**Equipment-Specific Enquiry:**
```
Hello ADNEX, I'm interested in [Equipment Name]. Please share details.
```

**Update Location:** `lib/whatsapp.ts`

**Update Process:**
1. Edit message functions in `lib/whatsapp.ts`
2. Keep messages concise and professional
3. Test WhatsApp links after updates

## SEO Content

### Meta Descriptions

**Current:** Defined in `app/layout.tsx` and individual pages

**Update:** Modify metadata objects in page files

### Keywords (Oman/GCC Focus)

- Heavy equipment
- Construction machinery
- Oman
- GCC
- Import export
- Backhoe loaders
- Wheel loaders
- Equipment trading

### Content Optimization Tips

1. **Equipment Descriptions:**
   - Include relevant keywords naturally
   - Be specific about specifications
   - Mention use cases

2. **Service Descriptions:**
   - Highlight GCC/Oman focus
   - Mention import/export capabilities
   - Include regional keywords

## Content Review Checklist

Before publishing updates:

- [ ] Spell check all text
- [ ] Verify equipment specifications are accurate
- [ ] Check WhatsApp links work correctly
- [ ] Review disclaimers and limitations
- [ ] Ensure no fake claims or guarantees
- [ ] Verify contact information
- [ ] Test all CTAs
- [ ] Check mobile responsiveness
- [ ] Review legal page content

## Content Calendar Suggestions

### Regular Updates

- **Equipment Catalogue:** Update as inventory changes
- **Availability Status:** Update based on current stock
- **Service Information:** Update as services evolve

### Seasonal Considerations

- None required (B2B focus, no seasonal marketing)

### Regional Considerations

- Highlight GCC-specific information
- Use Oman as primary reference point
- Mention GCC-wide coverage

## Translation Considerations

### Current Language: English

**Potential Future Languages:**
- Arabic (for GCC market)
- Would require separate pages or i18n setup

### Arabic Content Notes

If adding Arabic:
- RTL (right-to-left) layout required
- Font changes needed
- Cultural adaptation of content

## Content Approval Process

### Recommended Workflow

1. **Draft:** Create/update content
2. **Review:** Technical review (formatting, links)
3. **Legal Review:** For legal pages and disclaimers
4. **Final Approval:** Business owner approval
5. **Publish:** Deploy to production

### Key Approvers

- Business owner (Adnan/ADNEX)
- Legal advisor (for legal pages)
- Technical lead (for functionality)

---

**Last Updated:** {Current Date}
