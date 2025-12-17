"use client";

import { BookingModalProvider } from "@/contexts/BookingModalContext";
import BookingModal from "@/components/ui/BookingModal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BookingModalProvider>
      {children}
      <BookingModal />
    </BookingModalProvider>
  );
}

