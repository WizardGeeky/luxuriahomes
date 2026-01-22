"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

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
        {/* HEADER */}
        <div className="mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#001f30]/40 text-xs font-bold uppercase tracking-[0.5em] mb-4 block"
          >
            Welcome to Luxuria Homes Australia
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#001f30] text-4xl md:text-8xl font-black tracking-tighter uppercase"
          >
            ABOUT US
          </motion.h2>
        </div>

        {/* INTRO */}
        <div className="max-w-4xl mb-24 md:mb-32 flex gap-6 md:gap-10">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            className="w-1.5 bg-linear-to-b from-[#fff0a9] to-[#001f30] rounded-full origin-top"
          />

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#001f30] text-xl md:text-4xl font-light italic font-serif"
          >
            "We transform visions into reality with precision and excellence."
          </motion.p>
        </div>

        {/* IDENTITY BLOCKS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-24 md:mb-32">
          {/* WHO WE ARE */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative rounded-2xl bg-[#001f30] p-8 md:p-14 shadow-2xl overflow-hidden"
          >
            <GlowingEffect />

            <h3 className="text-[#fff0a9] text-xs font-bold tracking-[0.4em] uppercase mb-6 relative z-10">
              Who We Are
            </h3>
            <p className="text-white/90 text-lg font-light mb-4 relative z-10">
              A leading construction company known for innovation and quality
              craftsmanship.
            </p>
            <p className="text-white/60 text-sm font-light relative z-10">
              Delivering exceptional residential, commercial, and industrial
              projects.
            </p>
          </motion.div>

          {/* OUR MISSION */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative rounded-2xl bg-gray-50 p-8 md:p-14 border border-gray-300 shadow-lg overflow-hidden"
          >
            <GlowingEffect />

            <h3 className="text-[#001f30] text-xs font-bold tracking-[0.4em] uppercase mb-6 relative z-10">
              Our Mission
            </h3>
            <p className="text-[#001f30] text-lg font-light mb-4 relative z-10">
              To build with integrity, creativity, and precision.
            </p>
            <p className="text-[#001f30]/60 text-sm font-light relative z-10">
              Building trust, relationships, and a future where dreams take
              shape.
            </p>
          </motion.div>
        </div>

        {/* FEATURES */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-[#001f30] text-2xl md:text-4xl font-black uppercase">
              What sets us apart?
            </h2>
            <div className="h-px w-full bg-[#001f30]/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="text-7xl font-black text-[#001f30]/5">
                  <span className="group-hover:text-transparent bg-clip-text bg-linear-to-b from-[#fff0a9] to-[#001f30] transition-all">
                    {feature.number}
                  </span>
                </div>

                <h4 className="text-[#001f30] font-bold text-sm tracking-widest uppercase mb-4">
                  {feature.title}
                </h4>

                <p className="text-[#001f30]/60 text-sm font-light">
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
