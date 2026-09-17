'use client';

import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users, Utensils, CheckCircle, Sparkles, ExternalLink, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const getInitialDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
};

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: getInitialDate(),
    time: '19:30',
    guests: '2',
    seating: 'Main Dining Hall',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Required fields validation
    const requiredFields: Array<keyof typeof formData> = ['name', 'email', 'phone', 'date', 'time', 'guests'];
    for (const field of requiredFields) {
      if (!formData[field] || formData[field].trim() === '') {
        setStatus('error');
        setErrorMessage('Please fill in all required fields marked with an asterisk (*).');
        return;
      }
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID !== 'your_service_id'
        ? process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        : 'service_xojs8hs';

    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID && process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID !== 'your_template_id'
        ? process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        : 'template_1cqkvkr';

    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY && process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY !== 'your_public_key'
        ? process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        : 'UFH-s4d0cv-38_fwN';

    const randomRef = 'TT-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);

    setStatus('sending');

    const detailsSummary = [
      `Booking Reference: ${randomRef}`,
      `Date: ${formData.date}`,
      `Time: ${formData.time}`,
      `Party Size: ${formData.guests}`,
      `Preferred Seating: ${formData.seating}`,
      `Special Requests: ${formData.notes.trim() ? formData.notes : 'None provided'}`,
    ].join('\n');

    const templateParams = {
      date: formData.date,
      time: formData.time,
      party_size: formData.guests,
      guests: formData.guests,
      seating: formData.seating,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      special_requests: formData.notes.trim() ? formData.notes : 'None provided',
      notes: formData.notes.trim() ? formData.notes : 'None provided',
      message: detailsSummary,
      booking_ref: randomRef,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus('success');
      setIsSubmitted(true);
    } catch (err: any) {
      console.error('EmailJS submission error:', err);
      setStatus('error');
      const errDetail = err?.text || err?.message || 'Network error occurred';
      setErrorMessage(
        `Failed to send booking request (${errDetail}). Please try again or call us at +44 7506 288133.`
      );
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setStatus('idle');
    setErrorMessage('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: getInitialDate(),
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
                Booking Request Sent!
              </h3>

              <p style={{ fontSize: '1rem', color: '#555', marginBottom: '24px' }}>
                Thank you, <strong>{formData.name}</strong>. Your reservation request has been delivered to <strong>tongthai.siam@gmail.com</strong>. We will confirm shortly.
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
                    htmlFor="booking-date"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: '#333',
                      marginBottom: '8px',
                    }}
                  >
                    <CalendarIcon size={14} color="var(--color-gold)" aria-hidden="true" /> Date *
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    name="date"
                    required
                    aria-required="true"
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
                    }}
                  />
                </div>

                {/* Time */}
                <div>
                  <label
                    htmlFor="booking-time"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: '#333',
                      marginBottom: '8px',
                    }}
                  >
                    <Clock size={14} color="var(--color-gold)" aria-hidden="true" /> Time *
                  </label>
                  <select
                    id="booking-time"
                    name="time"
                    required
                    aria-required="true"
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
                    htmlFor="booking-guests"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: '#333',
                      marginBottom: '8px',
                    }}
                  >
                    <Users size={14} color="var(--color-gold)" aria-hidden="true" /> Party Size *
                  </label>
                  <select
                    id="booking-guests"
                    name="guests"
                    required
                    aria-required="true"
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
                    htmlFor="booking-seating"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: '#333',
                      marginBottom: '8px',
                    }}
                  >
                    <Utensils size={14} color="var(--color-gold)" aria-hidden="true" /> Preferred Seating
                  </label>
                  <select
                    id="booking-seating"
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
                    htmlFor="booking-name"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: '#333',
                      marginBottom: '8px',
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    name="name"
                    required
                    aria-required="true"
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
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-email"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: '#333',
                      marginBottom: '8px',
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    name="email"
                    required
                    aria-required="true"
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
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-phone"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: '#333',
                      marginBottom: '8px',
                    }}
                  >
                    Phone Number *
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    name="phone"
                    required
                    aria-required="true"
                    placeholder="+44 7506 288133"
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
                    }}
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div style={{ marginBottom: '32px' }}>
                <label
                  htmlFor="booking-notes"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: '#333',
                    marginBottom: '8px',
                  }}
                >
                  Special Requests / Dietary Needs / Occasion
                </label>
                <textarea
                  id="booking-notes"
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
                    resize: 'vertical',
                  }}
                />
              </div>

              <div style={{ textAlign: 'center' }}>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-capella-gold"
                  style={{
                    padding: '16px 44px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    opacity: status === 'sending' ? 0.75 : 1,
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  }}
                  aria-label="Confirm Table Reservation at TongThai"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="spinner-inline" aria-hidden="true" />
                      Sending Booking Request...
                    </>
                  ) : (
                    'Confirm Table Reservation'
                  )}
                </button>

                {status === 'error' && errorMessage && (
                  <div
                    role="alert"
                    style={{
                      marginTop: '20px',
                      padding: '14px 18px',
                      backgroundColor: 'rgba(239, 68, 68, 0.08)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      borderRadius: '4px',
                      color: '#dc2626',
                      fontSize: '0.875rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      textAlign: 'left',
                      maxWidth: '620px',
                      lineHeight: 1.5,
                    }}
                  >
                    <AlertCircle size={18} style={{ flexShrink: 0 }} />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </div>
            </form>
          )}
        </div>

        {/* Foodhub Direct Booking Callout */}
        <div
          style={{
            marginTop: '30px',
            backgroundColor: '#faf8f5',
            border: '1px dashed var(--color-gold)',
            borderRadius: '4px',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-text-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Prefer Booking or Ordering via Foodhub?
            </div>
            <div style={{ fontSize: '0.8125rem', color: '#666666' }}>
              Instant live booking confirmation &amp; doorstep delivery directly on tongthaionline.co.uk
            </div>
          </div>
          <a
            href="https://tongthaionline.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-capella-gold"
            style={{
              padding: '10px 22px',
              fontSize: '0.75rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            Open Foodhub Portal <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .spinner-inline {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: #ffffff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
      `}</style>
    </section>
  );
}
