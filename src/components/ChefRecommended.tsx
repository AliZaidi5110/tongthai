'use client';

import React from 'react';
import Image from 'next/image';
import { CHEF_RECOMMENDED_DISHES, Dish } from '../data/restaurantData';
import { useCart } from '../context/CartContext';
import { Plus, Eye } from 'lucide-react';

interface ChefRecommendedProps {
  onOpenLightbox: (imageSrc: string, title: string) => void;
}

export default function ChefRecommended({ onOpenLightbox }: ChefRecommendedProps) {
  const { addToCart } = useCart();

  return (
    <section id="chef-recommended" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px 30px',
          }}
        >
          {CHEF_RECOMMENDED_DISHES.map((dish: Dish) => (
            <div
              key={dish.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease',
              }}
              className="dish-card"
            >
              {/* Image Container with overlay */}
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '2px',
                  aspectRatio: '490 / 314',
                  backgroundColor: '#f0ede6',
                }}
                className="dish-image-wrapper"
              >
                {dish.image && (
                  <Image
                    src={dish.image}
                    alt={dish.title}
                    width={490}
                    height={314}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    className="dish-img"
                  />
                )}

                {/* Hover mask */}
                <div
                  className="dish-hover-mask"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '14px',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  {dish.image && (
                    <button
                      onClick={() => onOpenLightbox(dish.image!, dish.title)}
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        backgroundColor: '#ffffff',
                        color: '#1a1a1a',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                        transition: 'transform 0.2s',
                      }}
                      title="View full image"
                      className="hover-action-btn"
                    >
                      <Eye size={20} />
                    </button>
                  )}

                  <button
                    onClick={() => addToCart(dish)}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-gold)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      transition: 'transform 0.2s',
                    }}
                    title="Add to order"
                    className="hover-action-btn"
                  >
                    <Plus size={22} />
                  </button>
                </div>

                {/* Badge if present */}
                {dish.badge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      zIndex: 2,
                    }}
                  >
                    <span className={dish.badge === 'Recommended' ? 'badge-recommend' : 'badge-new'}>
                      {dish.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Dish Meta */}
              <div style={{ paddingTop: '18px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    marginBottom: '4px',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.1875rem',
                        fontWeight: 700,
                        color: 'var(--color-text-dark)',
                        lineHeight: 1.2,
                      }}
                    >
                      {dish.title}
                    </h3>
                    {dish.thaiName && (
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.8125rem',
                          fontStyle: 'italic',
                          color: 'var(--color-gold)',
                        }}
                      >
                        {dish.thaiName}
                      </span>
                    )}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                      marginLeft: '12px',
                      flexShrink: 0,
                    }}
                  >
                    £{dish.price.toFixed(2)}
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: '#777777',
                    letterSpacing: '0.5px',
                    marginBottom: '10px',
                  }}
                >
                  {dish.ingredients}
                </div>

                {dish.description && (
                  <p
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: '1.6',
                      color: '#555555',
                      marginBottom: '14px',
                    }}
                  >
                    {dish.description}
                  </p>
                )}

                <button
                  onClick={() => addToCart(dish)}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    color: 'var(--color-primary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 0',
                    borderBottom: '1px solid #ccc',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-gold)';
                    e.currentTarget.style.borderBottomColor = 'var(--color-gold)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-primary)';
                    e.currentTarget.style.borderBottomColor = '#ccc';
                  }}
                >
                  <Plus size={13} /> Order This Dish
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .dish-card:hover .dish-img {
          transform: scale(1.06);
        }
        .dish-card:hover .dish-hover-mask {
          opacity: 1;
        }
        .hover-action-btn:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
