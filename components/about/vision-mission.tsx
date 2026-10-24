"use client";

import React from "react";
import Link from "next/link";
import {
  Compass,
  Target,
  ShieldCheck,
  Users,
  Lightbulb,
  Handshake,
  Star,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/site/container";
import { ABOUT_PRINCIPLES } from "@/lib/data/about";

/* -------------------------------------------------------------------------- */
/* Types & Data                                                               */
/* -------------------------------------------------------------------------- */

interface FoundationCardData {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  isHighlighted?: boolean;
}

interface HighlightBenefit {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const FOUNDATION_CARDS: readonly FoundationCardData[] = [
  {
    id: "mission",
    number: "01",
    title: ABOUT_PRINCIPLES.mission.title,
    category: "PRACTICAL EXPOSURE & LITERACY",
    description: ABOUT_PRINCIPLES.mission.description,
    icon: Target,
  },
  {
    id: "vision",
    number: "02",
    title: ABOUT_PRINCIPLES.vision.title,
    category: "INNOVATION & LEADERSHIP",
    description: ABOUT_PRINCIPLES.vision.description,
    icon: Compass,
    isHighlighted: true,
  },
  {
    id: "values",
    number: "03",
    title: ABOUT_PRINCIPLES.values.title,
    category: "INTEGRITY & EXCELLENCE",
    description: ABOUT_PRINCIPLES.values.description,
    icon: ShieldCheck,
  },
];

const HIGHLIGHT_BENEFITS: readonly HighlightBenefit[] = [
  {
    id: "community",
    title: "Community Focused",
    description: "Building a stronger student network.",
    icon: Users,
  },
  {
    id: "innovation",
    title: "Innovation Driven",
    description: "Turning ideas into real opportunities.",
    icon: Lightbulb,
  },
  {
    id: "collaboration",
    title: "Collaborative Growth",
    description: "Together we achieve more.",
    icon: Handshake,
  },
  {
    id: "impact",
    title: "Lasting Impact",
    description: "Creating value beyond today.",
    icon: Star,
  },
];

/* -------------------------------------------------------------------------- */
/* Subcomponent: Reusable Foundation Card                                     */
/* -------------------------------------------------------------------------- */

function FoundationCard({ card }: { card: FoundationCardData }) {
  const Icon = card.icon;

  return (
    <div
      className={`group relative rounded-[22px] bg-white p-8 sm:p-9 flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1.5 focus-within:ring-2 focus-within:ring-[#B99746] ${
        card.isHighlighted
          ? "border-2 border-[#B99746] shadow-[0_16px_36px_rgba(185,151,70,0.14)] hover:shadow-[0_22px_44px_rgba(185,151,70,0.22)]"
          : "border border-[#E5DED0] shadow-[0_6px_20px_rgba(20,38,63,0.04)] hover:border-[#B99746]/70 hover:shadow-xl"
      }`}
    >
      {/* Highlight Top Badge for Card 02 (Our Vision) */}
      {card.isHighlighted && (
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-sm"
          style={{
            background: "linear-gradient(180deg, #c8a660, #a8843c)",
          }}
        >
          OUR VISION
        </div>
      )}

      <div className="space-y-6">
        {/* Top Row: Icon Container & Number */}
        <div className="flex items-center justify-between">
          {/* Subtle Cream Rounded-Square Icon Container */}
          <div
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E8D8AF]/60 bg-[#FAF7EE] text-[#B99746] shadow-2xs group-hover:bg-[#B99746] group-hover:text-white transition-colors duration-300"
            aria-hidden="true"
          >
            <Icon className="h-7 w-7 transition-transform group-hover:scale-105" />
          </div>

          {/* Number 01 / 02 / 03 */}
          <span
            className="font-serif text-2xl font-bold text-[#B99746]/50 group-hover:text-[#B99746] transition-colors"
            style={{ fontFeatureSettings: '"lnum" 1' }}
          >
            {card.number}
          </span>
        </div>

        {/* Category Label & Title */}
        <div className="space-y-1.5">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B99746]">
            {card.category}
          </div>
          <h3 className="font-serif text-2xl sm:text-[28px] font-bold text-[#14263F] leading-tight">
            {card.title}
          </h3>
        </div>

        {/* Thin Gold/Beige Divider */}
        <div className="h-px w-full bg-[#E5DED0] group-hover:bg-[#B99746]/40 transition-colors" />

        {/* Description Body */}
        <p className="text-sm sm:text-base leading-relaxed text-[#58708D]">
          {card.description}
        </p>
      </div>

      {/* Footer Link: CCF Foundation → */}
      <div className="pt-2">
        <Link
          href="#foundation"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B99746] hover:text-[#9c7c38] transition-colors group/link"
        >
          <span>CCF Foundation</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Subcomponent: Reusable Benefit Item                                        */
/* -------------------------------------------------------------------------- */

function BenefitItem({
  item,
  isLast,
}: {
  item: HighlightBenefit;
  isLast: boolean;
}) {
  const Icon = item.icon;

  return (
    <div
      className={`flex flex-col items-center text-center p-4 sm:p-5 ${
        !isLast ? "lg:border-r lg:border-[#E5DED0]/80" : ""
      }`}
    >
      {/* Cream Circle with Gold Icon */}
      <div
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8D8AF]/60 bg-[#FAF7EE] text-[#B99746] shadow-2xs mb-3.5"
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" />
      </div>

      {/* Navy Heading */}
      <h4 className="text-base font-bold text-[#14263F] mb-1">
        {item.title}
      </h4>

      {/* Blue-gray Description */}
      <p className="text-xs sm:text-sm text-[#58708D] leading-relaxed max-w-[210px]">
        {item.description}
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Main VisionMissionSection / Foundation Redesign                            */
/* -------------------------------------------------------------------------- */

export function VisionMissionSection() {
  return (
    <section id="foundation" className="relative bg-[#F7F5EF] overflow-hidden">
      {/* Top Background Decorative SVG Botanical Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Subtle Botanical Branch (Top-Left) */}
        <svg
          width="260"
          height="280"
          viewBox="0 0 260 280"
          fill="none"
          className="absolute -top-6 -left-6 opacity-40"
        >
          <path
            d="M-20 20 C40 80 90 160 120 280"
            stroke="#B99746"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M15 65 C38 48 70 58 75 84 C52 94 25 84 15 65 Z"
            fill="#E8D8AF"
            fillOpacity="0.45"
            stroke="#B99746"
            strokeWidth="1"
          />
          <path
            d="M45 110 C75 98 102 114 102 140 C78 150 50 134 45 110 Z"
            fill="#E8D8AF"
            fillOpacity="0.45"
            stroke="#B99746"
            strokeWidth="1"
          />
          <path
            d="M72 165 C106 158 128 178 124 204 C96 210 74 190 72 165 Z"
            fill="#E8D8AF"
            fillOpacity="0.45"
            stroke="#B99746"
            strokeWidth="1"
          />
          <path
            d="M12 125 C-6 145 10 170 32 165 C38 144 26 128 12 125 Z"
            fill="#E8D8AF"
            fillOpacity="0.35"
            stroke="#B99746"
            strokeWidth="1"
          />
        </svg>

        {/* Soft Gold Curved Accent (Top-Right) */}
        <svg
          width="280"
          height="280"
          viewBox="0 0 280 280"
          fill="none"
          className="absolute -top-10 -right-10 opacity-35"
        >
          <circle cx="280" cy="0" r="180" stroke="#B99746" strokeWidth="1" strokeDasharray="5 7" />
          <circle cx="280" cy="0" r="230" stroke="#E8D8AF" strokeWidth="1.5" />
          <circle cx="280" cy="0" r="120" fill="#E8D8AF" fillOpacity="0.15" />
        </svg>
      </div>

      {/* Main Container */}
      <Container className="relative z-10 pt-20 md:pt-28 pb-16 md:pb-24 space-y-16 max-w-7xl">
        {/* 1. Centered Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          {/* Eyebrow: — OUR FOUNDATION — */}
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#B99746]" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B99746]">
              OUR FOUNDATION
            </span>
            <span className="w-8 h-[1px] bg-[#B99746]" aria-hidden="true" />
          </div>

          {/* Main Display Heading */}
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#14263F] leading-[1.1] tracking-tight"
            style={{ fontFeatureSettings: '"lnum" 1' }}
          >
            Guided by Principles, Driven by Purpose.
          </h2>

          {/* Supporting Text */}
          <p className="text-[#58708D] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Our values shape who we are, how we work, and the impact we create in the lives of our students and communities.
          </p>

          {/* Thin Decorative Gold Divider */}
          <div className="flex items-center justify-center pt-2">
            <div className="h-[1.5px] w-20 bg-[#B99746] rounded-full" />
          </div>
        </div>

        {/* 2. Three Horizontally Aligned Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-2">
          {FOUNDATION_CARDS.map((card) => (
            <FoundationCard key={card.id} card={card} />
          ))}
        </div>

        {/* 3. Key Benefits / Highlight Row (4 items) */}
        <div className="rounded-[24px] border border-[#E5DED0] bg-white/90 p-6 sm:p-8 md:p-9 shadow-[0_4px_24px_rgba(20,38,63,0.03)] backdrop-blur-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            {HIGHLIGHT_BENEFITS.map((item, idx) => (
              <BenefitItem
                key={item.id}
                item={item}
                isLast={idx === HIGHLIGHT_BENEFITS.length - 1}
              />
            ))}
          </div>
        </div>
      </Container>

      {/* 4. Full-Width Deep Navy Closing Quote Section */}
      <div className="w-full bg-[#101D2D] relative overflow-hidden text-center text-white">
        {/* Organic Curved Wave Transition at the top */}
        <div className="w-full overflow-hidden leading-none bg-[#F7F5EF]">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-8 sm:h-12 block"
            aria-hidden="true"
          >
            <path
              d="M0 48 C380 12 760 0 1140 24 C1280 32 1380 44 1440 48 L1440 48 L0 48 Z"
              fill="#101D2D"
            />
          </svg>
        </div>

        <div className="relative py-14 sm:py-16 md:py-20 px-6 max-w-4xl mx-auto space-y-5">
          {/* Subtle Background Curved Gold Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15" aria-hidden="true">
            <svg width="600" height="200" viewBox="0 0 600 200" fill="none">
              <ellipse cx="300" cy="100" rx="280" ry="70" stroke="#B99746" strokeWidth="1" />
              <ellipse cx="300" cy="100" rx="200" ry="50" stroke="#B99746" strokeWidth="1" strokeDasharray="4 6" />
            </svg>
          </div>

          {/* Closing Quote */}
          <blockquote className="relative z-10 font-serif italic text-2xl sm:text-3xl md:text-4xl text-white/95 tracking-tight font-normal leading-snug">
            &ldquo;Better financial minds. A brighter future.&rdquo;
          </blockquote>

          {/* Uppercase Gold Foundation Tagline */}
          <div className="relative z-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#B99746] font-bold">
            <span className="w-8 h-[1px] bg-[#B99746]/70" aria-hidden="true" />
            <span>CCF FOUNDATION</span>
            <span className="w-8 h-[1px] bg-[#B99746]/70" aria-hidden="true" />
          </div>
        </div>

        {/* Organic Curved Wave Transition at the bottom */}
        <div className="w-full overflow-hidden leading-none bg-[#F7F5EF]">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-8 sm:h-12 block"
            aria-hidden="true"
          >
            <path
              d="M0 0 C360 36 720 48 1080 24 C1260 16 1380 4 1440 0 L1440 0 L0 0 Z"
              fill="#101D2D"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
