import Hero from "@/components/sections/Hero";
import SiloSection from "@/components/sections/SiloSection";
import AboutSection from "@/components/sections/AboutSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SiloSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}

