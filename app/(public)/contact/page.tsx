import { Metadata } from "next";
import {
  ContactHero,
  ContactInformation,
  ContactForm,
  BrandTagline,
} from "@/components/contact";
import { Container } from "@/components/site/container";
import { FadeIn } from "@/components/motion/fade-in";
import { getPublicContactSettings } from "@/lib/site-settings/service";
import { getContactChannels, CONTACT_LOCATION } from "@/lib/data/contact";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Crescent Club of Finance | Crescent College",
  description:
    "Contact the Crescent Club of Finance at B.S. Abdur Rahman Crescent Institute of Science and Technology. Reach out via email or connect through our official channels.",
  openGraph: {
    title: "Contact — Crescent Club of Finance",
    description:
      "Contact the Crescent Club of Finance at B.S. Abdur Rahman Crescent Institute of Science and Technology. Reach out via email or connect through our official channels.",
    siteName: "Crescent Club of Finance",
    locale: "en_US",
    type: "website",
  },
};

function renderContactPage(channels?: ReturnType<typeof getContactChannels>) {
  return (
    <div className="flex flex-col bg-[#F7F5EF] min-h-screen">
      {/* 1. Hero Section (~455-470px tall matching Image 1) */}
      <ContactHero />

      {/* 2. Contact Section immediately below the hero */}
      <section id="contact-section" className="py-8 sm:py-10 lg:py-12 bg-[#F7F5EF]">
        <Container className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Connect with Crescent Club of Finance</h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-stretch">
            {/* Left Column: Navy Form Panel (~42% / 5 cols) */}
            <div className="lg:col-span-5 flex flex-col">
              <ContactForm />
            </div>

            {/* Right Column: 4 White Cards (2x2) + Campus Address Card (~58% / 7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-5 sm:gap-6">
              {/* Four Contact Cards in 2x2 Grid */}
              <ContactInformation channels={channels} />

              {/* Campus Address Card with Map Preview matching Image 1 */}
              <div>
                <div className="bg-white rounded-2xl border border-[#E2DDD1] p-5 sm:p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-5 hover:border-[#B69A58] transition-colors">
                  {/* Left side: Gold Pin Icon + Verified Campus Details */}
                  <div className="flex items-start gap-3.5 min-w-0 flex-1">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F7F5EF] border border-[#B69A58]/30 text-[#B69A58] mt-0.5">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <h2 className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#B69A58] uppercase block">
                        CAMPUS ADDRESS
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-[#14243A] leading-relaxed">
                        Finance Department, {CONTACT_LOCATION.campus}, University Campus,
                        Main Building, Room 204, {CONTACT_LOCATION.address}.
                      </p>
                    </div>
                  </div>

                  {/* Right side: Map Preview + View on Maps Button */}
                  <div className="relative w-full md:w-auto shrink-0 flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-[#E2DDD1]">
                    {/* Interactive Google Maps Iframe Thumbnail */}
                    <div className="relative h-14 w-28 sm:w-32 rounded-xl overflow-hidden border border-[#E2DDD1] bg-[#eef0eb] hidden sm:block">
                      <iframe
                        title={CONTACT_LOCATION.mapTitle}
                        src={CONTACT_LOCATION.mapEmbedUrl}
                        className="w-full h-full border-0 pointer-events-none"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen={false}
                      />
                    </div>

                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${CONTACT_LOCATION.coordinates?.latitude},${CONTACT_LOCATION.coordinates?.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#14243A] hover:bg-[#1f3757] text-[#F7F5EF] text-xs font-semibold shadow-sm transition-colors shrink-0"
                      aria-label="View Crescent College campus on Google Maps"
                    >
                      <span>View on Maps</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Footer: FINANCE • LEADERSHIP • IMPACT */}
      <BrandTagline />
    </div>
  );
}

export default async function ContactPage() {
  const settings = await getPublicContactSettings();
  const channels = getContactChannels(settings);
  return renderContactPage(channels);
}
