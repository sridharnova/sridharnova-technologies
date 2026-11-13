
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  Layers3,
  Lightbulb,
  Rocket,
} from "lucide-react";

import TypingHeading from "@/components/common/TypingHeading";

const highlights = [
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    description:
      "We turn business ideas into thoughtful digital experiences.",
  },
  {
    icon: Code2,
    title: "Modern Development",
    description:
      "We build responsive, scalable and reliable digital solutions.",
  },
  {
    icon: Layers3,
    title: "Custom Solutions",
    description:
      "Every solution is shaped around your business requirements.",
  },
  {
    icon: Rocket,
    title: "Growth Focused",
    description:
      "We focus on usability, performance and business outcomes.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="container-width">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-bold tracking-[0.25em] text-brand-purple uppercase">
              About SridharNova
            </span>

            <h2 className="mt-5 text-4xl leading-tight font-bold tracking-tight md:text-5xl">
              <TypingHeading
                text="Technology that Moves Your Vision Forward."
                speed={55}
                className="gradient-text"
              />
            </h2>

            <p className="mt-7 text-base leading-8 text-muted md:text-lg">
              SridharNova Technologies helps businesses transform ideas into
              powerful digital experiences. From modern websites and custom
              dashboards to web applications, mobile apps and e-commerce
              platforms, we create solutions designed around real business
              needs.
            </p>

            <p className="mt-5 text-base leading-8 text-muted">
              We combine creative thinking, modern technologies and a
              business-focused approach to help brands build, improve and grow
              their digital presence.
            </p>

            <Link
              href="#contact"
              className="gradient-background mt-9 inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              Let&apos;s Discuss Your Project
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          {/* About Highlights */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                  }}
                  className="group rounded-3xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-2 hover:border-brand-purple/60"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-brand-purple/15 to-brand-cyan/15 text-brand-purple transition-transform duration-300 group-hover:scale-110">
                    <Icon size={27} />
                  </div>

                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.description}
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
