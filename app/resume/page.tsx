"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Lock, Mail, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import AnimatedContent from "@/components/AnimatedContent";

export default function ResumePage() {
  const [copied, setCopied] = useState(false);
  const email = "shreyanshvishwakarma@outlook.in"; // Replace with your actual email

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
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
        <div className="glass max-w-md w-full text-center space-y-8 p-8 sm:p-10 rounded-2xl relative z-10 transition-all duration-300 hover:shadow-lg">
          <div className="flex justify-center">
            <div className="p-5 bg-foreground/5 rounded-full border border-foreground/10 shadow-inner">
              <Lock className="w-10 h-10 text-foreground/70 drop-shadow-sm" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">Resume Protected</h1>
            <p className="text-muted-foreground leading-relaxed text-base">
              For privacy reasons, my complete resume is not publicly visible. I'd be happy to share my full work history and qualifications directly with you.
            </p>
          </div>

          <div className="w-full pt-2">
            <Button 
              onClick={handleCopy}
              size="lg" 
              className={`w-full text-base flex items-center justify-center gap-2 h-14 font-medium transition-all active:scale-[0.98] ${copied ? "bg-green-500 hover:bg-green-600 text-white border-transparent" : ""}`}
            >
              {copied ? <Check className="w-5 h-5" /> : <Mail className="w-5 h-5" />}
              {copied ? "Email Copied!" : "Copy Email"}
            </Button>
          </div>
          
          <div className="pt-4">
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
