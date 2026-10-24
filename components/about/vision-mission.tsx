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
      className={`group relative rounded-[22px] bg-white p-8 sm:p-9 lg:p-10 flex flex-col justify-between space-y-7 transition-all duration-300 hover:-translate-y-2 focus-within:ring-2 focus-within:ring-[#B99746] ${
        card.isHighlighted
          ? "border-2 border-[#B99746] shadow-[0_16px_36px_rgba(185,151,70,0.18)] hover:shadow-[0_24px_48px_rgba(185,151,70,0.26)]"
          : "border border-[#E5DED0] shadow-[0_6px_22px_rgba(20,38,63,0.04)] hover:border-[#B99746]/70 hover:shadow-xl"
      }`}
    >
      {/* Highlight Top Pill Badge for Card 02 (Our Vision) */}
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
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E8D8AF]/70 bg-[#FAF7EE] text-[#B99746] shadow-2xs group-hover:bg-[#B99746] group-hover:text-white transition-colors duration-300"
            aria-hidden="true"
          >
            <Icon className="h-7 w-7 transition-transform group-hover:scale-105" />
          </div>

          {/* Number 01 / 02 / 03 */}
          <span
            className="font-serif text-2xl sm:text-[26px] font-bold text-[#B99746]/50 group-hover:text-[#B99746] transition-colors"
            style={{ fontFeatureSettings: '"lnum" 1' }}
          >
            {card.number}
          </span>
        </div>

        {/* Category Label & Title */}
        <div className="space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B99746]">
            {card.category}
          </div>
          <h3
            className="font-serif text-2xl sm:text-[30px] font-bold text-[#14263F] leading-tight"
            style={{ fontFeatureSettings: '"lnum" 1' }}
          >
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
      className={`flex flex-col items-center text-center p-2.5 sm:p-5 lg:p-6 ${
        !isLast ? "lg:border-r lg:border-[#E5DED0]/80" : ""
      }`}
    >
      {/* Cream Circle with Gold Icon */}
      <div
        className="flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-[#E8D8AF]/70 bg-[#FAF7EE] text-[#B99746] shadow-2xs mb-2.5 sm:mb-3.5"
        aria-hidden="true"
      >
        <Icon className="h-4 sm:h-5 w-4 sm:w-5" />
      </div>

      {/* Navy Heading */}
      <h4 className="text-sm sm:text-base lg:text-[17px] font-bold text-[#14263F] mb-1">
        {item.title}
      </h4>

      {/* Blue-gray Description */}
      <p className="text-[11px] sm:text-sm text-[#58708D] leading-relaxed max-w-[180px] sm:max-w-[210px]">
        {item.description}
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Main VisionMissionSection / Foundation Section                             */
/* -------------------------------------------------------------------------- */

export function VisionMissionSection() {
  return (
    <section id="foundation" className="relative bg-[#F7F5EF] overflow-hidden">
      {/* Top Background Decorative SVG Botanical & Gold Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Delicate Editorial Botanical Branch (Top-Left) */}
        <svg
          width="320"
          height="340"
          viewBox="0 0 320 340"
          fill="none"
          className="absolute -top-4 -left-4 opacity-55"
        >
          <defs>
            <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8D8AF" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#B99746" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4E8C8" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#D4B87A" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          {/* Main Stem */}
          <path
            d="M-30 10 C30 60 90 140 135 290"
            stroke="#B99746"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Leaf 1 */}
          <path
            d="M10 50 C38 32 74 44 82 72 C56 82 24 70 10 50 Z"
            fill="url(#leafGrad1)"
            stroke="#B99746"
            strokeWidth="1"
          />
          {/* Leaf 2 */}
          <path
            d="M42 95 C78 82 110 98 112 126 C82 136 50 120 42 95 Z"
            fill="url(#leafGrad2)"
            stroke="#B99746"
            strokeWidth="1"
          />
          {/* Leaf 3 */}
          <path
            d="M74 150 C112 142 140 162 136 190 C104 198 78 178 74 150 Z"
            fill="url(#leafGrad1)"
            stroke="#B99746"
            strokeWidth="1"
          />
          {/* Leaf 4 (Secondary Inner) */}
          <path
            d="M15 110 C-5 130 8 160 32 155 C40 132 28 114 15 110 Z"
            fill="url(#leafGrad2)"
            stroke="#B99746"
            strokeWidth="1"
          />
          {/* Leaf 5 */}
          <path
            d="M102 210 C138 205 160 225 152 250 C126 256 106 238 102 210 Z"
            fill="url(#leafGrad1)"
            stroke="#B99746"
            strokeWidth="1"
          />
        </svg>

        {/* Soft Gold Ambient Rings (Top-Right) */}
        <svg
          width="320"
          height="320"
          viewBox="0 0 320 320"
          fill="none"
          className="absolute -top-12 -right-12 opacity-40"
        >
          <circle cx="320" cy="0" r="210" stroke="#B99746" strokeWidth="1" strokeDasharray="5 8" />
          <circle cx="320" cy="0" r="270" stroke="#E8D8AF" strokeWidth="1.5" />
          <circle cx="320" cy="0" r="140" fill="#E8D8AF" fillOpacity="0.12" />
        </svg>
      </div>

      {/* Main Content Container (Max width ~1400px) */}
      <Container className="relative z-10 pt-20 md:pt-28 pb-16 md:pb-24 space-y-16 max-w-7xl">
        {/* 1. Centered Hero Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          {/* Eyebrow: — OUR FOUNDATION — */}
          <div className="inline-flex items-center gap-3">
            <span className="w-10 h-[1px] bg-[#B99746]" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B99746]">
              OUR FOUNDATION
            </span>
            <span className="w-10 h-[1px] bg-[#B99746]" aria-hidden="true" />
          </div>

          {/* Main Section Heading (H2) */}
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[#14263F] leading-[1.08] tracking-tight"
            style={{ fontFeatureSettings: '"lnum" 1' }}
          >
            Guided by Principles, Driven by Purpose.
          </h2>

          {/* Supporting Text */}
          <p className="text-[#58708D] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Our values shape who we are, how we work, and the impact we create in the lives of our students and communities.
          </p>

          {/* Thin Decorative Gold Divider Underneath */}
          <div className="flex items-center justify-center pt-2">
            <div className="h-[1.5px] w-20 bg-[#B99746] rounded-full" />
          </div>
        </div>

        {/* 2 & 3. Three Horizontally Aligned Cards (Mission, Vision, Values) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-2">
          {FOUNDATION_CARDS.map((card) => (
            <FoundationCard key={card.id} card={card} />
          ))}
        </div>

        {/* 4. Four-Item Benefits Row (2-col mobile, 4-col desktop) */}
        <div className="rounded-[24px] border border-[#E5DED0] bg-white p-5 sm:p-8 md:p-10 shadow-[0_6px_24px_rgba(20,38,63,0.03)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0">
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
    </section>
  );
}
