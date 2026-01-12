# Guide: Adding 4K Equipment Images to ADNEX Catalogue

## Quick Steps

1. **Get 4K images** of the equipment
2. **Optimize images** (compress to <1MB while maintaining quality)
3. **Rename files** to match equipment names
4. **Place in `/public/equipment/` directory**
5. **Done!** Images will appear automatically

## Detailed Instructions

### Step 1: Prepare Your Images

**Image Requirements:**
- Resolution: 4K (3840x2160) or higher
- Format: JPG or WebP
- Size: Optimize to under 1MB per image
- Quality: High quality, professional photos

### Step 2: Required Image Files

You need these 12 image files (one for each equipment item):

#### Backhoe Loaders (3 images):
1. `jcb-3dx-super.jpg` - JCB 3DX Super
2. `cat-416f2.jpg` - Caterpillar 416F2
3. `case-580n.jpg` - Case 580N

#### Wheel Loaders (3 images):
4. `volvo-l120h.jpg` - Volvo L120H
5. `cat-950m.jpg` - Caterpillar 950M
6. `komatsu-wa380.jpg` - Komatsu WA380-8

#### Skid Steer Loaders (2 images):
7. `bobcat-s570.jpg` - Bobcat S570
8. `cat-259d3.jpg` - Caterpillar 259D3

#### Telehandlers (2 images):
9. `jcb-540-170.jpg` - JCB 540-170
10. `manitou-mlt735.jpg` - Manitou MLT 735-120

#### Others (2 images):
11. `cat-d6t.jpg` - Caterpillar D6T Dozer
12. `jcb-457zx.jpg` - JCB 457ZX Wheeled Excavator

### Step 3: Image Optimization

**Before adding images, optimize them:**

**Option A: Online Tools (Easiest)**
1. Go to https://tinypng.com or https://imageoptim.com
2. Upload your 4K images
3. Download optimized versions
4. Use the optimized files

**Option B: Photoshop/Image Editing Software**
- Export as JPG with 80-90% quality
- Adjust image size if needed
- Save optimized versions

**Option C: Command Line (macOS/Linux)**
```bash
# Install imagemagick if needed: brew install imagemagick
# Optimize an image:
convert input.jpg -quality 85 -resize 3840x2160 output.jpg
```

### Step 4: Add Images to Project

1. **Navigate to the equipment directory:**
   ```bash
   cd /Users/bhaeesma/Desktop/adnax/public/equipment
   ```

2. **Copy your optimized images** to this directory

3. **Verify filenames** match exactly (case-sensitive!)

### Step 5: Test Images

1. **Start development server** (if not running):
   ```bash
   npm run dev
   ```

2. **Visit:** http://localhost:3000/equipment

3. **Check:** Images should display automatically

## Image Sources

### Free Stock Photos:

1. **Unsplash:**
   - https://unsplash.com/s/photos/backhoe-loader
   - https://unsplash.com/s/photos/wheel-loader
   - https://unsplash.com/s/photos/excavator

2. **Pexels:**
   - https://www.pexels.com/search/construction%20equipment/

3. **Pixabay:**
   - https://pixabay.com/images/search/construction%20equipment/

### Manufacturer Websites:

- **JCB:** https://www.jcb.com
- **Caterpillar:** https://www.cat.com
- **Volvo CE:** https://www.volvoce.com
- **Komatsu:** https://www.komatsu.com
- **Case:** https://www.casece.com
- **Bobcat:** https://www.bobcat.com
- **Manitou:** https://www.manitou.com

*Note: Check usage rights before using manufacturer images*

## Next.js Image Optimization

The website automatically:
- ✅ Serves optimized images (smaller file sizes)
- ✅ Generates multiple sizes for different screens
- ✅ Lazy loads images (loads as you scroll)
- ✅ Uses modern formats (WebP when supported)

Your 4K images will be automatically optimized for web performance!

## Troubleshooting

### Images Not Showing?
- Check filenames match exactly (including extension: .jpg not .jpeg)
- Check file is in `/public/equipment/` directory
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check browser console for errors

### Images Too Large?
- Use optimization tools (TinyPNG, ImageOptim)
- Reduce quality to 80-85%
- Consider using WebP format

### Need Different Equipment?
- Update `data/equipment.ts` to add/change equipment
- Add corresponding images with matching names
- Refresh the website

## Quick Reference

**Directory:** `/public/equipment/`
**Format:** JPG or WebP
**Resolution:** 4K (3840x2160) recommended
**Size:** Under 1MB per image (optimized)
**Naming:** Must match exactly as in `data/equipment.ts`

---

**Ready to add images?** Place your optimized 4K equipment images in `/public/equipment/` with the exact filenames listed above!
