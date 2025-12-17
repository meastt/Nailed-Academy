"use client";

import { useState, useEffect, ReactNode } from "react";
import Image from "next/image";

interface CarouselProps {
  items: Array<{
    id: string;
    image?: string;
    alt?: string;
    content?: ReactNode;
  }>;
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

export default function Carousel({ 
  items, 
  autoPlay = true, 
  interval = 5000,
  showDots = true,
  showArrows = true
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, isPaused, items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  if (items.length === 0) return null;

  return (
    <div 
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-lg">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
          >
            {item.image ? (
              <div className="relative w-full aspect-video">
                <Image
                  src={item.image}
                  alt={item.alt || `Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Hide broken images
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            ) : (
              <div className="w-full">{item.content}</div>
            )}
          </div>
        ))}
      </div>

      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-champagne-gold/80 hover:bg-champagne-gold text-matte-black p-2 rounded-full transition-all z-10"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-champagne-gold/80 hover:bg-champagne-gold text-matte-black p-2 rounded-full transition-all z-10"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {showDots && items.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-champagne-gold w-8"
                  : "bg-champagne-gold/40 hover:bg-champagne-gold/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

