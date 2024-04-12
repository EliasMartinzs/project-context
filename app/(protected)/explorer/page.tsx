import { DynamicBreacrump } from "@/components/reusable/DynamicBreadcrumb";
import { categoriesServices } from "@/constants";
import Link from "next/link";
import { Slider } from "./_components/Slider";

import { Separator } from "@/components/ui/separator";
import { getAllServices, getServicesByCategory } from "@/data/service";
import { CardService } from "./_components/CardService";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default async function Explorer() {
  const data = await getAllServices();

  const categoriesWithServices = await Promise.all(
    categoriesServices.map(async (category) => {
      const services = await getServicesByCategory(category.label);
      return { category, services };
    })
  );

  const filteredCategories = categoriesWithServices.filter(
    ({ services }) => services && services.services?.length! > 0
  );

  return (
    <main className="space-y-6">
      <DynamicBreacrump paths={[{ label: "Explorar", href: "/explorer" }]} />
      <Slider gap="gap-x-4" pad="p-4">
        {categoriesServices.map((cat) => (
          <div key={cat.label} className="p-4 whitespace-nowrap">
            <Link
              href={cat.href}
              className="flex items-center gap-x-3 hover:text-primary hover:underline underline-offset-8"
            >
              {cat.label}
            </Link>
          </div>
        ))}
      </Slider>

      <div className="px-4 space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-x-2">
            Recentes <HiOutlineArrowNarrowRight />
          </h2>
          {data?.error && <p>{data?.error}</p>}
          <Slider gap="gap-x-5">
            {data?.services &&
              data?.services.map((service) => (
                <CardService service={service} key={service.id} />
              ))}
          </Slider>
          <Separator />
        </div>

        {filteredCategories.map(({ category, services }) => (
          <div key={category.label} className="space-y-4">
            <Link
              href={category.href}
              className="text-xl font-bold flex items-center gap-x-2"
            >
              {category.label} <HiOutlineArrowNarrowRight />
            </Link>
            {services.error && <p>{services.error}</p>}
            <Slider gap="gap-x-5">
              {services?.services &&
                services.services.map((service) => (
                  <CardService service={service} key={service.id} />
                ))}
            </Slider>
            <Separator />
          </div>
        ))}
      </div>
    </main>
  );
}
