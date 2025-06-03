"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="bg-slate-100 grid grid-cols-1 md:grid-cols-2 py-12 px-8 items-center"
    >
      <motion.div
        className="px-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-3xl font-bold mb-4 text-cyan-600">
          Why Choose <span className="text-red-600">Jakaria Inc.</span>?
        </h2>
        <ul className="list-disc list-inside text-lg space-y-3">
          <li>Expert guidance with over 5 years in fintech and crypto.</li>
          <li>Proven track record launching successful ICOs and tokens.</li>
          <li>Cutting-edge strategies for short-term and long-term gains.</li>
          <li>Dedicated support tailored to your business goals.</li>
        </ul>
      </motion.div>

      <motion.div
        className="flex justify-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="w-64 h-64 bg-cyan-400 rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-bold">
          Why Us?
        </div>
      </motion.div>
    </section>
  );
}
