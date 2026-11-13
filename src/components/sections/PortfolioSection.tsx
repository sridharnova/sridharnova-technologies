
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Globe2,
  ShoppingBag,
  Smartphone,
  Code2,
  Sparkles,
} from "lucide-react";

const categories = [
  "All",
  "Websites",
  "Dashboards",
  "E-commerce",
  "Applications",
] as const;

type Category = (typeof categories)[number];

const projects = [
  {
    number: "01",
    title: "Corporate Website",
    category: "Websites" as Category,
    description:
      "A modern business website concept focused on brand identity, responsive layouts and lead generation.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    kind: "website",
    label: "Website Design",
  },
  {
    number: "02",
    title: "Business Management Dashboard",
    category: "Dashboards" as Category,
    description:
      "A dashboard concept for managing business operations, analytics and important performance indicators.",
    technologies: ["React", "Python", "PostgreSQL"],
    kind: "dashboard",
    label: "Custom Dashboard",
  },
  {
    number: "03",
    title: "E-commerce Store",
    category: "E-commerce" as Category,
    description:
      "An online store concept with product discovery, shopping experiences and a streamlined checkout interface.",
    technologies: ["Magento", "React", "MySQL"],
    kind: "ecommerce",
    label: "E-commerce",
  },
  {
    number: "04",
    title: "Mobile Application",
    category: "Applications" as Category,
    description:
      "A mobile app concept designed around simple navigation and convenient customer experiences.",
    technologies: ["Ionic", "Angular", "API"],
    kind: "mobile",
    label: "Mobile App",
  },
  {
    number: "05",
    title: "CRM Management System",
    category: "Dashboards" as Category,
    description:
      "A CRM concept for organizing customer information, tracking opportunities and managing business relationships.",
    technologies: ["Next.js", "FastAPI", "PostgreSQL"],
    kind: "crm",
    label: "CRM Solution",
  },
  {
    number: "06",
    title: "Web Application Platform",
    category: "Applications" as Category,
    description:
      "A scalable web application concept with structured workflows and a clean user interface.",
    technologies: ["React", "Python", "REST API"],
    kind: "webapp",
    label: "Web Application",
  },
];

