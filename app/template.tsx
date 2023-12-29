'use client';
import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0, x: '100%', y: 0, scale: 0 },
  animate: { opacity: 1, x: 0, y: 0, scale: 1 },
  exit: { opacity: 0, x: '-100%', y: 0, scale: 0 },
};

const tabs = [
  { id: 0, label: 'Home', href: '/' },
  { id: 1, label: 'Projects', href: '/projects' },
  { id: 2, label: 'Contact', href: '/contact' },
  { id: 3, label: 'About', href: '/about' },
];

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      className="max-w-4xl p-6 mx-auto"
      initial={{ opacity: 0, x: '100%', y: 0, scale: 0 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: '-100%', y: 0, scale: 0 }}
      transition={{ type: 'linear', duration: 0.5 }}
      key="page"
    >
      {children}
    </motion.main>
  );
}
