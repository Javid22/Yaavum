"use client";

import { useEffect, useState, useRef, useCallback } from "react";

// Real food photos from Yaavum Atho Kadai - optimized for performance
// Uses WebP (50-60x smaller than original PNGs) with JPEG fallback
const heroImages = [
  { webp: "/images/Atho.webp", jpg: "/images/Atho.jpg" },
  { webp: "/images/Egg_Bejo.webp", jpg: "/images/Egg_Bejo.jpg" },
  { webp: "/images/Mohinga.webp", jpg: "/images/Mohinga.jpg" },
  { webp: "/images/Yavum_Setup.webp", jpg: "/images/Yavum_Setup.jpg" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  // Auto-rotate images with Ken Burns
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax tracking
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Slideshow with Ken Burns Effect */}
      {heroImages.map((img, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{
            opacity: currentImage === idx ? 1 : 0,
            zIndex: currentImage === idx ? 1 : 0,
          }}
        >
          <div
            className="absolute inset-[-20px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${img.webp}), url(${img.jpg})`,
              animation: currentImage === idx ? "kenBurns 8s ease-in-out forwards" : "none",
              transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
              transition: "transform 0.3s ease-out",
            }}
          />
        </div>
      ))}

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black-deep/80 via-black-deep/70 to-black-deep/95" />

      {/* Animated grain texture overlay */}
      <div
        className="absolute inset-0 z-[3] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating gold particles — positions seeded to avoid hydration mismatch */}
      <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
        {[
          { l: 12, t: 8, d: 6, dl: 0 }, { l: 45, t: 22, d: 9, dl: 1 },
          { l: 78, t: 15, d: 12, dl: 2 }, { l: 23, t: 55, d: 7, dl: 3 },
          { l: 90, t: 40, d: 14, dl: 0.5 }, { l: 5, t: 70, d: 8, dl: 1.5 },
          { l: 60, t: 80, d: 11, dl: 2.5 }, { l: 35, t: 45, d: 6, dl: 3.5 },
          { l: 85, t: 65, d: 10, dl: 4 }, { l: 50, t: 90, d: 13, dl: 0.8 },
          { l: 15, t: 35, d: 7, dl: 1.8 }, { l: 70, t: 50, d: 9, dl: 2.8 },
          { l: 30, t: 75, d: 15, dl: 3.8 }, { l: 55, t: 12, d: 8, dl: 4.5 },
          { l: 95, t: 85, d: 11, dl: 0.3 }, { l: 8, t: 48, d: 6, dl: 1.3 },
          { l: 42, t: 62, d: 10, dl: 2.3 }, { l: 68, t: 30, d: 14, dl: 3.3 },
          { l: 20, t: 92, d: 7, dl: 4.3 }, { l: 82, t: 18, d: 12, dl: 0.7 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full"
            style={{
              left: `${p.l}%`,
              top: `${p.t}%`,
              animation: `floatParticle ${p.d}s ease-in-out infinite`,
              animationDelay: `${p.dl}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative gold bokeh circles - parallax on mouse */}
      <div
        className="absolute z-[3] top-20 left-10 w-72 h-72 bg-gold/8 rounded-full blur-[100px]"
        style={{
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
          transition: "transform 0.5s ease-out",
        }}
      />
      <div
        className="absolute z-[3] bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-[120px]"
        style={{
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
          transition: "transform 0.5s ease-out",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto top-10">
        {/* Main Title - Split text reveal */}
        <h1 className="font-[family-name:var(--font-poppins)] mt-3 mb-5">
          <span className="block overflow-hidden">
            <span
              className={`block text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-extrabold text-gradient-gold transition-all duration-1000 delay-300 leading-none ${
                visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
            >
              Yaavum
            </span>
          </span>
          <span className="block overflow-hidden mt-1">
            <span
              className={`block text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-extrabold text-white-soft transition-all duration-1000 delay-500 leading-none ${
                visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
            >
              Atho Kadai
            </span>
          </span>
        </h1>

        {/* Animated divider line */}
        <div
          className={`mx-auto mb-5 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-1000 delay-600 ${
            visible ? "w-48 opacity-100" : "w-0 opacity-0"
          }`}
        />

        {/* Subtitle */}
        <p
          className={`text-white-soft/70 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-light tracking-wide transition-all duration-1000 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Authentic Burmese Atho &mdash; Loved by 1000+ Customers in Chennai
        </p>

        {/* Tagline */}
        <p
          className={`text-gold/50 text-xs md:text-sm tracking-[0.25em] uppercase mb-12 transition-all duration-1000 delay-800 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Pattabiram &bull; Since Day One &bull; Burmese Street Food
        </p>

        {/* CTA Buttons - Glassmorphism style */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="#menu"
            className="group relative bg-gold text-black-deep px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,168,67,0.5)] animate-pulse-glow"
          >
            <span className="relative z-10">View Menu</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#order"
            className="backdrop-blur-md bg-white/5 border border-gold/30 text-gold px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:bg-gold/15 hover:border-gold/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,168,67,0.2)]"
          >
            Order Now
          </a>
          <a
            href="#contact"
            className="text-white-soft/50 hover:text-gold px-6 py-3.5 text-sm tracking-wide transition-all duration-500 group"
          >
            Find Us{" "}
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
              &rarr;
            </span>
          </a>
        </div>

        {/* Image indicators */}
        <div
          className={`flex justify-center gap-2 mt-14 transition-all duration-1000 delay-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                currentImage === idx
                  ? "w-8 bg-gold"
                  : "w-3 bg-white-soft/20 hover:bg-white-soft/40"
              }`}
              aria-label={`Image ${idx + 1}`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-10 transition-all duration-1000 delay-[1200ms] ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-6 h-10 border-2 border-gold/20 rounded-full mx-auto flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 bg-gold/50 rounded-full animate-bounce" />
          </div>
          <p className="text-white-soft/20 text-[10px] tracking-[0.3em] uppercase mt-3">
            Scroll Down
          </p>
        </div>
      </div>
    </section>
  );
}
