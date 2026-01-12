#!/bin/bash
# This script generates SVG placeholder images for equipment
# Run this script to create placeholder images until real images are added

# Function to create SVG placeholder
create_svg_placeholder() {
    local filename=$1
    local equipment_name=$2
    local category=$3
    
    cat > "$filename" << SVG
<svg xmlns="http://www.w3.org/2000/svg" width="3840" height="2160" viewBox="0 0 3840 2160">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2A2A2A;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1A1A1A;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="3840" height="2160" fill="url(#grad)"/>
  <rect x="920" y="880" width="2000" height="400" fill="#F2B705" opacity="0.1" rx="20"/>
  <text x="1920" y="1080" font-family="Arial, sans-serif" font-size="120" font-weight="bold" fill="#F2B705" text-anchor="middle" dominant-baseline="middle">$equipment_name</text>
  <text x="1920" y="1250" font-family="Arial, sans-serif" font-size="60" fill="#B3B3B3" text-anchor="middle" dominant-baseline="middle">$category</text>
  <text x="1920" y="1450" font-family="Arial, sans-serif" font-size="40" fill="#666666" text-anchor="middle" dominant-baseline="middle">4K Image Placeholder</text>
</svg>
SVG
    echo "Created: $filename"
}

# Create placeholders for all equipment
create_svg_placeholder "jcb-3dx-super.svg" "JCB 3DX Super" "Backhoe Loader"
create_svg_placeholder "cat-416f2.svg" "Caterpillar 416F2" "Backhoe Loader"
create_svg_placeholder "case-580n.svg" "Case 580N" "Backhoe Loader"
create_svg_placeholder "volvo-l120h.svg" "Volvo L120H" "Wheel Loader"
create_svg_placeholder "cat-950m.svg" "Caterpillar 950M" "Wheel Loader"
create_svg_placeholder "komatsu-wa380.svg" "Komatsu WA380-8" "Wheel Loader"
create_svg_placeholder "bobcat-s570.svg" "Bobcat S570" "Skid Steer Loader"
create_svg_placeholder "cat-259d3.svg" "Caterpillar 259D3" "Skid Steer Loader"
create_svg_placeholder "jcb-540-170.svg" "JCB 540-170" "Telehandler"
create_svg_placeholder "manitou-mlt735.svg" "Manitou MLT 735-120" "Telehandler"
create_svg_placeholder "cat-d6t.svg" "Caterpillar D6T" "Dozer"
create_svg_placeholder "jcb-457zx.svg" "JCB 457ZX" "Excavator"

echo "✅ All placeholder images created!"
echo "⚠️  Note: These are SVG placeholders. Replace with actual JPG images when available."
