"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const label = "Toggle light or dark theme";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-transparent text-zinc-300 transition-all duration-200 hover:border-violet-400/40 hover:bg-violet-500/20 hover:text-violet-300 ${className}`}
    >
      <Sun className="ld-theme-sun" size={18} strokeWidth={2.2} aria-hidden="true" />
      <Moon className="ld-theme-moon" size={18} strokeWidth={2.2} aria-hidden="true" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}