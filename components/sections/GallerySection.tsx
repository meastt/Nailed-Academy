import Carousel from "@/components/ui/Carousel";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const galleryImages = [
  {
    id: "interior-1",
    image: "/images/gallery/interior-1.jpg",
    alt: "Nailed Studio interior 1",
  },
  {
    id: "interior-2",
    image: "/images/gallery/interior-2.jpg",
    alt: "Nailed Studio interior 2",
  },
  {
    id: "interior-3",
    image: "/images/gallery/interior-3.jpg",
    alt: "Nailed Studio interior 3",
  },
  {
    id: "interior-4",
    image: "/images/gallery/interior-4.jpg",
    alt: "Nailed Studio interior 4",
  },
];

export default function GallerySection() {
  return (
    <section className="py-20 bg-matte-black/50">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-4xl md:text-5xl font-serif text-champagne-gold text-center mb-12">
            Our Studio
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={100}>
          <div className="max-w-5xl mx-auto">
            <Carousel items={galleryImages} autoPlay={true} interval={4000} showDots={true} showArrows={true} />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

