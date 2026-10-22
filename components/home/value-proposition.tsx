import React from "react";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { FadeIn } from "@/components/motion/fade-in";
import { HOMEPAGE_VALUE_PROPS } from "@/lib/data/homepage";

export function ValuePropositionSection() {
  return (
    <section className="py-20 md:py-28 bg-[#EFECE3]/60 border-b border-[#E2DDD1]">
      <Container className="space-y-14">
        <FadeIn direction="up">
          <SectionHeading
            eyebrow="Core Mission"
            title="Strategic Pillars of Financial Excellence"
            description="Our fundamental priorities that guide student growth, executive research, and career preparation."
            align="center"
            withRule
          />
        </FadeIn>

        {/* Editorial Numbered Grid Layout (No generic cards) */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {HOMEPAGE_VALUE_PROPS.map((prop, idx) => {
            const num = String(idx + 1).padStart(2, "0");

            return (
              <StaggerItem key={prop.id}>
                <div className="flex flex-col space-y-3 pt-4 border-t-2 border-[#B69A58]">
                  {/* Classical Editorial Index */}
                  <span className="font-serif text-3xl font-bold text-[#B69A58] opacity-90">
                    {num}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-semibold tracking-tight text-[#14243A] leading-snug">
                    {prop.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#64748B] leading-relaxed pt-1">
                    {prop.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
