import React from "react";
import { vi } from "vitest";

vi.mock("@/lib/data/leadership", () => ({
  getActiveLeadership: vi.fn().mockResolvedValue([
    { id: "lead-president", name: "Remi Kayalvizhi", role: "President", initials: "RK", displayOrder: 1 },
    { id: "lead-vp", name: "Fizza Fathima", role: "Vice President", initials: "FF", displayOrder: 2 },
    { id: "lead-md", name: "Zayan Ahmed", role: "Managing Director", initials: "ZA", displayOrder: 3 },
  ])
}));

import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import {
  ABOUT_HERO,
  ABOUT_STORY,
  ABOUT_PRINCIPLES,
  ABOUT_WHAT_WE_DO,
  ABOUT_JOIN_JOURNEY,
  ABOUT_OVERVIEW,
  ABOUT_VISION_MISSION,
  ABOUT_PILLARS,
  ABOUT_ACTIVITIES,
  ABOUT_FOUNDATION,
  ABOUT_LEADERSHIP,
} from "@/lib/data/about";
import {
  AboutHero,
  AboutStory,
  VisionMissionSection,
  PurposePillars,
  WhatCCFDoes,
  FoundationSection,
  AboutLeadership,
  AboutCta,
} from "@/components/about";
import { CcfLogo } from "@/components/site/logo";
import { Header } from "@/components/site/header";

