import { Category, Service, ServiceExtra, User } from "@prisma/client";

export type ServiceByCategoryResponse =
  | {
      error: string;
      services?: undefined;
    }
  | {
      services: {
        id: string;
        title: string;
        description: string;
        observation?: string | null;
        price: number;
        photo: string | null;
        userId: string;
        categories: {
          id: string;
          category: string;
        }[];
      }[];
      error?: undefined;
    };

export type GetAllServicesResponse = {
  services?: (Service & {
    extras: ServiceExtra[];
    categories: Category[];
    observation?: string | null;
  })[];
  error?: string;
};

export type GetServiceById = {
  service?: Service & {
    categories: Category[];
    extras: ServiceExtra[];
    user: User;
  };
  error?: string;
};
