import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Properties', href: '#properties' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'nav-glass shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="nav-inner">
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
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
          </a>

          {/* Desktop Nav Links */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/2347025899649"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#d4af37',
                color: '#0a192f',
                padding: '0.625rem 1.25rem',
                borderRadius: '0.5rem',
                fontWeight: 600,
                fontSize: '0.875rem',
                textDecoration: 'none',
                transition: 'all 0.3s'
              }}
            >
              <Phone size={16} />
              <span>Concierge</span>
            </a>
          </div>

          {/* Mobile menu button - hidden on md+ */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            style={{
              color: '#ffffff',
              padding: '0.5rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="nav-glass animate-fade-in md:hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '1280px', margin: '0 auto' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/2347025899649"
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
                borderRadius: '0.5rem',
                fontWeight: 600,
                textDecoration: 'none',
                marginTop: '0.5rem'
              }}
            >
              <Phone size={18} />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
