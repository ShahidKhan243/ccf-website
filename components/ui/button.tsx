import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#14243A] text-[#F7F5EF] hover:bg-[#1f3654] shadow-sm font-semibold",
        gold:
          "bg-[#B69A58] text-[#14243A] hover:bg-[#c4a969] shadow-sm font-semibold",
        secondary:
          "bg-white text-[#14243A] hover:bg-[#F7F5EF] border border-[#E2DDD1]",
        outline:
          "border border-[#14243A] bg-transparent text-[#14243A] hover:bg-[#14243A] hover:text-[#F7F5EF]",
        ghost:
          "text-[#64748B] hover:bg-black/5 hover:text-[#14243A]",
        destructive:
          "bg-[#BA3D35] text-white hover:bg-[#a6342d] shadow-sm",
        link:
          "text-[#B69A58] underline-offset-4 hover:underline p-0 h-auto font-medium active:scale-100",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
