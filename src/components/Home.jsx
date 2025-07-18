import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import { BsArrowReturnRight } from "react-icons/bs";
import { CgArrowTopRight } from "react-icons/cg";
import { LuChefHat } from "react-icons/lu";
import { AiOutlineStar } from "react-icons/ai";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    document.title = "Sophisticated Cuisine";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="bg-black text-white flex items-center py-16"
      >
        <div className="container py-16 px-4 sm:px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Text Content */}
          <div className="space-y-10">
            {/* Heading with Button in one block */}
            <div className="flex flex-col gap-4">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight"
                data-aos="fade-right"
              >
                Savor the Essence <br />
                of{" "}
                <span className="bg-gradient-to-r from-[#8a6b45] via-[#d6bc98] to-[#9b784e] bg-clip-text text-transparent">
                  Sophisticated
                </span>{" "}
                <br />
                Cuisine{" "}
              </h1>

              <button
                className="flex items-center justify-between gap-4 sm:gap-6 bg-[#bd956d] hover:bg-[#a58464] transition-colors duration-300 rounded-full px-4 py-2 group w-fit"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="bg-black rounded-full p-2 group-hover:scale-105 transition-transform duration-200">
                  <BsArrowReturnRight className="w-4 h-4 text-white" />
                </div>
                <span className="text-black font-medium text-base">
                  Explore Menu
                </span>
              </button>
            </div>

            {/* Paragraph */}
            <p
              className="text-gray-300 text-md max-w-md"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Our menu is a testament to the mastery of our chefs, blending
              classic techniques with innovative touches.
            </p>

            {/* Reserve Link */}
            <a
              href="#"
              className="inline-flex items-center text-sm underline underline-offset-4 text-white hover:text-[#c0a37b] transition"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Reserve Now{" "}
              <CgArrowTopRight className="ml-2 mt-[2px]" size={15} />
            </a>
          </div>

          {/* Right Image with Floating Card */}
          <div className="relative w-full flex justify-center lg:justify-end lg:ml-50">
            <img
              src="/dining-room.jpg"
              alt="Dining Room"
              className="object-cover shadow-2xl w-full max-w-[800px] h-110 rounded-2xl"
              data-aos="zoom-in-up"
            />

            {/* Floating Info Card */}
            <div
              className="absolute lg:-left-20 bottom-4 left-4 sm:left-10 bg-neutral-900/80 backdrop-blur-md p-4 rounded-2xl w-[90%] sm:w-[240px] text-white shadow-xl space-y-4"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <div className="flex items-start gap-3">
                <span className="text-lg">
                  <LuChefHat />
                </span>
                <div>
                  <h4 className="font-semibold">Chef’s Experience</h4>
                  <p className="text-gray-300 text-sm leading-tight">
                    Enjoy a front-row seat to
                    <br /> culinary excellence
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">
                  <AiOutlineStar />
                </span>
                <div>
                  <h4 className="font-semibold">Special Events</h4>
                  <p className="text-gray-300 text-sm leading-tight">
                    Let us bring luxury to
                    <br /> your special event
                  </p>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </section>
    </div>
  );
};

export default Home;
