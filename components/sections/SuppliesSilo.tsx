"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";

export default function SuppliesSilo() {
  return (
    <div className="relative p-8 md:p-12 bg-matte-black/50 backdrop-blur-sm shadow-champagne hover:shadow-champagne-lg transition-shadow duration-300 rounded-lg">
      <div className="mb-6">
        <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/silos/supplies.jpg"
            alt="SO Gel nail supplies"
            fill
            className="object-cover"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif text-champagne-gold mb-4">
          Supply Shop
        </h2>
      </div>

      <div className="space-y-4 mb-6">
        <p className="text-foreground/80">
          Premium SO Gel products available at our studio.
        </p>
        
        <div className="space-y-2 text-sm text-foreground/80">
          <p className="font-medium text-champagne-gold">Product Features:</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Hema free</li>
            <li>Harsh chemical free</li>
            <li>Vegan</li>
            <li>Hypoallergenic</li>
            <li>Odorless</li>
            <li>Organic</li>
            <li>Made in the USA</li>
          </ul>
        </div>
      </div>

      <Button href="/supplies" variant="primary" className="w-full">
        Shop Supplies
      </Button>
    </div>
  );
}

