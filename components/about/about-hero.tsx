"use client";

import React from "react";
import Link from "next/link";
import {
  TrendingUp,
  BookOpen,
  Users,
  Compass,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/site/container";
import { ABOUT_HERO } from "@/lib/data/about";

export function AboutHero() {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-x-clip py-12 sm:py-16 lg:py-20 border-b border-[#E2DDD1]"
      style={{
        background:
          "radial-gradient(65% 75% at 68% 45%, rgba(230, 207, 152, 0.45), transparent 70%), linear-gradient(180deg, #FDFCF9 0%, #F7F5EF 100%)",
      }}
    >
      {/* Ambient Sweeping Financial Curve SVG in Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30 select-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 0 540 C 340 440, 680 740, 1080 360 C 1240 200, 1360 230, 1440 180"
          stroke="#B69A58"
          strokeWidth="1.5"
          strokeOpacity="0.45"
        />
        <path
          d="M 0 580 C 360 480, 700 780, 1110 400 C 1270 240, 1380 270, 1440 220"
          stroke="#B69A58"
          strokeWidth="1"
          strokeDasharray="6 6"
          strokeOpacity="0.25"
        />
        <circle cx="1080" cy="360" r="4" fill="#B69A58" />
        <circle cx="1240" cy="200" r="4.5" fill="#B69A58" />
        <circle cx="1360" cy="230" r="5" fill="#B69A58" />
      </svg>

      <Container className="relative z-10 w-full max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Eyebrow, Heading, Paragraph, 3 Features, CTA */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-5 lg:space-y-6 text-left z-20">
            {/* Small Gold Eyebrow: ABOUT US + Gold Line */}
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#B69A58] uppercase">
                {ABOUT_HERO.eyebrow}
              </span>
              <span
                className="inline-block w-14 h-[2px] bg-[#B69A58]"
                aria-hidden="true"
              />
              <span className="sr-only">Crescent Club of Finance</span>
            </div>

            {/* Main Heading: Two-line editorial serif */}
            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px] leading-[1.05] tracking-tight">
              <span className="text-[#14243A] block">
                {ABOUT_HERO.titleLine1}
              </span>
              <span className="text-[#B69A58] block mt-1">
                {ABOUT_HERO.titleLine2}
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="font-sans text-sm sm:text-base lg:text-lg text-[#64748B] leading-relaxed max-w-xl">
              {ABOUT_HERO.subtitle}
            </p>

            {/* Three Icon-and-Text Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {/* 1. Learning & Growth */}
              <div className="group flex items-center gap-3 rounded-2xl border border-[#E2DDD1] bg-white/95 backdrop-blur-sm p-3 shadow-xs transition-all duration-300 hover:border-[#B69A58]/70 hover:shadow-md hover:-translate-y-0.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#B69A58]/30 bg-[#F7F5EF] text-[#B69A58] group-hover:bg-[#B69A58] group-hover:text-white transition-colors">
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-[#14243A] block leading-tight">
                    Learning &amp; Growth
                  </span>
                  <span className="text-[11px] text-[#64748B] block mt-0.5 leading-snug">
                    Skills &amp; Literacy
                  </span>
                </div>
              </div>

              {/* 2. Networking & Collaboration */}
              <div className="group flex items-center gap-3 rounded-2xl border border-[#E2DDD1] bg-white/95 backdrop-blur-sm p-3 shadow-xs transition-all duration-300 hover:border-[#B69A58]/70 hover:shadow-md hover:-translate-y-0.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#B69A58]/30 bg-[#F7F5EF] text-[#B69A58] group-hover:bg-[#B69A58] group-hover:text-white transition-colors">
                  <Users className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-[#14243A] block leading-tight">
                    Networking &amp; Collaboration
                  </span>
                  <span className="text-[11px] text-[#64748B] block mt-0.5 leading-snug">
                    Interdisciplinary Community
                  </span>
                </div>
              </div>

              {/* 3. Real-World Exposure */}
              <div className="group flex items-center gap-3 rounded-2xl border border-[#E2DDD1] bg-white/95 backdrop-blur-sm p-3 shadow-xs transition-all duration-300 hover:border-[#B69A58]/70 hover:shadow-md hover:-translate-y-0.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#B69A58]/30 bg-[#F7F5EF] text-[#B69A58] group-hover:bg-[#B69A58] group-hover:text-white transition-colors">
                  <TrendingUp className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-[#14243A] block leading-tight">
                    Real-World Exposure
                  </span>
                  <span className="text-[11px] text-[#64748B] block mt-0.5 leading-snug">
                    Market Applications
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full font-bold text-sm text-[#14243A] shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58]"
                style={{
                  background:
                    "linear-gradient(135deg, #e6cf98 0%, #b8964f 55%, #9c7c38 100%)",
                }}
              >
                <span>Explore Academic Events</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <Link
                href="/join-us"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full font-semibold text-sm text-[#14243A] bg-white border border-[#E2DDD1] shadow-xs transition-all duration-200 hover:border-[#B69A58] hover:bg-[#F7F5EF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58]"
              >
                <span>Join CCF</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Actual Crescent College Sunset Aerial Photo */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 relative w-full flex items-center justify-center min-h-[440px] sm:min-h-[480px] lg:min-h-[520px]">
            {/* 1. Large Gold Ambient Sphere (Bottom-Right behind frame) */}
            <div
              className="absolute -right-4 sm:right-2 bottom-0 sm:bottom-4 w-44 h-44 sm:w-56 sm:h-56 rounded-full pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, #fff2c9, #e3c47f 35%, #b8964f 70%, #8a6a2a)",
                boxShadow:
                  "0 25px 60px rgba(184, 150, 79, 0.35), inset 0 -10px 25px rgba(138, 106, 42, 0.5), inset 0 10px 20px rgba(255, 242, 201, 0.7)",
              }}
              aria-hidden="true"
            />

            {/* 2. Top-Right Gold Trend Badge */}
            <div
              className="absolute right-4 sm:right-8 -top-3 sm:top-0 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center p-0.5 shadow-[0_12px_28px_rgba(184,150,79,0.35)] border-2 border-white pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, #fff2c9, #e3c47f 35%, #b8964f 70%, #8a6a2a)",
              }}
              aria-hidden="true"
            >
              <div className="w-full h-full rounded-full flex items-center justify-center bg-white/20">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#14243A] stroke-[2.75]" />
              </div>
            </div>

            {/* 3. Small Floating Student Metric Badge (Top-Left) */}
            <div className="absolute -left-2 sm:left-2 top-6 sm:top-8 z-30 rounded-2xl border border-[#E2DDD1] bg-white/95 backdrop-blur-md px-3.5 py-2 shadow-lg flex items-center gap-2.5">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-left">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                  Community
                </span>
                <span className="block text-xs font-bold text-[#14243A]">
                  100% Student-Driven
                </span>
              </div>
            </div>

            {/* 4. Large, Premium Tilted Frame with Actual Sunset Aerial Campus Photo */}
            <div className="relative z-10 w-full max-w-[560px] group">
              <div
                className="relative rounded-[26px] sm:rounded-[32px] p-2 sm:p-2.5 bg-gradient-to-tr from-[#B69A58]/50 via-white to-[#B69A58]/30 shadow-[0_24px_60px_rgba(20,36,58,0.22),0_10px_24px_rgba(182,154,88,0.18)] transition-all duration-500 transform lg:-rotate-2 group-hover:rotate-0 group-hover:scale-[1.01]"
              >
                <div className="relative w-full aspect-[16/11] rounded-[22px] sm:rounded-[28px] overflow-hidden bg-[#14243A] border-2 border-white/80">
                  <picture className="w-full h-full block">
                    <source
                      srcSet="/images/campus-hero-sunset-2k.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/campus-hero-sunset.png"
                      alt="Crescent College Vandalur Sunset Aerial Campus View"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="eager"
                    />
                  </picture>

                  {/* Gentle Gradient Scrim at bottom to enhance panel integration */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0D1927]/60 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Campus Watermark / Identity Tag in Photo Corner */}
                  <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-[#14243A]/85 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-[#F7F5EF] shadow-md">
                    <Sparkles className="h-3 w-3 text-[#B69A58]" aria-hidden="true" />
                    <span>Crescent College, Vandalur</span>
                  </div>
                </div>

                {/* 5. Navy Floating Panel Over One Corner */}
                <div className="absolute -bottom-5 sm:-bottom-6 right-3 sm:right-6 z-30 rounded-2xl border border-[#B69A58]/40 bg-[#14243A] text-white p-3.5 sm:p-4.5 shadow-[0_16px_36px_rgba(10,20,35,0.45)] backdrop-blur-xl max-w-[260px] sm:max-w-[300px] transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="flex h-2 w-2 rounded-full bg-[#B69A58]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#B69A58]">
                      CCF Vision
                    </span>
                  </div>
                  <p className="font-serif text-base sm:text-lg font-bold text-[#F7F5EF] leading-snug">
                    &ldquo;Finance Builds Better Futures&rdquo;
                  </p>
                  <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-[#94A3B8]">
                    <span>Student-Led Initiative</span>
                    <span className="text-[#B69A58] font-bold">Est. 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
