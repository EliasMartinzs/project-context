import React from "react";
import NewUserForm from "./_components/NewUserForm";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default async function NewUser() {
  const user = await useCurrentUser();
  return <NewUserForm user={user} />;
}
