"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black-deep via-black-card/20 to-black-deep" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-gold/60 text-sm tracking-[0.2em] uppercase font-medium">
            Come Visit Us
          </span>
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Find <span className="text-gradient-gold">Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div
            className={`rounded-2xl overflow-hidden border border-gold/10 h-[400px] transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.4!2d80.08!3d13.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA3JzEyLjAiTiA4MMKwMDQnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Yaavum Atho Kadai Location"
            />
          </div>

          {/* Contact Details */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Address Card */}
            <div className="bg-black-card border border-gold/10 rounded-xl p-6 hover:border-gold/25 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gold font-semibold mb-1">Address</h3>
                  <p className="text-white-soft/60 text-sm leading-relaxed">
                    No. 592, Chennai-Tiruvallur High Road,
                    <br />
                    Near Tidel Park, Pattabiram,
                    <br />
                    Chennai - 600072, Tamil Nadu
                  </p>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-black-card border border-gold/10 rounded-xl p-6 hover:border-gold/25 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gold font-semibold mb-1">Timings</h3>
                  <p className="text-white-soft/60 text-sm">
                    Open Daily: 10:00 AM &ndash; 10:00 PM
                  </p>
                  <p className="text-green-veg text-xs mt-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-veg rounded-full animate-pulse" />
                    Open Now
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-black-card border border-gold/10 rounded-xl p-6 hover:border-gold/25 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gold font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:+919XXXXXXXXX"
                    className="text-white-soft/60 text-sm hover:text-gold transition-colors"
                  >
                    +91 9XXX XXX XXX
                  </a>
                  <p className="text-white-soft/30 text-xs mt-1">
                    Tap to call (update with real number)
                  </p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-wrap gap-3">
              {["Dine-in", "Takeaway", "Swiggy", "Zomato"].map((service) => (
                <span
                  key={service}
                  className="bg-gold/10 border border-gold/15 text-gold/80 text-xs px-4 py-2 rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
