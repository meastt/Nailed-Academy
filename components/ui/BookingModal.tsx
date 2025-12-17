"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import BookingForm from "@/components/forms/BookingForm";
import { useBookingModal } from "@/contexts/BookingModalContext";

export default function BookingModal() {
  const { isOpen, closeModal } = useBookingModal();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsAnimating(false);
        setTimeout(() => {
          closeModal();
        }, 300);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeModal]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      closeModal();
    }, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-morphism rounded-2xl p-8 transform transition-all duration-300 ${
          isAnimating ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-champagne-gold hover:text-champagne-gold-light transition-colors z-10"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-champagne-gold mb-4">
            Book an Appointment
          </h2>
          <p className="text-foreground/80 mb-6">
            Fill out the form below to request an appointment. We'll contact you shortly to confirm your booking.
          </p>
          <BookingForm onSuccess={handleClose} />
        </div>
      </div>
    </div>,
    document.body
  );
}

