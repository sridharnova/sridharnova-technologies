
"use client";

import { motion } from "motion/react";
import {
  Search,
  ClipboardList,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, audience, challenges and vision. Every great solution begins with the right questions.",
    icon: Search,
    detail: "Understand the vision",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the project scope, essential features, technical approach and timeline to create a clear path forward.",
    icon: ClipboardList,
    detail: "Build the roadmap",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We shape your ideas into intuitive interfaces with thoughtful layouts, refined visuals and user-focused experiences.",
    icon: Palette,
    detail: "Create the experience",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "Our development process turns approved designs into responsive, scalable and functional digital products.",
    icon: Code2,
    detail: "Bring ideas to life",
  },
  {
    number: "05",
    title: "Test & Refine",
    description:
      "We test functionality, responsiveness, usability and performance, refining the details before launch.",
    icon: ShieldCheck,
    detail: "Make it dependable",
  },
  {
    number: "06",
    title: "Launch & Support",
    description:
      "We take your solution live and help keep it running with maintenance, improvements and technical support.",
    icon: Rocket,
    detail: "Grow with confidence",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-20 size-[380px] rounded-full bg-brand-gold/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-[380px] rounded-full bg-brand-gold/[0.05] blur-[120px]" />

      <div className="container-width relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-[760px] text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-brand-gold" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-gold">
              How we work
            </span>
            <span className="h-px w-9 bg-brand-gold" />
          </div>

          <h2 className="text-[clamp(2.7rem,6vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.07em] text-foreground">
            From first idea
            <br />
            to <span className="font-serif font-normal italic text-brand-gold">what&apos;s next.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[520px] text-sm leading-7 text-muted sm:text-base">
            A thoughtful process. Clear communication. Meaningful results.
            Here&apos;s how we bring your digital vision to life.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full origin-top bg-brand-gold"
            />
          </div>

          {/* Mobile connecting line */}
          <div className="absolute bottom-8 left-[19px] top-8 w-px bg-border lg:hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full origin-top bg-brand-gold"
            />
          </div>

          <div className="space-y-7 lg:space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -45 : 45,
                    y: 20,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid grid-cols-[40px_1fr] items-center gap-4 lg:grid-cols-[1fr_90px_1fr] lg:gap-0"
                >
                  {/* Left content */}
                  <div
                    className={`hidden lg:block ${
                      isLeft ? "order-1 pr-12 text-right" : "order-3 pl-12"
                    }`}
                  >
                    {isLeft && (
                      <ProcessCard
                        step={step}
                        Icon={Icon}
                        index={index}
                      />
                    )}
                  </div>

                  {/* Timeline marker */}
                  <div className="relative z-10 order-1 flex justify-center lg:order-2">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      className="grid size-10 place-items-center rounded-full border border-brand-gold/40 bg-background text-brand-gold shadow-[0_0_0_7px_var(--background)] sm:size-12"
                    >
                      <Icon size={19} />
                    </motion.div>
                  </div>

                  {/* Right content / mobile content */}
                  <div
                    className={`order-2 min-w-0 lg:order-3 ${
                      !isLeft ? "lg:order-1 lg:pr-12" : "lg:pl-12"
                    }`}
                  >
                    <div className="lg:hidden">
                      <ProcessCard
                        step={step}
                        Icon={Icon}
                        index={index}
                      />
                    </div>

                    {!isLeft && (
                      <div className="hidden lg:block">
                        <ProcessCard
                          step={step}
                          Icon={Icon}
                          index={index}
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-col items-center justify-between gap-5 rounded-[26px] border border-border bg-surface-secondary/70 px-6 py-8 text-center sm:flex-row sm:text-left sm:px-9"
        >
          <div className="flex items-center gap-4">
            <div className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-gold/10 text-brand-gold">
              <Sparkles size={21} />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                Every great project starts with a conversation.
              </h3>
              <p className="mt-1 text-sm text-muted">
                Have an idea? Let&apos;s explore what&apos;s possible.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-xs font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
          >
            Let&apos;s talk
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  Icon,
  index,
}: {
  step: (typeof steps)[number];
  Icon: typeof Search;
  index: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-[22px] border border-border bg-surface p-5 shadow-[var(--card-shadow)] transition-all duration-500 hover:border-brand-gold/40 sm:p-7"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-brand-gold/[0.06] blur-2xl transition-all duration-500 group-hover:bg-brand-gold/[0.15]" />

      <div className="relative flex items-center justify-between">
        <span className="text-[11px] font-semibold tracking-[0.2em] text-brand-gold">
          STEP {step.number}
        </span>
        <span className="text-xs text-muted/60">
          0{index + 1} / 06
        </span>
      </div>

      <div className="relative mt-5 flex items-center gap-3">
        <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-gold/10 text-brand-gold transition-all duration-500 group-hover:rotate-[-8deg] group-hover:bg-brand-gold group-hover:text-white">
          <Icon size={18} />
        </div>
        <h3 className="text-xl font-semibold tracking-[-0.045em] text-foreground sm:text-2xl">
          {step.title}
        </h3>
      </div>

      <p className="relative mt-4 text-sm leading-7 text-muted">
        {step.description}
      </p>

      <div className="relative mt-6 flex items-center justify-between border-t border-border pt-4">
        <span className="text-[10px] font-medium uppercase tracking-[0.13em] text-muted">
          {step.detail}
        </span>
        <ArrowUpRight
          size={16}
          className="text-brand-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </motion.div>
  );
}
