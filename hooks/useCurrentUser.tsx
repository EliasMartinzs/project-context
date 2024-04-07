import { auth } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { User } from "@prisma/client";

export async function useCurrentUser() {
  const session = await auth();
  const user = await getUserByEmail(session?.user.email ?? "");

  const userData = {
    ...user,
    name: session?.user?.name,
  } as User;

  return userData;
}
