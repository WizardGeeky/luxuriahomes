"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white" id="contacts">
      <div className="w-11/12 lg:w-10/12 mx-auto py-12 lg:mb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-[#001f30]/50 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] mb-3 md:mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-[#001f30] text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-tight">
            Let’s Build Your <br className="md:hidden" />
            <span className="italic font-serif font-light underline decoration-[#fff0a9] decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8">
              Legacy
            </span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10 md:space-y-12 order-2 lg:order-1"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-[#001f30] text-xl md:text-2xl font-bold mb-6 tracking-tight text-center lg:text-left">
                Contact Details
              </h2>
              <div className="space-y-6">
                {/* Contact Item */}
                <div className="flex flex-col md:flex-row items-center lg:items-start gap-4 md:gap-5 group cursor-pointer text-center lg:text-left">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#001f30] flex items-center justify-center text-[#fff0a9]">
                    <HiOutlineMail className="text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#001f30]/50 font-bold mb-1">
                      Email Us
                    </p>
                    <p className="text-[#001f30] font-semibold text-base md:text-lg break-all">
                      admin@luxuriahomes.au
                    </p>
                  </div>
                </div>

                {/* Contact Item */}
                <div className="flex flex-col md:flex-row items-center lg:items-start gap-4 md:gap-5 group cursor-pointer text-center lg:text-left">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#001f30] flex items-center justify-center text-[#fff0a9]">
                    <HiOutlinePhone className="text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#001f30]/50 font-bold mb-1">
                      Call Us
                    </p>
                    <p className="text-[#001f30] font-semibold text-base md:text-lg">
                      +61 433 196 100, +61 482 794 242
                    </p>
                  </div>
                </div>

                {/* Contact Item */}
                <div className="flex flex-col md:flex-row items-center lg:items-start gap-4 md:gap-5 group cursor-pointer text-center lg:text-left">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#001f30] flex items-center justify-center text-[#fff0a9]">
                    <HiOutlineLocationMarker className="text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#001f30]/50 font-bold mb-1">
                      Visit Studio
                    </p>
                    <p className="text-[#001f30] font-semibold text-base md:text-lg">
                      Unit 7, 21 Technology Drive Agustine Heights, QLD, 4300
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Icons - Centered on mobile */}
            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <h2 className="text-[#001f30] text-xl md:text-2xl font-bold tracking-tight">
                Social Presence
              </h2>
              <div className="flex justify-center lg:justify-start gap-4">
                {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 border border-[#001f30]/10 flex items-center justify-center rounded-full text-[#001f30] hover:bg-[#001f30] hover:text-[#fff0a9] transition-all duration-300"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Contact Form - Stacks on bottom for mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#001f30] p-6 sm:p-8 md:p-12 rounded-lg md:rounded-3xl shadow-2xl relative overflow-hidden order-1 lg:order-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#fff0a9]/10 blur-3xl -mr-16 -mt-16" />

            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[#fff0a9] text-[10px] uppercase tracking-[0.2em] font-bold">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-transparent border-b border-[#fff0a9]/20 py-2 text-white focus:outline-none focus:border-[#fff0a9] transition-colors placeholder:text-white/20 text-sm md:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[#fff0a9] text-[10px] uppercase tracking-[0.2em] font-bold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-transparent border-b border-[#fff0a9]/20 py-2 text-white focus:outline-none focus:border-[#fff0a9] transition-colors placeholder:text-white/20 text-sm md:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[#fff0a9] text-[10px] uppercase tracking-[0.2em] font-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-[#fff0a9]/20 py-2 text-white focus:outline-none focus:border-[#fff0a9] transition-colors placeholder:text-white/20 text-sm md:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[#fff0a9] text-[10px] uppercase tracking-[0.2em] font-bold">
                    Phone Number
                  </label>
                  <input
                    type="email"
                    placeholder="+61 482 794 242"
                    className="w-full bg-transparent border-b border-[#fff0a9]/20 py-2 text-white focus:outline-none focus:border-[#fff0a9] transition-colors placeholder:text-white/20 text-sm md:text-base"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[#fff0a9] text-[10px] uppercase tracking-[0.2em] font-bold">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Your vision..."
                  className="w-full bg-transparent border-b border-[#fff0a9]/20 py-2 text-white focus:outline-none focus:border-[#fff0a9] transition-colors placeholder:text-white/20 resize-none text-sm md:text-base"
                />
              </div>

              <button className="w-full py-4 md:py-5 bg-[#fff0a9] text-[#001f30] text-[10px] md:text-xs font-black uppercase tracking-[0.3em] hover:bg-white active:scale-[0.98] transition-all duration-300">
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
