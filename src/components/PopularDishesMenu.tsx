'use client';

import React, { useState } from 'react';
import { POPULAR_DISHES, Dish } from '../data/restaurantData';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

export default function PopularDishesMenu() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { addToCart } = useCart();

  const categories = [
    { id: 'all', label: 'All Menu' },
    { id: 'starters', label: 'Starters & Soups' },
    { id: 'mains', label: 'Curries & Wok Stir-Fries' },
    { id: 'noodles', label: 'Noodles & Rice' },
    { id: 'drinks', label: 'Drinks & Thai Specialities' },
  ];

  const filteredDishes =
    activeCategory === 'all'
      ? POPULAR_DISHES
      : POPULAR_DISHES.filter((dish) => dish.category === activeCategory);

  // Split into two columns for the classic Capella 2-column menu
  const midpoint = Math.ceil(filteredDishes.length / 2);
  const leftColumn = filteredDishes.slice(0, midpoint);
  const rightColumn = filteredDishes.slice(midpoint);

  const renderDishItem = (dish: Dish) => (
    <div
      key={dish.id}
      style={{
        marginBottom: '32px',
        paddingBottom: '8px',
        position: 'relative',
      }}
      className="menu-item-row"
    >
      <div className="menu-dot-row">
        <span className="menu-dot-title">
          {dish.title}
          {dish.thaiName && (
            <span style={{ fontSize: '0.8125rem', fontStyle: 'italic', color: '#999', marginLeft: '6px', fontWeight: 400 }}>
              ({dish.thaiName})
            </span>
          )}
          {dish.badge && (
            <span
              style={{
                marginLeft: '10px',
                verticalAlign: 'middle',
              }}
              className={dish.badge === 'Healthy' ? 'badge-healthy' : 'badge-recommend'}
            >
              {dish.badge}
            </span>
          )}
        </span>

        <span className="menu-dot-leader" />

        <span className="menu-dot-price">£{dish.price.toFixed(2)}</span>

        {/* Quick Add Button */}
        <button
          onClick={() => addToCart(dish)}
          title="Add to order"
          style={{
            marginLeft: '12px',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: '#f3f1ea',
            color: 'var(--color-primary)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            flexShrink: 0,
          }}
          className="menu-quick-add"
        >
          <Plus size={16} />
        </button>
      </div>

      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          color: '#888888',
          marginTop: '4px',
        }}
      >
        {dish.ingredients}
      </div>
    </div>
  );

  return (
    <section id="popular-menu" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '55px',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  padding: '10px 24px',
                  borderRadius: '2px',
                  border: isActive ? '1px solid var(--color-gold)' : '1px solid #e2ded5',
                  backgroundColor: isActive ? 'var(--color-gold)' : 'transparent',
                  color: isActive ? '#ffffff' : '#555555',
                  transition: 'all 0.25s ease',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 2-Column Classic Menu Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '0 60px',
          }}
        >
          <div>{leftColumn.map(renderDishItem)}</div>
          <div>{rightColumn.map(renderDishItem)}</div>
        </div>

        {/* Bottom Notice & Allergy Information from PDF */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <div
            style={{
              display: 'inline-block',
              backgroundColor: '#faf8f5',
              border: '1px solid #e8e4dc',
              padding: '16px 28px',
              borderRadius: '3px',
              marginBottom: '24px',
              maxWidth: '750px',
            }}
          >
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--color-gold)', marginBottom: '4px' }}>
              Allergy &amp; Dietary Information
            </p>
            <p style={{ fontSize: '0.8125rem', color: '#666', lineHeight: 1.6 }}>
              All food is prepared fresh. 100% Halal food is available. Still wine is available in 125ml measures. All wines contain sulphites. Baileys contains milk. Please inform our staff of any specific allergen requirements.
            </p>
          </div>
          <div>
            <a href="#reservation" className="btn-capella-primary">
              Book Your Table at TongThai
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .menu-item-row:hover .menu-dot-title {
          color: var(--color-gold);
        }
        .menu-quick-add:hover {
          background-color: var(--color-gold) !important;
          color: #ffffff !important;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
