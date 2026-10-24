"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Monitor,
  Megaphone,
  ClipboardCheck,
  Calendar,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { Container } from "@/components/site/container";
import { CCF_DEPARTMENTS, CcfDepartment } from "@/lib/data/departments";

const DEPT_ICONS: Record<string, React.ElementType> = {
  TrendingUp,
  Monitor,
  Megaphone,
  ClipboardCheck,
  FolderKanban: ClipboardCheck,
  CalendarDays: Calendar,
  Calendar,
};

export interface DbDepartment {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  tags?: readonly string[];
  lead?: string;
  iconName?: string;
}

interface DepartmentsGridProps {
  departments?: DbDepartment[];
  isError?: boolean;
}

export function DepartmentsGrid({
  departments,
  isError: initialError = false,
}: DepartmentsGridProps = {}) {
  const [isError, setIsError] = useState(initialError);
  const [isLoading, setIsLoading] = useState(false);

  const handleRetry = () => {
    setIsLoading(true);
    setIsError(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };

  // Determine departments to display
  const deptsToDisplay =
    departments && departments.length > 0
      ? departments.map((dept, index) => {
          const fallback = CCF_DEPARTMENTS.find(
            (d) => d.slug === dept.slug || d.name.toLowerCase() === dept.name.toLowerCase()
          ) || CCF_DEPARTMENTS[index % CCF_DEPARTMENTS.length];

          return {
            id: dept.id || fallback.id,
            slug: dept.slug || fallback.slug,
            name: dept.name || fallback.name,
            description: dept.description || fallback.description,
            tags: dept.tags || fallback.tags,
            lead: dept.lead || fallback.lead,
            iconName: dept.iconName || fallback.iconName,
          };
        })
      : CCF_DEPARTMENTS;

  // 1. Loading Skeleton State (5 cards, no "Loading..." text)
  if (isLoading) {
    return (
      <section id="directory" className="py-20 md:py-28 bg-[#fbf9f4] border-b border-[#e8dfca]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8">
            {[1, 2, 3, 4, 5].map((idx) => (
              <div
                key={idx}
                className={`${
                  idx <= 3
                    ? "col-span-1 md:col-span-3 lg:col-span-2"
                    : "col-span-1 md:col-span-3 lg:col-span-3"
                } rounded-[30px] border border-[#e8dfca] bg-white p-[34px] min-h-[460px] animate-pulse flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-[62px] h-[62px] rounded-2xl bg-[#f1e8d0]/60" />
                    <div className="w-16 h-12 bg-[#f1e8d0]/40 rounded-lg" />
                  </div>
                  <div className="h-8 bg-[#f1e8d0]/60 rounded-md w-3/4 mt-8" />
                  <div className="space-y-2 mt-4">
                    <div className="h-4 bg-[#f1e8d0]/40 rounded-md w-full" />
                    <div className="h-4 bg-[#f1e8d0]/40 rounded-md w-5/6" />
                  </div>
                  <div className="flex gap-2 mt-6">
                    <div className="h-6 w-16 bg-[#f1e8d0]/50 rounded-full" />
                    <div className="h-6 w-16 bg-[#f1e8d0]/50 rounded-full" />
                  </div>
                </div>
                <div className="border-t border-[#e8dfca] pt-5 flex items-center justify-between">
                  <div className="h-4 w-24 bg-[#f1e8d0]/50 rounded-md" />
                  <div className="w-[42px] h-[42px] rounded-full bg-[#f1e8d0]/60" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  // 2. Error State with Retry Button
  if (isError) {
    return (
      <section id="directory" className="py-20 md:py-28 bg-[#fbf9f4] border-b border-[#e8dfca]">
        <Container>
          <div className="max-w-xl mx-auto text-center rounded-[30px] border border-[#e8dfca] bg-white p-10 md:p-14 shadow-sm space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#b8964f]/15 border border-[#b8964f]/30 text-[#9c7c38] flex items-center justify-center mx-auto">
              <RotateCcw className="w-7 h-7" aria-hidden="true" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-[#14203a]">
                Unable to Load Live Department Data
              </h3>
              <p className="text-[#5d6985] text-sm leading-relaxed">
                We encountered an issue connecting to the database. You can retry loading or view our verified offline catalog.
              </p>
            </div>
            <button
              onClick={handleRetry}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-transform hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(180deg, #c8a660, #a8843c)",
                boxShadow: "0 10px 20px rgba(168, 132, 60, 0.3)",
              }}
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Connection</span>
            </button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id="directory"
      className="py-20 md:py-28 bg-[#fbf9f4] border-b border-[#e8dfca]"
    >
      <Container className="space-y-14">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#e8dfca]">
          <div className="space-y-3 max-w-2xl">
            {/* Eyebrow with gold line */}
            <div className="inline-flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8964f]">
                ORGANISATIONAL STRUCTURE
              </span>
              <span className="w-12 h-[1px] bg-[#b8964f]" aria-hidden="true" />
            </div>

            {/* Display H2 Heading */}
            <h2
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-[#14203a] leading-[1.05] tracking-tight"
              style={{ fontFeatureSettings: '"lnum" 1' }}
            >
              Find your{" "}
              <em className="text-[#b8964f] font-serif italic font-semibold not-italic">
                division.
              </em>
            </h2>
          </div>

          {/* Right Sub-copy & 5 Departments Badge */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-end lg:items-end gap-3 lg:max-w-md">
            <div className="px-3.5 py-1.5 rounded-full border border-[#e8dfca] bg-white text-xs font-semibold uppercase tracking-wider text-[#14203a] shrink-0">
              5 Departments
            </div>
            <p className="text-[#5d6985] text-base md:text-lg leading-relaxed lg:text-right">
              Five departments cover finance, IT and media, marketing, projects and events. Pick the one that matches your strengths, or try more than one.
            </p>
            <Link
              href="/join-us"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#b8964f] hover:text-[#9c7c38] transition-colors uppercase tracking-wider"
            >
              <span>Apply to Join</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* 6-Column Grid: Row 1 = 3 cards (span 2 each); Row 2 = 2 cards (span 3 each) */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8">
          {deptsToDisplay.map((dept, index) => {
            const isHighlight = index === 0; // Card 01: Finance Management
            const stepNum = String(index + 1).padStart(2, "0");
            const IconComp = DEPT_ICONS[dept.iconName] || TrendingUp;

            // Row 1 (first 3): col-span-2; Row 2 (last 2): col-span-3
            const gridColClass =
              index < 3
                ? "col-span-1 md:col-span-3 lg:col-span-2"
                : "col-span-1 md:col-span-3 lg:col-span-3";

            return (
              <a
                key={dept.id}
                id={dept.slug}
                href={`#${dept.slug}`}
                className={`group block rounded-[30px] p-7 md:p-[34px] transition-all duration-300 hover:-translate-y-[3px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8964f] scroll-mt-28 ${gridColClass} ${
                  isHighlight
                    ? "border border-[#2a3f68] text-white shadow-xl"
                    : "border border-[#e8dfca] bg-white text-[#14203a] shadow-[0_10px_30px_rgba(184,150,79,0.08)] hover:shadow-xl hover:border-[#b8964f]/50"
                }`}
                style={{
                  minHeight: index < 3 ? "470px" : "420px",
                  background: isHighlight
                    ? "linear-gradient(145deg, #1d2c4d 0%, #0f1830 100%)"
                    : "#ffffff",
                }}
              >
                <div className="h-full flex flex-col justify-between space-y-7">
                  {/* Top Area: 62px Gold Icon + Big Faded Number */}
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      {/* 62px Rounded Square Gold Icon */}
                      <div
                        className="w-[62px] h-[62px] rounded-2xl flex items-center justify-center text-white shadow-sm shrink-0"
                        style={{
                          background:
                            "linear-gradient(135deg, #c8a660 0%, #9c7c38 100%)",
                        }}
                      >
                        <IconComp className="w-7 h-7" aria-hidden="true" />
                      </div>

                      {/* 80px Faded Number */}
                      <span
                        className={`font-serif font-bold text-[72px] sm:text-[80px] leading-none select-none tracking-tight ${
                          isHighlight ? "text-[#263a62]" : "text-[#f1e8d0]"
                        }`}
                        style={{ fontFeatureSettings: '"lnum" 1' }}
                      >
                        {stepNum}
                      </span>
                    </div>

                    {/* Department Name & Description */}
                    <div className="space-y-3">
                      <h3
                        className={`font-serif text-2xl sm:text-[34px] font-bold leading-tight truncate ${
                          isHighlight ? "text-white" : "text-[#14203a]"
                        }`}
                        style={{ fontFeatureSettings: '"lnum" 1' }}
                        title={dept.name}
                      >
                        {dept.name}
                      </h3>
                      <p
                        className={`text-sm sm:text-base leading-relaxed line-clamp-3 ${
                          isHighlight ? "text-white/80" : "text-[#5d6985]"
                        }`}
                      >
                        {dept.description}
                      </p>
                    </div>

                    {/* 3 Tag Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {dept.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-semibold px-3 py-1 rounded-full border transition-colors ${
                            isHighlight
                              ? "bg-[#182847] border-[#b8964f]/40 text-[#e6cf98]"
                              : "bg-[#fbf4e2] border-[#ecdcb2] text-[#7a6a45]"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Area: Divider + Lead + 42px Round Arrow Button */}
                  <div
                    className={`border-t pt-5 flex items-center justify-between ${
                      isHighlight ? "border-white/10" : "border-[#e8dfca]"
                    }`}
                  >
                    <span
                      className={`text-xs sm:text-sm font-medium ${
                        isHighlight ? "text-white/85" : "text-[#5d6985]"
                      }`}
                    >
                      {dept.lead}
                    </span>

                    {/* 42px Round Arrow Button */}
                    <div
                      className={`w-[42px] h-[42px] rounded-full flex items-center justify-center transition-all duration-300 ${
                        isHighlight
                          ? "bg-[#24375b] border border-white/20 text-[#e6cf98] group-hover:bg-[#b8964f] group-hover:text-white group-hover:border-[#b8964f]"
                          : "bg-[#fbf9f4] border border-[#e8dfca] text-[#14203a] group-hover:bg-[#b8964f] group-hover:text-white group-hover:border-[#b8964f]"
                      }`}
                      aria-label={`View ${dept.name} details`}
                    >
                      <ArrowRight
                        className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
