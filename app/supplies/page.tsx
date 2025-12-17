import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function SuppliesPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <section className="py-20 bg-matte-black">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-serif text-champagne-gold text-center mb-4">
              SO Gel Nail Supplies
            </h1>
            <p className="text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
              Premium nail products that are safe, high-quality, and made in the USA.
            </p>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <ScrollAnimation delay={100}>
              <div className="bg-matte-black border border-champagne-gold/20 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-serif text-champagne-gold mb-6">Product Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex items-center">
                      <span className="text-champagne-gold mr-2">✓</span>
                      Hema free
                    </li>
                    <li className="flex items-center">
                      <span className="text-champagne-gold mr-2">✓</span>
                      Harsh chemical free
                    </li>
                    <li className="flex items-center">
                      <span className="text-champagne-gold mr-2">✓</span>
                      Vegan
                    </li>
                    <li className="flex items-center">
                      <span className="text-champagne-gold mr-2">✓</span>
                      Hypoallergenic
                    </li>
                  </ul>
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex items-center">
                      <span className="text-champagne-gold mr-2">✓</span>
                      Odorless
                    </li>
                    <li className="flex items-center">
                      <span className="text-champagne-gold mr-2">✓</span>
                      Organic
                    </li>
                    <li className="flex items-center">
                      <span className="text-champagne-gold mr-2">✓</span>
                      Made in the USA
                    </li>
                    <li className="flex items-center">
                      <span className="text-champagne-gold mr-2">✓</span>
                      Cruelty free
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-matte-black border border-champagne-gold/20 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-serif text-champagne-gold mb-6">About SO Gel</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  SO Gel Nails Supply Company, led by CEO Becky Bunnell, is committed to providing nail technicians and their clients with the safest, highest-quality products available. Our products are designed with the health and safety of both nail techs and clients in mind.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Visit our studio to browse our full selection of SO Gel products, including the POSH Hema free Builder Gels and the I AM Hema free Gel polish line. Proceeds from each bottle of the I AM line go to a Women's Shelter for abused women.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="bg-matte-black border border-champagne-gold/20 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-serif text-champagne-gold mb-4">Visit Our Studio</h2>
                <p className="text-foreground/80 mb-6">
                  Stop by our studio to see our full selection of SO Gel products and speak with our team about your needs.
                </p>
                <div className="space-y-2 text-foreground/80">
                  <p>144 W Brigham Rd Suite 10</p>
                  <p>St. George, Utah</p>
                  <p>
                    <a href="tel:14355251199" className="text-champagne-gold hover:text-champagne-gold-light transition-colors">
                      1-435-525-1199
                    </a>
                  </p>
                  <p>
                    <a href="mailto:Nailedstudioandacademy@gmail.com" className="text-champagne-gold hover:text-champagne-gold-light transition-colors">
                      Nailedstudioandacademy@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

