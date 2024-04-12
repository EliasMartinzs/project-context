"use client";
import { cn } from "@/lib/utils";
import { useRef, useState, MouseEvent, ReactNode, useEffect } from "react";

interface Props {
  children: React.ReactNode;
  gap?: string;
  pad?: string;
}

export function Slider({ children, gap, pad }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  if (typeof window === "undefined") {
    return (
      <div
        ref={ref}
        className="overflow-x-auto"
        suppressHydrationWarning={true}
        style={{
          cursor: "default",
          userSelect: "none",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
        }}
      >
        <div className={`inline-flex ${pad} ${gap}`}>{children}</div>
      </div>
    );
  }

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.style.cursor = "grabbing";
      ref.current.scrollLeft += event.movementX;
    }
  };

  const handleMouseUp = () => {
    if (ref.current) {
      ref.current.style.cursor = "grab";
    }
  };

  return (
    <div
      suppressHydrationWarning={true}
      ref={ref}
      className="overflow-x-auto"
      style={{
        scrollbarWidth: "none",
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className={`inline-flex ${pad} ${gap}`}>{children}</div>
    </div>
  );
}
