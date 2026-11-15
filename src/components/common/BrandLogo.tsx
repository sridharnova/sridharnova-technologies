
"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import logoblack from "../../../public/images/logo_black.png";
import logowhite from "../../../public/images/logo_white.png";

interface BrandLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function BrandLogo({
  width = 220,
  height = 60,
  className = "",
}: BrandLogoProps) {
  const { resolvedTheme } = useTheme();

  // Change these filenames if your assets have different names.
  // Assumption: logo_white is for dark backgrounds and
  // logo_black is for light backgrounds.
  const logo =
    resolvedTheme === "light"
      ? logowhite
      : logoblack;

  return (
    <Image
      src={logo}
      alt="SridharNova Technologies"
      width={width}
      height={height}
      priority
      sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, 220px"
      className={`block h-auto max-h-full w-auto object-contain ${className}`}
    />
  );
}
