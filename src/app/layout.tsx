import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kambing Jatiasih | Layanan Qurban, Aqiqah & Katering Terpercaya',
  description:
    'Solusi layanan Qurban, Aqiqah, dan Katering terbaik, bersih, dan sesuai syariat di Jatiasih, Bekasi. Pemesanan mudah melalui WhatsApp.',
  keywords:
    'Qurban Jatiasih, Aqiqah Bekasi, Katering Bekasi, Jual Kambing Qurban, Hewan Qurban, Katering Murah',
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
