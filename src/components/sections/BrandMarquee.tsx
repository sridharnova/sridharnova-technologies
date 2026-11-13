
"use client";

import { motion, useReducedMotion } from "motion/react";

const services = [
  "Website Design",
  "Website Redesign",
  "Custom Dashboards",
  "CRM Solutions",
  "Web Applications",
  "Mobile Applications",
  "E-commerce Development",
  "Cloud & Hosting",
];

export default function BrandMarquee() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-y border-border bg-surface py-6">
      <div className="container-width overflow-hidden">
        <div className="mb-4 text-center text-xs font-semibold tracking-[0.25em] text-muted uppercase">
          Digital solutions for growing businesses
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex w-max items-center gap-12"
            animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...services, ...services].map((service, index) => (
              <div
                key={`${service}-${index}`}
                className="flex items-center gap-12 whitespace-nowrap"
              >
                <span className="text-lg font-semibold text-foreground/75 md:text-xl">
                  {service}
                </span>
                <span className="h-2 w-2 rounded-full bg-linear-to-r from-brand-purple to-brand-cyan" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
