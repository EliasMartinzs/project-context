"use client";
import { ChevronUpCircle } from "lucide-react";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { TbChevronCompactUp } from "react-icons/tb";
import { cn } from "../../lib/utils";

export function Search() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-x-1 max-lg:hidden">
        <input
          className="border-input border rounded-md px-4 py-2 h-12 bg-transparent w-96  outline-none focus:border-border"
          placeholder="Buscar..."
        />
        <div className="border h-12 rounded-md center px-3 hover:border-none hover:bg-foreground hover:text-background cursor-pointer transition-colors">
          <CiSearch className="w-6 h-6" />
        </div>
      </div>

      <div className="flex w-full items-center justify-end mr-5 lg:hidden">
        <CiSearch
          className="w-6 h-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <div
        className={cn(
          "bg-background w-full absolute top-0 left-0 z-[99999] transition-all duration-300 pt-5 lg:hidden center flex-col",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex items-center gap-x-1 w-full">
          <input
            className="border-input border rounded-lg px-4 py-3 h-12 bg-transparent flex-1 ml-5 outline-none focus:border-border"
            placeholder="Buscar..."
          />
          <div className="h-12 center px-3 mr-5 cursor-pointer hover:bg-foreground hover:text-background rounded-lg transition-colors">
            <CiSearch className="w-6 h-6" />
          </div>
        </div>

        <div className="w-full center mt-5">
          <TbChevronCompactUp
            className="w-8 h-8 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
    </>
  );
}
