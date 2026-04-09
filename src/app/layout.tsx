import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://baroqahfarms.vercel.app'),
  title: 'Baroqah Farms | Layanan Qurban, Aqiqah & Katering Terpercaya',
  description:
    'Solusi layanan Qurban, Aqiqah, dan Katering terbaik, bersih, dan sesuai syariat di Jatiasih, Bekasi. Pemesanan mudah melalui WhatsApp.',
  keywords: [
    'Qurban Jatiasih',
    'Aqiqah Bekasi',
    'Katering Bekasi',
    'Jual Kambing Qurban',
    'Hewan Qurban',
    'Katering Murah',
    'Baroqah Farms',
  ],
  authors: [{ name: 'Baroqah Farms' }],
  creator: 'Baroqah Farms',
  publisher: 'Baroqah Farms',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://baroqahfarms.vercel.app',
    siteName: 'Baroqah Farms',
    title: 'Baroqah Farms | Spesialis Qurban, Aqiqah & Katering Jatiasih Bekasi',
    description:
      'Solusi lengkap ibadah Qurban, Aqiqah dan Katering acara Anda di Bekasi. Hewan sehat bersyariat, hidangan higienis dan nikmat masakan Nusantara.',
    images: [
      {
        url: '/images/hero_farm.png',
        width: 1200,
        height: 630,
        alt: 'Baroqah Farms - Qurban & Aqiqah',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baroqah Farms | Layanan Qurban, Aqiqah & Katering Terpercaya',
    description: 'Solusi lengkap ibadah Qurban, Aqiqah dan Katering acara Anda di Bekasi.',
    images: ['/images/hero_farm.png'],
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
  verification: {
    google: 'yj9u4QmJFOMTb5oHLfEoxMRytWKkw6oocg-_JKhvRbw',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Baroqah Farms',
    image: 'https://baroqahfarms.com/images/hero_farm.png',
    '@id': 'https://baroqahfarms.com',
    url: 'https://baroqahfarms.com',
    telephone: '+6289654886502',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Villa Jatirasa, Gg Rimban No 68 RT 001/016',
      addressLocality: 'Jatiasih, Bekasi',
      addressRegion: 'Jawa Barat',
      postalCode: '17424',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.3054133,
      longitude: 106.8778434,
    },
    priceRange: 'Rp',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '315',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '06:00',
      closes: '20:00',
    },
  };

  return (
    <html lang="id-ID" className={`${inter.variable} h-full antialiased pt-0 m-0`}>
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Standard Next.js pattern for JSON-LD structured data injection
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 m-0 p-0 font-sans">
        {children}
      </body>
    </html>
  );
}
