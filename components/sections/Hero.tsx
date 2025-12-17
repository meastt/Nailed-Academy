"use client";

import Image from "next/image";
import { useBookingModal } from "@/contexts/BookingModalContext";

export default function Hero() {
  const { openModal } = useBookingModal();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero/exterior.jpg"
          alt="Nailed Studio & Academy exterior"
          fill
          className="object-cover opacity-50 hero-ken-burns"
          priority
        />
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-matte-black/70 via-matte-black/30 to-matte-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-matte-black/40 via-transparent to-matte-black/40" />
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(26,26,26,0.4)_100%)]" />
      </div>

      {/* Decorative accent lines - desktop only */}
      <div className="hidden md:block absolute top-1/4 left-16 w-px h-24 bg-gradient-to-b from-transparent via-champagne-gold/40 to-transparent hero-animate-3" />
      <div className="hidden md:block absolute top-1/3 right-16 w-px h-32 bg-gradient-to-b from-transparent via-champagne-gold/30 to-transparent hero-animate-4" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Location badge */}
        <div className="hero-animate-1 mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-champagne-gold/30 bg-matte-black/50 backdrop-blur-sm text-xs tracking-[0.2em] uppercase text-champagne-gold/80">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold animate-pulse" />
            St. George, Utah
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="hero-animate-2 mb-4">
          {/* Desktop: horizontal layout */}
          <span className="hidden md:flex items-baseline justify-center gap-4">
            <span className="hero-text-primary">Nailed</span>
            <span className="hero-text-secondary">Studio</span>
            <span className="hero-text-accent">&</span>
            <span className="hero-text-secondary">Academy</span>
          </span>
          {/* Mobile: stacked layout */}
          <span className="md:hidden flex flex-col items-center">
            <span className="hero-text-primary">Nailed</span>
            <span className="hero-text-secondary mt-1">Studio & Academy</span>
          </span>
        </h1>

        {/* Decorative line */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-champagne-gold to-transparent mx-auto my-6 hero-line-animate" />

        {/* Tagline */}
        <p className="hero-animate-3 text-lg md:text-xl text-foreground/80 mb-10 max-w-xl mx-auto font-light tracking-wide">
          Professional nail services, expert training, and premium SO Gel supplies
        </p>

        {/* CTA Buttons */}
        <div className="hero-animate-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary CTA */}
          <button
            onClick={openModal}
            className="group relative px-8 py-4 bg-champagne-gold text-matte-black rounded-sm font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] active:scale-[0.98] min-w-[200px] min-h-[52px]"
          >
            <span className="relative z-10 tracking-wide">Book Appointment</span>
            {/* Hover shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>

          {/* Secondary CTA */}
          <a
            href="#services"
            className="glass-morphism px-8 py-4 rounded-sm min-w-[200px] min-h-[52px] inline-flex items-center justify-center text-champagne-gold font-medium tracking-wide transition-all duration-300 hover:bg-champagne-gold/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] border-champagne-gold/40 hover:border-champagne-gold/60"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hero-animate-5">
        <a
          href="#services"
          className="group flex flex-col items-center gap-2 text-champagne-gold/60 hover:text-champagne-gold transition-colors"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-champagne-gold/60 to-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-champagne-gold/80 animate-scroll-line" />
          </div>
        </a>
      </div>
    </section>
  );
}
