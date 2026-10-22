"use client";

import React from "react";
import { MapPin, Landmark, Navigation, ExternalLink } from "lucide-react";
import { Container } from "@/components/site/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { CONTACT_LOCATION, CRESCENT_CAMPUS_COORDINATES } from "@/lib/data/contact";

export function ContactLocation() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${CRESCENT_CAMPUS_COORDINATES.latitude},${CRESCENT_CAMPUS_COORDINATES.longitude}`;

  return (
    <section className="py-16 md:py-24 bg-[#F7F5EF] border-b border-[#E2DDD1] relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div
        className="absolute top-0 right-1/3 w-80 h-80 bg-[#B69A58]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="space-y-10">
        {/* Section Header */}
        <FadeIn>
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-widest text-[#B69A58] uppercase">
                CAMPUS PRESENCE
              </span>
              <span className="h-0.5 w-6 bg-[#B69A58]" aria-hidden="true" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14243A] tracking-tight leading-tight">
              Find Us at <span className="text-[#B69A58]">Crescent.</span>
            </h2>
            <p className="text-sm md:text-base text-[#64748B] leading-relaxed">
              {CONTACT_LOCATION.description}
            </p>
          </div>
        </FadeIn>

        {/* Two-Column Layout: Layered Navy Campus Panel + Interactive Map */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Navy Panel (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#14243A] text-[#F7F5EF] p-8 sm:p-10 border border-[#14243A] shadow-lg relative overflow-hidden">
              {/* Subtle gold glow */}
              <div
                className="absolute -top-12 -right-12 w-48 h-48 bg-[#B69A58]/15 rounded-full blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="space-y-6 relative">
                {/* Academic Institution Card */}
                <div className="flex items-start gap-4 pb-6 border-b border-white/10">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-[#B69A58]">
                    <Landmark className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">
                      Academic Institution
                    </p>
                    <p className="font-serif text-base sm:text-lg font-bold text-[#F7F5EF] leading-snug">
                      {CONTACT_LOCATION.institution}
                    </p>
                  </div>
                </div>

                {/* Campus & Physical Address Card */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B69A58]/20 border border-[#B69A58]/40 text-[#B69A58]">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="space-y-2 min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">
                      Campus Location
                    </p>
                    <p className="font-serif text-base sm:text-lg font-bold text-[#F7F5EF]">
                      {CONTACT_LOCATION.campus}
                    </p>
                    <div className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed space-y-0.5 pt-0.5">
                      <p>GST Road, Vandalur</p>
                      <p>Chennai – 600 048</p>
                      <p>Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Directions CTA Button */}
              <div className="pt-8 mt-6 border-t border-white/10 relative">
                <Button
                  asChild
                  className="w-full bg-[#B69A58] hover:bg-[#a68a48] text-[#14243A] font-bold text-sm h-11 rounded-xl shadow-md transition-all inline-flex items-center justify-center gap-2"
                >
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get Directions to Crescent College, Vandalur (opens in Google Maps)"
                  >
                    <Navigation className="h-4 w-4" />
                    <span>Get Directions</span>
                    <ExternalLink className="h-3.5 w-3.5 ml-1 opacity-70" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column: Google Maps Interactive Embed (7 cols) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="h-full min-h-[340px] sm:min-h-[400px] overflow-hidden bg-white rounded-2xl border border-[#E2DDD1] shadow-md relative">
                <iframe
                  title={CONTACT_LOCATION.mapTitle}
                  src={CONTACT_LOCATION.mapEmbedUrl}
                  className="w-full h-full min-h-[340px] sm:min-h-[400px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen={false}
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
