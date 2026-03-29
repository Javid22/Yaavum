"use client";

import { useState, useEffect, useRef } from "react";

type MenuItem = {
  name: string;
  price: number;
  type: "veg" | "nonveg";
};

type MenuCategory = {
  name: string;
  icon: string;
  description: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    name: "Burmese Snacks",
    icon: "🥘",
    description: "Crispy, spicy, and irresistible starters",
    items: [
      { name: "Egg Masala", price: 15, type: "nonveg" },
      { name: "Kaada Egg Masala", price: 20, type: "nonveg" },
      { name: "Nattukozhi Egg Masala", price: 25, type: "nonveg" },
      { name: "Pejo Masala", price: 30, type: "nonveg" },
      { name: "Banga", price: 50, type: "nonveg" },
      { name: "Egg Banga", price: 60, type: "nonveg" },
      { name: "Mutta Kalavai", price: 60, type: "nonveg" },
    ],
  },
  {
    name: "Burmese Soup",
    icon: "🍲",
    description: "Soul-warming broths with rich Burmese flavors",
    items: [
      { name: "Vazhaithandu Soup", price: 20, type: "veg" },
      { name: "Pejo Soup", price: 30, type: "nonveg" },
      { name: "Egg Soup", price: 30, type: "nonveg" },
      { name: "Egg Pejo Soup", price: 40, type: "nonveg" },
    ],
  },
  {
    name: "Atho",
    icon: "🍜",
    description: "Our signature Burmese noodles — the crowd favorite",
    items: [
      { name: "Veg Atho", price: 80, type: "veg" },
      { name: "Egg Atho", price: 90, type: "nonveg" },
      { name: "Egg Atho Fry", price: 110, type: "nonveg" },
      { name: "Chicken Atho Fry", price: 120, type: "nonveg" },
    ],
  },
  {
    name: "Mohinga",
    icon: "🥣",
    description: "Traditional Burmese rice noodle soup",
    items: [
      { name: "Veg Mohinga", price: 70, type: "veg" },
      { name: "Egg Mohinga", price: 80, type: "nonveg" },
      { name: "Egg Pejo Mohinga", price: 90, type: "nonveg" },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [filter, setFilter] = useState<"all" | "veg" | "nonveg">("all");
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

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

  const filteredItems = menuData[activeCategory].items.filter((item) =>
    filter === "all" ? true : item.type === filter
  );

  return (
    <section id="menu" ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Parallax food background */}
      <div
        className="absolute inset-0 opacity-[0.06] parallax-bg"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1555126634-323283e090fa?w=1920&q=60&auto=format")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black-deep via-black-deep/95 to-black-deep" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-gold/60 text-sm tracking-[0.2em] uppercase font-medium">
            Our Specialties
          </span>
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            The <span className="text-gradient-gold">Menu</span>
          </h2>
          <p className="text-white-soft/50 mt-3 max-w-lg mx-auto">
            18 handcrafted dishes across 4 categories &mdash; from ₹15 to ₹120
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {menuData.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === idx
                  ? "bg-gold text-black-deep shadow-lg shadow-gold/20"
                  : "bg-black-card border border-gold/10 text-white-soft/60 hover:border-gold/30 hover:text-gold"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Veg/Non-Veg Filter */}
        <div className="flex justify-center gap-2 mb-10">
          {(["all", "veg", "nonveg"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                filter === f
                  ? f === "veg"
                    ? "bg-green-veg/20 text-green-veg border border-green-veg/30"
                    : f === "nonveg"
                    ? "bg-red-nonveg/20 text-red-nonveg border border-red-nonveg/30"
                    : "bg-gold/20 text-gold border border-gold/30"
                  : "bg-black-card border border-black-border text-white-soft/40 hover:text-white-soft/60"
              }`}
            >
              {f === "veg" && (
                <span className="w-2.5 h-2.5 border border-green-veg rounded-sm flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-green-veg rounded-full" />
                </span>
              )}
              {f === "nonveg" && (
                <span className="w-2.5 h-2.5 border border-red-nonveg rounded-sm flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-red-nonveg rounded-full" />
                </span>
              )}
              {f === "all" ? "All" : f === "veg" ? "Veg" : "Non-Veg"}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <p className="text-center text-gold/50 text-sm mb-8 italic">
          {menuData[activeCategory].description}
        </p>

        {/* Menu Items Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 stagger-children ${visible ? "visible" : ""}`}>
          {filteredItems.map((item, idx) => (
            <div
              key={item.name}
              className="group glass-card rounded-xl p-5 hover:border-gold/25 hover-lift"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  {/* Veg/Non-Veg indicator */}
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`w-3.5 h-3.5 border-2 rounded-sm flex items-center justify-center ${
                        item.type === "veg"
                          ? "border-green-veg"
                          : "border-red-nonveg"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          item.type === "veg" ? "bg-green-veg" : "bg-red-nonveg"
                        }`}
                      />
                    </span>
                    <span
                      className={`text-[10px] uppercase tracking-wider font-medium ${
                        item.type === "veg"
                          ? "text-green-veg/60"
                          : "text-red-nonveg/60"
                      }`}
                    >
                      {item.type === "veg" ? "Veg" : "Non-Veg"}
                    </span>
                  </div>
                  {/* Item name */}
                  <h3 className="text-white-soft font-medium text-base group-hover:text-gold transition-colors duration-300">
                    {item.name}
                  </h3>
                </div>
                {/* Price */}
                <div className="bg-gold/10 border border-gold/20 rounded-lg px-3 py-1.5 shrink-0">
                  <span className="text-gold font-bold text-lg">
                    ₹{item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="text-center text-white-soft/30 py-12">
            No {filter === "veg" ? "vegetarian" : "non-vegetarian"} items in this category.
          </p>
        )}

        {/* Order CTA */}
        <div className="text-center mt-12">
          <a
            href="#order"
            className="inline-flex items-center gap-2 bg-gold text-black-deep px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-gold-light transition-all duration-300 animate-pulse-glow"
          >
            Order Your Favorites
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
