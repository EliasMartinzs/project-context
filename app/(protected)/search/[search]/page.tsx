import { getServicesByName } from "@/actions/service";
import { DynamicBreacrump } from "@/components/reusable/DynamicBreadcrumb";
import React from "react";
import { CardService } from "../../explorer/_components/CardService";

export default async function Search({
  params,
}: {
  params: { search: string };
}) {
  const searched = await getServicesByName(decodeURIComponent(params.search));

  return (
    <>
      <DynamicBreacrump
        paths={[
          { label: "Explorer", href: "/explorer" },
          {
            label: decodeURIComponent(params.search),
            href: decodeURIComponent(params.search),
          },
        ]}
      />

      <div className="p-4 py-6 lg:px-32 w-full space-y-6">
        <div className="text-center flex items-center gap-x-2">
          <p>Resultado da busca:</p>
          <h4 className="font-medium">{decodeURIComponent(params.search)}</h4>
        </div>
        <div className="flex gap-5 flex-wrap items-center justify-center w-full">
          {searched?.servicesSearched !== undefined &&
            searched?.servicesSearched.map((searched) => (
              <CardService service={searched} key={searched.id} />
            ))}
        </div>
      </div>
    </>
  );
}
