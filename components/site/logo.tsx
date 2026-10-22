import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface CcfLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
}

const SIZE_MAP = {
  sm: {
    container: "h-9 w-9",
    dimension: 36,
  },
  md: {
    container: "h-11 w-11 md:h-12 md:w-12",
    dimension: 48,
  },
  lg: {
    container: "h-20 w-20 md:h-24 md:w-24",
    dimension: 96,
  },
} as const;

export function CcfLogo({ size = "md", className, priority = false }: CcfLogoProps) {
  const config = SIZE_MAP[size];

  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#E2DDD1] bg-white shadow-sm p-0.5",
        config.container,
        className
      )}
    >
      <Image
        src="/images/ccf_logo.webp"
        alt="Crescent Club of Finance Emblem"
        width={config.dimension}
        height={config.dimension}
        className="h-full w-full object-contain"
        priority={priority}
      />
    </div>
  );
}
