
"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Play,
  Pause,
  Sparkles,
  MoveUpRight,
} from "lucide-react";

const AUTOPLAY_DELAY = 6500;

const slides = [
  {
    number: "01",
    title: "NsightBiz",
    category: "Business Intelligence Platform",
    description:
      "A digital platform concept for capital improvement planning, project management and financial visibility. Designed to make complex business information easier to understand.",
    tags: ["Next.js", "React", "Python", "PostgreSQL"],
    mediaType: "image",
    media: "/images/work/nsightbiz-dashboard.jpg",
    alt: "NsightBiz dashboard preview",
    eyebrow: "Intelligent business systems",
  },
  {
    number: "02",
    title: "Digital Commerce",
    category: "E-commerce Experience",
    description:
      "A considered shopping experience combining engaging product presentation, intuitive navigation and responsive interactions.",
    tags: ["React", "E-commerce", "Responsive UI"],
    mediaType: "video",
    media: "/videos/ecommerce.mp4",
    alt: "E-commerce website preview",
    eyebrow: "Commerce without complexity",
  },
  {
    number: "03",
    title: "Creative Presence",
    category: "Website Design & Development",
    description:
      "A distinctive digital experience built around strong visual storytelling, elegant layouts and thoughtful interactions.",
    tags: ["Next.js", "Tailwind CSS", "Motion"],
    mediaType: "video",
    media: "/videos/website-design.mp4",
    alt: "Website design preview",
    eyebrow: "Digital experiences that connect",
  },
  {
    number: "04",
    title: "Business Dashboard",
    category: "Custom Dashboard & Analytics",
    description:
      "A structured workspace that brings business information together through clear interfaces, useful insights and intuitive data visualisation.",
    tags: ["React", "Python", "Dashboard UI"],
    mediaType: "video",
    media: "/videos/dashboard.mp4",
    alt: "Business dashboard preview",
    eyebrow: "Clarity through technology",
  },
];

