"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";

export default function TrainingSilo() {
  return (
    <div id="training" className="relative border-r-0 md:border-r border-champagne-gold/20 p-8 md:p-12 bg-matte-black/50 backdrop-blur-sm shadow-champagne hover:shadow-champagne-lg transition-shadow duration-300 rounded-lg">
      <div className="mb-6">
        <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/silos/training.jpg"
            alt="Nail technician training"
            fill
            className="object-cover"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif text-champagne-gold mb-4">
          Student Training
        </h2>
      </div>

      <div className="space-y-4 mb-6">
        <p className="text-foreground/80">
          Build your confidence with an elite apprenticeship to start a successful career in the Nail Industry.
        </p>
        
        <div className="md:hidden">
          <Accordion title="Apprenticeship Program">
            <div className="space-y-3 text-sm">
              <p><strong>Investment:</strong> $7,900.00</p>
              <p><strong>Duration:</strong> 300 Hours Training</p>
              <p><strong>Instructors:</strong> 2 certified instructors/educators</p>
              <p>Spots fill quickly as we are in high demand. Only 4 apprentices accepted per session.</p>
            </div>
          </Accordion>
          
          <Accordion title="What's Included">
            <ul className="space-y-2 text-sm list-disc list-inside">
              <li>3 Nail Technician Books, Rolling Storage Case</li>
              <li>Nail Tech Kit ($2,500 value)</li>
              <li>EARN AN INCOME WHILE TRAINING (100% service fees and gratuities)</li>
              <li>State Boards Prep Class</li>
              <li>SO Gel Hard Gel & POSH Soft Gel Certification</li>
              <li>Barbicide Certification</li>
              <li>Be Healthy Initiative Training</li>
              <li>Shear Haven Domestic Violence Training</li>
            </ul>
          </Accordion>
        </div>

        <div className="hidden md:block space-y-3 text-sm">
          <p><strong>Investment:</strong> $7,900.00</p>
          <p><strong>Duration:</strong> 300 Hours Training</p>
          <p><strong>Instructors:</strong> 2 certified instructors/educators</p>
          <p>Spots fill quickly as we are in high demand. Only 4 apprentices accepted per session.</p>
        </div>
      </div>

      <Button href="/training" variant="primary" className="w-full">
        View Training Programs
      </Button>
    </div>
  );
}

