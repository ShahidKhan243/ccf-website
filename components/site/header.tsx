"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CcfLogo } from "./logo";
import { usePathname } from "next/navigation";
import {
  Menu,
  ChevronDown,
  ArrowRight,
  Home,
  Info,
  Layers,
  Users,
  Calendar,
  Mail,
} from "lucide-react";
import { Container } from "./container";
import { MobileNav } from "./mobile-nav";
import { CCF_DEPARTMENTS } from "@/lib/data/departments";
import { cn } from "@/lib/utils";
import type { PublicContactSettings } from "@/lib/site-settings/service";

interface HeaderProps {
  contactSettings?: PublicContactSettings;
}

interface PillNavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  hasDropdown?: boolean;
}

// Navigation items with line icons as specified in reference
const PILL_NAV_ITEMS: readonly PillNavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Departments", href: "/departments", icon: Layers, hasDropdown: true },
  { label: "Members", href: "/members", icon: Users },
  { label: "Events", href: "/events", icon: Calendar },
  { label: "Contact", href: "/contact", icon: Mail },
];

export function Header({ contactSettings }: HeaderProps = {}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [deptDropdownOpen, setDeptDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isHomepage = pathname === "/";

  // Track scroll position to transition header container
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDeptDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "z-40 w-full transition-all duration-300",
        isHomepage
          ? isScrolled
            ? "fixed top-0 left-0 right-0 bg-[#14243A]/95 backdrop-blur-md shadow-md border-b border-[#1e3452]"
            : "fixed top-0 left-0 right-0 bg-gradient-to-b from-[#0D1927]/60 via-[#0D1927]/20 to-transparent"
          : "sticky top-0 bg-[#14243A] backdrop-blur-md shadow-md border-b border-[#1e3452]"
      )}
    >
      <Container className="flex h-20 sm:h-22 items-center justify-between gap-2 sm:gap-4">
        {/* Left: Crescent Club of Finance Crest / Logo & Identity */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58] rounded-md pr-1 py-1 shrink-0"
          aria-label="Crescent Club of Finance Home"
        >
          <CcfLogo size="md" priority className="border-white/30 bg-white shadow-sm" />

          {/* Thin vertical separator */}
          <div
            className="h-8 sm:h-9 w-[1px] bg-white/25 shrink-0"
            aria-hidden="true"
          />

          {/* Club & College Name */}
          <div className="flex flex-col justify-center">
            <span className="font-sans text-[15px] sm:text-[17px] xl:text-[18px] font-bold tracking-tight text-[#F7F5EF] drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] leading-tight group-hover:text-[#B69A58] transition-colors">
              Crescent Club of Finance
            </span>
            <span className="font-sans text-[10px] sm:text-[11px] font-medium tracking-wider text-[#F7F5EF]/85 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] leading-snug">
              Crescent College, Vandalur
            </span>
          </div>
        </Link>

        {/* Center: Compact Floating Pill-Shaped Navigation Bar with Line Icons */}
        <nav
          className="hidden lg:flex items-center justify-center"
          aria-label="Main Navigation"
        >
          <div className="flex items-center gap-1 xl:gap-2 rounded-full border border-white/20 bg-gradient-to-r from-[#14243A]/90 via-[#193354]/90 to-[#14243A]/90 backdrop-blur-xl px-3 xl:px-4 py-1.5 shadow-[0_8px_32px_rgba(10,20,35,0.45)]">
            {PILL_NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : (pathname?.startsWith(item.href) ?? false);

              // Departments dropdown item
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.href}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setDeptDropdownOpen(true)}
                    onMouseLeave={() => setDeptDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "group relative flex flex-col items-center justify-center px-3 xl:px-3.5 py-1 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58]",
                        isActive || deptDropdownOpen
                          ? "text-[#B69A58] font-semibold"
                          : "text-[#F7F5EF] hover:text-[#B69A58]"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <div className="flex items-center gap-0.5">
                        <Icon className={cn(
                          "h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5",
                          isActive || deptDropdownOpen ? "text-[#B69A58]" : "text-[#F7F5EF] group-hover:text-[#B69A58]"
                        )} />
                        <ChevronDown className={cn(
                          "h-2.5 w-2.5 transition-transform duration-200",
                          deptDropdownOpen ? "rotate-180 text-[#B69A58]" : "text-[#F7F5EF]/60"
                        )} />
                      </div>
                      <span className="text-[11px] font-medium tracking-wide mt-0.5 leading-tight">
                        {item.label}
                      </span>
                      {isActive && (
                        <span
                          className="absolute -bottom-0.5 w-4 h-[2px] bg-[#B69A58] rounded-full"
                          aria-hidden="true"
                        />
                      )}
                    </Link>

                    {/* Departments Dropdown Menu */}
                    {deptDropdownOpen && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 w-64 animate-in fade-in slide-in-from-top-1 duration-150"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        <div className="rounded-xl border border-[#B69A58]/25 bg-[#0D1927]/95 p-2 shadow-2xl shadow-black/80 backdrop-blur-xl">
                          <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#B69A58] border-b border-white/10">
                            Club Departments
                          </div>
                          <div className="py-1">
                            {CCF_DEPARTMENTS.map((dept) => (
                              <Link
                                key={dept.id}
                                href={`/departments#${dept.slug}`}
                                onClick={() => setDeptDropdownOpen(false)}
                                className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-[#F7F5EF]/90 hover:bg-white/10 hover:text-[#B69A58] transition-colors"
                                role="menuitem"
                              >
                                <span className="font-medium text-xs sm:text-sm">
                                  {dept.name}
                                </span>
                                <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#B69A58]" />
                              </Link>
                            ))}
                          </div>
                          <div className="border-t border-white/10 pt-1 mt-1">
                            <Link
                              href="/departments"
                              onClick={() => setDeptDropdownOpen(false)}
                              className="flex items-center justify-between rounded-lg px-3 py-1.5 text-xs font-semibold text-[#B69A58] hover:bg-white/10 transition-colors"
                            >
                              <span>View All Departments</span>
                              <span>→</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative flex flex-col items-center justify-center px-3 xl:px-3.5 py-1 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58]",
                    isActive
                      ? "text-[#B69A58] font-semibold"
                      : "text-[#F7F5EF] hover:text-[#B69A58]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className={cn(
                    "h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5",
                    isActive ? "text-[#B69A58]" : "text-[#F7F5EF] group-hover:text-[#B69A58]"
                  )} />
                  <span className="text-[11px] font-medium tracking-wide mt-0.5 leading-tight">
                    {item.label}
                  </span>
                  {isActive && (
                    <span
                      className="absolute -bottom-0.5 w-4 h-[2px] bg-[#B69A58] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Right: Sign In Link & Gold Join Us Pill Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Subtle Ivory Sign In Link */}
          <Link
            href="/admin/login"
            className="hidden sm:inline-flex items-center justify-center font-sans text-xs xl:text-sm font-medium text-[#F7F5EF]/85 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] transition-colors hover:text-white px-2.5 py-1.5 rounded-full hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58]"
          >
            Sign In
          </Link>

          {/* Join Us Pill Button */}
          <Link
            href="/join-us"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#B69A58] px-4.5 py-2 font-sans text-xs xl:text-sm font-bold text-[#14243A] shadow-md transition-all duration-200 hover:bg-[#c7ab67] hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58]"
          >
            <span>Join Us</span>
            <span className="ml-1.5 font-bold" aria-hidden="true">
              →
            </span>
          </Link>

          {/* Mobile Join Us Button (compact pill) */}
          <Link
            href="/join-us"
            className="inline-flex sm:hidden items-center justify-center rounded-full bg-[#B69A58] px-3 py-1.5 font-sans text-xs font-bold text-[#14243A] shadow-sm hover:bg-[#c7ab67]"
          >
            Join Us →
          </Link>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-[#F7F5EF] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A58] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>

      {/* Accessible mobile drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={PILL_NAV_ITEMS.map((item) => ({ label: item.label, href: item.href }))}
        pathname={pathname}
        contactSettings={contactSettings}
      />
    </header>
  );
}
