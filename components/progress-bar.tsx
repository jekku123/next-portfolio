"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Progress } from "./ui/progress";

export default function ProgressBar({ value }: { value: number }) {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= value ? value : prevProgress + 1,
      );
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, [isInView, value]);

  return <Progress value={progress} ref={ref} />;
}
