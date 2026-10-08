import { Phone, MessageCircle } from 'lucide-react';

export default function MobileBar() {
  return (
    <div className="mobile-bottom-bar">
      <a
        href="tel:+2347025899649"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          background: 'rgba(255,255,255,0.1)',
          color: '#ffffff',
          padding: '0.875rem',
          borderRadius: '0.75rem',
          fontWeight: 500,
          fontSize: '0.875rem',
          textDecoration: 'none'
        }}
      >
        <Phone size={18} />
        <span>Call Now</span>
      </a>
      <a
        href="https://wa.me/2347025899649?text=Hi%20GLOBAL%20AGENCY%2C%20I%27m%20interested%20in%20your%20properties."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          background: '#d4af37',
          color: '#0a192f',
          padding: '0.875rem',
          borderRadius: '0.75rem',
          fontWeight: 600,
          fontSize: '0.875rem',
          textDecoration: 'none'
        }}
      >
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
