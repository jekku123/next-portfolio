"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const tabs = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About", href: "/about" },
  { id: 3, label: "Projects", href: "/projects" },
  { id: 4, label: "Contact", href: "/contact" },
];

interface NavTabsProps {
  className?: string;
  // menu: MenuItem[];
}

export function NavTabs({ className }: NavTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const pathname = usePathname();
  const pathOrigin = pathname.split("/")[1];

  return (
    <div className={cn("flex items-center space-x-4", className)}>
      {tabs.map((tab) => (
        <Link
          href={tab.href}
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "text-md relative px-3 py-1.5 text-foreground transition focus-visible:outline-2",
          )}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {`/${pathOrigin}` === tab.href && (
            // <motion.span
            //   layoutId="bubble"
            //   className="absolute inset-0 z-10 bg-secondary-foreground mix-blend-color-burn dark:mix-blend-difference"
            //   style={{ borderRadius: 9999 }}
            //   transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            // />
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 rounded-xl border-b-2 border-solid border-primary"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </Link>
      ))}
    </div>
  );
}

// 'relative rounded-full px-3 py-1.5 text-sm text-foreground outline-sky-400 transition focus-visible:outline-2',
