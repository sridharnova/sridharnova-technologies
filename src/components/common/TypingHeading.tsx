/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import { useEffect, useRef, useState } from "react";

interface TypingHeadingProps {
  text: string;
  className?: string;
  speed?: number;
}

export default function TypingHeading({
  text,
  className = "gradient-text",
  speed = 55,
}: TypingHeadingProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setDisplayedText("");
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayedText(text);
      return;
    }

    let index = 0;

    const interval = window.setInterval(() => {
      index++;
      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(interval);
      }
    }, speed);

    return () => window.clearInterval(interval);
  }, [isVisible, text, speed]);

  return (
    <span
      ref={textRef}
      className={`inline-block ${className}`}
      aria-label={text}
    >
      <span aria-hidden="true">
        {displayedText}
        {isVisible && displayedText.length < text.length && (
          <span className="ml-1 inline-block h-[0.85em] w-0.75 translate-y-1 animate-pulse bg-brand-purple" />
        )}
      </span>
    </span>
  );
}
