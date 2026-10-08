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
    <div style={{
      background: '#ffffff',
      borderRadius: '1rem',
      boxShadow: '0 4px 30px rgba(10, 25, 47, 0.06)',
      border: '1px solid rgba(0,0,0,0.04)',
      padding: '1.5rem',
      marginBottom: '2.5rem'
    }}>
      {/* Main Search Row - Flexbox */}
      <div className="search-row">
        {/* Search Input */}
        <div style={{ position: 'relative', flex: 1 }}>
          <Search style={{
            position: 'absolute',
            left: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#adb5bd'
          }} size={20} />
          <input
            type="text"
            placeholder="Search by location, property name..."
            value={filters.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="form-input"
            style={{ paddingLeft: '3rem' }}
          />
        </div>

        {/* Type Select */}
        <select
          value={filters.type}
          onChange={(e) => handleChange('type', e.target.value)}
          className="form-input"
          style={{ minWidth: '180px', cursor: 'pointer' }}
        >
          <option value="">All Types</option>
          <option value="Luxury Residential">Luxury Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Industrial">Industrial</option>
        </select>

        {/* Status Select */}
        <select
          value={filters.status}
          onChange={(e) => handleChange('status', e.target.value)}
          className="form-input"
          style={{ minWidth: '150px', cursor: 'pointer' }}
        >
          <option value="">All Status</option>
          <option value="For Sale">For Sale</option>
          <option value="For Rent">For Rent</option>
        </select>

        {/* Filters Toggle Button */}
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '0.875rem 1.25rem',
            background: '#0a192f',
            color: '#ffffff',
            borderRadius: '0.75rem',
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: 500,
            transition: 'all 0.3s',
            whiteSpace: 'nowrap'
          }}
        >
          <SlidersHorizontal size={16} />
          <span>Filters</span>
        </button>
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div style={{
          marginTop: '1rem',
          paddingTop: '1rem',
          borderTop: '1px solid #f1f3f5'
        }}>
          <div className="advanced-filters">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              <label style={{ fontSize: '0.7rem', fontWeight: 600, color: '#6c757d', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Price Range
              </label>
              <select
                value={filters.priceRange}
                onChange={(e) => handleChange('priceRange', e.target.value)}
                className="form-input"
              >
                <option value="">Any Price</option>
                <option value="50-100">₦50M - ₦100M</option>
                <option value="100-200">₦100M - ₦200M</option>
                <option value="200-350">₦200M - ₦350M</option>
                <option value="350+">₦350M+</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              <label style={{ fontSize: '0.7rem', fontWeight: 600, color: '#6c757d', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Bedrooms
              </label>
              <select
                value={filters.beds}
                onChange={(e) => handleChange('beds', e.target.value)}
                className="form-input"
              >
                <option value="">Any</option>
                <option value="3">3+ Beds</option>
                <option value="4">4+ Beds</option>
                <option value="5">5+ Beds</option>
                <option value="6">6+ Beds</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              <label style={{ fontSize: '0.7rem', fontWeight: 600, color: '#6c757d', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Quick Location
              </label>
              <select
                onChange={(e) => handleChange('location', e.target.value)}
                className="form-input"
              >
                <option value="">All Locations</option>
                <option value="Umuahia">Umuahia</option>
                <option value="Aba">Aba</option>
                <option value="Owerri">Owerri</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
