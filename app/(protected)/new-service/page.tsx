import React from "react";
import Steps from "./_components/Steps";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default async function page() {
  const user = await useCurrentUser();

  return (
    <div>
      <Steps userId={user?.id} />
    </div>
  );
}
