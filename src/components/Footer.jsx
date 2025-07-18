import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-16 md:px-24">
      <div className="bg-white/7 p-10 grid grid-cols-1 md:grid-cols-4 gap-10 rounded-xl">
        {/* Logo and Description */}
        <div className="col-span-1">
          <h2 className="text-2xl font-serif font-semibold">Savor Luxe</h2>
          <p className="text-gray-400 mt-4 text-sm">
            Experience the art of fine dining with elegance and luxury.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Menu</a></li>
            <li><a href="#" className="hover:text-white">Gallery</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-medium mb-4">Contact</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Phone: +1 891 989 1199</li>
            <li>Email: savorlux@gmail.com</li>
            <li>Hours: Mon - Fri, 9am - 6pm</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-medium mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white"><Twitter size={20} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Savor Luxe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
