import React from "react";

const ReservationPage = () => {
  return (
    <section
    id="reservation"
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="bg-black/70 backdrop-blur-xs text-white rounded-tl-[30px] rounded-br-[30px] w-full max-w-4xl mx-auto flex flex-col md:flex-row overflow-hidden p-10 border border-white/20">
        {/* Left Section */}
        <div className="md:w-1/2 pr-10 space-y-10">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Secure Your Spot</h3>
            <p className=" text-sm mb-4 text-gray-300">
              Welcome to Our Reservation Page
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-100">
                <div className="relative flex flex-col items-center text-[#9a7959] text-[10px] font-medium">
                  <span className="relative w-4 h-4 border-2 border-[#9a7959] rounded-full bg-transparent flex items-center justify-center">
                    <span className="absolute bottom-[4px]  w-0 h-0 border-l-[3px] border-r-[3px] border-t-[3px] border-l-transparent border-r-transparent border-t-[#9a7959]"></span>
                  </span>
                </div>{" "}
                Delighted to Serve
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-100">
                <div className="relative flex flex-col items-center text-[#9a7959] text-[10px] font-medium ">
                  <span className="relative w-4 h-4 border-2 border-[#9a7959] rounded-full bg-transparent flex items-center justify-center">
                    <span className="absolute bottom-[4px]  w-0 h-0 border-l-[3px] border-r-[3px] border-t-[3px] border-l-transparent border-r-transparent border-t-[#9a7959]"></span>
                  </span>
                </div>{" "}
                Exceptional Dining Experience
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Make a Reservation</h3>
            <p className=" text-sm mb-4 text-gray-300">
              Personalize Your Experience
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-100">
                <div className="relative flex flex-col items-center text-[#9a7959] text-[10px] font-medium">
                  <span className="relative w-4 h-4 border-2 border-[#9a7959] rounded-full bg-transparent flex items-center justify-center">
                    <span className="absolute bottom-[4px]  w-0 h-0 border-l-[3px] border-r-[3px] border-t-[3px] border-l-transparent border-r-transparent border-t-[#9a7959]"></span>
                  </span>
                </div>{" "}
                Select Your Date
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-100">
                <div className="relative flex flex-col items-center text-[#9a7959] text-[10px] font-medium">
                  <span className="relative w-4 h-4 border-2 border-[#9a7959] rounded-full bg-transparent flex items-center justify-center">
                    <span className="absolute bottom-[4px]  w-0 h-0 border-l-[3px] border-r-[3px] border-t-[3px] border-l-transparent border-r-transparent border-t-[#9a7959]"></span>
                  </span>
                </div>
                Choose Your Time
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-300">
              Experience the convenience of securing your dining experience with
              our easy-to-use reservation system.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold mb-2">Book Your Table</h2>
          <p className="text-sm text-gray-300 mb-4">
            Secure your place at our restaurant and prepare for an unforgettable
            dining experience.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-gray-400 outline-none py-2 placeholder-gray-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-gray-400 outline-none py-2 placeholder-gray-300"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-gray-400 outline-none py-2 placeholder-gray-300"
            />
            <div className="flex gap-4">
              <input
                type="date"
                className="flex-1 bg-transparent border-b border-gray-400 outline-none py-2 text-gray-300"
              />
              <input
                type="time"
                className="flex-1 bg-transparent border-b border-gray-400 outline-none py-2 text-gray-300"
              />
            </div>
            <button
              type="submit"
              className="mt-4 ml-15 w-70 py-1.5 bg-black text-white rounded-full hover:bg-gray-200 hover:text-black transition border border-white/20"
            >
              Confirm Your Reservation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationPage;
