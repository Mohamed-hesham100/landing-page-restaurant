import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PrivateDiningSection() {
  const [activeFeature, setActiveFeature] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="room"
      className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 md:px-20 overflow-x-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-8" data-aos="fade-right">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-serif leading-snug"
            data-aos="fade-down"
          >
            Private Dining Redefined: <br /> A Taste of Exclusivity
          </h2>

          {/* Description Card */}
          <div
            className="relative bg-[#111] p-6 rounded-[30px] sm:rounded-[40px] overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <button className="absolute top-4 right-4 w-8 h-8 bg-[#b38f6e] bg-opacity-70 rounded-full flex items-center justify-center transition duration-300 hover:bg-opacity-100">
              <FiArrowUpRight className="text-black" size={18} />
            </button>

            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Step into a world of unparalleled luxury with
              <br /> our Private Dining experience, where
              <br /> sophistication meets exclusivity.
            </p>

            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex -space-x-2">
                <img
                  src="/avatar1.jpg"
                  alt="Avatar 1"
                  className="w-8 h-8 rounded-full border-2 border-black"
                />
                <img
                  src="/avatar2.jpg"
                  alt="Avatar 2"
                  className="w-8 h-8 rounded-full border-2 border-black"
                />
                <img
                  src="/avatar3.jpg"
                  alt="Avatar 3"
                  className="w-8 h-8 rounded-full border-2 border-black"
                />
              </div>
              <span className="text-sm text-gray-400 font-medium">
                50K+ diners
              </span>
            </div>
          </div>

          {/* Feature List */}
          <ul
            className="space-y-3 pt-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {[
              {
                title: "Exclusive and luxurious setting",
                desc: "Enjoy dining in an environment tailored for elegance and privacy.",
              },
              {
                title: "Ideal for special occasions",
                desc: "Perfect setting for celebrations, proposals, and memorable moments.",
              },
              {
                title: "Elegant presentation",
                desc: "Each dish is crafted and presented with refined attention to detail.",
              },
            ].map((item, idx) => (
              <li key={idx} className="border-b border-gray-700 pb-2">
                <button
                  onClick={() =>
                    setActiveFeature(activeFeature === idx ? null : idx)
                  }
                  className="w-full flex justify-between items-center text-left"
                >
                  <span>{item.title}</span>
                  {activeFeature === idx ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
                {activeFeature === idx && (
                  <p className="text-sm text-gray-400 mt-2 transition-all duration-300">
                    {item.desc}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div
          className="relative w-full mx-auto px-0 sm:px-4 py-8 sm:py-16"
          data-aos="zoom-in-left"
        >
          <div className="relative overflow-hidden shadow-2xl max-w-full rounded-[0_50px_0_50px] sm:rounded-[0_100px_0_100px]">
            <img
              src="/private-room.jpg"
              alt="Private Room"
              className="w-full h-[250px] sm:h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-5">
              <button className="bg-[#b38f6e] hover:bg-[#9a7959] transition duration-300 text-sm sm:text-base md:text-lg px-6 sm:px-10 py-1.5 rounded-full shadow-xl text-black">
                Book Private Room
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
