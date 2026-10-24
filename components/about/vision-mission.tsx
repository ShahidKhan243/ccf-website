"use client";

import React from "react";
import { Compass, Target, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/site/container";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { ABOUT_PRINCIPLES } from "@/lib/data/about";

export function VisionMissionSection() {
  const cards = [
    {
      id: "mission",
      title: ABOUT_PRINCIPLES.mission.title,
      text: ABOUT_PRINCIPLES.mission.description,
      icon: Target,
      number: "01",
      tagline: "Practical Exposure & Literacy",
    },
    {
      id: "vision",
      title: ABOUT_PRINCIPLES.vision.title,
      text: ABOUT_PRINCIPLES.vision.description,
      icon: Compass,
      number: "02",
      tagline: "Innovation & Leadership",
    },
    {
      id: "values",
      title: ABOUT_PRINCIPLES.values.title,
      text: ABOUT_PRINCIPLES.values.description,
      icon: ShieldCheck,
      number: "03",
      tagline: "Integrity & Excellence",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F7F5EF] border-b border-[#E2DDD1] relative overflow-hidden">
      <Container className="space-y-16">
        {/* Centered Heading */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B69A58]/40 bg-white px-4 py-1.5 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#B69A58]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#B69A58]">
                Principles &amp; Purpose
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#14243A] leading-tight tracking-tight">
              {ABOUT_PRINCIPLES.heading}
            </h2>

            {/* Minimalist Financial Divider */}
            <div className="flex items-center justify-center pt-2">
              <div className="h-[2px] w-20 bg-[#B69A58] rounded-full" />
            </div>
          </div>
        </FadeIn>

        {/* Three Evenly Spaced Columns with Elegant Gold Icons */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <StaggerItem key={card.id}>
                <div className="group h-full rounded-2xl border border-[#E2DDD1] bg-white p-8 sm:p-9 flex flex-col justify-between space-y-6 shadow-xs transition-all duration-300 hover:border-[#B69A58]/80 hover:shadow-xl hover:-translate-y-1">
                  <div className="space-y-5">
                    {/* Header Row: Gold Icon & Index Number */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#B69A58]/40 bg-[#F7F5EF] text-[#B69A58] shadow-xs group-hover:bg-[#B69A58] group-hover:text-white transition-colors duration-300">
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </div>
                      <span className="font-serif text-xl font-bold text-[#B69A58]/60 group-hover:text-[#B69A58] transition-colors">
                        {card.number}
                      </span>
                    </div>

                    {/* Card Title & Subtitle */}
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#B69A58]">
                        {card.tagline}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#14243A]">
                        {card.title}
                      </h3>
                    </div>

                    {/* Thin Separator */}
                    <div className="h-px w-full bg-[#E2DDD1] group-hover:bg-[#B69A58]/30 transition-colors" />

                    {/* Card Body */}
                    <p className="text-sm sm:text-base leading-relaxed text-[#64748B]">
                      {card.text}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-[#B69A58]">
                    <span>CCF Foundation</span>
                    <span aria-hidden="true">→</span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
