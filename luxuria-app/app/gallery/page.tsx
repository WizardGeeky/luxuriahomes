"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";

// Updated with verified high-quality architecture images
const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    category: "Residential",
    title: "Modern Estate",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    category: "Residential",
    title: "Glass Villa",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    category: "Commercial",
    title: "Retail Hub",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    category: "Industrial",
    title: "Logic Center",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    category: "Residential",
    title: "Master Suite",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    category: "Residential",
    title: "Family Oasis",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    category: "Residential",
    title: "Kitchen Design",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68",
    category: "Commercial",
    title: "Hotel Lobby",
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    category: "Industrial",
    title: "Warehouse Tech",
  },
  {
    id: 13,
    url: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09",
    category: "Residential",
    title: "Garden View",
  },
  {
    id: 14,
    url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
    category: "Residential",
    title: "Modern Cabin",
  },
  {
    id: 15,
    url: "https://images.unsplash.com/photo-1449844908441-8829872d2607",
    category: "Commercial",
    title: "Urban Living",
  },
  {
    id: 16,
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    category: "Residential",
    title: "Apartment Loft",
  },
  {
    id: 17,
    url: "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
    category: "Industrial",
    title: "Processing Plant",
  },
  {
    id: 18,
    url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    category: "Residential",
    title: "Suburban Luxury",
  },
  {
    id: 19,
    url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    category: "Residential",
    title: "Pool Terrace",
  },
].map((img) => ({
  ...img,
  url: `${img.url}?auto=format&fit=crop&q=80&w=1000`,
}));

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<
    null | (typeof galleryImages)[0]
  >(null);

  return (
    <main className="bg-[#f8f9fa] min-h-screen pt-12">
      {/* <Nav /> */}
      <div className="w-11/12 lg:w-10/12 mx-auto my-16">
        <div className="mb-12 md:mb-20 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 mb-4 justify-center sm:justify-start"
          >
            <span className="text-[#001f30]/40 text-[10px] font-bold uppercase tracking-[0.4em]">
              Luxuria Portfolio
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#001f30] text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none"
          >
            THE{" "}
            <span className="text-[#001f30] italic font-serif font-light">
              COLLECTION
            </span>
          </motion.h1>
        </div>

        {/* RESPONSIVE MASONRY GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 break-inside-avoid"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* HOVER OVERLAY - HIDDEN ON TOUCH DEVICES UNLESS CLICKED */}
              <div className="absolute inset-0 bg-[#001f30]/70 opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-5">
                <p className="text-[#fff0a9] text-[9px] uppercase font-bold tracking-widest mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.category}
                </p>
                <h3 className="text-white text-base font-bold uppercase tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FULLSCREEN LIGHTBOX MODAL */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-100 bg-[#001f30] flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button className="absolute top-6 right-6 text-white/50 hover:text-[#fff0a9] transition-colors z-10">
                <X className="w-8 h-8" />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
                <div className="mt-6 text-center">
                  <span className="text-[#fff0a9] text-[10px] font-bold tracking-[0.4em] uppercase">
                    {selectedImage.category}
                  </span>
                  <h2 className="text-white text-2xl font-black uppercase mt-1 tracking-tight">
                    {selectedImage.title}
                  </h2>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
