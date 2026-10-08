import { X, Bed, Bath, Maximize, Car, MapPin } from 'lucide-react';
import { Property } from '../data/properties';

interface CompareModalProps {
  properties: Property[];
  onClose: () => void;
}

export default function CompareModal({ properties, onClose }: CompareModalProps) {
  if (properties.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#0a192f]/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between rounded-t-3xl z-10">
          <div>
            <h3 className="font-heading text-2xl text-[#0a192f] font-semibold">Compare Properties</h3>
            <p className="text-gray-500 text-sm mt-1">{properties.length} properties selected</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="p-6">
          <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${properties.length}, 1fr)` }}>
            {properties.map((property) => (
              <div key={property.id} className="space-y-4">
                {/* Image */}
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                </div>

                {/* Details */}
                <div>
                  <h4 className="font-heading text-lg font-semibold text-[#0a192f] leading-tight">{property.title}</h4>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <MapPin size={14} className="mr-1 text-[#d4af37]" />
                    <span>{property.location}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="py-3 border-y border-gray-100">
                  <div className="text-[#d4af37] font-heading text-xl font-bold">{property.priceFormatted}</div>
                  <div className="text-gray-400 text-xs mt-1">{property.type}</div>
                </div>

                {/* Specs */}
                <div className="space-y-3">
                  {property.beds > 0 && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center text-gray-500"><Bed size={14} className="mr-2" /> Bedrooms</span>
                      <span className="font-semibold text-[#0a192f]">{property.beds}</span>
                    </div>
                  )}
                  {property.baths > 0 && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center text-gray-500"><Bath size={14} className="mr-2" /> Bathrooms</span>
                      <span className="font-semibold text-[#0a192f]">{property.baths}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-gray-500"><Maximize size={14} className="mr-2" /> Area</span>
                    <span className="font-semibold text-[#0a192f]">{property.sqft.toLocaleString()} sqft</span>
                  </div>
                  {property.parking > 0 && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center text-gray-500"><Car size={14} className="mr-2" /> Parking</span>
                      <span className="font-semibold text-[#0a192f]">{property.parking}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Status</span>
                    <span className="font-semibold text-[#0a192f]">{property.status}</span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/2347025899649?text=${encodeURIComponent(`Hi GLOBAL AGENCY, I'd like to compare "${property.title}" with other properties. Can we discuss?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#0a192f] text-white py-3 rounded-lg font-medium text-sm hover:bg-[#0a192f]/90 transition-all mt-4"
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
