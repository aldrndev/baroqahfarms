import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import AboutSection from '@/components/sections/AboutSection';
import AqiqahSection from '@/components/sections/AqiqahSection';
import CateringSection from '@/components/sections/CateringSection';
import HeroSection from '@/components/sections/HeroSection';
import QurbanSection from '@/components/sections/QurbanSection';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full">
        <HeroSection />
        <AboutSection />
        <QurbanSection />
        <AqiqahSection />
        <CateringSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
