import React from "react";
import { Compass, Target, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CardReveal } from "@/components/ui/card-reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { FadeIn } from "@/components/motion/fade-in";
import { ABOUT_VISION_MISSION } from "@/lib/data/about";

export function VisionMissionSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F5EF] border-b border-[#E2DDD1]">
      <Container className="space-y-16">
        <FadeIn direction="up">
          <div className="text-center space-y-2">
            <SectionHeading
              eyebrow="Aspiration & Commitment"
              title="Vision, Mission & Objectives"
              description="Our foundational purpose at Crescent College as defined by the CCF constitution."
              align="center"
              withRule
            />
          </div>
        </FadeIn>

        {/* Vision & Mission Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <FadeIn direction="right">
            <CardReveal className="h-full rounded-lg">
              <div className="h-full bg-white border border-[#E2DDD1] p-8 md:p-10 flex flex-col justify-between space-y-6 rounded-lg shadow-sm hover:border-[#B69A58]/60 transition-colors">
                <div className="space-y-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E2DDD1] bg-[#F7F5EF] text-[#B69A58] shadow-xs">
                    <Target className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#B69A58]">
                      Our Vision
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#14243A]">
                      Informed Decision-Making
                    </h3>
                  </div>
                  <p className="text-[#64748B] text-base md:text-lg leading-relaxed italic border-l-2 border-[#B69A58] pl-4 py-1">
                    &ldquo;{ABOUT_VISION_MISSION.vision}&rdquo;
                  </p>
                </div>
              </div>
            </CardReveal>
          </FadeIn>

          {/* Mission Card */}
          <FadeIn direction="left" delay={0.1}>
            <CardReveal delay={0.1} className="h-full rounded-lg">
              <div className="h-full bg-white border border-[#E2DDD1] p-8 md:p-10 flex flex-col justify-between space-y-6 rounded-lg shadow-sm hover:border-[#B69A58]/60 transition-colors">
                <div className="space-y-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E2DDD1] bg-[#F7F5EF] text-[#B69A58] shadow-xs">
                    <Compass className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#B69A58]">
                      Our Mission
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#14243A]">
                      Practical Financial Education
                    </h3>
                  </div>
                  <p className="text-[#64748B] text-base md:text-lg leading-relaxed italic border-l-2 border-[#B69A58] pl-4 py-1">
                    &ldquo;{ABOUT_VISION_MISSION.mission}&rdquo;
                  </p>
                </div>
              </div>
            </CardReveal>
          </FadeIn>
        </div>

        {/* Financial Document Divider between Mandate and Objectives */}
        <div className="h-px w-full bg-[#E2DDD1]" aria-hidden="true" />

        {/* 3 Core Stated Objectives */}
        <div className="space-y-8 pt-2">
          <FadeIn direction="up">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#14243A] text-center">
              Core Strategic Objectives
            </h3>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ABOUT_VISION_MISSION.objectives.map((obj, idx) => (
              <StaggerItem key={obj.id}>
                <CardReveal delay={idx * 0.1} className="h-full rounded-lg">
                  <div className="h-full bg-white border border-[#E2DDD1] p-6 space-y-4 rounded-lg shadow-sm hover:border-[#B69A58]/60 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold font-serif text-[#B69A58]">
                        0{idx + 1}
                      </span>
                      <CheckCircle2 className="h-5 w-5 text-[#B69A58]" aria-hidden="true" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-serif text-lg font-bold text-[#14243A]">
                        {obj.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-[#64748B]">
                        {obj.description}
                      </p>
                    </div>
                  </div>
                </CardReveal>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
