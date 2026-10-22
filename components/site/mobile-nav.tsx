"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  X,
  Mail,
  ExternalLink,
  LogIn,
  Home,
  Info,
  Layers,
  Users,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { NavItem, CCF_PUBLIC_INFO } from "./navigation-data";
import { CcfLogo } from "./logo";
import { cn } from "@/lib/utils";
import type { PublicContactSettings } from "@/lib/site-settings/service";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: readonly NavItem[];
  pathname: string;
  contactSettings?: PublicContactSettings;
}

const ITEM_ICONS: Record<string, React.ElementType> = {
  Home,
  About: Info,
  Departments: Layers,
  Members: Users,
  Events: Calendar,
  Contact: Mail,
};

export function MobileNav({
  isOpen,
  onClose,
  items,
  pathname,
  contactSettings,
}: MobileNavProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key press and manage body scroll locking
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-[#0D1927]/80 backdrop-blur-sm transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in drawer from the right */}
      <div
        id="mobile-navigation"
        className="fixed inset-y-0 right-0 z-50 flex h-[100dvh] w-full max-w-sm flex-col border-l border-[#1e3452] bg-[#14243A] p-6 shadow-2xl transition-transform duration-200 ease-in-out overscroll-contain"
      >
        {/* Header with logo, club name, and close button */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <CcfLogo size="sm" priority className="border-[#B69A58]/30 bg-white" />
            <div className="h-7 w-[1px] bg-white/20" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="font-sans text-[16px] font-bold tracking-tight text-[#F7F5EF] leading-tight">
                Crescent Club of Finance
              </span>
              <span className="font-sans text-[11px] font-medium tracking-wider text-[#B69A58] leading-snug">
                Crescent College, Vandalur
              </span>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#F7F5EF] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58]"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation links list with line icons */}
        <nav className="flex-1 overflow-y-auto py-6" aria-label="Mobile Navigation">
          <ul className="space-y-2">
            {items.map((item) => {
              const Icon = ITEM_ICONS[item.label] || ArrowRight;
              const isActive =
                item.href === "/" ? pathname === "/" : (pathname?.startsWith(item.href) ?? false);

              if (item.isCta) {
                return (
                  <li key={item.href} className="pt-4">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex w-full items-center justify-center rounded-full bg-[#B69A58] px-5 py-3 font-sans text-sm font-bold text-[#14243A] shadow-md transition-colors hover:bg-[#c7ab67] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58]"
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span>Join Us</span>
                      <span className="ml-1.5" aria-hidden="true">→</span>
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3.5 py-2.5 font-sans text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58]",
                      isActive
                        ? "text-[#B69A58] font-bold bg-[#0D1927] border-l-2 border-[#B69A58]"
                        : "text-[#F7F5EF]/85 hover:text-[#B69A58] hover:bg-white/5"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <Icon className={cn("h-4 w-4 shrink-0", isActive ? "text-[#B69A58]" : "text-[#F7F5EF]/70")} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}

            {/* Mobile Sign In Link */}
            <li className="pt-2">
              <Link
                href="/admin/login"
                onClick={onClose}
                className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 font-sans text-sm font-medium text-[#F7F5EF]/70 hover:text-[#F7F5EF] hover:bg-white/5 transition-colors"
              >
                <LogIn className="h-4 w-4 text-[#B69A58]" />
                <span>Sign In to Portal</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer info inside mobile drawer */}
        {(() => {
          const email = contactSettings?.contactEmail || CCF_PUBLIC_INFO.email;
          const instagram = contactSettings?.socialInstagram || CCF_PUBLIC_INFO.socials.instagram;
          const linkedin = contactSettings?.socialLinkedin || CCF_PUBLIC_INFO.socials.linkedin;

          return (
            <div className="border-t border-white/10 pt-5 text-xs text-[#94A3B8] space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#B69A58]" aria-hidden="true" />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-[#F7F5EF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B69A58]"
                >
                  {email}
                </a>
              </div>

              <div className="flex items-center gap-4 pt-1">
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#94A3B8] hover:text-[#B69A58] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B69A58]"
                  aria-label="Crescent Club of Finance Instagram (opens in a new tab)"
                >
                  <span>Instagram</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#94A3B8] hover:text-[#B69A58] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B69A58]"
                  aria-label="Crescent Club of Finance LinkedIn (opens in a new tab)"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </div>

              <p className="text-[11px] text-[#94A3B8]/80 pt-1">
                {CCF_PUBLIC_INFO.campus}
              </p>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
