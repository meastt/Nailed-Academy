"use client";

import { useState } from "react";

interface BookingFormProps {
  onSuccess?: () => void;
}

const services = {
  feet: [
    "Gel Polish Toes",
    "Luxury & Spa Pedicures",
    "Toenail Reconstruction",
  ],
  nails: [
    "Manicures & Structured Manicures",
    "Overlays & Extensions",
    "Fills/Rebalance",
    "Nail Repairs & Art",
  ],
};

const technicians = [
  "Becky Bunnell",
  "Jackie Neil",
  "Lara Cappeletti",
  "McKenzie Cullen",
  "Tessie Naelese",
  "Kenzie Dominguez",
];

export default function BookingForm({ onSuccess }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    technician: "",
    date: "",
    time: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.technician) newErrors.technician = "Please select a technician";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.time) newErrors.time = "Please select a time";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          technician: "",
          date: "",
          time: "",
          message: "",
        });
        // Close modal after a short delay
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 2000);
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <p className="text-champagne-gold text-lg mb-4">Thank you! Your booking request has been submitted.</p>
        <p className="text-foreground/80">We'll contact you shortly to confirm your appointment.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          autoComplete="name"
          className="w-full px-4 py-2 bg-matte-black border border-champagne-gold/30 rounded focus:outline-none focus:border-champagne-gold"
        />
        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          autoComplete="email"
          className="w-full px-4 py-2 bg-matte-black border border-champagne-gold/30 rounded focus:outline-none focus:border-champagne-gold"
        />
        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          autoComplete="tel"
          className="w-full px-4 py-2 bg-matte-black border border-champagne-gold/30 rounded focus:outline-none focus:border-champagne-gold"
        />
        {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-1">
          Service *
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-2 bg-matte-black border border-champagne-gold/30 rounded focus:outline-none focus:border-champagne-gold"
        >
          <option value="">Select a service</option>
          <optgroup label="FEET">
            {services.feet.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </optgroup>
          <optgroup label="NAILS">
            {services.nails.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </optgroup>
        </select>
        {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service}</p>}
      </div>

      <div>
        <label htmlFor="technician" className="block text-sm font-medium mb-1">
          Technician *
        </label>
        <select
          id="technician"
          value={formData.technician}
          onChange={(e) => setFormData({ ...formData, technician: e.target.value })}
          className="w-full px-4 py-2 bg-matte-black border border-champagne-gold/30 rounded focus:outline-none focus:border-champagne-gold"
        >
          <option value="">Select a technician</option>
          {technicians.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>
        {errors.technician && <p className="text-red-400 text-sm mt-1">{errors.technician}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-1">
            Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            min={new Date().toISOString().split("T")[0]}
            autoComplete="off"
            className="w-full px-4 py-2 bg-matte-black border border-champagne-gold/30 rounded focus:outline-none focus:border-champagne-gold"
          />
          {errors.date && <p className="text-red-400 text-sm mt-1">{errors.date}</p>}
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium mb-1">
            Time *
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            autoComplete="off"
            className="w-full px-4 py-2 bg-matte-black border border-champagne-gold/30 rounded focus:outline-none focus:border-champagne-gold"
          />
          {errors.time && <p className="text-red-400 text-sm mt-1">{errors.time}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Additional Notes
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={3}
          className="w-full px-4 py-2 bg-matte-black border border-champagne-gold/30 rounded focus:outline-none focus:border-champagne-gold"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-champagne-gold text-matte-black rounded hover:bg-champagne-gold-light transition-colors font-medium disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit Booking Request"}
      </button>
    </form>
  );
}

