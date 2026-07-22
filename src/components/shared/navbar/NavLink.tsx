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
            className={`relative py-2 text-[12px] font-medium tracking-wide transition-colors duration-200 uppercase block md:inline-block
        ${isActive ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400"}
      `}
        >
            {label}
            {/* Active Line Indicator */}
            {isActive && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-[2px]  bg-emerald-400 rounded-full" />
            )}
        </Link>
    );
}