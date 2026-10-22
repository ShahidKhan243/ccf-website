import React from "react";
import { PublicShell } from "@/components/site/public-shell";
import { getPublicContactSettings } from "@/lib/site-settings/service";


export const revalidate = 60;

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactSettings = await getPublicContactSettings();
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/images/campus-hero-sunset.png"
      />
      <PublicShell contactSettings={contactSettings}>{children}</PublicShell>
    </>
  );
}
