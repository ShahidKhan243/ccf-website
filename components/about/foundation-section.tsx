import React from "react";
import { Landmark } from "lucide-react";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { ABOUT_FOUNDATION } from "@/lib/data/about";

export function FoundationSection() {
  return (
    <section className="py-16 md:py-24 bg-background border-b border-border/30">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Heading & Institutional Card */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn direction="right">
              <SectionHeading
                eyebrow="Context & Background"
                title={ABOUT_FOUNDATION.title}
                description={ABOUT_FOUNDATION.subtitle}
                withRule
              />
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="rounded-lg border border-[#E2DDD1] bg-white p-6 space-y-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#E2DDD1] bg-[#F7F5EF] text-[#B69A58]">
                    <Landmark className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-serif text-[#14243A] text-sm font-bold">
                      Campus Integration
                    </h4>
                    <p className="text-[#B69A58] text-xs font-medium">
                      B.S. Abdur Rahman Crescent Institute
                    </p>
                  </div>
                </div>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  CCF operates with institutional coordination at Crescent Campus, welcoming both undergraduate and postgraduate participants from every academic discipline.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 text-ccf-muted leading-relaxed text-base md:text-lg">
            {ABOUT_FOUNDATION.content.map((paragraph, index) => (
              <FadeIn key={index} direction="left" delay={0.1 * (index + 1)}>
                <p>{paragraph}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
