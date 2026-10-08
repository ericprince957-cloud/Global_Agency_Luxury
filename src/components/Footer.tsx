import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" style={{ background: '#0a192f', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container-custom">
        {/* Footer Grid - Flexbox */}
        <div className="footer-grid" style={{ marginBottom: '4rem' }}>
          {/* Brand Column */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                background: 'linear-gradient(135deg, #d4af37, #e8c547)',
                borderRadius: '0.375rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ color: '#0a192f', fontWeight: 700, fontSize: '1.125rem', fontFamily: "'Playfair Display', serif" }}>G</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <span style={{ color: '#ffffff', fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: 600, letterSpacing: '0.05em' }}>GLOBAL</span>
                <span style={{ color: '#d4af37', fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: 600, letterSpacing: '0.05em', marginLeft: '0.375rem' }}>AGENCY</span>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              The premier luxury real estate consultancy in South-East Nigeria. Exclusive properties, verified titles, white-glove service.
            </p>
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {['FB', 'IG', 'TW'].map((social) => (
                <a
                  key={social}
                  href="#"
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s'
                  }}
                >
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', fontWeight: 600 }}>{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: "'Playfair Display', serif",
              color: '#ffffff',
              fontSize: '1.125rem',
              fontWeight: 600,
              marginBottom: '1.5rem'
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Properties', 'About Us', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color 0.3s'
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 style={{
              fontFamily: "'Playfair Display', serif",
              color: '#ffffff',
              fontSize: '1.125rem',
              fontWeight: 600,
              marginBottom: '1.5rem'
            }}>
              Property Types
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Luxury Residential', 'Commercial Properties', 'Industrial Land', 'Investment Opportunities'].map((type) => (
                <li key={type}>
                  <a
                    href="#properties"
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color 0.3s'
                    }}
                  >
                    {type}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontFamily: "'Playfair Display', serif",
              color: '#ffffff',
              fontSize: '1.125rem',
              fontWeight: 600,
              marginBottom: '1.5rem'
            }}>
              Get In Touch
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>
                <a
                  href="tel:+2347025899649"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.3s'
                  }}
                >
                  <Phone size={16} style={{ color: '#d4af37', flexShrink: 0 }} />
                  <span>+234 702 589 9649</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2347025899649"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.3s'
                  }}
                >
                  <MessageCircle size={16} style={{ color: '#d4af37', flexShrink: 0 }} />
                  <span>WhatsApp Concierge</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@globalagency.ng"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.3s'
                  }}
                >
                  <Mail size={16} style={{ color: '#d4af37', flexShrink: 0 }} />
                  <span>info@globalagency.ng</span>
                </a>
              </li>
              <li>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.875rem'
                }}>
                  <MapPin size={16} style={{ color: '#d4af37', flexShrink: 0, marginTop: '0.125rem' }} />
                  <span>Umuahia, Abia State, Nigeria</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.875rem' }}>
            © 2026 GLOBAL AGENCY. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.3s' }}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.3s' }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
