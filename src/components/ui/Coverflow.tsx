import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CoverflowProps<T> {
  items: T[];
  keyOf: (item: T) => string;
  render: (item: T) => ReactNode;
  stageClassName: string;
  cardClassName?: string;
  shiftVw?: number;
}

/**
 * Mobile carousel: current card centered, neighbours peeking smaller on the
 * sides, arrow buttons, dots, and drag-to-swipe.
 */
export function Coverflow<T>({
  items,
  keyOf,
  render,
  stageClassName,
  cardClassName = "w-[62vw]",
  shiftVw = 60,
}: CoverflowProps<T>) {
  const [idx, setIdx] = useState(0);
  const startX = useRef<number | null>(null);
  const n = items.length;
  const prev = () => setIdx((i) => (i + n - 1) % n);
  const next = () => setIdx((i) => (i + 1) % n);

  return (
    <div>
      <div
        className={`relative overflow-hidden ${stageClassName}`}
        style={{ touchAction: "pan-y" }}
        onPointerDown={(e) => {
          startX.current = e.clientX;
        }}
        onPointerMove={(e) => {
          if (startX.current === null) return;
          const dx = e.clientX - startX.current;
          if (dx < -45) {
            startX.current = null;
            next();
          } else if (dx > 45) {
            startX.current = null;
            prev();
          }
        }}
        onPointerUp={() => {
          startX.current = null;
        }}
        onPointerCancel={() => {
          startX.current = null;
        }}
      >
        {items.map((item, i) => {
          const offset = (i - idx + n) % n;
          let pos: number | null = null;
          if (offset === 0) pos = 0;
          else if (offset === 1) pos = 1;
          else if (offset === n - 1) pos = -1;
          if (pos === null) return null;
          return (
            <motion.div
              key={keyOf(item)}
              className={`absolute left-1/2 top-0 ${cardClassName}`}
              initial={false}
              animate={{
                x: `calc(-50% + ${pos * shiftVw}vw)`,
                scale: pos === 0 ? 1 : 0.82,
                opacity: pos === 0 ? 1 : 0.4,
              }}
              style={{ zIndex: pos === 0 ? 2 : 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              {render(item)}
            </motion.div>
          );
        })}
      </div>
      <div className="mt-4 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={prev}
          aria-label="Précédent"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold"
        >
          ←
        </button>
        <div className="flex items-center gap-2">
          {items.map((item, i) => (
            <button
              key={keyOf(item)}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Élément ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                idx === i ? "bg-gold" : "bg-cream/20"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Suivant"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold"
        >
          →
        </button>
      </div>
    </div>
  );
}
