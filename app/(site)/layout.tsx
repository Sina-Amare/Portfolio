import "../../styles/globals.css";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sina Amareh — Portfolio",
  description: "Professional AI Engineering Portfolio by Sina Amareh",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="bg-primary-background text-text-secondary antialiased min-h-screen flex flex-col relative overflow-x-hidden font-sans">
        <header>
          <Navigation />
        </header>

        <main className="flex-1 relative z-10">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
