'use client';

import { motion } from 'framer-motion';

export default function Achievements() {
  const stats = [
    {
      id: 1,
      label: 'Over',
      value: '250,000+',
      description: 'Verified Users in global transactions',
    },
    {
      id: 2,
      label: 'About',
      value: '63%',
      description: 'Reduction in fraud cases across verified platforms',
    },
    {
      id: 3,
      label: 'Trusted By',
      value: '1,200+',
      description: 'Partners and fintech organizations worldwide',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen px-8 md:px-32 py-16 bg-white">
      {/* Left Side Card */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center items-center">
        <div className="sticky md:top-24 bg-purple-100 p-10 rounded-2xl shadow-lg max-w-md w-full text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 leading-tight">
            Our Achievements
          </h1>
          <p className="mt-6 text-gray-700 text-lg">
            Proud milestones that showcase our success and growth.
          </p>
        </div>
      </div>

      {/* Scrollable Right Side - Stats Cards */}
      <div className="md:w-1/2 flex flex-col gap-10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white border border-purple-300 rounded-xl p-8 shadow-md text-center md:text-left"
          >
            <p className="text-purple-400 font-semibold text-sm mb-1">{stat.label}</p>
            <h2 className="text-purple-600 text-5xl font-extrabold">{stat.value}</h2>
            <p className="text-gray-600 mt-2">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
