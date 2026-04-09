import Image from 'next/image';

export default function QurbanSection() {
  const products = [
    {
      id: 1,
      title: 'Kambing Jantan Super',
      weight: '± 25 - 30 Kg',
      price: 'Mulai Rp 3.500.000',
      description:
        'Sehat, cukup umur, dan dirawat dengan pakan bernutrisi tinggi. Sangat cocok untuk Qurban personal keluarga.',
      image: '/images/kambing_qurban.png',
      type: 'Kambing',
    },
    {
      id: 2,
      title: 'Kambing Jantan Premium',
      weight: '± 35 - 40 Kg',
      price: 'Mulai Rp 4.500.000',
      description:
        'Postur tubuh sangat besar, tanduk sempurna. Pilihan terbaik bagi Anda yang ingin Qurban maksimal.',
      image: '/images/kambing_qurban.png',
      type: 'Kambing',
    },
    {
      id: 3,
      title: 'Sapi Bali / Madura',
      weight: '± 250 - 300 Kg',
      price: 'Mulai Rp 20.000.000',
      description:
        'Daging tebal dengan persentase karkas tinggi. Cocok untuk Qurban rombongan 7 orang (patungan).',
      image: '/images/sapi_qurban.png',
      type: 'Sapi',
    },
  ];

  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6281234567890';

  return (
    <section className="py-24 bg-slate-50 scroll-mt-24" id="qurban">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Hewan Qurban Berkualitas
          </h2>
          <p className="text-lg text-slate-600">
            Pilih hewan Qurban terbaik Anda dari peternakan kami. Kami pantau kesehatannya dan kami
            sediakan jasa pengantaran GRATIS untuk area Jatiasih.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-mt-24" id="katalog">
          {products.map((product) => {
            const waText = encodeURIComponent(
              `Halo, saya tertarik dengan hewan Qurban tipe: ${product.title}`,
            );
            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden smooth-transition group flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 smooth-transition duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-700 uppercase tracking-wider">
                    {product.type}
                  </div>
                </div>
                <div className="p-6 flex flex-col grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{product.title}</h3>
                  </div>
                  <p className="text-sm font-semibold text-accent-600 bg-accent-500/10 inline-block px-2 py-1 rounded-md w-max mb-4">
                    Estimasi Bobot: {product.weight}
                  </p>
                  <p className="text-slate-600 text-sm mb-6 grow">{product.description}</p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="font-extrabold text-lg text-slate-900">{product.price}</div>
                    <a
                      href={`https://wa.me/${phoneNumber}?text=${waText}`}
                      className="px-4 py-2 bg-primary-50 text-primary-700 hover:bg-primary-600 hover:text-white rounded-lg text-sm font-bold smooth-transition"
                    >
                      Pesan
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
