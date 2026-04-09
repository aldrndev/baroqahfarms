import { CheckCircle, Clock, Heart, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  const features = [
    {
      name: 'Sesuai Syariat Islami',
      description:
        'Kami memastikan setiap proses penyembelihan diawasi ketat dan memenuhi rukun Qurban maupun Aqiqah.',
      icon: ShieldCheck,
    },
    {
      name: 'Daging Segar & Higienis',
      description:
        'Hewan dipelihara dengan baik, pakan berkualitas, dan diolah di fasilitas yang bersih.',
      icon: Heart,
    },
    {
      name: 'Pengiriman Tepat Waktu',
      description:
        'Pesanan Katering atau hewan akan tiba di lokasi Anda tepat pada waktu yang disepakati bersama.',
      icon: Clock,
    },
  ];

  return (
    <section className="py-24 bg-white" id="tentang">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-sm font-bold text-[--color-primary-600] tracking-wider uppercase mb-3">
              Mengapa Memilih Kami?
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Amanah Keluarga Anda adalah Prioritas Kami
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Berpusat di Jatiasih, Bekasi, Kambing Jatiasih hadir memberikan solusi ibadah dan
              acara syukuran Anda. Kami bukan sekadar penjual, tapi mitra ibadah yang ingin
              memastikan setiap tetes keringat kita bernilai pahala.
            </p>

            <dl className="mt-10 space-y-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative pl-12 shadow-sm p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-[--color-primary-200] smooth-transition"
                >
                  <dt className="text-lg font-bold text-slate-900">
                    <feature.icon className="absolute left-4 top-4 h-6 w-6 text-[--color-primary-500]" />
                    {feature.name}
                  </dt>
                  <dd className="mt-1 text-base text-slate-600 leading-relaxed">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-900/5 aspect-w-4 aspect-h-5 object-cover">
              <Image
                src="https://images.unsplash.com/photo-1594916960098-b8054bcaf23b?auto=format&fit=crop&q=80&w=1200"
                alt="Peternakan bersih"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex items-center space-x-4">
              <div className="flex-shrink-0 bg-[--color-primary-100] rounded-full p-3">
                <CheckCircle className="h-6 w-6 text-[--color-primary-600]" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-xl">100%</p>
                <p className="text-sm text-slate-500 font-medium tracking-wide border-t border-slate-200 mt-1 pt-1">
                  Jaminan Kualitas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
