import { Bed, Bath, Maximize, Car, MapPin, MessageCircle } from 'lucide-react';
import { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
  onCompare: (property: Property) => void;
  isCompared: boolean;
}

export default function PropertyCard({ property, onCompare, isCompared }: PropertyCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hi GLOBAL AGENCY, I'm interested in "${property.title}" listed at ${property.priceFormatted}. Please share more details.`
  );

  return (
    <div className="property-card">
      {/* Image Section */}
      <div className="card-image-wrapper">
        <img
          src={property.image}
          alt={property.title}
          className="card-image"
          loading="lazy"
        />
        <div className="card-image-overlay" />
        
        {/* Badges */}
        <div className="card-badges">
          {property.exclusive && (
            <span className="badge-exclusive">Exclusive</span>
          )}
          <span style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            padding: '0.3rem 0.75rem',
            borderRadius: '2px',
            color: '#ffffff',
            background: property.status === 'For Sale' ? 'rgba(34, 197, 94, 0.9)' : 
                        property.status === 'For Rent' ? 'rgba(59, 130, 246, 0.9)' : 
                        'rgba(107, 114, 128, 0.9)'
          }}>
            {property.status}
          </span>
        </div>

        {/* Compare Button */}
        <button
          onClick={() => onCompare(property)}
          className="card-compare-btn"
          style={{
            background: isCompared ? '#d4af37' : 'rgba(255,255,255,0.9)',
            color: isCompared ? '#0a192f' : '#6c757d'
          }}
          title="Add to compare"
        >
          <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>{isCompared ? '✓' : '+'}</span>
        </button>

        {/* Price */}
        <div className="card-price">
          <div style={{
            color: '#ffffff',
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            fontWeight: 700,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            {property.priceFormatted}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="card-content">
        {/* Title */}
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.125rem',
          fontWeight: 600,
          color: '#0a192f',
          lineHeight: 1.3,
          marginBottom: '0.5rem'
        }}>
          {property.title}
        </h3>

        {/* Location */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.375rem',
          color: '#6c757d',
          fontSize: '0.875rem',
          marginBottom: '1rem'
        }}>
          <MapPin size={14} style={{ color: '#d4af37', flexShrink: 0 }} />
          <span>{property.location}</span>
        </div>

        {/* Specs */}
        <div className="card-specs">
          {property.beds > 0 && (
            <div className="card-spec-item">
              <Bed size={16} style={{ color: '#d4af37' }} />
              <span>{property.beds} Beds</span>
            </div>
          )}
          {property.baths > 0 && (
            <div className="card-spec-item">
              <Bath size={16} style={{ color: '#d4af37' }} />
              <span>{property.baths} Baths</span>
            </div>
          )}
          <div className="card-spec-item">
            <Maximize size={16} style={{ color: '#d4af37' }} />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
          {property.parking > 0 && (
            <div className="card-spec-item">
              <Car size={16} style={{ color: '#d4af37' }} />
              <span>{property.parking}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="card-actions">
          <a
            href={`https://wa.me/2347025899649?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              background: '#0a192f',
              color: '#ffffff',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              fontWeight: 500,
              fontSize: '0.875rem',
              textDecoration: 'none',
              transition: 'all 0.3s'
            }}
          >
            <MessageCircle size={16} />
            <span>Inquire</span>
          </a>
          <a
            href={`https://wa.me/2347025899649?text=${encodeURIComponent(`Hi GLOBAL AGENCY, I'd like to request a private tour of "${property.title}". When is available?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.75rem 1rem',
              border: '2px solid #d4af37',
              color: '#d4af37',
              borderRadius: '0.5rem',
              fontWeight: 500,
              fontSize: '0.875rem',
              textDecoration: 'none',
              transition: 'all 0.3s'
            }}
          >
            Tour
          </a>
        </div>
      </div>
    </div>
  );
}
