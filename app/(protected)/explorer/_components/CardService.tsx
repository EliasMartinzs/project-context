import { UserCard } from "@/components/reusable/UserCard";
import { Category, Service, ServiceExtra } from "@prisma/client";

import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface Props {
  service: {
    id: string;
    title: string;
    description: string;
    observation?: string | null | undefined;
    price: number;
    photo: string | null;
    userId: string;
    categories?: {
      id: string;
      category: string;
    }[];
  };
}

export function CardService({ service }: Props) {
  const { description, photo, price, title, userId, categories, id } = service;

  return (
    <Link href={`/service/${id}`}>
      <Card className="w-[420px] lg:w-[450px] bg-card shadow-custom dark: border-t border-r border-l rounded-[36px] space-y-2">
        <CardHeader>
          <div className="relative w-full h-[225px] rounded-[36px] shadow-md">
            <Image
              fill
              alt={title}
              src={photo ?? ""}
              className="object-center object-cover rounded-[36px]"
            />
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-y-6 h-40">
          <div className="space-y-8">
            <h4 className="line-clamp-2 text-center uppercase">{title}</h4>
            <small className="line-clamp-4 text-start">{description}</small>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-y-4">
          <div className="gap-y-2 flex-col center h-[140px] w-full">
            {categories !== undefined &&
              categories
                .slice()
                .sort((a, b) => a.category.localeCompare(b.category))
                .map(({ id, category }) => (
                  <small
                    className="border rounded-full p-1 px-2 shadow-sm"
                    key={id}
                  >
                    {category}
                  </small>
                ))}
          </div>

          <Separator />

          <div className="w-full flex items-center justify-between">
            <div>
              <UserCard userId={userId} />
            </div>
            <div>
              <p className="">R$ {price.toFixed(2)}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
