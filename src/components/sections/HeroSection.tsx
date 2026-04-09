import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6281234567890';
  const defaultMessage = encodeURIComponent('Halo Kambing Jatiasih, saya ingin pesan layanan.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[--color-primary-900]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1510423192080-87a2abdc590e?auto=format&fit=crop&q=80&w=2670"
          alt="Padang rumput peternakan yang hijau dan asri"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[--color-primary-900] via-[--color-primary-900]/80 to-[--color-primary-900]/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[--color-primary-800] border border-[--color-primary-600] text-[--color-primary-100] text-sm font-semibold mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[--color-accent-500] mr-2 animate-pulse"></span>
            Siap Melayani Qurban & Aqiqah 2026/1447H
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Layanan <span className="text-[--color-accent-500]">Qurban, Aqiqah</span> & Katering
            Terbaik di Bekasi
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Menyediakan hewan ternak sehat, bersih, dan sesuai syariat. Kami kelola semuanya dari
            penyembelihan hingga hidangan katering nikmat di depan pintu rumah Anda.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href={whatsappUrl}
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-base font-bold text-[--color-primary-900] bg-white rounded-full hover:bg-gray-100 smooth-transition shadow-lg"
            >
              Pesan Sekarang
            </a>
            <a
              href="#katalog"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-base font-bold text-white border-2 border-white/20 rounded-full hover:bg-white/10 smooth-transition"
            >
              Lihat Katalog Menu <ArrowRight size={18} className="ml-2" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-medium text-slate-300">
            <div className="flex items-center">
              <CheckCircle2 size={18} className="text-[--color-primary-400] mr-2" />
              Tersertifikasi Halal
            </div>
            <div className="flex items-center">
              <CheckCircle2 size={18} className="text-[--color-primary-400] mr-2" />
              Garansi Hewan Sehat
            </div>
            <div className="flex items-center">
              <CheckCircle2 size={18} className="text-[--color-primary-400] mr-2" />
              Gratis Antar (Jatiasih)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
