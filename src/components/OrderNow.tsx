"use client";

import { useEffect, useRef, useState } from "react";

export default function OrderNow() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="order" ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Parallax food background */}
      <div
        className="absolute inset-0 opacity-[0.08] parallax-bg"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=1920&q=60&auto=format")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black-deep/95 via-black-deep/90 to-black-deep/95" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-gold/60 text-sm tracking-[0.2em] uppercase font-medium">
            Hungry?
          </span>
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Order <span className="text-shimmer-gold">Now</span>
          </h2>
          <p className="text-white-soft/50 max-w-lg mx-auto mb-10">
            Get your favorite Burmese dishes delivered to your doorstep.
            Order through our delivery partners or call us directly!
          </p>
        </div>

        {/* Order Options */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Swiggy */}
          <a
            href="https://www.swiggy.com/restaurants/yavum-atho-kadai-avadi-deena-dayalan-nagar-chennai-343443"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-card rounded-2xl p-8 hover:border-[#FC8019]/40 hover:shadow-lg hover:shadow-[#FC8019]/10 hover-lift"
          >
            <div className="text-5xl mb-4">🟠</div>
            <h3 className="text-white-soft font-semibold text-lg group-hover:text-[#FC8019] transition-colors">
              Swiggy
            </h3>
            <p className="text-white-soft/40 text-sm mt-2">
              Fast delivery to your door
            </p>
            <span className="inline-block mt-4 text-gold text-sm font-medium group-hover:translate-x-1 transition-transform">
              Order &rarr;
            </span>
          </a>

          {/* Zomato */}
          <a
            href="https://www.zomato.com/chennai/yavum-atho-kadai-avadi/order"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-card rounded-2xl p-8 hover:border-[#E23744]/40 hover:shadow-lg hover:shadow-[#E23744]/10 hover-lift"
          >
            <div className="text-5xl mb-4">🔴</div>
            <h3 className="text-white-soft font-semibold text-lg group-hover:text-[#E23744] transition-colors">
              Zomato
            </h3>
            <p className="text-white-soft/40 text-sm mt-2">
              Browse menu &amp; order online
            </p>
            <span className="inline-block mt-4 text-gold text-sm font-medium group-hover:translate-x-1 transition-transform">
              Order &rarr;
            </span>
          </a>

          {/* Call */}
          <a
            href="tel:+919XXXXXXXXX"
            className="group glass-card rounded-2xl p-8 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/10 hover-lift"
          >
            <div className="text-5xl mb-4">📞</div>
            <h3 className="text-white-soft font-semibold text-lg group-hover:text-gold transition-colors">
              Call to Order
            </h3>
            <p className="text-white-soft/40 text-sm mt-2">
              Direct phone order
            </p>
            <span className="inline-block mt-4 text-gold text-sm font-medium group-hover:translate-x-1 transition-transform">
              Call Now &rarr;
            </span>
          </a>
        </div>

        {/* Visit us CTA */}
        <div
          className={`transition-all duration-700 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-white-soft/30 text-sm">
            Or visit us at{" "}
            <a href="#contact" className="text-gold/60 hover:text-gold transition-colors">
              No. 592, Chennai-Tiruvallur High Road, Pattabiram
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
