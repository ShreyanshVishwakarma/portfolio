import type { Metadata } from "next";
import { Inter, Geist_Mono, Playfair_Display, Caveat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Shreyansh Vishwakarma — Full-Stack Software Engineer";
const siteDescription =
  "I am a full-stack developer specializing in building high-performance backend systems with Rust and scalable, real-time web applications using TypeScript.";

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
        className={`${inter.variable} ${geistMono.variable} ${playfair.variable} ${caveat.variable} antialiased`}
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
