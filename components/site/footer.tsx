import React from "react";
import Link from "next/link";
import { CcfLogo } from "./logo";
import { Mail, ExternalLink } from "lucide-react";
import { Container } from "./container";
import { PUBLIC_NAV_ITEMS, CCF_PUBLIC_INFO } from "./navigation-data";
import type { PublicContactSettings } from "@/lib/site-settings/service";

interface FooterProps {
  contactSettings?: PublicContactSettings;
}

export function Footer({ contactSettings }: FooterProps = {}) {
  const currentYear = new Date().getFullYear();
  const email = contactSettings?.contactEmail || CCF_PUBLIC_INFO.email;
  const supportEmail = contactSettings?.supportEmail;
  const instagram = contactSettings?.socialInstagram || CCF_PUBLIC_INFO.socials.instagram;
  const linkedin = contactSettings?.socialLinkedin || CCF_PUBLIC_INFO.socials.linkedin;

  return (
    <footer className="border-t border-[#1e3452] bg-[#0D1927] text-[#94A3B8]">
      {/* Refined Gold Accent Top Rule */}
      <div className="h-[2px] w-full bg-[#B69A58]" aria-hidden="true" />

      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
          {/* Column 1: Brand & Affiliation */}
          <div className="space-y-5 md:col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58]"
              aria-label={`${CCF_PUBLIC_INFO.name} Home`}
            >
              <CcfLogo size="sm" className="border-[#B69A58]/30 bg-white shadow-sm" />
              <div className="flex flex-col">
                <span className="font-sans text-xl font-bold tracking-tight text-[#F7F5EF]">
                  {CCF_PUBLIC_INFO.name}
                </span>
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#B69A58]">
                  Crescent College, Vandalur
                </span>
              </div>
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-[#94A3B8]">
              The official student finance organization of {CCF_PUBLIC_INFO.affiliation}, dedicated to financial literacy, quantitative modeling, capital market research, and student career advancement.
            </p>

            <div className="pt-2 text-xs text-[#64748B] space-y-1">
              <p className="font-semibold text-[#94A3B8]">{CCF_PUBLIC_INFO.campus}</p>
              <p>B.S. Abdur Rahman Crescent Institute of Science and Technology, GST Road, Chennai - 600 048</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#B69A58]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {PUBLIC_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#94A3B8] hover:text-[#F7F5EF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B69A58] rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/join-us"
                  className="text-[#B69A58] font-bold hover:text-[#d4ba79] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B69A58] rounded"
                >
                  Join Us →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Official Contact & Socials */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#B69A58]">
              Contact & Socials
            </h3>
            <div className="space-y-3.5 text-sm">
              <a
                href={`mailto:${email}`}
                className="group flex items-start gap-2.5 text-[#94A3B8] hover:text-[#F7F5EF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B69A58] rounded"
                aria-label={`Email CCF at ${email}`}
              >
                <Mail className="h-4 w-4 shrink-0 text-[#B69A58] mt-0.5" aria-hidden="true" />
                <span className="text-xs xl:text-sm break-words">{email}</span>
              </a>

              {supportEmail && supportEmail !== email && (
                <a
                  href={`mailto:${supportEmail}`}
                  className="group flex items-start gap-2.5 text-[#94A3B8] hover:text-[#F7F5EF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B69A58] rounded"
                  aria-label={`Technical support email: ${supportEmail}`}
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#B69A58] mt-0.5" aria-hidden="true" />
                  <span className="text-xs xl:text-sm break-words">{supportEmail}</span>
                </a>
              )}

              <div className="pt-3 border-t border-white/10">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#B69A58] mb-2">
                  Official Channels
                </h4>
                <div className="flex flex-col space-y-2">
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#94A3B8] hover:text-[#B69A58] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B69A58] rounded"
                    aria-label="Crescent Club of Finance Instagram (opens in a new tab)"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>

                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#94A3B8] hover:text-[#B69A58] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B69A58] rounded"
                    aria-label="Crescent Club of Finance LinkedIn (opens in a new tab)"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Tagline Banner */}
        <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold tracking-widest text-[#B69A58] uppercase">
          <span>FINANCE</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#B69A58]" aria-hidden="true" />
          <span>LEADERSHIP</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#B69A58]" aria-hidden="true" />
          <span>IMPACT</span>
        </div>

        {/* Bottom Bar: Copyright and Attribution */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-[#64748B] sm:flex-row">
          <p>© {currentYear} {CCF_PUBLIC_INFO.name}. All rights reserved.</p>
          <p>{CCF_PUBLIC_INFO.campus}</p>
        </div>
      </Container>
    </footer>
  );
}
