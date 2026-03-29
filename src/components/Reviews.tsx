"use client";

import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    name: "Ramesh K.",
    platform: "Zomato",
    rating: 5,
    text: "Best atho in all of Chennai! The Chicken Atho Fry is absolutely divine. Spicy, tangy, and perfectly cooked every single time.",
  },
  {
    name: "Priya S.",
    platform: "JustDial",
    rating: 5,
    text: "My go-to spot for Burmese food in Pattabiram. The Mohinga soup is so comforting. Great staff and super affordable prices!",
  },
  {
    name: "Arun M.",
    platform: "Google",
    rating: 5,
    text: "Tried the Egg Atho Fry and Egg Pejo Soup. Both were amazing! The flavors are authentic and you can taste the freshness.",
  },
  {
    name: "Deepa R.",
    platform: "Swiggy",
    rating: 4,
    text: "Ordered through Swiggy and the food arrived hot and fresh. Banga and Egg Masala were the highlights. Will order again!",
  },
  {
    name: "Karthik V.",
    platform: "Zomato",
    rating: 5,
    text: "Hidden gem near Tidel Park! The Nattukozhi Egg Masala is unique and delicious. Highly recommend for anyone who loves street food.",
  },
  {
    name: "Lakshmi N.",
    platform: "Google",
    rating: 5,
    text: "Vazhaithandu Soup for just Rs. 20 is unbelievable value. Tastes homemade and is perfect for rainy evenings. Love this place!",
  },
];

const platforms = [
  { name: "JustDial", rating: "4.6", reviews: "402+" },
  { name: "Restaurant Guru", rating: "4.5", reviews: "413" },
  { name: "Zomato", rating: "4.5", reviews: "359+" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={star <= rating ? "#D4A843" : "#2A2A2A"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-[0.04] parallax-bg"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1585032226651-759b368d7246?w=1920&q=60&auto=format")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black-deep via-black-deep/97 to-black-deep" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-gold/60 text-sm tracking-[0.2em] uppercase font-medium">
            What People Say
          </span>
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Customer <span className="text-shimmer-gold">Love</span>
          </h2>
        </div>

        {/* Aggregated Ratings */}
        <div
          className={`flex flex-wrap justify-center gap-6 mb-14 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {platforms.map((p) => (
            <div
              key={p.name}
              className="glass-card rounded-xl px-6 py-4 text-center hover:border-gold/25 hover-lift"
            >
              <div className="text-gold font-bold text-2xl">{p.rating}</div>
              <div className="flex justify-center my-1">
                <StarRating rating={Math.round(parseFloat(p.rating))} />
              </div>
              <div className="text-white-soft/40 text-xs">
                {p.reviews} reviews
              </div>
              <div className="text-gold/60 text-xs font-medium mt-1">
                {p.name}
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Featured Review */}
          <div className="glass-card rounded-2xl p-8 md:p-10 text-center min-h-[220px] flex flex-col items-center justify-center">
            <div className="text-gold/30 text-5xl mb-4">&ldquo;</div>
            <p className="text-white-soft/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto transition-all duration-500">
              {reviews[activeIndex].text}
            </p>
            <div className="mt-6">
              <StarRating rating={reviews[activeIndex].rating} />
              <p className="text-gold font-medium mt-2">
                {reviews[activeIndex].name}
              </p>
              <p className="text-white-soft/30 text-xs mt-1">
                via {reviews[activeIndex].platform}
              </p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "bg-gold w-6"
                    : "bg-gold/20 hover:bg-gold/40"
                }`}
                aria-label={`Review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
