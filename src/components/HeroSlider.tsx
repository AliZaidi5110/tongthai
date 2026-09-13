'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  bgImage: string;
  imageAlt: string;
  scriptTitle: string;
  subHeader?: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    bgImage: '/images/volcano-duck.jpg',
    imageAlt: 'Signature sizzling Volcano Duck Thai speciality on flaming hot plate at TongThai Bradford',
    scriptTitle: 'Authentic Thai',
    subHeader: 'ROYAL HERITAGE RECIPES & WOK MASTERY • 100% HALAL',
    description: 'Welcome to TongThai Restaurant in Bradford. Indulge in authentic Green Curries, sizzling Pad Thai, and vibrant Thai herbs.',
    primaryCtaText: 'View Our Menu',
    primaryCtaLink: '#popular-menu',
    secondaryCtaText: 'Book A Table',
    secondaryCtaLink: '#reservation',
  },
  {
    id: 2,
    bgImage: '/images/dining-room-1.jpg',
    imageAlt: 'Warm dining room ambiance and authentic hospitality at TongThai Bradford',
    scriptTitle: 'Volcano Duck',
    subHeader: 'HOUSE CHEF SPECIALITY ON SIZZLING PLATTER',
    description: 'Crispy roasted duck breast smothered in our signature tamarind chilli reduction with golden shallots and wok vegetables.',
    primaryCtaText: 'Chef Specials',
    primaryCtaLink: '#chef-recommended',
    secondaryCtaText: 'Reserve Table',
    secondaryCtaLink: '#reservation',
  },
  {
    id: 3,
    bgImage: '/images/restaurant-front.jpg',
    imageAlt: 'TongThai Restaurant exterior and entrance at 198-200 Keighley Road, Bradford BD9',
    scriptTitle: 'Royal Hospitality',
    subHeader: '198–200 KEIGHLEY ROAD, BRADFORD • 100% HALAL',
    description: 'A welcoming family-run haven serving handcrafted curries, steamed sea bass, and authentic Thai drinks from Wednesday to Sunday.',
    primaryCtaText: 'Guest Reviews',
    primaryCtaLink: '#reviews',
    secondaryCtaText: 'Contact & Location',
    secondaryCtaLink: '#contact',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="hero-slider-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Restaurant highlights"
    >
      {/* Slides */}
      {SLIDES.map((slide, idx) => {
        const isActive = idx === currentSlide;
        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: isActive ? 1 : 0,
              visibility: isActive ? 'visible' : 'hidden',
              transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: isActive ? 'scale(1.02)' : 'scale(1)',
              transitionProperty: 'opacity, transform',
              transitionDuration: '1s, 7s',
              overflow: 'hidden',
            }}
          >
            {/* Optimized Responsive Next.js Hero Image */}
            <Image
              src={slide.bgImage}
              alt={slide.imageAlt}
              fill
              priority={idx === 0}
              sizes="(max-width: 768px) 100vw, 1920px"
              quality={75}
              className={`hero-bg-img hero-bg-img-${slide.id}`}
              style={{ zIndex: 0 }}
            />
            {/* Cinematic Gradient Overlays */}
            <div className="hero-slide-overlay" />

            {/* Slide Content */}
            <div
              className="container"
              style={{
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: '#ffffff',
                paddingTop: '60px',
                paddingLeft: '20px',
                paddingRight: '20px',
              }}
            >
              {/* Semantic Single H1 for Slide 0, H2 for Other Slides */}
              {idx === 0 ? (
                <h1
                  style={{
                    fontFamily: 'var(--font-script)',
                    fontSize: 'clamp(2.5rem, 7vw, 7.5rem)',
                    fontWeight: 400,
                    lineHeight: 1.05,
                    color: '#ffffff',
                    textShadow: '0 4px 20px rgba(0,0,0,0.7)',
                    marginBottom: '10px',
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(-20px)',
                    transition: 'all 0.8s ease 0.2s',
                  }}
                >
                  <span className="sr-only">TongThai Restaurant Bradford — </span>
                  {slide.scriptTitle}
                </h1>
              ) : (
                <h2
                  style={{
                    fontFamily: 'var(--font-script)',
                    fontSize: 'clamp(2.5rem, 7vw, 7.5rem)',
                    fontWeight: 400,
                    lineHeight: 1.05,
                    color: '#ffffff',
                    textShadow: '0 4px 20px rgba(0,0,0,0.7)',
                    marginBottom: '10px',
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(-20px)',
                    transition: 'all 0.8s ease 0.2s',
                  }}
                >
                  {slide.scriptTitle}
                </h2>
              )}

              {/* Uppercase Subtitle */}
              {slide.subHeader && (
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '4px',
                    color: 'var(--color-gold)',
                    marginBottom: '18px',
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(-10px)',
                    transition: 'all 0.8s ease 0.35s',
                  }}
                >
                  {slide.subHeader}
                </div>
              )}

              {/* Gold Accent Divider */}
              <div
                style={{
                  width: '60px',
                  height: '2px',
                  backgroundColor: 'var(--color-gold)',
                  marginBottom: '22px',
                  opacity: isActive ? 1 : 0,
                  transition: 'all 0.8s ease 0.45s',
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
                  lineHeight: 1.7,
                  maxWidth: '720px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                  marginBottom: '36px',
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(15px)',
                  transition: 'all 0.8s ease 0.5s',
                }}
              >
                {slide.description}
              </p>

              {/* Action Buttons with Foodhub Order In Front */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s ease 0.65s',
                }}
              >
                {/* Primary Foodhub Ordering CTA */}
                <a
                  href="https://tongthaionline.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero-foodhub"
                  aria-label="Order online on Foodhub for direct delivery or collection (opens in new tab)"
                >
                  <span aria-hidden="true" style={{ fontSize: '1.25rem' }}>🛵</span>
                  <span>Order on Foodhub</span>
                </a>

                <a href={slide.primaryCtaLink} className="btn-capella-gold" style={{ padding: '15px 32px' }}>
                  {slide.primaryCtaText}
                </a>
                {slide.secondaryCtaText && (
                  <a href={slide.secondaryCtaLink} className="btn-capella-outline" style={{ padding: '15px 32px' }}>
                    {slide.secondaryCtaText}
                  </a>
                )}
              </div>

              {/* Foodhub Live Status Sub-badge */}
              <div
                style={{
                  marginTop: '18px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(15, 15, 15, 0.75)',
                  border: '1px solid rgba(255, 75, 43, 0.45)',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  backdropFilter: 'blur(4px)',
                  opacity: isActive ? 1 : 0,
                  transition: 'all 0.8s ease 0.75s',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#22c55e',
                    display: 'inline-block',
                    boxShadow: '0 0 8px #22c55e',
                  }}
                  aria-hidden="true"
                />
                <span style={{ color: '#ff4b2b', fontWeight: 800 }}>LIVE ORDERING</span>
                <span style={{ color: '#888' }}>•</span>
                <span style={{ color: '#e5e5e5' }}>Fast Delivery &amp; Collection Across Bradford</span>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hero-nav-arrow"
        style={{
          position: 'absolute',
          left: '24px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#ffffff',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--color-gold)';
          e.currentTarget.style.borderColor = 'var(--color-gold)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.35)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="hero-nav-arrow"
        style={{
          position: 'absolute',
          right: '24px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#ffffff',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--color-gold)';
          e.currentTarget.style.borderColor = 'var(--color-gold)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.35)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators / Dots */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '12px',
          zIndex: 10,
        }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Switch to slide ${i + 1}: ${SLIDES[i].scriptTitle}`}
            aria-current={i === currentSlide ? 'true' : undefined}
            style={{
              width: i === currentSlide ? '32px' : '10px',
              height: '10px',
              borderRadius: '5px',
              backgroundColor: i === currentSlide ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.4)',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Progress Line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '4px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          zIndex: 10,
        }}
      >
        <div
          key={currentSlide}
          style={{
            height: '100%',
            backgroundColor: 'var(--color-gold)',
            width: '100%',
            animation: isPaused ? 'none' : 'progressTimer 6.5s linear forwards',
            transformOrigin: 'left',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes progressTimer {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .btn-hero-foodhub {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #ff4b2b 0%, #e03a1d 100%);
          color: #ffffff !important;
          padding: 15px 34px;
          font-family: var(--font-heading);
          font-size: 0.8125rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          border-radius: 2px;
          text-decoration: none;
          box-shadow: 0 6px 24px rgba(255, 75, 43, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.25);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-hero-foodhub:hover {
          background: linear-gradient(135deg, #ff5733 0%, #c82d12 100%);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 10px 30px rgba(255, 75, 43, 0.6);
          border-color: #ffffff;
        }

        .btn-hero-foodhub:active {
          transform: translateY(0) scale(0.98);
        }

        @media (max-width: 640px) {
          .btn-hero-foodhub {
            width: 100%;
            justify-content: center;
            padding: 14px 24px;
          }
        }
      `}</style>
    </section>
  );
}
