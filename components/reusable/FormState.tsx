import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";

interface Props {
  text: string;
  style: string;
  icon: IconType;
}

export function FormState({ text, style, icon }: Props) {
  const Icon = icon;
  return (
    <div className={cn("w-full h-9 center text-center", style)}>
      <h4 className="flex gap-x-3 items-center">
        <Icon className="w-6 h-6" /> {text}
      </h4>
    </div>
  );
}
