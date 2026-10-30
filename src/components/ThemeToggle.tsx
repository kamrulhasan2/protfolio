"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button className="size-9 rounded-full flex items-center justify-center bg-surface hover:bg-surface-hover border border-border transition-colors">
        <Sun className="size-4" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="size-9 rounded-full flex items-center justify-center bg-surface hover:bg-surface-hover border border-border transition-all duration-300 hover:scale-110 hover:shadow-md"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="size-4 text-yellow-400 transition-transform duration-300" />
      ) : (
        <Moon className="size-4 text-primary transition-transform duration-300" />
      )}
    </button>
  );
}
