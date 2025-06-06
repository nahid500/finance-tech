import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { ContactModal } from './ContactModal'; // Make sure this path is correct

export const ContactButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
      >
        <Phone className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-pulse" />
        <span>Contact Now</span>
      </button>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
