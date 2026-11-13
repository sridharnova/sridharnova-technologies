
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const services = [
  "Website Design",
  "Website Redesign",
  "CRM Dashboard",
  "Mobile Application",
  "Web Application",
  "E-commerce Website",
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((previous) => (previous + 1) % services.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative mt-2 block min-h-[1.25em] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={services[index]}
          initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -35, filter: "blur(8px)" }}
          transition={{
            duration: 0.55,
            ease: "easeInOut",
          }}
          className="gradient-text inline-block"
        >
          {services[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
