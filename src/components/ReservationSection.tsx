'use client';

import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users, Utensils, CheckCircle, Sparkles } from 'lucide-react';

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '2026-09-12',
    time: '19:30',
    guests: '2',
    seating: 'Main Dining Hall',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'TT-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '2026-09-12',
      time: '19:30',
      guests: '2',
      seating: 'Main Dining Hall',
      notes: '',
    });
  };

  return (
    <section id="reservation" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container container-narrow">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--color-gold)',
              marginBottom: '8px',
            }}
          >
            <Sparkles size={15} /> Book Your Table
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: 400,
              color: 'var(--color-text-dark)',
              lineHeight: 1.1,
              marginBottom: '8px',
            }}
          >
            Online Reservation
          </h2>
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.875rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: '#888888',
            }}
          >
            198–200 Keighley Road, Bradford BD9 4JZ • Wed–Sun: 3:00 PM – 9:00 PM
          </div>
          <div
            style={{
              width: '50px',
              height: '2px',
              backgroundColor: 'var(--color-gold)',
              margin: '18px auto 0',
            }}
          />
        </div>

        {/* Confirmation or Form Card */}
        <div
          style={{
            backgroundColor: '#faf8f5',
            border: '1px solid var(--color-border)',
            borderRadius: '4px',
            padding: '40px',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.05)',
          }}
        >
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '30px 10px', animation: 'fadeIn 0.4s ease' }}>
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(197, 157, 40, 0.15)',
                  color: 'var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}
              >
                <CheckCircle size={38} />
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginBottom: '10px',
                }}
              >
                Table Confirmed!
              </h3>

              <p style={{ fontSize: '1rem', color: '#555', marginBottom: '24px' }}>
                Thank you, <strong>{formData.name}</strong>. Your reservation has been received and confirmed.
              </p>

              <div
                style={{
                  display: 'inline-block',
                  backgroundColor: '#ffffff',
                  border: '1px dashed var(--color-gold)',
                  padding: '16px 28px',
                  borderRadius: '4px',
                  marginBottom: '30px',
                  textAlign: 'left',
                }}
              >
                <div style={{ fontSize: '0.8125rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Booking Reference
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.375rem',
                    fontWeight: 700,
                    color: 'var(--color-gold)',
                    letterSpacing: '2px',
                    marginBottom: '12px',
                  }}
                >
                  {bookingRef}
                </div>

                <div style={{ fontSize: '0.9375rem', color: '#444', lineHeight: 1.6 }}>
                  <div><strong>Date:</strong> {formData.date} at {formData.time}</div>
                  <div><strong>Party Size:</strong> {formData.guests} Guest(s)</div>
                  <div><strong>Seating:</strong> {formData.seating}</div>
                </div>
              </div>

              <div>
                <button onClick={resetForm} className="btn-capella-gold">
                  Make Another Reservation
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '24px',
                  marginBottom: '24px',
                }}
              >
                {/* Date */}
                <div>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: '#444',
                      marginBottom: '8px',
                    }}
                  >
                    <CalendarIcon size={14} color="var(--color-gold)" /> Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: '#ffffff',
                      border: '1px solid #ddd',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Time */}
                <div>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: '#444',
                      marginBottom: '8px',
                    }}
                  >
                    <Clock size={14} color="var(--color-gold)" /> Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: '#ffffff',
                      border: '1px solid #ddd',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                    }}
                  >
                    <option value="15:00">03:00 PM</option>
                    <option value="15:30">03:30 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="16:30">04:30 PM</option>
                    <option value="17:00">05:00 PM</option>
                    <option value="17:30">05:30 PM</option>
                    <option value="18:00">06:00 PM</option>
                    <option value="18:30">06:30 PM</option>
                    <option value="19:00">07:00 PM</option>
                    <option value="19:30">07:30 PM</option>
                    <option value="20:00">08:00 PM</option>
                    <option value="20:30">08:30 PM</option>
                  </select>
                </div>

                {/* Number of Guests */}
                <div>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: '#444',
                      marginBottom: '8px',
                    }}
                  >
                    <Users size={14} color="var(--color-gold)" /> Party Size
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: '#ffffff',
                      border: '1px solid #ddd',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                    }}
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People (Romantic / Standard)</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People (Family Table)</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                    <option value="8">8 People (Private Dining)</option>
                    <option value="10+">10+ People (Banquet)</option>
                  </select>
                </div>

                {/* Seating Preference */}
                <div>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: '#444',
                      marginBottom: '8px',
                    }}
                  >
                    <Utensils size={14} color="var(--color-gold)" /> Preferred Seating
                  </label>
                  <select
                    name="seating"
                    value={formData.seating}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: '#ffffff',
                      border: '1px solid #ddd',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                    }}
                  >
                    <option value="Main Dining Hall">Main Dining Hall (Atmospheric)</option>
                    <option value="Candlelight Terrace">Candlelight Terrace (Outdoor Garden)</option>
                    <option value="Chef Counter">Master Chef Counter (Open Kitchen View)</option>
                    <option value="Private VIP Lounge">Private VIP Lounge (Quiet &amp; Secluded)</option>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '24px',
                  marginBottom: '24px',
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: '#444',
                      marginBottom: '8px',
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Lady Victoria Spencer"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: '#ffffff',
                      border: '1px solid #ddd',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: '#444',
                      marginBottom: '8px',
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: '#ffffff',
                      border: '1px solid #ddd',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: '#444',
                      marginBottom: '8px',
                    }}
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+44 20 7946 0991"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: '#ffffff',
                      border: '1px solid #ddd',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div style={{ marginBottom: '32px' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: '#444',
                    marginBottom: '8px',
                  }}
                >
                  Special Requests / Dietary Needs / Occasion
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Tell us if you are celebrating an anniversary, require allergen adjustments, or have wine pairing preferences..."
                  value={formData.notes}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #ddd',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <div style={{ textAlign: 'center' }}>
                <button type="submit" className="btn-capella-gold" style={{ padding: '16px 44px' }}>
                  Confirm Table Reservation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
