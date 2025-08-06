"use client";

import { motion } from "framer-motion";
import why from "@/assets/images/why.png";
import Image from "next/image";


const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};


export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="bg-gradient-to-br from-purple-50 via-white to-blue-50 grid grid-cols-1 scroll-mt-36 md:grid-cols-2 py-14 px-10 md:px-32 items-center"
    >
      <motion.div
        className="px-6"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className=" text-3xl font-bold mb-4 text-purple-600">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside text-lg space-y-3 pt-2 text-blue-600">

          <li>No upfront fee - Pay only for results.</li>
          <li>Dedicated blockchain developers for each project. </li>
          <li>20+ digital marketing teams to boost your project's reach.</li>
          <li>Organic growth strategies to ensure sustainable success.</li>
          <li>24/7 support to assist you at every step.</li>
          <li>All projects completed within 7 days with full transparency.</li>
          
        </ul>

      </motion.div>

      <motion.div
              className="flex justify-center"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <Image src={why} alt="image" className="w-3/4"/>
            </motion.div>
    </section>
  );
}
