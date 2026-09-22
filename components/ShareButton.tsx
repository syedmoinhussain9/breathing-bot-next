"use client";

import { Share2, Check } from "lucide-react";
import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    // Only run on the client
    const shareData = {
      title: "MuTimer",
      text: "Free breathing exercises, panic relief, focus timers, and sleep soundscapes.",
      url: window.location.origin, 
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User closed the share sheet without sharing, fail silently
      }
    } else {
      // Fallback for browsers that do not support Web Share API
      navigator.clipboard.writeText(window.location.origin);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none underline underline-offset-2"
      title="Share MuTimer"
    >
      {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
      <span>{copied ? "Link Copied!" : "Share App"}</span>
    </button>
  );
}