import { ReactNode, HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  background?: "cream" | "light" | "neutral" | "dark" | "gradient";
  padding?: "sm" | "md" | "lg";
}

export default function Section({
  children,
  className = "",
  background = "cream",
  padding = "lg",
  ...props
}: SectionProps) {
  const backgroundClasses = {
    cream: "bg-brand-primary",
    light: "bg-brand-primary/70",
    neutral: "bg-brand-primary/50",
    dark: "bg-brand-secondary",
    gradient: "bg-gradient-to-br from-brand-primary to-amber-50",
  };

  const paddingClasses = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-24 md:py-32",
  };

  return (
    <section
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} w-full ${className}`}
    >
      {children}
    </section>
  );
}
