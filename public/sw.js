// TongThai Restaurant – Service Worker for Booking Push Notifications
// Version: 1.0.0

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('push', (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (e) {
    data = { title: 'New Booking', body: event.data ? event.data.text() : 'A new table reservation was submitted.' };
  }

  const title = data.title || '🍜 New Table Booking – TongThai';
  const options = {
    body: data.body || 'A new reservation has been received.',
    icon: '/images/tongthai-logo.png',
    badge: '/images/tongthai-logo.png',
    tag: data.tag || 'booking-notification',
    requireInteraction: true,
    vibrate: [200, 100, 200],
    data: {
      url: data.url || '/',
      bookingRef: data.bookingRef || '',
    },
    actions: [
      { action: 'view', title: '📋 View Details' },
      { action: 'dismiss', title: 'Dismiss' },
    ],
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'dismiss') return;

  const urlToOpen = event.notification.data?.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
