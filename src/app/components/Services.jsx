"use client";

import Image from "next/image";
import s1 from "@/app/images/s1.png";
import s2 from "@/app/images/s2.png";
import s3 from "@/app/images/s3.png";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "ICO EXPERT",
    desc: "Easily raise funds within 7 days and ensure long-term growth with expert ICO services. From token creation to attracting investors, every step is carefully managed to ensure your project's success.",
    image: s1,
  },
  {
    id: 2,
    title: "Meme Token Launch",
    desc: "Launch your meme token and get listed in popular decentralized exchanges, with listing approval within 24 hours. Our services guarantee a pump and rapid market traction.",
    image: s2,
  },
  {
    id: 3,
    title: "Community Token Launch",
    desc: "Build a stronger community by developing the perfect ecosystem for your coin. We help you create and launch tokens that drive long-term organic growth, ensuring sustainability and success.",
    image: s3,
  },
];

export default function Services() {
  return (
    <div id="services">
      {services.map((service, index) => {
        const slideFromLeft = {
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        };

        const slideFromRight = {
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        };

        return (
          <motion.div
            key={service.id}
            className="px-8 bg-slate-100 py-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
          >
            <div
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-6`}
            >
              <div className="flex justify-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={450}
                  priority={index === 0} // optional: prioritize first image
                />
              </div>

              <div className="flex flex-col items-center justify-center text-center p-6">
                <h2 className="text-cyan-800 font-bold text-2xl">
                  {service.id}. {service.title}
                </h2>
                <p className="text-cyan-600 text-xl pt-6 px-2">{service.desc}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
