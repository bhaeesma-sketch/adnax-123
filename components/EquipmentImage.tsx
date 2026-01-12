'use client';

import Image from 'next/image';
import { useState } from 'react';

interface EquipmentImageProps {
  src: string;
  alt: string;
  equipmentName: string;
  category: string;
}

export default function EquipmentImage({ src, alt, equipmentName, category }: EquipmentImageProps) {
  const [imageError, setImageError] = useState(false);

  // Generate SVG placeholder
  const generatePlaceholder = () => {
    const encodedName = encodeURIComponent(equipmentName);
    const encodedCategory = encodeURIComponent(category);
    return `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#2A2A2A;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1A1A1A;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#grad)"/>
        <rect x="200" y="220" width="400" height="100" fill="#F2B705" opacity="0.1" rx="10"/>
        <text x="400" y="270" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#F2B705" text-anchor="middle" dominant-baseline="middle">${encodedName}</text>
        <text x="400" y="330" font-family="Arial, sans-serif" font-size="18" fill="#B3B3B3" text-anchor="middle" dominant-baseline="middle">${encodedCategory}</text>
        <text x="400" y="380" font-family="Arial, sans-serif" font-size="14" fill="#666666" text-anchor="middle" dominant-baseline="middle">Image Coming Soon</text>
      </svg>
    `)}`;
  };

  if (imageError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A]">
        <Image
          src={generatePlaceholder()}
          alt={alt}
          width={800}
          height={600}
          className="object-cover w-full h-full"
          unoptimized
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
      quality={90}
      priority={false}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      onError={() => setImageError(true)}
    />
  );
}
