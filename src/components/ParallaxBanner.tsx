'use client';

import React from 'react';
import Image from 'next/image';

interface ParallaxBannerProps {
  id?: string;
  image: string;
  title: string;
  subtitle: string;
  height?: string;
  objectPosition?: string;
  children?: React.ReactNode;
}

export default function ParallaxBanner({
  id,
  image,
  title,
  subtitle,
  height,
  objectPosition = 'center 45%',
  children,
}: ParallaxBannerProps) {
  return (
    <section
      id={id}
      className="parallax-banner-container"
      style={height ? { minHeight: height } : undefined}
    >
      <Image
        src={image}
        alt=""
        aria-hidden="true"
        fill
        sizes="(max-width: 768px) 100vw, 1920px"
        quality={75}
        style={{ objectFit: 'cover', objectPosition, zIndex: 0 }}
      />
      <div className="parallax-banner-overlay" />
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
