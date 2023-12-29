'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const tabs = [
  { id: 1, label: 'Home', href: '/' },
  { id: 2, label: 'Projects', href: '/projects' },
  { id: 3, label: 'About', href: '/about' },
  { id: 4, label: 'Contact', href: '/contact' },
];

export function NavTabs({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const pathname = usePathname();

  return (
    <div className={cn('flex space-x-4 items-center', className)}>
      {tabs.map((tab) => (
        <Link
          href={tab.href}
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            'relative rounded-full px-3 py-1.5 text-sm text-foreground font-medium outline-sky-400 transition focus-visible:outline-2',
            activeTab === tab.id ? '' : 'hover:underline'
          )}
          style={{
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          {pathname === tab.href && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-primary mix-blend-color-burn dark:mix-blend-difference"
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

// mix-blend-color-burn
