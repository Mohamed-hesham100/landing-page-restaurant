import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* WhatsApp Card - يظهر فوق الزر */}
      {isOpen && (
        <div className="absolute bottom-[70px] right-0 bg-white text-black rounded-xl shadow-xl p-4 w-72 border border-[#8e6f4f] z-[9999] animate-fade-in">
          <h3 className="text-lg font-semibold mb-2">Welcome to our restaurant!</h3>
          <p className="text-sm mb-3">
            Need help or want to reserve a table? Contact us directly via WhatsApp.
          </p>
          <a
            href="https://wa.me/201234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#8e6f4f] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#755e40] transition-colors duration-300 block text-center"
          >
            Chat with us
          </a>
        </div>
      )}

      {/* زر WhatsApp */}
      <button
        className="bg-[#8e6f4f] text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp"
      >
        <FaWhatsapp size={24} />
      </button>
    </div>
  );
};

export default WhatsAppWidget;
