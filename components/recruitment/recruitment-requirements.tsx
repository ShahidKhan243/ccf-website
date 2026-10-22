import React from "react";
import { User, Hash, Briefcase, GraduationCap, Calendar, MessageSquare, Info } from "lucide-react";
import { Container } from "@/components/site/container";
import { Card } from "@/components/ui/card";
import { CardReveal } from "@/components/ui/card-reveal";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { RECRUITMENT_REQUIREMENTS, RecruitmentRequirementField } from "@/lib/data/recruitment";

const FIELD_ICONS: Record<string, React.ElementType> = {
  "req-name": User,
  "req-rrn": Hash,
  "req-dept": Briefcase,
  "req-academic-dept": GraduationCap,
  "req-year": Calendar,
  "req-whatsapp": MessageSquare,
};

export function RecruitmentRequirements() {
  return (
    <section id="requirements" className="py-20 md:py-28 border-b border-[#E2DDD1] bg-[#F7F5EF]">
      <Container className="space-y-12">
        <FadeIn>
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B69A58]">
              {RECRUITMENT_REQUIREMENTS.eyebrow}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#14243A] tracking-tight">
              {RECRUITMENT_REQUIREMENTS.heading}
            </h2>
            <p className="text-sm md:text-base text-[#64748B] leading-relaxed">
              {RECRUITMENT_REQUIREMENTS.description}
            </p>
          </div>
        </FadeIn>

        {/* 6 Required Application Fields */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RECRUITMENT_REQUIREMENTS.fields.map((field: RecruitmentRequirementField, index: number) => {
            const Icon = FIELD_ICONS[field.id] || Info;
            const indexStr = String(index + 1).padStart(2, "0");

            return (
              <StaggerItem key={field.id}>
                <CardReveal delay={index * 0.05} className="h-full rounded-lg">
                  <div className="h-full bg-white border border-[#E2DDD1] p-6 flex flex-col justify-between space-y-4 shadow-sm rounded-lg hover:border-[#B69A58]/60 transition-colors">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#E2DDD1] bg-[#F7F5EF] text-[#B69A58]">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <span className="font-serif text-sm font-bold text-[#B69A58]">
                          {indexStr}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-serif text-base font-bold text-[#14243A]">
                          {field.label}
                        </h3>
                        <p className="text-xs md:text-sm text-[#64748B] leading-relaxed">
                          {field.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardReveal>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Factual Information Notice */}
        <FadeIn delay={0.2}>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs sm:text-sm text-[#64748B]">
              {RECRUITMENT_REQUIREMENTS.notice}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
