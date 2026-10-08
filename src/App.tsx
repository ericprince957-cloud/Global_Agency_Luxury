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
      // Type filter
      if (filters.type && property.type !== filters.type) return false;

      // Status filter
      if (filters.status && property.status !== filters.status) return false;

      // Location filter
      if (filters.location) {
        const loc = filters.location.toLowerCase();
        if (!property.location.toLowerCase().includes(loc) && 
            !property.state.toLowerCase().includes(loc) &&
            !property.title.toLowerCase().includes(loc)) {
          return false;
        }
      }

      // Price range filter
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

      // Beds filter
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
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Properties Section */}
      <section id="properties" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-[#d4af37] text-sm font-semibold uppercase tracking-widest">Our Portfolio</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#0a192f] font-semibold mt-4 mb-4">
              Exclusive Listings
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Handpicked luxury properties for discerning investors and homebuyers.
            </p>
          </div>

          {/* Search & Filters */}
          <SearchBar filters={filters} onFilterChange={setFilters} />

          {/* Compare Bar */}
          {compareList.length > 0 && (
            <div className="mb-6 flex items-center justify-between bg-[#0a192f]/5 rounded-xl px-6 py-4">
              <span className="text-sm text-[#0a192f]">
                <span className="font-semibold">{compareList.length}</span> properties selected for comparison
              </span>
              <button
                onClick={() => setShowCompare(true)}
                className="bg-[#d4af37] text-[#0a192f] px-5 py-2 rounded-lg font-semibold text-sm hover:bg-[#e8c547] transition-all"
              >
                Compare Now
              </button>
            </div>
          )}

          {/* Results count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-500 text-sm">
              Showing <span className="font-semibold text-[#0a192f]">{filteredProperties.length}</span> properties
            </p>
            <div className="text-sm text-gray-400">
              Tip: Click <span className="inline-flex items-center justify-center w-5 h-5 bg-gray-100 rounded-full text-xs font-bold">+</span> to compare
            </div>
          </div>

          {/* Property Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="font-heading text-2xl text-[#0a192f] mb-2">No Properties Found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </section>

      <TrustSection />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0a192f] to-[#112240]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl text-white font-semibold mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Let our expert concierge team guide you to the perfect investment. Schedule a private consultation today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/2347025899649?text=Hi%20GLOBAL%20AGENCY%2C%20I%27d%20like%20to%20schedule%20a%20private%20consultation%20about%20your%20exclusive%20properties."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-[#0a192f] px-10 py-4 rounded font-semibold text-base tracking-wide hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all duration-300"
            >
              Schedule Consultation
            </a>
            <a
              href="tel:+2347025899649"
              className="flex items-center space-x-2 border-2 border-white/30 text-white px-8 py-4 rounded font-semibold hover:bg-white/10 transition-all"
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
        className="hidden md:flex fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] rounded-full items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
