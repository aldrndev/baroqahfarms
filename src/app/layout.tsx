import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://baroqahfarms.com'),
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
    url: 'https://baroqahfarms.com',
    siteName: 'Baroqah Farms',
    title: 'Baroqah Farms | Spesialis Qurban, Aqiqah & Katering Cikarang Bekasi',
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
  return (
    <html lang="id-ID" className={`${inter.variable} h-full antialiased pt-0 m-0`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 m-0 p-0 font-sans">
        {children}
      </body>
    </html>
  );
}
