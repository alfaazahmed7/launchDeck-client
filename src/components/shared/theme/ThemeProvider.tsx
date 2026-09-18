"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * Global theme provider.
 *
 * - attribute="class"      -> toggles `.light` / `.dark` on <html>, which is what
 *                             globals.css keys its CSS custom properties off.
 * - defaultTheme="dark"    -> preserves the original LaunchDeck look for new visitors.
 * - enableSystem           -> follows OS changes when the stored theme is "system".
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
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}