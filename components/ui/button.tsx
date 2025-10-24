import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-brand-accent to-brand-accentSecondary text-white hover:from-brand-accent hover:to-brand-accentSecondary",
        secondary:
          "bg-brand-secondary text-brand-textPrimary border border-brand-textSecondary hover:bg-brand-textSecondary/10",
        accent: "bg-brand-accent text-white hover:bg-brand-accentSecondary shadow-soft",
        outline:
          "border-2 border-brand-accent text-brand-accent bg-transparent hover:bg-brand-accent hover:text-white",
      },
      size: {
        sm: "px-3 py-2 text-sm",
        md: "px-5 py-3 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
