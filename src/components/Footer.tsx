"use client";

import React from "react";
import TrustStrip from "./helper-ui/TrustStrip";

export function Footer() {
  return (
    <footer className="w-full flex flex-col gap-6 pt-8 pb-8 select-none border-t border-border/40">
      <TrustStrip />

      <div className="pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
        <p>© {new Date().getFullYear()} Md. Kamrul Hasan. All rights reserved.</p>
        <p className="font-mono">Built with Next.js 15, TypeScript &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;
