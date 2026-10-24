"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Calendar, Milestone, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { ABOUT_STORY } from "@/lib/data/about";

export function AboutStory() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F5EF] border-b border-[#E2DDD1] relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* ========================================================= */}
          {/* COLUMN 1 (LEFT): Finance-Themed Professional Photograph   */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative group">
              {/* Decorative gold backdrop accent */}
              <div
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#B69A58]/30 via-transparent to-[#14243A]/10 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />

              <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5] rounded-2xl overflow-hidden border-2 border-white bg-[#14243A] shadow-[0_16px_36px_rgba(20,36,58,0.12)]">
                <Image
                  src="/images/story-finance.jpg"
                  alt="Financial charts on laptop, research notebook, and fountain pen on desk"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient Scrim */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0D1927]/70 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Floating Tag over image */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between rounded-xl border border-white/20 bg-[#14243A]/85 backdrop-blur-md px-3.5 py-2 text-white">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-[#B69A58]" />
                    <span className="text-xs font-semibold text-[#F7F5EF]">
                      Financial Analysis &amp; Research
                    </span>
                  </div>
                  <Sparkles className="h-3.5 w-3.5 text-[#B69A58]" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 2 (CENTER): Our Story Narrative & Purpose          */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div>
              {/* Gold Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold tracking-[0.2em] text-[#B69A58] uppercase">
                  {ABOUT_STORY.eyebrow}
                </span>
                <span className="inline-block w-10 h-[2px] bg-[#B69A58]" aria-hidden="true" />
              </div>

              {/* Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#14243A] leading-tight tracking-tight mt-3">
                {ABOUT_STORY.title}
              </h2>
            </div>

            {/* Editorial Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#64748B]">
              {ABOUT_STORY.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 3 (RIGHT): Vertical Timeline with 3 Milestones     */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-[#E2DDD1] bg-white p-6 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-[#E2DDD1]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#14243A]">
                  Key Milestones
                </span>
                <span className="text-[11px] font-semibold text-[#B69A58]">
                  Club Timeline
                </span>
              </div>

              {/* Vertical Timeline Track */}
              <div className="relative pl-6 sm:pl-7 pt-6 space-y-7 before:absolute before:left-2 sm:before:left-2.5 before:top-8 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-[#B69A58] before:via-[#B69A58]/50 before:to-[#B69A58]/20">
                {ABOUT_STORY.timeline.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Marker Node */}
                    <span
                      className="absolute -left-[27px] sm:-left-[31px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#B69A58] text-[#14243A] shadow-xs transition-transform duration-200 group-hover:scale-125"
                      aria-hidden="true"
                    >
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </span>

                    {/* Timeline Content */}
                    <div className="space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#B69A58]">
                          {item.year}
                        </span>
                        <span className="text-xs text-[#E2DDD1]" aria-hidden="true">
                          •
                        </span>
                        <h4 className="font-serif text-base sm:text-lg font-bold text-[#14243A]">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed pt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
