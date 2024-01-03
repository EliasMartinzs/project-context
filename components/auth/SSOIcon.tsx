import { cn } from "@/lib/utils";

interface SSOIconPrps {
  icon: React.ReactNode;
  href?: string;
  size?: string;
}

export function SSOIcon({ icon, size, href }: SSOIconPrps) {
  return (
    <div
      className={cn(
        "p-3 w-full grid place-items-center border rounded-md cursor-pointer",
        size
      )}
    >
      {icon}
    </div>
  );
}
