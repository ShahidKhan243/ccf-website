import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import { Container } from "@/components/site/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { EVENTS_CTA } from "@/lib/data/events";

export function EventsCta() {
  return (
    <section className="py-20 md:py-28 bg-[#14243A] text-[#F7F5EF] relative overflow-hidden border-t border-[#0D1927]">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#B69A58]" aria-hidden="true" />
      <Container>
        <FadeIn direction="up">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B69A58]/40 bg-[#1e3452]/60 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-[#B69A58]">
              <Sparkles className="h-3.5 w-3.5 text-[#B69A58]" aria-hidden="true" />
              <span>{EVENTS_CTA.eyebrow}</span>
            </div>

            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#F7F5EF] leading-tight tracking-tight">
              {EVENTS_CTA.heading}
            </h2>

            <p className="text-[#94A3B8] max-w-xl mx-auto text-base md:text-lg leading-relaxed">
              {EVENTS_CTA.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-[#B69A58] hover:bg-[#c7ab67] text-[#14243A] font-semibold border-none">
                <Link href={EVENTS_CTA.primaryCtaHref} className="inline-flex items-center gap-2">
                  <Users className="h-4 w-4" aria-hidden="true" />
                  <span>{EVENTS_CTA.primaryCtaText}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-[#F7F5EF] hover:bg-white/10 hover:text-white">
                <Link href={EVENTS_CTA.secondaryCtaHref} className="inline-flex items-center gap-2">
                  <span>{EVENTS_CTA.secondaryCtaText}</span>
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
