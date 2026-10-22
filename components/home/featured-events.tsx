import React from "react";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { FadeIn } from "@/components/motion/fade-in";
import { HOMEPAGE_FEATURED_EVENTS } from "@/lib/data/homepage";
import type { CcfEvent } from "@/lib/data/events";

export interface FeaturedEventsProps {
  events?: CcfEvent[];
  isError?: boolean;
}

export function FeaturedEvents({ events, isError = false }: FeaturedEventsProps = {}) {
  // Use DB events if present, otherwise fall back to verified CCF events catalog
  const displayEvents =
    events && events.length > 0
      ? events
      : HOMEPAGE_FEATURED_EVENTS;

  return (
    <section className="py-20 md:py-28 bg-[#F7F5EF] border-b border-[#E2DDD1]">
      <Container className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <FadeIn direction="up">
            <SectionHeading
              eyebrow="Calendar & Initiatives"
              title="Featured & Upcoming Events"
              description="Explore symposiums, interactive trading challenges, and finance workshops organized by CCF."
            />
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-xl border border-[#14243A] bg-white px-5 py-2.5 font-sans text-sm font-semibold text-[#14243A] transition-all hover:bg-[#14243A] hover:text-[#F7F5EF] shrink-0 shadow-sm"
            >
              <span>View All Events</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>

        {/* Event Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayEvents.slice(0, 3).map((event) => (
            <StaggerItem key={event.id}>
              <div className="group flex flex-col h-full bg-white border border-[#E2DDD1] rounded-2xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(20,36,58,0.04)] hover:border-[#B69A58]/60 hover:shadow-[0_8px_24px_rgba(20,36,58,0.08)] hover:-translate-y-1 transition-all duration-300">
                {/* Event Category & Status */}
                <div className="flex items-center justify-between gap-2 pb-3">
                  {event.category && (
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#B69A58]">
                      {event.category}
                    </span>
                  )}

                  <Badge variant={event.statusVariant} dot>
                    {event.status}
                  </Badge>
                </div>

                {/* Event Title */}
                <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-[#14243A] group-hover:text-[#B69A58] transition-colors leading-snug pt-1">
                  {event.name}
                </h3>

                {/* Date & Location */}
                <div className="space-y-2 py-4 my-3 border-y border-[#E2DDD1] text-xs sm:text-sm text-[#64748B]">
                  <div className="flex items-center gap-2.5">
                    <Calendar className="h-4 w-4 text-[#B69A58] shrink-0" aria-hidden="true" />
                    <span>{event.dateText}</span>
                  </div>

                  {event.venueText && (
                    <div className="flex items-center gap-2.5">
                      <MapPin className="h-4 w-4 text-[#B69A58] shrink-0" aria-hidden="true" />
                      <span className="truncate">{event.venueText}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="font-sans text-sm text-[#64748B] line-clamp-3 leading-relaxed flex-1">
                  {event.shortDescription}
                </p>

                {/* Action Link */}
                <div className="pt-6">
                  <Link
                    href={`/events/${event.slug}`}
                    className="inline-flex items-center justify-between w-full rounded-xl border border-[#E2DDD1] bg-[#F7F5EF] px-4.5 py-3 font-sans text-sm font-semibold text-[#14243A] hover:bg-[#14243A] hover:text-[#F7F5EF] hover:border-[#14243A] transition-all shadow-xs"
                  >
                    <span>Explore Details & Register</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
