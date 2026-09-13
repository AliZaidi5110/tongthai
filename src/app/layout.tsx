import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Montserrat, Raleway, Yellowtail } from 'next/font/google';
import { CartProvider } from '../context/CartContext';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

const yellowtail = Yellowtail({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#121212',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tongthaionline.com'),
  title: 'TongThai Restaurant Bradford | Authentic Halal Thai Cuisine',
  description:
    'Experience authentic Royal Thai dining at TongThai Restaurant in Bradford (BD9 4JZ). 100% Halal food, hand-pounded curries, Pad Thai, fresh seafood, takeaway, delivery & table reservations.',
  keywords: [
    'TongThai Restaurant',
    'Thai Restaurant Bradford',
    'Thai Food Bradford',
    'Halal Thai Food Bradford',
    'Authentic Thai Restaurant Bradford',
    'Best Thai Restaurant Bradford',
    '198-200 Keighley Road BD9 4JZ',
    'Pad Thai Bradford',
    'Thai Green Curry Bradford',
    'Volcano Duck',
    'Thai Food Delivery Bradford',
    'Thai Takeaway Bradford',
    'Halal Thai Restaurant Yorkshire',
  ],
  authors: [{ name: 'TongThai Culinary Team', url: 'https://www.tongthaionline.com' }],
  creator: 'TongThai Restaurant',
  publisher: 'TongThai Restaurant',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: 'https://www.tongthaionline.com/',
  },
  openGraph: {
    title: 'TongThai Restaurant Bradford | Authentic Halal Thai Cuisine',
    description:
      'Indulge in authentic Royal Thai dining at TongThai Restaurant, 198–200 Keighley Road, Bradford BD9. 100% Halal food, hand-pounded curries, fresh seafood & table reservations.',
    url: 'https://www.tongthaionline.com/',
    siteName: 'TongThai Restaurant',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://www.tongthaionline.com/images/restaurant-front.jpg',
        width: 1200,
        height: 630,
        alt: 'TongThai Restaurant exterior at 198-200 Keighley Road, Bradford BD9',
      },
      {
        url: 'https://www.tongthaionline.com/images/volcano-duck.jpg',
        width: 1200,
        height: 800,
        alt: 'Signature sizzling Volcano Duck Thai speciality at TongThai Bradford',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TongThai Restaurant Bradford | Authentic Halal Thai Cuisine',
    description:
      'Authentic Thai dining in Bradford. 100% Halal certified ingredients, hand-pounded curries, Pad Thai, takeaway, delivery & table reservations.',
    images: ['https://www.tongthaionline.com/images/restaurant-front.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': 'https://www.tongthaionline.com/#restaurant',
  name: 'TongThai Restaurant',
  image: [
    'https://www.tongthaionline.com/images/restaurant-front.jpg',
    'https://www.tongthaionline.com/images/volcano-duck.jpg',
    'https://www.tongthaionline.com/images/steamed-sea-bass.jpg',
    'https://www.tongthaionline.com/images/pad-thai-goong.jpg',
  ],
  logo: 'https://www.tongthaionline.com/images/tongthai-logo.png',
  url: 'https://www.tongthaionline.com/',
  telephone: '+441274499088',
  priceRange: '££',
  servesCuisine: ['Thai', 'Halal', 'Asian', 'Curry', 'Seafood'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '198–200 Keighley Road',
    addressLocality: 'Bradford',
    addressRegion: 'West Yorkshire',
    postalCode: 'BD9 4JZ',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.8152,
    longitude: -1.7898,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '15:00',
      closes: '21:00',
    },
  ],
  acceptsReservations: 'True',
  hasMenu: 'https://www.tongthaionline.com/#popular-menu',
  menu: 'https://www.tongthaionline.com/#popular-menu',
  sameAs: [
    'https://www.facebook.com/tongthaibradford',
    'https://www.instagram.com/tongthaibradford',
    'https://tongthaionline.co.uk/',
    'https://www.google.com/search?q=tong+thai+restaurant+bradford+',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.6',
    reviewCount: '300',
    bestRating: '5',
    worstRating: '1',
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.tongthaionline.com/#reservation',
      inLanguage: 'en-GB',
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
    result: {
      '@type': 'FoodEstablishmentReservation',
      name: 'Book a Table at TongThai Restaurant Bradford',
    },
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.tongthaionline.com/#website',
  url: 'https://www.tongthaionline.com/',
  name: 'TongThai Restaurant Bradford',
  description: 'Authentic Halal Royal Thai Cuisine in Bradford BD9',
  inLanguage: 'en-GB',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.tongthaionline.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Menu',
      item: 'https://www.tongthaionline.com/#popular-menu',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Table Reservation',
      item: 'https://www.tongthaionline.com/#reservation',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Foodhub Delivery & Takeaway',
      item: 'https://www.tongthaionline.com/#delivery',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Contact & Location',
      item: 'https://www.tongthaionline.com/#contact',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is all food at TongThai Restaurant 100% Halal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all meats and ingredients served at TongThai Restaurant in Bradford are 100% Halal certified, prepared fresh to order in accordance with strict halal standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is TongThai Restaurant located in Bradford?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TongThai Restaurant is located at 198–200 Keighley Road, Bradford, BD9 4JZ, United Kingdom, with convenient street and nearby parking.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are TongThai Restaurant opening hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TongThai is open Wednesday through Sunday from 3:00 PM to 9:00 PM. The restaurant is closed on Mondays and Tuesdays.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does TongThai offer takeaway and home delivery in Bradford?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can order online for home delivery across Bradford and click-and-collect through our official Foodhub portal with zero service fees at tongthaionline.co.uk or call 01274 499088.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I book a table online at TongThai Bradford?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can reserve a table online directly through our website booking form or by telephone at 01274 499088 for couple dinners, family meals, and group celebrations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you cater for vegetarian and vegan dietary preferences?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our master chefs handcraft curry pastes and stir-fries fresh from scratch, offering extensive vegetarian, vegan tofu options, and custom spice levels upon request.',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${montserrat.variable} ${raleway.variable} ${yellowtail.variable}`}>
      <head>
        <link rel="icon" href="/images/logo@2x.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
