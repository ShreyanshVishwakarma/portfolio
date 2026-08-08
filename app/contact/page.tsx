"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  ArrowLeft,
  Check,
  Send,
  Linkedin,
  Twitter,
  Globe,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import AnimatedContent from "@/components/AnimatedContent";

const primaryEmail = "shreyanshvish004@gmail.com";

const contactItems = [
  {
    label: "Gmail",
    value: "shreyanshvish004@gmail.com",
    href: "mailto:shreyanshvish004@gmail.com",
    icon: Mail,
  },
  {
    label: "Alternate Email",
    value: "shreyanshvishwakarma@outlook.in",
    href: "mailto:shreyanshvishwakarma@outlook.in",
    icon: Send,
  },
  {
    label: "LinkedIn",
    value: "in/shreyansh-vishwakarma",
    href: "https://www.linkedin.com/in/shreyansh-vishwakarma-63a853296/",
    icon: Linkedin,
  },
  {
    label: "X (Twitter)",
    value: "@shreyansh_0x0_",
    href: "https://x.com/shreyansh_0x0_",
    icon: Twitter,
  },
  {
    label: "Website",
    value: "shreyansh.is-a.dev",
    href: "https://shreyansh.is-a.dev/",
    icon: Globe,
  },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(primaryEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden backdrop-blur-3xl">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-background to-background" />

      <AnimatedContent
        distance={40}
        direction="vertical"
        initialOpacity={0}
        animateOpacity
        threshold={0.1}
      >
        <div className="glass max-w-lg w-full space-y-8 p-8 sm:p-10 rounded-2xl relative z-10 transition-all duration-300 hover:shadow-lg">
          <div className="flex justify-center">
            <div className="p-5 bg-foreground/5 rounded-full border border-foreground/10 shadow-inner">
              <Mail className="w-10 h-10 text-blue-500 drop-shadow-sm" />
            </div>
          </div>

          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tight">Let&apos;s Connect</h1>
            <p className="text-muted-foreground leading-relaxed text-base">
              Open to internships, full-time roles, and interesting projects.
              Pick whichever channel works best for you.
            </p>
          </div>

          <div className="w-full pt-2">
            <Button
              onClick={handleCopy}
              size="lg"
              className={`w-full text-base flex items-center justify-center gap-2 h-14 font-medium transition-all active:scale-[0.98] ${copied ? "bg-green-500 hover:bg-green-600 text-white border-transparent" : ""}`}
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  Email Copied!
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  Copy Email
                </>
              )}
            </Button>
          </div>

          <div className="space-y-3">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center justify-between p-3.5 rounded-xl border bg-background/40 hover:bg-background/80 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {item.value}
                    </p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground/50 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
}