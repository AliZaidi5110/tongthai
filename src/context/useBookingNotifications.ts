'use client';

import { useEffect, useRef, useCallback } from 'react';

/**
 * useBookingNotifications
 *
 * Registers a Service Worker, requests Notification permission,
 * and provides `triggerBookingNotification()` which fires a local
 * browser notification (no server-side push backend required).
 *
 * Because this is purely client-side, the restaurant owner simply
 * needs to open the website on their phone/desktop and grant permission.
 * Every booking submitted while the page is open (or the SW is active)
 * will pop up a notification even if the tab is in the background.
 */
export function useBookingNotifications() {
  const swRegistrationRef = useRef<ServiceWorkerRegistration | null>(null);

  // Register service worker on mount
  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .then((reg) => {
        swRegistrationRef.current = reg;
      })
      .catch((err) => {
        console.warn('[TongThai SW] Registration failed:', err);
      });
  }, []);

  /**
   * Request notification permission from the browser.
   * Returns true if granted, false otherwise.
   */
  const requestPermission = useCallback(async (): Promise<boolean> => {
    if (typeof window === 'undefined' || !('Notification' in window)) return false;

    if (Notification.permission === 'granted') return true;
    if (Notification.permission === 'denied') return false;

    const result = await Notification.requestPermission();
    return result === 'granted';
  }, []);

  /**
   * Fire a local booking push notification.
   * Works in background tabs via the Service Worker.
   */
  const triggerBookingNotification = useCallback(
    async (booking: {
      name: string;
      date: string;
      time: string;
      guests: string;
      bookingRef: string;
    }) => {
      if (typeof window === 'undefined') return;

      const granted = await requestPermission();
      if (!granted) return;

      const title = `🍜 New Booking – ${booking.name}`;
      const body = `📅 ${booking.date} at ${booking.time} · ${booking.guests} guest(s)\nRef: ${booking.bookingRef}`;

      const notifOptions: NotificationOptions = {
        body,
        icon: '/images/tongthai-logo.png',
        badge: '/images/tongthai-logo.png',
        tag: `booking-${booking.bookingRef}`,
        requireInteraction: true,
        vibrate: [200, 100, 200],
        data: { url: '/#reservation', bookingRef: booking.bookingRef },
      } as NotificationOptions;

      // Prefer Service Worker showNotification (works in background)
      const sw = swRegistrationRef.current;
      if (sw && 'showNotification' in sw) {
        await sw.showNotification(title, notifOptions);
      } else {
        // Fallback: direct Notification API
        new Notification(title, notifOptions);
      }
    },
    [requestPermission]
  );

  return { requestPermission, triggerBookingNotification };
}
