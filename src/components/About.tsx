"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Subtle background image */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=1920&q=60&auto=format")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Visual with real image */}
          <div
            className={`relative transition-all duration-1000 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              {/* Real food image */}
              <Image
                src="/images/Atho.png"
                alt="Authentic Burmese Atho noodles from Yaavum Atho Kadai"
                fill
                className="object-cover transition-transform duration-[8000ms] ease-out hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black-deep via-transparent to-black-deep/30" />

              {/* Floating glassmorphism stats card */}
              <div className="absolute bottom-4 left-4 right-4 glass-card rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <div className="text-gold font-bold text-xl">1000+</div>
                    <div className="text-white-soft/40 text-xs">Happy Customers</div>
                  </div>
                  <div className="w-px h-8 bg-gold/20" />
                  <div className="text-center">
                    <div className="text-gold font-bold text-xl">4.6</div>
                    <div className="text-white-soft/40 text-xs">Star Rating</div>
                  </div>
                  <div className="w-px h-8 bg-gold/20" />
                  <div className="text-center">
                    <div className="text-gold font-bold text-xl">18+</div>
                    <div className="text-white-soft/40 text-xs">Menu Items</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-28 h-28 border-2 border-gold/15 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-2 border-gold/10 rounded-2xl -z-10" />
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <span className="text-gold/60 text-sm tracking-[0.2em] uppercase font-medium">
              Our Story
            </span>
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              A Taste of{" "}
              <span className="text-shimmer-gold">Burma</span>
              <br />
              in Chennai
            </h2>
            <div className="space-y-4 text-white-soft/60 leading-relaxed">
              <p>
                Nestled on the bustling Chennai-Tiruvallur High Road in Pattabiram,{" "}
                <span className="text-gold/80">Yaavum Atho Kadai</span> brings the vibrant
                flavors of Burmese street food right to your plate.
              </p>
              <p>
                Our signature Atho noodles &mdash; tossed with tangy, spicy masala and
                topped with crispy onions &mdash; have become a local legend. From the
                hearty warmth of our Mohinga to the soul-soothing Burmese soups, every
                dish is crafted with authentic recipes and fresh ingredients.
              </p>
              <p>
                What started as a small street food stall has grown into one of
                Pattabiram&apos;s most beloved eateries, earning the trust and love of over{" "}
                <span className="text-gold/80">1000+ customers</span> across Zomato,
                Swiggy, and JustDial.
              </p>
            </div>

            {/* Features - glassmorphism cards */}
            <div className={`grid grid-cols-2 gap-4 mt-8 stagger-children ${visible ? "visible" : ""}`}>
              {[
                { icon: "🍜", label: "Authentic Recipes" },
                { icon: "⚡", label: "Quick Service" },
                { icon: "💰", label: "Pocket Friendly" },
                { icon: "🛵", label: "Home Delivery" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-xl p-4 flex items-center gap-3 hover:border-gold/25 hover-lift cursor-default"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm text-white-soft/70">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
