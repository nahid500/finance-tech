import React from "react";
import { FaWhatsapp } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section id="hero-section" className="relative w-full h-96 md:h-screen overflow-hidden flex items-center justify-start text-white px-6">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/herovid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="max-w-md">
        <h1 className="text-xl md:text-3xl font-bold font-mono text-white text-transparent bg-clip-text mb-4">
          Efficient and Scalable ICO Fundraising for Your Business
        </h1>
        <p className="text-white/90 text-sm md:text-base">
          Unlock your business's potential with efficient ICO strategies designed for growth and success. Fast, secure, and tailored to scale.
        </p>
        <a
          href="https://wa.me/13148573244"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <button
            className="flex items-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg px-4 py-4 mt-4"
          >
            <p className="text-sm font-bold">Book a Free Consultation</p>
          </button>
        </a>
              </div>
            </section>
          );
}
