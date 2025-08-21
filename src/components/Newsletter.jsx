"use client";
import React from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";

export const Newsletter = () => {
  const handleSubscribe = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Subscribing...");

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
      className="relative text-white py-10 bg-[#0f0f0f]"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <div>
            <h3 className="text-lg md:text-xl max-w-xs font-semibold">
              Join our newsletter to keep up to date with us!
            </h3>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 w-full"
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
      </div>
    </motion.footer>
  );
};
