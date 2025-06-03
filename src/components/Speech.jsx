"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutimg2 from "@/assets/images/speech2.png";

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export default function Speech() {
  return (
    <div
      id="about"
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white grid grid-cols-1 md:grid-cols-2 py-4 px-10 md:px-24 items-center"
    >
      <motion.div
        className="flex justify-center"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <Image src={aboutimg2} alt="image" />
      </motion.div>

      <motion.div
        className="px-6"
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* <h2 className="text-center text-3xl font-bold mb-4">
          Welcome to Jakaria <span className="text-red-600">Inc.</span>
        </h2> */}
        <p className="pt-4 text-xl">
            Unlock the full potential of your business by raising funds through ICOs, empowering your company’s growth and expansion. Additionally, generate short-term profits by launching a memecoin on decentralized exchanges (DEX). The entire process can be completed in just 7 days, with no upfront fees. At Jakaria Inc., we guarantee top-tier service to ensure your success in the world of crypto. Consult with us today for the best assessment and tailored strategies to drive your business forward.
        </p>
      </motion.div>
    </div>
  );
}
