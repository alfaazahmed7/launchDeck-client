"use client";

import { ReactLenis } from "lenis/react";
import type { LenisOptions } from "lenis";
import type { ReactNode } from "react";

/**
 * Global smooth-scroll provider (React Lenis).
 *
 * - `root`          -> creates ONE Lenis instance that drives the native
 *                      <html> scroll container for the whole app. Because the
 *                      instance lives in the root layout it survives App Router
 *                      client-side navigations, so no re-init glitches occur and
 *                      Next.js scroll restoration keeps working.
 * - `autoRaf`       -> Lenis owns the animation loop, no manual rAF needed.
 * - `smoothWheel`   -> smooths mouse wheel scrolling.
 * - `syncTouch`     -> smooths touch/trackpad scrolling on mobile too.
 * - `lerp: 0.1`     -> Lenis' default interpolation: responsive and natural,
 *                      without the slow "floaty" feel a low-`duration` easing
 *                      curve produces. `lerp` takes precedence over `duration`.
 * - `stopInertiaOnNavigate` -> kills wheel inertia when a <Link> is clicked so
 *                      a new route never scrolls straight past the top.
 * - `anchors`       -> restores smooth in-page anchor link scrolling.
 * - `autoToggle`    -> Lenis auto-stops while an overlay/modal locks the body.
 * - `allowNestedScroll` -> lets nested scroll containers (e.g. the gallery
 *                      thumbnail list) scroll natively.
 *
 * `respectReducedMotion` is left at its default (`true`), so users with
 * `prefers-reduced-motion: reduce` get instant, non-smoothed scrolling.
 */
const smoothScrollOptions: LenisOptions = {
  autoRaf: true,
  smoothWheel: true,
  syncTouch: true,
  syncTouchLerp: 0.1,
  lerp: 0.1,
  wheelMultiplier: 1,
  touchMultiplier: 1.2,
  stopInertiaOnNavigate: true,
  anchors: true,
  autoToggle: true,
  allowNestedScroll: true,
};

/**
 * Wrapped in a Client Component so the root layout can stay a Server Component.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ReactLenis root options={smoothScrollOptions}>
      {children}
    </ReactLenis>
  );
}