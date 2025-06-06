"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutimg from "@/assets/images/speech1.png";

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
      className="bg-gradient-to-r from-blue-400 to-purple-400 text-white grid grid-cols-1  md:grid-cols-2 py-8 px-10 md:px-28 items-center"
    >
      <motion.div
        className="flex justify-center"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <Image src={aboutimg} alt="image" className="w-3/4"/>
      </motion.div>

      <motion.div
        className="px-6"
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="text-center text-3xl font-bold mb-4">
          Welcome to Jakaria <span className="text-red-600">Inc.</span>
        </h2>
        <p className="pt-2 text-xl">
          Struggling to raise capital, expand quickly, or want to raise funds without giving up your equity?</p>
        <p className="pt-4 text-xl">We've got you covered! Raise funds for your company with a great valuation in just 7 days, with no upfront fees.</p>
      </motion.div>
    </div>
  );
}
