"use client";

import { useState } from "react";
import Link from "next/link";
import { useBookingModal } from "@/contexts/BookingModalContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useBookingModal();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-matte-black/95 backdrop-blur-sm border-b border-champagne-gold/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif text-champagne-gold hover:text-champagne-gold-light transition-colors">
            Nailed Studio & Academy
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-foreground hover:text-champagne-gold transition-colors">
              Services
            </Link>
            <Link href="/#training" className="text-foreground hover:text-champagne-gold transition-colors">
              Training
            </Link>
            <Link href="/#staff" className="text-foreground hover:text-champagne-gold transition-colors">
              Our Team
            </Link>
            <button 
              onClick={openModal}
              className="px-4 py-2 bg-champagne-gold text-matte-black rounded hover:bg-champagne-gold-light transition-colors font-medium"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-champagne-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link 
              href="/#services" 
              className="block text-foreground hover:text-champagne-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/#training" 
              className="block text-foreground hover:text-champagne-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Training
            </Link>
            <Link 
              href="/#staff" 
              className="block text-foreground hover:text-champagne-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </Link>
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                openModal();
              }}
              className="w-full px-4 py-2 bg-champagne-gold text-matte-black rounded hover:bg-champagne-gold-light transition-colors font-medium"
            >
              Book Now
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

