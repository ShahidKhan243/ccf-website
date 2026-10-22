import React from "react";
import Link from "next/link";
import {
  TrendingUp,
  Monitor,
  Megaphone,
  FolderKanban,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CardReveal } from "@/components/ui/card-reveal";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { CCF_DEPARTMENTS, CcfDepartment } from "@/lib/data/departments";

const DEPT_ICONS: Record<CcfDepartment["iconName"], React.ElementType> = {
  TrendingUp,
  Monitor,
  Megaphone,
  FolderKanban,
  CalendarDays,
};

export interface DbDepartment {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
}

interface DepartmentsGridProps {
  departments?: DbDepartment[];
  isError?: boolean;
}

export function DepartmentsGrid({ departments, isError }: DepartmentsGridProps = {}) {
  if (isError) {
    return (
      <section id="directory" className="py-16 md:py-24 border-b border-border/30 bg-ccf-surface-sunken/40">
        <Container className="space-y-4 text-center py-12">
          <p className="text-ccf-muted">Department information is temporarily unavailable.</p>
        </Container>
      </section>
    );
  }

  if (departments !== undefined && departments.length === 0) {
    return (
      <section id="directory" className="py-16 md:py-24 border-b border-border/30 bg-ccf-surface-sunken/40">
        <Container className="space-y-4 text-center py-12">
          <p className="text-ccf-muted">Department information coming soon.</p>
        </Container>
      </section>
    );
  }

  const displayDepts =
    departments !== undefined
      ? departments.map((dept) => {
          const staticMatch = CCF_DEPARTMENTS.find(
            (d) => d.slug === dept.slug || d.name.toLowerCase() === dept.name.toLowerCase()
          );
          return {
            id: dept.id,
            name: dept.name,
            slug: dept.slug,
            description: dept.description || staticMatch?.description || "",
            iconName: (staticMatch?.iconName || "FolderKanban") as CcfDepartment["iconName"],
            focusAreas: staticMatch?.focusAreas || [],
          };
        })
      : CCF_DEPARTMENTS;

  const badgeText = `${displayDepts.length} ${displayDepts.length === 1 ? "Department" : "Departments"}`;

  return (
    <section id="directory" className="py-20 md:py-28 border-b border-[#E2DDD1] bg-[#F7F5EF]">
      <Container className="space-y-12">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#E2DDD1]">
            <div className="space-y-1">
              <SectionHeading
                eyebrow="Directory"
                title="Operational Departments"
                description="Explore the departments that support CCF's academic research, initiatives, and student operations."
              />
            </div>
            <div className="self-start md:self-auto shrink-0 px-3.5 py-1.5 rounded-full border border-[#E2DDD1] bg-white text-xs font-semibold uppercase tracking-wider text-[#14243A]">
              {badgeText}
            </div>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayDepts.map((dept, index) => {
            const IconComp = DEPT_ICONS[dept.iconName] || FolderKanban;
            const stepNum = String(index + 1).padStart(2, "0");

            return (
              <StaggerItem
                key={dept.id}
                className={index === 4 ? "md:col-span-2 lg:col-span-1" : undefined}
              >
                <CardReveal delay={index * 0.08} className="h-full rounded-lg">
                  <div className="h-full border border-[#E2DDD1] bg-white p-7 flex flex-col justify-between space-y-6 rounded-lg shadow-sm hover:shadow-md hover:border-[#B69A58]/60 transition-all duration-300">
                    <div className="space-y-5">
                      {/* Header with Icon and Order Index */}
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#E2DDD1] bg-[#F7F5EF] text-[#B69A58] shadow-xs">
                          <IconComp className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <span className="font-serif text-sm font-bold text-[#B69A58] tracking-widest">
                          {stepNum}
                        </span>
                      </div>

                      {/* Department Name & Main Description */}
                      <div className="space-y-2">
                        <h3 className="font-serif text-xl font-bold text-[#14243A]">
                          {dept.name}
                        </h3>
                        <p className="text-sm text-[#64748B] leading-relaxed">
                          {dept.description}
                        </p>
                      </div>

                      {/* Verified Focus Areas */}
                      <div className="pt-2 space-y-2.5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#14243A]">
                          Core Focus Areas
                        </p>
                        <ul className="space-y-2 text-xs text-[#64748B]">
                          {dept.focusAreas.map((area) => (
                            <li key={area} className="flex items-start gap-2">
                              <CheckCircle2
                                className="h-3.5 w-3.5 text-[#B69A58] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{area}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA link to recruitment */}
                    <div className="pt-4 border-t border-[#E2DDD1]">
                      <Link
                        href="/join-us"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B69A58] hover:text-[#987E41] transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B69A58] rounded"
                      >
                        <span>Apply for {dept.name}</span>
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </CardReveal>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
