
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Globe,
  LayoutDashboard,
  Code2,
  Smartphone,
  ShoppingCart,
  Cloud,
} from "lucide-react";

import TypingHeading from "@/components/common/TypingHeading";

const services = [
  {
    number: "01",
    title: "Website Design",
    description:
      "Beautiful, modern and responsive websites that communicate your brand and turn visitors into customers.",
    icon: Globe,
    features: ["Business Websites", "Landing Pages", "Responsive Design"],
  },
  {
    number: "02",
    title: "Website Redesign",
    description:
      "Transform outdated websites into modern digital experiences with better design, usability and performance.",
    icon: LayoutDashboard,
    features: ["UI/UX Improvement", "Modern Layouts", "Performance Focus"],
  },
  {
    number: "03",
    title: "Custom CRM & Dashboards",
    description:
      "Manage business operations with custom dashboards, CRM systems and powerful management solutions.",
    icon: LayoutDashboard,
    features: ["Admin Dashboards", "CRM Systems", "Data Management"],
  },
  {
    number: "04",
    title: "Web Applications",
    description:
      "Build scalable web applications tailored to your workflows, business processes and customer needs.",
    icon: Code2,
    features: ["Custom Applications", "API Integration", "Scalable Solutions"],
  },
  {
    number: "05",
    title: "Mobile Applications",
    description:
      "Create intuitive mobile experiences that help your business connect with customers on the go.",
    icon: Smartphone,
    features: ["Android Apps", "Cross-platform Apps", "Mobile UI/UX"],
  },
  {
    number: "06",
    title: "E-commerce Development",
    description:
      "Launch and grow your online store with secure, user-friendly and conversion-focused e-commerce solutions.",
    icon: ShoppingCart,
    features: ["Online Stores", "Payment Integration", "Store Customization"],
  },
  {
    number: "07",
    title: "Hosting & Maintenance",
    description:
      "Keep your digital presence running with deployment, hosting setup, updates and ongoing technical support.",
    icon: Cloud,
    features: ["Website Deployment", "Hosting Setup", "Maintenance"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-10 md:py-12"
    >
      <div className="container-width">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="text-sm font-bold tracking-[0.25em] text-brand-purple uppercase">
            What We Do
          </span>

          <h2 className="mt-5 text-2xl leading-tight font-bold tracking-tight sm:text-3xl md:text-5xl">
            Digital Solutions{" "}
            <TypingHeading
              text="Built for Growth."
              speed={75}
              className="gradient-text whitespace-nowrap"
            />
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
            From your first website to powerful custom applications,
            we provide digital solutions that help your business move forward.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.12,
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-2 hover:border-brand-purple/60 hover:shadow-xl hover:shadow-brand-purple/5 md:p-8"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-purple/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-brand-purple/15 to-brand-cyan/15 text-brand-purple transition-all duration-300 group-hover:scale-110 group-hover:from-brand-purple group-hover:to-brand-blue group-hover:text-white">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-semibold tracking-widest text-muted/60">
                    / {service.number}
                  </span>
                </div>

                <h3 className="relative mt-8 text-xl font-bold md:text-2xl">
                  {service.title}
                </h3>

                <p className="relative mt-4 flex-1 text-sm leading-7 text-muted">
                  {service.description}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-border px-3 py-1.5 text-xs text-muted"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  href="#contact"
                  aria-label={`Enquire about ${service.title}`}
                  className="relative mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-brand-purple"
                >
                  Discuss this service
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-3xl border border-border bg-surface p-8 text-center md:p-12"
        >
          <h3 className="text-2xl font-bold md:text-3xl">
            Have a project in mind?
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted md:text-base">
            Let&apos;s discuss your requirements and find the right digital
            solution for your business.
          </p>

          <Link
            href="#contact"
            className="gradient-background mt-8 inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-bold text-white transition-transform hover:scale-105"
          >
            Start Your Project
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
