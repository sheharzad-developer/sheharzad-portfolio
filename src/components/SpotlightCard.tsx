"use client";

import type { MouseEvent, ReactNode } from "react";

export function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      onMouseMove={onMouseMove}
      className={`spotlight rounded-2xl border border-border bg-surface/60 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
