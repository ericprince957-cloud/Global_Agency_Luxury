import { ChevronDown, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '700px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: "url('https://image.qwenlm.ai/generated-images/e7374e40-e746-450e-a7f3-2f54c2778c67/_result.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animation: 'kenburns 20s ease-in-out infinite alternate'
      }} />

      {/* Overlay */}
      <div className="hero-overlay" style={{ position: 'absolute', inset: 0 }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        padding: '0 1rem',
        maxWidth: '72rem',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '999px',
          padding: '0.5rem 1.25rem',
          marginBottom: '2rem'
        }}>
          <div style={{ width: '0.5rem', height: '0.5rem', background: '#d4af37', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
          <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.02em' }}>
            Exclusive Listings Available
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
          color: '#ffffff',
          fontWeight: 600,
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          maxWidth: '900px'
        }}>
          Exclusive Luxury Properties for{' '}
          <span className="text-gold-gradient">Discerning Investors</span>
        </h1>

        {/* Subheadline */}
        <p style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          maxWidth: '40rem',
          margin: '0 auto 2.5rem',
          fontWeight: 300,
          lineHeight: 1.7
        }}>
          Verified Premium Listings in Abia, Imo & Beyond. Experience luxury real estate with unmatched professionalism.
        </p>

        {/* CTA Buttons */}
        <div className="cta-row">
          <a
            href="#properties"
            className="btn-gold"
            style={{
              color: '#0a192f',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              fontWeight: 600,
              fontSize: '1rem',
              letterSpacing: '0.02em',
              textDecoration: 'none',
              width: '100%',
              maxWidth: '300px'
            }}
          >
            Browse Exclusive Listings
          </a>
          <a
            href="https://wa.me/2347025899649?text=Hi%20GLOBAL%20AGENCY%2C%20I%27m%20interested%20in%20your%20exclusive%20listings."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              border: '2px solid rgba(255,255,255,0.3)',
              color: '#ffffff',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'all 0.3s',
              width: '100%',
              maxWidth: '300px'
            }}
          >
            <MessageCircle size={20} />
            <span>Concierge WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '6rem',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite'
      }}>
        <ChevronDown style={{ color: 'rgba(255,255,255,0.5)' }} size={32} />
      </div>

      {/* Stats Bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(10, 25, 47, 0.85)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="stats-row" style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem' }}>
          <div>
            <div style={{ color: '#d4af37', fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700 }}>150+</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem' }}>Properties Sold</div>
          </div>
          <div>
            <div style={{ color: '#d4af37', fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700 }}>₦25B+</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem' }}>Total Value</div>
          </div>
          <div>
            <div style={{ color: '#d4af37', fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700 }}>98%</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem' }}>Client Satisfaction</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
