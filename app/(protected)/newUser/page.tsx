import React from "react";
import NewUserForm from "./_components/NewUserForm";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { ModeToggle } from "@/components/reusable/ModeToggle";

export default async function NewUser() {
  const user = await useCurrentUser();
  return (
    <>
      <ModeToggle />

      <NewUserForm user={user} />
    </>
  );
}
