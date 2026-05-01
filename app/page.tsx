import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CertificadosSection from "@/components/CertificadosSection";
export default function Home() {
  return (
    <main>
      <Header />

      <HeroSection />
      <CertificadosSection />
      <Footer />
    </main>
  );
}