type Slide = (typeof slides)[number];

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const activeSlide = slides[activeIndex];

  const goToSlide = useCallback(
    (index: number) => {
      if (index === activeIndex) return;

      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex],
  );

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % slides.length);
  }, []);

  const previousSlide = useCallback(() => {
    setDirection(-1);
    setActiveIndex((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(nextSlide, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-52 top-20 size-[500px] rounded-full bg-brand-gold/[0.08] blur-[150px]" />
      <div className="pointer-events-none absolute -right-52 bottom-0 size-[500px] rounded-full bg-brand-gold/[0.06] blur-[150px]" />

      <div className="container-width relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end"
        >
          <div className="max-w-[760px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-brand-gold" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                A closer look at what we create
              </span>
            </div>

            <h2 className="text-[clamp(3rem,7vw,6.3rem)] font-semibold leading-[0.91] tracking-[-0.08em] text-foreground">
              Selected
              <br />
              <span className="font-serif font-normal italic text-brand-gold">
                experiences.
              </span>
            </h2>
          </div>

          <div className="max-w-[330px] md:pb-2">
            <p className="text-sm leading-7 text-muted sm:text-base">
              Thoughtful design. Purposeful technology. Digital work created
              to move ideas forward.
            </p>
            <div className="mt-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-gold">
              <Sparkles size={14} />
              Explore our work
            </div>
          </div>
        </motion.div>

        {/* Main showcase */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
              setIsPaused(false);
            }
          }}
        >
          <div className="grid min-h-[570px] overflow-hidden rounded-[30px] border border-border bg-surface shadow-[var(--card-shadow)] lg:grid-cols-[1.45fr_0.75fr]">
            {/* LEFT — cinematic project preview */}
            <div className="relative min-w-0 p-3 sm:p-5 lg:p-6">
              <div className="group relative h-full min-h-[360px] overflow-hidden rounded-[23px] bg-[#17191e] sm:min-h-[480px] lg:min-h-[570px]">
                {/* Ambient visual glow */}
                <div className="pointer-events-none absolute -left-20 top-20 z-10 size-64 rounded-full bg-brand-gold/20 blur-[100px]" />

                {/* Top browser details */}
                <div className="absolute inset-x-0 top-0 z-30 flex h-11 items-center justify-between border-b border-white/10 bg-[#17191e]/90 px-4 backdrop-blur-xl sm:px-6">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-[#e77b70]" />
                    <span className="size-2 rounded-full bg-[#d9b66f]" />
                    <span className="size-2 rounded-full bg-[#7caf83]" />
                  </div>

                  <div className="flex h-6 w-[48%] items-center justify-center rounded-md border border-white/[0.06] bg-white/[0.06] px-3">
                    <span className="truncate text-[8px] tracking-wider text-white/40">
                      SRIDHARNOVA / DIGITAL SHOWCASE
                    </span>
                  </div>

                  <span className="text-[9px] tracking-widest text-white/40">
                    {activeSlide.number} — 0{slides.length}
                  </span>
                </div>

                {/* Animated project media */}
                <AnimatePresence mode="sync">
                  <motion.div
                    key={activeSlide.number}
                    initial={{
                      opacity: 0,
                      x: direction * 65,
                      scale: 1.06,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      x: direction * -45,
                      scale: 0.98,
                    }}
                    transition={{
                      duration: 0.75,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 overflow-hidden pt-11"
                  >
                    {activeSlide.mediaType === "image" ? (
                      <Image
                        src={activeSlide.media}
                        alt={activeSlide.alt}
                        fill
                        priority={activeIndex === 0}
                        sizes="(max-width: 1024px) 100vw, 65vw"
                        className="object-cover object-top"
                      />
                    ) : (
                      <video
                        key={activeSlide.media}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label={activeSlide.alt}
                        className="absolute inset-0 size-full object-cover object-top"
                      >
                        <source
                          src={activeSlide.media}
                          type="video/mp4"
                        />
                      </video>
                    )}

                    {/* Cinematic overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/10" />

                    <motion.div
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.6 }}
                      className="absolute bottom-7 left-6 right-6 z-10 sm:bottom-10 sm:left-10"
                    >
                      <span className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.25em] text-[#e1c58e]">
                        {activeSlide.eyebrow}
                      </span>
                      <p className="max-w-[440px] text-2xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-4xl">
                        {activeSlide.title}
                      </p>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Floating media badge */}
                <div className="absolute left-5 top-[58px] z-30 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-[8px] font-semibold tracking-[0.16em] text-white backdrop-blur-xl">
                  {activeSlide.mediaType === "video" ? (
                    <Play size={10} fill="currentColor" />
                  ) : (
                    <Sparkles size={11} />
                  )}
                  {activeSlide.mediaType === "video"
                    ? "MOTION SHOWCASE"
                    : "PROJECT PREVIEW"}
                </div>

                {/* Decorative vertical index */}
                <div className="absolute bottom-9 right-5 z-20 hidden flex-col items-center gap-2 sm:flex">
                  <span className="h-10 w-px bg-white/40" />
                  <span className="text-[9px] tracking-[0.25em] text-white/70 [writing-mode:vertical-rl]">
                    SELECTED WORK
                  </span>
                </div>

                {/* Image frame accent */}
                <div className="pointer-events-none absolute inset-0 z-20 rounded-[23px] ring-1 ring-inset ring-white/10 transition-all duration-700 group-hover:ring-brand-gold/40" />
              </div>
            </div>

            {/* RIGHT — editorial project details */}
            <div className="relative flex min-w-0 flex-col justify-between px-6 pb-7 pt-6 sm:px-9 sm:pb-9 sm:pt-9 lg:px-10 lg:py-11">
              <div className="pointer-events-none absolute right-[-80px] top-20 size-64 rounded-full bg-brand-gold/[0.06] blur-[90px]" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                    Featured work
                  </span>

                  <span className="font-serif text-5xl italic text-brand-gold/30">
                    {activeSlide.number}
                  </span>
                </div>

                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeSlide.number + "-content"}
                    initial={{
                      opacity: 0,
                      y: 25,
                      x: direction * 18,
                    }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{
                      opacity: 0,
                      y: -15,
                      x: direction * -15,
                    }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-9"
                  >
                    <span className="text-[9px] font-semibold uppercase tracking-[0.19em] text-muted">
                      {activeSlide.category}
                    </span>

                    <h3 className="mt-5 max-w-[400px] text-[clamp(2.4rem,4vw,4rem)] font-semibold leading-[0.95] tracking-[-0.075em] text-foreground">
                      {activeSlide.title}
                      <span className="text-brand-gold">.</span>
                    </h3>

                    <div className="mt-7 h-px w-14 bg-brand-gold" />

                    <p className="mt-7 max-w-[390px] text-sm leading-7 text-muted">
                      {activeSlide.description}
                    </p>

                    <div className="mt-8">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted">
                        Technologies & capabilities
                      </span>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {activeSlide.tags.map((tag, index) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.12 + index * 0.07 }}
                            className="rounded-full border border-border bg-surface-secondary px-3 py-2 text-[9px] font-medium text-muted transition-colors duration-300 hover:border-brand-gold/50 hover:text-brand-gold"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="relative mt-12">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-brand-gold px-6 py-3.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(176,140,77,0.22)]"
                >
                  Create something together
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                {/* Navigation */}
                <div className="mt-10 border-t border-border pt-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted">
                      Navigate projects
                    </span>

                    <span className="text-xs tabular-nums text-foreground">
                      <span className="text-brand-gold">
                        0{activeIndex + 1}
                      </span>
                      <span className="mx-1 text-muted">/</span>
                      0{slides.length}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={previousSlide}
                      aria-label="Previous project"
                      className="grid size-10 shrink-0 place-items-center rounded-full border border-border text-foreground transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-white"
                    >
                      <ArrowLeft size={15} />
                    </button>

                    <div className="flex flex-1 items-center gap-2">
                      {slides.map((slide, index) => (
                        <button
                          key={slide.number}
                          type="button"
                          onClick={() => goToSlide(index)}
                          aria-label={`View ${slide.title}`}
                          aria-current={
                            activeIndex === index ? "true" : undefined
                          }
                          className="group relative h-8 flex-1"
                        >
                          <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 overflow-hidden rounded-full bg-border transition-colors group-hover:bg-brand-gold/30">
                            {activeIndex === index && (
                              <motion.span
                                key={activeIndex}
                                initial={{ scaleX: 0 }}
                                animate={{
                                  scaleX: isPaused ? 0.35 : 1,
                                }}
                                transition={{
                                  duration: isPaused
                                    ? 0.2
                                    : AUTOPLAY_DELAY / 1000,
                                  ease: "linear",
                                }}
                                className="absolute inset-0 origin-left rounded-full bg-brand-gold"
                              />
                            )}
                          </span>
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={nextSlide}
                      aria-label="Next project"
                      className="grid size-10 shrink-0 place-items-center rounded-full border border-border text-foreground transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-white"
                    >
                      <ArrowRight size={15} />
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[9px] text-muted">
                      {isPaused ? "Showcase paused" : "Discover the next project"}
                    </span>

                    <button
                      type="button"
                      onClick={() => setIsPaused((value) => !value)}
                      className="inline-flex items-center gap-1.5 text-[9px] font-semibold text-muted transition-colors hover:text-brand-gold"
                    >
                      {isPaused ? (
                        <>
                          <Play size={11} /> Resume
                        </>
                      ) : (
                        <>
                          <Pause size={11} /> Pause
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-9 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center"
        >
          <p className="text-xs leading-6 text-muted">
            Have an idea worth bringing to life? Let&apos;s make it happen.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-brand-gold transition-colors hover:text-foreground"
          >
            Start a project
            <MoveUpRight
              size={14}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
