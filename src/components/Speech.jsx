"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutimg2 from "@/assets/images/speech_2.jpg";

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
      className="bg-gradient-to-r from-blue-400 to-purple-400 text-white grid grid-cols-1 md:grid-cols-2 py-12 px-10 md:px-24 items-center"
    >
      <motion.div
        className="flex justify-center"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <Image src={aboutimg2} alt="image" className="w-3/5 hover:translate-x-1 hover:translate-y-1 rounded-3xl" />
      </motion.div>

      <motion.div
        className="px-6"
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold mb-4">
          Looking to Generate RISK-FREE Passive Income?
        </h3>
        <ul className="text-md pt-2 space-y-3">
          {[
            "As an Investor or job holder, you can easily start earning by launching memecoins on decentralized exchanges (DEX) with no risk of losing money.",
            "The process is quick and straightforward—7 days for each launch and profit booking.",
            "By repeating this process weekly, you can steadily generate a good amount of profit.",
            "At Jakaria Inc., we help you build this passive income stream effortlessly, ensuring consistent returns with minimal effort."
          ].map((text, idx) => (
            <li key={idx} className="flex items-start space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 flex-shrink-0 mt-1"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
