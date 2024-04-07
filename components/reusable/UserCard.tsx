import { useCurrentUser } from "@/hooks/useCurrentUser";
import Image from "next/image";
import React from "react";

export async function UserCard() {
  const user = await useCurrentUser();

  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <div className="relative w-14 h-14 rounded-full">
          <Image
            src={user?.image ?? ""}
            alt={user?.name ?? ""}
            className="rounded-full object-cover"
            fill
          />
        </div>
        <div>
          <p>{user?.name}</p>
          <small className="font-light">Seguir</small>
        </div>
      </div>
    </div>
  );
}
