import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen } from "lucide-react";
import type { ThematicAreaType } from "./types";
import { ThematicTag } from "./ThematicTag";

const DISPLAY_COUNT = 5;
const ROTATION_INTERVAL = 3000;

export function ThematicAreas() {
  const [thematicAreas, setThematicAreas] = useState<string[]>([]);
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://aphrc.site/journal_api/api/thematic/")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch thematic areas");
        return res.json();
      })
      .then((data: ThematicAreaType[]) => {
        const uniqueAreas = Array.from(
          new Set(data.map((area) => area.thematic_area.trim()))
        ).filter((area) => area.length > 0);
        setThematicAreas(uniqueAreas);
        setVisibleIndices(Array.from({ length: DISPLAY_COUNT }, (_, i) => i));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching thematic areas:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (thematicAreas.length === 0) return;

    const interval = setInterval(() => {
      setVisibleIndices((current) => {
        const newIndices = current.map(
          (index) => (index + DISPLAY_COUNT) % thematicAreas.length
        );
        return newIndices;
      });
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, [thematicAreas]);

  if (loading) {
    return (
      <div className="flex h-12 items-center justify-center ">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-teal-500 border-t-transparent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-12 items-center justify-center text-sm text-red-600">
        Failed to load thematic areas
      </div>
    );
  }

  return (
    <div className="relative bg-[#ccd6e8] py-2 z-10">
      <div className="flex items-center justify-center gap-2 text-sm font-medium text-teal-700 ">
        <BookOpen className="h-4 w-4" />
        <span>Research Areas</span>
      </div>
      
      <div className="relative mt-2 flex h-10 items-center justify-center overflow-hidden px-4 ">
        <AnimatePresence mode="popLayout">
          {visibleIndices.map((index) => (
            <motion.div
              key={`${index}-${thematicAreas[index]}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                opacity: { duration: 0.3 },
                y: { type: "spring", stiffness: 300, damping: 30 }
              }}
              className="mx-1.5"
            >
              <ThematicTag title={thematicAreas[index]} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}