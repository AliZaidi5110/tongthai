'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Clock, Phone, ChevronUp, Star } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" style={{ backgroundColor: '#111111', color: '#aaaaaa', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Upper Footer Columns */}
      <div className="container" style={{ padding: '80px 24px 60px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
          }}
        >
          {/* Column 1: Featured Culinary Artistry Image */}
          <div>
            <div
              style={{
                position: 'relative',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom: '18px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                aspectRatio: '16 / 10',
              }}
            >
              <Image
                src="/images/photodune-5087439-chicken-tagine-m.jpg"
                alt="TongThai Authentic Slow-Simmered Thai Cuisine"
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                }}
              >
                TongThai Kitchen
              </span>
              <span style={{ color: 'var(--color-gold)', fontSize: '0.75rem' }}>• 100% Halal</span>
            </div>
            <p style={{ fontSize: '0.8125rem', lineHeight: '1.7', color: '#888' }}>
              Slow-simmered curries, sizzling wok specialties, and authentic Royal Thai recipes prepared fresh to order in Bradford.
            </p>
          </div>

          {/* Column 2: Address */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#ffffff',
                marginBottom: '20px',
                position: 'relative',
                paddingBottom: '10px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              Address
            </h3>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', lineHeight: 1.8 }}>
              <MapPin size={20} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '4px' }} aria-hidden="true" />
              <address style={{ fontStyle: 'normal', fontSize: '0.9375rem', color: '#cccccc' }}>
                198–200 Keighley Road,<br />
                Bradford, BD9 4JZ<br />
                United Kingdom
              </address>
            </div>
          </div>

          {/* Column 3: Open Hours & Contact */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#ffffff',
                marginBottom: '20px',
                position: 'relative',
                paddingBottom: '10px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              Open Hours
            </h3>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '16px' }}>
              <Clock size={20} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '4px' }} aria-hidden="true" />
              <div style={{ fontSize: '0.9375rem', color: '#cccccc', lineHeight: 1.6 }}>
                <div>Wednesday – Sunday: 3:00 PM – 9:00 PM</div>
                <div style={{ color: '#ff6b6b' }}>Monday &amp; Tuesday: Closed</div>
                <div style={{ color: 'var(--color-gold)', fontSize: '0.8125rem', marginTop: '4px' }}>
                  100% Halal Food Available
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <Phone size={20} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '4px' }} aria-hidden="true" />
              <div style={{ fontSize: '0.9375rem', color: '#cccccc', lineHeight: 1.6 }}>
                <div>
                  <a
                    href="tel:01274499088"
                    aria-label="Call TongThai primary phone number 01274 499088"
                    style={{ color: '#ffffff' }}
                  >
                    01274 499088
                  </a>
                </div>
                <div>
                  <a
                    href="tel:07506288133"
                    aria-label="Call TongThai mobile number 07506 288133"
                    style={{ color: '#ffffff' }}
                  >
                    07506 288133
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Find Us On */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#ffffff',
                marginBottom: '20px',
                position: 'relative',
                paddingBottom: '10px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              Find Us On
            </h3>
            <p style={{ fontSize: '0.8125rem', color: '#888', marginBottom: '16px' }}>
              Follow our daily kitchen specials, verified diner feedback, and announcements across our official channels.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={RESTAURANT_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="TongThai Facebook page (opens in new tab)"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: '#1f1f1f',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.2s',
                }}
                className="social-btn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="TongThai Instagram page (opens in new tab)"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: '#1f1f1f',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.2s',
                }}
                className="social-btn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href={RESTAURANT_INFO.googleSearchUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="TongThai verified Google profile and reviews (opens in new tab)"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: '#1f1f1f',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.2s',
                }}
                className="social-btn"
              >
                <Star size={16} fill="var(--color-gold)" color="var(--color-gold)" aria-hidden="true" />
              </a>
            </div>

            {/* Foodhub Online Order Badge */}
            <div style={{ marginTop: '18px' }}>
              <a
                href="https://tongthaionline.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order online for delivery or collection on Foodhub (opens in new tab)"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 75, 43, 0.12)',
                  border: '1px solid rgba(255, 75, 43, 0.35)',
                  padding: '8px 14px',
                  borderRadius: '3px',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s ease',
                }}
              >
                <span style={{ color: '#ff4b2b', fontSize: '1rem', lineHeight: 1 }} aria-hidden="true">🛵</span> Order on Foodhub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Subfooter Bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          backgroundColor: '#0a0a0a',
          padding: '24px 0',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          {/* Footer Navigation */}
          <nav aria-label="Footer Navigation" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="#about" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#999' }}>
              About
            </a>
            <a href="#chefs" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#999' }}>
              Our Chef
            </a>
            <a href="#popular-menu" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#999' }}>
              Menu
            </a>
            <a href="#delivery" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--color-gold)' }}>
              Delivery
            </a>
            <a href="#reservation" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#999' }}>
              Reservation
            </a>
            <a
              href="https://tongthaionline.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Foodhub Online Ordering Portal (opens in new tab)"
              style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#ff4b2b', fontWeight: 700 }}
            >
              Foodhub Portal ↗
            </a>
          </nav>

          {/* Copyright */}
          <div style={{ fontSize: '0.8125rem', color: '#666' }}>
            © {new Date().getFullYear()} TongThai Restaurant. Authentic Thai Cuisine. All Rights Reserved.
          </div>

          {/* Scroll To Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-gold)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s',
              border: 'none',
              cursor: 'pointer',
            }}
            className="scroll-top-btn"
          >
            <ChevronUp size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .social-btn:hover {
          background-color: var(--color-gold) !important;
          color: #ffffff !important;
          transform: translateY(-2px);
        }
        .scroll-top-btn:hover {
          transform: translateY(-3px);
          background-color: var(--color-gold-dark);
        }
      `}</style>
    </footer>
  );
}
