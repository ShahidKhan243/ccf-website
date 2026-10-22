"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/site/container";
import { FadeIn } from "@/components/motion/fade-in";
import { CcfLogo } from "@/components/site/logo";

/**
 * 1. Card 1 — Financial Planning
 * Ivory/white card face with navy text, personal finance badge,
 * minimal savings/goal graphic, and subtle gold accents.
 */
function FinancialPlanningCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-[320px] sm:w-[350px] md:w-[380px] h-[210px] sm:h-[230px] rounded-2xl p-6 sm:p-7 bg-[#FFFFFF] border border-[#E2DDD1] shadow-[0_15px_35px_-8px_rgba(20,36,58,0.14)] flex flex-col justify-between overflow-hidden select-none transition-all duration-500 ${className}`}
    >
      {/* Subtle background luxury watermark */}
      <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full border-[1.5px] border-[#B69A58]/15 pointer-events-none" />
      <div className="absolute -right-2 -bottom-2 w-28 h-28 rounded-full border-[1.5px] border-[#B69A58]/20 pointer-events-none" />

      {/* Top Header: Chip & Label */}
      <div className="flex items-center justify-between relative z-10">
        {/* Minimal Metallic EMV Chip graphic */}
        <div className="w-10 h-8 rounded-md bg-gradient-to-br from-[#E6D5AC] via-[#D5BF8A] to-[#B69A58] border border-[#9E8342] p-1 flex flex-col justify-between shadow-inner">
          <div className="w-full h-[1px] bg-[#9E8342]/40" />
          <div className="flex justify-between items-center h-full">
            <div className="w-[1px] h-full bg-[#9E8342]/40" />
            <div className="w-3 h-2 rounded-sm border border-[#9E8342]/50" />
            <div className="w-[1px] h-full bg-[#9E8342]/40" />
          </div>
          <div className="w-full h-[1px] bg-[#9E8342]/40" />
        </div>

        {/* Category pill */}
        <span className="font-sans text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#F7F5EF] border border-[#E2DDD1] text-[#B69A58]">
          PERSONAL FINANCE
        </span>
      </div>

      {/* Card Content & Minimal Savings Target Graphic */}
      <div className="flex items-center justify-between relative z-10 my-auto">
        <div className="space-y-1">
          <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#14243A] tracking-tight">
            Financial Planning
          </h3>
          <p className="font-sans text-xs text-[#64748B]">
            Budgeting & Wealth Compounding
          </p>
        </div>

        {/* Minimal savings / goal target circular graphic */}
        <div className="relative w-12 h-12 shrink-0">
          <svg viewBox="0 0 48 48" className="w-full h-full transform -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="19"
              stroke="#EFECE3"
              strokeWidth="3.5"
              fill="none"
            />
            <circle
              cx="24"
              cy="24"
              r="19"
              stroke="#B69A58"
              strokeWidth="3.5"
              strokeDasharray="120"
              strokeDashoffset="35"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-sans text-[11px] font-bold text-[#14243A]">
            75%
          </span>
        </div>
      </div>

      {/* Card Bottom: Gold detail rule & Cardholder identifier */}
      <div className="flex items-center justify-between pt-3 border-t border-[#EFECE3] relative z-10 text-[11px] text-[#64748B]">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#B69A58]" />
          <span className="font-medium tracking-wider text-[#14243A]/80">CRESCENT CCF</span>
        </div>
        <span className="font-mono text-[10px] tracking-widest text-[#B69A58] font-semibold">
          SAVINGS • STRATEGY
        </span>
      </div>
    </div>
  );
}

/**
 * 2. Card 2 — Investment Portfolio
 * Navy card face (#14243A) with white text, gold accents (#B69A58),
 * minimal portfolio asset allocation arcs, and decorative lines.
 */
function InvestmentPortfolioCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-[320px] sm:w-[350px] md:w-[380px] h-[210px] sm:h-[230px] rounded-2xl p-6 sm:p-7 bg-[#14243A] border border-[#B69A58]/35 shadow-[0_20px_45px_-10px_rgba(20,36,58,0.35)] flex flex-col justify-between overflow-hidden select-none transition-all duration-500 text-white ${className}`}
    >
      {/* Decorative gold background gradient glow */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-[#B69A58]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header: Chip & Category Label */}
      <div className="flex items-center justify-between relative z-10">
        {/* Minimal Metallic Gold Chip */}
        <div className="w-10 h-8 rounded-md bg-gradient-to-br from-[#E6D5AC] via-[#D5BF8A] to-[#B69A58] border border-[#9E8342] p-1 flex flex-col justify-between shadow-sm">
          <div className="w-full h-[1px] bg-[#9E8342]/40" />
          <div className="flex justify-between items-center h-full">
            <div className="w-[1px] h-full bg-[#9E8342]/40" />
            <div className="w-3 h-2 rounded-sm border border-[#9E8342]/50" />
            <div className="w-[1px] h-full bg-[#9E8342]/40" />
          </div>
          <div className="w-full h-[1px] bg-[#9E8342]/40" />
        </div>

        {/* Contactless symbol & Category */}
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-[#B69A58]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8.5 16.5a5 5 0 0 1 0-9" strokeLinecap="round" />
            <path d="M12 19a8.5 8.5 0 0 0 0-14" strokeLinecap="round" />
            <path d="M15.5 21.5a12 12 0 0 0 0-19" strokeLinecap="round" />
          </svg>
          <span className="font-sans text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#0D1927] border border-[#B69A58]/30 text-[#B69A58]">
            ASSET ALLOCATION
          </span>
        </div>
      </div>

      {/* Card Content & Tasteful Abstract Portfolio Graphic */}
      <div className="flex items-center justify-between relative z-10 my-auto">
        <div className="space-y-1">
          <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#F7F5EF] tracking-tight">
            Investment Portfolio
          </h3>
          <p className="font-sans text-xs text-[#94A3B8]">
            Diversification & Risk Frameworks
          </p>
        </div>

        {/* Minimal portfolio allocation arcs graphic */}
        <div className="w-16 h-10 shrink-0">
          <svg viewBox="0 0 64 36" className="w-full h-full" fill="none">
            {/* Concentric asset curves */}
            <path d="M 4 32 Q 24 8 58 14" stroke="#B69A58" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 12 32 Q 30 18 58 22" stroke="#FFFFFF" strokeWidth="1.8" strokeOpacity="0.75" strokeLinecap="round" />
            <path d="M 20 32 Q 36 25 58 28" stroke="#64748B" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Card Bottom: Gold Accent Detail */}
      <div className="flex items-center justify-between pt-3 border-t border-white/10 relative z-10 text-[11px] text-[#94A3B8]">
        <span className="font-mono text-[10px] tracking-widest text-[#B69A58] font-semibold">
          CAPITAL MARKETS • DIVERSIFIED
        </span>
        <div className="flex items-center gap-1.5 text-white/90">
          <span className="font-medium text-[11px]">CCF PORTFOLIO</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 3. Card 3 — Finance Club Membership
 * Premium gold/ivory card face with navy text, CCF crest logo,
 * elegant decorative barcode-like lines (decorative graphics only).
 */
function FinanceClubMembershipCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-[320px] sm:w-[350px] md:w-[380px] h-[210px] sm:h-[230px] rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-[#F5EEDC] via-[#E8D9B5] to-[#D1BA85] border border-[#B69A58] shadow-[0_22px_45px_-8px_rgba(20,36,58,0.22)] flex flex-col justify-between overflow-hidden select-none transition-all duration-500 text-[#14243A] ${className}`}
    >
      {/* Holographic metallic light sheen */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent pointer-events-none" />

      {/* Top Header: CCF Crest Logo Area & Membership Badge */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-full bg-white p-0.5 border border-[#B69A58]/50 shadow-sm flex items-center justify-center">
            <CcfLogo size="sm" className="border-none shadow-none bg-transparent" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-[11px] font-bold text-[#14243A] leading-tight">
              CCF OFFICIAL
            </span>
            <span className="font-sans text-[9px] text-[#14243A]/70 uppercase tracking-wider">
              MEMBER CARD
            </span>
          </div>
        </div>

        <span className="font-sans text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#14243A] text-[#F7F5EF] shadow-sm">
          ACTIVE MEMBER
        </span>
      </div>

      {/* Card Center: Titles */}
      <div className="space-y-1 relative z-10 my-auto">
        <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#14243A] tracking-tight">
          Club Membership
        </h3>
        <p className="font-sans text-xs font-semibold text-[#14243A]/80 tracking-wide">
          Crescent Club of Finance
        </p>
      </div>

      {/* Card Bottom: Decorative barcode-like lines (decorative graphics only, not real scannable barcodes) */}
      <div className="flex items-end justify-between pt-2.5 border-t border-[#14243A]/15 relative z-10">
        <div className="space-y-1">
          <span className="block font-mono text-[9px] tracking-wider text-[#14243A]/75 font-semibold">
            B.S. ABDUR RAHMAN CRESCENT
          </span>
          <span className="block font-sans text-[10px] font-bold text-[#14243A]">
            CAMPUS CHAPTER • 2024–25
          </span>
        </div>

        {/* Elegant decorative barcode-like lines */}
        <div
          className="flex items-center gap-[2.5px] h-6 px-2 py-1 rounded bg-white/70 border border-[#B69A58]/30 shadow-inner"
          aria-hidden="true"
        >
          <div className="w-[1.5px] h-4 bg-[#14243A]" />
          <div className="w-[3px] h-4 bg-[#14243A]" />
          <div className="w-[1px] h-4 bg-[#14243A]" />
          <div className="w-[2px] h-4 bg-[#14243A]" />
          <div className="w-[4px] h-4 bg-[#14243A]" />
          <div className="w-[1px] h-4 bg-[#14243A]" />
          <div className="w-[2.5px] h-4 bg-[#14243A]" />
          <div className="w-[1.5px] h-4 bg-[#14243A]" />
          <div className="w-[3px] h-4 bg-[#14243A]" />
          <div className="w-[1px] h-4 bg-[#14243A]" />
          <div className="w-[2px] h-4 bg-[#14243A]" />
        </div>
      </div>
    </div>
  );
}

/**
 * Premium Overlapping Tilted Finance Cards Section
 *
 * Replaces the old green card section with the requested 3 overlapping banking cards:
 * - Card 1 (Financial Planning): Ivory/White face, tilted slightly left
 * - Card 2 (Investment Portfolio): Navy face, stands upright on the right
 * - Card 3 (Club Membership): Gold/Ivory face, tilted slightly right in the foreground
 * - Responsive desktop overlapping composition + clean stacked layout on mobile
 */
export function FloatingFinanceCardsSection() {
  return (
    <section
      className="py-18 md:py-24 bg-[#F7F5EF] border-b border-[#E2DDD1] relative overflow-hidden"
      aria-label="Crescent Club of Finance Cards Showcase"
    >
      {/* Subtle ambient warm lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#B69A58]/6 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <Container>
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B69A58]/35 bg-[#FFFFFF] px-4 py-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B69A58]" />
              <span className="font-sans text-xs font-bold tracking-widest uppercase text-[#B69A58]">
                EXECUTIVE PILLARS
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#14243A]">
              Strategic Financial Capabilities
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <p className="font-sans text-base sm:text-lg text-[#64748B] max-w-xl mx-auto leading-relaxed">
              Cultivating hands-on competence across personal financial planning, institutional portfolio research, and active student membership.
            </p>
          </FadeIn>
        </div>

        {/* Desktop Composition: Three Overlapping Floating Tilted Cards */}
        <div className="hidden lg:flex items-center justify-center relative min-h-[420px] w-full max-w-5xl mx-auto py-8">
          {/* Card 1 — Financial Planning: Tilted slightly left in the mid-layer */}
          <div className="absolute left-[8%] top-[10%] -rotate-6 scale-95 hover:scale-100 hover:-rotate-3 hover:z-40 transition-all duration-500 z-10 cursor-pointer">
            <FinancialPlanningCard />
          </div>

          {/* Card 2 — Investment Portfolio: Stands upright / slight tilt on the right */}
          <div className="absolute right-[8%] top-[4%] rotate-3 scale-100 hover:scale-105 hover:rotate-1 hover:z-40 transition-all duration-500 z-20 cursor-pointer">
            <InvestmentPortfolioCard />
          </div>

          {/* Card 3 — Finance Club Membership: Foreground, tilted slightly right */}
          <div className="relative top-[45px] rotate-2 scale-105 hover:scale-110 hover:rotate-0 hover:z-40 transition-all duration-500 z-30 cursor-pointer shadow-2xl">
            <FinanceClubMembershipCard />
          </div>
        </div>

        {/* Tablet Composition: Compact Overlapping Showcase */}
        <div className="hidden md:flex lg:hidden items-center justify-center relative min-h-[380px] w-full max-w-2xl mx-auto py-6">
          <div className="absolute left-[4%] top-[4%] -rotate-4 scale-90 z-10">
            <FinancialPlanningCard />
          </div>
          <div className="absolute right-[4%] top-[0%] rotate-3 scale-95 z-20">
            <InvestmentPortfolioCard />
          </div>
          <div className="relative top-[40px] rotate-1 scale-100 z-30 shadow-2xl">
            <FinanceClubMembershipCard />
          </div>
        </div>

        {/* Mobile Composition: Clean, responsive stacked cards without clipping or horizontal overflow */}
        <div className="flex md:hidden flex-col items-center gap-6 w-full max-w-sm mx-auto">
          <FinancialPlanningCard className="w-full" />
          <InvestmentPortfolioCard className="w-full" />
          <FinanceClubMembershipCard className="w-full" />
        </div>

        {/* Action Links Bar below the cards */}
        <div className="pt-12 sm:pt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-xl bg-[#14243A] px-5 py-2.5 font-sans font-bold text-[#F7F5EF] hover:bg-[#1f3654] transition-colors shadow-sm"
          >
            <span>Learn About CCF Curriculum</span>
            <ArrowRight className="h-4 w-4 text-[#B69A58]" />
          </Link>

          <Link
            href="/join-us"
            className="inline-flex items-center gap-2 rounded-xl border border-[#B69A58] bg-transparent px-5 py-2.5 font-sans font-bold text-[#14243A] hover:bg-[#B69A58]/10 transition-colors"
          >
            <span>Apply for Student Membership</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
