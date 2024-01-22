'use client';

import { cn } from '@/lib/utils';
import { HTMLMotionProps, motion, useAnimation, useInView } from 'framer-motion';

import { useEffect, useRef } from 'react';

interface RevealInViewProps extends HTMLMotionProps<'div'> {
  delay?: number;
}

export default function RevealInView({ children, className, delay = 0.25 }: RevealInViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <div ref={ref} className={cn('w-100', className)}>
      <motion.div
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 75 },
        }}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
