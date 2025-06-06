
"use client"
import Image from 'next/image';
import React from 'react';
import logo from "@/assets/images/logo.png";
import { ContactButton } from './ContactButton';

const SecondNav = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sticky top-16 z-40 shadow-xl h-16 md:h-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
              <Image
                src={logo}
                alt="Logo"
                width={128}
                height={128}
                className="object-contain"
              />

          {/* Center Text */}
          <div className="flex-1 text-center px-2">
            <h1 className="text-white text-sm md:text-lg font-semibold leading-tight tracking-wide">
              <span className="block md:inline bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent">
                Start your fundraising journey now!
              </span>
            </h1>
            <div className="mt-1 h-0.5 w-20 md:w-24 mx-auto bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"></div>
          </div>

          {/* Contact Button */}
          <div className="flex-shrink-0">
            <ContactButton />
          </div>


        </div>
      </div>
    </header>
  );
};

export default SecondNav;
