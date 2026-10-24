import { Metadata } from "next";
import { VisionMissionSection } from "@/components/about";

export const metadata: Metadata = {
  title: "About Us — Crescent Club of Finance | Crescent College, Vandalur",
  description:
    "Learn about the Crescent Club of Finance (CCF) at Crescent College, Vandalur. Guided by Principles, Driven by Purpose. The CCF Foundation.",
  openGraph: {
    title: "About Us — Crescent Club of Finance",
    description:
      "Guided by Principles, Driven by Purpose. Our values shape who we are, how we work, and the impact we create in the lives of our students and communities.",
    siteName: "Crescent Club of Finance",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-[#F7F5EF] text-[#14263F] min-h-screen">
      <VisionMissionSection />
    </div>
  );
}
