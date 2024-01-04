/* eslint-disable react-hooks/exhaustive-deps */
import { cn } from '@/lib/utils';
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface ScrollingNumberProps {
  initialValue: number;
  maxValue: number;
  className?: string;
}

export default function ScrollingNumber({
  initialValue,
  maxValue,
  className,
}: ScrollingNumberProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(initialValue);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, maxValue, {
        duration: 5,
      });

      return animation.stop;
    }
  }, [isInView]);

  return (
    <motion.span className={cn('text-4xl font-extrabold', className)} ref={ref}>
      {rounded}
    </motion.span>
  );
}
