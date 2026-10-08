import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import PropertyCard from './components/PropertyCard';
import TrustSection from './components/TrustSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import MobileBar from './components/MobileBar';
import CompareModal from './components/CompareModal';
import { properties, Property } from './data/properties';

function App() {
  const [filters, setFilters] = useState({
    type: '',
    priceRange: '',
    location: '',
    beds: '',
    status: '',
  });

  const [compareList, setCompareList] = useState<Property[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      if (filters.type && property.type !== filters.type) return false;
      if (filters.status && property.status !== filters.status) return false;

      if (filters.location) {
        const loc = filters.location.toLowerCase();
        if (!property.location.toLowerCase().includes(loc) && 
            !property.state.toLowerCase().includes(loc) &&
            !property.title.toLowerCase().includes(loc)) {
          return false;
        }
      }

      if (filters.priceRange) {
        const price = property.price;
        switch (filters.priceRange) {
          case '50-100':
            if (price < 50000000 || price > 100000000) return false;
            break;
          case '100-200':
            if (price < 100000000 || price > 200000000) return false;
            break;
          case '200-350':
            if (price < 200000000 || price > 350000000) return false;
            break;
          case '350+':
            if (price < 350000000) return false;
            break;
        }
      }

      if (filters.beds) {
        const minBeds = parseInt(filters.beds);
        if (property.beds < minBeds) return false;
      }

      return true;
    });
  }, [filters]);

  const handleCompare = (property: Property) => {
    setCompareList((prev) => {
      const exists = prev.find((p) => p.id === property.id);
      if (exists) {
        return prev.filter((p) => p.id !== property.id);
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), property];
      }
      return [...prev, property];
    });
  };

  const isCompared = (id: number) => compareList.some((p) => p.id === id);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Hero />

      {/* Properties Section */}
      <section id="properties" className="section-padding" style={{ background: '#ffffff', flex: 1 }}>
        <div className="container-custom">
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              color: '#d4af37',
              fontSize: '0.8rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.15em'
            }}>
              Our Portfolio
            </span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#0a192f',
              fontWeight: 600,
              marginTop: '1rem',
              marginBottom: '1rem'
            }}>
              Exclusive Listings
            </h2>
            <p style={{
              color: '#6c757d',
              maxWidth: '40rem',
              margin: '0 auto',
              fontSize: '1.125rem',
              lineHeight: 1.7
            }}>
              Handpicked luxury properties for discerning investors and homebuyers.
            </p>
          </div>

          {/* Search & Filters */}
          <SearchBar filters={filters} onFilterChange={setFilters} />

          {/* Compare Bar */}
          {compareList.length > 0 && (
            <div style={{
              marginBottom: '1.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              background: 'rgba(10, 25, 47, 0.03)',
              borderRadius: '0.75rem',
              padding: '1rem 1.5rem'
            }}>
              <span style={{ fontSize: '0.875rem', color: '#0a192f' }}>
                <span style={{ fontWeight: 600 }}>{compareList.length}</span> properties selected for comparison
              </span>
              <button
                onClick={() => setShowCompare(true)}
                style={{
                  background: '#d4af37',
                  color: '#0a192f',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                Compare Now
              </button>
            </div>
          )}

          {/* Results Info */}
          <div style={{
            marginBottom: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem'
          }}>
            <p style={{ color: '#6c757d', fontSize: '0.875rem' }}>
              Showing <span style={{ fontWeight: 600, color: '#0a192f' }}>{filteredProperties.length}</span> properties
            </p>
            <div style={{ fontSize: '0.8125rem', color: '#adb5bd' }}>
              Tip: Click <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '1.25rem',
                height: '1.25rem',
                background: '#f1f3f5',
                borderRadius: '50%',
                fontSize: '0.75rem',
                fontWeight: 700
              }}>+</span> to compare
            </div>
          </div>

          {/* Property Grid - Flexbox */}
          {filteredProperties.length > 0 ? (
            <div className="property-grid">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onCompare={handleCompare}
                  isCompared={isCompared(property.id)}
                />
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '5rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏠</div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                color: '#0a192f',
                marginBottom: '0.5rem'
              }}>
                No Properties Found
              </h3>
              <p style={{ color: '#6c757d' }}>Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </section>

      <TrustSection />
      <Testimonials />

      {/* CTA Section */}
      <section style={{
        padding: '5rem 1rem',
        background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)'
      }}>
        <div style={{
          maxWidth: '56rem',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            color: '#ffffff',
            fontWeight: 600,
            marginBottom: '1.5rem'
          }}>
            Ready to Find Your Dream Property?
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.125rem',
            marginBottom: '2.5rem',
            maxWidth: '40rem',
            lineHeight: 1.7
          }}>
            Let our expert concierge team guide you to the perfect investment. Schedule a private consultation today.
          </p>
          <div className="cta-row">
            <a
              href="https://wa.me/2347025899649?text=Hi%20GLOBAL%20AGENCY%2C%20I%27d%20like%20to%20schedule%20a%20private%20consultation%20about%20your%20exclusive%20properties."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{
                color: '#0a192f',
                padding: '1rem 2.5rem',
                borderRadius: '0.5rem',
                fontWeight: 600,
                fontSize: '1rem',
                letterSpacing: '0.02em',
                textDecoration: 'none'
              }}
            >
              Schedule Consultation
            </a>
            <a
              href="tel:+2347025899649"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: '2px solid rgba(255,255,255,0.3)',
                color: '#ffffff',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s'
              }}
            >
              <span>Call +234 702 589 9649</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBar />

      {/* Compare Modal */}
      {showCompare && (
        <CompareModal
          properties={compareList}
          onClose={() => setShowCompare(false)}
        />
      )}

      {/* Floating WhatsApp Button (Desktop) */}
      <a
        href="https://wa.me/2347025899649?text=Hi%20GLOBAL%20AGENCY%2C%20I%27m%20interested%20in%20your%20exclusive%20listings."
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 50,
          width: '3.5rem',
          height: '3.5rem',
          background: '#25D366',
          borderRadius: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.3)',
          transition: 'transform 0.3s',
          textDecoration: 'none'
        }}
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" style={{ width: '1.75rem', height: '1.75rem', fill: '#ffffff' }}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
