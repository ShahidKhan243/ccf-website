import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { FadeIn } from "@/components/motion/fade-in";

/**
 * Editorial Campus Hero Banner
 *
 * Displays the high-resolution Crescent College campus photograph with a controlled
 * dark navy overlay, elegant serif headline:
 * “Building Financial Minds for a Better Tomorrow” with ivory text and gold highlight,
 * readable ivory description, and direct Explore Events and Join Us actions.
 */
export function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden min-h-[580px] sm:min-h-[640px] md:min-h-[700px] lg:min-h-[760px] flex items-center bg-[#14243A]"
      aria-label="Crescent Club of Finance Hero Banner"
    >
      {/* High-Resolution Panoramic Background Image Layer */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <source
          srcSet="/images/campus-hero-sunset-2k.webp"
          type="image/webp"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="/images/campus-hero-sunset-2k.png"
          media="(min-width: 1024px)"
        />
        <img
          src="/images/campus-hero-sunset.png"
          alt="Crescent College, Vandalur Campus Sunset Panorama"
          className="w-full h-full object-cover object-[center_45%]"
          loading="eager"
          decoding="async"
        />
      </picture>

      {/* Controlled Dark Navy Overlay: Guarantees high readability behind text while keeping campus scenery visible */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(20, 36, 58, 0.86) 0%, rgba(20, 36, 58, 0.74) 45%, rgba(20, 36, 58, 0.48) 80%, rgba(20, 36, 58, 0.30) 100%), linear-gradient(180deg, rgba(20, 36, 58, 0.60) 0%, rgba(20, 36, 58, 0.20) 35%, rgba(20, 36, 58, 0.50) 75%, rgba(20, 36, 58, 0.88) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Hero Content Area */}
      <div className="relative z-10 w-full pt-32 pb-20 sm:pt-36 sm:pb-24 md:pt-40 md:pb-32 lg:pt-44 lg:pb-36">
        <Container className="max-w-[1240px]">
          <div className="max-w-[840px] text-left space-y-6">
            {/* Small uppercase club name with letter spacing */}
            <FadeIn direction="up" delay={0.05}>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#B69A58]/40 bg-[#14243A]/85 backdrop-blur-md px-4 py-1.5 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B69A58]" />
                <span className="font-sans text-[11px] sm:text-[12px] md:text-[13px] font-bold tracking-[0.16em] uppercase text-[#B69A58]">
                  CRESCENT CLUB OF FINANCE • CRESCENT COLLEGE, VANDALUR
                </span>
              </div>
            </FadeIn>

            {/* Elegant Serif Headline — Entirely Gold (#B69A58) with subtle navy text shadow */}
            <FadeIn direction="up" delay={0.12}>
              <h1
                style={{
                  color: "#B69A58",
                  textShadow: "0 2px 10px rgba(20, 36, 58, 0.95), 0 4px 20px rgba(0, 0, 0, 0.8)",
                }}
                className="font-serif !text-[#B69A58] text-[38px] sm:text-[52px] md:text-[66px] lg:text-[76px] font-bold leading-[1.08] tracking-tight max-w-[840px]"
              >
                <span style={{ color: "#B69A58" }} className="!text-[#B69A58]">
                  Building
                </span>{" "}
                <span style={{ color: "#B69A58" }} className="!text-[#B69A58]">
                  Financial Minds
                </span>
                <br />
                <span style={{ color: "#B69A58" }} className="!text-[#B69A58]">
                  for a Better Tomorrow
                </span>
              </h1>
            </FadeIn>

            {/* Supporting description in readable Ivory over dark photography */}
            <FadeIn direction="up" delay={0.2}>
              <p
                style={{ color: "#F7F5EF" }}
                className="font-sans !text-[#F7F5EF] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] text-[16px] sm:text-[18px] md:text-[20px] leading-[1.65] max-w-[760px] font-normal"
              >
                Empowering students with financial literacy, market awareness, investment knowledge, and practical experience for a smarter financial future.
              </p>
            </FadeIn>

            {/* Action buttons: Explore Events (gold) & Join Us (transparent white border) */}
            <FadeIn direction="up" delay={0.28}>
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/events"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#B69A58] px-7 py-3.5 font-sans text-base font-bold text-[#14243A] shadow-md transition-all duration-200 hover:bg-[#c7ab67] hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58]"
                >
                  <span>Explore Events</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>

                <Link
                  href="/join-us"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 bg-transparent px-7 py-3.5 font-sans text-base font-semibold text-[#F7F5EF] drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] transition-all duration-200 hover:bg-white/10 hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Join Us</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </div>

      {/* Subtle bottom edge gradient seamlessly transitioning to next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F7F5EF] to-transparent pointer-events-none z-[3]"
        aria-hidden="true"
      />
    </section>
  );
}
