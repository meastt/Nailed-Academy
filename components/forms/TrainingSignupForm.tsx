"use client";

import { useState } from "react";

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

export default function TrainingSignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    session: "",
    experience: "",
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
    if (!formData.session) newErrors.session = "Please select a session";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/training", {
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
          session: "",
          experience: "",
          message: "",
        });
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
        <p className="text-champagne-gold text-lg mb-4">Thank you! Your training signup has been submitted.</p>
        <p className="text-foreground/80">We'll contact you shortly with more information.</p>
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
        <label htmlFor="session" className="block text-sm font-medium mb-1">
          Preferred Session (2026) *
        </label>
        <select
          id="session"
          value={formData.session}
          onChange={(e) => setFormData({ ...formData, session: e.target.value })}
          className="w-full px-4 py-2 bg-matte-black border border-champagne-gold/30 rounded focus:outline-none focus:border-champagne-gold"
        >
          <option value="">Select a session</option>
          {sessions.map((session) => (
            <option key={session.id} value={session.id}>
              {session.name}
            </option>
          ))}
        </select>
        {errors.session && <p className="text-red-400 text-sm mt-1">{errors.session}</p>}
        {formData.session && (
          <p className="text-foreground/60 text-xs mt-1">
            {sessions.find((s) => s.id === formData.session)?.dates}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm font-medium mb-1">
          Previous Experience
        </label>
        <textarea
          id="experience"
          value={formData.experience}
          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
          rows={3}
          placeholder="Tell us about any previous nail tech experience..."
          className="w-full px-4 py-2 bg-matte-black border border-champagne-gold/30 rounded focus:outline-none focus:border-champagne-gold"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Additional Questions
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
        {isSubmitting ? "Submitting..." : "Submit Training Signup"}
      </button>
    </form>
  );
}

