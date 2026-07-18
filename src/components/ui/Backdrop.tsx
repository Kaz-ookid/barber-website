import { motion, useScroll, useTransform } from "framer-motion";

interface SpotProps {
  top: string;
  side: "left" | "right";
  offset: string;
  size: string;
  alpha: number;
  speed: number;
}

/**
 * One soft light pool, anchored in the document (scrolls with the page)
 * with a slight parallax drift. Full-resolution CSS radial gradient with
 * eased stops: no visible edge, no clumping.
 */
function Spot({ top, side, offset, size, alpha, speed }: SpotProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (v) => v * speed);
  const c = (a: number) => `rgba(205,170,120,${a})`;
  return (
    <motion.div
      aria-hidden
      className="absolute rounded-full"
      style={{
        y,
        top,
        [side]: offset,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${c(alpha)} 0%, ${c(alpha * 0.55)} 30%, ${c(
          alpha * 0.22,
        )} 55%, ${c(alpha * 0.07)} 75%, transparent 88%)`,
      }}
    />
  );
}

const spots: SpotProps[] = [
  { top: "-6%", side: "left", offset: "-14rem", size: "64rem", alpha: 0.11, speed: 0.05 },
  { top: "1%", side: "right", offset: "-16rem", size: "58rem", alpha: 0.09, speed: 0.09 },
  { top: "21%", side: "left", offset: "-18rem", size: "60rem", alpha: 0.055, speed: 0.04 },
  { top: "41%", side: "right", offset: "-14rem", size: "56rem", alpha: 0.05, speed: 0.08 },
  { top: "61%", side: "left", offset: "-12rem", size: "52rem", alpha: 0.045, speed: 0.05 },
  { top: "79%", side: "right", offset: "4rem", size: "46rem", alpha: 0.05, speed: 0.07 },
];

/**
 * Page-anchored ambient background: warm pools of light you scroll past,
 * and a long vertical fade that settles the page into deeper dark after
 * the hero.
 */
export function Backdrop() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {spots.map((spot, i) => (
        <Spot key={i} {...spot} />
      ))}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(6,6,8,0) 0svh, rgba(6,6,8,0) 85svh, rgba(6,6,8,0.4) 170svh, rgba(6,6,8,0.5) 100%)",
        }}
      />
    </div>
  );
}
