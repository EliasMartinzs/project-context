"use server";

import { db } from "@/lib/db";
import {
  GetAllServicesResponse,
  GetServiceById,
  ServiceByCategoryResponse,
} from "@/lib/types";

export const getAllServices = async (): Promise<GetAllServicesResponse> => {
  try {
    const services = await db.service.findMany({
      include: {
        extras: true,
        categories: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!services || !Array.isArray(services) || services.length === 0) {
      return { error: "Nenhum serviço encontrado no momento!" };
    }

    return { services };
  } catch (error: any) {
    return { error: "Ocorreu um erro ao buscar os serviços." };
  }
};

export const getServicesByCategory = async (
  category: string
): Promise<ServiceByCategoryResponse> => {
  try {
    const services = await db.service.findMany({
      where: {
        categories: {
          some: {
            category: {
              equals: category,
            },
          },
        },
      },
      include: {
        categories: true,
      },
    });

    if (!services || !Array.isArray(services) || services.length === 0) {
      return { error: "Nenhum serviço encontrado no momento!" };
    }

    return { services };
  } catch (error) {
    return { error: "Ocorreu um erro ao buscar os serviços." };
  }
};

export const getServiceById = async (id: string): Promise<GetServiceById> => {
  try {
    const service = await db.service.findFirst({
      where: { id: id },
      include: { categories: true, extras: true, user: true },
    });

    if (!service) {
      return { error: "Nenhum serviço encontrado no momento!" };
    }
    return { service };
  } catch (error) {
    return { error: "Ocorreu um erro ao buscar os serviços." };
  }
};

export const getAllServicesByUser = async (userId: string) => {
  try {
    const services = await db.service.findMany({
      where: { user: { id: userId } },
    });

    if (!services || !Array.isArray(services) || services.length === 0) {
      return { error: "Nenhum serviço encontrado no momento!" };
    }

    return { services };
  } catch (error) {
    return { error: "Ocorreu um erro ao buscar os serviços." };
  }
};
