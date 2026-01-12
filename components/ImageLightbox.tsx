'use client';

import { useEffect } from 'react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  alt: string;
}

export default function ImageLightbox({ isOpen, onClose, imageSrc, alt }: ImageLightboxProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-[#F2B705] transition-colors duration-300 p-2 bg-black/50 rounded-full hover:bg-black/70 backdrop-blur-sm"
          aria-label="Close lightbox"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image */}
        <img
          src={imageSrc}
          alt={alt}
          className="max-w-full max-h-full object-contain rounded-lg animate-scaleIn"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}
