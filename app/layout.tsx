// layout.tsx
import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sina Amareh | Portfolio",
  description: "Professional portfolio and blog by Sina Amareh",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">{children}</body>
    </html>
  );
}
