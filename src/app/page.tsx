import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CasesSection from '@/components/CasesSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <CasesSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
