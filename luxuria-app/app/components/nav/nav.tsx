"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu if window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-[#001f30] border-b border-[#fff0a9]/20 shadow-xl">
      <div className="w-11/12 lg:w-10/12 mx-auto px-2 lg:px-4">
        <div className="flex justify-between items-center h-20 ">
          {/* Logo Section */}
          <div className="shrink-0">
            <Link href="/" className="flex flex-col items-start group">
              <h1 className="text-[#fff0a9] font-black text-4xl tracking-tighter leading-none logo-text">
                Luxuria
              </h1>
              <span className="text-[#fff0a9] font-medium text-[10px] tracking-[0.4em] uppercase leading-none mt-1 opacity-80">
                homes
              </span>
            </Link>
          </div>

          {/* Desktop Menu - Hidden on Mobile */}
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group text-[#fff0a9] text-[13px] uppercase tracking-[0.15em] font-semibold transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#fff0a9] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA - Hidden on Mobile */}
          <div className="hidden md:block">
            <button className="relative overflow-hidden px-8 py-2.5 bg-transparent border border-[#fff0a9] text-[#fff0a9] text-xs font-bold uppercase tracking-widest rounded-sm group transition-all duration-300">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#001f30]">
                Get Started
              </span>
              <span className="absolute inset-0 bg-[#fff0a9] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            </button>
          </div>

          {/* Mobile Menu Toggle - Hidden on Desktop */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="text-[#fff0a9] text-3xl p-2 active:scale-90 transition-transform"
              aria-label="Open Menu"
            >
              <HiMenuAlt3 />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile-Only Side Drawer */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Dark Backdrop - Mobile Only */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-60 md:hidden"
            />

            {/* Side Menu - Mobile Only */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed top-0 right-0 h-full w-75 bg-[#001f30] border-l border-[#fff0a9]/30 z-70 flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.5)] md:hidden"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center p-6 border-b border-[#fff0a9]/10">
                <span className="text-[#fff0a9] text-[10px] tracking-[0.3em] font-bold opacity-50"></span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[#fff0a9] text-3xl active:rotate-90 transition-transform duration-300"
                >
                  <HiX />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col p-6 space-y-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-[#fff0a9] text-sm uppercase tracking-[0.2em] font-light block hover:translate-x-2 transition-transform duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="mt-auto p-8 bg-[#001b2a]">
                <button className="w-full py-4 bg-[#fff0a9] text-[#001f30] text-xs font-black uppercase tracking-[0.2em] transition-transform active:scale-95 shadow-lg">
                  Get Started
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
