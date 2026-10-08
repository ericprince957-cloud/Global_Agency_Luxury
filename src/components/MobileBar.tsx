import { Phone, MessageCircle } from 'lucide-react';

export default function MobileBar() {
  return (
    <div className="mobile-bottom-bar md:hidden">
      <div className="bg-[#0a192f] border-t border-white/10 px-4 py-3 flex items-center gap-3">
        <a
          href="tel:+2347025899649"
          className="flex-1 flex items-center justify-center space-x-2 bg-white/10 text-white py-3.5 rounded-xl font-medium text-sm"
        >
          <Phone size={18} />
          <span>Call Now</span>
        </a>
        <a
          href="https://wa.me/2347025899649?text=Hi%20GLOBAL%20AGENCY%2C%20I%27m%20interested%20in%20your%20properties."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center space-x-2 bg-[#d4af37] text-[#0a192f] py-3.5 rounded-xl font-semibold text-sm"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
