import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DetailMenuPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col lg:flex-row py-16 px-6 md:px-20 gap-12">
      {/* Left Section */}
      <div className="lg:w-1/3 space-y-8" data-aos="fade-right">
        <div>
          <div className="uppercase tracking-wider text-sm text flex items-center gap-3">
            <h1 className="serif-text text-md text-white">Detail Menu</h1>
            <hr className="w-20 border-t border-white" />
          </div>

          <h1 className="serif-text text-5xl font-bold leading-tight mt-2">
            A Celebration
            <br /> of Exquisite <br />
            Flavors
          </h1>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Tasting Menu</h2>
          <p className="text-sm text-gray-300">
            Immerse yourself in a culinary journey where every dish is a tribute
            to the artistry of fine dining.
          </p>
          <div className="flex items-center gap-6 text-sm mt-2">
            <div className="flex items-center gap-1 text-yellow-400">
              <span>★</span>
              <span className="text-white">4.9</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="text-white font-semibold">$45.12</div>
          </div>

          <div className="text-sm serif-text text-gray-400 mt-2 underline underline-offset-4 cursor-pointer w-fit flex items-center gap-1.5 hover:text-white">
            See More
            <ArrowRight size={18} className="mt-1.5 ml-1.5 text-center" />
          </div>
        </div>
      </div>

      {/* Center Image */}
      <div className="flex justify-center items-center overflow-hidden mb-9" data-aos="zoom-in">
        <div className="h-full flex items-center">
          <img
            src="/fine-dining.jpg"
            alt="Fine Dining"
            className="max-h-[750px] object-cover"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/3 space-y-8" data-aos="fade-left">
        <h2 className="text-xl font-semibold">
          A Tempting Prelude to Your Culinary Journey
        </h2>

        <div className="space-y-6">
          {[
            {
              category: "Brunch Favorites",
              title: "Weekend Indulgence: A Collection of Brunch",
              image: "/brunch.jpg",
            },
            {
              category: "Grilled Classics",
              title: "Charred to Perfection: Grilled Favorites",
              image: "/grilled.jpg",
            },
            {
              category: "Vegetarian BBQ",
              title: "Plant-Based Delights with Smoky BBQ Flavor",
              image: "/veg-bbq.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <div>
                <div className="text-sm text-gray-300 font-medium mb-1 flex items-center">
                  <span>{item.category}</span>
                  <hr className="w-12 h-px bg-gray-300 border-0 ml-3 mt-2" />
                </div>

                <div className="text-sm text-white font-normal max-w-xs">
                  {item.title}
                </div>
                <div className="text-sm mt-1 text-gray-200 hover:text-white cursor-pointer flex items-center gap-1.5">
                  See More <ArrowRight size={12} />
                </div>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-xl ml-4"
              />
            </div>
          ))}
        </div>

        <button className="bg-white text-black rounded-full px-8 py-1.5 font-medium mt-4 hover:bg-black hover:text-white hover:border hover:border-white/20 transition-colors duration-200">
          Book a Table
        </button>
      </div>
    </div>
  );
}
