import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/site/container";
import { FadeIn } from "@/components/motion/fade-in";

export function JoinCta() {
  return (
    <section className="py-20 md:py-28 bg-[#14243A] text-[#F7F5EF] relative overflow-hidden border-t border-[#1e3452]">
      {/* Decorative top gold hairline */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#B69A58]" aria-hidden="true" />

      {/* Subtle gold ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#B69A58]/10 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <Container className="relative z-10">
        <FadeIn direction="up">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B69A58]/40 bg-[#0D1927] px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-[#B69A58] shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#B69A58]" aria-hidden="true" />
              <span>Membership & Recruitment</span>
            </div>

            <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-[#F7F5EF] leading-tight tracking-tight">
              Ready to Compound Your Potential in Finance?
            </h2>

            <p className="text-[#94A3B8] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Whether your passion lies in capital markets, equity research, fintech, or student leadership, Crescent Club of Finance provides a rigorous platform to collaborate, learn, and excel at Crescent College.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/join-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#B69A58] px-8 py-4 font-sans text-base font-bold text-[#14243A] shadow-md hover:shadow-lg hover:bg-[#c7ab67] hover:scale-[1.02] transition-all duration-200"
              >
                <span>Apply for Membership</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                href="/events"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-transparent px-8 py-4 font-sans text-base font-semibold text-[#F7F5EF] hover:bg-white/10 hover:border-white transition-all duration-200"
              >
                <span>Explore Academic Events</span>
              </Link>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs text-[#94A3B8] flex flex-wrap items-center justify-center gap-6">
              <span>Open to all B.Tech, BBA, B.Com & MBA undergraduates</span>
              <span className="hidden sm:inline">•</span>
              <span>Crescent College, Vandalur</span>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
