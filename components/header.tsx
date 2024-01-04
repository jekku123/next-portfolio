'use client';

import { MenuItem } from '@/lib/zod/menu';
import { MobileMenu } from './mobile-menu';
import { ModeToggle } from './mode-toggle';
import { NavTabs } from './nav-tabs';

interface HeaderProps {
  menu: MenuItem[];
}

export default function Header({ menu }: HeaderProps) {
  return (
    <header className="flex-shrink-0 w-full">
      <nav className="flex flex-row items-center justify-between max-w-6xl px-6 py-4 mx-auto">
        <MobileMenu menu={menu} className="flex md:hidden" />
        <h1 className="text-2xl font-bold">LOGO</h1>
        <NavTabs menu={menu} className="hidden md:flex" />
        <ModeToggle />
      </nav>
    </header>
  );
}
