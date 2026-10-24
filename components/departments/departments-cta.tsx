import React from "react";
import Link from "next/link";
import { Sparkles, Calendar, ArrowRight } from "lucide-react";
import { Container } from "@/components/site/container";

export function DepartmentsCta() {
  return (
    <section className="py-16 md:py-24 bg-[#fbf9f4]">
      <Container>
        {/* Rounded 36px Panel */}
        <div
          className="relative rounded-[36px] border border-[#e8dfca] overflow-hidden p-8 sm:p-12 md:p-16 lg:p-20 text-center shadow-[0_16px_40px_rgba(20,32,58,0.04)]"
          style={{
            background:
              "radial-gradient(circle at 92% 50%, rgba(230, 207, 152, 0.45), transparent 60%), linear-gradient(135deg, #ffffff 0%, #fbf9f4 50%, #f4efe4 100%)",
          }}
        >
          {/* Subtle gold line accent at top */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-[#b8964f] to-transparent"
            aria-hidden="true"
          />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#e8dfca] bg-white/80 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#b8964f]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9c7c38]">
                STUDENT RECRUITMENT
              </span>
            </div>

            {/* Display H2 Heading */}
            <h2
              aria-label="Join a CCF Department"
              className="font-serif text-3xl sm:text-5xl lg:text-[60px] font-bold text-[#14203a] leading-tight tracking-tight"
              style={{ fontFeatureSettings: '"lnum" 1' }}
            >
              Join a{" "}
              <em className="text-[#b8964f] font-serif italic font-semibold not-italic">
                CCF department.
              </em>
            </h2>

            {/* Sub-text */}
            <p className="text-[#5d6985] text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Join club activities, attend an upcoming academic event, or apply directly to a department.
            </p>

            {/* Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/join-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8964f]"
                style={{
                  background: "linear-gradient(180deg, #c8a660, #a8843c)",
                  boxShadow: "0 14px 30px rgba(168, 132, 60, 0.35)",
                }}
              >
                <span>Apply to Join</span>
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/events"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-[#14203a] bg-white border border-[#e8dfca] shadow-2xs hover:border-[#b8964f] hover:text-[#b8964f] transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8964f]"
              >
                <Calendar className="w-4 h-4 text-[#b8964f]" aria-hidden="true" />
                <span>Explore Events</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
