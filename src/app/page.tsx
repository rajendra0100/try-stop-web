import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ConceptProposition from '@/components/ConceptProposition';
import Features from '@/components/Features';
import VouchersPreview from '@/components/VouchersPreview';
import SavingsCalculator from '@/components/SavingsCalculator';
import DownloadApp from '@/components/DownloadApp';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ConceptProposition />
        <Features />
        <VouchersPreview />
        <SavingsCalculator />
        <DownloadApp />
      </main>
      <Footer />
    </>
  );
}
