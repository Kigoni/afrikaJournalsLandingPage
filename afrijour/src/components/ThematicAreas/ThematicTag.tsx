import { cn } from "../lib/utils";
import { motion } from "framer-motion";

interface ThematicTagProps {
  title: string;
  className?: string;
}

export function ThematicTag({ title, className }: ThematicTagProps) {
  return (
    <motion.div
      layout
      className={cn(
        "relative group overflow-hidden rounded-full",
        "bg-gradient-to-r from-teal-500/90 to-cyan-500/90",
        "transition-all duration-300 ease-out",
        "shadow-sm hover:shadow-md hover:shadow-teal-500/20",
        "px-4 py-1.5",
        className
      )}
      style={{ width: 'fit-content' }}
    >
      <span className="relative block whitespace-nowrap text-center text-sm font-medium text-white">
        {title}
      </span>
    </motion.div>
  );
}