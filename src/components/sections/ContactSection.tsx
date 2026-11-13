
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  CheckCircle2,
  Mail,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import TypingHeading from "@/components/common/TypingHeading";

const services = [
  "Website Design",
  "Website Redesign",
  "Custom Dashboard Development",
  "Dashboard Redesign",
  "Web Application Development",
  "Mobile Application Development",
  "E-commerce Development",
  "Website Hosting",
  "Other",
];

const budgets = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
  "Not sure yet",
];

const countries = [
  { name: "India", code: "+91" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Australia", code: "+61" },
  { name: "Canada", code: "+1" },
  { name: "United Arab Emirates", code: "+971" },
  { name: "Germany", code: "+49" },
  { name: "France", code: "+33" },
  { name: "Singapore", code: "+65" },
  { name: "Other", code: "+" },
];

const initialForm = {
  fullName: "",
  email: "",
  company: "",
  countryCode: "+91",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

type FormErrors = Partial<Record<keyof typeof initialForm, string>>;

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your business email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Please enter your company name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[0-9\s()-]{7,18}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select your project budget.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us a little about your project.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please enter at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      setSubmitted(false);
      return;
    }

    // Frontend-only validation.
    // Connect this form to the backend in a later step.
    setSubmitted(true);
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted/70 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15";

  const labelClass = "text-sm font-semibold text-foreground";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-purple/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-brand-cyan/10 blur-[130px]" />

      <div className="container-width relative z-10">
        {/* Section heading */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-purple/30 bg-brand-purple/10 px-4 py-2 text-sm font-semibold text-brand-purple">
              <Sparkles size={15} />
              LET&apos;S CONNECT
            </span>
          </motion.div>

          <h2 className="mt-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl">
            <TypingHeading
              text="Let's Build Something Great Together."
              speed={55}
              className="gradient-text"
            />
          </h2>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg"
          >
            Have an idea, a project, or a challenge to solve? Tell us what
            you&apos;re planning. We&apos;d love to explore how we can help your
            business grow.
          </motion.p>
        </div>

        {/* Contact layout */}
        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left information panel */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-[#10101e] p-8 text-white md:p-10"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-purple/30 blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-cyan/20 blur-[90px]" />

            <div className="relative z-10">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                Start a Conversation
              </span>

              <h3 className="mt-5 text-3xl leading-tight font-bold md:text-4xl">
                Your next big idea starts with a conversation.
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/65">
                Whether you need a new website, a custom dashboard, or a
                complete digital solution, we&apos;re ready to hear about it.
              </p>

              <div className="my-10 h-px bg-white/15" />

              <div className="space-y-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-cyan">
                    <MessageSquare size={21} />
                  </div>
                  <div>
                    <p className="font-semibold">Tell Us Your Idea</p>
                    <p className="mt-1 text-sm leading-6 text-white/55">
                      +91 96877 30338
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-cyan">
                    <Phone size={21} />
                  </div>
                  <div>
                    <p className="font-semibold">Discuss Your Goals</p>
                    <p className="mt-1 text-sm leading-6 text-white/55">
                      +91 70697 69868
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-cyan">
                    <Mail size={21} />
                  </div>
                  <div>
                    <p className="font-semibold">Plan Your Project</p>
                    <p className="mt-1 text-sm leading-6 text-white/55">
                      info@sridharnova.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-white">
                  Let&apos;s create something meaningful.
                </p>
                <p className="mt-2 text-xs leading-6 text-white/50">
                  Thoughtful design. Smart technology. Business-focused
                  solutions.
                </p>

                <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-linear-to-r from-brand-purple via-brand-blue to-brand-cyan" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-border bg-surface p-6 shadow-xl shadow-brand-purple/5 md:p-10"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground">
                Tell Us About Your Project
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Fill in the details below and let&apos;s get started.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Full name */}
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full Name <span className="text-brand-purple">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors.fullName && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Business email */}
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Business Email <span className="text-brand-purple">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Company name */}
                <div>
                  <label htmlFor="company" className={labelClass}>
                    Company Name <span className="text-brand-purple">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors.company && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.company}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number <span className="text-brand-purple">*</span>
                  </label>

                  <div className="mt-2 flex gap-2">
                    <select
                      name="countryCode"
                      aria-label="Country calling code"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="w-28 shrink-0 rounded-xl border border-border bg-background px-2 py-3.5 text-sm text-foreground outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15"
                    >
                      {countries.map((country) => (
                        <option key={country.name} value={country.code}>
                          {country.code} ({country.name})
                        </option>
                      ))}
                    </select>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel-national"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="min-w-0 flex-1 rounded-xl border border-border bg-background px-3 py-3.5 text-sm text-foreground outline-none transition-all placeholder:text-muted/70 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15"
                    />
                  </div>

                  {errors.phone && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className={labelClass}>
                    Service Required{" "}
                    <span className="text-brand-purple">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className={labelClass}>
                    Project Budget{" "}
                    <span className="text-brand-purple">*</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select your budget</option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.budget}
                    </p>
                  )}
                </div>

                {/* Project details */}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClass}>
                    Project Details{" "}
                    <span className="text-brand-purple">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project, goals, features, timeline, or anything else we should know..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-y`}
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Success message */}
              {submitted && (
                <div
                  role="status"
                  className="mt-6 flex items-start gap-3 rounded-xl border border-brand-cyan/30 bg-brand-cyan/10 p-4"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-brand-cyan"
                  />
                  <div>
                    <p className="font-semibold text-foreground">
                      Form validation successful!
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      Your details are ready. The form is not connected to a
                      server yet, so no enquiry has been sent.
                    </p>
                  </div>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                className="gradient-background mt-8 flex w-full items-center justify-center gap-3 rounded-xl px-7 py-4 text-sm font-bold text-white shadow-lg shadow-brand-purple/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-purple/30 sm:w-auto"
              >
                Submit Enquiry
                <Send size={17} />
              </button>

              <p className="mt-4 text-xs leading-6 text-muted">
                Fields marked with * are required. Your enquiry will be
                connected to our backend in a later development step.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
