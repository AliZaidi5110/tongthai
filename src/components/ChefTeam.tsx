'use client';

import React from 'react';
import Image from 'next/image';
import { CHEFS } from '../data/restaurantData';
// Social SVG icons used directly

export default function ChefTeam() {
  return (
    <section
      id="chefs"
      className="chef-team-section"
    >
      <Image
        src="/images/photodune-3771884-wine-glasses-and-cutlery-in-restaurant-m_copy.jpg"
        alt="Wine glasses background"
        fill
        sizes="(max-width: 768px) 100vw, 1920px"
        quality={75}
        style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
      />
      {/* Dark tint overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(12, 12, 12, 0.86)',
          backdropFilter: 'blur(2px)',
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(3.2rem, 5vw, 4.5rem)',
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: '8px',
            }}
          >
            Our Chef
          </h2>
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.875rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: 'var(--color-gold)',
            }}
          >
            Meet The Masterminds Behind Our Gastronomy
          </div>
          <div
            style={{
              width: '45px',
              height: '2px',
              backgroundColor: 'var(--color-gold)',
              margin: '16px auto 0',
            }}
          />
        </div>

        {/* 3-Chef Cards */}
        <div className="chef-grid-container">
          {CHEFS.map((chef) => (
            <div
              key={chef.id}
              style={{
                backgroundColor: 'rgba(25, 25, 25, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '3px',
                overflow: 'hidden',
                textAlign: 'center',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
              }}
              className="chef-card"
            >
              {/* Image with Social Overlay */}
              <div className="chef-img-square chef-img-wrapper">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center 18%',
                    transition: 'transform 0.5s ease',
                  }}
                  className="chef-portrait"
                />

                {/* Social icons overlay on hover */}
                <div
                  className="chef-social-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.65)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    gap: '12px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      color: 'var(--color-gold)',
                    }}
                  >
                    Follow Chef
                  </span>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <a
                      href={chef.socials.twitter || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chef-social-icon"
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        backgroundColor: '#ffffff',
                        color: '#111',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a
                      href={chef.socials.facebook || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chef-social-icon"
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        backgroundColor: '#ffffff',
                        color: '#111',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a
                      href={chef.socials.instagram || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chef-social-icon"
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        backgroundColor: '#ffffff',
                        color: '#111',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a
                      href={chef.socials.linkedin || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chef-social-icon"
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        backgroundColor: '#ffffff',
                        color: '#111',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bio Details */}
              <div style={{ padding: '28px 24px' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    color: '#ffffff',
                    marginBottom: '6px',
                  }}
                >
                  {chef.name}
                </h3>

                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: 'var(--color-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '16px',
                  }}
                >
                  {chef.role}
                </div>

                <p
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: '1.7',
                    color: '#bbbbbb',
                  }}
                >
                  {chef.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .chef-card:hover {
          transform: translateY(-6px);
          border-color: var(--color-gold);
        }
        .chef-card:hover .chef-portrait {
          transform: scale(1.05);
        }
        .chef-card:hover .chef-social-overlay {
          opacity: 1;
        }
        .chef-social-icon:hover {
          background-color: var(--color-gold) !important;
          color: #ffffff !important;
        }
        @media (max-width: 768px) {
          .parallax-section-chefs {
            background-attachment: scroll !important;
          }
        }
      `}</style>
    </section>
  );
}
