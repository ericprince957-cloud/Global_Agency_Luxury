import { Search, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

interface SearchFilters {
  type: string;
  priceRange: string;
  location: string;
  beds: string;
  status: string;
}

interface SearchBarProps {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
}

export default function SearchBar({ filters, onFilterChange }: SearchBarProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleChange = (key: keyof SearchFilters, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-[#0a192f]/5 border border-gray-100 p-6 mb-10">
      {/* Main Search Row */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by location, property name..."
            value={filters.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37]/30 focus:border-[#d4af37] transition-all text-sm"
          />
        </div>

        <select
          value={filters.type}
          onChange={(e) => handleChange('type', e.target.value)}
          className="px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37]/30 focus:border-[#d4af37] transition-all text-sm bg-white min-w-[180px]"
        >
          <option value="">All Types</option>
          <option value="Luxury Residential">Luxury Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Industrial">Industrial</option>
        </select>

        <select
          value={filters.status}
          onChange={(e) => handleChange('status', e.target.value)}
          className="px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37]/30 focus:border-[#d4af37] transition-all text-sm bg-white min-w-[150px]"
        >
          <option value="">All Status</option>
          <option value="For Sale">For Sale</option>
          <option value="For Rent">For Rent</option>
        </select>

        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center justify-center space-x-2 px-5 py-3.5 bg-[#0a192f] text-white rounded-xl hover:bg-[#0a192f]/90 transition-all text-sm font-medium"
        >
          <SlidersHorizontal size={16} />
          <span>Filters</span>
        </button>
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in-up">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Price Range</label>
            <select
              value={filters.priceRange}
              onChange={(e) => handleChange('priceRange', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37]/30 focus:border-[#d4af37] transition-all text-sm bg-white"
            >
              <option value="">Any Price</option>
              <option value="50-100">₦50M - ₦100M</option>
              <option value="100-200">₦100M - ₦200M</option>
              <option value="200-350">₦200M - ₦350M</option>
              <option value="350+">₦350M+</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Bedrooms</label>
            <select
              value={filters.beds}
              onChange={(e) => handleChange('beds', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37]/30 focus:border-[#d4af37] transition-all text-sm bg-white"
            >
              <option value="">Any</option>
              <option value="3">3+ Beds</option>
              <option value="4">4+ Beds</option>
              <option value="5">5+ Beds</option>
              <option value="6">6+ Beds</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Location</label>
            <select
              onChange={(e) => handleChange('location', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37]/30 focus:border-[#d4af37] transition-all text-sm bg-white"
            >
              <option value="">All Locations</option>
              <option value="Umuahia">Umuahia</option>
              <option value="Aba">Aba</option>
              <option value="Owerri">Owerri</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
