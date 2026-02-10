import type { Metadata } from "next";
import { Open_Sans, Poppins, JetBrains_Mono } from "next/font/google"; // Import standard fonts
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import FluidCursor from "@/components/FluidCursor";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zaheer Khan | Senior SDE",
  description: "Senior Software Development Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${openSans.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased bg-slate-950 text-white overflow-x-hidden`}

      >
        <FluidCursor />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
