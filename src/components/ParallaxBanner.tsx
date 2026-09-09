'use client';

import React from 'react';
import Image from 'next/image';

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
      style={{
        position: 'relative',
        minHeight: height,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="100vw"
        quality={70}
        style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
      />
      <div className="parallax-overlay" style={{ zIndex: 1 }} />
      <div className="parallax-content" style={{ position: 'relative', zIndex: 2 }}>
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
