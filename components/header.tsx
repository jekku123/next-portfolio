'use client';

import { MenuItem } from '@/lib/zod/menu';
import { Cat } from 'lucide-react';
import Link from 'next/link';
import { MobileMenu } from './mobile-menu';
import { ModeToggle } from './mode-toggle';
import { NavTabs } from './nav-tabs';

interface HeaderProps {
  menu: MenuItem[];
}

export default function Header({ menu }: HeaderProps) {
  return (
    <header className="top-0 flex-shrink-0 w-full md:sticky bg-background z-50">
      <nav className="flex flex-row items-center justify-between max-w-6xl px-6 py-4 mx-auto">
        <MobileMenu menu={menu} className="flex md:hidden" />
        <Link href="/">
          <Cat />
        </Link>
        <NavTabs menu={menu} className="hidden md:flex" />
        <ModeToggle />
      </nav>
    </header>
  );
}
