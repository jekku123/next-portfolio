"use client";

import { MenuItem } from "@/lib/zod/menu";
import { Cat } from "lucide-react";
import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { ModeToggle } from "./mode-toggle";
import { NavTabs } from "./nav-tabs";

interface HeaderProps {
  menu: MenuItem[];
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full flex-shrink-0 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <MobileMenu className="flex sm:hidden" />
        <Link href="/" className="z-50">
          <div className="rounded-full p-3 transition-colors duration-300 hover:bg-accent">
            <Cat />
          </div>
        </Link>
        <NavTabs className="hidden sm:flex" />
        <ModeToggle />
      </nav>
    </header>
  );
}
