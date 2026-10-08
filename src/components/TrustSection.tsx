import { Shield, Clock, MapPin, Eye } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Verified Titles',
    description: 'Every property undergoes rigorous legal verification before listing. Your investment is protected.'
  },
  {
    icon: Clock,
    title: '24/7 Concierge',
    description: 'Our dedicated concierge team is available around the clock to assist with inquiries and viewings.'
  },
  {
    icon: MapPin,
    title: 'Prime Locations',
    description: 'We curate only the most sought-after addresses in Abia, Imo, and beyond.'
  },
  {
    icon: Eye,
    title: 'Discreet Service',
    description: 'We understand the importance of privacy. All transactions are handled with utmost discretion.'
  }
];

export default function TrustSection() {
  return (
    <section id="about" className="section-padding" style={{ background: '#0a192f' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            color: '#d4af37',
            fontSize: '0.8rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.15em'
          }}>
            Why Choose Us
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#ffffff',
            fontWeight: 600,
            marginTop: '1rem',
            marginBottom: '1.5rem'
          }}>
            Why GLOBAL AGENCY?
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '40rem',
            margin: '0 auto',
            fontSize: '1.125rem',
            lineHeight: 1.7
          }}>
            We set the standard for luxury real estate in South-East Nigeria. Our commitment to excellence, integrity, and discretion is unmatched.
          </p>
        </div>

        {/* Features Grid - Flexbox */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                padding: '1.5rem'
              }}
            >
              <div style={{
                width: '4rem',
                height: '4rem',
                margin: '0 auto 1.5rem',
                borderRadius: '1rem',
                background: 'rgba(212, 175, 55, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s'
              }}>
                <feature.icon style={{ color: '#d4af37' }} size={28} />
              </div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.25rem',
                color: '#ffffff',
                fontWeight: 600,
                marginBottom: '0.75rem'
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.875rem',
                lineHeight: 1.7
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* About Brief */}
        <div style={{
          marginTop: '5rem',
          paddingTop: '4rem',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div className="about-grid">
            {/* Text Content */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{
                color: '#d4af37',
                fontSize: '0.8rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.15em'
              }}>
                About Us
              </span>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                color: '#ffffff',
                fontWeight: 600,
                marginTop: '1rem',
                marginBottom: '1.5rem',
                lineHeight: 1.2
              }}>
                Redefining Luxury Real Estate in Nigeria
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.8,
                marginBottom: '1rem',
                fontSize: '0.9375rem'
              }}>
                GLOBAL AGENCY is the premier luxury real estate consultancy serving high-net-worth individuals, corporate investors, and discerning buyers across South-East Nigeria and beyond.
              </p>
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.8,
                marginBottom: '2rem',
                fontSize: '0.9375rem'
              }}>
                With deep market expertise, an exclusive portfolio of verified properties, and a commitment to white-glove service, we transform the property acquisition experience from stressful to seamless.
              </p>
              
              {/* Stats */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                  <div style={{ color: '#d4af37', fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', fontWeight: 700 }}>8+</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>Years Experience</div>
                </div>
                <div>
                  <div style={{ color: '#d4af37', fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', fontWeight: 700 }}>200+</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>Happy Clients</div>
                </div>
                <div>
                  <div style={{ color: '#d4af37', fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', fontWeight: 700 }}>50+</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>Active Listings</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div style={{ position: 'relative' }}>
              <div style={{
                aspectRatio: '4/3',
                borderRadius: '1rem',
                overflow: 'hidden'
              }}>
                <img
                  src="https://image.qwenlm.ai/generated-images/da7d6cba-06f5-49f5-aafa-7740cf51924e/_result.png"
                  alt="Luxury property interior"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
              {/* Floating Badge */}
              <div style={{
                position: 'absolute',
                bottom: '-1.5rem',
                left: '-1.5rem',
                background: '#d4af37',
                borderRadius: '0.75rem',
                padding: '1.25rem 1.5rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
              }}>
                <div style={{ color: '#0a192f', fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700 }}>A+</div>
                <div style={{ color: 'rgba(10,25,47,0.7)', fontSize: '0.875rem' }}>Trust Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
