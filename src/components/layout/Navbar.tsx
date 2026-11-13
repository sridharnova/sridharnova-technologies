"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import BrandLogo from "@/components/common/BrandLogo";
import ThemeToggle from "@/components/common/ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl"
      >
        <nav className="container-width flex h-20.5 items-center justify-between">
          {/* Company Logo */}
          <Link
            href="#home"
            aria-label="SridharNova Technologies Home"
            onClick={closeMenu}
            className="shrink-0"
          >
            <BrandLogo
              width={190}
              height={65}
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative py-2 text-sm font-medium text-muted transition-colors hover:text-brand-purple"
              >
                {link.name}

                <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-linear-to-r from-brand-purple via-brand-blue to-brand-cyan transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <ThemeToggle />

            <Link
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-linear-to-r from-brand-purple via-brand-blue to-brand-cyan px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-purple/30"
            >
              Let&apos;s Talk
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface transition-colors hover:border-brand-purple hover:text-brand-purple"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-20.5 z-40 border-b border-border bg-background/95 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <div className="container-width flex flex-col gap-2 py-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface hover:text-brand-purple"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <Link
                href="#contact"
                onClick={closeMenu}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-brand-purple via-brand-blue to-brand-cyan px-6 py-4 font-semibold text-white"
              >
                Let&apos;s Talk
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
