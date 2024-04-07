import { db } from "@/lib/db";
import { User } from "@prisma/client";

export const getUserByEmail = async (email: string): Promise<User | null> => {
  try {
    const user = await db.user.findUnique({ where: { email } });

    return user as User;
  } catch (error: any) {
    return null;
  }
};

export const getUserById = async (id: string): Promise<User | null> => {
  try {
    const user = await db.user.findUnique({ where: { id } });

    return user as User;
  } catch (error: any) {
    return null;
  }
};
