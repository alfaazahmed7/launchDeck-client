"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href: string;
    label: string;
    onClick?: () => void;
}

export default function NavLink({ href, label, onClick }: NavLinkProps) {
    const pathname = usePathname();
    // Check if the current route matches the link href
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            onClick={onClick}
            className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-200 uppercase block md:inline-block
        ${isActive ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400"}
      `}
        >
            {label}
            {/* Active Line Indicator */}
            {isActive && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-emerald-400 transition-all duration-300" />
            )}
        </Link>
    );
}