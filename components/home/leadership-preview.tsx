import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { FadeIn } from "@/components/motion/fade-in";
import { MemberAvatar } from "@/components/members/member-avatar";

export function LeadershipPreview({ leaders }: { leaders: import("@/lib/data/leadership").ResolvedLeader[] }) {
  if (!leaders || leaders.length === 0) return null;
  return (
    <section className="py-20 md:py-28 bg-[#F7F5EF] border-t border-[#E2DDD1]">
      <Container className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#E2DDD1]">
          <FadeIn direction="up">
            <SectionHeading
              eyebrow="Governance & Leadership"
              title="Executive Committee"
              description="Meet the student leadership steering Crescent Club of Finance's academic initiatives, capital market research, and institutional relations."
            />
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <Link
              href="/members"
              className="inline-flex items-center gap-2 rounded-xl border border-[#14243A] bg-white px-5 py-2.5 font-sans text-sm font-semibold text-[#14243A] transition-all hover:bg-[#14243A] hover:text-[#F7F5EF] shrink-0 shadow-sm"
            >
              <span>View Full Member Directory</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>

        {/* Leadership Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <StaggerItem key={leader.id}>
              <div className="group h-full bg-white rounded-2xl border border-[#E2DDD1] p-8 flex flex-col items-center text-center space-y-5 shadow-[0_2px_12px_rgba(20,36,58,0.04)] hover:border-[#B69A58]/60 hover:shadow-[0_8px_24px_rgba(20,36,58,0.08)] hover:-translate-y-1 transition-all duration-300">
                {/* Monogram Avatar Frame */}
                <div className="relative p-1 rounded-full border border-[#E2DDD1] group-hover:border-[#B69A58] transition-colors">
                  <MemberAvatar
                    name={leader.name}
                    initials={leader.initials}
                    photoObjectKey={leader.photoObjectKey}
                    sizeClassName="h-24 w-24"
                    textClassName="text-2xl text-[#14243A] font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#14243A] group-hover:text-[#B69A58] transition-colors tracking-tight">
                    {leader.name}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B69A58]">
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
