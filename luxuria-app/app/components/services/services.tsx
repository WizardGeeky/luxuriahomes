"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "RESIDENTIAL CONSTRUCTION",
    desc: "From custom homes to renovations, we turn your residential dreams into reality.",
    icon: "H",
  },
  {
    title: "COMMERCIAL PROJECTS",
    desc: "Our portfolio includes a wide range of commercial spaces, from offices to retail and hospitality.",
    icon: "C",
  },
  {
    title: "INDUSTRIAL EXPERTISE",
    desc: "We specialize in industrial construction, offering solutions that drive efficiency and growth.",
    icon: "I",
  },
  {
    title: "RENOVATIONS & EXTENSIONS",
    desc: "Transforming existing spaces with high-end finishes and structural enhancements that add lasting value.",
    icon: "R",
  },
  {
    title: "PROJECT MANAGEMENT",
    desc: "Seamless end-to-end oversight ensuring your build stays on schedule, on budget, and up to code.",
    icon: "P",
  },
  {
    title: "INTERIOR DESIGN",
    desc: "Curating bespoke interiors that balance luxury aesthetics with functional, modern living.",
    icon: "D",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Faster stagger for more items
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen py-24" id="services">
      <div className="w-11/12 lg:w-10/12 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#001f30] text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4"
          >
            Our Services
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-[#fff0a9] mx-auto"
          />
        </div>

        {/* Services Grid - Now 3 columns on desktop, 2 on tablet */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center text-center group transition-all hover:shadow-2xl hover:border-[#fff0a9]/50"
            >
              {/* Animated Icon Circle */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#001f30] text-[#fff0a9] flex items-center justify-center text-xl md:text-2xl font-black mb-8 group-hover:scale-110 group-hover:bg-[#fff0a9] group-hover:text-[#001f30] transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="text-[#001f30] text-lg md:text-xl font-black tracking-tight mb-4 leading-tight">
                {service.title}
              </h3>

              <div className="h-0.5 w-12 bg-[#fff0a9] mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <p className="text-[#001f30]/70 text-sm md:text-base leading-relaxed font-light">
                {service.desc}
              </p>

              {/* Advanced Decorative Detail */}
              <div className="mt-8 overflow-hidden w-full">
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="h-px bg-linear-to-r from-transparent via-[#fff0a9] to-transparent"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <p className="text-[#001f30]/50 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-6">
            Ready to start your next project?
          </p>
          <a href="#contacts" className="bg-[#001f30] text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold tracking-widest text-xs md:text-sm hover:bg-[#fff0a9] hover:text-[#001f30] transition-all duration-300 shadow-xl active:scale-95">
            GET A QUOTE
          </a>
        </motion.div>
      </div>
    </div>
  );
}
