
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Sparkles,
  Workflow,
  Database,
  Cloud,
  Globe2,
  Terminal,
} from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiFastapi,
  SiLaravel,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiStrapi,
  SiGit,
  SiDocker,
} from "react-icons/si";

import { FaAws } from "react-icons/fa6";
import { FaMagento, FaWordpress } from "react-icons/fa";

const categories = [
  { id: "all", label: "All Technologies" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "cms", label: "CMS & Platforms" },
  { id: "cloud", label: "Cloud & Tools" },
];

const technologies = [
  {
    name: "React",
    category: "frontend",
    description: "Interactive user interfaces",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    category: "frontend",
    description: "Modern web applications",
    icon: SiNextdotjs,
    color: "var(--foreground)",
  },
  {
    name: "TypeScript",
    category: "frontend",
    description: "Reliable application code",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    category: "frontend",
    description: "Dynamic web experiences",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    description: "Responsive UI styling",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Python",
    category: "backend",
    description: "Application development",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "FastAPI",
    category: "backend",
    description: "High-performance APIs",
    icon: SiFastapi,
    color: "#009688",
  },
  {
    name: "Laravel",
    category: "backend",
    description: "Backend web development",
    icon: SiLaravel,
    color: "#FF2D20",
  },
  {
    name: "PostgreSQL",
    category: "database",
    description: "Relational data management",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    name: "MySQL",
    category: "database",
    description: "Structured data storage",
    icon: SiMysql,
    color: "#4479A1",
  },
  {
    name: "MongoDB",
    category: "database",
    description: "Flexible document database",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "Magento",
    category: "cms",
    description: "E-commerce platforms",
    icon: FaMagento,
    color: "#EE672F",
  },
  {
    name: "WordPress",
    category: "cms",
    description: "Content-managed websites",
    icon: FaWordpress,
    color: "#21759B",
  },
  {
    name: "Strapi",
    category: "cms",
    description: "Headless content management",
    icon: SiStrapi,
    color: "#4945FF",
  },
  {
    name: "AWS",
    category: "cloud",
    description: "Cloud infrastructure",
    icon: FaAws,
    color: "#FF9900",
  },
  {
    name: "Git",
    category: "cloud",
    description: "Version control",
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "Docker",
    category: "cloud",
    description: "Application containers",
    icon: SiDocker,
    color: "#2496ED",
  },
];

const categoryIcons = {
  frontend: Code2,
  backend: Terminal,
  database: Database,
  cms: Globe2,
  cloud: Cloud,
};

function TypingHeading() {
  const phrases = [
    "The tools behind innovation.",
    "Technology with purpose.",
    "A foundation for growth.",
    "Possibilities into products.",
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timeout = window.setTimeout(() => {
      if (!deleting) {
        if (text.length < currentPhrase.length) {
          setText(currentPhrase.slice(0, text.length + 1));
        } else {
          setDeleting(true);
        }
      } else if (text.length > 0) {
        setText(currentPhrase.slice(0, text.length - 1));
      } else {
        setDeleting(false);
        setPhraseIndex((current) => (current + 1) % phrases.length);
      }
    }, deleting ? 35 : text.length === currentPhrase.length ? 1700 : 65);

    return () => window.clearTimeout(timeout);
  }, [text, deleting, phraseIndex]);

  return (
    <>
      {text}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1 inline-block h-[0.85em] w-[2px] translate-y-[0.08em] bg-brand-gold"
      />
    </>
  );
}

