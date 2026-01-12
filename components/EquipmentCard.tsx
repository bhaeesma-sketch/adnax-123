'use client';

import { useState } from 'react';
import { Equipment } from '@/data/equipment';
import { generateWhatsAppUrl, generateEquipmentEnquiryMessage } from '@/lib/whatsapp';
import EquipmentImage from './EquipmentImage';
import ImageLightbox from './ImageLightbox';
import AnimatedSection from './AnimatedSection';

interface EquipmentCardProps {
  equipment: Equipment;
  index?: number;
}

export default function EquipmentCard({ equipment, index = 0 }: EquipmentCardProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleEnquire = () => {
    const message = generateEquipmentEnquiryMessage(equipment.name);
    const url = generateWhatsAppUrl(message);
    window.open(url, '_blank');
  };

  const handleImageClick = () => {
    setIsLightboxOpen(true);
  };

  return (
    <>
      <AnimatedSection direction="up" delay={index * 100} className="h-full">
        <div className="bg-[#2A2A2A] rounded-lg overflow-hidden premium-card-hover border border-[#2A2A2A] h-full flex flex-col">
          {/* Equipment Image - Optimized for 4K source images */}
          <div 
            className="relative w-full h-64 bg-[#1A1A1A] flex items-center justify-center overflow-hidden cursor-pointer group"
            onClick={handleImageClick}
          >
            <EquipmentImage
              src={equipment.image}
              alt={`${equipment.name} - ${equipment.category}`}
              equipmentName={equipment.name}
              category={equipment.category}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
            <div className="absolute top-4 right-4 z-10">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold transition-transform duration-300 group-hover:scale-110 ${
                equipment.condition === 'New'
                  ? 'bg-green-600 text-white'
                  : equipment.condition === 'Used'
                  ? 'bg-[#F2B705] text-[#0E0E0E]'
                  : 'bg-blue-600 text-white'
              }`}>
                {equipment.condition}
              </span>
            </div>
          </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 font-heading">
          {equipment.name}
        </h3>
        
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-xs text-[#B3B3B3] bg-[#1A1A1A] px-2 py-1 rounded">
            {equipment.category}
          </span>
          {equipment.year && (
            <span className="text-xs text-[#B3B3B3] bg-[#1A1A1A] px-2 py-1 rounded">
              {equipment.year}
            </span>
          )}
        </div>

        <p className="text-[#B3B3B3] text-sm leading-relaxed mb-4 min-h-[60px]">
          {equipment.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-medium ${
            equipment.availability === 'Available' || equipment.availability === 'In Stock'
              ? 'text-green-400'
              : 'text-yellow-400'
          }`}>
            {equipment.availability}
          </span>
        </div>

          <button
            onClick={handleEnquire}
            className="w-full bg-[#F2B705] hover:bg-[#E0A904] text-[#0E0E0E] font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 premium-hover group/btn"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover/btn:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>Enquire on WhatsApp</span>
          </button>
        </div>
        </div>
      </AnimatedSection>

      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        imageSrc={equipment.image}
        alt={`${equipment.name} - ${equipment.category}`}
      />
    </>
  );
}
