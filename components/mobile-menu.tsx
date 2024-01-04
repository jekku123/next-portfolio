import { MenuItem } from '@/lib/zod/menu';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

import { useState } from 'react';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.05,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

interface MobileMenuProps {
  className?: string;
  menu: MenuItem[];
}

export function MobileMenu({ className, menu }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <button className="z-50" aria-label="menu-toggle" onClick={() => setOpen((prev) => !prev)}>
        <svg width="23" height="23" viewBox="0 0 23 23">
          <motion.path
            strokeWidth="3"
            stroke="hsl(180, 100%, 98%)"
            strokeLinecap="round"
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' },
            }}
            animate={open ? 'open' : 'closed'}
          />
          <motion.path
            strokeWidth="3"
            stroke="hsl(180, 100%, 98%)"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            animate={open ? 'open' : 'closed'}
          />
          <motion.path
            strokeWidth="3"
            stroke="hsl(180, 100%, 98%)"
            strokeLinecap="round"
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' },
            }}
            animate={open ? 'open' : 'closed'}
          />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial="closed"
            animate={open ? 'open' : 'closed'}
            exit="closed"
            transition={{ duration: 0.5 }}
            variants={{
              open: { opacity: 1, scale: 1 },
              closed: { opacity: 0, scale: 1 },
            }}
            className="absolute top-0 left-0 z-40 w-full h-screen bg-background"
          >
            <motion.div
              className="flex flex-col items-center justify-center w-full h-full gap-5 "
              variants={variants}
            >
              {menu.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col items-center gap-4"
                  onClick={() => setOpen(false)}
                >
                  <motion.div
                    className="text-3xl hover:text-primary-accent"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href={item.href}>{item.text}</Link>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
