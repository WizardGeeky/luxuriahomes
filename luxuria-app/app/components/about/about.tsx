"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "EXPERTISE",
    desc: "Our team of seasoned professionals brings a wealth of knowledge and expertise to every project.",
    number: "01",
  },
  {
    title: "QUALITY",
    desc: "We never compromise on quality, ensuring that every detail meets our exacting standards.",
    number: "02",
  },
  {
    title: "INNOVATION",
    desc: "We stay at the forefront of industry trends and technologies to bring you the latest innovations in construction.",
    number: "03",
  },
  {
    title: "CUSTOMER FOCUS",
    desc: "Your satisfaction is our priority. We work closely with you to understand your needs and exceed your expectations.",
    number: "04",
  },
];

export default function About() {
  return (
    <div className="bg-white py-20 md:py-32 overflow-hidden" id="about">
      <div className="w-11/12 lg:w-10/12 mx-auto">
        {/* TOP HEADER: Clean & Bold */}
        <div className="mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#001f30]/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-4 block"
          >
            Welcome to Luxuria Homes Australia
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#001f30] text-4xl md:text-8xl font-black tracking-tighter uppercase leading-none"
          >
            ABOUT{" "}
            <span className="text-[#fff0a9] italic font-serif font-light">
              US
            </span>
          </motion.h2>
        </div>

        {/* INTRO PARAGRAPH: Editorial Style */}
        <div className="max-w-4xl mb-24 md:mb-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#001f30] text-xl md:text-4xl font-light italic font-serif leading-tight border-l-4 border-[#fff0a9] pl-6 md:pl-10"
          >
            "We transform visions into reality. With a passion for precision and
            a commitment to excellence, we are your trusted partner in the world
            of construction and development."
          </motion.p>
        </div>

        {/* IDENTITY BLOCKS: Who We Are & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-24 md:mb-32">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-[#001f30] p-8 md:p-14 rounded-2xl shadow-2xl"
          >
            <h3 className="text-[#fff0a9] text-xs font-bold tracking-[0.4em] uppercase mb-6">
              Who We Are
            </h3>
            <p className="text-white/90 text-lg font-light leading-relaxed mb-4">
              A leading construction company known for innovation and quality
              craftsmanship.
            </p>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              With years of experience in the industry, we have built a
              reputation for delivering exceptional projects across residential,
              commercial, and industrial sectors.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-50 p-8 md:p-14 rounded-2xl border border-gray-300 shadow-lg"
          >
            <h3 className="text-[#001f30] text-xs font-bold tracking-[0.4em] uppercase mb-6">
              Our Mission
            </h3>
            <p className="text-[#001f30] text-lg font-light leading-relaxed mb-4">
              To build with integrity, creativity, and precision.
            </p>
            <p className="text-[#001f30]/60 text-sm font-light leading-relaxed">
              We believe in more than just constructing buildings; we build
              relationships, trust, and a future where dreams take shape.
            </p>
          </motion.div>
        </div>

        {/* WHAT SETS US APART: High-end Grid */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-[#001f30] text-2xl md:text-4xl font-black tracking-tight uppercase whitespace-nowrap">
              What sets us apart?
            </h2>
            <div className="h-px w-full bg-[#001f30]/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="text-[#001f30]/5 text-7xl font-black  transition-colors group-hover:text-[#fff0a9]/30">
                  {feature.number}
                </div>
                <h4 className="text-[#001f30] font-bold text-sm tracking-widest uppercase mb-4 relative z-10">
                  {feature.title}
                </h4>
                <p className="text-[#001f30]/60 text-xs md:text-sm leading-relaxed font-light">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
