"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Mail, ChevronRight, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "./social-icons";

/**
 * Precomputed 3D slice depth configuration.
 * Generates 57 stacked slices behind the front face to create solid side walls with visible thickness.
 */
const PHONE_SLICES = Array.from({ length: 57 }, (_, i) => {
  const sliceIndex = 56 - i;
  const isDark = sliceIndex % 6 === 0;
  const z = 35 - (sliceIndex + 1) * 1.25;
  return { sliceIndex, isDark, z };
});

const CONTACT_CHANNELS = [
  {
    id: "email",
    label: "EMAIL",
    value: "crescentcluboffinance26@gmail.com",
    href: "mailto:crescentcluboffinance26@gmail.com",
    icon: Mail,
    isExternal: false,
    desktopClasses: "lg:top-24 xl:top-28 lg:-left-6 xl:-left-10",
  },
  {
    id: "instagram",
    label: "INSTAGRAM",
    value: "@crescentcluboffinance",
    href: "https://www.instagram.com/crescentcluboffinance",
    icon: InstagramIcon,
    isExternal: true,
    desktopClasses: "lg:top-[380px] xl:top-[400px] lg:-right-4 xl:-right-8",
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    value: "Crescent Club of Finance",
    href: "https://www.linkedin.com/company/ccf-2024/",
    icon: LinkedinIcon,
    isExternal: true,
    desktopClasses: "lg:bottom-8 xl:bottom-10 lg:left-4 xl:left-8",
  },
];

