"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { CCF_EYEBROW } from "@/components/site/navigation-data";

export function DepartmentsHero() {
  const containerRef = useRef<HTMLElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // 1. Pause animations when tab is hidden
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // 2. Pause animations when hero is scrolled out of viewport
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

  return (
    <section
      ref={containerRef}
      className="relative min-h-[760px] lg:min-h-[820px] flex items-center overflow-hidden border-b border-[#e8dfca]"
      style={{
        background:
          "radial-gradient(52% 62% at 78% 45%, rgba(230, 207, 152, 0.6), transparent 70%), linear-gradient(180deg, #fbf9f4 0%, #f4efe4 100%)",
      }}
    >
      <style>{`
        @keyframes heroFloatFront {
          0% {
            transform: translateY(0px) rotate(-4deg) skewY(-1deg);
          }
          50% {
            transform: translateY(-12px) rotate(-3.5deg) skewY(-0.8deg);
          }
          100% {
            transform: translateY(0px) rotate(-4deg) skewY(-1deg);
          }
        }
        @keyframes heroFloatBack {
          0% {
            transform: translateY(0px) rotate(-6deg);
          }
          50% {
            transform: translateY(-9px) rotate(-5.5deg);
          }
          100% {
            transform: translateY(0px) rotate(-6deg);
          }
        }
        @keyframes spinBadge {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .anim-float-front {
          animation: heroFloatFront 7s ease-in-out infinite alternate;
          will-change: transform;
        }
        .anim-float-back {
          animation: heroFloatBack 7.5s ease-in-out infinite alternate;
          will-change: transform;
        }
        .anim-spin-badge {
          animation: spinBadge 24s linear infinite;
        }
        .anim-paused {
          animation-play-state: paused !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .anim-float-front,
          .anim-float-back,
          .anim-spin-badge {
            animation: none !important;
          }
        }
      `}</style>

      <Container className="relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Copy & Actions) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7 max-w-2xl">
            {/* Institutional Eyebrow with gold sparkle */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#e8dfca] bg-white/80 shadow-xs">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#b8964f"
                className="shrink-0"
                aria-hidden="true"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9c7c38]">
                {CCF_EYEBROW} · Departments
              </span>
            </div>

            {/* Display H1 Heading */}
            <h1
              className="font-serif font-bold text-[#14203a] tracking-tight leading-[0.95] text-[52px] sm:text-[70px] md:text-[84px] lg:text-[96px] xl:text-[102px]"
              style={{ fontFeatureSettings: '"lnum" 1' }}
            >
              Five departments, built for{" "}
              <em className="text-[#b8964f] font-serif italic font-semibold not-italic">
                student finance.
              </em>
            </h1>

            {/* Supporting Editorial Paragraph */}
            <p className="text-[#5d6985] text-lg sm:text-xl lg:text-[21px] leading-relaxed max-w-xl font-normal">
              Finance, IT and media, marketing, projects and events. Every department at CCF is run by students, open to every discipline.
            </p>

            {/* Actions & Playful Gold Arrow */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto relative">
              {/* Primary Gold Button */}
              <Link
                href="/join-us"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8964f]"
                style={{
                  background: "linear-gradient(180deg, #c8a660, #a8843c)",
                  boxShadow: "0 14px 30px rgba(168, 132, 60, 0.35)",
                }}
              >
                <span>Join a Department</span>
                <span aria-hidden="true">→</span>
              </Link>

              {/* Text link with gold underline */}
              <a
                href="#directory"
                className="group inline-flex items-center justify-center gap-2 py-3 px-2 text-base font-medium text-[#14203a] hover:text-[#b8964f] transition-colors underline decoration-[#b8964f] decoration-2 underline-offset-8"
              >
                <span>Explore Divisions</span>
                <ArrowDown className="h-4 w-4 text-[#b8964f] transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
              </a>

              {/* Hand-drawn gold curved arrow (accent) */}
              <div
                className="hidden xl:block absolute -right-28 -top-3 text-[#b8964f] pointer-events-none select-none"
                aria-hidden="true"
              >
                <svg
                  width="72"
                  height="48"
                  viewBox="0 0 72 48"
                  fill="none"
                  stroke="#b8964f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 38 C 22 46, 52 42, 62 18 C 64 12, 64 6, 60 4" />
                  <path d="M48 6 L 60 4 L 64 16" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column (Visual Stage) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
            {/* Visual Container scaled responsively under 900px */}
            <div className="relative w-[340px] h-[360px] sm:w-[460px] sm:h-[420px] lg:w-[500px] lg:h-[460px] flex items-center justify-center scale-[0.75] sm:scale-90 lg:scale-100 origin-center lg:origin-right transition-transform">
              {/* Metallic Gold Crescent (Inline SVG) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <svg
                  viewBox="0 0 500 500"
                  className="w-[420px] h-[420px] sm:w-[480px] sm:h-[480px]"
                  style={{
                    filter: "drop-shadow(0 24px 36px rgba(184, 150, 79, 0.28))",
                  }}
                  aria-hidden="true"
                >
                  <defs>
                    {/* Multi-stop metallic gold gradient */}
                    <linearGradient id="ccfGoldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fff2c9" />
                      <stop offset="25%" stopColor="#e3c47f" />
                      <stop offset="50%" stopColor="#b8964f" />
                      <stop offset="75%" stopColor="#d9bd7a" />
                      <stop offset="100%" stopColor="#8a6a2a" />
                    </linearGradient>
                    <linearGradient id="ccfGoldSpecular" x1="20%" y1="0%" x2="80%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
                      <stop offset="40%" stopColor="#ffffff" stopOpacity="0" />
                      <stop offset="100%" stopColor="#694a12" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>

                  {/* Sweeping Crescent Moon Path */}
                  <path
                    d="M 270 24 C 145 24 45 125 45 250 C 45 375 145 476 270 476 C 352 476 422 432 460 365 C 335 395 200 320 180 215 C 162 120 236 48 360 35 C 330 28 300 24 270 24 Z"
                    fill="url(#ccfGoldMetallic)"
                  />
                  {/* Subtle specular highlight overlay */}
                  <path
                    d="M 270 24 C 145 24 45 125 45 250 C 45 375 145 476 270 476 C 352 476 422 432 460 365 C 335 395 200 320 180 215 C 162 120 236 48 360 35 C 330 28 300 24 270 24 Z"
                    fill="url(#ccfGoldSpecular)"
                  />
                </svg>
              </div>

              {/* Back Card: IT & Media (Dept 02) */}
              <div
                className={`absolute w-[360px] sm:w-[390px] h-[235px] sm:h-[250px] rounded-[24px] overflow-hidden border border-[#e8dfca] shadow-xl anim-float-back ${
                  isPaused ? "anim-paused" : ""
                }`}
                style={{
                  top: "36px",
                  left: "-18px",
                  transform: "rotate(-6deg)",
                  zIndex: 2,
                }}
              >
                {/* Top: Cream Header */}
                <div className="h-[44%] bg-[#fff7e0] px-6 flex items-center justify-between border-b border-[#ebdcb8]">
                  <span className="font-serif italic font-bold text-lg text-[#14203a] tracking-wider">
                    CCF
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs tracking-wider text-[#9c7c38] font-bold">
                    IT & MEDIA · Dept. 02
                  </span>
                </div>
                {/* Bottom: Gold Strip */}
                <div className="h-[56%] bg-gradient-to-br from-[#d4b06a] to-[#a8843c] px-6 py-4 flex flex-col justify-between text-white">
                  <div className="text-xs uppercase tracking-widest opacity-90 font-medium">
                    Digital & Creative Operations
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono tracking-wider opacity-85">
                    <span>CRESCENT CLUB OF FINANCE</span>
                    <span>LEAD · TBA</span>
                  </div>
                </div>
              </div>

              {/* Front Card: Finance Management (Dept 01) */}
              <div
                className={`absolute w-[380px] sm:w-[420px] h-[245px] sm:h-[262px] rounded-[26px] overflow-hidden border border-[#b8964f]/40 shadow-2xl anim-float-front ${
                  isPaused ? "anim-paused" : ""
                }`}
                style={{
                  top: "115px",
                  left: "30px",
                  transform: "rotate(-4deg) skewY(-1deg)",
                  zIndex: 4,
                  boxShadow: "0 26px 50px -12px rgba(20, 32, 58, 0.4)",
                }}
              >
                {/* Top 44%: Gold metallic strip */}
                <div
                  className="h-[44%] px-6 flex items-center justify-between border-b border-[#9c7c38]/40"
                  style={{
                    background:
                      "linear-gradient(90deg, #e6cf98 0%, #c8a660 50%, #a8843c 100%)",
                  }}
                >
                  <span className="font-serif italic font-extrabold text-2xl text-[#14203a] tracking-tight">
                    CCF
                  </span>
                  <span className="font-mono text-xs font-bold tracking-wider text-[#14203a] bg-white/30 px-2.5 py-1 rounded-sm border border-white/40">
                    DEPT 01 / FINANCE
                  </span>
                </div>

                {/* Bottom 56%: Navy with repeating concentric arcs */}
                <div
                  className="h-[56%] p-6 flex flex-col justify-between relative overflow-hidden"
                  style={{
                    backgroundColor: "#101a30",
                    backgroundImage:
                      "repeating-radial-gradient(circle at 100% 100%, #1d2c4d 0, #101a30 18px, #1d2c4d 36px)",
                  }}
                >
                  <div>
                    <h3
                      className="font-serif text-2xl sm:text-[26px] font-bold text-white tracking-tight leading-none"
                      style={{ fontFeatureSettings: '"lnum" 1' }}
                    >
                      Finance Management
                    </h3>
                    <p className="text-[10px] uppercase font-bold tracking-[0.22em] text-[#e6cf98]/90 mt-1.5">
                      CRESCENT CLUB OF FINANCE
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono text-[#e6cf98]/80">
                    <span className="text-[10px] tracking-widest uppercase">Division 01</span>
                    <span className="font-semibold tracking-wider">LEAD · TBA</span>
                  </div>
                </div>
              </div>

              {/* Circular "LET'S EXPLORE MORE" Badge */}
              <a
                href="#directory"
                className="absolute w-[135px] h-[135px] sm:w-[150px] sm:h-[150px] rounded-full bg-white shadow-2xl border border-[#e8dfca] flex items-center justify-center cursor-pointer group hover:scale-105 active:scale-95 transition-transform duration-300"
                style={{
                  bottom: "-12px",
                  right: "-12px",
                  zIndex: 10,
                }}
                aria-label="Scroll to Department Directory"
              >
                {/* Rotating Circular Text */}
                <svg
                  viewBox="0 0 160 160"
                  className={`w-full h-full absolute inset-0 anim-spin-badge ${
                    isPaused ? "anim-paused" : ""
                  }`}
                  aria-hidden="true"
                >
                  <path
                    id="circlePathHero"
                    d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                    fill="none"
                  />
                  <text
                    className="text-[10.5px] font-bold tracking-[0.24em] uppercase"
                    fill="#9c7c38"
                  >
                    <textPath xlinkHref="#circlePathHero" startOffset="0%">
                      ✦ LET&apos;S EXPLORE MORE ✦ LET&apos;S EXPLORE MORE
                    </textPath>
                  </text>
                </svg>

                {/* Inner Gold Circle with Arrow */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-200"
                  style={{
                    background: "linear-gradient(180deg, #c8a660, #a8843c)",
                  }}
                >
                  <ArrowDown className="h-5 w-5" aria-hidden="true" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
