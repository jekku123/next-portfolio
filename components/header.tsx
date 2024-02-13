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

export default function Header({ menu }: HeaderProps) {
  return (
    <header className="top-0 z-50 w-full flex-shrink-0 backdrop-blur-lg md:sticky">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <MobileMenu menu={menu} className="flex sm:hidden" />
        <Link href="/" className="z-50">
          <Cat />
        </Link>
        <NavTabs menu={menu} className="hidden sm:flex" />
        <ModeToggle />
      </nav>
    </header>
  );
}
