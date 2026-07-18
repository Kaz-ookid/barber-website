import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let x = -100;
    let y = -100;
    let ringX = -100;
    let ringY = -100;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor]");
      ring.classList.toggle("is-hover", Boolean(interactive));
    };

    const tick = () => {
      ringX += (x - ringX) * 0.16;
      ringY += (y - ringY) * 0.16;
      dot.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
      const half = ring.offsetWidth / 2;
      ring.style.transform = `translate(${ringX - half}px, ${ringY - half}px)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hidden md:block" aria-hidden>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  );
}
