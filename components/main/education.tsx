"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-10"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Education
      </h1>
      <div className="w-full max-w-4xl px-10 space-y-10">
        <motion.div 
          variants={slideInFromLeft(0.5)}
          className="p-6 border border-[#7042f88b] bg-[#0300145e] rounded-lg backdrop-blur-lg"
        >
          <h2 className="text-xl font-bold text-white">B.Tech in Computer Science</h2>
          <p className="text-gray-300">Kalinga Institute of Industrial Technology, Bhubaneswar</p>
          <p className="text-gray-400">2021–2025</p>
        </motion.div>

        <motion.div 
          variants={slideInFromRight(0.5)}
          className="p-6 border border-[#7042f88b] bg-[#0300145e] rounded-lg backdrop-blur-lg"
        >
          <h2 className="text-xl font-bold text-white">Higher Secondary</h2>
          <p className="text-gray-300">Zoom International School, Durgapur</p>
          <p className="text-gray-400">2019–2021</p>
        </motion.div>

        <motion.div 
          variants={slideInFromLeft(0.5)}
          className="p-6 border border-[#7042f88b] bg-[#0300145e] rounded-lg backdrop-blur-lg"
        >
          <h2 className="text-xl font-bold text-white">Secondary</h2>
          <p className="text-gray-300">St. Peter's School, Durgapur</p>
          <p className="text-gray-400">2019</p>
        </motion.div>
      </div>
    </section>
  );
};