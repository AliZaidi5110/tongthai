'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle, ArrowRight } from 'lucide-react';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, clearCart, subtotal } = useCart();
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in');

  if (!isOpen) return null;

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleCheckout = () => {
    setCheckoutComplete(true);
  };

  const handleDone = () => {
    clearCart();
    setCheckoutComplete(false);
    closeCart();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(3px)',
        }}
      />

      {/* Slide-over panel */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '440px',
          height: '100%',
          backgroundColor: '#181818',
          color: '#ffffff',
          boxShadow: '-8px 0 32px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 10,
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '24px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={20} color="var(--color-gold)" />
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                color: '#ffffff',
                margin: 0,
              }}
            >
              Your Dining Order
            </h3>
          </div>
          <button
            onClick={closeCart}
            style={{ color: '#aaa', padding: '6px', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#aaa')}
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {checkoutComplete ? (
            <div style={{ textAlign: 'center', padding: '40px 10px', animation: 'fadeIn 0.3s ease' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(197, 157, 40, 0.2)',
                  color: 'var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <CheckCircle size={36} />
              </div>
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '10px',
                }}
              >
                Order Sent To Kitchen!
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#aaa', lineHeight: 1.6, marginBottom: '24px' }}>
                Your order has been sent to Head Chef Somchai Prasert and the TongThai kitchen team.
                Estimated preparation time is 25 minutes.
              </p>
              <button onClick={handleDone} className="btn-capella-gold" style={{ width: '100%' }}>
                Done
              </button>
            </div>
          ) : items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#888' }}>
              <ShoppingBag size={48} style={{ opacity: 0.3, margin: '0 auto 16px' }} />
              <p style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>
                Your cart is currently empty
              </p>
              <p style={{ fontSize: '0.8125rem', color: '#666', marginTop: '6px', marginBottom: '20px' }}>
                Explore our Chef Recommended dishes and full à la carte menu to add items.
              </p>
              <button
                onClick={closeCart}
                className="btn-capella-outline"
                style={{ fontSize: '0.75rem', padding: '10px 24px' }}
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Order mode switch */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '8px',
                  backgroundColor: '#222',
                  padding: '4px',
                  borderRadius: '3px',
                }}
              >
                <button
                  onClick={() => setOrderType('dine-in')}
                  style={{
                    padding: '8px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    borderRadius: '2px',
                    backgroundColor: orderType === 'dine-in' ? 'var(--color-gold)' : 'transparent',
                    color: orderType === 'dine-in' ? '#ffffff' : '#999',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Table Dine-In
                </button>
                <button
                  onClick={() => setOrderType('takeaway')}
                  style={{
                    padding: '8px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    borderRadius: '2px',
                    backgroundColor: orderType === 'takeaway' ? 'var(--color-gold)' : 'transparent',
                    color: orderType === 'takeaway' ? '#ffffff' : '#999',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Artisan Takeaway
                </button>
              </div>

              {/* Items List */}
              {items.map(({ dish, quantity }) => (
                <div
                  key={dish.id}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    paddingBottom: '16px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {dish.image ? (
                    <div
                      style={{
                        position: 'relative',
                        width: '64px',
                        height: '64px',
                        borderRadius: '2px',
                        overflow: 'hidden',
                        flexShrink: 0,
                      }}
                    >
                      <Image src={dish.image} alt={dish.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                  ) : (
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        backgroundColor: '#262626',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '2px',
                        flexShrink: 0,
                        color: 'var(--color-gold)',
                      }}
                    >
                      <ShoppingBag size={22} />
                    </div>
                  )}

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h5
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '0.875rem',
                          fontWeight: 700,
                          color: '#ffffff',
                          marginBottom: '4px',
                        }}
                      >
                        {dish.title}
                      </h5>
                      <span
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '0.875rem',
                          fontWeight: 700,
                          color: 'var(--color-gold)',
                        }}
                      >
                        £{(dish.price * quantity).toFixed(2)}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.75rem', color: '#888', marginBottom: '10px' }}>
                      £{dish.price.toFixed(2)} each
                    </div>

                    {/* Quantity controls */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '2px',
                        }}
                      >
                        <button
                          onClick={() => updateQuantity(dish.id, quantity - 1)}
                          style={{ color: '#bbb', padding: '4px 8px', display: 'flex', alignItems: 'center' }}
                        >
                          <Minus size={13} />
                        </button>
                        <span style={{ fontSize: '0.8125rem', padding: '0 8px', minWidth: '24px', textAlign: 'center' }}>
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(dish.id, quantity + 1)}
                          style={{ color: '#bbb', padding: '4px 8px', display: 'flex', alignItems: 'center' }}
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(dish.id)}
                        style={{ color: '#ff6b6b', padding: '4px' }}
                        title="Remove dish"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {!checkoutComplete && items.length > 0 && (
          <div
            style={{
              padding: '20px 24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: '#141414',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.875rem', color: '#aaa' }}>
              <span>Subtotal</span>
              <span>£{subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.875rem', color: '#aaa' }}>
              <span>VAT / Service</span>
              <span>£{tax.toFixed(2)}</span>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '20px',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.125rem',
                fontWeight: 700,
                color: '#ffffff',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '10px',
              }}
            >
              <span>Total Amount</span>
              <span style={{ color: 'var(--color-gold)' }}>£{total.toFixed(2)}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="btn-capella-gold"
              style={{
                width: '100%',
                padding: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              Confirm Order <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
