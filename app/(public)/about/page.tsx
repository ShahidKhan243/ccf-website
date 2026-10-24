import { Metadata } from "next";
import {
  AboutHero,
  AboutStory,
  VisionMissionSection,
  WhatCCFDoes,
  AboutCta,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About Us — Crescent Club of Finance | Crescent College, Vandalur",
  description:
    "Learn about the Crescent Club of Finance (CCF) at Crescent College, Vandalur. More than a club, a financial community building financial literacy, fostering critical thinking, and creating opportunities.",
  openGraph: {
    title: "About Us — Crescent Club of Finance",
    description:
      "More than a club, a financial community building financial literacy, fostering critical thinking, and creating opportunities in finance at Crescent College, Vandalur.",
    siteName: "Crescent Club of Finance",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-[#F7F5EF] text-[#14243A] min-h-screen">
      {/* 1. Hero Section with Actual Crescent College Sunset Aerial Photo */}
      <AboutHero />

      {/* 2. Our Story Section with Workspace Photo, Narrative & Timeline */}
      <AboutStory />

      {/* 3. Mission, Vision and Values */}
      <VisionMissionSection />

      {/* 4. What We Do Section with 4 Cards & Campus Photo */}
      <WhatCCFDoes />

      {/* 5. Join Our Journey Full-Width Navy Banner */}
      <AboutCta />
    </div>
  );
}
