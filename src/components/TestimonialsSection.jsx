
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TestimonialsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div
        className="bg-white/7 rounded-[40px] p-8 md:p-10 flex flex-col md:flex-row gap-10 md:gap-12 items-start"
        data-aos="fade-up"
      >
        {/* Left Text Side */}
        <div className="md:w-1/2 space-y-6" data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Moments of Perfection, <br /> Shared by You
          </h2>
          <p className="text-gray-400 leading-relaxed">
            At our restaurant, every dining experience is crafted to leave a
            lasting impression, and we are honored to share the stories of those
            who have savored our culinary artistry.
          </p>
          <button className="bg-[#b89b79] text-black px-6 py-2 rounded-full font-medium hover:bg-[#a88967] transition">
            Read Full Review
          </button>
        </div>

        {/* Right Testimonials */}
        <div
          className="md:w-1/2 flex flex-col md:flex-row gap-6"
          data-aos="fade-left"
        >
          {/* Testimonial Card 1 */}
          <div
            className="relative bg-[#0f0f0f] rounded-[30px] p-6 flex-1 overflow-hidden"
            data-aos="zoom-in-up"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-black rounded-bl-[40px] z-10"></div>
            <div className="relative z-20">
              <div className="text-8xl text-[#b89b79] mb-4">“</div>
              <p className="text-sm text-white mb-6 leading-relaxed">
                An unforgettable dining experience! Every dish was a masterpiece
                impeccable.
              </p>
              <hr className="border-white/20 mb-4" />
              <div className="flex items-center gap-3">
                <img
                  src="/irene.jpg"
                  alt="Irene Rieny"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">Irene Rieny</p>
                  <p className="text-xs text-gray-400">
                    Luxury Travel Consultant
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div
            className="relative bg-[#0f0f0f] rounded-[30px] p-6 flex-1 overflow-hidden"
            data-aos="zoom-in-up"
            data-aos-delay="100"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-black rounded-bl-[40px] z-10"></div>
            <div className="relative z-20">
              <div className="text-8xl text-[#b89b79] mb-4">“</div>
              <p className="text-sm text-white mb-6 leading-relaxed">
                The attention to detail and flavor was beyond compare. I can’t
                wait.
              </p>
              <hr className="border-white/20 mb-4" />
              <div className="flex items-center gap-3">
                <img
                  src="/emily.jpg"
                  alt="Emily Dolcen"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">Emily Dolcen</p>
                  <p className="text-xs text-gray-400">Food Blogger</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
