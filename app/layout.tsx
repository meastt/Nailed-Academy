import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";

export const metadata: Metadata = {
  title: "Nailed Studio & Academy | Nail Salon & Training in St. George, Utah",
  description: "Professional nail services, nail technician training, and SO Gel nail supplies. Located in St. George, Utah. Book your appointment today!",
  keywords: "nail salon, nail training, nail technician, St. George Utah, SO Gel, nail supplies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-matte-black text-foreground">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

