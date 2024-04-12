import { Logout } from "@/components/reusable/Logout";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import Image from "next/image";
import { ModeToggle } from "@/components/reusable/ModeToggle";

import { EditIcon, LogOutIcon } from "lucide-react";
import { menuIcons } from "@/constants";
import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";
import { getAllServicesByUser } from "@/data/service";

export async function MenuItems() {
  const user = await useCurrentUser();
  const servicesUser = await getAllServicesByUser(user?.id);

  return (
    <aside className="py-10 space-y-10">
      <div className="center flex-col gap-y-4">
        <div className="relative w-24 h-24 rounded-full">
          <Image
            src={user?.image ?? "/no-user.webp"}
            alt={user?.name ?? ""}
            className="object-cover object-center rounded-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
          />
        </div>

        <div className="text-center">
          <h4 className="font-medium text-lg">{user?.name}</h4>
          <p className="font-light">{user?.address}</p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex-1 center flex-col text-center">
          <span className="text-2xl font-medium">{user?.serviceCount}</span>
          <span className="font-light">Serviços</span>
        </div>
      </div>

      <div className="center mx-auto">
        {menuIcons.map(({ icon, href }) => {
          const Icon = icon;
          return (
            <Link key={href} href={href} className="flex-1 center">
              <Icon className="w-7 h-7" />
            </Link>
          );
        })}
      </div>

      <div className="center">
        <Link href="/new-service" className="flex text-lg items-center gap-x-2">
          <IoAddCircleOutline className="w-6 h-6" /> Novo Serviço
        </Link>
      </div>

      <div className="center flex-col gap-y-6">
        <h6 className="font-medium">Meus serviços</h6>

        <div className="center flex-wrap gap-5">
          {servicesUser.services !== undefined &&
            servicesUser.services.map((service) => (
              <Link
                href={`/service/${service?.id}`}
                key={service.id}
                className="center flex-col gap-y-2"
              >
                <Image
                  src={service?.photo ?? ""}
                  alt={service?.title ?? ""}
                  className="object-cover object-center"
                  width={100}
                  height={100}
                />
                <small>{service?.title}</small>
              </Link>
            ))}
        </div>
      </div>

      <Link href="/new-user" className="absolute inset-y-0 right-0 m-3">
        <EditIcon className="cursor-pointer" />
      </Link>

      <div className="absolute bottom-0 left-0 pb-10 px-10 flex items-center justify-between w-full">
        <Logout>
          <div className="flex items-center gap-x-3">
            <LogOutIcon /> Sair
          </div>
        </Logout>

        <ModeToggle />
      </div>
    </aside>
  );
}
