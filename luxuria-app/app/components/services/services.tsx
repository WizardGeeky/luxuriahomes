"use client";

import { motion } from "framer-motion";
import { WobbleCard } from "@/components/ui/wobble-card";

const services = [
  {
    title: "Residential Construction",
    desc: "Luxury custom homes and refined renovations crafted with precision and timeless quality.",
    icon: "H",
  },
  {
    title: "Commercial Projects",
    desc: "High-performance commercial spaces designed for modern business and long-term value.",
    icon: "C",
  },
  {
    title: "Industrial Expertise",
    desc: "Efficient, scalable industrial construction that supports growth and operational excellence.",
    icon: "I",
  },
  {
    title: "Renovations & Extensions",
    desc: "Thoughtful upgrades and extensions that enhance structure, space, and property value.",
    icon: "R",
  },
  {
    title: "Project Management",
    desc: "End-to-end project delivery with strict timelines, budgets, and compliance assurance.",
    icon: "P",
  },
  {
    title: "Interior Design",
    desc: "Bespoke interiors blending luxury aesthetics with functional, modern living.",
    icon: "D",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#f7f9fb] py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,240,169,0.25),transparent_60%)] pointer-events-none" />

      <div className="relative w-11/12 lg:w-10/12 mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#001f30] text-4xl md:text-6xl font-extrabold tracking-tight uppercase"
          >
            Our Expertise
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            viewport={{ once: true }}
            className="h-0.75 bg-linear-to-r from-[#fff0a9] to-[#001f30] mx-auto mt-6 rounded-full"
          />

          <p className="mt-8 max-w-2xl mx-auto text-[#001f30]/60 text-sm md:text-base leading-relaxed">
            Delivering premium construction solutions with uncompromising
            quality, innovation, and attention to detail.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {services.map((service, index) => (
            <motion.div key={index}>
              <WobbleCard
                containerClassName="rounded-xl"
                className="
                  relative h-full
                  rounded-3xl
                  p-10
                  shadow-[0_30px_80px_rgba(0,0,0,0.08)]
                  transition-all"
              >
                {/* Accent Line */}

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#001f30] text-[#fff0a9] flex items-center justify-center text-2xl font-black mb-8">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-[#001f30] text-xl font-extrabold mb-4 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-[#001f30]/65 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Footer Detail */}
                <div className="mt-10 flex items-center gap-3 text-xs font-bold tracking-widest text-[#001f30]/40 uppercase">
                  Premium Build
                </div>
              </WobbleCard>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-28 text-center"
        >
          <p className="uppercase tracking-[0.35em] text-xs text-[#001f30]/50 font-semibold mb-8">
            Start Your Project With Confidence
          </p>

          <a
            href="#contacts"
            className="
              inline-block
              bg-[#001f30]
              text-white
              px-12 py-4
              rounded-full
              text-sm
              font-bold
              tracking-widest
              hover:bg-[#fff0a9]
              hover:text-[#001f30]
              transition-all
              shadow-2xl
              active:scale-95
            "
          >
            Request Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
