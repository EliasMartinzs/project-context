import React from "react";
import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreacrumpItems {
  label: string;
  href: string;
}

interface BreadcrumpProps {
  paths: BreacrumpItems[];
}

export function DynamicBreacrump({ paths }: BreadcrumpProps) {
  return (
    <div className="px-6 lg:px-32">
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map(({ label, href }, i) => (
            <React.Fragment key={label}>
              <BreadcrumbItem>
                <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
              </BreadcrumbItem>
              {i < href.length - 1 && (
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
