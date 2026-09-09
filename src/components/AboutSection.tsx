'use client';

import React from 'react';
import Image from 'next/image';
import { Award, Flame, HeartHandshake } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Authentic Restaurant Exterior Image */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '3px',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)',
              }}
            >
              <Image
                src="/images/restaurant-front.jpg"
                alt="TongThai Restaurant - 198-200 Keighley Road, Bradford"
                width={640}
                height={460}
                sizes="(max-width: 768px) 100vw, 640px"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s ease',
                }}
                className="chef-image-hover"
              />

              {/* Verified Location Badge Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(18, 18, 18, 0.88)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(197, 157, 40, 0.4)',
                  borderRadius: '3px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                    }}
                  >
                    198–200 Keighley Road
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--color-gold)' }}>
                    Bradford, BD9 4JZ • 01274 499088
                  </div>
                </div>
                <span
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: '#ffffff',
                    backgroundColor: 'var(--color-gold)',
                    padding: '3px 8px',
                    borderRadius: '2px',
                  }}
                >
                  Dine-In &amp; Takeaway
                </span>
              </div>
            </div>
            {/* Elegant framing border accent */}
            <div
              className="about-accent-frame"
              style={{
                position: 'absolute',
                top: '-15px',
                left: '-15px',
                width: '100px',
                height: '100px',
                borderTop: '3px solid var(--color-gold)',
                borderLeft: '3px solid var(--color-gold)',
                zIndex: 1,
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Right Column: Story Copy & Signature */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                fontWeight: 700,
                lineHeight: 1.3,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--color-text-dark)',
                marginBottom: '12px',
              }}
            >
              We Are Specialized In <br />
              <span style={{ color: 'var(--color-gold)' }}>Authentic Royal Thai Cuisine</span>
            </h2>

            <div
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: '2.1rem',
                color: 'var(--color-gold)',
                marginBottom: '16px',
              }}
            >
              The Art of Thai Cooking
            </div>

            <hr className="gold-divider" style={{ width: '60px' }} />

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: '#555555',
                marginBottom: '20px',
              }}
            >
              Located at <strong>198–200 Keighley Road in Bradford</strong>, TongThai brings the rich aromas and time-honoured culinary heritage of Thailand to Yorkshire. Our master chefs prepare each curry paste fresh by hand using raw galangal, lemongrass, fingerroot, kaffir lime leaves, and fresh Thai chillies.
            </p>

            <p
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.8,
                color: '#777777',
                marginBottom: '32px',
              }}
            >
              Every dish is crafted to order using <strong>100% Halal certified ingredients</strong>. From sizzling wok-tossed Pad Thai and aromatic Massaman curries to whole steamed seabass with lime and garlic dressing, we bring you an unforgettable taste of authentic Thailand.
            </p>

            {/* Value Props */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                paddingBottom: '28px',
                marginBottom: '28px',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <Flame size={22} color="var(--color-gold)" />
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Authentic Spice
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <Award size={22} color="var(--color-gold)" />
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  100% Halal Food
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <HeartHandshake size={22} color="var(--color-gold)" />
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Thai Hospitality
                </span>
              </div>
            </div>

            {/* Signature */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div>
                <Image
                  src="/images/signature2.png"
                  alt="Chef Somchai Prasert Signature"
                  width={180}
                  height={50}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div style={{ borderLeft: '1px solid #ddd', paddingLeft: '16px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase' }}>
                  Chef Somchai Prasert
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#888' }}>Head Chef &amp; Founder</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .chef-image-hover:hover {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
}
