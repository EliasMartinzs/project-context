"use client";

import { categoriesServices } from "@/constants";
import Link from "next/link";
import { useRef, useState, MouseEvent } from "react";

interface Props {
  children: React.ReactNode;
}

export function Slider({ children }: Props) {
  const [dragStart, setDragStart] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      setDragging(true);
      setDragStart(event.clientX);
      setScrollLeft(ref.current.scrollLeft);
      ref.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!dragging || !ref.current) return;
    const distance = event.clientX - dragStart;
    ref.current.scrollLeft = scrollLeft - distance;
  };

  const handleMouseUp = () => {
    setDragging(false);
    if (ref.current) {
      ref.current.style.cursor = "grab";
    }
  };

  return (
    <div
      ref={ref}
      className="overflow-x-hidden whitespace-nowrap"
      style={{ cursor: "grab", userSelect: "none" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {children}
    </div>
  );
}
