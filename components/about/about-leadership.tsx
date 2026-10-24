"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/site/container";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { FadeIn } from "@/components/motion/fade-in";
import { MemberAvatar } from "@/components/members/member-avatar";
import type { ResolvedLeader } from "@/lib/data/leadership";

export function AboutLeadership({ leaders }: { leaders: ResolvedLeader[] }) {
  if (!leaders || leaders.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-[#F7F5EF] border-b border-[#E2DDD1] relative overflow-hidden">
      <Container className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#E2DDD1]">
          <FadeIn direction="up">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold tracking-[0.2em] text-[#B69A58] uppercase">
                  LEADERSHIP &amp; GOVERNANCE
                </span>
                <span className="inline-block w-10 h-[2px] bg-[#B69A58]" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#14243A] leading-tight tracking-tight">
                Executive Leadership Board
              </h2>
              <p className="text-sm sm:text-base text-[#64748B] max-w-xl">
                The student board directing CCF&apos;s academic initiatives, workshops, and operations at Crescent College.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <Link
              href="/members"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold border border-[#14243A] text-[#14243A] hover:bg-[#14243A] hover:text-[#F7F5EF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58]"
            >
              <span>View Full Directory</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <StaggerItem key={leader.id}>
              <div className="group h-full bg-white rounded-2xl border border-[#E2DDD1] p-8 flex flex-col items-center text-center space-y-5 shadow-xs hover:shadow-xl hover:border-[#B69A58]/80 hover:-translate-y-1 transition-all duration-300">
                <div className="relative p-1 rounded-full border border-[#E2DDD1] group-hover:border-[#B69A58] transition-colors shadow-xs">
                  <MemberAvatar
                    name={leader.name}
                    initials={leader.initials}
                    photoObjectKey={leader.photoObjectKey}
                    sizeClassName="h-24 w-24"
                    textClassName="text-2xl text-[#14243A]"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-[#14243A] tracking-tight">
                    {leader.name}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#B69A58]">
                    <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{leader.role}</span>
                  </div>
                  <p className="text-xs text-[#64748B]">
                    Crescent Club of Finance • Crescent College
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
