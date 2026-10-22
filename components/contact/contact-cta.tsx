import React from "react";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { CONTACT_CTA } from "@/lib/data/contact";

export function ContactCta() {
  return (
    <section className="py-20 md:py-28 bg-[#14243A] text-[#F7F5EF] relative overflow-hidden border-t border-[#0D1927]">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#B69A58]" aria-hidden="true" />
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B69A58]">
                {CONTACT_CTA.eyebrow}
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#F7F5EF] tracking-tight leading-tight">
                {CONTACT_CTA.heading}
              </h2>
              <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed">
                {CONTACT_CTA.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-[#B69A58] hover:bg-[#c7ab67] text-[#14243A] font-semibold border-none">
                <a
                  href={CONTACT_CTA.primaryActionHref}
                  className="inline-flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>{CONTACT_CTA.primaryActionLabel}</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-[#F7F5EF] hover:bg-white/10 hover:text-white">
                <Link
                  href={CONTACT_CTA.secondaryActionHref}
                  className="inline-flex items-center gap-2"
                >
                  <span>{CONTACT_CTA.secondaryActionLabel}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
