import TrainingSilo from "./TrainingSilo";
import ServicesSilo from "./ServicesSilo";
import SuppliesSilo from "./SuppliesSilo";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function SiloSection() {
  return (
    <section id="services" className="py-20 bg-matte-black relative">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-4xl md:text-5xl font-serif text-champagne-gold text-center mb-12">
            Our Services
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 relative">
          <ScrollAnimation delay={100}>
            <TrainingSilo />
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <ServicesSilo />
          </ScrollAnimation>
          <ScrollAnimation delay={300}>
            <SuppliesSilo />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

