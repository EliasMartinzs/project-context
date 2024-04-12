import { DynamicBreacrump } from "@/components/reusable/DynamicBreadcrumb";
import { getServicesByCategory } from "@/data/service";
import { CardService } from "../../explorer/_components/CardService";

export default async function Categories({
  params,
}: {
  params: { category: string };
}) {
  function urlToLabel(url: string): string {
    const categoryName = decodeURIComponent(
      url.substring(url.lastIndexOf("/") + 1)
    );
    return categoryName.replace(/-/g, " ");
  }

  const categories = await getServicesByCategory(urlToLabel(params.category));

  return (
    <>
      <DynamicBreacrump
        paths={[
          { label: "Explorer", href: "/explorer" },
          {
            label: urlToLabel(params.category),
            href: `/explorer/${urlToLabel(params.category)}`,
          },
        ]}
      />

      <div className="p-4 py-6 lg:px-32 w-full space-y-6">
        <div className="text-center">
          <h4 className="text-xl font-bold">{urlToLabel(params.category)}</h4>
        </div>
        <div className="flex gap-5 flex-wrap items-center justify-center w-full">
          {categories.services?.map((categories) => (
            <CardService service={categories} key={categories.id} />
          ))}
        </div>
      </div>
    </>
  );
}
