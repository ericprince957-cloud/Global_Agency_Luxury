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
    <div className="property-card bg-white rounded-2xl overflow-hidden shadow-md shadow-gray-100 border border-gray-50 group">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={property.image}
          alt={property.title}
          className="card-image w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/60 via-transparent to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {property.exclusive && (
            <span className="badge-exclusive">Exclusive</span>
          )}
          <span className={`text-xs font-semibold px-3 py-1 rounded ${
            property.status === 'For Sale' ? 'bg-green-500/90 text-white' :
            property.status === 'For Rent' ? 'bg-blue-500/90 text-white' :
            'bg-gray-500/90 text-white'
          }`}>
            {property.status}
          </span>
        </div>

        {/* Compare checkbox */}
        <button
          onClick={() => onCompare(property)}
          className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isCompared 
              ? 'bg-[#d4af37] text-[#0a192f]' 
              : 'bg-white/80 text-gray-600 hover:bg-white'
          }`}
          title="Add to compare"
        >
          <span className="text-xs font-bold">{isCompared ? '✓' : '+'}</span>
        </button>

        {/* Price overlay */}
        <div className="absolute bottom-4 left-4">
          <div className="text-white font-heading text-2xl font-bold">{property.priceFormatted}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-heading text-lg font-semibold text-[#0a192f] leading-tight pr-2">
            {property.title}
          </h3>
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin size={14} className="mr-1 text-[#d4af37]" />
          <span>{property.location}</span>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 text-gray-600 text-sm mb-5 pb-5 border-b border-gray-100">
          {property.beds > 0 && (
            <div className="flex items-center gap-1.5">
              <Bed size={16} className="text-[#d4af37]" />
              <span>{property.beds}</span>
            </div>
          )}
          {property.baths > 0 && (
            <div className="flex items-center gap-1.5">
              <Bath size={16} className="text-[#d4af37]" />
              <span>{property.baths}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Maximize size={16} className="text-[#d4af37]" />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
          {property.parking > 0 && (
            <div className="flex items-center gap-1.5">
              <Car size={16} className="text-[#d4af37]" />
              <span>{property.parking}</span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a
            href={`https://wa.me/2347025899649?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 bg-[#0a192f] hover:bg-[#0a192f]/90 text-white py-3 rounded-lg font-medium text-sm transition-all"
          >
            <MessageCircle size={16} />
            <span>Inquire</span>
          </a>
          <a
            href={`https://wa.me/2347025899649?text=${encodeURIComponent(`Hi GLOBAL AGENCY, I'd like to request a private tour of "${property.title}". When is available?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-3 border-2 border-[#d4af37] text-[#d4af37] rounded-lg hover:bg-[#d4af37] hover:text-[#0a192f] transition-all text-sm font-medium"
          >
            Tour
          </a>
        </div>
      </div>
    </div>
  );
}
