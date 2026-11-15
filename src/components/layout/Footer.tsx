
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

const exploreLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Our Work", href: "#portfolio" },
  { label: "Our Process", href: "#process" },
];

const serviceLinks = [
  { label: "Website Design & Development", href: "#services" },
  { label: "E-commerce Solutions", href: "#services" },
  { label: "Web Applications", href: "#services" },
  { label: "Custom Dashboards", href: "#services" },
  { label: "Mobile App Development", href: "#services" },
  { label: "Cloud & Technical Support", href: "#services" },
];

const phoneNumber = "+91 96877 30338";
const whatsappNumber = "919687730338";
const emailAddress = "info@sridharnova.com";

function FooterLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex w-fit items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-brand-gold"
    >
      <span>{label}</span>
      <ArrowUpRight
        size={13}
        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
      />
    </Link>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ x: 5 }}
      transition={{ duration: 0.25 }}
      className="group flex items-start gap-3"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-secondary text-brand-gold transition-all duration-300 group-hover:border-brand-gold/50 group-hover:bg-brand-gold/10">
        {icon}
      </span>

      <span className="min-w-0">
        <span className="mb-1 block text-[11px] uppercase tracking-[0.16em] text-muted">
          {label}
        </span>

        <span className="break-words text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-brand-gold">
          {value}
        </span>
      </span>
    </motion.a>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background text-foreground transition-colors duration-500">

      {/* Ambient background */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-brand-gold/[0.08] blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 left-0 h-[350px] w-[350px] rounded-full bg-brand-gold/[0.06] blur-[120px]" />

      <div className="container-width relative z-10">

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-8 border-b border-border py-16 sm:py-20 lg:flex-row lg:items-center"
        >
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
              <Sparkles size={15} />
              <span>Have a project in mind?</span>
            </div>

            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.06em] text-foreground">
              Let&apos;s build
              <br />
              <span className="text-brand-gold">
                what&apos;s next.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-muted sm:text-base">
              Have an idea or a business challenge? Let&apos;s turn it into
              a digital solution that makes a difference.
            </p>
          </div>

          <Link
            href="#contact"
            className="group inline-flex w-fit items-center gap-4 rounded-full bg-brand-gold px-7 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
          >
            Start a Project

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={17} />
            </span>
          </Link>
        </motion.div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1.1fr_1.1fr] lg:gap-10 lg:py-16">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="#home"
              aria-label="SridharNova Technologies home"
              className="inline-flex"
            >
              <span className="relative block h-[85px] w-[300px] sm:h-[100px] sm:w-[340px]">
                <Image
                  src="/images/monogram.png"
                  alt="SridharNova Technologies"
                  fill
                  priority
                  sizes="340px"
                  className="object-contain object-left "
                />
              </span>
            </Link>

            <p className="mt-5 max-w-[320px] text-sm leading-7 text-muted">
              We create thoughtful digital experiences, powerful
              applications and technology solutions that help
              businesses move forward.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-xs text-muted">
              <span className="h-2 w-2 rounded-full bg-brand-gold shadow-[0_0_12px_rgba(198,166,107,0.7)]" />
              Building possibilities through technology.
            </div>
          </motion.div>

          {/* Explore */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Explore
            </h3>

            <div className="flex flex-col items-start gap-4">
              {exploreLinks.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              What We Do
            </h3>

            <div className="flex flex-col items-start gap-4">
              {serviceLinks.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </div>
          </motion.div>

          {/* Get in Touch */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Get in Touch
            </h3>

            <div className="flex flex-col gap-6">
              <ContactItem
                icon={<Phone size={17} />}
                label="Call / WhatsApp"
                value={phoneNumber}
                href={`https://wa.me/${whatsappNumber}`}
                external
              />

              <ContactItem
                icon={<Mail size={17} />}
                label="Email Us"
                value={emailAddress}
                href={`mailto:${emailAddress}`}
              />

              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-secondary text-brand-gold">
                  <MapPin size={17} />
                </span>

                <span>
                  <span className="mb-1 block text-[11px] uppercase tracking-[0.16em] text-muted">
                    Location
                  </span>

                  <span className="text-sm leading-6 text-muted">
                    India
                    <br />
                    Working worldwide
                  </span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-border py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} SridharNova Technologies.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-xs text-muted">
              Designed with purpose. Built with technology.
            </span>

            <Link
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-white"
            >
              <ArrowRight className="-rotate-90" size={17} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
