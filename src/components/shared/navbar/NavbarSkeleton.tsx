"use client";

import React from "react";

/**
 * Placeholder blocks used while the session request resolves.
 *
 * Every block mirrors the exact rendered footprint of the element it stands in
 * for (avatar 36x36, "Sign Out" button, "Log In" text link and "Register"
 * button) so the navbar keeps the same width, height and alignment before and
 * after hydration. That removes the layout shake the old spinner caused.
 *
 * IMPORTANT: each skeleton renders EXACTLY the same number of items as the
 * real cluster it replaces. The ThemeToggle is always rendered next to them,
 * so a skeleton block below always contributes 2 items → 3 items on the far
 * right in every state (pending, signed in, guest).
 */

/**
 * Desktop signed-in actions: avatar + "Sign Out" button.
 * Pairs with the always-rendered ThemeToggle to make the 3-item right cluster.
 */
export function DesktopActionsSkeleton() {
    return (
        <div
            className="flex animate-pulse items-center gap-4"
            aria-hidden="true"
        >
            {/* Avatar frame: h-9 w-9 rounded-full */}
            <div className="h-9 w-9 shrink-0 rounded-full bg-slate-800 ring-2 ring-slate-800/40 light:bg-slate-200 light:ring-slate-200/60" />

            {/* "Sign Out" button: px-4 py-2 text-xs font-bold → h-8 w-[86px] */}
            <div className="h-8 w-[86px] rounded-xl border border-slate-800 bg-slate-800/60 light:border-slate-200 light:bg-slate-200" />
        </div>
    );
}

/**
 * Desktop guest actions: "Log In" link + "Register" button.
 * Pairs with the always-rendered ThemeToggle to make the 3-item right cluster.
 */
export function DesktopGuestActionsSkeleton() {
    return (
        <div
            className="flex animate-pulse items-center gap-4"
            aria-hidden="true"
        >
            {/* "Log In" text link: text-xs font-bold tracking-wide uppercase */}
            <div className="h-4 w-[42px] rounded bg-slate-800 light:bg-slate-200" />

            {/* "Register" button: px-5 py-2.5 text-xs font-bold → h-9 w-[96px] */}
            <div className="h-9 w-[96px] rounded-xl bg-slate-800 light:bg-slate-200" />
        </div>
    );
}

/** Mobile drawer signed-in row: avatar + "Sign Out" pair. */
export function MobileActionsSkeleton() {
    return (
        <div
            className="flex animate-pulse items-center gap-4"
            aria-hidden="true"
        >
            <div className="h-9 w-9 shrink-0 rounded-full bg-slate-800 ring-2 ring-slate-800/40 light:bg-slate-200 light:ring-slate-200/60" />
            <div className="h-8 w-[86px] rounded-xl border border-slate-800 bg-slate-800/60 light:border-slate-200 light:bg-slate-200" />
        </div>
    );
}

/** Mobile drawer guest row: "Log In" + "Register" pair. */
export function MobileGuestActionsSkeleton() {
    return (
        <div
            className="flex animate-pulse items-center gap-4"
            aria-hidden="true"
        >
            <div className="ml-1 h-4 w-[42px] rounded bg-slate-800 light:bg-slate-200" />
            <div className="h-9 w-[96px] rounded-xl bg-slate-800 light:bg-slate-200" />
        </div>
    );
}

interface NavLinkSkeletonProps {
    /** Approximate rendered width of the link label it replaces. */
    width: number;
}

/** Nav link placeholder reserving the same vertical rhythm as NavLink. */
export function NavLinkSkeleton({ width }: NavLinkSkeletonProps) {
    return (
        <div
            className="py-2"
            style={{ width }}
            aria-hidden="true"
        >
            <div className="h-3 w-full animate-pulse rounded bg-slate-800 light:bg-slate-200" />
        </div>
    );
}

/** Always-visible screen-reader status so pending state stays announced. */
export function NavbarLoadingStatus() {
    return <span className="sr-only">Loading account details</span>;
}