import { getUserById } from "@/data/user";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fisrtLetters } from "@/lib/utils";

interface Props {
  userId: string | undefined;
}

export async function UserCard({ userId }: Props) {
  const user = await getUserById(userId ?? "");

  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <Avatar>
          <AvatarImage src={user?.image ?? ""} alt={user?.name ?? ""} />
          <AvatarFallback>{fisrtLetters(user?.name ?? "")}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start justify-center">
          <small>{user?.name}</small>
          <small className="font-light">Seguir</small>
        </div>
      </div>
    </div>
  );
}
