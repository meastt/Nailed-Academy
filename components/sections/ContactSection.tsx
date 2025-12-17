import ContactForm from "@/components/forms/ContactForm";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { EmailIcon } from "@/components/ui/Icons";

export default function ContactSection() {
  return (
    <>
      {/* General Contact Section */}
      <section id="contact" className="py-20 bg-matte-black/50 border-t border-champagne-gold/10">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif text-champagne-gold mb-4">
                Get In Touch
              </h2>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                Have a question? Reach out to us and we'll get back to you as soon as possible.
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-2xl mx-auto">
            <div className="glass-morphism p-8 rounded-2xl">
              <ContactForm />
            </div>
          </div>

          {/* Contact Info */}
          <ScrollAnimation delay={100}>
            <div className="mt-16 text-center">
              <div className="inline-block glass-morphism rounded-2xl p-8">
                <h3 className="text-2xl font-serif text-champagne-gold mb-6">Visit Us</h3>
                <div className="space-y-3 text-foreground/80">
                  <p>144 W Brigham Rd Suite 10</p>
                  <p>St. George, Utah</p>
                  <p>
                    <a href="tel:14355251199" className="text-champagne-gold hover:text-champagne-gold-light transition-colors">
                      1-435-525-1199
                    </a>
                  </p>
                  <p>
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
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}

