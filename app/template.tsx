'use client';
import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0, x: '100%', y: 0, scale: 0 },
  animate: { opacity: 1, x: 0, y: 0, scale: 1 },
  exit: { opacity: 0, x: '-100%', y: 0, scale: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main {...variants} transition={{ type: 'linear', duration: 0.25 }} key="page">
      {children}
    </motion.main>
  );
}
