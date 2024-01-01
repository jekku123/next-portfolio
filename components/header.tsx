'use client';

import { MobileMenu } from './mobile-menu';
import { ModeToggle } from './mode-toggle';
import { NavTabs } from './nav-tabs';

export default function Header() {
  return (
    <header className="flex-shrink-0 w-full">
      <nav className="flex flex-row items-center justify-between max-w-6xl px-6 py-4 mx-auto">
        <MobileMenu className="flex md:hidden" />
        <h1 className="text-2xl font-bold">LOGO</h1>
        <NavTabs className="hidden md:flex" />
        <ModeToggle />
      </nav>
    </header>
  );
}
