"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * Global theme provider.
 *
 * - attribute="class"      -> toggles `.light` / `.dark` on <html>, which is what
 *                             globals.css keys its CSS custom properties off.
 * - defaultTheme="light"   -> light mode is the default for every new visitor
 *                             (globals.css treats `.light` as the explicit
 *                             palette and `:root:not(.light)` as the fallback).
 * - enableSystem={false}   -> the OS preference never overrides the light
 *                             default on a first visit; the user's explicit
 *                             choice from the toggle is still persisted.
 * - disableTransitionOnChange -> suppresses the CSS transition flash on switch.
 *
 * Wrapped in a Client Component so the root layout can stay a Server Component.
 */
export default function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}