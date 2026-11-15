
import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About Us | SridharNova Technologies",
  description:
    "Discover SridharNova Technologies, a digital solutions company building modern websites, web applications, custom dashboards, and mobile experiences.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      <div className="pt-20">
        <AboutSection />
      </div>

      <Footer />
    </main>
  );
}