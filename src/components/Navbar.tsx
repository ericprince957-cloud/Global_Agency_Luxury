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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#d4af37] to-[#e8c547] rounded flex items-center justify-center">
              <span className="text-[#0a192f] font-bold text-lg font-heading">G</span>
            </div>
            <div>
              <span className="text-white font-heading text-xl font-semibold tracking-wide">GLOBAL</span>
              <span className="text-[#d4af37] font-heading text-xl font-semibold tracking-wide ml-1">AGENCY</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-[#d4af37] transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/2347025899649"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#d4af37] hover:bg-[#e8c547] text-[#0a192f] px-5 py-2.5 rounded font-semibold text-sm transition-all duration-300"
            >
              <Phone size={16} />
              <span>Concierge</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden nav-glass border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white/80 hover:text-[#d4af37] transition-colors text-base font-medium py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/2347025899649"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#d4af37] text-[#0a192f] px-5 py-3 rounded font-semibold mt-4"
            >
              WhatsApp Concierge
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
