import { Globe, Mail, MapPin, Phone, Share2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800" id="kontak">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <span className="text-2xl font-bold tracking-tight text-white block mb-2">
              Kambing Jatiasih
            </span>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Layanan profesional, bersih, dan higienis untuk kebutuhan Aqiqah, Qurban, dan Katering
              acara Anda. Dipercaya lebih dari ribuan keluarga di Bekasi.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                className="text-slate-400 hover:text-white smooth-transition"
                aria-label="Instagram"
              >
                <Share2 size={20} />
              </a>
              <a
                href="https://facebook.com"
                className="text-slate-400 hover:text-white smooth-transition"
                aria-label="Facebook"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Layanan Kami
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#qurban"
                  className="text-slate-400 hover:text-[--color-primary-400] text-sm smooth-transition"
                >
                  Hewan Qurban
                </a>
              </li>
              <li>
                <a
                  href="#aqiqah"
                  className="text-slate-400 hover:text-[--color-primary-400] text-sm smooth-transition"
                >
                  Paket Aqiqah
                </a>
              </li>
              <li>
                <a
                  href="#katering"
                  className="text-slate-400 hover:text-[--color-primary-400] text-sm smooth-transition"
                >
                  Katering Acara
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Kontak
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start">
                <Phone size={18} className="mt-0.5 mr-3 text-[--color-primary-500] shrink-0" />
                <span>
                  Admin 1:{' '}
                  <a
                    href="https://wa.me/6281234567890"
                    className="hover:text-white smooth-transition"
                  >
                    +62 812-3456-7890
                  </a>
                  <br />
                  Admin 2:{' '}
                  <a
                    href="https://wa.me/6289876543210"
                    className="hover:text-white smooth-transition"
                  >
                    +62 898-7654-3210
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mt-0.5 mr-3 text-[--color-primary-500] shrink-0" />
                <a
                  href="mailto:halo@kambingjatiasih.com"
                  className="hover:text-white smooth-transition"
                >
                  halo@kambingjatiasih.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Lokasi Kandang / Dapur
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start">
                <MapPin size={18} className="mt-0.5 mr-3 text-[--color-primary-500] shrink-0" />
                <span>
                  Jl. Villa Jatirasa,
                  <br />
                  Gg Rimban No 68 RT 001/016
                  <br />
                  Jatiasih, Bekasi, Jawa Barat
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {currentYear} Kambing Jatiasih. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Dibangun untuk kenyamanan ibadah Anda.</p>
        </div>
      </div>
    </footer>
  );
}
