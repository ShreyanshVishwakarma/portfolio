import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Name — Frontend Engineer",
  description:
    "Frontend engineer crafting resilient, product-focused web experiences for ambitious teams.",
  openGraph: {
    title: "Your Name — Frontend Engineer",
    description:
      "Frontend engineer crafting resilient, product-focused web experiences for ambitious teams.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — Frontend Engineer",
    description:
      "Frontend engineer crafting resilient, product-focused web experiences for ambitious teams.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
