import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a192f] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#d4af37] to-[#e8c547] rounded flex items-center justify-center">
                <span className="text-[#0a192f] font-bold text-lg font-heading">G</span>
              </div>
              <div>
                <span className="text-white font-heading text-xl font-semibold">GLOBAL</span>
                <span className="text-[#d4af37] font-heading text-xl font-semibold ml-1">AGENCY</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              The premier luxury real estate consultancy in South-East Nigeria. Exclusive properties, verified titles, white-glove service.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#d4af37]/20 transition-all">
                <span className="text-white/70 text-sm">FB</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#d4af37]/20 transition-all">
                <span className="text-white/70 text-sm">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#d4af37]/20 transition-all">
                <span className="text-white/70 text-sm">TW</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Properties', 'About Us', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-white/50 hover:text-[#d4af37] transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-white font-heading text-lg font-semibold mb-6">Property Types</h4>
            <ul className="space-y-3">
              {['Luxury Residential', 'Commercial Properties', 'Industrial Land', 'Investment Opportunities'].map((type) => (
                <li key={type}>
                  <a href="#properties" className="text-white/50 hover:text-[#d4af37] transition-colors text-sm">
                    {type}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading text-lg font-semibold mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+2347025899649" className="flex items-center space-x-3 text-white/50 hover:text-[#d4af37] transition-colors text-sm">
                  <Phone size={16} className="text-[#d4af37]" />
                  <span>+234 702 589 9649</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/2347025899649" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-white/50 hover:text-[#d4af37] transition-colors text-sm">
                  <MessageCircle size={16} className="text-[#d4af37]" />
                  <span>WhatsApp Concierge</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@globalagency.ng" className="flex items-center space-x-3 text-white/50 hover:text-[#d4af37] transition-colors text-sm">
                  <Mail size={16} className="text-[#d4af37]" />
                  <span>info@globalagency.ng</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-white/50 text-sm">
                  <MapPin size={16} className="text-[#d4af37] mt-0.5" />
                  <span>Umuahia, Abia State, Nigeria</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2026 GLOBAL AGENCY. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
