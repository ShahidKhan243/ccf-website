import { Metadata } from "next";
import {
  AboutHero,
  AboutStory,
  VisionMissionSection,
  WhatCCFDoes,
  AboutLeadership,
  AboutCta,
} from "@/components/about";
import { getActiveLeadership } from "@/lib/data/leadership";

export const metadata: Metadata = {
  title: "About Us — Crescent Club of Finance | Crescent College, Vandalur",
  description:
    "Learn about the Crescent Club of Finance (CCF) at Crescent College, Vandalur. More than a club, a financial community committed to building financial literacy, critical thinking, and real-world exposure.",
  openGraph: {
    title: "About Us — Crescent Club of Finance",
    description:
      "More than a club, a financial community. The student finance society of B.S. Abdur Rahman Crescent Institute of Science and Technology, Vandalur.",
    siteName: "Crescent Club of Finance",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/campus-hero-sunset-2k.webp",
        width: 1200,
        height: 630,
        alt: "Crescent Club of Finance — Crescent College Campus",
      },
    ],
  },
};

export default async function AboutPage() {
  const leaders = await getActiveLeadership();

  return (
    <div className="flex flex-col bg-[#F7F5EF] text-[#14243A]">
      {/* 1. Hero Section: Two-column layout with actual Crescent College sunset aerial photo */}
      <AboutHero />

      {/* 2. Our Story Section: Three-column layout with finance workspace image, narrative, and timeline */}
      <AboutStory />

      {/* 3. Mission, Vision, and Values: Centered section with 3 columns and gold icons */}
      <VisionMissionSection />

      {/* 4. What We Do Section: 3-column layout with left CTA, center 4 activity cards, and right campus photo */}
      <WhatCCFDoes />

      {/* 5. Executive Leadership Board */}
      <AboutLeadership leaders={leaders} />

      {/* 6. Join Our Journey Banner: Full-width navy banner with subtle campus line-art and gold button */}
      <AboutCta />
    </div>
  );
}
