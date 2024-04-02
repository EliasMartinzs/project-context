"use client";

import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botão centralizado */}
      <button
        className={`${
          isOpen ? "right-96" : "right-5"
        } top-1/2 transform fixed z-50 transition-all duration-300`}
        onClick={toggleSidebar}
      >
        <ChevronLeft />
      </button>

      {/* Barra lateral */}
      <div
        className={`h-screen w-96 bg-gray-200 fixed top-0 right-0 z-40 transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Conteúdo da barra lateral */}
        <ul className="pt-5">
          <li className="px-4 py-2">Item 1</li>
          <li className="px-4 py-2">Item 2</li>
          <li className="px-4 py-2">Item 3</li>
        </ul>
      </div>
    </>
  );
}
