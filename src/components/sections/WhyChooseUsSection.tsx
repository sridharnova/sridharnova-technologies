
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Target,
  Palette,
  Code2,
  Headphones,
  Search,
  Lightbulb,
  Rocket,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import TypingHeading from "@/components/common/TypingHeading";

const benefits = [
  {
    icon: Target,
    title: "Business-Focused Solutions",
    description:
      "We understand your business goals and build digital solutions designed to create real value and support your growth.",
  },
  {
    icon: Palette,
    title: "Creative & Modern Design",
    description:
      "We create clean, modern, and user-friendly experiences that make your brand stand out.",
  },
  {
    icon: Code2,
    title: "Technology That Fits",
    description:
      "From websites to custom dashboards, we choose the right technologies for your business requirements.",
  },
  {
    icon: Headphones,
    title: "Reliable Support",
    description:
      "Our relationship does not end at launch. We are here to support, improve, and grow with your business.",
  },
];

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "We start by understanding your business, goals, challenges, and project requirements.",
    detail: "Understand your vision",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Design",
    description:
      "We transform your ideas into creative layouts and user-friendly experiences.",
    detail: "Plan the experience",
  },
  {
    number: "03",
    icon: Code2,
    title: "Develop",
    description:
      "We build responsive, secure, and scalable digital solutions using the right technology.",
    detail: "Bring ideas to life",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deliver",
    description:
      "We test, launch, and support your solution so your business can move forward.",
    detail: "Launch with confidence",
  },
];

export default function WhyChooseUsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-brand-purple/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-brand-cyan/10 blur-[120px]" />

      <div className="container-width relative z-10">
        {/* Why Choose Us */}
        <div className="mx-auto max-w-5xl text-center">
          <motion.span
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-purple/30 bg-brand-purple/10 px-4 py-2 text-sm font-semibold text-brand-purple"
          >
            <span className="h-2 w-2 rounded-full bg-brand-cyan" />
            WHY SRIDHARNOVA
          </motion.span>

          <h2 className="mt-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl">
            More Than Technology. {" "}
            <TypingHeading
              text="A Partner in Growth."
              speed={55}
              className="gradient-text"
            />
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
            We combine creativity, technology, and business understanding to
            build digital experiences that help businesses move forward.
          </p>
        </div>

        {/* Benefits cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 45, scale: 0.95 }
                }
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  shouldReduceMotion ? undefined : { y: -8, scale: 1.02 }
                }
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-colors duration-300 hover:border-brand-purple/60 hover:shadow-[0_15px_45px_rgba(189,69,236,0.12)]"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-purple/10 blur-3xl transition-all duration-500 group-hover:bg-brand-cyan/20" />

                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { rotate: 12, scale: 1.12 }
                  }
                  transition={{ duration: 0.3 }}
                  className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple transition-colors duration-300 group-hover:bg-brand-purple group-hover:text-white"
                >
                  <Icon size={27} strokeWidth={1.8} />
                </motion.div>

                <h3 className="relative text-xl font-bold text-foreground">
                  {benefit.title}
                </h3>

                <p className="relative mt-3 text-sm leading-7 text-muted">
                  {benefit.description}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-brand-gradient transition-all duration-500 group-hover:w-20" />
              </motion.div>
            );
          })}
        </div>

        {/* How We Work */}
        <div className="mt-32">
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-4 py-2 text-sm font-semibold text-brand-cyan"
            >
              <span className="h-2 w-2 rounded-full bg-brand-purple" />
              OUR PROCESS
            </motion.span>

            <h2 className="mt-6 text-3xl leading-tight font-bold tracking-tight md:text-5xl">
              From Your Idea to {""}
              <TypingHeading
                text="Digital Reality."
                speed={55}
                className="gradient-text"
              />
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
              A simple and transparent process that turns your vision into a
              powerful digital solution.
            </p>
          </div>

          {/* Process cards */}
          <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Connecting line on desktop */}
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-12 hidden h-px bg-linear-to-r from-brand-purple/20 via-brand-blue/60 to-brand-cyan/20 lg:block" />

            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: 55, scale: 0.94 }
                  }
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.16,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -10, scale: 1.02 }
                  }
                  className="group relative rounded-2xl border border-border bg-surface p-7 transition-colors duration-300 hover:border-brand-purple/60 hover:shadow-[0_18px_50px_rgba(73,56,245,0.14)]"
                >
                  {/* Number and icon */}
                  <div className="relative z-10 flex items-center justify-between">
                    <motion.div
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : { rotate: 12, scale: 1.12 }
                      }
                      transition={{ duration: 0.35 }}
                      className="flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-purple/20 bg-background text-brand-purple shadow-sm transition-all duration-300 group-hover:border-brand-purple group-hover:bg-brand-purple group-hover:text-white"
                    >
                      <Icon size={29} strokeWidth={1.8} />
                    </motion.div>

                    <span className="text-4xl font-black text-brand-purple/15 transition-colors duration-300 group-hover:text-brand-purple/40">
                      {step.number}
                    </span>
                  </div>

                  {/* Card content */}
                  <h3 className="mt-8 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-brand-purple">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {step.description}
                  </p>

                  {/* Bottom detail */}
                  <div className="mt-7 flex items-center gap-2 border-t border-border pt-5 text-sm font-semibold text-foreground">
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-brand-cyan"
                    />
                    <span>{step.detail}</span>
                  </div>

                  {/* Hover arrow */}
                  <motion.div
                    initial={false}
                    animate={
                      shouldReduceMotion
                        ? {}
                        : { x: 0, opacity: 0.5 }
                    }
                    whileHover={
                      shouldReduceMotion ? undefined : { x: 5, opacity: 1 }
                    }
                    className="absolute bottom-7 right-7 text-brand-purple"
                  >
                    <ArrowRight size={19} />
                  </motion.div>

                  {/* Hover gradient line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-brand-gradient transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 rounded-3xl border border-brand-purple/20 bg-surface p-8 text-center md:p-12"
        >
          <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
            Have an idea? Let&apos;s make it happen.
          </h3>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-muted">
            Tell us about your project, and let&apos;s create something meaningful
            for your business.
          </p>

          <a
            href="#contact"
            className="gradient-background mt-8 inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-bold text-white shadow-lg shadow-brand-purple/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-purple/30"
          >
            Let&apos;s Discuss Your Project
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
