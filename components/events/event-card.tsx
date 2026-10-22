import React from "react";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { CardReveal } from "@/components/ui/card-reveal";
import { Badge } from "@/components/ui/badge";
import { type CcfEvent } from "@/lib/data/events";
import { RichTextView } from "@/components/ui/rich-text-view";

interface EventCardProps {
  event: CcfEvent;
}

export function EventCard({ event }: EventCardProps) {
  const isUpcoming = event.status === "UPCOMING";

  return (
    <CardReveal className="h-full rounded-lg">
      <div className="flex flex-col h-full bg-white border border-[#E2DDD1] p-6 md:p-8 space-y-6 hover:border-[#B69A58]/60 transition-all duration-300 shadow-sm hover:shadow-md rounded-lg">
        <div className="space-y-3">
          {/* Category & Status Badges */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            {event.category && (
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B69A58]">
                {event.category}
              </span>
            )}

            <span className="px-2.5 py-0.5 rounded-full border border-[#E2DDD1] bg-[#F7F5EF] text-[11px] font-semibold tracking-wider uppercase text-[#14243A]">
              {event.status}
            </span>
          </div>

          {/* Event Title */}
          <div className="space-y-1 pt-1">
            <h3 className="font-serif text-xl md:text-2xl font-bold text-[#14243A] leading-snug">
              {event.name}
            </h3>
            {event.edition && (
              <p className="text-xs text-[#B69A58] font-mono tracking-wide">
                Edition: {event.edition}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-4 flex-1">
          {/* Date & Venue Metadata */}
          <div className="space-y-2 text-xs text-[#64748B] border-y border-[#E2DDD1] py-3">
            <div className="flex items-center gap-2.5">
              <Calendar className="h-4 w-4 text-[#B69A58] shrink-0" aria-hidden="true" />
              <span className="font-semibold text-[#14243A]">{event.dateText}</span>
            </div>

            {(event.venueText || event.venue) && (
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-[#B69A58] shrink-0" aria-hidden="true" />
                <span className="truncate">{event.venueText || event.venue}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="text-[#64748B] text-sm leading-relaxed line-clamp-3 overflow-hidden font-sans">
            <RichTextView content={event.content?.descriptionRich || event.description} />
          </div>
        </div>

        <div className="pt-4 border-t border-[#E2DDD1] flex items-center justify-between">
          <Link
            href={`/events/${event.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-[#B69A58] hover:text-[#987E41] transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B69A58] rounded"
          >
            <span>{isUpcoming ? "View Details & Register" : "View Event Overview"}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </CardReveal>
  );
}
