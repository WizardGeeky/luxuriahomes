"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

interface BeamOptions {
  initialX?: number;
  translateX?: number;
  initialY?: number;
  translateY?: number;
  rotate?: number;
  className?: string;
  duration?: number;
  delay?: number;
  repeatDelay?: number;
}

interface CollisionProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  parentRef: React.RefObject<HTMLDivElement | null>;
  beamOptions?: BeamOptions;
}

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);

  const beams: BeamOptions[] = [
    { initialX: 10, translateX: 10, duration: 7, repeatDelay: 3, delay: 2 },
    { initialX: 600, translateX: 600, duration: 3, repeatDelay: 3, delay: 4 },
    {
      initialX: 100,
      translateX: 100,
      duration: 7,
      repeatDelay: 7,
      className: "h-6",
    },
    { initialX: 400, translateX: 400, duration: 5, repeatDelay: 14, delay: 4 },
    {
      initialX: 800,
      translateX: 800,
      duration: 11,
      repeatDelay: 2,
      className: "h-20",
    },
    {
      initialX: 1000,
      translateX: 1000,
      duration: 4,
      repeatDelay: 2,
      className: "h-12",
    },
    {
      initialX: 1200,
      translateX: 1200,
      duration: 6,
      repeatDelay: 4,
      delay: 2,
      className: "h-6",
    },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "relative flex items-center justify-center w-full h-160 overflow-hidden bg-[#001f30]",
        className,
      )}
    >
      {beams.map((beam, i) => (
        <CollisionMechanism
          key={i}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}

      <div
        ref={containerRef}
        className="absolute bottom-0 w-full pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(34,42,53,0.04), 0 0 4px rgba(34,42,53,0.08), 0 16px 68px rgba(47,48,55,0.05) inset",
        }}
      />
    </div>
  );
};

const CollisionMechanism = ({
  containerRef,
  parentRef,
  beamOptions = {},
}: CollisionProps) => {
  const beamRef = useRef<HTMLDivElement | null>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({ detected: false, coordinates: null });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: { x: relativeX, y: relativeY },
          });
          setCycleCollisionDetected(true);
        }
      }
    };

    const interval = setInterval(checkCollision, 50);
    return () => clearInterval(interval);
  }, [cycleCollisionDetected]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
      }, 2000);

      setTimeout(() => setBeamKey((prev) => prev + 1), 2000);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        initial={{
          translateY: beamOptions.initialY ?? "-200px",
          translateX: beamOptions.initialX ?? "0px",
          rotate: beamOptions.rotate ?? 0,
        }}
        animate={{
          translateY: beamOptions.translateY ?? "1800px",
          translateX: beamOptions.translateX ?? "0px",
          rotate: beamOptions.rotate ?? 0,
        }}
        transition={{
          duration: beamOptions.duration ?? 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay ?? 0,
          repeatDelay: beamOptions.repeatDelay ?? 0,
        }}
        className={cn(
          "absolute left-0 top-20 m-auto w-px rounded-full bg-linear-to-t from-[#fff0a9] via-[#ffd966] to-transparent",
          beamOptions.className,
        )}
      />

      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  // MORE DROPS: 40 instead of 20, varied sizes
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    initialX: 0,
    initialY: 0,
    dirX: Math.floor(Math.random() * 120 - 60),
    dirY: Math.floor(Math.random() * -80 - 20),
    size: Math.random() * 2 + 1,
  }));

  return (
    <div {...props} className={cn("absolute z-50", props.className)}>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ x: p.initialX, y: p.initialY, opacity: 1 }}
          animate={{ x: p.dirX, y: p.dirY, opacity: 0 }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute rounded-full bg-linear-to-b from-[#fff0a9] via-[#ffd966] to-[#fff0a9]"
          style={{ width: p.size, height: p.size }}
        />
      ))}
    </div>
  );
};
