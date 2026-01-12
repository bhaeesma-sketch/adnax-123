'use client';

import { useState, useMemo, useEffect } from 'react';
import { Equipment } from '@/data/equipment';

interface EquipmentSearchProps {
  equipment: Equipment[];
  onFilterChange: (filtered: Equipment[]) => void;
}

export default function EquipmentSearch({ equipment, onFilterChange }: EquipmentSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEquipment = useMemo(() => {
    if (!searchQuery.trim()) {
      return equipment;
    }

    const query = searchQuery.toLowerCase();
    return equipment.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      (item.year && item.year.toString().includes(query))
    );
  }, [searchQuery, equipment]);

  useEffect(() => {
    onFilterChange(filteredEquipment);
  }, [filteredEquipment, onFilterChange]);

  return (
    <div className="mb-8 animate-fadeIn">
      <div className="relative">
        <input
          type="text"
          placeholder="Search equipment by name, category, or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#2A2A2A] border border-[#2A2A2A] focus:border-[#F2B705] rounded-lg px-6 py-4 pl-12 text-white placeholder-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#F2B705]/50 transition-all duration-300"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B3B3B3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B3B3B3] hover:text-white transition-colors"
            aria-label="Clear search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
      {searchQuery && (
        <p className="mt-3 text-[#B3B3B3] text-sm animate-fadeIn">
          Found <strong className="text-white">{filteredEquipment.length}</strong> result{filteredEquipment.length !== 1 ? 's' : ''}
        </p>
      )}
    </div>
  );
}
