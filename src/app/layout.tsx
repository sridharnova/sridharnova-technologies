
import type { Metadata } from "next";
import ThemeProvider from "@/components/providers/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SridharNova Technologies | Digital Solutions",
    template: "%s | SridharNova Technologies",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  description:
    "SridharNova Technologies builds modern websites, web applications, custom dashboards, mobile applications and e-commerce solutions.",
  keywords: [
    "SridharNova Technologies",
    "Website Development",
    "Web Application",
    "ReactJS",
    "NextJS",
    "Custom Dashboard",
    "E-commerce Development",
  ],
  metadataBase: new URL("https://sridharnova.com"),
  openGraph: {
    title: "SridharNova Technologies",
    description:
      "Transforming ideas into powerful digital experiences.",
    url: "https://sridharnova.com",
    siteName: "SridharNova Technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