export function ContactHero() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section
      className="relative min-h-[100vh] w-full flex items-center justify-center overflow-x-clip py-12 lg:py-8 border-b border-[#e6cf98]/40"
      style={{
        background:
          "radial-gradient(60% 70% at 62% 62%, rgba(230, 207, 152, 0.55), transparent 70%), linear-gradient(180deg, #fbf9f4 0%, #f4efe4 100%)",
      }}
    >
      {/* Ambient Sweeping Gold Market Curves in Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 0 520 C 320 420, 680 720, 1080 340 C 1240 180, 1360 210, 1440 160"
          stroke="#b8964f"
          strokeWidth="1.5"
          strokeOpacity="0.45"
        />
        <path
          d="M 0 560 C 340 460, 700 760, 1110 380 C 1270 220, 1380 250, 1440 200"
          stroke="#b8964f"
          strokeWidth="1"
          strokeDasharray="5 5"
          strokeOpacity="0.25"
        />
        <circle cx="1080" cy="340" r="3.5" fill="#b8964f" />
        <circle cx="1240" cy="180" r="4" fill="#b8964f" />
        <circle cx="1360" cy="210" r="4.5" fill="#b8964f" />
      </svg>

      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Eyebrow, H1, Paragraph, Two Pill Buttons     */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6 lg:space-y-8 text-left z-20">
            {/* Eyebrow: LET'S CONNECT + 56px Gold Line */}
            <div className="flex items-center gap-3.5">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#b8964f] uppercase">
                LET&apos;S CONNECT
              </span>
              <span
                className="inline-block w-[56px] h-[2px] bg-[#b8964f]"
                aria-hidden="true"
              />
              <span className="sr-only">CRESCENT CLUB OF FINANCE — Let’s Connect</span>
            </div>

            {/* Main Headline: Let's Talk (navy) Finance. (gold) */}
            <h1 className="font-serif font-bold text-[#14203a] text-6xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[116px] 2xl:text-[128px] leading-[0.92] tracking-tight">
              Let’s Talk<br />
              <span className="text-[#b8964f]">Finance.</span>
            </h1>

            {/* Paragraph */}
            <p className="font-sans text-base sm:text-lg text-[#66728a] leading-relaxed max-w-[480px]">
              Get in touch for membership opportunities, upcoming events, workshops and partnership
              inquiries. We&apos;d love to hear from you.
            </p>

            {/* Two Pill Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Send a Message (Gold Gradient) */}
              <a
                href="mailto:crescentcluboffinance26@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-[#14203a] shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, #e6cf98 0%, #b8964f 55%, #9c7c38 100%)",
                }}
              >
                <span>Send a Message</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              {/* Explore Events (White with 1.5px #d9cfb8 border) */}
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-[#14203a] bg-white border-[1.5px] border-[#d9cfb8] hover:border-[#b8964f] hover:bg-[#fbf9f4] hover:scale-[1.02] active:scale-[0.98] shadow-sm transition-all"
              >
                <span>Explore Events</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Visual Stage with 3D Phone & Overlays       */}
          {/* ========================================================= */}
          <div
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-7 xl:col-span-7 relative w-full flex flex-col items-center justify-center min-h-[680px] sm:min-h-[740px] lg:min-h-[820px] [transform-style:preserve-3d]"
          >
            {/* 1. Large Gold Sphere / Orb (Bottom-Right) */}
            <div
              className="gold-orb absolute right-2 sm:right-6 lg:right-4 xl:right-10 bottom-6 sm:bottom-12 w-44 h-44 sm:w-56 sm:h-56 lg:w-60 lg:h-60 rounded-full pointer-events-none z-10"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, #fff2c9, #e3c47f 35%, #b8964f 70%, #8a6a2a)",
                boxShadow:
                  "0 25px 60px rgba(184, 150, 79, 0.4), inset 0 -10px 25px rgba(138, 106, 42, 0.6), inset 0 10px 20px rgba(255, 242, 201, 0.8)",
              }}
              aria-hidden="true"
            />

            {/* 2. Gold Circular Badge (Top-Right) */}
            <div
              className="gold-badge absolute right-4 sm:right-10 lg:right-6 xl:right-12 top-2 sm:top-6 lg:top-4 z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center p-0.5 shadow-[0_12px_28px_rgba(184,150,79,0.35)] border-2 border-white pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, #fff2c9, #e3c47f 35%, #b8964f 70%, #8a6a2a)",
              }}
              aria-hidden="true"
            >
              <div className="w-full h-full rounded-full flex items-center justify-center bg-white/20 backdrop-blur-xs">
                <TrendingUp className="w-6 h-6 text-[#14203a] stroke-[2.75]" />
              </div>
            </div>

            {/* 3. Frosted-Glass Stats Card (Top-Right) */}
            <div className="stats-card absolute -right-2 sm:right-2 lg:-right-4 xl:right-2 top-14 sm:top-18 lg:top-14 z-40 w-[270px] sm:w-[290px] backdrop-blur-md bg-white/85 border border-[#e6cf98]/70 rounded-[22px] p-4 shadow-[0_16px_36px_rgba(20,32,58,0.08)] pointer-events-auto">
              <div className="flex items-center justify-between pb-2 border-b border-[#ede5d4]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#14203a]">
                  Club Growth
                </span>
                <div className="flex items-center gap-1 bg-[#fbf9f4] p-0.5 rounded-full border border-[#ede5d4] text-[9px] font-semibold text-[#66728a]">
                  <span className="px-1.5 py-0.5 rounded-full">7D</span>
                  <span className="px-1.5 py-0.5 rounded-full">14D</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#b8964f] text-[#14203a] font-bold shadow-sm">
                    1M
                  </span>
                  <span className="px-1.5 py-0.5 rounded-full">3M</span>
                </div>
              </div>

              <div className="flex items-baseline justify-between pt-2.5">
                <div>
                  <span className="font-serif text-3xl font-bold text-[#14203a]">+284</span>
                  <span className="text-[10px] text-[#66728a] font-medium ml-1.5">New Members</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-500/15 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  +12.5%
                </span>
              </div>

              {/* 7 hatched-gold bars with one solid gold bar highlighted (SUN-SAT) */}
              <div className="pt-3">
                <div className="h-16 w-full">
                  <svg viewBox="0 0 240 70" fill="none" className="w-full h-full">
                    <defs>
                      <pattern
                        id="hatchedGoldBar"
                        width="4"
                        height="4"
                        patternTransform="rotate(45 0 0)"
                        patternUnits="userSpaceOnUse"
                      >
                        <line
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="4"
                          stroke="#b8964f"
                          strokeWidth="1.75"
                          strokeOpacity="0.75"
                        />
                      </pattern>
                    </defs>
                    <rect x="8" y="32" width="18" height="26" rx="4" fill="url(#hatchedGoldBar)" />
                    <rect x="42" y="24" width="18" height="34" rx="4" fill="url(#hatchedGoldBar)" />
                    <rect x="76" y="16" width="18" height="42" rx="4" fill="url(#hatchedGoldBar)" />
                    <rect x="110" y="28" width="18" height="30" rx="4" fill="url(#hatchedGoldBar)" />
                    <rect x="144" y="12" width="18" height="46" rx="4" fill="url(#hatchedGoldBar)" />
                    {/* Friday - Solid Gold Highlighted */}
                    <rect x="178" y="4" width="18" height="54" rx="4" fill="#b8964f" />
                    <rect x="212" y="20" width="18" height="38" rx="4" fill="url(#hatchedGoldBar)" />

                    <text x="17" y="67" textAnchor="middle" fill="#66728a" fontSize="7" fontWeight="bold">
                      SUN
                    </text>
                    <text x="51" y="67" textAnchor="middle" fill="#66728a" fontSize="7" fontWeight="bold">
                      MON
                    </text>
                    <text x="85" y="67" textAnchor="middle" fill="#66728a" fontSize="7" fontWeight="bold">
                      TUE
                    </text>
                    <text x="119" y="67" textAnchor="middle" fill="#66728a" fontSize="7" fontWeight="bold">
                      WED
                    </text>
                    <text x="153" y="67" textAnchor="middle" fill="#66728a" fontSize="7" fontWeight="bold">
                      THU
                    </text>
                    <text x="187" y="67" textAnchor="middle" fill="#b8964f" fontSize="7" fontWeight="bold">
                      FRI
                    </text>
                    <text x="221" y="67" textAnchor="middle" fill="#66728a" fontSize="7" fontWeight="bold">
                      SAT
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            {/* 4. Frosted-Glass Radar-Chart Card (Bottom-Left of Phone) */}
            <div className="radar-card absolute left-2 sm:-left-4 lg:-left-6 xl:left-0 bottom-16 sm:bottom-20 z-40 w-[220px] sm:w-[240px] backdrop-blur-md bg-white/85 border border-[#e6cf98]/70 rounded-[22px] p-3.5 shadow-[0_16px_36px_rgba(20,32,58,0.08)] pointer-events-auto">
              <div className="flex items-center justify-between pb-1.5 border-b border-[#ede5d4]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#14203a]">
                  Competency Radar
                </span>
                <span className="text-[9px] font-semibold text-[#b8964f]">Q4 CCF</span>
              </div>
              <div className="h-32 w-full pt-1 flex items-center justify-center">
                <svg viewBox="0 0 160 140" fill="none" className="w-full h-full overflow-visible">
                  <polygon
                    points="80,15 135,42 135,98 80,125 25,98 25,42"
                    stroke="#ede5d4"
                    strokeWidth="1"
                    fill="none"
                  />
                  <polygon
                    points="80,35 115,52 115,88 80,105 45,88 45,52"
                    stroke="#ede5d4"
                    strokeWidth="1"
                    fill="none"
                  />
                  <polygon
                    points="80,55 97,63 97,77 80,85 63,77 63,63"
                    stroke="#ede5d4"
                    strokeWidth="1"
                    fill="none"
                  />
                  <line
                    x1="80"
                    y1="15"
                    x2="80"
                    y2="125"
                    stroke="#ede5d4"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                  <line
                    x1="25"
                    y1="42"
                    x2="135"
                    y2="98"
                    stroke="#ede5d4"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                  <line
                    x1="25"
                    y1="98"
                    x2="135"
                    y2="42"
                    stroke="#ede5d4"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />

                  {/* Gold Filled Data Polygon */}
                  <polygon
                    points="80,22 128,48 122,94 80,118 31,90 35,48"
                    stroke="#b8964f"
                    strokeWidth="2"
                    fill="rgba(184, 150, 79, 0.25)"
                  />
                  <circle cx="80" cy="22" r="3" fill="#b8964f" stroke="#ffffff" strokeWidth="1" />
                  <circle cx="128" cy="48" r="3" fill="#b8964f" stroke="#ffffff" strokeWidth="1" />
                  <circle cx="122" cy="94" r="3" fill="#b8964f" stroke="#ffffff" strokeWidth="1" />
                  <circle cx="80" cy="118" r="3" fill="#b8964f" stroke="#ffffff" strokeWidth="1" />
                  <circle cx="31" cy="90" r="3" fill="#b8964f" stroke="#ffffff" strokeWidth="1" />
                  <circle cx="35" cy="48" r="3" fill="#b8964f" stroke="#ffffff" strokeWidth="1" />

                  {/* 4 Labelled Corner Percentages */}
                  <text x="80" y="9" textAnchor="middle" fill="#14203a" fontSize="7.5" fontWeight="bold">
                    Market <tspan fill="#b8964f">88%</tspan>
                  </text>
                  <text x="140" y="73" textAnchor="start" fill="#14203a" fontSize="7.5" fontWeight="bold">
                    Capital <tspan fill="#b8964f">76%</tspan>
                  </text>
                  <text x="80" y="136" textAnchor="middle" fill="#14203a" fontSize="7.5" fontWeight="bold">
                    Risk <tspan fill="#b8964f">92%</tspan>
                  </text>
                  <text x="20" y="73" textAnchor="end" fill="#14203a" fontSize="7.5" fontWeight="bold">
                    Ethics <tspan fill="#b8964f">95%</tspan>
                  </text>
                </svg>
              </div>
            </div>

            {/* ========================================================= */}
            {/* 5. 3D TILTED PHONE in the center (visible depth slices)   */}
            {/* ========================================================= */}
            <div
              className="phoneWrap"
              style={{
                transform: `perspective(1400px) rotateX(${22 - mouseOffset.y * 3}deg) rotateY(${
                  -42 + mouseOffset.x * 4
                }deg) rotateZ(-36deg)`,
              }}
            >
              {/* 3D Soft Blurred Shadow */}
              <div className="shadow3d" aria-hidden="true" />

              {/* 56 Stacked Slices for Solid Visible Wall Thickness */}
              {PHONE_SLICES.map(({ sliceIndex, isDark, z }) => (
                <div
                  key={sliceIndex}
                  className={`slice ${isDark ? "dark" : ""}`}
                  style={{
                    transform: `translateZ(${z}px)`,
                  }}
                  aria-hidden="true"
                />
              ))}

              {/* Left Edge Metallic Physical Buttons */}
              <div
                style={{
                  position: "absolute",
                  left: "-4px",
                  top: "110px",
                  width: "4px",
                  height: "26px",
                  borderRadius: "2px 0 0 2px",
                  background: "linear-gradient(to right, #9c7c38, #d9bd7a)",
                  transform: "translateZ(30px)",
                  pointerEvents: "none",
                }}
                aria-hidden="true"
              />
              <div
                style={{
                  position: "absolute",
                  left: "-4px",
                  top: "155px",
                  width: "4px",
                  height: "50px",
                  borderRadius: "2px 0 0 2px",
                  background: "linear-gradient(to right, #9c7c38, #d9bd7a)",
                  transform: "translateZ(30px)",
                  pointerEvents: "none",
                }}
                aria-hidden="true"
              />
              <div
                style={{
                  position: "absolute",
                  left: "-4px",
                  top: "218px",
                  width: "4px",
                  height: "50px",
                  borderRadius: "2px 0 0 2px",
                  background: "linear-gradient(to right, #9c7c38, #d9bd7a)",
                  transform: "translateZ(30px)",
                  pointerEvents: "none",
                }}
                aria-hidden="true"
              />
              {/* Right Edge Power Button */}
              <div
                style={{
                  position: "absolute",
                  right: "-4px",
                  top: "170px",
                  width: "4px",
                  height: "68px",
                  borderRadius: "0 2px 2px 0",
                  background: "linear-gradient(to left, #9c7c38, #d9bd7a)",
                  transform: "translateZ(30px)",
                  pointerEvents: "none",
                }}
                aria-hidden="true"
              />

              {/* Front Face .phone (translateZ(35px)) */}
              <div className="phone">
                {/* Inside .screen (border-radius:44px, navy gradient) */}
                <div className="screen flex flex-col justify-between p-4.5 text-white">
                  {/* Dynamic Island Pill */}
                  <div className="w-28 h-6 bg-black rounded-full mx-auto flex items-center justify-between px-3 shadow-inner">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#1c2640]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2a3a5a]" />
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0a101a] border border-[#2a3a5a]" />
                  </div>

                  {/* Title: Finance Builder in serif */}
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <p className="text-[10px] text-[#66728a] font-medium leading-none">
                        Welcome back,
                      </p>
                      <h4 className="font-serif text-lg font-bold text-[#fbf9f4] tracking-tight mt-0.5">
                        Finance Builder
                      </h4>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-[#b8964f]" />
                  </div>

                  {/* Card 1: TOTAL GROWTH +12.5% ▲ */}
                  <div className="p-3 rounded-2xl bg-[#14203a]/90 border border-white/10 shadow-lg space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-wider text-[#66728a] font-bold">
                        TOTAL GROWTH
                      </span>
                      <span className="text-xs font-bold text-emerald-400 font-sans flex items-center gap-0.5">
                        +12.5% <span>▲</span>
                      </span>
                    </div>
                    <div className="font-serif text-2xl font-bold text-[#fbf9f4] leading-tight">
                      +12.5%
                    </div>

                    {/* Gold line chart */}
                    <div className="h-14 w-full">
                      <svg viewBox="0 0 240 60" fill="none" className="w-full h-full overflow-visible">
                        <defs>
                          <linearGradient id="phoneGoldChartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#b8964f" stopOpacity="0.45" />
                            <stop offset="100%" stopColor="#b8964f" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 0 46 C 35 44, 65 38, 100 28 C 140 16, 175 24, 205 12 L 240 6 L 240 60 L 0 60 Z"
                          fill="url(#phoneGoldChartGrad)"
                        />
                        <path
                          d="M 0 46 C 35 44, 65 38, 100 28 C 140 16, 175 24, 205 12 L 240 6"
                          stroke="#b8964f"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <circle cx="100" cy="28" r="2.5" fill="#b8964f" />
                        <circle cx="205" cy="12" r="2.5" fill="#b8964f" />
                        <circle cx="240" cy="6" r="3.5" fill="#ffffff" stroke="#b8964f" strokeWidth="2" />
                      </svg>
                    </div>

                    {/* 1D/1W/1M/1Y tabs (1M highlighted with a gold pill) */}
                    <div className="flex items-center justify-between text-[10px] text-[#66728a] font-semibold pt-1 border-t border-white/5">
                      <span>1D</span>
                      <span>1W</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#b8964f] text-[#14203a] font-bold shadow-sm">
                        1M
                      </span>
                      <span>1Y</span>
                    </div>
                  </div>

                  {/* Card 2 & 3: SAVINGS and Bar Chart Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {/* SAVINGS $4,250 ↑8.2% */}
                    <div className="p-2.5 rounded-xl bg-[#14203a]/80 border border-white/10">
                      <p className="text-[9px] uppercase tracking-wider text-[#66728a] font-bold">
                        SAVINGS
                      </p>
                      <p className="font-serif text-base font-bold text-[#fbf9f4] mt-0.5">$4,250</p>
                      <p className="text-[10px] text-emerald-400 font-bold flex items-center gap-0.5 mt-0.5">
                        ↑ 8.2%
                      </p>
                    </div>

                    {/* Gold bar chart card */}
                    <div className="p-2 rounded-xl bg-[#14203a]/80 border border-white/10 flex items-end justify-between gap-1 h-16 px-2.5">
                      <div className="w-2 rounded-t bg-[#b8964f]/30 h-[35%]" />
                      <div className="w-2 rounded-t bg-[#b8964f]/45 h-[50%]" />
                      <div className="w-2 rounded-t bg-[#b8964f]/60 h-[70%]" />
                      <div className="w-2 rounded-t bg-[#b8964f]/75 h-[55%]" />
                      <div className="w-2 rounded-t bg-[#b8964f]/85 h-[85%]" />
                      <div className="w-2 rounded-t bg-[#b8964f] h-[100%]" />
                    </div>
                  </div>

                  {/* Card 4: MARKET INSIGHTS S&P 500 • 4,892.32 */}
                  <div className="p-2.5 rounded-xl bg-[#14203a]/80 border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-[8px] uppercase tracking-wider text-[#66728a] font-bold">
                        MARKET INSIGHTS
                      </p>
                      <p className="text-[11px] font-semibold text-[#fbf9f4]">
                        S&amp;P 500 • 4,892.32
                      </p>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/15 px-2 py-0.5 rounded-full">
                      +1.4%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================= */}
            {/* 6. THREE FLOATING WHITE CONTACT CARDS                     */}
            {/* ========================================================= */}
            <div className="w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[420px] mt-8 flex flex-col gap-3.5 lg:contents">
              {CONTACT_CHANNELS.map((card) => {
                const IconComponent = card.icon;
                return (
                  <a
                    key={card.id}
                    href={card.href}
                    target={card.isExternal ? "_blank" : undefined}
                    rel={card.isExternal ? "noopener noreferrer" : undefined}
                    className={`contact-card group relative z-50 flex items-center justify-between gap-3.5 bg-white/95 backdrop-blur-md rounded-[22px] p-3 sm:p-3.5 pr-4 sm:pr-5 border border-[#ede5d4] shadow-[0_14px_34px_rgba(184,150,79,0.18),0_4px_12px_rgba(20,32,58,0.06)] hover:-translate-y-[3px] hover:border-[#b8964f] hover:shadow-2xl transition-all duration-300 pointer-events-auto ${card.desktopClasses} lg:absolute w-full lg:w-auto`}
                    aria-label={`${card.label}: ${card.value}`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-11 h-11 rounded-full bg-[#fbf9f4] border border-[#e6cf98] flex items-center justify-center text-[#b8964f] group-hover:bg-[#b8964f] group-hover:text-white transition-colors shrink-0 shadow-sm">
                        <IconComponent className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="text-left min-w-0">
                        <p className="text-[10px] font-bold tracking-[0.14em] text-[#66728a] uppercase leading-none group-hover:text-[#b8964f] transition-colors">
                          {card.label}
                        </p>
                        <p className="text-xs sm:text-sm font-bold text-[#14203a] truncate mt-1 max-w-[200px] sm:max-w-[240px] lg:max-w-[170px] xl:max-w-[210px]">
                          {card.value}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#9c7c38] group-hover:translate-x-1 group-hover:text-[#b8964f] transition-all shrink-0" />
                  </a>
                );
              })}
            </div>

            {/* 7. Tagline bottom-right in italic serif gold */}
            <div className="tagline absolute right-4 sm:right-8 lg:right-4 xl:right-8 -bottom-3 sm:bottom-0 z-30 font-serif italic text-[#b8964f] text-sm sm:text-base tracking-wide flex items-center gap-1.5 pointer-events-none">
              <Sparkles className="w-4 h-4 text-[#b8964f]" />
              <span>Better Financial Minds, Brighter Futures</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scoped CSS for 3D Phone geometry, slices, and responsive adaptations */}
      <style>{`
        .phoneWrap {
          position: absolute;
          width: 330px;
          height: 680px;
          transform-style: preserve-3d;
          animation: phoneRotate 6s ease-in-out infinite alternate;
          will-change: transform;
        }

        @keyframes phoneRotate {
          0% {
            transform: perspective(1400px) rotateX(22deg) rotateY(-36deg) rotateZ(-36deg);
          }
          100% {
            transform: perspective(1400px) rotateX(22deg) rotateY(-46deg) rotateZ(-36deg);
          }
        }

        .phone {
          position: absolute;
          inset: 0;
          border-radius: 54px;
          padding: 11px;
          transform: translateZ(35px);
          background: linear-gradient(160deg, #233152, #0f1830 60%);
          box-shadow: 0 0 0 3px #1c2640, inset 0 0 0 2px #3b4a70;
          transform-style: preserve-3d;
        }

        .screen {
          width: 100%;
          height: 100%;
          border-radius: 44px;
          background: linear-gradient(180deg, #16233f 0%, #0d172d 100%);
          overflow: hidden;
        }

        .slice {
          position: absolute;
          inset: 0;
          border-radius: 54px;
          background: linear-gradient(135deg, #d9bd7a, #8a6a2a 45%, #c8a660);
          pointer-events: none;
        }

        .slice.dark {
          background: linear-gradient(135deg, #2c3b60, #0b1226);
        }

        .shadow3d {
          position: absolute;
          inset: 18px;
          border-radius: 54px;
          background: rgba(90, 65, 20, 0.45);
          filter: blur(28px);
          transform: translateZ(-60px) translate(40px, 50px);
          pointer-events: none;
        }

        @media (max-width: 899px) {
          .phoneWrap {
            position: relative !important;
            animation: none !important;
            transform: perspective(1200px) rotateX(15deg) rotateY(-22deg) rotateZ(-12deg) scale(0.8) !important;
            margin: 0 auto;
          }

          .stats-card {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            width: 100% !important;
            max-width: 380px !important;
            margin-top: 1rem;
          }

          .radar-card {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            width: 100% !important;
            max-width: 380px !important;
            margin-top: 1rem;
          }

          .gold-orb {
            display: none;
          }

          .gold-badge {
            display: none;
          }

          .tagline {
            position: relative !important;
            right: auto !important;
            bottom: auto !important;
            margin-top: 1.5rem;
            text-align: center;
            justify-content: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .phoneWrap {
            animation: none !important;
            transform: perspective(1400px) rotateX(22deg) rotateY(-42deg) rotateZ(-36deg) !important;
          }
        }
      `}</style>
    </section>
  );
}
