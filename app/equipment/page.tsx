'use client';

import { useState } from 'react';
import EquipmentCard from '@/components/EquipmentCard';
import { equipment, equipmentCategories, EquipmentCategory } from '@/data/equipment';

export default function EquipmentPage() {
  const [selectedCategory, setSelectedCategory] = useState<EquipmentCategory | 'All'>('All');

  const filteredEquipment = selectedCategory === 'All'
    ? equipment
    : equipment.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0E0E0E] to-[#1A1A1A] py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Equipment Catalogue
            </h1>
            <p className="text-xl text-[#B3B3B3] leading-relaxed">
              Browse our range of heavy equipment. Click "Enquire on WhatsApp" for any item to start a direct conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-[#1A1A1A] border-b border-[#2A2A2A] sticky top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === 'All'
                  ? 'bg-[#F2B705] text-[#0E0E0E]'
                  : 'bg-[#2A2A2A] text-[#B3B3B3] hover:bg-[#2A2A2A]/80 hover:text-white'
              }`}
            >
              All Equipment
            </button>
            {equipmentCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#F2B705] text-[#0E0E0E]'
                    : 'bg-[#2A2A2A] text-[#B3B3B3] hover:bg-[#2A2A2A]/80 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {filteredEquipment.length > 0 ? (
            <>
              <div className="mb-8">
                <p className="text-[#B3B3B3]">
                  Showing <strong className="text-white">{filteredEquipment.length}</strong> equipment item(s)
                  {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEquipment.map((item) => (
                  <EquipmentCard key={item.id} equipment={item} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-[#B3B3B3] text-lg">
                No equipment found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-[#1A1A1A] border-t border-[#2A2A2A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#2A2A2A] rounded-lg p-6 border border-[#2A2A2A]">
              <h3 className="text-lg font-bold text-white mb-3 font-heading flex items-center">
                <svg className="w-5 h-5 text-[#F2B705] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Important Information
              </h3>
              <ul className="space-y-2 text-[#B3B3B3] text-sm">
                <li>• Pricing and delivery terms are discussed directly via WhatsApp</li>
                <li>• Availability is subject to confirmation</li>
                <li>• All equipment specifications are verified before listing</li>
                <li>• Contact ADNEX via WhatsApp for detailed information and quotations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
