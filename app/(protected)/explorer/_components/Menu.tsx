"use client";

import { TbChevronCompactLeft, TbChevronCompactRight } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function Menu({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`${
          isOpen ? "right-96 max-lg:bg-accent p-2 rounded-l-full" : "right-5"
        } lg:top-1/2 transform fixed z-50 transition-all duration-300`}
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <div>
            <span className="lg:hidden">
              <IoIosClose className="w-8 h-8" />
            </span>
            <span className="max-lg:hidden">
              <TbChevronCompactRight className="w-8 h-8" />
            </span>
          </div>
        ) : (
          <div>
            <span className="lg:hidden">
              <CiMenuFries className="w-6 h-6" />
            </span>
            <span className="max-lg:hidden">
              <TbChevronCompactLeft className="w-8 h-8" />
            </span>
          </div>
        )}
      </button>
      <div
        className={cn(
          isOpen && "w-full h-full absolute inset-0 cursor-pointer"
        )}
        onClick={toggleSidebar}
      />
      <div
        className={cn(
          "h-screen w-96 bg-card fixed top-0 right-0 z-40 transition-all duration-300 shadow-md",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {children}
      </div>
    </>
  );
}
