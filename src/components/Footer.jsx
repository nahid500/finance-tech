"use client";
import React from "react";
import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed successfully!");
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="abcd@gmail.com"
                className="px-4 py-2 rounded-md text-gray-900 w-full sm:w-auto flex-1"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-md font-semibold transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/yourwhatsapplink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Messenger
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yourlinkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-sm text-gray-400">
                Empowering businesses through data-driven strategies and insightful analytics.
              </p>
            </div>
            <p className="text-xs text-gray-500 mt-6">
              &copy; {new Date().getFullYear()} Jakaria Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
