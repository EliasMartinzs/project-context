"use server";

import * as z from "zod";

import { updateNewUserSchema } from "@/lib/validations";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const updateUserProfile = async (
  data: z.infer<typeof updateNewUserSchema>,
  userEmail: string | undefined
) => {
  const validatedFields = updateNewUserSchema.safeParse(data);

  if (!validatedFields.success) {
    return null;
  }

  try {
    const {
      adress,
      birthday,
      cep,
      city,
      gender,
      language,
      name,
      phone,
      image,
    } = validatedFields.data;

    await db.user.update({
      where: {
        email: userEmail,
      },
      data: {
        address: adress,
        birthday: birthday,
        cep: cep,
        city: city,
        gender: gender,
        language: language,
        name: name,
        phone: phone,
        image: image,
      },
    });

    revalidatePath("/new-user");
    revalidatePath("/explorer");

    return { sucess: "Dados atualizados" };
  } catch (error: any) {
    throw new Error(error);
  }
};
