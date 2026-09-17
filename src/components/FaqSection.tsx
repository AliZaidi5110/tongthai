'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Calendar, ShoppingBag } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Is all food served at TongThai 100% Halal?',
    answer: (
      <span>
        Yes, absolutely. All meats and poultry served at TongThai Restaurant in Bradford are sourced from certified Halal suppliers and prepared strictly following Halal culinary guidelines. We do not use pork products in any of our dishes.
      </span>
    ),
  },
  {
    question: 'Where is TongThai located in Bradford and is parking available?',
    answer: (
      <span>
        TongThai Restaurant is situated at <strong>198–200 Keighley Road, Bradford, West Yorkshire, BD9 4JZ</strong>, United Kingdom. Keighley Road offers convenient on-street parking and accessible transport links for diners travelling from across Bradford, Shipley, and Leeds.
      </span>
    ),
  },
  {
    question: 'What are TongThai\'s opening hours?',
    answer: (
      <span>
        We are open five days a week from <strong>Wednesday to Sunday, 3:00 PM to 9:00 PM</strong> for both dine-in and takeaway. We are <strong>closed on Mondays and Tuesdays</strong> for kitchen preparation and ingredient sourcing.
      </span>
    ),
  },
  {
    question: 'Do you offer takeaway and home delivery in Bradford?',
    answer: (
      <span>
        Yes! We offer fresh artisan takeaway for collection directly from our restaurant at 198–200 Keighley Road. Fast, hot home delivery across Bradford and surrounding areas is available online through our official Foodhub ordering portal at{' '}
        <a
          href="https://tongthaionline.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}
        >
          tongthaionline.co.uk
        </a>
        .
      </span>
    ),
  },
  {
    question: 'How can I reserve a table at TongThai?',
    answer: (
      <span>
        Table reservations can be made easily online using our reservation form or by telephoning our team directly at{' '}
        <a href="tel:+447506288133" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>
          +44 7506 288133
        </a>
        . We welcome couples, family gatherings, and private groups.
      </span>
    ),
  },
  {
    question: 'What dietary options do you provide (vegetarian, vegan, gluten-free)?',
    answer: (
      <span>
        Our chefs prepare many dishes to suit diverse dietary requirements. We offer extensive vegetarian and plant-based vegan options including tofu Pad Thai, vegetable Green Curry, vegetable Spring Rolls, and fresh stir-fried morning glory. Please inform our servers of any allergies upon ordering so we can accommodate your requirements.
      </span>
    ),
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="section-padding"
      style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--color-border)' }}
      aria-labelledby="faq-heading"
    >
      <div className="container" style={{ maxWidth: '860px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--color-gold)',
              marginBottom: '10px',
            }}
          >
            <HelpCircle size={16} aria-hidden="true" /> Frequently Asked Questions
          </div>

          <h2
            id="faq-heading"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'var(--color-text-dark)',
              marginBottom: '12px',
            }}
          >
            Everything You Need To Know
          </h2>

          <div
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '2rem',
              color: 'var(--color-gold)',
              marginBottom: '14px',
            }}
          >
            Halal Dining, Reservations &amp; Delivery
          </div>

          <div
            style={{
              width: '50px',
              height: '2px',
              backgroundColor: 'var(--color-gold)',
              margin: '0 auto',
            }}
          />
        </div>

        {/* Accordion Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const headingId = `faq-title-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div
                key={idx}
                style={{
                  border: isOpen ? '1px solid var(--color-gold)' : '1px solid #e7e5e0',
                  borderRadius: '4px',
                  backgroundColor: isOpen ? '#fdfcf9' : '#ffffff',
                  transition: 'all 0.25s ease',
                  overflow: 'hidden',
                }}
              >
                <h3>
                  <button
                    id={headingId}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    style={{
                      width: '100%',
                      padding: '18px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      color: isOpen ? 'var(--color-gold-dark)' : 'var(--color-text-dark)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      letterSpacing: '0.3px',
                      lineHeight: 1.4,
                    }}
                  >
                    <span>{item.question}</span>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        color: 'var(--color-gold)',
                        flexShrink: 0,
                      }}
                    >
                      <ChevronDown size={20} aria-hidden="true" />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  style={{
                    display: isOpen ? 'block' : 'none',
                    padding: '0 24px 20px 24px',
                    color: '#555555',
                    fontSize: '0.9375rem',
                    lineHeight: 1.7,
                  }}
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Action Badges */}
        <div
          style={{
            marginTop: '36px',
            padding: '20px',
            backgroundColor: '#faf8f5',
            borderRadius: '4px',
            border: '1px solid #ede9e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '16px',
            textAlign: 'center',
          }}
        >
          <a
            href="tel:+447506288133"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: 'var(--color-text-dark)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            <Phone size={15} color="var(--color-gold)" aria-hidden="true" /> Call +44 7506 288133
          </a>
          <a
            href="#reservation"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: 'var(--color-text-dark)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            <Calendar size={15} color="var(--color-gold)" aria-hidden="true" /> Book Table
          </a>
          <a
            href="https://tongthaionline.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: '#ff4b2b',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            <ShoppingBag size={15} aria-hidden="true" /> Order Delivery
          </a>
        </div>
      </div>
    </section>
  );
}