function TechnologyCard({
  technology,
  index,
}: {
  technology: (typeof technologies)[number];
  index: number;
}) {
  const Icon = technology.icon;

  const CategoryIcon =
    categoryIcons[technology.category as keyof typeof categoryIcons];

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: (index % 4) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -9, scale: 1.025 }}
      className="group relative"
    >
      <div className="absolute -inset-px rounded-[22px] bg-gradient-to-br from-brand-gold/0 via-brand-gold/0 to-brand-gold/0 opacity-0 blur-sm transition-all duration-500 group-hover:from-brand-gold/50 group-hover:via-brand-gold/10 group-hover:to-brand-gold/30 group-hover:opacity-100" />

      <div className="relative flex min-h-[190px] flex-col overflow-hidden rounded-[21px] border border-border bg-background p-5 transition-all duration-500 group-hover:border-brand-gold/50 group-hover:shadow-[0_18px_45px_rgba(198,166,107,0.10)] sm:p-6">
        <div
          className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
          style={{ backgroundColor: technology.color }}
        />

        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted">
            {technology.category}
          </span>

          <CategoryIcon
            size={15}
            className="text-muted/60 transition-colors duration-300 group-hover:text-brand-gold"
          />
        </div>

        <div className="relative z-10 mt-7 flex items-center justify-between">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 3 + (index % 3) * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.12,
            }}
            className="flex h-[58px] w-[58px] items-center justify-center rounded-2xl border border-border bg-surface p-3 transition-all duration-500 group-hover:border-brand-gold/30 group-hover:bg-brand-gold/[0.06]"
          >
            <Icon
              size={35}
              style={{ color: technology.color }}
              className="transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>

          <ArrowUpRight
            size={17}
            className="text-muted/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-gold"
          />
        </div>

        <div className="relative z-10 mt-auto pt-6">
          <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
            {technology.name}
          </h3>

          <p className="mt-1.5 text-[11px] leading-5 text-muted">
            {technology.description}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-gold transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
}

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTechnologies =
    activeCategory === "all"
      ? technologies
      : technologies.filter(
          (technology) => technology.category === activeCategory
        );

  const orbitTechnologies = [
    { name: "React", icon: SiReact, color: "#61DAFB", position: "left-[7%] top-[16%]" },
    { name: "Python", icon: SiPython, color: "#3776AB", position: "right-[7%] top-[16%]" },
    { name: "Next.js", icon: SiNextdotjs, color: "var(--foreground)", position: "left-[0%] bottom-[20%]" },
    { name: "AWS", icon: FaAws, color: "#FF9900", position: "right-[0%] bottom-[20%]" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", position: "left-[40%] top-[0%]" },
    { name: "Docker", icon: SiDocker, color: "#2496ED", position: "left-[40%] bottom-[0%]" },
  ];

  return (
    <section
      id="technologies"
      className="relative overflow-hidden bg-background py-24 sm:py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute -left-52 top-20 h-[480px] w-[480px] rounded-full bg-brand-gold/[0.07] blur-[150px]" />

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="pointer-events-none absolute -right-52 bottom-0 h-[500px] w-[500px] rounded-full bg-brand-gold/[0.06] blur-[150px]"
      />

      <div className="container-width relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:items-end"
        >
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-brand-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                Technology Expertise
              </span>
            </div>

            <h2 className="text-[clamp(2.7rem,5.5vw,5.1rem)] font-semibold leading-[1.05] tracking-[-0.065em] text-foreground">
              We work with
              <br />
              <span className="font-serif font-normal italic text-brand-gold">
                <TypingHeading />
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Featured technology visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-7 overflow-hidden rounded-[28px] border border-border bg-surface p-6 sm:p-9 lg:p-11"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,166,107,0.09),transparent_55%)]" />

          <div className="relative z-10 grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-5 flex items-center gap-2 text-brand-gold">
                <Sparkles size={17} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.23em]">
                  Our approach
                </span>
              </div>

              <h3 className="max-w-[430px] text-3xl font-semibold leading-tight tracking-[-0.05em] text-foreground sm:text-4xl">
                Every layer.
                <br />
                <span className="text-brand-gold">Working together.</span>
              </h3>

              <p className="mt-5 max-w-[390px] text-sm leading-7 text-muted">
                From the interface your customers see to the systems
                powering your business, we bring every part of your
                technology ecosystem together.
              </p>
            </div>

            <div className="relative mx-auto flex aspect-square w-full max-w-[440px] items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute h-[92%] w-[92%] rounded-full border border-dashed border-brand-gold/25"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute h-[68%] w-[68%] rounded-full border border-brand-gold/20"
              />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative z-20 flex h-28 w-28 flex-col items-center justify-center rounded-[28px] border border-brand-gold/30 bg-background shadow-[0_15px_50px_rgba(198,166,107,0.13)] sm:h-32 sm:w-32"
              >
                <Layers3 size={33} className="text-brand-gold" />
                <span className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-foreground">
                  SridharNova
                </span>
              </motion.div>

              {orbitTechnologies.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.name}
                    animate={{
                      y: [0, index % 2 === 0 ? -9 : 9, 0],
                      rotate: [0, index % 2 === 0 ? 5 : -5, 0],
                    }}
                    transition={{
                      duration: 3.5 + index * 0.35,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute ${item.position} z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background p-3 shadow-lg sm:h-14 sm:w-14`}
                    title={item.name}
                  >
                    <Icon size={30} style={{ color: item.color }} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Technology collection */}
        <div className="rounded-[28px] border border-border bg-surface p-5 sm:p-8 lg:p-10">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 flex items-center gap-2 text-brand-gold">
                <Workflow size={16} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                  Our technology stack
                </span>
              </div>

              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl">
                Tools that make ideas real.
              </h3>
            </div>

            <span className="text-xs text-muted">
              {filteredTechnologies.length} technologies
            </span>
          </div>

          <div className="mb-9 flex gap-2 overflow-x-auto pb-3">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`shrink-0 rounded-full border px-4 py-3 text-[11px] font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "border-brand-gold bg-brand-gold text-white shadow-[0_6px_20px_rgba(198,166,107,0.2)]"
                    : "border-border bg-background text-muted hover:border-brand-gold/50 hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            >
              {filteredTechnologies.map((technology, index) => (
                <TechnologyCard
                  key={technology.name}
                  technology={technology}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-7 flex flex-col justify-between gap-6 rounded-[26px] border border-brand-gold/20 bg-brand-gold/[0.06] p-6 sm:flex-row sm:items-center sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gold/10 text-brand-gold">
              <Code2 size={23} />
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground">
                Have a technology challenge?
              </h3>

              <p className="mt-2 max-w-[520px] text-xs leading-6 text-muted sm:text-sm">
                Let&apos;s find the right tools and build a solution around
                your business goals.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-brand-gold px-6 py-4 text-xs font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
          >
            Let&apos;s build something
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
