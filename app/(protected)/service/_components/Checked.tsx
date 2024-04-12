import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

interface Props {
  name: string;
  price: number;
  checked: boolean;
}

export function Checked({ name, price, checked }: Props) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-x-2">
        <Checkbox /> {name}
      </span>
      <span>R$ {price.toFixed(2)}</span>
    </div>
  );
}
