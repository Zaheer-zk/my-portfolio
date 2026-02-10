import type { Metadata } from "next";
import { Open_Sans } from "next/font/google"; // Import Open Sans
import "./globals.css";
import FluidCursor from "@/components/FluidCursor";

const openSans = Open_Sans({
  subsets: ["latin"],
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
        className={`${openSans.className} italic antialiased bg-slate-950 text-white`}
      >
        <FluidCursor />
        {children}
      </body>
    </html>
  );
}
