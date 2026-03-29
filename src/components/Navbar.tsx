"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black-deep/95 backdrop-blur-md shadow-lg shadow-gold/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-poppins)]">
              <span className="text-gold">யா</span>
              <span className="text-white-soft">vum</span>
            </span>
            <span className="hidden sm:block text-xs text-gold/70 leading-tight">
              ATHO KADAI
              <br />& SNACKS
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white-soft/80 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide gold-underline"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#order"
              className="bg-gold text-black-deep px-5 py-2 rounded-full text-sm font-semibold hover:bg-gold-light transition-all duration-300 animate-pulse-glow"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gold p-2"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black-deep/98 backdrop-blur-lg border-t border-gold/10 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-white-soft/80 hover:text-gold py-2 text-sm font-medium tracking-wide transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#order"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-gold text-black-deep px-5 py-2.5 rounded-full text-sm font-semibold mt-2"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
}
