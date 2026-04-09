import { Quote, Star } from 'lucide-react';

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Bapak Ridwan',
      role: 'Pelanggan Qurban',
      content:
        'Alhamdulillah ibadah qurban tahun ini terasa sangat tenang. Sapi dan kambingnya besar, sehat, dan dikirimkan video pemotongannya dengan sangat transparan. Sangat amanah!',
      initial: 'R',
    },
    {
      id: 2,
      name: 'Ibu Annisa & Suami',
      role: 'Aqiqah Anak Pertama',
      content:
        'Pesan paket Aqiqah tanpa ribet sama sekali. Sate kambingnya empuk banget, gulenya tidak prengus! Packaging Bento Box-nya juga super mevvah dan rapi. Terima kasih Baroqah Farms.',
      initial: 'A',
    },
    {
      id: 3,
      name: 'Keluarga Bpk. Herman',
      role: 'Katering Syukuran',
      content:
        'Pesan katering prasmanan untuk acara keluarga, rasa masakannya sangat autentik nusantara. Porsinya melimpah, tamu banyak yang memuji rendangnya. Rekomendasi banget!',
      initial: 'H',
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="testimoni">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent-600 tracking-wider uppercase mb-3">
            Kata Mereka
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Kepercayaan Ribuan Keluarga
          </h3>
          <p className="text-lg text-slate-600">
            Sebagian dari kisah nyata pelanggan yang telah menitipkan amanah ibadah dan acara
            pentingnya bersama Baroqah Farms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-100 relative group hover:shadow-xl smooth-transition"
            >
              <div className="absolute top-8 right-8 text-primary-100 group-hover:text-primary-200 smooth-transition">
                <Quote size={48} className="rotate-180" />
              </div>

              <div className="flex text-yellow-400 mb-6">
                <Star size={18} fill="currentColor" strokeWidth={0} />
                <Star size={18} fill="currentColor" strokeWidth={0} />
                <Star size={18} fill="currentColor" strokeWidth={0} />
                <Star size={18} fill="currentColor" strokeWidth={0} />
                <Star size={18} fill="currentColor" strokeWidth={0} />
              </div>

              <p className="text-slate-700 mb-8 relative z-10 text-lg italic leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center mt-auto">
                <div className="h-12 w-12 rounded-full bg-primary-100 text-primary-700 font-bold text-xl flex items-center justify-center shrink-0">
                  {testimonial.initial}
                </div>
                <div className="ml-4">
                  <h4 className="text-slate-900 font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
