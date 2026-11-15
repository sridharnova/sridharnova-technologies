
"use client";

import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  ShoppingBag,
  PanelsTopLeft,
  LayoutDashboard,
  Smartphone,
  Cloud,
  Sparkles,
  Monitor,
  Layers3,
} from "lucide-react";

const rotatingWords = [
  "digital experiences.",
  "business platforms.",
  "smarter solutions.",
  "ideas into reality.",
];

const services = [
  {
    number: "01",
    title: "Website Design & Development",
    description:
      "Distinctive, responsive websites that communicate your brand, engage visitors and turn interest into meaningful enquiries.",
    tags: ["Business Websites", "Website Redesign", "Landing Pages", "UI/UX Design"],
    icon: PanelsTopLeft,
  },
  {
    number: "02",
    title: "E-commerce Solutions",
    description:
      "Online stores built around your products and customers, with smooth shopping journeys and reliable store functionality.",
    tags: ["Online Stores", "Magento", "Payments", "Store Management"],
    icon: ShoppingBag,
  },
  {
    number: "03",
    title: "Web Applications & Software",
    description:
      "Custom digital products designed around your workflows, business requirements and the way your team works.",
    tags: ["Web Applications", "Custom Software", "API Integration", "Portals"],
    icon: Code2,
  },
  {
    number: "04",
    title: "Dashboards & Business Systems",
    description:
      "Centralised dashboards and management systems that make business information easier to access, understand and manage.",
    tags: ["Admin Dashboards", "Reporting", "Data Management", "Automation"],
    icon: LayoutDashboard,
  },
  {
    number: "05",
    title: "Mobile App Development",
    description:
      "Useful, intuitive mobile experiences that help your customers and teams stay connected wherever they are.",
    tags: ["Android Apps", "iOS Apps", "Cross-platform", "Mobile UI/UX"],
    icon: Smartphone,
  },
  {
    number: "06",
    title: "Cloud & Technical Support",
    description:
      "Practical deployment, hosting and ongoing technical support to help keep your digital products accessible and reliable.",
    tags: ["Cloud Hosting", "AWS", "Deployment", "Maintenance"],
    icon: Cloud,
  },
];

function TypingText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = rotatingWords[wordIndex];
    let delay = deleting ? 35 : 75;

    if (!deleting && typedText === currentWord) {
      delay = 1600;
    }

    const timeout = window.setTimeout(() => {
      if (!deleting) {
        if (typedText.length < currentWord.length) {
          setTypedText(currentWord.slice(0, typedText.length + 1));
        } else {
          setDeleting(true);
        }
      } else if (typedText.length > 0) {
        setTypedText(typedText.slice(0, -1));
      } else {
        setDeleting(false);
        setWordIndex((previous) => (previous + 1) % rotatingWords.length);
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [typedText, deleting, wordIndex]);

  return (
    <span className="inline-flex min-h-[1.15em] items-center text-brand-gold">
      {typedText}
      <motion.span
        aria-hidden="true"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.85, repeat: Infinity }}
        className="ml-1 inline-block h-[0.85em] w-[2px] bg-brand-gold"
      />
    </span>
  );
}

/* 3D tilt surface with cursor-following glow */
function TiltSurface({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setPointer({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });

    setTilt({
      x: ((y / rect.height) - 0.5) * -5,
      y: ((x / rect.width) - 0.5) * 5,
    });

    setActive(true);
  }

  function resetTilt() {
    setTilt({ x: 0, y: 0 });
    setActive(false);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      onFocus={() => setActive(true)}
      onBlur={resetTilt}
      className={`group relative h-full ${className}`}
      style={{
        perspective: "1100px",
      }}
    >
      <div
        className="relative h-full overflow-hidden rounded-[inherit] transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Cursor-following gold glow */}
        <div
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: active ? 1 : 0,
            background: `radial-gradient(320px circle at ${pointer.x}% ${pointer.y}%, rgba(198,166,107,0.17), transparent 70%)`,
          }}
        />

        {children}
      </div>
    </div>
  );
}

