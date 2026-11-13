
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Mail,
  Sparkles,
} from "lucide-react";
import BrandLogo from "@/components/common/BrandLogo";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Projects", href: "#projects" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Website Design",
  "Website Redesign",
  "Custom Dashboard",
  "Web Application",
  "Mobile Application",
  "E-commerce Development",
  "Website Hosting",
];

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface pt-10">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-brand-purple/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-brand-cyan/10 blur-[120px]" />

      <div className="container-width relative z-10">

        {/* Top CTA */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative -mt-1 overflow-hidden rounded-3xl border border-brand-purple/20 bg-background p-8 shadow-xl shadow-brand-purple/5 md:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-purple/10 blur-[90px]" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple">
                <Sparkles size={16} />
                HAVE A PROJECT IN MIND?
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Let&apos;s turn your vision into reality.
              </h2>

              <p className="mt-4 leading-7 text-muted">
                Let&apos;s discuss your next digital project and create something
                that moves your business forward.
              </p>
            </div>

            <Link
              href="#contact"
              className="gradient-background inline-flex shrink-0 items-center gap-3 rounded-full px-7 py-4 text-sm font-bold text-white shadow-lg shadow-brand-purple/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-purple/30"
            >
              Start a Project
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

        {/* Main footer */}
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Company information */}
          <div>
            <Link href="#home" aria-label="SridharNova Technologies home">
              <BrandLogo
                width={220}
                height={90}
                className="h-auto w-47.5 object-contain object-left"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
              We build modern websites, powerful web applications, custom
              dashboards, and digital experiences that help businesses grow.
            </p>

            <a
              href="mailto:info@sridharnova.com"
              className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-brand-purple"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-brand-purple">
                <Mail size={17} />
              </span>
              info@sridharnova.com
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-base font-bold text-foreground">
              Quick Links
            </h3>

            <ul className="mt-7 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-muted transition-all duration-300 hover:translate-x-1 hover:text-brand-purple"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple/50 transition-colors group-hover:bg-brand-cyan" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold text-foreground">
              Our Services
            </h3>

            <ul className="mt-7 space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="group inline-flex items-center gap-2 text-sm text-muted transition-all duration-300 hover:translate-x-1 hover:text-brand-purple"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple/50 transition-colors group-hover:bg-brand-cyan" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold text-foreground">
              Let&apos;s Connect
            </h3>

            <p className="mt-7 text-sm leading-7 text-muted">
              Have questions or want to discuss a project? We&apos;d love to hear
              from you.
            </p>

            <Link
              href="#contact"
              className="group mt-6 inline-flex items-center gap-3 text-sm font-bold text-brand-purple transition-colors hover:text-brand-cyan"
            >
              Contact Our Team
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

            <div className="mt-9 rounded-2xl border border-border bg-background p-5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-cyan" />
                </span>

                <span className="text-xs font-semibold text-foreground">
                  Let&apos;s build something great
                </span>
              </div>

              <p className="mt-3 text-xs leading-6 text-muted">
                Your ideas deserve the right digital partner.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-border py-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-muted">
            © SridharNova Technologies. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#home"
              className="text-xs font-medium text-muted transition-colors hover:text-brand-purple"
            >
              Back to Home
            </Link>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: shouldReduceMotion ? "instant" : "smooth",
                })
              }
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple hover:bg-brand-purple hover:text-white"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
