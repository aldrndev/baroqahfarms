import Image from 'next/image';

export default function CateringSection() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6281234567890';
  const defaultText = encodeURIComponent(
    'Halo, saya ingin menanyakan tentang layanan Katering Acara.',
  );

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden scroll-mt-24" id="katering">
      {/* Dekorasi Visual Latar Belakang */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-900 rounded-full filter blur-[100px] opacity-50 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden aspect-4/5 relative group">
                <Image
                  src="/images/katering_prasmanan.png"
                  alt="Prasmanan Katering 1"
                  fill
                  className="object-cover group-hover:scale-105 smooth-transition duration-700"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-4/5 relative group mt-8">
                <Image
                  src="/images/katering_kotak.png"
                  alt="Prasmanan Katering 2"
                  fill
                  className="object-cover group-hover:scale-105 smooth-transition duration-700"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold text-accent-500 tracking-wider uppercase mb-3">
              Layanan Spesial Kami
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
              Katering Prasmanan & Nasi Kotak
            </h3>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Di samping pelayanan penyembelihan, Baroqah Farms menawarkan layanan jasa Katering
              untuk segala kebutuhan acara seperti tasyakuran, pernikahan, dan khitanan dengan cita
              rasa lezat berempah khas Nusantara.
            </p>

            <ul className="space-y-6 mb-10">
              <li className="flex items-start">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-white/10 text-primary-400 font-bold mr-4 shrink-0">
                  1
                </span>
                <div>
                  <h4 className="text-xl font-bold text-white">Prasmanan Lengkap</h4>
                  <p className="text-slate-400 mt-1">
                    Layanan katering prasmanan dengan peralatan makan elegan dan staf *standby*.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-white/10 text-primary-400 font-bold mr-4 shrink-0">
                  2
                </span>
                <div>
                  <h4 className="text-xl font-bold text-white">Nasi Box Simpel</h4>
                  <p className="text-slate-400 mt-1">
                    Nasi kotak higienis untuk acara sosial, pengajian, dan rapat kantor harga
                    bersahabat.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-white/10 text-primary-400 font-bold mr-4 shrink-0">
                  3
                </span>
                <div>
                  <h4 className="text-xl font-bold text-white">Custom Menu</h4>
                  <p className="text-slate-400 mt-1">
                    Anda bisa mengatur request menu utama (Daging/Ayam) sesuai selera tamu undangan.
                  </p>
                </div>
              </li>
            </ul>

            <a
              href={`https://wa.me/${phoneNumber}?text=${defaultText}`}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-accent-500 rounded-full hover:bg-accent-600 hover:text-white smooth-transition shadow-lg"
            >
              Konsultasi Menu Katering
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
