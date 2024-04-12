"use server";

import { db } from "@/lib/db";
import { ServiceFormData } from "@/lib/interfaces";
import { GetAllServicesResponse, GetServiceById } from "@/lib/types";
import { Category, ServiceExtra, User } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createService = async (data: ServiceFormData, userId: string) => {
  try {
    const { title, description, price, photo, categories, extra, observation } =
      data;

    const serviceCategories = await Promise.all(
      categories.map(async (category) => {
        let foundCategory = await db.category.findFirst({
          where: { category },
        });

        if (!foundCategory) {
          foundCategory = await db.category.create({
            data: { category },
          });
        }

        return foundCategory;
      })
    );

    await db.service.create({
      data: {
        title,
        description,
        observation,
        price: +price,
        photo,
        userId,
        categories: {
          connect: serviceCategories.map((category) => ({ id: category.id })),
        },
        extras: {
          create: extra?.map((extra) => ({
            ...extra,
          })),
        },
      },
      include: {
        categories: true,
        extras: true,
      },
    });

    await db.user.update({
      where: { id: userId },
      data: {
        serviceCount: {
          increment: 1,
        },
      },
    });

    revalidatePath("/explorer");
    redirect("/explorer");
  } catch (error) {
    console.error("Erro ao criar serviço:", error);
    throw error;
  }
};

export const getServicesByName = async (query: string) => {
  try {
    const servicesSearched = await db.service.findMany({
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
      },
      include: {
        user: true,
        categories: true,
        extras: true,
      },
    });

    if (!servicesSearched || !Array.isArray(servicesSearched)) {
      return { error: "Errorrr" };
    }

    return { servicesSearched };
  } catch (error) {
    console.error("Erro ao buscar serviço:", error);
  }
};
