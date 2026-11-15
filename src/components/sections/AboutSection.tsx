"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  Lightbulb,
  Target,
  Eye,
  Layers3,
  Code2,
  Palette,
  Rocket,
} from "lucide-react";

const capabilities = [
  "Website design & development",
  "E-commerce experiences",
  "Custom dashboards & software",
  "Web and mobile applications",
];

const principles = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Think beyond the brief",
    description:
      "We look at the bigger picture, understanding your goals before shaping the right digital solution.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design with purpose",
    description:
      "We bring clarity, usability and visual quality together to create meaningful digital experiences.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build with intention",
    description:
      "We focus on reliable, maintainable technology that supports your business today and as it grows.",
  },
];

const services = [
  { name: "Digital strategy", icon: Target },
  { name: "Experience design", icon: Palette },
  { name: "Technology development", icon: Code2 },
  { name: "Business solutions", icon: Layers3 },
];

function TypingHeading() {
  const phrase = "A partner in progress.";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const timer = window.setInterval(() => {
      index += 1;
      setText(phrase.slice(0, index));

      if (index >= phrase.length) {
        window.clearInterval(timer);
      }
    }, 75);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="text-brand-gold">
      {text}
      <span className="ml-1 inline-block h-[0.85em] w-[2px] translate-y-1 animate-pulse bg-brand-gold" />
    </span>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-24 sm:py-32 lg:py-36"
    >
      {/* Background detail */}
      <div className="pointer-events-none absolute -right-48 top-20 h-[450px] w-[450px] rounded-full border border-brand-gold/10" />
      <div className="pointer-events-none absolute -right-32 top-36 h-[320px] w-[320px] rounded-full border border-brand-gold/10" />

      <div className="container-width relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-brand-gold" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-gold">
              About SridharNova
            </span>
          </div>

          <h2 className="max-w-[850px] text-[clamp(2.5rem,5vw,4.7rem)] font-semibold leading-[1.04] tracking-[-0.065em] text-foreground">
            More than technology.
            <br />
            <TypingHeading />
          </h2>
        </motion.div>

        {/* Image left + introduction right */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Gold decorative frame */}
            <div className="absolute -bottom-4 -right-4 h-[75%] w-[75%] rounded-[26px] border border-brand-gold/40 sm:-bottom-5 sm:-right-5" />

            <div className="relative aspect-[4/4.5] overflow-hidden rounded-[24px] bg-surface-secondary sm:rounded-[30px]">
              <Image
                src="/images/about-team.jpg"
                alt="The team behind SridharNova Technologies"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.04]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#17191E]/75 via-transparent to-transparent" />

              {/* Image caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D9BD85]">
                  SridharNova Technologies
                </span>
                <h3 className="mt-2 max-w-[350px] text-2xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-3xl">
                  Driven by ideas.
                  <br />
                  United by innovation.
                </h3>
              </div>
            </div>

            {/* Floating image label */}
            <div className="absolute -left-3 top-8 flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 shadow-xl sm:-left-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold">
                <Rocket size={17} />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-foreground">
                  Ideas into reality
                </p>
                <p className="mt-0.5 text-[9px] text-muted">
                  Design meets technology
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right introduction */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <p className="text-2xl font-medium leading-[1.45] tracking-[-0.035em] text-foreground sm:text-3xl">
              Every business has a vision. We help turn that vision into
              <span className="text-brand-gold"> digital reality.</span>
            </p>

            <p className="mt-7 text-sm leading-8 text-muted">
              SridharNova Technologies is a digital solutions company focused on
              creating thoughtful, practical and scalable technology
              experiences. From your first website to a custom business
              platform, we bring the design and development expertise needed to
              shape your next digital step.
            </p>

            <p className="mt-4 text-sm leading-8 text-muted">
              We believe successful technology starts with understanding people,
              processes and business goals. That is why we approach every
              solution with a combination of creativity, technical thinking and
              attention to detail.
            </p>

            {/* Capabilities */}
            <div className="mt-9 border-t border-border pt-7">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                What we bring to the table
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {capabilities.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold">
                      <Check size={13} />
                    </span>
                    <span className="text-xs font-medium text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="#services"
              className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-brand-gold"
            >
              Explore our capabilities
              <ArrowUpRight
                size={17}
                className="text-brand-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Our approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mt-28 overflow-hidden rounded-[26px] bg-[#17191E] p-7 text-white sm:p-10 lg:mt-36 lg:p-14"
        >
          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#C6A66B]/20" />
          <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#C6A66B]/15" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#C6A66B]/10 blur-[90px]" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* Left content */}
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C6A66B]">
                Our approach
              </span>

              <h3 className="!text-white mt-7 max-w-[450px] text-4xl font-semibold leading-[1.1] tracking-[-0.06em] sm:text-5xl">
                Good ideas deserve
                <span className="text-[#C6A66B]"> great execution.</span>
              </h3>

              <p className="mt-6 max-w-[390px] text-sm leading-7 text-white/55">
                We connect your business objectives, user experience and
                technology to create digital solutions with purpose.
              </p>
            </div>

            {/* Animated cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 35, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.13,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.025,
                      transition: { duration: 0.3 },
                    }}
                    className="group relative min-h-[125px] cursor-default overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-colors duration-500 hover:border-[#C6A66B]/60 hover:bg-white/[0.075] sm:min-h-[145px] sm:p-5"
                  >
                    {/* Animated gold light */}
                    <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-[#C6A66B]/10 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-[#C6A66B]/0 blur-3xl transition-all duration-500 group-hover:bg-[#C6A66B]/20" />

                    <div className="relative z-10 flex h-full flex-col justify-between gap-7">
                      <div className="flex items-center justify-between">
                        <motion.div
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C6A66B]/20 bg-[#C6A66B]/10 text-[#C6A66B]"
                          whileHover={{ rotate: -8, scale: 1.15 }}
                          transition={{
                            type: "spring",
                            stiffness: 250,
                            damping: 12,
                          }}
                        >
                          <Icon size={20} strokeWidth={1.7} />
                        </motion.div>

                        <span className="text-[10px] tracking-widest text-white/30 transition-colors group-hover:text-[#C6A66B]">
                          0{index + 1}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-medium text-white/80 transition-colors duration-300 group-hover:text-white sm:text-sm">
                          {service.name}
                        </span>

                        <ArrowUpRight
                          size={15}
                          className="shrink-0 text-[#C6A66B] opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom line */}
          <div className="relative z-10 mt-10 flex items-center justify-between border-t border-white/10 pt-6">
            <span className="text-[10px] tracking-wide text-white/45">
              IDEAS INTO DIGITAL REALITY
            </span>
            <Rocket size={18} className="text-[#C6A66B]" />
          </div>
        </motion.div>

        {/* Mission and vision */}
        <div className="mt-24 grid gap-6 border-t border-border pt-12 md:grid-cols-2 lg:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-surface p-7 transition-colors duration-300 hover:border-brand-gold/50 sm:p-9"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
              <Target size={23} />
            </div>

            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
              Our mission
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-foreground">
              Make technology work for people and businesses.
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted">
              Our mission is to deliver useful, intuitive and dependable digital
              solutions that simplify processes, strengthen digital presence and
              help businesses achieve their goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="rounded-2xl border border-border bg-surface p-7 transition-colors duration-300 hover:border-brand-gold/50 sm:p-9"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
              <Eye size={23} />
            </div>

            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
              Our vision
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-foreground">
              Create a more connected digital future.
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted">
              We envision a future where businesses of every size can access
              thoughtful design and dependable technology to innovate, adapt and
              grow with confidence.
            </p>
          </motion.div>
        </div>

        {/* Principles */}
        <div className="mt-24 lg:mt-32">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-gold" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                  Our principles
                </span>
              </div>

              <h3 className="text-3xl font-semibold tracking-[-0.055em] text-foreground sm:text-4xl">
                The way we think.
                <br />
                <span className="text-muted">The way we build.</span>
              </h3>
            </div>

            <p className="max-w-[330px] text-sm leading-7 text-muted">
              Every project is an opportunity to create something useful,
              thoughtful and built with purpose.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.div
                  key={principle.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="group border-t border-border py-7 transition-colors hover:border-brand-gold"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-widest text-brand-gold">
                      {principle.number}
                    </span>
                    <Icon
                      size={20}
                      className="text-muted transition-colors group-hover:text-brand-gold"
                    />
                  </div>

                  <h4 className="mt-9 text-xl font-semibold tracking-tight text-foreground">
                    {principle.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
