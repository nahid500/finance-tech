"use client";

import Image from "next/image";
import s1 from "@/assets/images/s1.png";
import s2 from "@/assets/images/s2.png";
import s3 from "@/assets/images/s3.png";
import { motion } from "framer-motion";
import WidgetOne from "./widgets/WidgetOne";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServiceData = async () => {
      try {
        const response = await axios.get(
          "https://jakaria-finance-backend.vercel.app/api/v1/services"
        );

        if (response.data?.success) {
          setServices(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching services:", error.message);
        console.log(error);
      }
    };

    getServiceData();
  }, []);

  return (
    <div id="services" className="scroll-mt-36">
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
            key={service._id}
            className="px-10 md:px-32 bg-gradient-to-br from-purple-50 via-white to-blue-50 py-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
          >
            <div
              id="services"
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-6`}
            >
              <div className="flex justify-center w-3/5">
                <Image
                  src={service?.img}
                  alt={service.title}
                  width={450}
                  height={300} // or whatever the actual image height is
                  priority={index === 0}
                />
              </div>

              <div className="flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-purple-600 font-bold text-2xl">
                  {index + 1}. {service.title}
                </h2>
                <p className="text-blue-600 text-xl pt-6 px-2">
                  {service.description}
                </p>
              </div>
            </div>
            {/* {index === 1 && (
              <div>
                <WidgetOne />
              </div>
            )} */}
          </motion.div>
        );
      })}
    </div>
  );
}
