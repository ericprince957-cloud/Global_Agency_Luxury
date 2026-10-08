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
    <section id="testimonials" className="section-padding" style={{ background: '#f8f9fa' }}>
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
            Testimonials
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#0a192f',
            fontWeight: 600,
            marginTop: '1rem'
          }}>
            Trusted by High-Net-Worth Clients
          </h2>
        </div>

        {/* Testimonial Card */}
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <div className="testimonial-card">
            {/* Quote Icon */}
            <Quote style={{
              position: 'absolute',
              top: '2rem',
              left: '2rem',
              color: 'rgba(212, 175, 55, 0.15)'
            }} size={48} />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={18} style={{ color: '#d4af37', fill: '#d4af37' }} />
                ))}
              </div>

              {/* Quote Text */}
              <p style={{
                color: '#4a5568',
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                lineHeight: 1.8,
                fontStyle: 'italic',
                fontWeight: 300,
                marginBottom: '2rem',
                flex: 1
              }}>
                "{testimonials[current].text}"
              </p>

              {/* Author & Navigation */}
              <div className="testimonial-author">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid rgba(212, 175, 55, 0.3)'
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 600, color: '#0a192f', fontSize: '0.9375rem' }}>
                      {testimonials[current].name}
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#6c757d' }}>
                      {testimonials[current].title}
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={prev}
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '50%',
                      border: '1px solid #e9ecef',
                      background: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '50%',
                      border: '1px solid #e9ecef',
                      background: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? '1.5rem' : '0.5rem',
                    height: '0.5rem',
                    borderRadius: '999px',
                    background: i === current ? '#d4af37' : '#d1d5db',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
