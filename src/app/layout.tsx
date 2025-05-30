import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fabwell Industries | Precision Steel Solutions",
  description: "Fabwell Industries is a full-service metal fabrication company delivering high-quality, custom steel solutions across commercial, industrial, and residential sectors in British Columbia.",
  icons: {
    icon: "/favicon.jpg", // Using the .jpg as requested
    // It's good practice to also provide other sizes and an apple-touch-icon
    // apple: "/apple-touch-icon.png",
    // shortcut: "/favicon-16x16.png", // Example
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
