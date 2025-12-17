import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/forms/BookingForm";

export default function BookingPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <section className="py-20 bg-matte-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-champagne-gold text-center mb-4">
            Book an Appointment
          </h1>
          <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            Fill out the form below to request an appointment. We'll contact you shortly to confirm your booking.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="glass-morphism p-8 rounded-2xl">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

