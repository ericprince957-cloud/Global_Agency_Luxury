import { ChevronDown, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Images Slider */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://image.qwenlm.ai/generated-images/e7374e40-e746-450e-a7f3-2f54c2778c67/_result.png')] bg-cover bg-center animate-[kenburns_20s_ease-in-out_infinite_alternate]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')] bg-cover bg-center opacity-0 animate-[fadeSlider_20s_ease-in-out_infinite]" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
            <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wide">Exclusive Listings Available</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight mb-6">
            Exclusive Luxury Properties for{' '}
            <span className="text-gold-gradient">Discerning Investors</span>
          </h1>

          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Verified Premium Listings in Abia, Imo & Beyond. Experience luxury real estate with unmatched professionalism.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#properties"
              className="btn-gold text-[#0a192f] px-8 py-4 rounded font-semibold text-base tracking-wide hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all duration-300 w-full sm:w-auto"
            >
              Browse Exclusive Listings
            </a>
            <a
              href="https://wa.me/2347025899649?text=Hi%20GLOBAL%20AGENCY%2C%20I%27m%20interested%20in%20your%20exclusive%20listings."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 border-2 border-white/30 text-white px-8 py-4 rounded font-semibold text-base hover:bg-white/10 hover:border-[#d4af37] transition-all duration-300 w-full sm:w-auto"
            >
              <MessageCircle size={20} />
              <span>Concierge WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/50" size={32} />
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#0a192f]/80 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-[#d4af37] font-heading text-2xl font-bold">150+</div>
            <div className="text-white/60 text-xs sm:text-sm">Properties Sold</div>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="text-[#d4af37] font-heading text-2xl font-bold">₦25B+</div>
            <div className="text-white/60 text-xs sm:text-sm">Total Value</div>
          </div>
          <div className="text-center">
            <div className="text-[#d4af37] font-heading text-2xl font-bold">98%</div>
            <div className="text-white/60 text-xs sm:text-sm">Client Satisfaction</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes fadeSlider {
          0%, 45% { opacity: 0; }
          50%, 95% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
