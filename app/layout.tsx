import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Shreyansh Vishwakarma — Full-Stack Developer";
const siteDescription =
  "Full-stack developer building real-time TypeScript and Rust experiences with a focus on performance, security, and developer experience.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Shreyansh Vishwakarma",
  },
  description: siteDescription,
  keywords: [
    "Shreyansh Vishwakarma",
    "Full-stack developer",
    "TypeScript",
    "Rust",
    "Next.js",
    "Real-time applications",
    "Socket.io",
    "Convex",
    "WebAssembly",
  ],
  authors: [{ name: "Shreyansh Vishwakarma", url: "https://www.linkedin.com/in/shreyansh-vishwakarma-63a853296/" }],
  creator: "Shreyansh Vishwakarma",
  publisher: "Shreyansh Vishwakarma",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Shreyansh Vishwakarma Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
