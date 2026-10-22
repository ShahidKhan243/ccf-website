import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center" | "right";
  withRule?: boolean;
  theme?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  withRule = false,
  theme = "light",
  className,
  ...props
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isRight = align === "right";
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "space-y-3",
        isCenter && "text-center items-center flex flex-col",
        isRight && "text-right items-end flex flex-col",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#B69A58]">
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight",
          isDark ? "text-white" : "text-[#14243A]"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "font-sans text-base sm:text-lg max-w-2xl leading-relaxed",
            isDark ? "text-white/80" : "text-[#64748B]",
            isCenter && "mx-auto"
          )}
        >
          {description}
        </p>
      )}

      {withRule && (
        <div className={cn("pt-2 w-full", isCenter ? "max-w-xs" : "max-w-sm")}>
          <div className="h-[2px] w-16 bg-[#B69A58] rounded-full" />
        </div>
      )}
    </div>
  );
}
