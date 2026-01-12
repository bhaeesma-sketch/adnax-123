'use client';

import { useState, useMemo } from 'react';
import EquipmentCard from '@/components/EquipmentCard';
import EquipmentSearch from '@/components/EquipmentSearch';
import AnimatedSection from '@/components/AnimatedSection';
import { equipment, equipmentCategories, EquipmentCategory } from '@/data/equipment';

export default function EquipmentPage() {
  const [selectedCategory, setSelectedCategory] = useState<EquipmentCategory | 'All'>('All');
  const [searchFilteredEquipment, setSearchFilteredEquipment] = useState(equipment);

  const categoryFilteredEquipment = useMemo(() => {
    if (selectedCategory === 'All') {
      return searchFilteredEquipment;
    }
    return searchFilteredEquipment.filter(item => item.category === selectedCategory);
  }, [selectedCategory, searchFilteredEquipment]);

  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0E0E0E] to-[#1A1A1A] py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection direction="fade" delay={0}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                Equipment Catalogue
              </h1>
            </AnimatedSection>
            <AnimatedSection direction="fade" delay={200}>
              <p className="text-xl text-[#B3B3B3] leading-relaxed">
                Browse our range of heavy equipment. Click "Enquire on WhatsApp" for any item to start a direct conversation.
              </p>
            </AnimatedSection>
          </div>
        </div>
        <div className="absolute inset-0 opacity-5 bg-gradient-to-r from-[#F2B705] via-transparent to-[#F2B705] animate-gradient"></div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-[#1A1A1A] border-b border-[#2A2A2A] sticky top-20 z-40 backdrop-blur-sm bg-[#1A1A1A]/95">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === 'All'
                  ? 'bg-[#F2B705] text-[#0E0E0E] shadow-lg shadow-[#F2B705]/30'
                  : 'bg-[#2A2A2A] text-[#B3B3B3] hover:bg-[#2A2A2A]/80 hover:text-white'
              }`}
            >
              All Equipment
            </button>
            {equipmentCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-[#F2B705] text-[#0E0E0E] shadow-lg shadow-[#F2B705]/30'
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
          {/* Search Bar */}
          <EquipmentSearch equipment={equipment} onFilterChange={setSearchFilteredEquipment} />
          
          {categoryFilteredEquipment.length > 0 ? (
            <>
              <AnimatedSection direction="fade" delay={0}>
                <div className="mb-8">
                  <p className="text-[#B3B3B3]">
                    Showing <strong className="text-white">{categoryFilteredEquipment.length}</strong> equipment item(s)
                    {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                  </p>
                </div>
              </AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryFilteredEquipment.map((item, index) => (
                  <EquipmentCard key={item.id} equipment={item} index={index} />
                ))}
              </div>
            </>
          ) : (
            <AnimatedSection direction="fade" delay={0}>
              <div className="text-center py-16">
                <svg className="w-16 h-16 text-[#B3B3B3] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p className="text-[#B3B3B3] text-lg">
                  No equipment found matching your criteria.
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-[#1A1A1A] border-t border-[#2A2A2A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up" delay={0}>
              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-[#2A2A2A] premium-card-hover">
                <h3 className="text-lg font-bold text-white mb-3 font-heading flex items-center">
                  <svg className="w-5 h-5 text-[#F2B705] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Important Information
                </h3>
                <ul className="space-y-2 text-[#B3B3B3] text-sm">
                  <li className="transition-colors duration-300 hover:text-white">• Pricing and delivery terms are discussed directly via WhatsApp</li>
                  <li className="transition-colors duration-300 hover:text-white">• Availability is subject to confirmation</li>
                  <li className="transition-colors duration-300 hover:text-white">• All equipment specifications are verified before listing</li>
                  <li className="transition-colors duration-300 hover:text-white">• Contact ADNEX via WhatsApp for detailed information and quotations</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
