"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
  "https://images.unsplash.com/photo-1600607687940-4e524cb35a36?q=80&w=2070",
  "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070",
  "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2070",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#001f30]" id="home">
      {/* 1. Background Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          speed={3000} // Smooth transition speed
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full w-full"
        >
          {HERO_IMAGES.map((src, index) => (
            <SwiperSlide key={index} className="overflow-hidden">
              {/* This inner div handles the continuous "Video-like" Zoom */}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.2 }}
                transition={{
                  duration: 8,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${src})` }}
              />
              {/* Premium Dark Overlays */}
              <div className="absolute inset-0 bg-[#001f30]/60" />
              <div className="absolute inset-0 bg-linear-to-t from-[#001f30] via-transparent to-[#001f30]/40" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. Responsive Content Overlay */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="w-11/12 lg:w-10/12 mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Tagline */}
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.5em" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-[#fff0a9] text-[10px] md:text-xs font-bold uppercase mb-6 block"
            >
              Exquisite Living Spaces
            </motion.span>

            {/* Responsive Headline */}
            <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-8">
              Redefining the <br />
              <span className="text-[#fff0a9] italic font-serif font-light">
                Art of Home
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#fff0a9]/80 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-12 px-2">
              From architectural marvels to bespoke interiors, we curate luxury
              residences that reflect your unique legacy. Experience the
              pinnacle of craftsmanship.
            </p>

            {/* Responsive Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a href="#projects" className="w-full sm:w-auto group relative px-10 py-4 bg-[#fff0a9] text-[#001f30] text-xs font-black uppercase tracking-[0.2em] transition-all hover:bg-white active:scale-95 flex items-center justify-center gap-3">
                Explore Projects
                <HiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>

              <a href="#contacts" className="w-full sm:w-auto px-10 py-4 border border-[#fff0a9] text-[#fff0a9] text-xs font-black uppercase tracking-[0.2em] hover:bg-[#fff0a9]/10 active:scale-95 transition-all text-center">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. Custom CSS for Pagination Dots (Optional) */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #fff0a9 !important;
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          width: 20px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
}
