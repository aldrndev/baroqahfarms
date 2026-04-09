import { Check } from 'lucide-react';
import Image from 'next/image';

export default function AqiqahSection() {
  const packages = [
    {
      name: 'Paket Anak Perempuan',
      price: 'Rp 2.500.000',
      description: 'Layanan Aqiqah lengkap untuk anak perempuan (1 ekor kambing/domba).',
      features: [
        '1 Ekor Kambing/Domba Sehat (Termasuk Potong)',
        '200 Tusuk Sate & 50 Porsi Gulai',
        'Sertifikat Aqiqah Eksklusif',
        'Dokumentasi Pemotongan (Video/Foto)',
        'Gratis Pengiriman Jatiasih & Sekitarnya',
      ],
      popular: false,
    },
    {
      name: 'Paket Anak Laki-Laki',
      price: 'Rp 4.900.000',
      description: 'Layanan Aqiqah langkap untuk anak laki-laki (2 ekor kambing/domba).',
      features: [
        '2 Ekor Kambing/Domba Sehat (Termasuk Potong)',
        '400 Tusuk Sate & 100 Porsi Gulai',
        'Sertifikat Aqiqah Eksklusif & Pigura',
        'Cetak Foto Polaroid Bayi',
        'Dokumentasi Pemotongan lengkap',
        'Gratis Pengiriman se-Bekasi',
      ],
      popular: true,
    },
  ];

  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6281234567890';

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="aqiqah">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[--color-primary-50] -skew-y-2 transform -translate-y-10 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Paket Aqiqah Praktis & Berkah
          </h2>
          <p className="text-lg text-slate-600">
            Sambut kelahiran buah hati dengan niat yang suci. Kami olah daging Aqiqah menjadi
            hidangan sate dan gulai lezat, siap dibagikan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => {
            const waText = encodeURIComponent(`Halo, saya ingin menanyakan ${pkg.name}`);
            return (
              <div
                key={pkg.name}
                className={`rounded-2xl shadow-lg overflow-hidden border smooth-transition flex flex-col ${
                  pkg.popular
                    ? 'border-[--color-primary-500] ring-2 ring-[--color-primary-500] ring-opacity-50 relative transform md:-translate-y-4'
                    : 'border-slate-100 bg-white hover:border-[--color-primary-300]'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-[--color-primary-500] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-bl-lg">
                    Paling Diminati
                  </div>
                )}

                <div className={`p-8 ${pkg.popular ? 'bg-[--color-primary-50]' : 'bg-white'}`}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <p className="text-slate-600 mb-6 min-h-[48px]">{pkg.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-slate-900">{pkg.price}</span>
                  </div>
                </div>

                <div className="p-8 bg-white border-t border-slate-100 flex flex-col flex-grow">
                  <ul className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="flex-shrink-0 h-5 w-5 text-[--color-primary-500] mr-3" />
                        <span className="text-slate-600 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/${phoneNumber}?text=${waText}`}
                    className={`block w-full text-center py-4 px-6 rounded-xl text-base font-bold smooth-transition ${
                      pkg.popular
                        ? 'bg-[--color-primary-600] text-white hover:bg-[--color-primary-700] shadow-md'
                        : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    Pilih Paket Ini
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gambar Tambahan */}
        <div className="mt-16 flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-900/5 aspect-w-16 aspect-h-7 max-w-4xl w-full">
            <Image
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1200"
              alt="Hidangan Sate dan Gulai Kambing"
              width={1000}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
