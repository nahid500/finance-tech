import React, { useState } from "react";
import { Phone } from "lucide-react";
import { ContactModal } from "./ContactModal"; // Make sure this path is correct

export const ContactButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-3 py-2 md:px-6 md:py-3 rounded-full font-semibold text-xs md:text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
      >
        <Phone className="size-4 md:size-5 group-hover:animate-pulse" />
        <span>Contact Now</span>
      </button>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
