"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  Compass,
  Handshake,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Target,
    title: "Built around your goals",
    description:
      "We begin by understanding your business, challenges and ambitions. Every decision is guided by what matters to your success.",
    tags: ["Business-focused", "Purpose-driven"],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Thoughtful, tailored solutions",
    description:
      "No one-size-fits-all approach. We create digital solutions shaped around your requirements, customers and future growth.",
    tags: ["Custom-built", "Scalable"],
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Clear communication",
    description:
      "Stay informed and involved throughout the journey with honest conversations, clear updates and collaborative decisions.",
    tags: ["Transparent", "Collaborative"],
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Quality beyond launch",
    description:
      "We focus on more than delivery. Usability, reliability and maintainability matter just as much as the final launch.",
    tags: ["Quality-focused", "Growth-ready"],
  },
];

const commitments = [
  "A solution shaped around your business",
  "A clear and collaborative development journey",
  "Technology selected with purpose",
  "A partner focused on long-term value",
];

export default function WhyChooseUsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-choose-us"
      className="relative overflow-clip bg-background py-10 sm:py-10 lg:py-12"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-brand-gold/[0.07] blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-brand-gold/[0.06] blur-[120px]" />

      <div className="container-width relative">
        {/* Introduction */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-brand-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-gold">
                The SridharNova difference
              </span>
            </div>

            <h2 className="max-w-[650px] text-[clamp(2.7rem,5.4vw,5rem)] font-semibold leading-[1.02] tracking-[-0.065em] text-foreground">
              Not just a service.
              <br />
              <span className="text-brand-gold">A partner in progress.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-[570px] lg:justify-self-end"
          >
            <p className="text-lg leading-8 text-muted sm:text-xl">
              Great technology starts with understanding people. We bring
              thoughtful strategy, purposeful design and reliable development
              together to create solutions that move your business forward.
            </p>

            <Link
              href="#contact"
              className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-brand-gold"
            >
              Let&apos;s talk about your goals
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-brand-gold group-hover:bg-brand-gold group-hover:text-white">
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Sticky stacking cards */}

        {/* Two-pair scroll cards */}
        <div className="relative mt-20 sm:mt-24">
          <div className="mb-8 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Why partner with us
            </span>
            <span className="text-xs text-muted">
              Four reasons. One partnership.
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {[reasons.slice(0, 2), reasons.slice(2, 4)].map(
              (pair, pairIndex) => (
                <motion.div
                  key={pairIndex}
                  initial={{ opacity: 0, y: 110 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.9,
                    delay: pairIndex * 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="grid content-start gap-6"
                >
                  {pair.map((reason, index) => {
                    const Icon = reason.icon;

                    return (
                      <motion.article
                        key={reason.number}
                        whileHover={{
                          y: -8,
                          transition: { duration: 0.3 },
                        }}
                        className="group relative min-h-[300px] overflow-hidden rounded-[26px] border border-border bg-surface p-7 shadow-[0_15px_45px_rgba(0,0,0,0.05)] transition-shadow duration-500 hover:shadow-[0_25px_65px_rgba(0,0,0,0.10)] sm:p-9"
                      >
                        <span className="pointer-events-none absolute -right-2 -top-10 text-[150px] font-semibold leading-none tracking-[-0.1em] text-brand-gold/[0.055]">
                          {reason.number}
                        </span>

                        <div className="relative flex items-center justify-between">
                          <span className="font-mono text-sm tracking-widest text-brand-gold">
                            / {reason.number}
                          </span>

                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-gold/30 bg-brand-gold/[0.08] text-brand-gold transition-all duration-500 group-hover:rotate-[-8deg] group-hover:bg-brand-gold group-hover:text-white">
                            <Icon size={25} strokeWidth={1.5} />
                          </div>
                        </div>

                        <div className="relative mt-9">
                          <h3 className="max-w-[420px] text-2xl font-semibold tracking-[-0.045em] text-foreground transition-colors duration-300 group-hover:text-brand-gold sm:text-3xl">
                            {reason.title}
                          </h3>

                          <p className="mt-4 max-w-[450px] text-sm leading-7 text-muted">
                            {reason.description}
                          </p>

                          <div className="mt-6 flex flex-wrap gap-2">
                            {reason.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-muted"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <motion.div
                          className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-brand-gold"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                      </motion.article>
                    );
                  })}
                </motion.div>
              ),
            )}
          </div>
        </div>

        {/* Commitment panel */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-20 overflow-hidden rounded-[28px] bg-[#17191E] px-7 py-10 text-white sm:mt-24 sm:px-12 sm:py-14 lg:px-16 lg:py-16"
        >
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-[#C6A66B]/20" />
          <div className="pointer-events-none absolute -right-8 -top-20 h-64 w-64 rounded-full border border-[#C6A66B]/15" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#C6A66B]/10 blur-[100px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <Sparkles size={17} className="text-[#C6A66B]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C6A66B]">
                  What you can expect
                </span>
              </div>

              <h3 className="!text-white max-w-[550px] text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.055em]">
                Your vision deserves
                <span className="text-[#C6A66B]"> more than ordinary.</span>
              </h3>

              <p className="mt-6 max-w-[470px] text-sm leading-7 text-white/60 sm:text-base">
                We believe the best outcomes come from a strong partnership. One
                built on shared goals, thoughtful decisions and a commitment to
                doing meaningful work.
              </p>

              <Link
                href="#contact"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#C6A66B] px-6 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
              >
                Start a conversation
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="relative">
              <div className="mb-7 flex items-center gap-3">
                <Handshake size={19} className="text-[#C6A66B]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                  Our commitment
                </span>
              </div>

              <div className="space-y-5">
                {commitments.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={reduceMotion ? false : { opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C6A66B]/15 text-[#C6A66B]">
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                    <p className="text-sm leading-6 text-white/75">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-5 right-6 hidden text-[#C6A66B]/30 sm:block">
            <Compass size={42} strokeWidth={0.8} />
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            Thoughtful technology. Meaningful progress.
          </p>

          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-brand-gold"
          >
            Work with SridharNova
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
