import React from 'react';

const CommitmentSection = () => {
  return (
    <section
      id="about"
      className="bg-black text-white py-28 px-6 md:px-20 flex flex-col md:flex-row items-center gap-16 "
    >
      {/* Left Image Section */}
      <div
        className="relative w-full md:w-[45%] max-w-md"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="rounded-[200px_0_200px_0] overflow-hidden">
          <img
            src="/main-image.jpg" // <-- Replace with your main image path
            alt="Restaurant Interior"
            className="w-full h-auto max-h-[500px] object-cover"
          />
        </div>
        <div className="absolute bottom-10 -left-12 w-24 h-24 md:w-30 md:h-30 rounded-full border-3 border-white overflow-hidden z-10">
          <img
            src="/circle-image.jpg" // <-- Replace with your circular image path
            alt="Guests"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div
        className="w-full md:w-[55%]"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
          Our Commitment to <br />
          <span className="text-white">authenticity & excellence</span>
        </h2>
        <p className="mt-6 text-gray-400">
          elementum nibh nec Nam dui. sapien tincidunt odio Quisque hendrerit
          nec ac leo. sed luctus vitae sapien ac nibh est. diam venenatis non
          in libero, urna. Donec sapien ac nibh est. diam venenatis non in
          libero,urna.
        </p>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">What do you need?</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Flavorful House Sauces</li>
            <li>Perfect Side Pairings</li>
            <li>Unique Gourmet Toppings</li>
          </ul>
        </div>

        <p className="mt-6 text-gray-400">
          We prioritize quality by using only the finest, fresh ingredients in
          our burgers. Each component.
        </p>

        <button className="mt-6 px-8 py-1.5 border border-gray-300 rounded-full hover:bg-white hover:text-black transition">
          Book A Table
        </button>
      </div>
    </section>
  );
};

export default CommitmentSection;
