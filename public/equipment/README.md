# Equipment Images Directory

## Image Specifications

### Recommended Specifications for 4K Images:
- **Resolution:** 3840x2160 (4K UHD) or higher
- **Aspect Ratio:** 16:9 (recommended) or 4:3
- **Format:** JPG (recommended) or WebP for better compression
- **File Size:** Optimize to under 1MB per image for web performance
- **Quality:** High quality, professional product photos

### For Catalogue Display:
- Images are automatically optimized by Next.js
- Display size: 400x300px (cards) - Next.js will serve appropriate size
- Original 4K images stored here for future use

## Image Naming Convention

Images should be named exactly as referenced in `data/equipment.ts`:

### Backhoe Loaders:
- `jcb-3dx-super.jpg`
- `cat-416f2.jpg`
- `case-580n.jpg`

### Wheel Loaders:
- `volvo-l120h.jpg`
- `cat-950m.jpg`
- `komatsu-wa380.jpg`

### Skid Steer Loaders:
- `bobcat-s570.jpg`
- `cat-259d3.jpg`

### Telehandlers:
- `jcb-540-170.jpg`
- `manitou-mlt735.jpg`

### Others:
- `cat-d6t.jpg`
- `jcb-457zx.jpg`

## How to Add Images

1. **Get your 4K equipment images** (from manufacturer websites, stock photos, or your own photos)
2. **Optimize images:**
   - Use tools like TinyPNG, ImageOptim, or Photoshop
   - Keep quality high but reduce file size
   - Recommended: 80-90% quality for JPG
3. **Rename files** to match the exact names listed above
4. **Place files** in this directory: `/public/equipment/`
5. **Refresh the website** - images will appear automatically

## Image Sources (Free/Stock):

### Recommended Sources:
- **Unsplash:** https://unsplash.com/s/photos/construction-equipment
- **Pexels:** https://www.pexels.com/search/construction%20equipment/
- **Pixabay:** https://pixabay.com/images/search/construction%20equipment/
- **Manufacturer websites:** JCB, Caterpillar, Volvo, etc. (check usage rights)

### Search Terms:
- "backhoe loader"
- "wheel loader"
- "excavator"
- "construction equipment"
- "heavy machinery"

## Tips:

1. **Consistent Style:** Use images with similar lighting/background for professional look
2. **High Quality:** Ensure images are clear and show equipment details
3. **Professional:** Use equipment on job sites or clean backgrounds
4. **Optimization:** Compress images before uploading to improve page load speed
5. **Fallback:** If image doesn't exist, a placeholder will be shown automatically

## Current Status:

Place your 4K equipment images in this directory with the exact filenames listed above.
