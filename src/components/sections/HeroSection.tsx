"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Smartphone,
  Globe2,
} from "lucide-react";
import RotatingText from "@/components/common/RotatingText";
import monogram from "../../../public/images/logo_monogram.png";

const floatingTags = [
  {
    label: "Web Development",
    icon: Globe2,
    className: "left-0 top-20",
  },
  {
    label: "Custom Dashboards",
    icon: Layers3,
    className: "right-0 top-44",
  },
  {
    label: "Mobile Applications",
    icon: Smartphone,
    className: "bottom-24 left-5",
  },
  {
    label: "Creative Technology",
    icon: Code2,
    className: "bottom-5 right-0",
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-190 items-center overflow-hidden bg-background pb-20 pt-24 md:min-h-212.5 md:pt-32"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage: "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      {/* Gradient background glow */}
      <div className="pointer-events-none absolute -right-40 top-10 -z-10 h-125 w-125 rounded-full bg-brand-purple/15 blur-[130px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-100 w-100 rounded-full bg-brand-blue/15 blur-[120px]" />

      <div className="container-width grid items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <div className="relative z-10">

          {/* Main Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-2xl text-3xl leading-[1.2] font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-[58px]"
          >
            We Build
            <RotatingText />
            <span className="mt-2 block">that solves real</span>
            <span className="relative inline-block">
              Businesses problems.
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-2 left-0 h-1.25 w-full origin-left rounded-full bg-linear-to-r from-brand-purple via-brand-blue to-brand-cyan"
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 max-w-xl text-base leading-8 text-muted md:text-lg"
          >
            From stunning websites to powerful web applications and custom
            business dashboards, we transform your ideas into innovative digital
            solutions that help your business grow.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-linear-to-r from-brand-purple via-brand-blue to-brand-cyan px-7 py-4 font-semibold text-white shadow-xl shadow-brand-purple/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-blue/30"
            >
              Start Your Project
              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="#services"
              className="group inline-flex items-center gap-3 rounded-full border border-border bg-surface px-7 py-4 font-semibold text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple hover:text-brand-purple"
            >
              Explore Services
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-border pt-7"
          >
            {[
              "Creative Solutions",
              "Modern Technology",
              "Business Focused",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-cyan" />
                <span className="text-xs font-medium text-muted md:text-sm">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto flex aspect-square w-full max-w-130 items-center justify-center"
        >
          {/* Orbital rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[90%] w-[90%] rounded-full border border-brand-purple/20"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[72%] w-[72%] rounded-full border border-dashed border-brand-cyan/30"
          />

          {/* Central gradient sphere */}
          <motion.div
            animate={{
              y: [0, -18, 0],
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex h-[55%] w-[55%] items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-brand-purple via-brand-blue to-brand-cyan shadow-[0_0_100px_rgba(73,56,245,0.35)]"
          >
            <div className="absolute inset-3 rounded-full border border-white/20" />

            <div className="absolute inset-0 bg-linear-to-tr from-white/20 via-transparent to-transparent" />

            <div className="relative">
              <Image
                src={monogram}
                alt="SridharNova Technologies"
                width="200"
                height="200"
                priority
                className=""
              />
            </div>
          </motion.div>

          {/* Floating technology tags */}
          {floatingTags.map((tag, index) => {
            const Icon = tag.icon;

            return (
              <motion.div
                key={tag.label}
                animate={{
                  y: [0, index % 2 === 0 ? -12 : 12, 0],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                className={`absolute ${tag.className} z-10 flex items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-3 shadow-xl backdrop-blur-xl sm:px-4`}
              >
                <Icon size={17} className="shrink-0 text-brand-purple" />

                <span className="text-[10px] font-semibold text-foreground sm:text-xs">
                  {tag.label}
                </span>
              </motion.div>
            );
          })}

          {/* Decorative particles */}
          <div className="absolute left-[20%] top-[15%] h-3 w-3 rounded-full bg-brand-cyan shadow-[0_0_20px_#00d8d5]" />

          <div className="absolute right-[15%] top-[30%] h-2 w-2 rounded-full bg-brand-purple shadow-[0_0_20px_#bd45ec]" />

          <div className="absolute bottom-[15%] left-[30%] h-2 w-2 rounded-full bg-brand-blue shadow-[0_0_20px_#4938f5]" />
        </motion.div>
      </div>
    </section>
  );
}
