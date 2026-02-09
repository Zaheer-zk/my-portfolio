import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FluidCursor from "@/components/FluidCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
        className={`${inter.variable} font-sans antialiased bg-slate-950 text-white`}
      >
        <FluidCursor />
        {children}
      </body>
    </html>
  );
}
