'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Qurban', href: '#qurban' },
    { name: 'Aqiqah', href: '#aqiqah' },
    { name: 'Katering', href: '#katering' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 smooth-transition ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex flex-col">
            <span
              className={`text-2xl font-bold tracking-tight smooth-transition ${isScrolled ? 'text-[--color-primary-600]' : 'text-white'}`}
            >
              Kambing Jatiasih
            </span>
            <span
              className={`text-xs font-medium tracking-wider uppercase smooth-transition ${isScrolled ? 'text-[--color-accent-600]' : 'text-white/80'}`}
            >
              Qurban & Aqiqah
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold smooth-transition hover:text-[--color-primary-500] ${
                  isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call to Action - Desktop */}
          <div className="hidden md:block">
            <a
              href="#kontak"
              className={`px-5 py-2.5 rounded-full text-sm font-semibold smooth-transition shadow-sm hover:shadow-md ${
                isScrolled
                  ? 'bg-[--color-primary-600] text-white hover:bg-[--color-primary-700]'
                  : 'bg-white text-[--color-primary-700] hover:bg-slate-100'
              }`}
            >
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${isScrolled ? 'text-slate-800' : 'text-white'} focus:outline-none`}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-800 hover:text-[--color-primary-600] hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.hash = 'kontak';
              }}
              className="block w-full text-center mt-4 px-3 py-3 text-base font-medium text-white bg-[--color-primary-600] hover:bg-[--color-primary-700] rounded-md shadow-sm"
            >
              Pesan Sekarang
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
