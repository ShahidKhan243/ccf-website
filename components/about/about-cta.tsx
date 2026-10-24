"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { FadeIn } from "@/components/motion/fade-in";
import { ABOUT_JOIN_JOURNEY } from "@/lib/data/about";

export function AboutCta() {
  return (
    <section className="relative overflow-hidden bg-[#14243A] py-20 md:py-28 text-[#F7F5EF] border-t border-[#0D1927]">
      {/* Top Gold Accent Rule */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#B69A58]" aria-hidden="true" />

      {/* Subtle Campus Line-Art & Financial Wave Decoration */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-15 select-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 400"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Architectural campus perspective & finance grid line art */}
        <path
          d="M 0 350 L 300 220 L 600 280 L 900 160 L 1200 240 L 1440 180"
          stroke="#B69A58"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M 150 400 L 450 260 L 750 320 L 1050 200 L 1350 290"
          stroke="#B69A58"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <circle cx="300" cy="220" r="4" fill="#B69A58" />
        <circle cx="600" cy="280" r="4" fill="#B69A58" />
        <circle cx="900" cy="160" r="5" fill="#B69A58" />
        <circle cx="1200" cy="240" r="4" fill="#B69A58" />

        {/* Subtle geometric campus pillar grid */}
        <line x1="200" y1="100" x2="200" y2="400" stroke="#B69A58" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="400" y1="80" x2="400" y2="400" stroke="#B69A58" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="600" y1="120" x2="600" y2="400" stroke="#B69A58" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="800" y1="60" x2="800" y2="400" stroke="#B69A58" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="1000" y1="90" x2="1000" y2="400" stroke="#B69A58" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="1200" y1="110" x2="1200" y2="400" stroke="#B69A58" strokeWidth="0.5" strokeOpacity="0.2" />
      </svg>

      <Container className="relative z-10">
        <FadeIn direction="up">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Small Gold Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B69A58]/40 bg-[#1e3452]/70 px-4 py-1.5 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#B69A58]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#B69A58]">
                {ABOUT_JOIN_JOURNEY.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F7F5EF] leading-tight tracking-tight">
              {ABOUT_JOIN_JOURNEY.title}
            </h2>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base md:text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
              {ABOUT_JOIN_JOURNEY.description}
            </p>

            {/* Gold Join Us CTA Button connected to membership flow */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={ABOUT_JOIN_JOURNEY.ctaHref}
                className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-bold text-base text-[#14243A] shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58]"
                style={{
                  background:
                    "linear-gradient(135deg, #e6cf98 0%, #b8964f 55%, #9c7c38 100%)",
                }}
              >
                <span>{ABOUT_JOIN_JOURNEY.ctaText}</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>

              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-[#F7F5EF] border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58]"
              >
                <span>Explore Academic Events</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
