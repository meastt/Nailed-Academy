"use client";

import Link from "next/link";
import { InstagramIcon, FacebookIcon, EmailIcon } from "@/components/ui/Icons";
import { useBookingModal } from "@/contexts/BookingModalContext";

export default function Footer() {
  const { openModal } = useBookingModal();
  return (
    <footer className="bg-matte-black border-t border-champagne-gold/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif text-champagne-gold mb-4">Contact Us</h3>
            <p className="text-foreground/80 mb-2">144 W Brigham Rd Suite 10</p>
            <p className="text-foreground/80 mb-2">St. George, Utah</p>
            <p className="text-foreground/80 mb-2">
              <a href="tel:14355251199" className="hover:text-champagne-gold transition-colors">
                1-435-525-1199
              </a>
            </p>
            <p className="text-foreground/80">
              <a 
                href="mailto:Nailedstudioandacademy@gmail.com" 
                className="inline-flex items-center gap-2 text-champagne-gold hover:text-champagne-gold-light transition-colors"
                aria-label="Email us"
              >
                <EmailIcon size={28} />
                <span className="sr-only">Nailedstudioandacademy@gmail.com</span>
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif text-champagne-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-foreground/80 hover:text-champagne-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#training" className="text-foreground/80 hover:text-champagne-gold transition-colors">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link href="/#staff" className="text-foreground/80 hover:text-champagne-gold transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <button 
                  onClick={openModal}
                  className="text-foreground/80 hover:text-champagne-gold transition-colors"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-serif text-champagne-gold mb-4">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/nailed.academy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-champagne-gold hover:text-champagne-gold-light transition-colors"
                aria-label="Follow us on Instagram @nailed.academy"
              >
                <InstagramIcon size={28} />
              </a>
              <a 
                href="https://m.facebook.com/beckyb.sogel/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-champagne-gold hover:text-champagne-gold-light transition-colors"
                aria-label="Follow us on Facebook"
              >
                <FacebookIcon size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-champagne-gold/20 pt-8 text-center text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Nailed Studio & Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

