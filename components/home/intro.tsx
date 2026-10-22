import React from "react";
import Image from "next/image";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";

export function ClubIntro() {
  return (
    <section className="py-20 md:py-28 border-b border-[#E2DDD1] bg-[#FFFFFF]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Campus Photographic Insight */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn direction="right">
              <SectionHeading
                eyebrow="Who We Are"
                title="A Community Built on Financial Acumen"
                withRule
              />
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-2xl border border-[#E2DDD1] bg-[#F7F5EF] shadow-md mt-6 group">
                <Image
                  src="/images/campus-hero-sunset.png"
                  alt="Crescent Institute Campus, Vandalur"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-[center_45%] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#14243A]/90 via-[#14243A]/50 to-transparent p-4">
                  <p className="font-sans text-xs text-[#F7F5EF] font-medium">
                    B.S. Abdur Rahman Crescent Institute of Science & Technology, Vandalur
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Genuine Copy & Pillars */}
          <div className="lg:col-span-7 space-y-6 text-[#64748B] leading-relaxed text-base sm:text-lg">
            <FadeIn direction="left" delay={0.1}>
              <p>
                The <strong className="text-[#14243A] font-semibold">Crescent Club of Finance (CCF)</strong> is the premier student finance society of B.S. Abdur Rahman Crescent Institute of Science and Technology in Vandalur.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <p>
                Founded to bridge the divide between theoretical textbooks and dynamic capital market realities, CCF convenes ambitious students across engineering, business, and sciences to master investment analysis, macroeconomic policy, corporate valuation, and personal fiscal responsibility.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.3}>
              <p>
                Through interactive workshops, inter-collegiate stock simulations, guest lectures from financial industry veterans, and real-world research initiatives, we cultivate an intellectual environment where inquisitive students compound their professional potential.
              </p>
            </FadeIn>

            {/* Key Academic Pillars */}
            <FadeIn direction="left" delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E2DDD1]">
                <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E2DDD1]">
                  <span className="block font-sans text-2xl sm:text-3xl font-extrabold text-[#14243A]">100%</span>
                  <span className="text-xs font-sans text-[#64748B] font-medium">Student-Led Initiatives</span>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E2DDD1]">
                  <span className="block font-sans text-2xl sm:text-3xl font-extrabold text-[#14243A]">5</span>
                  <span className="text-xs font-sans text-[#64748B] font-medium">Core Departments</span>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E2DDD1]">
                  <span className="block font-sans text-2xl sm:text-3xl font-extrabold text-[#B69A58]">Campus</span>
                  <span className="text-xs font-sans text-[#64748B] font-medium">Vandalur, Chennai</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
