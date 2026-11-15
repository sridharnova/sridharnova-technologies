"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Sparkles,
  Star,
  MessageSquareQuote,
} from "lucide-react";

const testimonials = [
  {
    id: "01",
    quote:
      "The team understood our vision and transformed our ideas into a digital experience that feels professional, intuitive and aligned with our business goals.",
    name: "Client Name",
    role: "Business Owner",
    company: "Company Name",
    initials: "CN",
  },
  {
    id: "02",
    quote:
      "From the initial concept to the final experience, the attention to detail and focus on usability made the entire process feel smooth and collaborative.",
    name: "Client Name",
    role: "Founder",
    company: "Company Name",
    initials: "CN",
  },
  {
    id: "03",
    quote:
      "We wanted a solution that could grow with our business. The approach was thoughtful, the communication was clear and the result reflected what we had in mind.",
    name: "Client Name",
    role: "Business Director",
    company: "Company Name",
    initials: "CN",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 text-brand-gold">
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.4, rotate: -25 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          <Star size={14} fill="currentColor" strokeWidth={1.5} />
        </motion.span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-background py-10 sm:py-10 lg:py-12"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-brand-gold/[0.055] blur-[130px]" />

      <motion.div
        className="pointer-events-none absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-brand-gold/[0.045] blur-[140px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <div className="container-width relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-brand-gold" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
              Client Experiences
            </span>
            <span className="h-px w-9 bg-brand-gold" />
          </div>

          <h2 className="mx-auto max-w-[800px] text-[clamp(2.6rem,5.5vw,5rem)] font-semibold leading-[1.05] tracking-[-0.065em] text-foreground">
            Built on trust.
            <br />
            <span className="font-serif font-normal italic text-brand-gold">Driven by experiences.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[560px] text-sm leading-8 text-muted sm:text-base">
            Great digital partnerships go beyond delivering a project. They
            create experiences, solve challenges and build lasting value.
          </p>
        </motion.div>

        {/* Main testimonial layout */}
        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Featured testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="group relative flex min-h-[440px] flex-col overflow-hidden rounded-[30px] border border-border bg-surface p-7 transition-colors duration-500 hover:border-brand-gold/40 sm:p-10 lg:p-12"
          >
            {/* Decorative quote symbol */}
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, -9, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute right-8 top-8 text-brand-gold/[0.12] sm:right-12 sm:top-10"
            >
              <Quote size={110} strokeWidth={1} />
            </motion.div>

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-brand-gold">
                <MessageSquareQuote size={16} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                  Featured feedback
                </span>
              </div>

              <span className="font-mono text-xs text-muted">01 / 03</span>
            </div>

            <div className="relative z-10 mt-10">
              <StarRating />
            </div>

            <div className="relative z-10 mt-8 flex-1">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, y: 18, filter: "blur(5px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="max-w-[680px] text-[clamp(1.35rem,2.6vw,2.25rem)] font-medium leading-[1.5] tracking-[-0.04em] text-foreground"
                >
                  “{activeTestimonial.quote}”
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="relative z-10 mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id + "-person"}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 12 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10 text-sm font-semibold text-brand-gold">
                    {activeTestimonial.initials}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {activeTestimonial.name}
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      {activeTestimonial.role} · {activeTestimonial.company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider controls */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-white"
                >
                  <ArrowLeft size={17} />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(198,166,107,0.25)]"
                >
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>

            {/* Gold accent line */}
            <div className="absolute bottom-0 left-10 right-10 h-[2px] origin-left scale-x-0 bg-brand-gold transition-transform duration-700 group-hover:scale-x-100" />
          </motion.div>

          {/* Side testimonial cards */}
          <div className="grid gap-5">
            {testimonials.slice(1).map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                type="button"
                onClick={() => setActiveIndex(index + 1)}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -5 }}
                className={`group relative flex min-h-[210px] flex-col overflow-hidden rounded-[26px] border p-7 text-left transition-all duration-500 ${
                  activeIndex === index + 1
                    ? "border-brand-gold/60 bg-brand-gold/[0.07]"
                    : "border-border bg-surface hover:border-brand-gold/40"
                }`}
              >
                <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-brand-gold/[0.06] blur-2xl transition-transform duration-700 group-hover:scale-150" />

                <div className="relative z-10 flex items-center justify-between">
                  <StarRating />
                  <span className="font-mono text-xs text-muted">
                    / 0{index + 2}
                  </span>
                </div>

                <p className="relative z-10 mt-6 flex-1 text-sm leading-7 text-foreground/85">
                  “{testimonial.quote.slice(0, 125)}...”
                </p>

                <div className="relative z-10 mt-6 flex items-center justify-between border-t border-border pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/25 bg-brand-gold/10 text-xs font-semibold text-brand-gold">
                      {testimonial.initials}
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="mt-1 text-[10px] text-muted">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    size={17}
                    className="text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-gold"
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Bottom brand message */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.12, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/25 bg-brand-gold/[0.08] text-brand-gold"
          >
            <Sparkles size={17} />
          </motion.div>

          <p className="text-sm text-muted">
            Every great partnership starts with a conversation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
