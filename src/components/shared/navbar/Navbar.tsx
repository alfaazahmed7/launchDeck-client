"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import toast from "react-hot-toast";
import ThemeToggle from "@/components/shared/theme/ThemeToggle";
import { useTheme } from "next-themes";
import {
    DesktopActionsSkeleton,
    MobileActionsSkeleton,
    NavbarLoadingStatus,
} from "./NavbarSkeleton";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { resolvedTheme } = useTheme();
    const isLight = resolvedTheme === "light";

    // User session
    const userData = authClient.useSession();
    const user = userData.data?.user;
    const isPending = userData.isPending;

    // Sign Out
    const handleSignOut = async () => {
        await authClient.signOut();
        toast.success('You have successfully sign out');
    }

    // Navigation links array.
    // Auth-only routes are only injected once the session resolves AND a user
    // exists. While the session is pending nothing extra is rendered, so the
    // link skeleton set always matches the real route set for that state.
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Explore Projects", href: "/projects" },
        { label: "About", href: "/about" },
        ...(user
            ? [
                  { label: "Add Project", href: "/add-project" },
                  { label: "Manage Projects", href: "/manage-projects" },
              ]
            : []),
        { label: "Contact", href: "/contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/85 backdrop-blur-md text-white shadow-[0_1px_0_0_color-mix(in_oklab,var(--color-slate-700)_6%,transparent),0_6px_18px_-10px_color-mix(in_oklab,var(--color-slate-900)_28%,transparent)] light:border-slate-200/70 light:bg-white/70 light:text-slate-800 light:shadow-[0_1px_0_0_color-mix(in_oklab,var(--color-slate-200)_40%,transparent),0_8px_22px_-12px_color-mix(in_oklab,var(--color-slate-800)_18%,transparent)]">
            {isPending && <NavbarLoadingStatus />}
            <div className="md:w-11/12 lg:w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">

                    {/* Left: Brand Logo */}
                    <div className="flex flex-shrink-0 items-center">
                        <Link href="/" className="group flex items-center space-x-1">
                            <span className="text-2xl font-black tracking-wider text-white transition-colors duration-300 group-hover:text-emerald-400">
                                Launch
                                <span className="relative inline-block text-emerald-400 group-hover:text-white">
                                    Deck
                                    <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-emerald-400 transition-colors duration-300 group-hover:bg-white"></span>
                                </span>
                            </span>
                        </Link>
                    </div>

                    {/* Center/Right: Desktop Navigation Links */}
                    <div className="hidden xl:flex md:items-center md:space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                label={link.label}
                            />
                        ))}
                    </div>

                    {/* Far Right: Desktop Actions & Auth — always exactly 3 items
                        (ThemeToggle + auth block for the resolved session state) */}
                    <div className="hidden xl:flex md:items-center md:space-x-6">
                        <ThemeToggle />
                        {isPending ? (
                            /* Placeholder reserves the signed-in footprint */
                            <DesktopActionsSkeleton />
                        ) : user ? (
                            <div className="flex items-center gap-4">
                                {/* User Avatar with premium Emerald Ring highlight instead of generic neutral styles */}
                                <div className="flex shrink-0">
                                    <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-emerald-500/20 bg-slate-900 border border-slate-800">
                                        {user.image ? (
                                            <Image
                                                src={user?.image}
                                                alt={user?.name ?? "User avatar"}
                                                width={36}
                                                height={36}
                                                className="object-cover h-full w-full"
                                                referrerPolicy="no-referrer"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center font-bold font-mono text-xs text-emerald-400">
                                                {user.name?.charAt(0).toUpperCase() ?? "U"}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Re-styled Sign Out Button matching the dark, border-accented aesthetic of details actions */}
                                <button
                                    onClick={handleSignOut}
                                    className="rounded-xl bg-slate-950 border border-slate-800 px-4 py-2 text-xs font-bold text-slate-300 backdrop-blur-sm transition-all duration-200 hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400 cursor-pointer"
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            /* Unauthenticated action buttons matching your layout button classes perfectly */
                            <div className="flex items-center gap-4">
                                <Link
                                    href="/login"
                                    className="text-xs font-bold tracking-wide text-slate-400 transition-colors duration-200 hover:text-emerald-400 uppercase"
                                >
                                    Log In
                                </Link>

                                <Link
                                    href="/register"
                                    className="rounded-xl bg-emerald-500 px-5 py-2.5 text-xs font-bold text-slate-950 transition-all duration-200 hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] uppercase"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button (Hamburger) */}
                    <div className="flex items-center gap-2 xl:hidden">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-800 hover:text-white focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer Menu */}
            <div
                className={`xl:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100 border-t border-slate-800" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                id="mobile-menu"
            >
                <div className="space-y-3 px-4 py-4 bg-slate-900">
                    {navLinks.map((link) => (
                        <div key={link.href} className="w-fit">
                            <NavLink
                                href={link.href}
                                label={link.label}
                                onClick={() => setIsOpen(false)}
                            />
                        </div>
                    ))}

                    <hr className="border-slate-800 my-4" />

                    {/* Mobile Auth Buttons — mirrors the desktop right cluster */}
                    <div className="space-y-2">
                        {isPending ? (
                            /* Placeholder reserves the signed-in footprint */
                            <MobileActionsSkeleton />
                        ) : user ? (
                            <div className="flex items-center gap-4">
                                {/* User Avatar with premium Emerald Ring highlight instead of generic neutral styles */}
                                <div className="flex shrink-0">
                                    <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-emerald-500/20 bg-slate-900 border border-slate-800">
                                        {user.image ? (
                                            <Image
                                                src={user.image}
                                                alt={user.name ?? "User avatar"}
                                                width={36}
                                                height={36}
                                                className="object-cover h-full w-full"
                                                referrerPolicy="no-referrer"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center font-bold font-mono text-xs text-emerald-400">
                                                {user.name?.charAt(0).toUpperCase() ?? "U"}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Re-styled Sign Out Button matching the dark, border-accented aesthetic of details actions */}
                                <button
                                    onClick={handleSignOut}
                                    className="rounded-xl bg-slate-950 border border-slate-800 px-4 py-2 text-xs font-bold text-slate-300 backdrop-blur-sm transition-all duration-200 hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400 cursor-pointer"
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            /* Unauthenticated action buttons matching your layout button classes perfectly */
                            <div className="flex items-center gap-4">
                                <Link
                                    href="/login"
                                    className="text-xs font-bold tracking-wide text-slate-400 transition-colors duration-200 hover:text-emerald-400 uppercase"
                                >
                                    Log In
                                </Link>

                                <Link
                                    href="/register"
                                    className="rounded-xl bg-emerald-500 px-5 py-2.5 text-xs font-bold text-slate-950 transition-all duration-200 hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] uppercase"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}