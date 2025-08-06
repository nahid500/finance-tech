"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutimg from "@/assets/images/speech_1.jpg";

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export default function About() {
  return (
    <div
      id="about"
      className="bg-gradient-to-r from-blue-400 to-purple-400 text-white grid grid-cols-1 scroll-mt-32 md:grid-cols-2 py-12 px-10 md:px-28 items-center"
    >
      <motion.div
        className="px-6 "
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold italic font-mono mb-4">
          Welcome to Jakaria.LLC
        </h2>
        <p className="pt-2 text-xl">
          Struggling to Raise Funds Without Giving Up Equity?</p>
        <p className="pt-4 text-xl">We’ve got you covered! Raise funds for your company at a strong valuation in just 7 days, with NO UP FRONT FEES !!</p>
      </motion.div>

      <motion.div
        className="flex justify-center"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <Image src={aboutimg} alt="image" className="w-3/4 pt-8 md:pt-0 hover:translate-y-1 hover:translate-x-1 rounded-3xl"/>
      </motion.div>

      
    </div>
  );
}
