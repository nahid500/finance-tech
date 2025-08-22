'use client';

import React, { useState, useEffect } from 'react';
import logo from "@/assets/images/logo.png";
import { ContactButton } from './ContactButton';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';  // Better to use usePathname in app router

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Learning', href: '/#learning' },
    { name: 'Blogs', href: '/blogs' },
  ];

  // Determine if current page is home
  const isHome = pathname === '/';

  // Calculate background classes
  // On home: transparent when not scrolled or menu closed, otherwise dark gradient
  // On other pages: always dark gradient (so links are visible)
  const backgroundClass = isHome
    ? (scrolled || menuOpen)
      ? 'bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-lg border-b border-white/10 shadow-lg'
      : 'bg-transparent'
    : 'bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-lg border-b border-white/10 shadow-lg';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${backgroundClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 relative">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={128}
                height={128}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Center: Desktop Links */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8" role="navigation" aria-label="Main navigation">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="relative text-white/90 hover:text-white px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm group"
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Right: Contact Button */}
          <div className="hidden md:flex md:pl-8 flex-shrink-0">
            <ContactButton />
          </div>

          {/* Mobile Contact Button */}
          <div className="md:hidden flex-shrink-0">
            <ContactButton />
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center ml-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white hover:text-purple-300 focus:outline-none"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="fixed top-16 left-0 w-full h-[calc(100vh-64px)] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-white/10 md:hidden shadow-lg z-40 overflow-y-auto">
            <nav className="flex flex-col px-4 py-3 space-y-2" role="navigation" aria-label="Mobile main navigation">
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
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
