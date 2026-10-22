import React from "react";

export function BrandTagline() {
  return (
    <div className="bg-[#F7F5EF] py-8 border-b border-[#E2DDD1]">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold tracking-widest text-[#B69A58] uppercase">
        <span className="h-px flex-1 bg-[#E2DDD1]" aria-hidden="true" />
        <span className="hover:text-[#14243A] transition-colors">FINANCE</span>
        <span className="h-1.5 w-1.5 rounded-full bg-[#B69A58]" aria-hidden="true" />
        <span className="hover:text-[#14243A] transition-colors">LEADERSHIP</span>
        <span className="h-1.5 w-1.5 rounded-full bg-[#B69A58]" aria-hidden="true" />
        <span className="hover:text-[#14243A] transition-colors">IMPACT</span>
        <span className="h-px flex-1 bg-[#E2DDD1]" aria-hidden="true" />
      </div>
    </div>
  );
}
