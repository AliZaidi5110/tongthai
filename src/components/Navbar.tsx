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
        className={`site-header ${isScrolled ? 'is-scrolled' : 'not-scrolled'}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 100,
          transition: 'all 0.3s ease',
        }}
      >
        <div className="container container-wide header-nav-container">
          {/* Logo */}
          <Link href="/" className="header-logo-link">
            <div className="header-logo-icon">
              <Image
                src="/images/tongthai-logo.png"
                alt="TongThai Restaurant Logo"
                fill
                sizes="(max-width: 768px) 36px, 46px"
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="header-logo-text">
              <span className="header-logo-title">
                TONGTHAI
              </span>
              <span className="header-logo-subtitle">
                Authentic Thai Cuisine
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="desktop-nav-list">
              <li>
                <Link
                  href="/"
                  className="desktop-nav-link"
                  style={{
                    color: '#ffffff',
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
                  className="desktop-nav-link"
                  style={{ gap: '4px' }}
                >
                  Menu
                  <ChevronDown size={13} style={{ transition: 'transform 0.2s', transform: menuDropdownOpen ? 'rotate(180deg)' : 'none' }} />
                </a>

                {menuDropdownOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '-10px',
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
                <a href="#about" className="desktop-nav-link">
                  About
                </a>
              </li>

              <li>
                <a href="#chefs" className="desktop-nav-link">
                  Our Chef
                </a>
              </li>

              <li>
                <a href="#experience" className="desktop-nav-link">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#reviews" className="desktop-nav-link">
                  Reviews
                </a>
              </li>

              <li>
                <a
                  href="#delivery"
                  className="desktop-nav-link"
                  style={{ color: 'var(--color-gold)' }}
                >
                  Delivery
                </a>
              </li>

              <li>
                <a href="#contact" className="desktop-nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Action Icons & Book Button */}
          {/* Right Action Icons & Book Button */}
          <div className="header-actions-group">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              title="Search menu"
              className="header-icon-btn"
              aria-label="Search menu"
            >
              <Search size={18} />
            </button>

            {/* Cart Button */}
            <button
              onClick={openCart}
              title="View food order cart"
              className="header-icon-btn"
              aria-label="View food cart"
              style={{ position: 'relative' }}
            >
              <ShoppingCart size={19} />
              {totalItems > 0 && (
                <span className="header-cart-badge">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Quick Reservation CTA */}
            <a
              href="#reservation"
              onClick={onOpenReservation}
              className="btn-capella-gold"
              id="header-book-btn"
            >
              <Calendar size={14} />
              Book a Table
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className={`mobile-toggle-btn ${mobileMenuOpen ? 'is-active' : ''}`}
            >
              {mobileMenuOpen ? <X size={22} /> : <MenuIcon size={22} />}
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
        <div className="mobile-menu-drawer">
          <a
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-nav-link active"
          >
            Home
          </a>
          <a
            href="#chef-recommended"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-nav-link"
          >
            Chef Recommended
          </a>
          <a
            href="#popular-menu"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-nav-link"
          >
            Full Menu
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-nav-link"
          >
            About Us
          </a>
          <a
            href="#chefs"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-nav-link"
          >
            Our Chef
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-nav-link"
          >
            Dining Experience
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-nav-link"
          >
            Guest Reviews (4.6★)
          </a>
          <a
            href="#delivery"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-nav-link"
            style={{ color: 'var(--color-gold)', borderColor: 'rgba(197, 157, 40, 0.4)' }}
          >
            🛵 Foodhub Delivery
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-nav-link"
          >
            Contact &amp; Location
          </a>

          <a
            href="https://tongthaionline.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-capella-gold mobile-drawer-cta"
            style={{ backgroundColor: '#ff4b2b', borderColor: '#ff4b2b', color: '#ffffff' }}
          >
            🛵 Order on Foodhub (Delivery &amp; Collection)
          </a>

          <a
            href="#reservation"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReservation?.();
            }}
            className="btn-capella-gold mobile-drawer-cta"
          >
            <Calendar size={16} /> Book Table Now
          </a>

          <a href="tel:01274499088" className="mobile-drawer-phone">
            📞 01274 499088 • 198–200 Keighley Rd
          </a>
        </div>
      )}

      <style jsx global>{`
        /* Header Base */
        .site-header {
          padding: 10px 0;
          background-color: rgba(14, 14, 14, 0.94);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 20px rgba(0,0,0,0.45);
        }

        @media (min-width: 992px) {
          .site-header.not-scrolled {
            background-color: transparent;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
            box-shadow: none;
            padding: 22px 0;
          }
          .site-header.is-scrolled {
            background-color: rgba(18, 18, 18, 0.96);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 4px 20px rgba(0,0,0,0.35);
            padding: 14px 0;
          }
        }

        .header-nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding-left: clamp(12px, 2vw, 32px);
          padding-right: clamp(12px, 2vw, 32px);
          gap: clamp(8px, 1.4vw, 20px);
        }

        /* Logo Link - Always preserve full logo width, never shrink */
        .header-logo-link {
          display: flex;
          align-items: center;
          gap: clamp(8px, 1vw, 14px);
          z-index: 10;
          flex-shrink: 0 !important;
          text-decoration: none;
        }

        .header-logo-icon {
          position: relative;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.5);
          border: 1.5px solid var(--color-gold);
          flex-shrink: 0 !important;
        }

        @media (min-width: 769px) {
          .header-logo-icon {
            width: 46px;
            height: 46px;
          }
        }

        .header-logo-text {
          display: flex;
          flex-direction: column;
          flex-shrink: 0 !important;
        }

        .header-logo-title {
          font-family: var(--font-heading);
          font-size: clamp(1rem, 1.2vw, 1.1875rem);
          font-weight: 800;
          letter-spacing: clamp(1.2px, 0.15vw, 2.2px);
          color: #ffffff;
          line-height: 1.1;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .header-logo-subtitle {
          font-family: var(--font-heading);
          font-size: clamp(0.5rem, 0.6vw, 0.625rem);
          font-weight: 600;
          letter-spacing: clamp(1px, 0.12vw, 1.8px);
          color: var(--color-gold);
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* Desktop Navigation Container */
        .desktop-nav {
          display: none;
          flex: 1 1 auto;
          justify-content: center;
          margin: 0 clamp(6px, 1vw, 18px);
          min-width: 0;
        }

        .desktop-nav-list {
          display: flex;
          align-items: center;
          gap: clamp(8px, 1.2vw, 22px);
          list-style: none;
          margin: 0;
          padding: 0;
          white-space: nowrap;
        }

        .desktop-nav-link {
          font-family: var(--font-heading);
          font-size: clamp(0.6875rem, 0.78vw, 0.8125rem);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: clamp(0.8px, 0.08vw, 1.4px);
          color: rgba(255, 255, 255, 0.85);
          white-space: nowrap;
          padding: 6px 2px;
          transition: color 0.2s ease;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }

        .desktop-nav-link:hover {
          color: var(--color-gold);
        }

        /* Actions Group */
        .header-actions-group {
          display: flex;
          align-items: center;
          gap: clamp(6px, 1vw, 14px);
          flex-shrink: 0 !important;
        }

        .header-icon-btn {
          color: #ffffff;
          padding: 7px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          background: transparent;
          flex-shrink: 0;
        }

        .header-icon-btn:hover {
          color: var(--color-gold);
          background-color: rgba(255, 255, 255, 0.06);
        }

        .header-cart-badge {
          position: absolute;
          top: -2px;
          right: -4px;
          background-color: var(--color-gold);
          color: #ffffff;
          font-size: 0.6875rem;
          font-weight: 700;
          min-width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 3px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.4);
        }

        /* Hamburger Toggle Button */
        .mobile-toggle-btn {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 38px !important;
          height: 38px !important;
          min-width: 38px !important;
          border-radius: 4px !important;
          background-color: rgba(197, 157, 40, 0.16) !important;
          border: 1.5px solid var(--color-gold) !important;
          color: var(--color-gold) !important;
          flex-shrink: 0 !important;
          cursor: pointer !important;
          margin-left: 2px !important;
          transition: all 0.2s ease !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;
        }

        .mobile-toggle-btn.is-active,
        .mobile-toggle-btn:hover,
        .mobile-toggle-btn:active {
          background-color: var(--color-gold) !important;
          color: #ffffff !important;
        }

        #header-book-btn {
          display: none;
          padding: clamp(8px, 0.8vw, 11px) clamp(12px, 1.2vw, 22px);
          font-size: clamp(0.6875rem, 0.75vw, 0.75rem);
          letter-spacing: clamp(1px, 0.1vw, 1.5px);
          text-transform: uppercase;
          font-family: var(--font-heading);
          font-weight: 600;
          border-radius: 2px;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
          flex-shrink: 0 !important;
        }

        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
          #header-book-btn {
            display: inline-flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }

        /* Mobile Drawer */
        .mobile-menu-drawer {
          position: fixed;
          inset: 0;
          z-index: 99;
          background-color: rgba(12, 12, 12, 0.98);
          padding: 75px 16px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 12px;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          animation: fadeIn 0.25s ease;
        }

        .mobile-nav-link {
          font-family: var(--font-heading);
          font-size: 0.9375rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #e5e5e5;
          width: 100%;
          max-width: 340px;
          text-align: center;
          padding: 12px 16px;
          border-radius: 4px;
          background-color: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.2s ease;
          display: block;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link:active,
        .mobile-nav-link.active {
          color: var(--color-gold);
          border-color: rgba(197, 157, 40, 0.4);
          background-color: rgba(197, 157, 40, 0.1);
        }

        .mobile-drawer-cta {
          margin-top: 10px;
          width: 100%;
          max-width: 340px;
          padding: 14px 20px;
          text-align: center;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .mobile-drawer-phone {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          color: #999999;
          margin-top: 8px;
          letter-spacing: 1px;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
