import { motion } from "framer-motion";
import { ThematicTag } from "./ThematicTag";

interface ThematicGridProps {
  items: string[];
}

export function ThematicGrid({ items }: ThematicGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item, index) => (
        <motion.div
          key={`${item}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          <ThematicTag title={item} />
        </motion.div>
      ))}
    </div>
  );
}