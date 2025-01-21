import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ThematicTag } from "./ThematicTag";

interface ThematicRowProps {
  items: string[];
  direction: "left" | "right";
  speed?: number;
  delay?: number;
}

export function ThematicRow({ items, direction, speed = 50, delay = 0 }: ThematicRowProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const scrollerInner = scrollerInnerRef.current;

    if (!scroller || !scrollerInner) return;

    // Clone items inside scrollerInner for the scrolling effect
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerInner.appendChild(duplicatedItem);
    });

    const scrollSpeed = direction === "left" ? -speed : speed;
    let offset = 0;
    let paused = false;

    // Animation function for smooth scrolling
    const animate = () => {
      if (!scrollerInner || paused) return;
      offset = (offset + 0.5) % scrollerInner.offsetWidth;
      scrollerInner.style.transform = `translateX(${direction === "left" ? -offset : offset}px)`;
      requestAnimationFrame(animate);
    };

    // Add pause on hover
    const handleMouseEnter = () => {
      paused = true;
    };

    const handleMouseLeave = () => {
      paused = false;
      requestAnimationFrame(animate);
    };

    // Add event listeners for mouse hover pause functionality
    scroller.addEventListener("mouseenter", handleMouseEnter);
    scroller.addEventListener("mouseleave", handleMouseLeave);

    // Start the animation after the delay
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);

    // Cleanup event listeners and animation
    return () => {
      scroller.removeEventListener("mouseenter", handleMouseEnter);
      scroller.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [direction, speed, delay]); // Dependency array to re-run effect if these change

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      ref={scrollerRef}
      className="group relative flex max-w-full overflow-hidden py-4"
    >
      <div
        ref={scrollerInnerRef}
        className="flex flex-nowrap gap-4 [--gap:1rem]"
      >
        {items.map((item, idx) => (
          <ThematicTag key={`${item}-${idx}`} title={item} />
        ))}
      </div>
    </motion.div>
  );
}
