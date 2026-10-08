import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Chief Emeka O.',
    title: 'CEO, Emerald Industries',
    text: 'GLOBAL AGENCY made acquiring my commercial property in Aba seamless. Their due diligence on titles was impeccable. I recommend them to every serious investor.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80'
  },
  {
    name: 'Mrs. Adaeze N.',
    title: 'Medical Director, Grace Hospital',
    text: 'From the first viewing to the final signing, the team was professional, discreet, and efficient. My dream home in GRA Umuahia was found within two weeks.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80'
  },
  {
    name: 'Engr. Ikenna A.',
    title: 'Managing Partner, IA & Associates',
    text: 'I have worked with multiple agencies across Nigeria. None match the level of professionalism and market knowledge that GLOBAL AGENCY brings. Truly world-class.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80'
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4af37] text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#0a192f] font-semibold mt-4">
            Trusted by High-Net-Worth Clients
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-lg shadow-gray-100">
            <Quote className="absolute top-8 left-8 text-[#d4af37]/20" size={48} />
            
            <div className="relative z-10">
              <div className="flex mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-[#d4af37] fill-[#d4af37]" />
                ))}
              </div>

              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-8 italic font-light">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#d4af37]/30"
                  />
                  <div>
                    <div className="font-semibold text-[#0a192f]">{testimonials[current].name}</div>
                    <div className="text-sm text-gray-500">{testimonials[current].title}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#d4af37] hover:text-[#d4af37] transition-all"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#d4af37] hover:text-[#d4af37] transition-all"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? 'bg-[#d4af37] w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
