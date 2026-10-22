import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { FadeIn } from "@/components/motion/fade-in";
import { getActiveLeadership } from "@/lib/data/leadership";
import { MemberAvatar } from "@/components/members/member-avatar";

export function AboutLeadership({ leaders }: { leaders: import("@/lib/data/leadership").ResolvedLeader[] }) {
  if (!leaders || leaders.length === 0) return null;
  return (
    <section className="py-20 md:py-28 bg-[#F7F5EF] border-b border-[#E2DDD1]">
      <Container className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#E2DDD1]">
          <FadeIn direction="up">
            <SectionHeading
              eyebrow="Governance"
              title="Executive Leadership"
              description="The student board directing CCF's academic initiatives and operations."
            />
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <Button asChild variant="outline" className="shrink-0 border-[#14243A] text-[#14243A] hover:bg-[#14243A] hover:text-[#F7F5EF]">
              <Link href="/members" className="inline-flex items-center gap-2">
                <span>View Members Directory</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <StaggerItem key={leader.id}>
              <div className="group h-full bg-white rounded-lg border border-[#E2DDD1] p-8 flex flex-col items-center text-center space-y-5 shadow-sm hover:shadow-md hover:border-[#B69A58]/60 transition-all duration-300">
                <div className="relative p-1 rounded-full border border-[#E2DDD1] group-hover:border-[#B69A58] transition-colors">
                  <MemberAvatar name={leader.name} initials={leader.initials} photoObjectKey={leader.photoObjectKey} sizeClassName="h-24 w-24" textClassName="text-2xl text-[#14243A]" />
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
