/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import logoWhite from "../../../public/images/logo_white.png";
import logoBlack from "../../../public/images/logo_black.png";

interface BrandLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function BrandLogo({
  className = "",
}: BrandLogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logo =
    mounted && resolvedTheme === "light"
      ? logoWhite
      : logoBlack;

  return (
    <Image
      src={logo}
      alt="SridharNova Technologies"
      width="250"
      height="250"
      priority
      className={className}
    />
  );
}
