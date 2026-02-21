import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title:
    "Nirmalabs - Digital Agency Labs specializing in Digital Marketing, Web Design, AI Engineering, and 3D Modeling. ",
  description:
    "A premium digital agency specializing in Digital Marketing, Web Design, AI Engineering, and 3D Modeling.",
};

// add favicon

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={`${outfit.variable} antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
