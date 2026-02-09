import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import FluidCursor from "@/components/FluidCursor";
import { Metadata } from "next";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zaheer Khan | Senior Software Engineer",
  description: "Portfolio of Zaheer Khan, a Senior Full Stack Developer specializing in enterprise-grade solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-sans antialiased`}
      >
        <FluidCursor />
        {children}
      </body>
    </html>
  );
}
