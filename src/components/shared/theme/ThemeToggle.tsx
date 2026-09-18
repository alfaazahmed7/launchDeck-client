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
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full backdrop-blur-md transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ld-input-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ld-background)] ${isDark
          ? // 🌙 Dark Mode
          "bg-transparent border border-white/10 text-zinc-300 hover:bg-violet-500/20 hover:border-violet-400/40 hover:text-violet-300"
          : // ☀️ Light Mode
          "bg-transparent border border-slate-200 text-slate-600 hover:bg-violet-100 hover:border-violet-300 hover:text-violet-700"
        } ${className}`}
    >
      <Sun className="ld-theme-sun" size={18} strokeWidth={2.2} aria-hidden="true" />
      <Moon className="ld-theme-moon" size={18} strokeWidth={2.2} aria-hidden="true" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}