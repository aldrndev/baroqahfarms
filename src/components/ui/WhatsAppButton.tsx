'use client';

import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6281234567890';
  const defaultMessage = encodeURIComponent(
    'Halo Baroqah Farms, saya ingin bertanya tentang layanan Qurban/Aqiqah/Katering.',
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  useEffect(() => {
    // Tunda kemunculan tombol beberapa saat untuk memberikan kesan natural
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 smooth-transition transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#128C7E] active:scale-95 smooth-transition relative group"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle size={28} />

        {/* Ping Animation overlay */}
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>

        {/* Tooltip */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none">
          Tanya Kami di WhatsApp!
        </span>
      </a>
    </div>
  );
}
