'use client';

import React from 'react';

interface ParallaxBannerProps {
  id?: string;
  image: string;
  title: string;
  subtitle: string;
  height?: string;
  children?: React.ReactNode;
}

export default function ParallaxBanner({
  id,
  image,
  title,
  subtitle,
  height = '420px',
  children,
}: ParallaxBannerProps) {
  return (
    <section
      id={id}
      className="parallax-section"
      style={{
        backgroundImage: `url("${image}")`,
        minHeight: height,
      }}
    >
      <div className="parallax-overlay" />
      <div className="parallax-content">
        <h2 className="parallax-title">{title}</h2>
        <div className="parallax-subtitle">{subtitle}</div>
        <div
          style={{
            width: '45px',
            height: '2px',
            backgroundColor: 'var(--color-gold)',
            margin: '18px auto 0',
          }}
        />
        {children}
      </div>
    </section>
  );
}
