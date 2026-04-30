import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />

      <div className="pt-20 text-center">
        <h1 className="text-4xl font-bold mt-10 ">
          Landing Page Yoga
        </h1>
      </div>

      <Footer />
    </main>
  );
}
