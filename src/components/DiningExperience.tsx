'use client';

import React from 'react';
import Image from 'next/image';
import { GALLERY_IMAGES } from '../data/restaurantData';
import { Expand, Calendar, Sparkles } from 'lucide-react';

interface DiningExperienceProps {
  onOpenLightbox: (imageSrc: string, title: string) => void;
  onOpenReservation?: () => void;
}

export default function DiningExperience({ onOpenLightbox, onOpenReservation }: DiningExperienceProps) {
  return (
    <section id="experience" className="section-padding" style={{ backgroundColor: '#faf8f5' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Left: Text & CTA */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'var(--color-gold)',
                marginBottom: '10px',
              }}
            >
              <Sparkles size={16} /> Haute Cuisine &amp; Hospitality
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.75rem, 2.5vw, 2.3rem)',
                fontWeight: 700,
                lineHeight: 1.3,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: 'var(--color-text-dark)',
                marginBottom: '12px',
              }}
            >
              We Created The Best Dining Experience For You &amp; Your Family
            </h2>

            <div
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: '2.1rem',
                color: 'var(--color-gold)',
                marginBottom: '16px',
              }}
            >
              Simply Delicious Experience
            </div>

            <hr className="gold-divider" style={{ width: '60px' }} />

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: '#555555',
                marginBottom: '16px',
              }}
            >
              At TongThai, dining is a celebratory gathering of friends and family. Enjoy our authentic Thai dishes prepared fresh to order using <strong>100% Halal certified ingredients</strong> — from our signature sizzling Volcano Duck and whole steamed sea bass with lime and chilli, to our rich Massaman and green curries simmered with hand-pounded herbs.
            </p>

            <p
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.8,
                color: '#777777',
                marginBottom: '28px',
              }}
            >
              Whether you are dining in for a romantic dinner, family celebration, or gathering with colleagues, our warm Thai hospitality and rich traditional recipes ensure an unforgettable culinary journey right here in Bradford.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#reservation" onClick={onOpenReservation} className="btn-capella-primary">
                <Calendar size={15} /> Reserve Your Table
              </a>
              <a href="#popular-menu" className="btn-capella-outline" style={{ borderColor: '#222', color: '#222' }}>
                View Full Menu
              </a>
            </div>
          </div>

          {/* Right: 4-Photo Mosaic Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
            }}
          >
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={idx}
                onClick={() => onOpenLightbox(img.full, img.caption)}
                style={{
                  position: 'relative',
                  aspectRatio: '1 / 1',
                  overflow: 'hidden',
                  borderRadius: '3px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                  cursor: 'pointer',
                  backgroundColor: '#eae6df',
                }}
                className="mosaic-item"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  className="mosaic-img"
                />

                {/* Mask on hover */}
                <div
                  className="mosaic-mask"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.45)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    padding: '12px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-gold)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '8px',
                    }}
                  >
                    <Expand size={20} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: '#ffffff',
                    }}
                  >
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .mosaic-item:hover .mosaic-img {
          transform: scale(1.08);
        }
        .mosaic-item:hover .mosaic-mask {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
