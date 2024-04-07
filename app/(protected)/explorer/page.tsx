import { ModeToggle } from "@/components/reusable/ModeToggle";

import { DynamicBreacrump } from "@/components/reusable/DynamicBreadcrumb";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { CardService } from "./_components/CardService";
import { categoriesServices } from "@/constants";
import Link from "next/link";
import { Slider } from "./_components/Categories";

export default async function Initial() {
  const user = await useCurrentUser();

  return (
    <main className="space-y-6">
      <Slider>
        <div className="inline-flex space-x-4 p-4">
          {categoriesServices.map(({ label, icon, href }) => {
            const Icon = icon;
            return (
              <div key={label} className="p-4">
                <Link
                  href={href}
                  className=" flex items-center gap-x-3 hover:text-primary hover:underline underline-offset-8"
                >
                  <Icon className="w-6 h-6" /> {label}
                </Link>
              </div>
            );
          })}
        </div>
      </Slider>
      <DynamicBreacrump paths={[{ label: "Explorar", href: "/explorer" }]} />

      <div className="w-full px-6 lg:px-32 ">
        {Array.from({ length: 1 }).map((_, i) => (
          <CardService user={user} />
        ))}
      </div>
      <ModeToggle />
    </main>
  );
}
