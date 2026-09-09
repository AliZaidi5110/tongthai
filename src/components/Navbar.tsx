'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Search, Menu as MenuIcon, X, Calendar, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenReservation?: () => void;
}

export default function Navbar({ onOpenReservation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const menuSection = document.getElementById('popular-menu');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }
      setSearchOpen(false);
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.35s ease',
          backgroundColor: isScrolled ? 'rgba(18, 18, 18, 0.96)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: isScrolled
            ? '1px solid rgba(255, 255, 255, 0.08)'
            : '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.35)' : 'none',
          padding: isScrolled ? '14px 0' : '22px 0',
        }}
      >
        <div className="container container-wide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', zIndex: 10 }}>
            <div
              style={{
                position: 'relative',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
                border: '1.5px solid var(--color-gold)',
                flexShrink: 0,
              }}
            >
              <Image
                src="/images/tongthai-logo.png"
                alt="TongThai Restaurant Logo"
                fill
                sizes="46px"
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1875rem',
                  fontWeight: 800,
                  letterSpacing: '2.5px',
                  color: '#ffffff',
                  lineHeight: 1.1,
                  textTransform: 'uppercase',
                }}
              >
                TONGTHAI
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.625rem',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  color: 'var(--color-gold)',
                  textTransform: 'uppercase',
                }}
              >
                Authentic Thai Cuisine
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav style={{ display: 'none' }} className="desktop-nav">
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '30px',
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: '#ffffff',
                    position: 'relative',
                    padding: '8px 0',
                    borderBottom: '2px solid var(--color-gold)',
                  }}
                >
                  Home
                </Link>
              </li>

              {/* Menu with dropdown */}
              <li
                style={{ position: 'relative' }}
                onMouseEnter={() => setMenuDropdownOpen(true)}
                onMouseLeave={() => setMenuDropdownOpen(false)}
              >
                <a
                  href="#chef-recommended"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '8px 0',
                  }}
                >
                  Menu
                  <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: menuDropdownOpen ? 'rotate(180deg)' : 'none' }} />
                </a>

                {menuDropdownOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '-20px',
                      backgroundColor: '#181818',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
                      borderRadius: '2px',
                      padding: '12px 0',
                      minWidth: '220px',
                      zIndex: 100,
                    }}
                  >
                    <a
                      href="#chef-recommended"
                      style={{
                        display: 'block',
                        padding: '10px 20px',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        color: '#cccccc',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(197, 157, 40, 0.15)';
                        e.currentTarget.style.color = '#c59d28';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#cccccc';
                      }}
                      onClick={() => setMenuDropdownOpen(false)}
                    >
                      Chef Recommended (Cards)
                    </a>
                    <a
                      href="#popular-menu"
                      style={{
                        display: 'block',
                        padding: '10px 20px',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        color: '#cccccc',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(197, 157, 40, 0.15)';
                        e.currentTarget.style.color = '#c59d28';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#cccccc';
                      }}
                      onClick={() => setMenuDropdownOpen(false)}
                    >
                      Full A La Carte Menu (Classic)
                    </a>
                  </div>
                )}
              </li>

              <li>
                <a
                  href="#about"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#chefs"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  Our Chef
                </a>
              </li>

              <li>
                <a
                  href="#experience"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#reviews"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  Reviews
                </a>
              </li>

              <li>
                <a
                  href="#reservation"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  Reservation
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Action Icons & Book Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              title="Search menu"
              style={{
                color: '#ffffff',
                padding: '8px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#c59d28')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
            >
              <Search size={18} />
            </button>

            {/* Cart Button */}
            <button
              onClick={openCart}
              title="View food order cart"
              style={{
                color: '#ffffff',
                position: 'relative',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#c59d28')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
            >
              <ShoppingCart size={19} />
              {totalItems > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-2px',
                    right: '-4px',
                    backgroundColor: 'var(--color-gold)',
                    color: '#ffffff',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    minWidth: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 3px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
                  }}
                >
                  {totalItems}
                </span>
              )}
            </button>

            {/* Quick Reservation CTA */}
            <a
              href="#reservation"
              onClick={onOpenReservation}
              className="btn-capella-gold"
              style={{
                display: 'none',
                padding: '10px 22px',
                fontSize: '0.75rem',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                borderRadius: '2px',
                alignItems: 'center',
                gap: '6px',
              }}
              id="header-book-btn"
            >
              <Calendar size={14} />
              Book a Table
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                color: '#ffffff',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="mobile-toggle-btn"
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        {/* Expanding Search Bar */}
        {searchOpen && (
          <div
            style={{
              backgroundColor: '#161616',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              padding: '16px 0',
              animation: 'fadeIn 0.25s ease',
            }}
          >
            <div className="container">
              <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Search size={20} color="var(--color-gold)" />
                <input
                  type="text"
                  placeholder="Search our culinary dishes, wine or ingredients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#ffffff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                  }}
                />
                <button
                  type="submit"
                  className="btn-capella-gold"
                  style={{ padding: '8px 20px', fontSize: '0.75rem' }}
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  style={{ color: '#888', padding: '6px' }}
                >
                  <X size={18} />
                </button>
              </form>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            backgroundColor: 'rgba(10, 10, 10, 0.98)',
            paddingTop: '90px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '24px',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          <a
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.125rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: 'var(--color-gold)',
            }}
          >
            Home
          </a>
          <a
            href="#chef-recommended"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.125rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: '#ffffff',
            }}
          >
            Chef Recommended
          </a>
          <a
            href="#popular-menu"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.125rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: '#ffffff',
            }}
          >
            Full Menu
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.125rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: '#ffffff',
            }}
          >
            About Us
          </a>
          <a
            href="#chefs"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.125rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: '#ffffff',
            }}
          >
            Our Chef
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.125rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: '#ffffff',
            }}
          >
            Dining Experience
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.125rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: '#ffffff',
            }}
          >
            Guest Reviews (4.6★)
          </a>
          <a
            href="#reservation"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReservation?.();
            }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.125rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: 'var(--color-gold)',
            }}
          >
            Reservation
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.125rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: '#ffffff',
            }}
          >
            Contact
          </a>
        </div>
      )}

      <style jsx global>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: block !important;
          }
          #header-book-btn {
            display: inline-flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
