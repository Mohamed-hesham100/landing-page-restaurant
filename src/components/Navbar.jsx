"use client";
import { useEffect, useState } from "react";
import { Menu, Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Smooth scroll
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => {
      const sections = ["home", "room", "menu", "about", "reservation"];
      for (let id of sections) {
        const section = document.getElementById(id);
        if (
          section &&
          window.scrollY + 100 >= section.offsetTop &&
          window.scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActiveLink(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#home">
            <img src="/logo.png" alt="Logo" className="h-10" />
          </a>
        </div>

        {/* Desktop Links */}
        <nav className="space-x-6 hidden md:flex text-gray-400">
          {["home", "room", "menu", "about", "reservation"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`hover:text-white transition capitalize ${
                activeLink === link ? "text-white font-medium" : ""
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <a href="#contact">
            <button className="rounded-full px-6 py-2 text-sm bg-white text-black hover:bg-black hover:text-white border border-white/20 transition hidden md:inline-block">
              Contact Us
            </button>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="text-white hover:text-[#c7a27c] transition md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            title="Menu"
          >
            <Menu size={24} />
          </button>

          {/* Search */}
          <button
            className="text-white hover:text-[#c7a27c] transition"
            title="Search"
          >
            <Search size={24} />
          </button>

          {/* Cart */}
          <button
            className="text-white hover:text-[#c7a27c] transition"
            onClick={() => setIsCartOpen(true)}
            title="Cart"
          >
            <ShoppingCart size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 w-64 h-180 bg-[#111]/90 backdrop-blur-md text-white p-6 transform transition-transform duration-300 ease-in-out z-[9998] overflow-y-auto shadow-2xl ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button
          className="text-white text-2xl mb-8 hover:text-[#bd956d] transition duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>

        <nav className="space-y-6 text-xl text-gray-400 font-light">
          {["home", "room", "menu", "about", "reservation"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`block transition duration-200 capitalize hover:text-white ${
                activeLink === link ? "text-white font-medium" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-[9999]">
          <div className="bg-[#1c1c1c] text-white w-100 h-70 p-10 rounded-2xl shadow-2xl relative border border-white/10 animate-slideDown">
            <button
              className="absolute top-4 right-6 text-white text-2xl hover:text-[#c7a27c] transition"
              onClick={() => setIsCartOpen(false)}
            >
              ✕
            </button>

            <div className="flex flex-col items-center justify-center text-center space-y-4 mt-6">
              <ShoppingCart size={48} className="text-gray-500" />
              <p className="text-lg font-semibold">Your cart is empty</p>
              <p className="text-sm text-gray-400">
                You haven’t added any items yet.
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.4s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
