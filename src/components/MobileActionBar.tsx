'use client';

import React from 'react';
import { Phone, Utensils, Calendar, ShoppingBag } from 'lucide-react';

export default function MobileActionBar() {
  return (
    <nav
      aria-label="Mobile Quick Action Navigation"
      className="mobile-action-bar"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99,
        backgroundColor: '#141414',
        borderTop: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.5)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          height: '60px',
        }}
      >
        {/* Call Now */}
        <a
          href="tel:01274499088"
          aria-label="Call TongThai restaurant at 01274 499088"
          className="mobile-action-btn"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            gap: '4px',
            textDecoration: 'none',
            minHeight: '48px',
          }}
        >
          <Phone size={18} color="var(--color-gold)" aria-hidden="true" />
          <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Call
          </span>
        </a>

        {/* View Menu */}
        <a
          href="#popular-menu"
          aria-label="View TongThai popular dishes and menu"
          className="mobile-action-btn"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            gap: '4px',
            textDecoration: 'none',
            minHeight: '48px',
          }}
        >
          <Utensils size={18} color="var(--color-gold)" aria-hidden="true" />
          <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Menu
          </span>
        </a>

        {/* Reserve Table */}
        <a
          href="#reservation"
          aria-label="Book a table at TongThai"
          className="mobile-action-btn"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            gap: '4px',
            textDecoration: 'none',
            minHeight: '48px',
          }}
        >
          <Calendar size={18} color="var(--color-gold)" aria-hidden="true" />
          <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Book
          </span>
        </a>

        {/* Order Online */}
        <a
          href="https://tongthaionline.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order TongThai food online via Foodhub (opens in new tab)"
          className="mobile-action-btn order-cta"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ff4b2b',
            color: '#ffffff',
            gap: '4px',
            textDecoration: 'none',
            minHeight: '48px',
          }}
        >
          <ShoppingBag size={18} color="#ffffff" aria-hidden="true" />
          <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Order
          </span>
        </a>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .mobile-action-bar {
            display: none !important;
          }
        }
        .mobile-action-btn:active {
          opacity: 0.8;
          background-color: rgba(255, 255, 255, 0.05);
        }
        .mobile-action-btn.order-cta:active {
          background-color: #e03a1d !important;
        }
      `}</style>
    </nav>
  );
}
