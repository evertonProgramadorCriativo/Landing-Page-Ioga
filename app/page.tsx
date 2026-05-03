import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CertificadosSection from "@/components/CertificadosSection";
import TimeSection from "@/components/TimeSection";
import PraticandoYogaSection from "@/components/PraticandoYogaSection";
import AgendamentoSection from "@/components/AgendamentoSection";
export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CertificadosSection />
      <TimeSection />
      <PraticandoYogaSection />
      <AgendamentoSection />
      <Footer />
    </main>
  );
}
