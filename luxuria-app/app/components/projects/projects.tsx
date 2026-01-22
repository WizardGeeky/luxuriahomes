"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Bed,
  Bath,
  Car,
  Maximize,
  Ruler,
  ChevronRight,
  Home,
  CheckCircle2,
} from "lucide-react";

const currentProjects = [
  {
    location: "Mitchelton",
    address: "7 Cranbook Street",
    description:
      "A striking contemporary residence featuring open-plan living and seamless indoor-outdoor flow.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800",
    features: ["Smart Home System", "Butler's Pantry"],
    specs: { bed: 5, bath: 3, car: 2, size: "385m²" },
  },
  {
    location: "Wavell Heights",
    address: "Zeehan Road",
    description:
      "Elevated luxury with panoramic views, featuring a sophisticated master suite and infinity pool.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    features: ["Elevated Position", "Wine Cellar"],
    specs: { bed: 5, bath: 4.5, car: 2, size: "507m²" },
  },
  {
    location: "Mitchelton",
    address: "9 Cranbook Street",
    description:
      "Architecturally designed for family comfort with high-end finishes and sustainable materials.",
    image:
      "https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&q=80&w=800",
    features: ["Solar Array", "Media Room"],
    specs: { bed: 5, bath: 3, car: 2, size: "385m²" },
  },
  {
    location: "Ripley",
    address: "Bayliss Circuit",
    description:
      "Modern minimalist design meets functional family living in a quiet, leafy neighborhood.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800",
    features: ["Ducted Air", "Outdoor Kitchen"],
    specs: { bed: 5, bath: 4, car: 2, size: "430m²" },
  },
];

export default function Projects() {
  return (
    <section className="bg-[#f8f9fa] py-16 md:py-32" id="projects">
      <div className="w-11/12 lg:w-10/12 mx-auto">
        {/* COMPLETED PROJECTS SECTION */}
        <div className="mb-12">
          <h2 className="text-[#001f30] text-3xl md:text-4xl font-black tracking-tight uppercase">
            Completed Projects
          </h2>
          <div className="h-1.5 w-16 bg-[#fff0a9] mt-3" />
        </div>

        {/* FEATURED COMPLETED PROJECT HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-75 md:h-125 overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
                alt="Immaculate Family Home"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-[#001f30] text-[#fff0a9] px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full">
                Featured Completion
              </div>
            </div>

            <div className="p-8 md:p-14 flex flex-col justify-center">
              <h3 className="text-[#001f30] text-2xl md:text-4xl font-black mb-6 leading-tight">
                Immaculate Family Home
              </h3>
              <p className="text-[#001f30]/70 leading-relaxed mb-8 font-light text-sm md:text-base">
                Crafted for the modern family, this immaculately presented home
                has all of the inclusions and finishes you would expect to find
                in a home of this caliber. There is no lack of street appeal
                with the gorgeous façade providing the greatest of first
                impressions.
              </p>

              {/* PROPERTY SPECS BAR */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-10 border-y border-gray-100 py-8">
                {[
                  { icon: <Bed />, label: "Beds", val: "5" },
                  { icon: <Bath />, label: "Baths", val: "2" },
                  { icon: <Car />, label: "Cars", val: "2" },
                  { icon: <Home />, label: "Storey", val: "2" },
                  { icon: <Ruler />, label: "Study", val: "1" },
                  { icon: <Maximize />, label: "Land", val: "610m²" },
                ].map((spec, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5">
                    <div className="text-[#001f30] w-5 h-5">{spec.icon}</div>
                    <span className="text-[10px] uppercase text-[#001f30]/40 font-bold">
                      {spec.label}
                    </span>
                    <span className="text-xs font-black text-[#001f30]">
                      {spec.val}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="/gallery"
                className="flex items-center gap-2 text-[#001f30] font-black text-sm uppercase tracking-widest hover:text-[#fff0a9] transition-colors group w-fit"
              >
                View Gallery{" "}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* CURRENT PROJECTS SECTION */}
        <div className="mb-12">
          <h2 className="text-[#001f30] text-3xl md:text-4xl font-black tracking-tight uppercase">
            Current Projects
          </h2>
          <div className="h-1.5 w-16 bg-[#fff0a9] mt-3" />
        </div>

        {/* CURRENT PROJECTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group flex flex-col h-full border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.location}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#001f30]/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white text-xl font-extrabold">
                    {project.location}
                  </h4>
                  <p className="text-[#fff0a9] text-[10px] uppercase tracking-[0.2em] font-medium">
                    {project.address}
                  </p>
                </div>
              </div>

              <div className="p-6 flex flex-col grow">
                <p className="text-[#001f30]/70 text-sm font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#fff0a9] fill-[#001f30]" />
                      <span className="text-[11px] font-bold text-[#001f30]/80 uppercase tracking-tight">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-gray-50 grid grid-cols-4 gap-2">
                  <div className="flex flex-col items-center">
                    <Bed className="w-4 h-4 text-[#001f30]/30" />
                    <span className="text-[10px] font-black text-[#001f30] mt-1">
                      {project.specs.bed}
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Bath className="w-4 h-4 text-[#001f30]/30" />
                    <span className="text-[10px] font-black text-[#001f30] mt-1">
                      {project.specs.bath}
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Car className="w-4 h-4 text-[#001f30]/30" />
                    <span className="text-[10px] font-black text-[#001f30] mt-1">
                      {project.specs.car}
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Maximize className="w-4 h-4 text-[#001f30]/30" />
                    <span className="text-[10px] font-black text-[#001f30] mt-1 whitespace-nowrap">
                      {project.specs.size}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE PAGINATION DOTS */}
        <div className="mt-8 flex justify-center lg:hidden">
          <div className="flex gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#001f30]/20"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
