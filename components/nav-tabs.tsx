'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const tabs = [
  { id: 0, label: 'Home', href: '/' },
  // { id: 1, label: 'Services', href: '/services' },
  { id: 2, label: 'Portfolio', href: '/portfolio' },
  { id: 3, label: 'Contact', href: '/contact' },
  { id: 4, label: 'About', href: '/about' },
];

export function NavTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const pathname = usePathname();

  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <Link
          href={tab.href}
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? '' : 'hover:text-white/60'
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          {pathname === tab.href && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
