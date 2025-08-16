"use client";
import React from "react";
import axios from "axios";
import { FaTelegramPlane } from "react-icons/fa";
import { Linkedin, MessageCircle, MessageSquareMore } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import footerImg from "@/assets/images/footerImg.jpg";

import whatsapp from "@/assets/icons/whatsapp.png";
import messenger from "@/assets/icons/messenger.png";
import linkedin from "@/assets/icons/linkedin.png";
import telegram from "@/assets/icons/telegram.png";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  const handleSubscribe = async (e) => {
    const toastId = toast.loading("Subscribing...");
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://jakaria-finance-backend.vercel.app/api/v1/newsletter",
        { email: e.target.email.value }
      );

      if (res.data.success) {
        toast.success("Subscribed successfully!", { id: toastId });
        e.target.reset();
      }
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Subscription failed", {
        id: toastId,
      });
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative text-white py-10"
      style={{
        backgroundImage: `url(${footerImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div
        id="footer"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Newsletter */}
          <div>
            <h1 className="text-2xl font-bold text-white mb-4">JAKARIA.LLC</h1>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to our Newsletter
            </h3>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                name="email"
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

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://wa.me/13148573244"
                  className="flex items-center gap-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={whatsapp} alt="WhatsApp" width={22} height={22} />
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link
                  href="https://m.me/jakaria.sarkar.790"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <Image
                    src={messenger}
                    alt="Messenger"
                    width={22}
                    height={22}
                  />
                  Messenger
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/jakariafinance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <Image src={linkedin} alt="LinkedIn" width={22} height={22} />
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/Jakaria_finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <Image src={telegram} alt="Telegram" width={22} height={22} />
                  Telegram
                </Link>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-sm text-gray-300">
                Empowering businesses through data-driven strategies and
                insightful analytics.
              </p>
            </div>
            <p className="text-xs text-gray-400 mt-6">
              The entirety of this site is protected by copyright © 2025
              JAKARIA.LLC 1234 Business Ave, Suite 100 P.O. Box 56789 Anytown,
              USA.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
