
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Globe2,
  LayoutDashboard,
  ShoppingBag,
  Smartphone,
  Monitor,
} from "lucide-react";

const services = [
  "Website Design",
  "E-commerce Website",
  "Custom Dashboard",
  "Web Application",
  "Mobile App",
  "Website Redesign",
];

const slides = [
  {
    id: 1,
    title: "Website Design",
    subtitle: "Digital experiences that make an impression.",
    category: "01 / DIGITAL PRESENCE",
    video: "/videos/home_slider_video_1.mp4",
    icon: Globe2,
  },
  {
    id: 2,
    title: "E-commerce",
    subtitle: "Online stores designed for modern businesses.",
    category: "02 / ONLINE COMMERCE",
    video: "/videos/home_slider_video_3.mp4",
    icon: ShoppingBag,
  },
  {
    id: 3,
    title: "Custom Dashboards",
    subtitle: "Powerful platforms built around your workflow.",
    category: "03 / BUSINESS SOFTWARE",
    video: "/videos/home_slider_video_5.mp4",
    icon: LayoutDashboard,
  },
];

const trustPoints = [
  "Business-focused solutions",
  "Thoughtful digital experiences",
  "Built to grow with you",
];

function TypingText() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = services[serviceIndex];

    let delay = deleting ? 38 : 85;

    if (!deleting && displayText === currentText) {
      delay = 1500;
    }

    if (deleting && displayText === "") {
      delay = 350;
    }

    const timer = window.setTimeout(() => {
      if (!deleting && displayText === currentText) {
        setDeleting(true);
      } else if (deleting && displayText === "") {
        setDeleting(false);
        setServiceIndex((previous) => (previous + 1) % services.length);
      } else if (deleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [displayText, deleting, serviceIndex]);

  return (
    <span className="inline-flex min-h-[1.25em] items-center text-brand-gold">
      {displayText}
      <span className="ml-1 inline-block h-[0.85em] w-0.5 animate-pulse bg-brand-gold" />
    </span>
  );
}

function VideoShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [paused]);

  const currentSlide = slides[activeSlide];
  const ActiveIcon = currentSlide.icon;

  return (
    <div
      className="relative mx-auto w-full max-w-180"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      {/* Decorative background */}
      <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-brand-gold/10 blur-[100px]" />
      <div className="absolute -bottom-12 -left-10 h-64 w-64 rounded-full bg-brand-gold/10 blur-[100px]" />

      {/* Top label */}
      <div className="relative mb-5 flex items-center justify-between px-1">
        <span className="text-[10px] tracking-widest text-muted">
          0{activeSlide + 1} / 03
        </span>
      </div>

      {/* Video frame */}
      <div className="group relative overflow-hidden rounded-[20px] border border-border bg-[#17191E] shadow-[0_30px_90px_rgba(0,0,0,0.20)] sm:rounded-[28px]">
        {/* Browser header */}
        <div className="relative z-20 flex h-12 items-center justify-between border-b border-white/10 bg-[#202329] px-4 sm:h-14 sm:px-6">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#D77E72]" />
            <span className="h-2 w-2 rounded-full bg-[#D8B66E]" />
            <span className="h-2 w-2 rounded-full bg-[#80A98A]" />
          </div>

          <div className="flex h-7 w-[45%] items-center justify-center rounded-md border border-white/10 bg-white/5 text-[9px] tracking-wide text-white/45">
            sridharnova.com / showcase
          </div>

          <div className="flex items-center gap-2 text-white/50">
            <Monitor size={13} />
          </div>
        </div>

        {/* Video */}
        <div className="relative aspect-16/10 overflow-hidden bg-[#17191E] sm:aspect-video">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, scale: 1.035 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <video
                key={currentSlide.video}
                src={currentSlide.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />

              {/* Premium overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-black/15" />

              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full border border-white/25 bg-white/10 p-2 backdrop-blur-md">
                    <ActiveIcon size={15} className="text-[#E4C991]" />
                  </span>
                  <span className="text-[9px] font-semibold tracking-[0.2em] text-white/65">
                    {currentSlide.category}
                  </span>
                </div>

                <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">
                  {currentSlide.title}
                </h2>

                <p className="mt-2 max-w-95 text-xs leading-6 text-white/65 sm:text-sm">
                  {currentSlide.subtitle}
                </p>
              </div>

              <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[9px] tracking-widest text-white/80 backdrop-blur-md">
                SRIDHARNOVA
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom controls */}
        <div className="relative z-20 flex items-center justify-between gap-3 bg-[#202329] px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Show ${slide.title}`}
                aria-pressed={activeSlide === index}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? "w-9 bg-[#C6A66B]"
                    : "w-3 bg-white/25 hover:bg-white/55"
                }`}
              />
            ))}

            <span className="ml-2 hidden text-[9px] tracking-widest text-white/40 sm:block">
              EXPLORE OUR CAPABILITIES
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-brand-gold hover:text-brand-gold"
            >
              <ArrowLeft size={15} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-brand-gold hover:text-brand-gold"
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background pb-14 pt-32 sm:pb-10 sm:pt-40 lg:min-h-205"
    >
      {/* Subtle background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute left-0 top-32 h-72 w-72 rounded-full bg-brand-gold/5 blur-[110px]" />

      <div className="container-width relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-150"
          >
            {/* Eyebrow */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-9 bg-brand-gold" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-gold">
                SridharNova Technologies
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(2rem,4.5vw,4.35rem)] font-semibold leading-[1.02] tracking-[-0.075em] text-foreground">
              We build digital
              <br />
              experiences that
              <br />
              move business.
            </h1>

            {/* Typing service line */}
            <div className="mt-7 min-h-10.5 text-2xl font-bold tracking-tight sm:text-6xl font-serif italic">
              <TypingText />
            </div>

            {/* Description */}
            <p className="mt-6 max-w-113.75 text-sm leading-8 text-muted sm:text-base">
              We turn ideas into meaningful digital experiences through
              thoughtful design, powerful development and technology that
              helps businesses move forward.
            </p>

            {/* CTA buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#contact"
                className="group inline-flex min-h-13.5 items-center justify-center gap-4 rounded-full bg-brand-gold px-7 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(176,140,77,0.2)] transition-transform duration-300 hover:-translate-y-1"
              >
                Start a Project
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="#portfolio"
                className="group inline-flex min-h-13.5 items-center justify-center gap-3 rounded-full border border-border px-7 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-brand-gold"
              >
                Explore Our Work
                <ArrowRight
                  size={16}
                  className="text-brand-gold transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Trust points */}
            <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:flex-wrap sm:gap-x-5">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-[10px] font-medium text-muted sm:text-[11px]"
                >
                  <Check size={13} className="shrink-0 text-brand-gold" />
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right video slider */}
          <div className="relative z-10 px-1 py-4 sm:px-5 lg:px-0">
            <VideoShowcase />
          </div>
        </div>

        {/* Capabilities strip */}
        <div className="mt-28 border-t border-border pt-7 lg:mt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                What we create
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                Complete digital capabilities.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-7 gap-y-4">
              {[
                { name: "Websites", icon: Globe2 },
                { name: "E-commerce", icon: ShoppingBag },
                { name: "Dashboards", icon: LayoutDashboard },
                { name: "Web Apps", icon: Code2 },
                { name: "Mobile Apps", icon: Smartphone },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 text-xs font-medium text-muted transition-colors hover:text-brand-gold"
                  >
                    <Icon size={15} className="text-brand-gold" />
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
