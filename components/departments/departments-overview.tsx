import React from "react";
import { Layers, Users, BookOpen } from "lucide-react";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { DEPARTMENTS_OVERVIEW } from "@/lib/data/departments";

const PILLAR_ICONS = [Layers, Users, BookOpen];

export function DepartmentsOverview() {
  return (
    <section className="py-16 md:py-24 border-b border-border/30 bg-background">
      <Container className="space-y-12">
        <FadeIn direction="up">
          <SectionHeading
            eyebrow={DEPARTMENTS_OVERVIEW.eyebrow}
            title={DEPARTMENTS_OVERVIEW.heading}
            description={DEPARTMENTS_OVERVIEW.description}
            align="center"
            withRule
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {DEPARTMENTS_OVERVIEW.pillars.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];

            return (
              <StaggerItem key={pillar.title}>
                <div className="h-full border border-[#E2DDD1] bg-white rounded-lg p-6 flex flex-col space-y-4 shadow-sm hover:border-[#B69A58]/60 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#E2DDD1] bg-[#F7F5EF] text-[#B69A58]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-bold text-[#14243A]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
