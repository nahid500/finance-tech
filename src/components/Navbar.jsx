'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 fixed top-0 left-0 right-0 z-50 shadow-md w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="font-bold text-xl">
          <span className="text-white">Jakaria </span>
          <span className="text-red-500">Inc</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-white font-medium">
          <a href="#about" className="hover:text-gray-200 transition">About</a>
          <a href="#services" className="hover:text-gray-200 transition">Services</a>
          <a href="#learning" className="hover:text-gray-200 transition">Learning</a>
          <Link href="/blogs" className="hover:text-gray-200 transition">Blogs</Link>
          <a href="#pricing" className="hover:text-gray-200 transition">Pricing</a>
        </nav>

        {/* Contact + Hamburger */}
        <div className="flex items-center gap-4">
          <button className="bg-gradient-to-r from-purple-800 to-blue-800 text-white font-bold px-4 py-2 rounded-full hover:opacity-90 text-sm transition-all duration-200">
            Contact
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-700 w-full px-4 py-4 space-y-2 text-white font-medium transition-all overflow-hidden">
          <a href="#about" onClick={() => setIsOpen(false)} className="block">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block">Services</a>
          <a href="#learning" onClick={() => setIsOpen(false)} className="block">Learning</a>
          <Link href="/blogs" onClick={() => setIsOpen(false)} className="block">Blogs</Link>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="block">Pricing</a>
        </div>
      )}
    </header>
  );
}
