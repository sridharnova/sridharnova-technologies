
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import BrandLogo from "@/components/common/BrandLogo";
import ThemeToggle from "@/components/common/ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/#projects" },
];

const serviceLinks = [
  { name: "Website Design & Development", href: "/#services" },
  { name: "Web Applications", href: "/#services" },
  { name: "Custom Dashboards & CRM", href: "/#services" },
  { name: "E-commerce Solutions", href: "/#services" },
  { name: "Mobile Applications", href: "/#services" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* Floating Capsule Navbar */}
      <div className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-5">
        <motion.header
          initial={{ y: -25, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            scale: scrolled ? 0.985 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`mx-auto max-w-295 rounded-full border backdrop-blur-2xl transition-all duration-300 ${
            scrolled
              ? "border-border/90 bg-background/95 shadow-xl shadow-black/8 dark:shadow-black/25"
              : "border-border/70 bg-background/85 shadow-lg shadow-black/4 dark:shadow-black/15"
          }`}
        >
          <nav
            className={`flex items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-7 ${
              scrolled ? "h-16.5 sm:h-17.5" : "h-18.5 sm:h-19.5"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              aria-label="SridharNova Technologies Home"
              className="flex shrink-0 items-center"
            >
              <BrandLogo
                width={300}
                height={85}
                className="max-h-11 w-auto object-contain sm:max-h-12.5 lg:max-h-13.5"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-7 lg:flex">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative py-3 text-[13px] font-medium tracking-wide text-foreground/75 transition-colors hover:text-brand-gold-dark dark:hover:text-brand-gold"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-0 h-px w-0 bg-brand-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className="group relative">
                <Link
                  href="/#services"
                  className="flex items-center gap-1.5 py-3 text-[13px] font-medium tracking-wide text-foreground/75 transition-colors hover:text-brand-gold-dark dark:hover:text-brand-gold"
                >
                  Services
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </Link>

                <div className="invisible absolute left-1/2 top-full w-77.5 -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-2xl border border-border bg-surface p-3 shadow-2xl shadow-black/10">
                    <div className="px-3 pb-3 pt-2">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold-dark dark:text-brand-gold">
                        What We Build
                      </p>
                      <p className="mt-1 text-xs text-muted">
                        Digital solutions designed around your business.
                      </p>
                    </div>

                    {serviceLinks.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="group/item flex items-center justify-between rounded-xl px-3 py-3 text-[12px] font-medium text-foreground/80 transition-all hover:bg-surface-secondary hover:text-brand-gold-dark dark:hover:text-brand-gold"
                      >
                        {service.name}
                        <ArrowUpRight
                          size={14}
                          className="opacity-0 transition-all group-hover/item:translate-x-0.5 group-hover/item:opacity-100"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative py-3 text-[13px] font-medium tracking-wide text-foreground/75 transition-colors hover:text-brand-gold-dark dark:hover:text-brand-gold"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-0 h-px w-0 bg-brand-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-4 lg:flex">
              <ThemeToggle />

              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-gold px-5 py-3 text-[12px] font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Let&apos;s Talk
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />

              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </motion.header>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="fixed left-3 right-3 top-22.75 z-50 max-h-[calc(100dvh-110px)] overflow-y-auto rounded-3xl border border-border bg-background p-5 shadow-2xl sm:left-5 sm:right-5 sm:top-26.25 lg:hidden"
            >
              <div className="flex flex-col">
                {navLinks.slice(0, 2).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between border-b border-border/70 py-4 text-base font-medium text-foreground transition-colors hover:text-brand-gold"
                  >
                    {link.name}
                    <ArrowUpRight size={17} className="text-muted" />
                  </Link>
                ))}

                {/* Mobile Services */}
                <div className="border-b border-border/70 py-4">
                  <button
                    type="button"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                    className="flex w-full items-center justify-between text-base font-medium text-foreground"
                  >
                    Services
                    <ChevronDown
                      size={18}
                      className={`text-muted transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-1 pt-3">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={closeMenu}
                              className="rounded-xl px-3 py-3 text-sm text-muted transition-colors hover:bg-surface-secondary hover:text-brand-gold"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.slice(2).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between border-b border-border/70 py-4 text-base font-medium text-foreground transition-colors hover:text-brand-gold"
                  >
                    {link.name}
                    <ArrowUpRight size={17} className="text-muted" />
                  </Link>
                ))}
              </div>

              <Link
                href="/#contact"
                onClick={closeMenu}
                className="mt-6 flex w-full items-center justify-between rounded-full bg-brand-gold px-6 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Let&apos;s Talk
                <ArrowUpRight size={18} />
              </Link>

              <p className="mt-5 text-center text-[11px] tracking-wide text-muted">
                Thoughtful technology. Meaningful business growth.
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}