describe("About Page Data & Components Redesign", () => {
  describe("Data Integrity & Verified Content (lib/data/about.ts)", () => {
    it("contains the confirmed executive leadership board only with no invented bios", () => {
      expect(ABOUT_LEADERSHIP.length).toBe(3);
      expect(ABOUT_LEADERSHIP).toEqual([
        {
          id: "lead-president",
          name: "Remi Kayalvizhi",
          role: "President",
          initials: "RK",
        },
        {
          id: "lead-vp",
          name: "Fizza Fathima",
          role: "Vice President",
          initials: "FF",
        },
        {
          id: "lead-md",
          name: "Zayan Ahmed",
          role: "Managing Director",
          initials: "ZA",
        },
      ]);
    });

    it("defines hero copy with specified two-line headline and features", () => {
      expect(ABOUT_HERO.titleLine1).toBe("More Than a Club,");
      expect(ABOUT_HERO.titleLine2).toBe("A Financial Community.");
      expect(ABOUT_HERO.eyebrow).toBe("ABOUT US");
      expect(ABOUT_HERO.features.length).toBe(3);
      const featureTitles = ABOUT_HERO.features.map((f) => f.title);
      expect(featureTitles).toContain("Learning & Growth");
      expect(featureTitles).toContain("Networking & Collaboration");
      expect(featureTitles).toContain("Real-World Exposure");
    });

    it("defines Our Story narrative and 3 editable timeline milestones", () => {
      expect(ABOUT_STORY.eyebrow).toBe("OUR STORY");
      expect(ABOUT_STORY.title).toBe("Rooted in Knowledge, Driven by Impact.");
      expect(ABOUT_STORY.timeline.length).toBe(3);
      expect(ABOUT_STORY.timeline[0].year).toBe("2019");
      expect(ABOUT_STORY.timeline[0].title).toBe("Club Founded");
      expect(ABOUT_STORY.timeline[1].year).toBe("Today");
      expect(ABOUT_STORY.timeline[1].title).toBe("Growing Community");
      expect(ABOUT_STORY.timeline[2].year).toBe("The Future");
      expect(ABOUT_STORY.timeline[2].title).toBe("Greater Impact");
    });

    it("defines Mission, Vision, and Values principles", () => {
      expect(ABOUT_PRINCIPLES.heading).toBe("Guided by Principles, Driven by Purpose.");
      expect(ABOUT_PRINCIPLES.mission.title).toBe("Our Mission");
      expect(ABOUT_PRINCIPLES.vision.title).toBe("Our Vision");
      expect(ABOUT_PRINCIPLES.values.title).toBe("Our Values");
      expect(ABOUT_PRINCIPLES.mission.description).toContain("financial literacy");
      expect(ABOUT_PRINCIPLES.vision.description).toContain("innovation");
      expect(ABOUT_PRINCIPLES.values.description).toContain("Integrity");
    });

    it("defines What We Do initiatives with 4 clean cards", () => {
      expect(ABOUT_WHAT_WE_DO.heading).toBe("Creating Opportunities. Building Skills.");
      expect(ABOUT_WHAT_WE_DO.cards.length).toBe(4);
      const cardTitles = ABOUT_WHAT_WE_DO.cards.map((c) => c.title);
      expect(cardTitles).toContain("Workshops & Sessions");
      expect(cardTitles).toContain("Guest Lectures");
      expect(cardTitles).toContain("Networking");
      expect(cardTitles).toContain("Opportunities");
    });

    it("defines Join Our Journey banner with gold CTA", () => {
      expect(ABOUT_JOIN_JOURNEY.eyebrow).toBe("JOIN OUR JOURNEY");
      expect(ABOUT_JOIN_JOURNEY.title).toBe("Be a Part of Something Bigger.");
      expect(ABOUT_JOIN_JOURNEY.ctaHref).toBe("/join-us");
    });
  });

  describe("CCF Logo Presentation & Circular Treatment", () => {
    it("renders CcfLogo using WebP image filling the circular frame cleanly", () => {
      const html = renderToStaticMarkup(<CcfLogo size="lg" priority />);
      expect(html).toContain("ccf_logo.webp");
      expect(html).toContain("rounded-full");
      expect(html).toContain("overflow-hidden");
      expect(html).toContain("bg-white");
      expect(html).toContain('alt="Crescent Club of Finance Emblem"');
    });

    it("supports all required size variants with correct proportions", () => {
      const htmlSm = renderToStaticMarkup(<CcfLogo size="sm" />);
      expect(htmlSm).toContain("h-9");
      expect(htmlSm).toContain("w-9");

      const htmlMd = renderToStaticMarkup(<CcfLogo size="md" />);
      expect(htmlMd).toContain("h-11");
      expect(htmlMd).toContain("w-11");

      const htmlLg = renderToStaticMarkup(<CcfLogo size="lg" />);
      expect(htmlLg).toContain("h-20");
      expect(htmlLg).toContain("w-20");
    });

    it("renders circular logo treatment in Header", () => {
      const headerHtml = renderToStaticMarkup(<Header />);
      expect(headerHtml).toContain("ccf_logo.webp");
      expect(headerHtml).toContain("overflow-hidden");
      expect(headerHtml).toContain("rounded-full");
    });
  });

  describe("Component Rendering & Structure", () => {
    it("renders AboutHero with verified identity, actual campus photo, and floating panel", () => {
      const html = renderToStaticMarkup(<AboutHero />);
      expect(html).toContain("ABOUT US");
      expect(html).toContain("More Than a Club,");
      expect(html).toContain("A Financial Community.");
      expect(html).toContain("Crescent College, Vandalur");
      expect(html).toContain("Learning &amp; Growth");
      expect(html).toContain("Networking");
      expect(html).toContain("Real-World");
      expect(html).toContain("campus-hero-sunset-2k.webp");
      expect(html).toContain("Finance Builds Better Futures");
      expect(html).toContain('href="/events"');
      expect(html).toContain('href="/join-us"');
    });

    it("renders AboutStory with finance workspace image, narrative, and timeline", () => {
      const html = renderToStaticMarkup(<AboutStory />);
      expect(html).toContain("OUR STORY");
      expect(html).toContain("Rooted in Knowledge, Driven by Impact.");
      expect(html).toContain("story-finance.jpg");
      expect(html).toContain("2019");
      expect(html).toContain("Club Founded");
      expect(html).toContain("Today");
      expect(html).toContain("Growing Community");
      expect(html).toContain("The Future");
      expect(html).toContain("Greater Impact");
    });

    it("renders VisionMissionSection with centered heading and 3 columns", () => {
      const html = renderToStaticMarkup(<VisionMissionSection />);
      expect(html).toContain("Guided by Principles, Driven by Purpose.");
      expect(html).toContain("Our Mission");
      expect(html).toContain("Our Vision");
      expect(html).toContain("Our Values");
      expect(html).toContain("Integrity, curiosity, collaboration, excellence");
    });

    it("renders WhatCCFDoes with 3-column layout, 4 clean cards, and authentic campus photo", () => {
      const html = renderToStaticMarkup(<WhatCCFDoes />);
      expect(html).toContain("Creating Opportunities. Building Skills.");
      expect(html).toContain("Workshops &amp; Sessions");
      expect(html).toContain("Guest Lectures");
      expect(html).toContain("Networking");
      expect(html).toContain("Opportunities");
      expect(html).toContain('href="/events"');
      expect(html).toContain("campus-panorama.png");
    });

    it("renders AboutLeadership with verified leaders and link to directory", () => {
      const html = renderToStaticMarkup(
        <AboutLeadership
          leaders={[
            { id: "lead-president", name: "Remi Kayalvizhi", role: "President", initials: "RK", displayOrder: 1 },
            { id: "lead-vp", name: "Fizza Fathima", role: "Vice President", initials: "FF", displayOrder: 2 },
            { id: "lead-md", name: "Zayan Ahmed", role: "Managing Director", initials: "ZA", displayOrder: 3 },
          ]}
        />
      );
      expect(html).toContain("Remi Kayalvizhi");
      expect(html).toContain("President");
      expect(html).toContain("Fizza Fathima");
      expect(html).toContain("Vice President");
      expect(html).toContain("Zayan Ahmed");
      expect(html).toContain("Managing Director");
      expect(html).toContain('href="/members"');
    });

    it("renders AboutCta full-width navy banner with gold Join Us button", () => {
      const html = renderToStaticMarkup(<AboutCta />);
      expect(html).toContain("JOIN OUR JOURNEY");
      expect(html).toContain("Be a Part of Something Bigger.");
      expect(html).toContain('href="/join-us"');
      expect(html).toContain("Join Us");
    });
  });
});
