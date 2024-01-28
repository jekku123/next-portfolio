"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowUpIcon } from "lucide-react";
import { useState } from "react";

export function ScrollTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial="closed"
          animate={visible ? "open" : "closed"}
          exit="closed"
          transition={{ duration: 0.5 }}
          variants={{
            open: { opacity: 1, scale: 1 },
            closed: { opacity: 0, scale: 0 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-5 right-4 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl"
        >
          <ArrowUpIcon size="30" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
