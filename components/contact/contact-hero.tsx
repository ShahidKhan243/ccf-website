"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Mail,
  ChevronRight,
  Bell,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/site/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { CCF_PUBLIC_INFO } from "@/components/site/navigation-data";
import { InstagramIcon, LinkedinIcon } from "./social-icons";

export function ContactHero() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("send-message");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative overflow-x-clip bg-[#F7F5EF] py-8 sm:py-10 lg:py-7 lg:h-[470px] border-b border-[#E2DDD1] flex items-center">
      {/* Warm Golden Atmospheric Lighting Aura Behind Device */}
      <div
        className="absolute top-1/2 right-[14%] -translate-y-1/2 w-[420px] h-[420px] lg:w-[480px] lg:h-[480px] bg-gradient-to-tr from-[#B69A58]/30 via-[#B69A58]/15 to-transparent rounded-full blur-[85px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-6 left-12 w-80 h-80 bg-[#14243A]/5 rounded-full blur-[70px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Fine Golden Market Curve in the Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 470"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 640 390 C 820 330, 940 240, 1120 170 C 1240 120, 1340 90, 1440 50"
          stroke="#B69A58"
          strokeWidth="1.5"
          strokeOpacity="0.5"
        />
        <path
          d="M 670 430 C 850 370, 970 280, 1170 210 C 1290 150, 1380 110, 1440 70"
          stroke="#B69A58"
          strokeWidth="1"
          strokeDasharray="4 4"
          strokeOpacity="0.3"
        />
        <circle cx="1120" cy="170" r="3.5" fill="#B69A58" />
        <circle cx="1250" cy="115" r="4" fill="#B69A58" />
        <circle cx="1370" cy="65" r="4.5" fill="#B69A58" />
      </svg>

      <Container className="relative w-full max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6">
          {/* ============================================================= */}
          {/* Left Column: Heading, Eyebrow, Supporting copy, Buttons (~48%) */}
          {/* ============================================================= */}
          <div className="w-full lg:w-[48%] space-y-4 sm:space-y-4.5 text-left shrink-0">
            {/* Eyebrow: LET'S CONNECT — */}
            <FadeIn>
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold tracking-widest text-[#B69A58] uppercase">
                  Let’s Connect
                </span>
                <span className="h-0.5 w-10 bg-[#B69A58]" aria-hidden="true" />
                <span className="sr-only">CRESCENT CLUB OF FINANCE</span>
              </div>
            </FadeIn>

            {/* Main Headline: Let's Talk Finance. */}
            <FadeIn delay={0.1}>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-bold text-[#14243A] tracking-tight leading-[1.03]">
                Let’s Talk<br />
                <span className="text-[#B69A58]">Finance.</span>
              </h1>
            </FadeIn>

            {/* Supporting Copy */}
            <FadeIn delay={0.2}>
              <p className="font-sans text-sm sm:text-base text-[#64748B] leading-relaxed max-w-md">
                Get in touch for membership opportunities, upcoming events,
                workshops and partnership inquiries. We’d love to hear from you.
              </p>
            </FadeIn>

            {/* Action Buttons: Send a Message -> | Explore Events -> */}
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Button
                  asChild
                  size="default"
                  className="bg-[#B69A58] hover:bg-[#a68a48] text-[#14243A] font-bold text-sm shadow-md hover:shadow-lg transition-all rounded-full px-6 h-11"
                >
                  <a
                    href="#send-message"
                    onClick={scrollToForm}
                    className="inline-flex items-center gap-2"
                  >
                    <span>Send a Message</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="default"
                  className="bg-[#F7F5EF] border border-[#14243A]/30 text-[#14243A] hover:bg-[#14243A] hover:text-[#F7F5EF] font-semibold text-sm rounded-full px-6 h-11 transition-colors shadow-sm"
                >
                  <Link href="/events" className="inline-flex items-center gap-2">
                    <span>Explore Events</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* ============================================================= */}
          {/* Right Column: Physically Rendered 3D Smartphone (~52%) */}
          {/* ============================================================= */}
          <div className="w-full lg:w-[52%] flex flex-col items-center lg:items-end relative pt-2 lg:pt-0">
            <div className="relative w-full max-w-[340px] xs:max-w-[360px] sm:max-w-[420px] lg:max-w-[440px] py-2 sm:py-3 [perspective:1200px] flex flex-col items-center lg:block">
              {/* 3D Floating Gold Analytics Disc (Top Right) */}
              <div
                className="absolute top-1 right-2 xs:right-4 sm:right-6 lg:-top-1.5 lg:right-7 z-30 flex h-12 w-12 sm:h-14 sm:w-14 lg:h-15 lg:w-15 items-center justify-center rounded-full bg-gradient-to-br from-[#edd59e] via-[#B69A58] to-[#806429] p-1 shadow-[0_14px_28px_rgba(20,36,58,0.28),inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-3px_5px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-105"
                aria-hidden="true"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#9e813f] to-[#deb96e] flex items-center justify-center shadow-inner">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-[#14243A] stroke-[2.75]" />
                </div>
              </div>

              {/* ========================================================= */}
              {/* Physically Rendered 3D Luxury Navy Smartphone */}
              {/* ========================================================= */}
              <div
                className="relative mx-auto w-[250px] xs:w-[265px] sm:w-[285px] lg:w-[298px] h-[385px] sm:h-[412px] rounded-[38px] sm:rounded-[42px] transition-transform duration-500 hover:scale-[1.01]"
                style={{
                  transform: "rotateY(-8deg) rotateX(5deg) rotateZ(1deg)",
                  transformStyle: "preserve-3d",
                  background: "linear-gradient(135deg, #18283d 0%, #0d1724 60%, #070e17 100%)",
                  border: "3.5px solid #1c2e44",
                  boxShadow: `
                    1px 1px 0px #223752,
                    2px 2px 0px #1d2f46,
                    3px 3px 0px #18273a,
                    4px 4px 0px #132030,
                    5px 5px 0px #0e1824,
                    6px 6px 0px #09101a,
                    7px 7px 1px rgba(182, 154, 88, 0.45),
                    12px 20px 35px rgba(10, 20, 35, 0.45),
                    24px 40px 60px rgba(10, 20, 35, 0.3)
                  `,
                }}
              >
                {/* Outer Gold Metallic Rim Highlight */}
                <div
                  className="absolute -inset-[1px] rounded-[39px] sm:rounded-[43px] pointer-events-none opacity-60"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(230,200,136,0.6) 0%, rgba(182,154,88,0.2) 40%, rgba(182,154,88,0.7) 80%, rgba(255,255,255,0.4) 100%)",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    padding: "1.5px",
                  }}
                  aria-hidden="true"
                />

                {/* Glass Specular Reflection Highlight */}
                <div
                  className="absolute inset-0 rounded-[35px] sm:rounded-[38px] pointer-events-none overflow-hidden z-20"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 35%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />

                {/* Device Interior Bezel & Screen */}
                <div className="relative h-full rounded-[32px] sm:rounded-[35px] bg-[#14243A] p-3.5 sm:p-4 text-white overflow-hidden space-y-2 sm:space-y-2.5 flex flex-col justify-between border border-black/40">
                  {/* Top status bar & dynamic speaker pill */}
                  <div className="flex items-center justify-between text-[11px] text-[#94A3B8] font-medium pt-0.5">
                    <span>9:41</span>
                    <div className="w-16 sm:w-20 h-3 bg-[#050a10] rounded-full mx-auto shadow-inner" />
                    <div className="flex items-center gap-1">
                      <Bell className="h-3 w-3 text-[#B69A58]" />
                    </div>
                  </div>

                  {/* Greeting Header */}
                  <div>
                    <p className="text-[10px] text-[#94A3B8] leading-tight font-medium">
                      Good Morning,
                    </p>
                    <h4 className="font-serif text-sm sm:text-base font-bold text-[#F7F5EF]">
                      Finance Builder
                    </h4>
                  </div>

                  {/* Total Growth Card with Golden Spline Curve */}
                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#0F1D30] border border-white/10 relative overflow-hidden space-y-1.5 shadow-md">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <p className="text-[9px] uppercase tracking-wider text-[#94A3B8] font-semibold">
                          TOTAL GROWTH
                        </p>
                        <p className="font-serif text-lg sm:text-xl font-bold text-[#F7F5EF]">
                          +12.5%{" "}
                          <span className="text-xs text-emerald-400 font-sans font-bold">
                            ▲
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Golden Spline Curve Area SVG */}
                    <div className="h-12 sm:h-16 w-full">
                      <svg
                        viewBox="0 0 240 60"
                        fill="none"
                        className="w-full h-full overflow-visible"
                        aria-hidden="true"
                      >
                        <defs>
                          <linearGradient
                            id="realistic3DGoldChartFill"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="#B69A58"
                              stopOpacity="0.55"
                            />
                            <stop
                              offset="100%"
                              stopColor="#B69A58"
                              stopOpacity="0.0"
                            />
                          </linearGradient>
                        </defs>

                        {/* Grid line */}
                        <line
                          x1="0"
                          y1="48"
                          x2="240"
                          y2="48"
                          stroke="#ffffff"
                          strokeOpacity="0.08"
                          strokeDasharray="2 3"
                        />

                        {/* Area Fill */}
                        <path
                          d="M 0 46 C 30 44, 60 40, 95 30 C 135 15, 175 25, 205 14 L 240 8 L 240 58 L 0 58 Z"
                          fill="url(#realistic3DGoldChartFill)"
                        />

                        {/* Golden Line */}
                        <path
                          d="M 0 46 C 30 44, 60 40, 95 30 C 135 15, 175 25, 205 14 L 240 8"
                          stroke="#B69A58"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />

                        {/* Nodes */}
                        <circle cx="95" cy="30" r="2.5" fill="#B69A58" />
                        <circle cx="205" cy="14" r="2.5" fill="#B69A58" />
                        <circle
                          cx="240"
                          cy="8"
                          r="3.5"
                          fill="#FFFFFF"
                          stroke="#B69A58"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>

                    {/* Timeframe intervals */}
                    <div className="flex items-center justify-between text-[10px] text-[#94A3B8] font-semibold pt-0.5 border-t border-white/5">
                      <span className="cursor-pointer hover:text-white">1D</span>
                      <span className="cursor-pointer hover:text-white">1W</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#B69A58] text-[#14243A] font-bold shadow-sm">
                        1M
                      </span>
                      <span className="cursor-pointer hover:text-white">1Y</span>
                    </div>
                  </div>

                  {/* Secondary Metrics: Savings & Vertical Bar Chart */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-[#0F1D30] border border-white/10 space-y-0.5">
                      <p className="text-[9px] text-[#94A3B8] uppercase tracking-wider font-semibold">
                        SAVINGS
                      </p>
                      <p className="font-serif text-sm sm:text-base font-bold text-[#F7F5EF]">
                        $4,250
                      </p>
                      <p className="text-[10px] text-emerald-400 font-bold flex items-center gap-0.5">
                        ↑ 8.2%
                      </p>
                    </div>

                    {/* Vertical Bar Chart (6 bars) */}
                    <div className="p-1.5 sm:p-2 rounded-xl bg-[#0F1D30] border border-white/10 flex items-end justify-between gap-0.5 h-12 sm:h-14">
                      <div className="w-2 bg-[#B69A58]/35 rounded-t h-[35%]" />
                      <div className="w-2 bg-[#B69A58]/45 rounded-t h-[50%]" />
                      <div className="w-2 bg-[#B69A58]/60 rounded-t h-[70%]" />
                      <div className="w-2 bg-[#B69A58]/75 rounded-t h-[55%]" />
                      <div className="w-2 bg-[#B69A58]/85 rounded-t h-[85%]" />
                      <div className="w-2 bg-[#B69A58] rounded-t h-[100%]" />
                    </div>
                  </div>

                  {/* Market Insights Banner */}
                  <div className="p-2 rounded-xl bg-[#0F1D30]/85 border border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-[8px] uppercase tracking-wider text-[#94A3B8] font-semibold">
                        MARKET INSIGHTS
                      </p>
                      <p className="text-[10px] sm:text-xs font-semibold text-[#F7F5EF]">
                        S&amp;P 500 • 4,892.32
                      </p>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">
                      +1.4%
                    </span>
                  </div>
                </div>
              </div>

              {/* Three Social / Contact Cards (Desktop: Floating Around Phone | Mobile: Stacked Vertical List Below Phone) */}
              <div className="w-full max-w-[320px] xs:max-w-[340px] sm:max-w-[360px] mt-6 flex flex-col gap-3 lg:contents">
                {/* Floating Card 1: EMAIL */}
                <a
                  href={`mailto:${CCF_PUBLIC_INFO.email}`}
                  className="group relative w-full lg:w-auto lg:absolute lg:top-3 lg:-left-3 xl:lg:-left-7 z-30 bg-white/95 backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 pr-4 sm:pr-5 shadow-[0_12px_28px_rgba(20,36,58,0.12)] border border-[#E2DDD1] flex items-center justify-between lg:justify-start gap-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B69A58] hover:shadow-2xl"
                  aria-label={`Email: ${CCF_PUBLIC_INFO.email}`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F7F5EF] border border-[#B69A58]/30 text-[#B69A58] group-hover:bg-[#B69A58] group-hover:text-white transition-colors">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 text-left">
                      <p className="text-[10px] font-bold tracking-wider text-[#64748B] group-hover:text-[#B69A58] transition-colors uppercase leading-tight">
                        Email
                      </p>
                      <p className="text-xs font-semibold text-[#14243A] truncate max-w-[190px] xs:max-w-[210px] sm:max-w-[230px] lg:max-w-[140px] xl:max-w-[170px]">
                        {CCF_PUBLIC_INFO.email}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-[#94A3B8] group-hover:text-[#B69A58] group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                {/* Floating Card 2: INSTAGRAM */}
                <a
                  href={CCF_PUBLIC_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full lg:w-auto lg:absolute lg:top-36 xl:lg:top-40 lg:-right-2 xl:lg:-right-5 z-30 bg-white/95 backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 pr-4 sm:pr-5 shadow-[0_12px_28px_rgba(20,36,58,0.12)] border border-[#E2DDD1] flex items-center justify-between lg:justify-start gap-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B69A58] hover:shadow-2xl"
                  aria-label="Instagram: @crescentcluboffinance"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F7F5EF] border border-[#B69A58]/30 text-[#B69A58] group-hover:bg-[#B69A58] group-hover:text-white transition-colors">
                      <InstagramIcon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 text-left">
                      <p className="text-[10px] font-bold tracking-wider text-[#64748B] group-hover:text-[#B69A58] transition-colors uppercase leading-tight">
                        Instagram
                      </p>
                      <p className="text-xs font-semibold text-[#14243A] truncate">
                        @crescentcluboffinance
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-[#94A3B8] group-hover:text-[#B69A58] group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                {/* Floating Card 3: LINKEDIN */}
                <a
                  href={CCF_PUBLIC_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full lg:w-auto lg:absolute lg:bottom-10 lg:-right-1 xl:lg:-right-3 z-30 bg-white/95 backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 pr-4 sm:pr-5 shadow-[0_12px_28px_rgba(20,36,58,0.12)] border border-[#E2DDD1] flex items-center justify-between lg:justify-start gap-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B69A58] hover:shadow-2xl"
                  aria-label="LinkedIn: Crescent Club of Finance"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F7F5EF] border border-[#B69A58]/30 text-[#B69A58] group-hover:bg-[#B69A58] group-hover:text-white transition-colors">
                      <LinkedinIcon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 text-left">
                      <p className="text-[10px] font-bold tracking-wider text-[#64748B] group-hover:text-[#B69A58] transition-colors uppercase leading-tight">
                        LinkedIn
                      </p>
                      <p className="text-xs font-semibold text-[#14243A] truncate">
                        Crescent Club of Finance
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-[#94A3B8] group-hover:text-[#B69A58] group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>
              </div>

              {/* Editorial Script Note */}
              <div
                className="mt-4 lg:mt-0 lg:absolute lg:-bottom-3.5 lg:right-4 z-30 font-serif italic text-xs text-[#14243A]/80 tracking-wide flex items-center justify-center gap-1"
                aria-hidden="true"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#B69A58]" />
                <span>Better Financial Minds, Brighter Futures</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
