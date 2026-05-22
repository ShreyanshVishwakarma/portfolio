"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function Pre({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  const [isCopied, setIsCopied] = useState(false);

  // Extract text content from the nested <code> element
  let text = "";
  if (children && typeof children === "object" && "props" in children) {
    const codeProps = (children as React.ReactElement<{children?: React.ReactNode}>).props;
    if (codeProps && codeProps.children) {
      // It might be a string or an array of strings depending on MDX parsing
      text = Array.isArray(codeProps.children) 
        ? codeProps.children.join("") 
        : typeof codeProps.children === "string" 
          ? codeProps.children 
          : "";
    }
  }

  const copyToClipboard = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative group my-6">
      <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={copyToClipboard}
          className="p-2 bg-background/50 hover:bg-background/80 rounded-md border text-muted-foreground backdrop-blur-sm transition-colors"
          aria-label="Copy code"
        >
          {isCopied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <pre
        className="bg-[#1e1e2e] text-[#a6accd] p-4 rounded-lg overflow-x-auto border"
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}
