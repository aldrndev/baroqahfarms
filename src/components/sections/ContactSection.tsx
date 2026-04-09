import { MapPin, MessageCircle, Phone } from 'lucide-react';

export default function ContactSection() {
  const admin1 = '6289654886502';
  const admin2 = '6285179752974';

  return (
    <section className="py-24 bg-white scroll-mt-24" id="kontak">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent-600 tracking-wider uppercase mb-3">
            Hubungi Kami
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Pusat Informasi & Pemesanan
          </h3>
          <p className="text-lg text-slate-600">
            Dapatkan penawaran terbaik dan konsultasikan kebutuhan hewan Qurban, Aqiqah, atau
            Katering hajatan Anda dengan kami hari ini.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex items-start shadow-sm hover:shadow-md smooth-transition">
              <div className="h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                <MessageCircle size={24} />
              </div>
              <div className="ml-6">
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  Pemesanan Online (WhatsApp)
                </h4>
                <p className="text-slate-600 mb-4">
                  Tim admin kami standby untuk melayani pertanyaan Anda dengan ramah dan cepat.
                </p>
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${admin1}`}
                    className="flex items-center text-primary-600 font-semibold hover:text-primary-700 smooth-transition"
                  >
                    <Phone size={18} className="mr-2" /> Admin 1: 0896 5488 6502
                  </a>
                  <a
                    href={`https://wa.me/${admin2}`}
                    className="flex items-center text-primary-600 font-semibold hover:text-primary-700 smooth-transition"
                  >
                    <Phone size={18} className="mr-2" /> Admin 2: 0851 7975 2974
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex items-start shadow-sm hover:shadow-md smooth-transition">
              <div className="h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div className="ml-6">
                <h4 className="text-xl font-bold text-slate-900 mb-2">Kunjungi Kandang Kami</h4>
                <p className="text-slate-600 mb-4">
                  Silakan datang langsung ke peternakan kami untuk mensurvei dan memilih hewan
                  secara langsung.
                </p>
                <p className="text-slate-600 font-medium">
                  <strong>Baroqah Farms</strong><br />
                  Jl. Villa Jatirasa, Gg Rimban No 68 RT 001/016
                  <br />
                  Jatiasih, Bekasi, Jawa Barat
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-200 rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-full shadow-inner relative ring-1 ring-slate-900/5">
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=id&amp;q=Jl.%20Villa%20Jatirasa,%20Gg%20Rimban%20No%2068,%20Jatiasih,%20Bekasi,%20Jawa%20Barat+(Baroqah%20Farms)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Kandang Baroqah Farms"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
