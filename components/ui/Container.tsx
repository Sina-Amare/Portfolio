import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "screen";
}

export default function Container({ children, className = "", maxWidth = "xl" }: ContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    screen: "max-w-full",
  };

  return (
    <div
      className={`mx-auto ${maxWidthClasses[maxWidth]} px-6 md:px-8 grid grid-cols-12 gap-x-8 w-full ${className}`}
    >
      {children}
    </div>
  );
}
