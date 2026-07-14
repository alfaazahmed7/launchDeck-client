"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import NavLink from "./NavLink";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Guest navigation links array
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Explore Projects", href: "/projects" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900 text-white shadow-md">
            <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
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
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                label={link.label}
                            />
                        ))}
                    </div>

                    {/* Far Right: Desktop Actions & Auth */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        <Link
                            href="/login"
                            className="text-sm font-semibold text-slate-300 transition-colors duration-200 hover:text-emerald-400"
                        >
                            LOG IN
                        </Link>

                        <Link
                            href="/register"
                            className="rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-bold text-slate-900 transition-all duration-200 hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                        >
                            REGISTER
                        </Link>
                    </div>

                    {/* Mobile Menu Button (Hamburger) */}
                    <div className="flex items-center md:hidden">
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
                className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100 border-t border-slate-800" : "max-h-0 opacity-0 overflow-hidden"
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

                    {/* Mobile Auth Buttons */}
                    <div className="space-y-2">
                        <Link
                            href="/login"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center rounded-md border border-slate-700 px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800"
                        >
                            Log In
                        </Link>
                        <Link
                            href="/register"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center rounded-md bg-emerald-500 px-3 py-2 text-base font-medium text-slate-900 hover:bg-emerald-400"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}