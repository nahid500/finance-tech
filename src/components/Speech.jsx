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
      className="bg-gradient-to-r from-blue-400 to-purple-400 text-white grid grid-cols-1 md:grid-cols-2 py-4 px-10 md:px-24 items-center"
    >
      <motion.div
        className="flex justify-center"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <Image src={aboutimg2} alt="image" className="w-3/5"/>
      </motion.div>

      <motion.div
        className="px-6"
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 className=" text-3xl font-bold mb-4">
          Looking to generate easy passive income?
        </h3>
        <p className="pt-4 text-xl">
          As an investor or job holder, you can easily start earning by launching memecoins on decentralized exchanges (DEX) with no risk of losing money. The process is quick and straightforward—7 days for each launch and profit booking. By repeating this process weekly, you can steadily generate a good amount of profit. At Jakaria Inc., we help you build this passive income stream effortlessly, ensuring consistent returns with minimal effort.        </p>
      </motion.div>
    </div>
  );
}
