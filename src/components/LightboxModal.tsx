'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  imageSrc: string;
  caption: string;
  onClose: () => void;
}

export default function LightboxModal({ isOpen, imageSrc, caption, onClose }: LightboxModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={caption || 'Enlarged photo preview'}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        backgroundColor: 'rgba(0, 0, 0, 0.92)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        animation: 'fadeIn 0.25s ease',
      }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close enlarged photo view"
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          color: '#ffffff',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '50%',
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.2s',
          zIndex: 10,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-gold)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')}
      >
        <X size={24} />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '900px',
          maxHeight: '80vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '70vh',
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
          }}
        >
          <Image
            src={imageSrc}
            alt={caption || 'TongThai Restaurant Bradford photo'}
            fill
            sizes="90vw"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {caption && (
          <div
            style={{
              marginTop: '16px',
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--color-gold)',
              textAlign: 'center',
            }}
          >
            {caption}
          </div>
        )}
      </div>
    </div>
  );
}
