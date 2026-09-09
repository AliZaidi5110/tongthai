'use client';

import React from 'react';
import { REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';
import { Star, MessageSquareQuote, ExternalLink } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="section-padding" style={{ backgroundColor: '#faf8f5' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--color-gold)',
              marginBottom: '8px',
            }}
          >
            Guest Testimonials &amp; Ratings
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: 400,
              color: 'var(--color-text-dark)',
              lineHeight: 1.1,
              marginBottom: '8px',
            }}
          >
            What Our Guests Say
          </h2>

          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.875rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: '#888888',
            }}
          >
            Authentic Thai Flavours Loved by Diners Across Bradford &amp; Yorkshire
          </div>

          <div
            style={{
              width: '50px',
              height: '2px',
              backgroundColor: 'var(--color-gold)',
              margin: '18px auto 0',
            }}
          />
        </div>

        {/* Google Reviews Summary Rating Banner */}
        <div
          style={{
            maxWidth: '620px',
            margin: '0 auto 50px',
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-border)',
            borderRadius: '4px',
            padding: '24px 32px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#f4f0e6',
                color: 'var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.6rem',
                fontWeight: 800,
                fontFamily: 'var(--font-heading)',
              }}
            >
              4.6
            </div>
            <div>
              <div style={{ display: 'flex', gap: '3px', marginBottom: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#fbbc04" color="#fbbc04" />
                ))}
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8125rem', fontWeight: 700, color: '#333' }}>
                EXCELLENT RATING ON GOOGLE
              </div>
              <div style={{ fontSize: '0.75rem', color: '#888' }}>
                Based on 300+ Verified Customer Reviews
              </div>
            </div>
          </div>

          <a
            href={RESTAURANT_INFO.googleSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-capella-gold"
            style={{ padding: '10px 20px', fontSize: '0.6875rem' }}
          >
            Google Reviews <ExternalLink size={13} style={{ marginLeft: '4px' }} />
          </a>
        </div>

        {/* 4 Review Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              className="review-card"
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#fbbc04" color="#fbbc04" />
                    ))}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: 'var(--color-gold)',
                      backgroundColor: 'rgba(197, 157, 40, 0.1)',
                      padding: '3px 8px',
                      borderRadius: '2px',
                    }}
                  >
                    {rev.source}
                  </span>
                </div>

                <div style={{ marginBottom: '16px', color: 'var(--color-gold)' }}>
                  <MessageSquareQuote size={28} />
                </div>

                <p
                  style={{
                    fontSize: '0.9375rem',
                    lineHeight: '1.7',
                    color: '#555555',
                    fontStyle: 'italic',
                    marginBottom: '20px',
                  }}
                >
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              <div style={{ borderTop: '1px solid #f0eee8', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-text-dark)' }}>
                    {rev.author}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#999' }}>{rev.badge || 'Verified Diner'}</div>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#aaa' }}>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Social media engagement bar */}
        <div
          style={{
            textAlign: 'center',
            paddingTop: '20px',
          }}
        >
          <span style={{ fontSize: '0.875rem', color: '#666', marginRight: '14px' }}>
            Follow our daily kitchen updates and community specials:
          </span>
          <a
            href={RESTAURANT_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'var(--color-gold)',
              textDecoration: 'underline',
              marginRight: '20px',
            }}
          >
            Facebook @tongthaibradford
          </a>
          <a
            href={RESTAURANT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'var(--color-gold)',
              textDecoration: 'underline',
            }}
          >
            Instagram @tongthaibradford
          </a>
        </div>
      </div>

      <style jsx>{`
        .review-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08) !important;
        }
      `}</style>
    </section>
  );
}
