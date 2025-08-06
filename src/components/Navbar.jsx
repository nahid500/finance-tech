'use client';

import React, { useState, useEffect } from 'react';
import logo from "@/assets/images/logo.png";
import { ContactButton } from './ContactButton';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Detect scroll using useEffect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Learning', href: '#learning' },
    { name: 'Blogs', href: '/blogs' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? 'bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-lg border-b border-white/10 shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-evenly items-center h-16 relative">
          <Image
            src={logo}
            alt="Logo"
            width={128}
            height={128}
            className="object-contain"
          />

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-white/90 hover:text-white px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm group"
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
           {/* Contact Button */}
            <div className="md:pl-8">
              <ContactButton />
            </div>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white hover:text-purple-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>


        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-white/10 md:hidden shadow-lg z-40">
            <nav className="flex flex-col px-4 py-3 space-y-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/90 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 backdrop-blur-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
                      {/* Contact Button */}
          <div className="flex-shrink-0">
            <ContactButton />
          </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
