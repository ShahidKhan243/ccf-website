"use client";

import React, { useEffect, useRef, useState } from "react";
import { CCF_DEPARTMENTS } from "@/lib/data/departments";

export function DepartmentsTicker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // 1. Pause when tab is hidden
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // 2. Pause when ticker is off-screen
    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window && containerRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry) {
            setIsPaused(!entry.isIntersecting);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (observer) observer.disconnect();
    };
  }, []);

  // Repeating array to ensure seamless infinite loop
  const repeatedDepartments = [
    ...CCF_DEPARTMENTS,
    ...CCF_DEPARTMENTS,
    ...CCF_DEPARTMENTS,
  ];

  return (
    <div
      ref={containerRef}
      className="w-full bg-white border-b border-[#e8dfca] py-4 overflow-hidden relative select-none"
      aria-label="Department highlights ticker"
    >
      <style>{`
        @keyframes tickerMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .anim-marquee {
          display: flex;
          width: max-content;
          animation: tickerMarquee 30s linear infinite;
          will-change: transform;
        }
        .anim-marquee-paused {
          animation-play-state: paused !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .anim-marquee {
            animation: none !important;
          }
        }
      `}</style>

      {/* Subtle edge fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        className={`anim-marquee flex items-center ${
          isPaused ? "anim-marquee-paused" : ""
        }`}
      >
        {repeatedDepartments.map((dept, idx) => (
          <div key={`${dept.id}-${idx}`} className="flex items-center shrink-0">
            <span
              className="font-serif text-2xl sm:text-[30px] font-semibold text-[#14203a] tracking-tight px-6"
              style={{ fontFeatureSettings: '"lnum" 1' }}
            >
              {dept.name}
            </span>
            <span
              className="text-[#b8964f] text-sm select-none px-2"
              aria-hidden="true"
            >
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
