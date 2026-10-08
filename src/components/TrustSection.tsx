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
    <section id="about" className="py-20 lg:py-28 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4af37] text-sm font-semibold uppercase tracking-widest">Why Choose Us</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mt-4 mb-6">
            Why GLOBAL AGENCY?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            We set the standard for luxury real estate in South-East Nigeria. Our commitment to excellence, integrity, and discretion is unmatched.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-all duration-300">
                <feature.icon className="text-[#d4af37]" size={28} />
              </div>
              <h3 className="font-heading text-xl text-white font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* About Brief */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#d4af37] text-sm font-semibold uppercase tracking-widest">About Us</span>
              <h3 className="font-heading text-3xl text-white font-semibold mt-4 mb-6">
                Redefining Luxury Real Estate in Nigeria
              </h3>
              <p className="text-white/60 leading-relaxed mb-4">
                GLOBAL AGENCY is the premier luxury real estate consultancy serving high-net-worth individuals, corporate investors, and discerning buyers across South-East Nigeria and beyond.
              </p>
              <p className="text-white/60 leading-relaxed mb-6">
                With deep market expertise, an exclusive portfolio of verified properties, and a commitment to white-glove service, we transform the property acquisition experience from stressful to seamless.
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-[#d4af37] font-heading text-3xl font-bold">8+</div>
                  <div className="text-white/50 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-[#d4af37] font-heading text-3xl font-bold">200+</div>
                  <div className="text-white/50 text-sm">Happy Clients</div>
                </div>
                <div>
                  <div className="text-[#d4af37] font-heading text-3xl font-bold">50+</div>
                  <div className="text-white/50 text-sm">Active Listings</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                    src="https://image.qwenlm.ai/generated-images/da7d6cba-06f5-49f5-aafa-7740cf51924e/_result.png"
                    alt="Luxury property interior"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#d4af37] rounded-xl p-6 shadow-xl">
                <div className="text-[#0a192f] font-heading text-2xl font-bold">A+</div>
                <div className="text-[#0a192f]/70 text-sm">Trust Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
