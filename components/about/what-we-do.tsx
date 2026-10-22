import React from "react";
import Link from "next/link";
import {
  Presentation,
  TrendingUp,
  Trophy,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { FadeIn } from "@/components/motion/fade-in";
import { ABOUT_ACTIVITIES, AboutActivity } from "@/lib/data/about";

const ACTIVITY_ICONS: Record<AboutActivity["iconName"], React.ElementType> = {
  Presentation,
  TrendingUp,
  Trophy,
  GraduationCap,
};

export function WhatCCFDoes() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F5EF] border-b border-[#E2DDD1]">
      <Container className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#E2DDD1]">
          <FadeIn direction="up">
            <SectionHeading
              eyebrow="Initiatives & Programs"
              title="What We Do"
              description="Structured events, learning sessions, and competitions organized by CCF."
            />
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <Button asChild variant="outline" className="shrink-0 border-[#14243A] text-[#14243A] hover:bg-[#14243A] hover:text-[#F7F5EF]">
              <Link href="/events" className="inline-flex items-center gap-2">
                <span>View Event Calendar</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_ACTIVITIES.map((activity) => {
            const IconComponent = ACTIVITY_ICONS[activity.iconName];

            return (
              <StaggerItem key={activity.id}>
                <div className="group h-full bg-white rounded-lg border border-[#E2DDD1] p-6 space-y-4 shadow-sm hover:shadow-md hover:border-[#B69A58]/60 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E2DDD1] bg-[#F7F5EF] text-[#B69A58] shadow-xs group-hover:border-[#B69A58] transition-colors">
                    <IconComponent className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-bold text-[#14243A]">
                      {activity.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#64748B]">
                      {activity.description}
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
