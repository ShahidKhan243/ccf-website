import React from "react";
import Link from "next/link";
import { ArrowRight, ClipboardList, Layers } from "lucide-react";
import { Container } from "@/components/site/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { RECRUITMENT_HERO, RECRUITMENT_STATUS, RecruitmentStatus } from "@/lib/data/recruitment";
import { RecruitmentStatusBadge } from "./recruitment-status";

interface RecruitmentHeroProps {
  status?: RecruitmentStatus;
}

export function RecruitmentHero({ status = RECRUITMENT_STATUS }: RecruitmentHeroProps) {
  const isOpen = status === "OPEN";

  return (
    <section className="relative overflow-hidden bg-[#F7F5EF] py-20 md:py-28 border-b border-[#E2DDD1]">
      <Container className="relative space-y-6 max-w-3xl">
        <FadeIn>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B69A58]">
              {RECRUITMENT_HERO.eyebrow}
            </span>
            <RecruitmentStatusBadge status={status} />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#14243A] tracking-tight leading-tight">
            {RECRUITMENT_HERO.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-[#64748B] text-base md:text-lg leading-relaxed max-w-2xl font-sans">
            {RECRUITMENT_HERO.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {isOpen ? (
              <>
                <Button asChild size="lg" className="bg-[#14243A] hover:bg-[#1f3654] text-[#F7F5EF]">
                  <a href="#requirements" className="inline-flex items-center gap-2">
                    <ClipboardList className="h-4 w-4" aria-hidden="true" />
                    <span>View Requirements</span>
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-[#14243A] text-[#14243A] hover:bg-[#14243A] hover:text-[#F7F5EF]">
                  <a href="#departments" className="inline-flex items-center gap-2">
                    <span>Explore Departments</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </>
            ) : (
              <Button asChild variant="outline" size="lg" className="border-[#14243A] text-[#14243A] hover:bg-[#14243A] hover:text-[#F7F5EF]">
                <Link href="/departments" className="inline-flex items-center gap-2">
                  <Layers className="h-4 w-4" aria-hidden="true" />
                  <span>Explore CCF Departments</span>
                </Link>
              </Button>
            )}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
