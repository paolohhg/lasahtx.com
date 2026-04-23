import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lasa HTX",
  description:
    "Modern Asian hospitality rooted in flavor and experience. Catering. Pop-Ups. Meal Prep. Built for Houston. Inspired by Asia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", inter.variable, bebasNeue.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
