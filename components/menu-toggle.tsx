import { motion } from 'framer-motion';

interface MenuToggleProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuToggleButton({ open, setOpen }: MenuToggleProps) {
  return (
    <button className="z-50" onClick={() => setOpen((prev) => !prev)}>
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
  );
}
