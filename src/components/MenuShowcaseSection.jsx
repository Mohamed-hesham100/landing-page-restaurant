import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight } from "lucide-react";

export default function MenuShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const dishes = [
    {
      title: "Foie Gras Torchon",
      subtitle: "Flavor Harmony",
      price: "$50.42",
      rating: 4,
      image: "/dish1.jpg",
    },
    {
      title: "Herb-Infused Bliss",
      subtitle: "Aromatic Herbs",
      price: "$30.12",
      rating: 4,
      image: "/dish2.jpg",
    },
    {
      title: "Smoky Esse",
      subtitle: "Grilled Delights",
      price: "$50.42",
      rating: 5,
      image: "/dish3.jpg",
    },
    {
      title: "BBQ Bliss Selection",
      subtitle: "Flavor Variety",
      price: "$50.42",
      rating: 4,
      image: "/dish4.jpg",
    },
  ];

  return (
    <section id="menu" className="bg-black text-white py-16 px-4 md:px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center">

        {/* Title & Button */}
        <div
          className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6"
          data-aos="fade-down"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-snug text-center md:text-left">
            A Symphony of <br /> Flavors Await
          </h2>
          <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-black hover:text-white hover:border hover:border-white/20 transition-colors duration-200">
            View All Menu
          </button>
        </div>

        {/* Categories (Pill style) */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            "Elite Dining Experience",
            "Essence of Flavor",
            "Culinary Masterpieces Unveiled",
          ].map((text, idx) => (
            <div
              key={idx}
              className="group border border-white/30 rounded-2xl px-6 md:px-10 py-3 text-center cursor-pointer transition-all duration-300 hover:bg-white/10"
              data-aos="fade-up"
              data-aos-delay={idx * 200}
            >
              <div className="font-medium text-base">{text}</div>
              <div className="text-sm text-white/60 mt-1">
                {idx === 0
                  ? "For Connoisseurs"
                  : idx === 1
                  ? "Signature Selections"
                  : "Artisan Creations"}
              </div>
            </div>
          ))}
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12" data-aos="fade-up" data-aos-delay="600">
          {["All", "Desserts", "Appetizers", "Wine"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-200 ${
                activeCategory === cat ? "bg-white text-black" : "text-white/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dish Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dishes.map((dish, idx) => (
            <div
              key={idx}
              className="relative bg-[#111] rounded-2xl overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={idx * 150}
            >
              <img
                src={dish.image}
                alt={dish.title}
                className="w-full h-44 sm:h-48 object-cover"
              />
              <button className="absolute top-3 right-3 bg-black/50 text-white p-1 rounded-full">
                <ArrowUpRight size={14} />
              </button>
              <div className="p-4 text-left">
                <h3 className="font-semibold text-sm mb-1">{dish.title}</h3>
                <p className="text-xs text-white/60 mb-2">{dish.subtitle}</p>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400 text-xs">
                    {Array(dish.rating)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    {dish.rating < 5 && (
                      <span className="text-white/30">★</span>
                    )}
                  </div>
                  <span className="text-sm font-semibold">{dish.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
