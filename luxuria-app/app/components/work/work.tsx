"use client";

import { Globe } from "@/components/ui/globe";
import type { COBEOptions } from "cobe";

const countries = [
  { name: "India", className: "top-6 left-1/2 -translate-x-1/2" },
  { name: "Australia", className: "bottom-10 left-8" },
];

export default function Work() {
  const config: COBEOptions = {
    width: 600,
    height: 600,
    onRender: () => {},

    devicePixelRatio: 2,
    phi: 0.65,
    theta: 0.45,

    dark: 0,
    diffuse: 2.5,
    mapSamples: 24000,
    mapBrightness: 10,

    baseColor: [1, 0.94, 0.66], // gold globe
    markerColor: [0, 0.12, 0.18], // navy points
    glowColor: [1, 0.94, 0.66],

    markers: [
      { location: [-25.2744, 133.7751], size: 0.12 }, // Australia
      { location: [20.5937, 78.9629], size: 0.12 }, // India
    ],
  };

  return (
    <section className="relative w-full bg-[#001f30] py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4">
        <h2 className="text-sm lg:text-4xl  font-bold uppercase tracking-[0.45em] text-white">
          Our Presence
        </h2>

        {/* Globe Wrapper */}
        <div className="relative flex items-center justify-center">
          {/* Country labels */}
          {countries.map((c) => (
            <span
              key={c.name}
              className={`pointer-events-none absolute ${c.className} text-xs md:text-sm font-semibold text-[#fff0a9]/80`}
            >
              {c.name}
            </span>
          ))}

          {/* Responsive globe container */}
          <div
            className="
            relative
            h-70 w-70
            sm:h-90 sm:w-90
            md:h-120 md:w-120
            lg:h-150 lg:w-150
          "
          >
            <Globe config={config} />
          </div>
        </div>
      </div>
    </section>
  );
}
