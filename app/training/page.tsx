import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TrainingSignupForm from "@/components/forms/TrainingSignupForm";
import Accordion from "@/components/ui/Accordion";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const sessions = [
  {
    id: "session-1",
    name: "1st Session",
    dates: "Jan 6-8, 13-15, 20-22, 26-29 | Feb 3-5, 10-12, 17-19, 23-26 | Mar 3-5, 9-12, Make up days 16-18",
  },
  {
    id: "session-2",
    name: "2nd Session",
    dates: "Mar 31-Apr 2 | Apr 6-9, 13-16, 20-23, 28-30 | May 4-7, 11-14, 18-21, 25-28 | Make up days June 1-2",
  },
  {
    id: "session-3",
    name: "3rd Session",
    dates: "June 8-11, 15-18, 22-25, 29-July 2 | July 6-9, 13-16, 20-23, 27-30 | Aug 3-4, Make up days 5-6",
  },
  {
    id: "session-4",
    name: "4th Session",
    dates: "Oct 6-8, 13-15, 19-22, 27-29 | Nov 2-5, 10-12, 17-19, 23-25 | Dec 1-3, 7-10, Make up days 14-16",
  },
];

export default function TrainingPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <section id="training" className="py-20 bg-matte-black">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-serif text-champagne-gold text-center mb-4">
              Nail Tech Apprenticeships
            </h1>
            <p className="text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
              If you are ready to build your confidence with an elite apprenticeship to start a successful career in the Nail Industry, Nailed Academy is the place for you! Spots fill quickly as we are in high demand.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            <ScrollAnimation delay={100}>
              <div className="bg-matte-black border border-champagne-gold/20 rounded-lg p-8">
                <h2 className="text-3xl font-serif text-champagne-gold mb-6">Investment</h2>
                <p className="text-4xl font-bold text-champagne-gold mb-4">$7,900.00</p>
                <div className="space-y-3 text-foreground/80">
                  <p><strong>Payment Plan:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>$1,500 non-refundable deposit at contract signing</li>
                    <li>$2,500 due 2 months prior to start date</li>
                    <li>$3,900 due 1 month prior to start date</li>
                  </ul>
                  <p className="text-sm mt-4"><strong>Note:</strong> Only 4 apprentices accepted into program at a time. Serious inquiries only please.</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-matte-black border border-champagne-gold/20 rounded-lg p-8">
                <h2 className="text-3xl font-serif text-champagne-gold mb-6">What's Included</h2>
                <ul className="space-y-2 text-foreground/80">
                  <li>• 300 Hours Training with 2 certified instructors/educators</li>
                  <li>• 3 Nail Technician Books, Rolling Storage Case</li>
                  <li>• Nail Tech Kit ($2,500.00 value) includes all products needed, Efile, Bits, Files, LED Lamp, Dust Extractor, Nail Tools, Practice Hand, Certificates, Paperwork, use of Stations, Pedicure Chairs, Gel Polishes, Art Supplies</li>
                  <li>• EARN AN INCOME WHILE TRAINING, 100% service fees and gratuities from models/clients</li>
                  <li>• State Boards Prep Class</li>
                  <li>• SO Gel Hard Gel & POSH Soft Gel Certification</li>
                  <li>• Barbicide Certification</li>
                  <li>• Be Healthy Initiative Training</li>
                  <li>• Shear Haven Domestic Violence Training</li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={300}>
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-serif text-champagne-gold mb-6 text-center">2026 Apprenticeship Schedule</h2>
              <div className="space-y-2">
                {sessions.map((session) => (
                  <Accordion key={session.id} title={session.name}>
                    <p className="text-foreground/80">{session.dates}</p>
                  </Accordion>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={400}>
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-serif text-champagne-gold mb-6 text-center">Training Curriculum</h2>
              <div className="grid md:grid-cols-2 gap-6 text-foreground/80">
                <ul className="space-y-2">
                  <li>• Manicuring & Natural Nail Care</li>
                  <li>• Pedicures</li>
                  <li>• Toenail Reconstruction</li>
                  <li>• Hard Gel</li>
                  <li>• Soft Builder Gels</li>
                  <li>• Odorless Acrylic</li>
                  <li>• Nail Art</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Electric File Use & Safety</li>
                  <li>• Sanitation & Disinfection</li>
                  <li>• Diseases & Disorders</li>
                  <li>• Shaping, Sculpting & Tips</li>
                  <li>• Overlays, Fills, Rebalance, Removal</li>
                  <li>• Business Practices, Pricing Services</li>
                  <li>• Building a Clientele, Professionalism, Taxes, Work Environments</li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={500}>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif text-champagne-gold mb-6 text-center" id="signup">Sign Up Now</h2>
              <div className="glass-morphism p-8 rounded-2xl">
                <TrainingSignupForm />
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={600}>
            <div className="max-w-4xl mx-auto mt-16 p-6 bg-matte-black border border-champagne-gold/20 rounded-lg">
              <h3 className="text-xl font-serif text-champagne-gold mb-4">Schedule</h3>
              <p className="text-foreground/80 mb-2"><strong>Tuesdays (teaching days):</strong> 8:00-5:00</p>
              <p className="text-foreground/80 mb-2"><strong>Mondays (vary per session), Wednesdays & Thursdays (practical days-models and clients):</strong> 8:00-5:00</p>
              <p className="text-foreground/80"><strong>Average time to finish the 300 hours:</strong> Approximately 9-11 weeks per attendance</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={700}>
            <div className="max-w-4xl mx-auto mt-8 p-6 bg-matte-black border border-champagne-gold/20 rounded-lg">
              <h3 className="text-xl font-serif text-champagne-gold mb-4">Not Included</h3>
              <ul className="text-foreground/80 space-y-1">
                <li>• State Apprentice Application License Fee</li>
                <li>• State Board Test Fees</li>
                <li>• State Nail Tech License Fee</li>
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <Footer />
    </main>
  );
}

