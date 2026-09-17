'use client';

import React from 'react';
import Image from 'next/image';
import { Truck, ShoppingBag, Calendar, ShieldCheck, Sparkles, ExternalLink, Clock, Phone, Percent } from 'lucide-react';

export default function FoodhubDeliverySection() {
  const foodhubUrl = 'https://tongthaionline.co.uk/';

  return (
    <section id="delivery" className="section-padding" style={{ backgroundColor: '#141414', color: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle background glow */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          right: '-150px',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197, 157, 40, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-120px',
          left: '-120px',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 75, 43, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(197, 157, 40, 0.15)',
              border: '1px solid rgba(197, 157, 40, 0.35)',
              padding: '6px 16px',
              borderRadius: '20px',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--color-gold)',
              marginBottom: '14px',
            }}
          >
            <Sparkles size={14} /> Official Foodhub Online Partner
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: '8px',
              textShadow: '0 2px 14px rgba(0,0,0,0.5)',
            }}
          >
            Fast Delivery &amp; Foodhub Ordering
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(0.8125rem, 2vw, 0.9375rem)',
              fontWeight: 500,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#cccccc',
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            Enjoy Authentic Royal Thai Flavours Delivered Hot &amp; Fresh To Your Doorstep Across Bradford
          </p>

          <div
            style={{
              width: '50px',
              height: '2px',
              backgroundColor: 'var(--color-gold)',
              margin: '18px auto 0',
            }}
          />
        </div>

        {/* 3 Interactive Service Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {/* Card 1: Doorstep Delivery */}
          <div className="foodhub-card">
            <div className="foodhub-card-icon" style={{ backgroundColor: 'rgba(255, 75, 43, 0.15)', color: '#ff4b2b', borderColor: 'rgba(255, 75, 43, 0.3)' }}>
              <Truck size={28} />
            </div>
            <span className="foodhub-badge">30–45 Mins</span>
            <h3 className="foodhub-card-title">Home Delivery</h3>
            <p className="foodhub-card-desc">
              Sizzling Volcano Duck, slow-simmered Green Curries, and wok-flamed Pad Thai delivered piping hot straight to your home across Bradford.
            </p>
            <ul className="foodhub-features-list">
              <li>✓ Contactless courier delivery</li>
              <li>✓ £5 minimum order threshold</li>
              <li>✓ Live SMS &amp; Foodhub tracking</li>
            </ul>
            <a
              href={foodhubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order TongThai food delivery online via Foodhub (opens in new tab)"
              className="foodhub-card-btn"
            >
              Order Delivery <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>

          {/* Card 2: Click & Collect Takeaway */}
          <div className="foodhub-card featured">
            <div className="featured-ribbon">POPULAR</div>
            <div className="foodhub-card-icon" style={{ backgroundColor: 'rgba(197, 157, 40, 0.18)', color: 'var(--color-gold)', borderColor: 'rgba(197, 157, 40, 0.4)' }}>
              <ShoppingBag size={28} aria-hidden="true" />
            </div>
            <span className="foodhub-badge" style={{ backgroundColor: 'rgba(197, 157, 40, 0.2)', color: 'var(--color-gold)' }}>Ready in 20 Mins</span>
            <h3 className="foodhub-card-title">Click &amp; Collect</h3>
            <p className="foodhub-card-desc">
              Order directly online and pick up fresh takeaway from our restaurant at 198–200 Keighley Road with zero queues and zero waiting time.
            </p>
            <ul className="foodhub-features-list">
              <li>✓ Up to 15%–20% online discount</li>
              <li>✓ Freshly packaged hot containers</li>
              <li>✓ 100% Halal certified kitchen</li>
            </ul>
            <a
              href={foodhubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order takeaway collection online via Foodhub (opens in new tab)"
              className="foodhub-card-btn featured-btn"
            >
              Order Collection <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>

          {/* Card 3: Foodhub Table Booking */}
          <div className="foodhub-card">
            <div className="foodhub-card-icon" style={{ backgroundColor: 'rgba(46, 125, 50, 0.15)', color: '#4caf50', borderColor: 'rgba(46, 125, 50, 0.3)' }}>
              <Calendar size={28} aria-hidden="true" />
            </div>
            <span className="foodhub-badge" style={{ backgroundColor: 'rgba(76, 175, 80, 0.15)', color: '#81c784' }}>Instant Confirmation</span>
            <h3 className="foodhub-card-title">Table Booking</h3>
            <p className="foodhub-card-desc">
              Reserve your dining table directly via Foodhub or through our restaurant booking desk. Guaranteed seating for family dinners and gatherings.
            </p>
            <ul className="foodhub-features-list">
              <li>✓ Instant reservation confirmation</li>
              <li>✓ 15 tables in main dining hall</li>
              <li>✓ Wed–Sun: 3:00 PM – 9:00 PM</li>
            </ul>
            <a
              href={foodhubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a table via Foodhub (opens in new tab)"
              className="foodhub-card-btn"
            >
              Book via Foodhub <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom Banner Callout with Direct Foodhub Links */}
        <div className="foodhub-cta-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ff4b2b',
                fontWeight: 900,
                fontSize: '1.25rem',
                flexShrink: 0,
                boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
              }}
            >
              <Percent size={24} color="#ff4b2b" />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.0625rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.5px' }}>
                Order Directly on <span style={{ color: '#ff4b2b' }}>tongthaionline.co.uk</span>
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#aaaaaa' }}>
                Zero service fees on Foodhub • Supports Apple Pay, Google Pay, Credit/Debit Card &amp; Cash
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={foodhubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open TongThai Foodhub online ordering portal (opens in new tab)"
              className="btn-capella-gold"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 28px',
                fontSize: '0.8125rem',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontWeight: 700,
                boxShadow: '0 4px 16px rgba(197, 157, 40, 0.35)',
              }}
            >
              Go to Foodhub Portal <ExternalLink size={15} aria-hidden="true" />
            </a>
            <a
              href="tel:+447506288133"
              aria-label="Call TongThai Bradford restaurant at +44 7506 288133"
              className="btn-capella-outline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 22px',
                fontSize: '0.8125rem',
                letterSpacing: '1px',
              }}
            >
              <Phone size={15} aria-hidden="true" /> Call +44 7506 288133
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .foodhub-card {
          background-color: #1c1c1c;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.3s ease;
        }

        .foodhub-card:hover {
          transform: translateY(-4px);
          border-color: rgba(197, 157, 40, 0.4);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
        }

        .foodhub-card.featured {
          border-color: rgba(197, 157, 40, 0.5);
          background-color: #222222;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .featured-ribbon {
          position: absolute;
          top: 14px;
          right: 14px;
          background-color: var(--color-gold);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 0.625rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          padding: 3px 10px;
          border-radius: 2px;
          text-transform: uppercase;
        }

        .foodhub-card-icon {
          width: 54px;
          height: 54px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid transparent;
          margin-bottom: 20px;
        }

        .foodhub-badge {
          display: inline-block;
          font-family: var(--font-heading);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 2px;
          background-color: rgba(255, 255, 255, 0.08);
          color: #cccccc;
          width: fit-content;
          margin-bottom: 12px;
        }

        .foodhub-card-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .foodhub-card-desc {
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: #999999;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .foodhub-features-list {
          list-style: none;
          padding: 0;
          margin: 0 0 24px 0;
          font-family: var(--font-body);
          font-size: 0.8125rem;
          color: #bbbbbb;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .foodhub-card-btn {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 12px 20px;
          border-radius: 2px;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          background-color: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .foodhub-card-btn:hover {
          background-color: #ffffff;
          color: #111111;
          border-color: #ffffff;
        }

        .featured-btn {
          background-color: var(--color-gold);
          border-color: var(--color-gold);
          color: #ffffff;
        }

        .featured-btn:hover {
          background-color: var(--color-gold-dark);
          border-color: var(--color-gold-dark);
          color: #ffffff;
        }

        .foodhub-cta-banner {
          background-color: #1f1f1f;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          padding: 24px 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
        }

        @media (max-width: 768px) {
          .foodhub-cta-banner {
            padding: 20px 16px;
          }
        }
      `}</style>
    </section>
  );
}
