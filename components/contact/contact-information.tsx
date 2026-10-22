"use client";

import React from "react";
import { Mail, Headphones, ArrowRight, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import {
  CONTACT_CHANNELS,
  type ContactChannel,
} from "@/lib/data/contact";
import { InstagramIcon, LinkedinIcon } from "./social-icons";

interface ContactInformationProps {
  channels?: readonly ContactChannel[];
}

interface ChannelVisualConfig {
  label: string;
  actionText: string;
  description: string;
  icon: React.ElementType;
}

const VISUAL_CONFIG: Record<string, ChannelVisualConfig> = {
  "channel-email": {
    label: "OFFICIAL EMAIL",
    actionText: "Send Email",
    description: "Official email channel for contacting Crescent Club of Finance.",
    icon: Mail,
  },
  "channel-support-email": {
    label: "TECHNICAL SUPPORT",
    actionText: "Send Email",
    description: "Having trouble with the website? Contact our technical support team.",
    icon: Headphones,
  },
  "channel-instagram": {
    label: "INSTAGRAM",
    actionText: "Visit Instagram",
    description: "Official Instagram channel of Crescent Club of Finance.",
    icon: InstagramIcon,
  },
  "channel-linkedin": {
    label: "LINKEDIN",
    actionText: "Visit LinkedIn",
    description: "Official LinkedIn channel of Crescent Club of Finance.",
    icon: LinkedinIcon,
  },
};

export function ContactInformation({
  channels = CONTACT_CHANNELS,
}: ContactInformationProps = {}) {
  const displayChannels = channels.length === 4 ? channels : CONTACT_CHANNELS;

  return (
    <div className="space-y-4">
      <h2 className="sr-only">Official Contact Channels</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
      {displayChannels.map((channel: ContactChannel, idx: number) => {
        const config = VISUAL_CONFIG[channel.id] || {
          label: channel.label.toUpperCase(),
          actionText: channel.iconName === "Mail" ? "Send Email" : "Visit Channel",
          description: channel.description,
          icon: Mail,
        };
        const Icon = config.icon;
        const isExternal = Boolean(channel.isExternal);

        return (
          <div key={channel.id} className="h-full">
            <a
              href={channel.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group flex flex-col justify-between h-full bg-white rounded-2xl border border-[#E2DDD1] p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-[#B69A58] hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58]"
              aria-label={`${config.label}: ${channel.value}${
                isExternal ? " (opens in a new tab)" : ""
              }`}
            >
              <div>
                {/* Icon in gold circled container */}
                <div className="mb-4">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F7F5EF] border border-[#B69A58]/30 text-[#B69A58] group-hover:bg-[#B69A58] group-hover:text-white transition-colors">
                    <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" aria-hidden="true" />
                  </div>
                </div>

                {/* Subtitle / Category Label */}
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#B69A58] uppercase block mb-1">
                  {config.label}
                </span>

                {/* Main Value */}
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#14243A] group-hover:text-[#B69A58] transition-colors break-all sm:break-words leading-snug">
                  {channel.value}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                  {config.description}
                </p>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-4 mt-4 border-t border-[#E2DDD1]/70 flex items-center justify-between text-xs font-semibold text-[#B69A58] group-hover:text-[#9A7F3E]">
                <span>{config.actionText}</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        );
      })}
      </div>
    </div>
  );
}
