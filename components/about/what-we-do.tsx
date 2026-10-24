"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Presentation,
  Users,
  Briefcase,
  ArrowRight,
  Sparkles,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/site/container";
import { FadeIn } from "@/components/motion/fade-in";
import { ABOUT_WHAT_WE_DO } from "@/lib/data/about";

const ICONS = {
  GraduationCap,
  Presentation,
  Users,
  Briefcase,
};

export function WhatCCFDoes() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F5EF] border-b border-[#E2DDD1] relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* ========================================================= */}
          {/* COLUMN 1 (LEFT): Heading, Paragraph & Explore Events CTA  */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <FadeIn direction="right">
              {/* Gold Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold tracking-[0.2em] text-[#B69A58] uppercase">
                  WHAT WE DO
                </span>
                <span className="inline-block w-10 h-[2px] bg-[#B69A58]" aria-hidden="true" />
              </div>

              {/* Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#14243A] leading-tight tracking-tight mt-3">
                {ABOUT_WHAT_WE_DO.heading}
              </h2>

              {/* Supporting Paragraph */}
              <p className="text-sm sm:text-base leading-relaxed text-[#64748B] mt-4">
                {ABOUT_WHAT_WE_DO.description}
              </p>

              {/* Explore Our Events Button linking to existing Events page */}
              <div className="pt-3">
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-[#14243A] shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58]"
                  style={{
                    background:
                      "linear-gradient(135deg, #e6cf98 0%, #b8964f 55%, #9c7c38 100%)",
                  }}
                >
                  <span>Explore Our Events</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 2 (CENTER): Four Clean Activity Cards (2x2 Grid)   */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ABOUT_WHAT_WE_DO.cards.map((card, idx) => {
              const Icon = ICONS[card.icon as keyof typeof ICONS] || GraduationCap;
              return (
                <FadeIn key={card.id} direction="up" delay={idx * 0.1}>
                  <div className="group h-full rounded-2xl border border-[#E2DDD1] bg-white p-5 sm:p-6 space-y-3.5 shadow-xs transition-all duration-300 hover:border-[#B69A58]/80 hover:shadow-md hover:-translate-y-1">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#B69A58]/30 bg-[#F7F5EF] text-[#B69A58] group-hover:bg-[#B69A58] group-hover:text-white transition-colors duration-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#14243A] leading-snug">
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* ========================================================= */}
          {/* COLUMN 3 (RIGHT): Authentic Crescent Campus Photograph    */}
          {/* ========================================================= */}
          <div className="lg:col-span-3 space-y-4">
            <FadeIn direction="left">
              <div className="relative group">
                <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white bg-[#14243A] shadow-[0_16px_36px_rgba(20,36,58,0.12)]">
                  <Image
                    src="/images/campus-panorama.png"
                    alt="Crescent College Campus Aerial Panorama"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 360px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Scrim */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0D1927]/80 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Caption badge */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 rounded-xl border border-white/20 bg-[#14243A]/90 backdrop-blur-md p-3 text-white">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#B69A58] mb-0.5">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Crescent College Campus</span>
                    </div>
                    <p className="text-[11px] text-[#94A3B8] leading-tight">
                      Vandalur, Chennai
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
