"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import { useBookingModal } from "@/contexts/BookingModalContext";

export default function ServicesSilo() {
  const { openModal } = useBookingModal();
  return (
    <div className="relative border-r-0 md:border-r border-champagne-gold/20 p-8 md:p-12 bg-matte-black/50 backdrop-blur-sm shadow-champagne hover:shadow-champagne-lg transition-shadow duration-300 rounded-lg">
      <div className="mb-6">
        <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/silos/services.jpg"
            alt="Nail services"
            fill
            className="object-cover"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif text-champagne-gold mb-4">
          Client Services
        </h2>
      </div>

      <div className="space-y-4 mb-6">
        <div className="md:hidden">
          <Accordion title="FEET">
            <ul className="space-y-2 text-sm">
              <li>Gel Polish Toes</li>
              <li>Luxury & Spa Pedicures</li>
              <li>Toenail Reconstruction</li>
            </ul>
          </Accordion>
          
          <Accordion title="NAILS">
            <ul className="space-y-2 text-sm">
              <li>Manicures & Structured Manicures</li>
              <li>Overlays & Extensions</li>
              <li>Fills/Rebalance</li>
              <li>Nail Repairs & Art</li>
            </ul>
          </Accordion>
        </div>

        <div className="hidden md:block space-y-4">
          <div>
            <h3 className="text-lg font-serif text-champagne-gold mb-2">FEET</h3>
            <ul className="space-y-1 text-sm text-foreground/80">
              <li>• Gel Polish Toes</li>
              <li>• Luxury & Spa Pedicures</li>
              <li>• Toenail Reconstruction</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif text-champagne-gold mb-2">NAILS</h3>
            <ul className="space-y-1 text-sm text-foreground/80">
              <li>• Manicures & Structured Manicures</li>
              <li>• Overlays & Extensions</li>
              <li>• Fills/Rebalance</li>
              <li>• Nail Repairs & Art</li>
            </ul>
          </div>
        </div>
      </div>

      <button 
        onClick={openModal}
        className="w-full px-6 py-3 bg-champagne-gold text-matte-black rounded hover:bg-champagne-gold-light transition-colors font-medium"
      >
        Book Appointment
      </button>
    </div>
  );
}

