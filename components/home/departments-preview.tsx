import React from "react";
import Link from "next/link";
import { TrendingUp, Monitor, Megaphone, FolderKanban, CalendarDays, ArrowRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { FadeIn } from "@/components/motion/fade-in";
import { HOMEPAGE_DEPARTMENTS, HomepageDepartment } from "@/lib/data/homepage";

const DEPT_ICONS: Record<HomepageDepartment["iconName"], React.ElementType> = {
  TrendingUp,
  Monitor,
  Megaphone,
  FolderKanban,
  CalendarDays,
};

export function DepartmentsPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E2DDD1]">
      <Container className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <FadeIn direction="up">
            <SectionHeading
              eyebrow="Structure & Organization"
              title="Operational Departments"
              description="Specialized divisions driving events, financial literacy, technology, and outreach across campus."
            />
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <Link
              href="/departments"
              className="inline-flex items-center gap-2 rounded-xl border border-[#14243A] bg-white px-5 py-2.5 font-sans text-sm font-semibold text-[#14243A] transition-all hover:bg-[#14243A] hover:text-[#F7F5EF] shrink-0 shadow-sm"
            >
              <span>Explore All Divisions</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>

        {/* Departments Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HOMEPAGE_DEPARTMENTS.map((dept) => {
            const IconComp = DEPT_ICONS[dept.iconName];

            return (
              <StaggerItem key={dept.id}>
                <div className="group flex flex-col justify-between h-full bg-[#F7F5EF] border border-[#E2DDD1] rounded-2xl p-6 sm:p-7 shadow-[0_2px_10px_rgba(20,36,58,0.04)] hover:border-[#B69A58]/60 hover:shadow-[0_8px_24px_rgba(20,36,58,0.07)] hover:-translate-y-1 transition-all duration-300">
                  <div className="space-y-4">
                    {/* Icon & Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#B69A58] border border-[#E2DDD1] shadow-xs">
                        <IconComp className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="font-sans text-[11px] font-bold tracking-widest uppercase text-[#B69A58]">
                        Division
                      </span>
                    </div>

                    {/* Department Title */}
                    <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-[#14243A] group-hover:text-[#B69A58] transition-colors leading-snug">
                      {dept.name}
                    </h3>

                    {/* Responsibilities Description */}
                    <p className="font-sans text-sm text-[#64748B] leading-relaxed line-clamp-3">
                      {dept.shortDescription}
                    </p>
                  </div>

                  {/* Explore Link */}
                  <div className="pt-6 border-t border-[#E2DDD1] mt-5">
                    <Link
                      href={`/departments#${dept.slug}`}
                      className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-[#14243A] hover:text-[#B69A58] transition-colors"
                    >
                      <span>Learn Responsibilities</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 text-[#B69A58]" aria-hidden="true" />
                    </Link>
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
