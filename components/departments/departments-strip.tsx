import React from "react";
import { TrendingUp, Monitor, Megaphone, ClipboardCheck, Calendar } from "lucide-react";
import { Container } from "@/components/site/container";

interface StripPill {
  label: string;
  icon: React.ElementType;
}

const STRIP_PILLS: readonly StripPill[] = [
  { label: "FINANCE", icon: TrendingUp },
  { label: "IT & MEDIA", icon: Monitor },
  { label: "MARKETING", icon: Megaphone },
  { label: "PROJECTS", icon: ClipboardCheck },
  { label: "EVENTS", icon: Calendar },
];

export function DepartmentsStrip() {
  return (
    <section className="bg-[#f1e9d6] border-y border-[#e8dfca] py-5 overflow-hidden">
      <h2 className="sr-only">Club Departments Overview</h2>
      <Container>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Left Side: Label & 5 Badges */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 w-full lg:w-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5d6985] shrink-0">
              Covering every side of the club
            </span>

            {/* Horizontal pills with no wrapping */}
            <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-1 sm:pb-0 w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {STRIP_PILLS.map((pill) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={pill.label}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/70 border border-[#e8dfca] shadow-2xs whitespace-nowrap shrink-0 transition-colors hover:bg-white"
                  >
                    <div className="w-5 h-5 rounded-md bg-[#b8964f]/15 border border-[#b8964f]/35 flex items-center justify-center text-[#9c7c38]">
                      <Icon className="w-3 h-3" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider text-[#14203a]">
                      {pill.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Overlapping Avatars & Headline */}
          <div className="flex items-center gap-4 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#e8dfca]/60 w-full lg:w-auto justify-between lg:justify-end">
            {/* 3 Overlapping Circular Avatars */}
            <div className="flex -space-x-2.5 items-center shrink-0">
              <div
                className="w-10 h-10 rounded-full border-2 border-[#f1e9d6] bg-[#14203a] text-white flex items-center justify-center font-serif text-sm font-bold shadow-sm"
                title="Student Member"
              >
                FM
              </div>
              <div
                className="w-10 h-10 rounded-full border-2 border-[#f1e9d6] bg-[#b8964f] text-white flex items-center justify-center font-serif text-sm font-bold shadow-sm"
                title="Student Member"
              >
                IT
              </div>
              <div
                className="w-10 h-10 rounded-full border-2 border-[#f1e9d6] bg-[#e6cf98] text-[#14203a] flex items-center justify-center font-serif text-sm font-bold shadow-sm"
                title="Student Member"
              >
                MP
              </div>
            </div>

            {/* Metric & Subtitle */}
            <div className="leading-tight">
              <div
                className="font-serif font-bold text-2xl sm:text-[34px] text-[#14203a] tracking-tight"
                style={{ fontFeatureSettings: '"lnum" 1' }}
              >
                5 departments
              </div>
              <div className="text-xs text-[#5d6985] font-medium">
                Open to students of every discipline
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
