"use client";

import { useRef, useState } from "react";
import { Globe } from "@/components/ui/globe";
import type { COBEOptions } from "cobe";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Work() {
  const phi = useRef(0.65);
  const theta = useRef(0.45);

  const [activeLabel, setActiveLabel] = useState<"India" | "Australia" | null>(
    null,
  );

  const config: COBEOptions = {
    width: 600,
    height: 600,

    onRender: () => {
      phi.current += 0.002;
      theta.current = 0.45 + Math.sin(phi.current) * 0.08;

      if (phi.current % (Math.PI * 2) < Math.PI) {
        setActiveLabel("India");
      } else {
        setActiveLabel("Australia");
      }
    },

    devicePixelRatio: 2,
    phi: phi.current,
    theta: theta.current,

    dark: 0,
    diffuse: 2.8,
    mapSamples: 24000,
    mapBrightness: 10,

    baseColor: [1, 0.94, 0.66],
    markerColor: [0, 0.12, 0.18],
    glowColor: [1, 0.94, 0.66],

    markers: [
      { location: [-25.2744, 133.7751], size: 0.12 },
      { location: [20.5937, 78.9629], size: 0.12 },
    ],
  };

  return (
    <section className="relative w-full bg-[#001f30] py-20 md:py-24 overflow-hidden">
      {/* RELATIVE WRAPPER IS CRITICAL */}
      <div className="relative min-h-[70vh] lg:w-10/12 w-11/12 mx-auto">
        {/* BACKGROUND BEAMS */}
        <BackgroundBeamsWithCollision className="absolute inset-0 z-0 bg-[#001f30]">
          <div /> {/* required children */}
        </BackgroundBeamsWithCollision>

        {/* CONTENT LAYER */}
        <div
          className="
            relative z-10
            mx-auto lg:w-10/12 w-11/12 px-4
            flex flex-col items-center gap-12
          "
          style={
            {
              "--beam-color": "255 240 169",
            } as React.CSSProperties
          }
        >
          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-3xl font-bold uppercase tracking-[0.45em] text-[#fff0a9]"
          >
            Our Global Presence
          </motion.h2>

          {/* GLOBE */}
          <div className="relative flex items-center justify-center">
            {/* ACTIVE LOCATION LABEL */}
            <motion.div
              key={activeLabel}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="pointer-events-none absolute top-6 text-sm md:text-base font-semibold tracking-wide text-[#fff0a9]"
            >
              {activeLabel}
            </motion.div>

            {/* RESPONSIVE GLOBE */}
            <div
              className="
                relative
                h-64 w-64
                sm:h-80 sm:w-80
                md:h-96 md:w-96
                lg:h-112 lg:w-md
              "
            >
              <Globe config={config} />
            </div>
          </div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-center text-white/70 text-xs md:text-sm leading-relaxed"
          >
            Delivering world-class construction excellence across continents,
            driven by precision, trust, and timeless architectural values.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