function ProjectPreview({ kind }: { kind: string }) {
  return (
    <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-2xl bg-[#10101d] p-5">
      <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-brand-purple/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-brand-blue/20 blur-3xl" />

      {kind === "website" && (
        <div className="relative w-full max-w-sm rounded-xl border border-white/10 bg-[#191927] p-3 shadow-2xl">
          <div className="mb-4 flex items-center justify-between">
            <div className="h-2 w-16 rounded-full bg-linear-to-br from-brand-purple to-brand-cyan" />
            <div className="flex gap-2">
              <div className="h-1.5 w-8 rounded bg-white/30" />
              <div className="h-1.5 w-8 rounded bg-white/30" />
              <div className="h-1.5 w-8 rounded bg-white/30" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="py-3">
              <div className="h-3 w-full rounded bg-white/80" />
              <div className="mt-2 h-2 w-4/5 rounded bg-white/30" />
              <div className="mt-4 h-6 w-20 rounded-md bg-linear-to-br from-brand-purple to-brand-blue" />
            </div>
            <div className="flex items-center justify-center rounded-lg bg-linear-to-br from-brand-purple/40 to-brand-cyan/20">
              <Globe2 className="h-12 w-12 text-white/80" />
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="h-8 rounded bg-white/10" />
            <div className="h-8 rounded bg-white/10" />
            <div className="h-8 rounded bg-white/10" />
          </div>
        </div>
      )}

      {(kind === "dashboard" || kind === "crm") && (
        <div className="relative flex w-full max-w-sm gap-2 rounded-xl border border-white/10 bg-[#191927] p-3 shadow-2xl">
          <div className="w-10 shrink-0 space-y-3 border-r border-white/10 pr-2">
            <div className="h-5 rounded bg-linear-to-br from-brand-purple to-brand-blue" />
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-2 rounded bg-white/15" />
            ))}
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-3 h-2 w-24 rounded bg-white/70" />
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="rounded bg-white/10 p-2">
                  <div className="h-1.5 w-full rounded bg-white/30" />
                  <div className="mt-2 h-3 w-3/4 rounded bg-brand-cyan/70" />
                </div>
              ))}
            </div>
            <div className="mt-3 flex h-20 items-end gap-2 rounded bg-white/5 p-3">
              {[35, 60, 45, 85, 55, 95, 70].map((height, index) => (
                <div
                  key={index}
                  style={{ height: `${height}%` }}
                  className="flex-1 rounded-t bg-linear-to-t from-brand-purple to-brand-cyan"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {kind === "ecommerce" && (
        <div className="relative w-full max-w-sm rounded-xl border border-white/10 bg-[#191927] p-3 shadow-2xl">
          <div className="mb-4 flex items-center justify-between">
            <div className="h-2 w-16 rounded bg-white/70" />
            <ShoppingBag className="h-4 w-4 text-brand-cyan" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((item) => (
              <div key={item}>
                <div className="flex h-20 items-center justify-center rounded-lg bg-linear-to-br from-brand-purple/30 to-brand-cyan/20">
                  <ShoppingBag className="h-7 w-7 text-white/70" />
                </div>
                <div className="mt-2 h-1.5 w-4/5 rounded bg-white/60" />
                <div className="mt-1 h-1.5 w-1/2 rounded bg-white/20" />
              </div>
            ))}
          </div>
        </div>
      )}

      {(kind === "mobile" || kind === "webapp") && (
        <div className="relative flex items-center justify-center gap-5">
          <div className="w-28 rounded-[22px] border-[3px] border-white/30 bg-[#191927] p-2 shadow-2xl">
            <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-white/30" />
            <div className="flex h-24 items-center justify-center rounded-xl bg-linear-to-br from-brand-purple/60 to-brand-cyan/30">
              <Smartphone className="h-9 w-9 text-white" />
            </div>
            <div className="mt-3 h-2 rounded bg-white/50" />
            <div className="mt-2 h-2 w-3/4 rounded bg-white/20" />
            <div className="mt-3 h-5 rounded-md bg-linear-to-r from-brand-purple to-brand-blue" />
          </div>
          <div className="space-y-3">
            <Code2 className="h-8 w-8 text-brand-cyan" />
            <div className="h-2 w-16 rounded bg-white/30" />
            <div className="h-2 w-12 rounded bg-white/20" />
          </div>
        </div>
      )}

      <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-medium text-white/70">
        <Sparkles size={11} />
        Concept Preview
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-10 md:py-12"
    >
      <div className="container-width">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="text-sm font-bold tracking-[0.25em] text-brand-purple uppercase">
            Our Work
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            Ideas Into{" "}
            <span className="gradient-text">Digital Experiences.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-muted md:text-lg">
            Explore examples of digital experiences and solutions that
            demonstrate what we can create for your business.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "gradient-background border-transparent text-white"
                  : "border-border bg-surface text-muted hover:border-brand-purple hover:text-brand-purple"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <motion.div layout className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.number}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group rounded-3xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-2 hover:border-brand-purple/60 hover:shadow-xl hover:shadow-brand-purple/5"
              >
                <ProjectPreview kind={project.kind} />

                <div className="px-3 pb-4 pt-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold tracking-wider text-brand-purple uppercase">
                      {project.label}
                    </span>
                    <span className="text-xs font-semibold text-muted/60">
                      / {project.number}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-3 min-h-20 text-sm leading-7 text-muted">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-border px-3 py-1.5 text-xs text-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-brand-purple"
                  >
                    Discuss a Similar Project
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-lg font-semibold">
            Have an idea? Let&apos;s turn it into reality.
          </p>

          <Link
            href="#contact"
            className="gradient-background mt-6 inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-bold text-white transition-transform hover:scale-105"
          >
            Start Your Project
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
