import React from "react";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { FadeIn } from "@/components/motion/fade-in";
import { ResolvedLeader } from "@/lib/data/leadership";
import { MemberAvatar } from "./member-avatar";

export function MembersLeadership({ leaders }: { leaders: ResolvedLeader[] }) {
  if (!leaders || leaders.length === 0) return null;
  return (
    <section className="py-20 md:py-28 bg-[#F7F5EF] border-b border-[#E2DDD1]">
      <Container className="space-y-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="pb-4 border-b border-[#E2DDD1]">
            <SectionHeading
              eyebrow="CRESCENT CLUB OF FINANCE"
              title="Admin Board"
              description="Meet the executive leadership directing CCF academic initiatives, operations, and governance."
            />
          </div>
        </FadeIn>

        {/* Leadership Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <StaggerItem key={leader.id}>
              <div className="group h-full bg-white rounded-lg border border-[#E2DDD1] p-8 md:p-10 flex flex-col items-center text-center space-y-6 shadow-sm hover:shadow-md hover:border-[#B69A58]/60 transition-all duration-300">
                {/* Photo / Avatar as primary visual element */}
                <div className="relative p-1 rounded-full border border-[#E2DDD1] group-hover:border-[#B69A58] transition-colors">
                  <MemberAvatar
                    name={leader.name}
                    initials={leader.initials}
                    photoObjectKey={leader.photoObjectKey}
                    sizeClassName="h-28 w-28 md:h-36 md:w-36"
                    textClassName="text-3xl md:text-4xl text-[#14243A]"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-[#14243A] tracking-tight">
                    {leader.name}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#B69A58]">
                    <ShieldCheck className="h-4 w-4 text-[#B69A58] shrink-0" aria-hidden="true" />
                    <span>{leader.role}</span>
                  </div>
                  <p className="text-xs text-[#64748B]">
                    Crescent Club of Finance • Crescent College
                  </p>
                </div>

                <div className="pt-2 w-full flex justify-center border-t border-[#E2DDD1]">
                  <span className="px-3 py-1 rounded-full border border-[#E2DDD1] bg-[#F7F5EF] text-[11px] font-semibold uppercase tracking-wider text-[#14243A]">
                    Admin Board
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
