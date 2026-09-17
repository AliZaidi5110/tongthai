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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (mobileMenuOpen) setMobileMenuOpen(false);
        if (searchOpen) setSearchOpen(false);
        if (menuDropdownOpen) setMenuDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, searchOpen, menuDropdownOpen]);

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
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

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
        {/* Top Announcement Bar: Foodhub Online Ordering */}
        <div className="top-foodhub-strip">
          <div
            className="container container-wide"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '6px clamp(12px, 2vw, 32px)',
              flexWrap: 'wrap',
              gap: '6px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="top-foodhub-badge">
                FOODHUB PARTNER
              </span>
              <span className="top-foodhub-text">
                🛵 Order Online for Fast Delivery &amp; Collection Across Bradford • 100% Halal
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <a
                href="tel:+447506288133"
                className="top-phone-link"
                aria-label="Call TongThai Bradford at +44 7506 288133"
              >
                📞 +44 7506 288133
              </a>
              <a
                href="https://tongthaionline.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="top-foodhub-cta"
                aria-label="Order online on Foodhub with instant delivery or collection (opens in new tab)"
              >
                <span>🛵</span> Order on Foodhub ↗
              </a>
            </div>
          </div>
        </div>

        <div className="container container-wide header-nav-container">
          {/* Logo */}
          <Link href="/" className="header-logo-link" aria-label="TongThai Restaurant Bradford Home">
            <div className="header-logo-icon">
              <Image
                src="/images/tongthai-logo.png"
                alt="TongThai Restaurant Bradford Logo"
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
          <nav className="desktop-nav" aria-label="Main Navigation">
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
                  aria-haspopup="true"
                  aria-expanded={menuDropdownOpen}
                  onFocus={() => setMenuDropdownOpen(true)}
                  onClick={(e) => {
                    setMenuDropdownOpen((prev) => !prev);
                  }}
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
              aria-label={searchOpen ? "Close menu search" : "Search restaurant menu"}
              aria-expanded={searchOpen}
            >
              <Search size={18} />
            </button>

            {/* Cart Button */}
            <button
              onClick={openCart}
              title="View food order cart"
              className="header-icon-btn"
              aria-label={`View food order cart, ${totalItems} item${totalItems === 1 ? '' : 's'}`}
              style={{ position: 'relative' }}
            >
              <ShoppingCart size={19} />
              {totalItems > 0 && (
                <span className="header-cart-badge">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Foodhub Online Order Header CTA Button */}
            <a
              href="https://tongthaionline.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-header-foodhub"
              id="header-foodhub-btn"
              aria-label="Order online from TongThai on Foodhub (opens in new tab)"
            >
              <span aria-hidden="true" style={{ fontSize: '1rem' }}>🛵</span>
              <span>Order on Foodhub</span>
            </a>

            {/* Quick Reservation CTA */}
            <a
              href="#reservation"
              onClick={onOpenReservation}
              className="btn-capella-gold"
              id="header-book-btn"
              aria-label="Book a table at TongThai Restaurant"
            >
              <Calendar size={14} />
              Book a Table
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
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
              <form role="search" onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Search size={20} color="var(--color-gold)" aria-hidden="true" />
                <label htmlFor="header-search-input" className="sr-only">
                  Search menu items
                </label>
                <input
                  id="header-search-input"
                  type="search"
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
                  aria-label="Submit search"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  style={{ color: '#888', padding: '6px' }}
                  aria-label="Close search input"
                >
                  <X size={18} />
                </button>
              </form>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Slide-Out Drawer with Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(4px)',
              zIndex: 199,
            }}
          />
          <div
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className="mobile-menu-drawer"
            style={{ zIndex: 200 }}
          >
          {/* Top Foodhub Order CTA inside Mobile Drawer */}
          <a
            href="https://tongthaionline.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-drawer-foodhub-top"
            aria-label="Order online on Foodhub for delivery or collection (opens in new tab)"
          >
            <span style={{ fontSize: '1.25rem' }}>🛵</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 800, fontSize: '0.8125rem', letterSpacing: '1px' }}>ORDER ON FOODHUB</div>
              <div style={{ fontSize: '0.6875rem', opacity: 0.9 }}>Fast Delivery &amp; Collection Across Bradford</div>
            </div>
            <span style={{ marginLeft: 'auto', fontWeight: 800 }}>↗</span>
          </a>

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

          <a href="tel:+447506288133" className="mobile-drawer-phone">
            📞 +44 7506 288133 • 198–200 Keighley Rd
          </a>
        </div>
        </>
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

        .top-foodhub-strip {
          background: linear-gradient(90deg, #0e0e0e 0%, #1e1210 50%, #0e0e0e 100%);
          border-bottom: 1px solid rgba(255, 75, 43, 0.35);
          font-size: 0.75rem;
          transition: all 0.3s ease;
        }

        .top-foodhub-badge {
          background-color: #ff4b2b;
          color: #ffffff;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: 2px;
          font-size: 0.625rem;
          letter-spacing: 0.8px;
          font-family: var(--font-heading);
          text-transform: uppercase;
        }

        .top-foodhub-text {
          color: #e8e8e8;
          font-size: clamp(0.6875rem, 0.8vw, 0.75rem);
          font-weight: 500;
        }

        .top-phone-link {
          color: #bbbbbb;
          text-decoration: none;
          font-size: 0.75rem;
          font-family: var(--font-heading);
          transition: color 0.2s;
        }

        .top-phone-link:hover {
          color: #ffffff;
        }

        .top-foodhub-cta {
          background-color: #ff4b2b;
          color: #ffffff !important;
          font-weight: 700;
          text-transform: uppercase;
          padding: 3px 12px;
          border-radius: 2px;
          font-family: var(--font-heading);
          font-size: 0.6875rem;
          letter-spacing: 0.8px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(255, 75, 43, 0.4);
        }

        .top-foodhub-cta:hover {
          background-color: #e03a1d;
          transform: translateY(-1px);
        }

        .btn-header-foodhub {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: #ff4b2b;
          color: #ffffff !important;
          padding: clamp(7px, 0.8vw, 10px) clamp(10px, 1vw, 18px);
          font-size: clamp(0.6875rem, 0.75vw, 0.75rem);
          font-family: var(--font-heading);
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 2px;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.2s ease;
          box-shadow: 0 2px 10px rgba(255, 75, 43, 0.35);
          flex-shrink: 0 !important;
        }

        .btn-header-foodhub:hover {
          background-color: #e03a1d;
          box-shadow: 0 4px 14px rgba(255, 75, 43, 0.55);
          transform: translateY(-1px);
        }

        .mobile-drawer-foodhub-top {
          width: 100%;
          max-width: 340px;
          padding: 12px 16px;
          background: linear-gradient(135deg, #ff4b2b 0%, #d83518 100%);
          color: #ffffff !important;
          border-radius: 4px;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 4px 16px rgba(255, 75, 43, 0.45);
          margin-bottom: 8px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 680px) {
          .top-foodhub-text {
            display: none;
          }
          .btn-header-foodhub span:not([aria-hidden="true"]) {
            display: none;
          }
          .btn-header-foodhub {
            padding: 7px 10px;
          }
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
