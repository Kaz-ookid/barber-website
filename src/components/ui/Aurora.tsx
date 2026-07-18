import { useEffect, useRef } from "react";

interface Blob {
  color: string;
  r: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  a: number;
  p: number;
}

const blobs: Blob[] = [
  { color: "207,161,95", r: 0.5, x: 0.12, y: 0.18, dx: 0.1, dy: 0.08, a: 0.13, p: 0 },
  { color: "138,90,43", r: 0.62, x: 0.88, y: 0.32, dx: 0.09, dy: 0.12, a: 0.12, p: 2.1 },
  { color: "232,203,160", r: 0.34, x: 0.55, y: 0.85, dx: 0.12, dy: 0.07, a: 0.07, p: 4.2 },
  { color: "94,58,28", r: 0.7, x: 0.3, y: 0.55, dx: 0.07, dy: 0.1, a: 0.1, p: 1.3 },
];

/**
 * Ambient light background: slow-drifting warm radial glows rendered on a
 * low-resolution canvas and upscaled by CSS, which keeps it perfectly smooth.
 */
export function Aurora() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scale = 0.22;
    const resize = () => {
      canvas.width = Math.max(1, Math.floor(window.innerWidth * scale));
      canvas.height = Math.max(1, Math.floor(window.innerHeight * scale));
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    const draw = (t: number) => {
      const { width: w, height: h } = canvas;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      const time = reduced ? 0 : t / 1000;
      for (const b of blobs) {
        const x = (b.x + Math.sin(time * b.dx + b.p) * 0.14) * w;
        const y = (b.y + Math.cos(time * b.dy + b.p) * 0.11) * h;
        const r = b.r * Math.max(w, h);
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(${b.color},${b.a})`);
        g.addColorStop(1, `rgba(${b.color},0)`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="fixed inset-0 -z-10 h-full w-full" aria-hidden />;
}
