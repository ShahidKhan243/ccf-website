import React from "react";
import { CcfLogo } from "@/components/site/logo";
import Link from "next/link";
import { ArrowRight, Sparkles, Calendar } from "lucide-react";
import { Container } from "@/components/site/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { ABOUT_HERO } from "@/lib/data/about";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 border-b border-[#E2DDD1] bg-[#F7F5EF]">
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          {/* Institutional Badge */}
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B69A58]/40 bg-white px-4 py-1.5 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#B69A58]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B69A58]">
                {ABOUT_HERO.institution}
              </span>
            </div>
          </FadeIn>

          {/* CCF Crest / Logo Presentation */}
          <FadeIn direction="up" delay={0.1}>
            <CcfLogo size="lg" priority />
          </FadeIn>

          {/* Editorial Display Headline */}
          <FadeIn direction="up" delay={0.2}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#14243A] leading-tight tracking-tight">
              {ABOUT_HERO.title}
            </h1>
          </FadeIn>

          {/* Supporting Subtitle */}
          <FadeIn direction="up" delay={0.3}>
            <p className="text-[#64748B] max-w-2xl text-base md:text-lg leading-relaxed font-sans">
              {ABOUT_HERO.subtitle}
            </p>
          </FadeIn>

          {/* Action CTAs */}
          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
              <Button asChild size="lg" className="w-full sm:w-auto bg-[#14243A] hover:bg-[#1f3654] text-[#F7F5EF]">
                <Link href="/events" className="inline-flex items-center justify-center gap-2">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <span>Explore Academic Events</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-[#14243A] text-[#14243A] hover:bg-[#14243A] hover:text-[#F7F5EF]">
                <Link href="/join-us" className="inline-flex items-center justify-center gap-2">
                  <span>Join CCF</span>
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
