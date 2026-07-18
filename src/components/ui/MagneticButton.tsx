import { useRef } from "react";
import type { ReactNode, MouseEvent } from "react";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function MagneticButton({ href, children, className, external }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${dx * 0.2}px, ${dy * 0.2}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0, 0)";
  };

  return (
    <a
      ref={ref}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block transition-transform duration-200 ease-out ${className ?? ""}`}
    >
      {children}
    </a>
  );
}
