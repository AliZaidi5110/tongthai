import React from 'react';
import Link from 'next/link';
import { Utensils, Calendar, Phone, Home } from 'lucide-react';

export const metadata = {
  title: 'Page Not Found (404) | TongThai Restaurant Bradford',
  description:
    'The page you are looking for might have been removed or is temporarily unavailable. Browse our authentic Thai menu or book a table at TongThai Restaurant Bradford.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#121212',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '4px',
            color: 'var(--color-gold)',
            display: 'block',
            marginBottom: '12px',
          }}
        >
          Error 404
        </span>

        <h1
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 400,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '16px',
            textShadow: '0 4px 20px rgba(0,0,0,0.6)',
          }}
        >
          Page Not Found
        </h1>

        <div
          style={{
            width: '60px',
            height: '2px',
            backgroundColor: 'var(--color-gold)',
            margin: '0 auto 24px',
          }}
        />

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.0625rem',
            lineHeight: 1.7,
            color: '#cccccc',
            marginBottom: '36px',
          }}
        >
          We couldn&apos;t find the page you were looking for. Let us guide you back to our delicious Thai dishes, online table reservations, or contact our team in Bradford.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px',
            justifyContent: 'center',
          }}
        >
          <Link
            href="/"
            className="btn-capella-gold"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              textDecoration: 'none',
            }}
          >
            <Home size={16} /> Return Home
          </Link>

          <Link
            href="/#popular-menu"
            className="btn-capella-outline"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              textDecoration: 'none',
            }}
          >
            <Utensils size={16} /> View Our Menu
          </Link>

          <Link
            href="/#reservation"
            className="btn-capella-outline"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              textDecoration: 'none',
            }}
          >
            <Calendar size={16} /> Book a Table
          </Link>

          <a
            href="tel:01274499088"
            className="btn-capella-outline"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              textDecoration: 'none',
              borderColor: 'var(--color-gold)',
              color: 'var(--color-gold)',
            }}
          >
            <Phone size={16} /> Call 01274 499088
          </a>
        </div>
      </div>
    </main>
  );
}
