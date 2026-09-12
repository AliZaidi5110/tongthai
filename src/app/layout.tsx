import './globals.css';
import type { Metadata, Viewport } from 'next';
import { CartProvider } from '../context/CartContext';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tongthaionline.com'),
  title: 'TongThai Restaurant | Authentic Thai Cuisine - Bradford BD9',
  description:
    'Experience authentic Royal Thai dining at TongThai Restaurant, 198–200 Keighley Road, Bradford BD9. Hand-pounded curry pastes, wok-flamed Pad Thai, fresh seafood, 100% Halal food, and online table reservations.',
  keywords: [
    'TongThai Restaurant',
    'Authentic Thai Cuisine',
    'Thai Restaurant Bradford',
    '198-200 Keighley Road BD9 4JZ',
    'Halal Thai Food Bradford',
    'Pad Thai Bradford',
    'Thai Green Curry',
    'Volcano Duck',
    'Thai Food Yorkshire',
  ],
  authors: [{ name: 'TongThai Culinary Team' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo@2x.png" />
      </head>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