/* Reusable animated icon */
function FloatingIcon({
  children,
  large = false,
}: {
  children: ReactNode;
  large?: boolean;
}) {
  return (
    <motion.div
      animate={{ y: [0, -7, 0], rotate: [0, 2, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.12, rotate: -8 }}
      className={`relative flex items-center justify-center rounded-2xl border border-brand-gold/25 bg-brand-gold/[0.09] text-brand-gold transition-colors duration-300 group-hover:bg-brand-gold group-hover:text-white ${
        large ? "h-16 w-16" : "h-14 w-14"
      }`}
    >
      {children}
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-background py-10 sm:py-10 lg:py-12"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -left-48 top-40 h-[420px] w-[420px] rounded-full bg-brand-gold/[0.06] blur-[130px]" />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-[35%] h-[480px] w-[480px] rounded-full bg-brand-gold/[0.05] blur-[140px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container-width relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 grid gap-8 lg:mb-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
        >
          <div>
            <div className="mb-7 flex items-center gap-3">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px bg-brand-gold"
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                What we do
              </span>
            </div>

            <h2 className="max-w-[850px] text-[clamp(2.65rem,5.6vw,5.3rem)] font-semibold leading-[1.04] tracking-[-0.065em] text-foreground">
              We turn ideas into
              <br />
              <TypingText />
            </h2>
          </div>

          <div className="max-w-[470px] lg:justify-self-end">
            <p className="text-base leading-8 text-muted sm:text-[17px]">
              From your first website to a complete business platform, we bring
              design, technology and thoughtful engineering together to create
              digital solutions that move your business forward.
            </p>

            <Link
              href="#contact"
              className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-brand-gold"
            >
              Let&apos;s discuss your project
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-brand-gold group-hover:bg-brand-gold group-hover:text-white">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Featured full-width service cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {services.slice(0, 2).map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 65, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="min-h-[370px]"
              >
                <TiltSurface className="rounded-[28px]">
                  <div className="relative flex h-full min-h-[370px] flex-col justify-between overflow-hidden rounded-[28px] border border-border bg-surface p-7 transition-colors duration-500 group-hover:border-brand-gold/50 sm:p-10">
                    {/* Light sweep */}
                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.10] to-transparent"
                      animate={{ x: ["0%", "500%"] }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Animated orbit rings */}
                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-brand-gold/15"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-5 -top-10 h-52 w-52 rounded-full border border-brand-gold/20"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute right-16 top-16 h-2 w-2 rounded-full bg-brand-gold shadow-[0_0_18px_rgba(198,166,107,0.9)]"
                      animate={{
                        x: [0, -55, -85, 0],
                        y: [0, 65, 110, 0],
                      }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="relative z-10 flex items-center justify-between">
                      <FloatingIcon large>
                        <Icon size={29} strokeWidth={1.5} />
                      </FloatingIcon>

                      <span className="font-mono text-xs tracking-widest text-muted">
                        / {service.number}
                      </span>
                    </div>

                    <div className="relative z-10 mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                      <div className="max-w-[450px]">
                        <h3 className="text-3xl font-semibold leading-tight tracking-[-0.05em] text-foreground sm:text-4xl">
                          {service.title}
                        </h3>

                        <p className="mt-4 max-w-[420px] text-sm leading-7 text-muted sm:text-base">
                          {service.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-border px-3 py-1.5 text-[10px] tracking-wide text-muted transition-all duration-300 group-hover:border-brand-gold/30 group-hover:text-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Animated visual composition */}
                      <div className="relative hidden h-44 w-44 shrink-0 items-center justify-center sm:flex">
                        <motion.div
                          className="absolute h-40 w-40 rounded-full border border-dashed border-brand-gold/30"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />

                        <motion.div
                          className="absolute h-28 w-28 rounded-full border border-brand-gold/30"
                          animate={{
                            scale: [1, 1.18, 1],
                            opacity: [0.35, 0.8, 0.35],
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                        />

                        <motion.div
                          className="relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-3xl bg-brand-gold text-white shadow-[0_15px_50px_rgba(198,166,107,0.3)]"
                          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Icon size={34} strokeWidth={1.4} />
                        </motion.div>

                        <motion.div
                          className="absolute right-3 top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-brand-gold/20 bg-surface text-brand-gold shadow-lg"
                          animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <Sparkles size={16} />
                        </motion.div>

                        <motion.div
                          className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-xl border border-brand-gold/20 bg-surface text-brand-gold shadow-lg"
                          animate={{ y: [0, 8, 0], rotate: [0, -10, 0] }}
                          transition={{ duration: 3.5, repeat: Infinity }}
                        >
                          <Layers3 size={16} />
                        </motion.div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-10 right-10 h-[2px] origin-left scale-x-0 bg-brand-gold transition-transform duration-700 group-hover:scale-x-100" />
                  </div>
                </TiltSurface>
              </motion.div>
            );
          })}
        </div>

        {/* Four compact service cards */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.slice(2).map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="min-h-[340px]"
              >
                <TiltSurface className="rounded-[26px]">
                  <div className="relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-[26px] border border-border bg-surface p-7 transition-colors duration-500 group-hover:border-brand-gold/50">
                    {/* Ambient glow */}
                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-brand-gold/[0.10] blur-3xl"
                      animate={{
                        scale: [0.8, 1.25, 0.8],
                        opacity: [0.25, 0.7, 0.25],
                      }}
                      transition={{
                        duration: 7 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Light sweep */}
                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
                      animate={{ x: ["0%", "500%"] }}
                      transition={{
                        duration: 8 + index,
                        repeat: Infinity,
                        repeatDelay: 4,
                        ease: "easeInOut",
                      }}
                    />

                    <div className="relative z-10 flex items-center justify-between">
                      <FloatingIcon>
                        <Icon size={25} strokeWidth={1.5} />
                      </FloatingIcon>

                      <span className="font-mono text-xs text-muted">
                        / {service.number}
                      </span>
                    </div>

                    <div className="relative z-10 mt-9">
                      <h3 className="text-xl font-semibold leading-tight tracking-[-0.04em] text-foreground">
                        {service.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-muted">
                        {service.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-auto flex items-center justify-between pt-8">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-gold">
                        Explore service
                      </span>

                      <motion.div
                        whileHover={{ rotate: 45, scale: 1.12 }}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors duration-300 group-hover:border-brand-gold group-hover:bg-brand-gold group-hover:text-white"
                      >
                        <ArrowUpRight size={16} />
                      </motion.div>
                    </div>

                    <div className="absolute bottom-0 left-7 right-7 h-[2px] origin-left scale-x-0 bg-brand-gold transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                </TiltSurface>
              </motion.div>
            );
          })}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative mt-8 overflow-hidden rounded-[26px] border border-brand-gold/20 bg-[#202126] px-7 py-9 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-12"
        >
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-28 h-64 w-64 rounded-full border border-brand-gold/15"
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          />

          <div className="pointer-events-none absolute -right-5 -top-16 h-44 w-44 rounded-full border border-brand-gold/15" />

          <div className="relative z-10">
            <div className="mb-3 flex items-center gap-2 text-brand-gold">
              <motion.span
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles size={15} />
              </motion.span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">
                Have something in mind?
              </span>
            </div>

            <h3 className="!text-white text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              Let&apos;s create something meaningful.
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/60">
              Tell us what you&apos;re looking to build. We&apos;ll help you explore the
              right digital solution for your business.
            </p>
          </div>

          <Link
            href="#contact"
            className="group relative z-10 mt-7 inline-flex shrink-0 items-center gap-3 rounded-full bg-brand-gold px-6 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1 lg:mt-0"
          >
            Start a conversation
            <ArrowDownRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
