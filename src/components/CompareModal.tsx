import { X, Bed, Bath, Maximize, Car, MapPin } from 'lucide-react';
import { Property } from '../data/properties';

interface CompareModalProps {
  properties: Property[];
  onClose: () => void;
}

export default function CompareModal({ properties, onClose }: CompareModalProps) {
  if (properties.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10, 25, 47, 0.8)',
          backdropFilter: 'blur(4px)'
        }}
      />
      
      {/* Modal Content */}
      <div style={{
        position: 'relative',
        background: '#ffffff',
        borderRadius: '1.5rem',
        boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
        maxWidth: '72rem',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{
          position: 'sticky',
          top: 0,
          background: '#ffffff',
          borderBottom: '1px solid #f1f3f5',
          padding: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: '1.5rem 1.5rem 0 0',
          zIndex: 10
        }}>
          <div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.5rem',
              color: '#0a192f',
              fontWeight: 600
            }}>
              Compare Properties
            </h3>
            <p style={{ color: '#6c757d', fontSize: '0.875rem', marginTop: '0.25rem' }}>
              {properties.length} {properties.length === 1 ? 'property' : 'properties'} selected
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              background: '#f1f3f5',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Comparison Grid - Flexbox */}
        <div style={{ padding: '1.5rem' }}>
          <div className="compare-grid">
            {properties.map((property) => (
              <div key={property.id} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '1rem',
                background: '#f8f9fa',
                borderRadius: '1rem'
              }}>
                {/* Image */}
                <div style={{ aspectRatio: '4/3', borderRadius: '0.75rem', overflow: 'hidden' }}>
                  <img
                    src={property.image}
                    alt={property.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Title */}
                <div>
                  <h4 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: '#0a192f',
                    lineHeight: 1.3
                  }}>
                    {property.title}
                  </h4>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    color: '#6c757d',
                    fontSize: '0.875rem',
                    marginTop: '0.5rem'
                  }}>
                    <MapPin size={14} style={{ color: '#d4af37' }} />
                    <span>{property.location}</span>
                  </div>
                </div>

                {/* Price */}
                <div style={{
                  padding: '0.75rem 0',
                  borderTop: '1px solid #e9ecef',
                  borderBottom: '1px solid #e9ecef'
                }}>
                  <div style={{
                    color: '#d4af37',
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.25rem',
                    fontWeight: 700
                  }}>
                    {property.priceFormatted}
                  </div>
                  <div style={{ color: '#adb5bd', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                    {property.type}
                  </div>
                </div>

                {/* Specs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {property.beds > 0 && (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6c757d' }}>
                        <Bed size={14} /> Bedrooms
                      </span>
                      <span style={{ fontWeight: 600, color: '#0a192f' }}>{property.beds}</span>
                    </div>
                  )}
                  {property.baths > 0 && (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6c757d' }}>
                        <Bath size={14} /> Bathrooms
                      </span>
                      <span style={{ fontWeight: 600, color: '#0a192f' }}>{property.baths}</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6c757d' }}>
                      <Maximize size={14} /> Area
                    </span>
                    <span style={{ fontWeight: 600, color: '#0a192f' }}>{property.sqft.toLocaleString()} sqft</span>
                  </div>
                  {property.parking > 0 && (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6c757d' }}>
                        <Car size={14} /> Parking
                      </span>
                      <span style={{ fontWeight: 600, color: '#0a192f' }}>{property.parking}</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                    <span style={{ color: '#6c757d' }}>Status</span>
                    <span style={{ fontWeight: 600, color: '#0a192f' }}>{property.status}</span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/2347025899649?text=${encodeURIComponent(`Hi GLOBAL AGENCY, I'd like to compare "${property.title}" with other properties. Can we discuss?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#0a192f',
                    color: '#ffffff',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    marginTop: '0.5rem'
                  }}
                >
                  Inquire About This Property
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
