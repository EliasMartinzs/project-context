import * as z from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "Por favor, insira seu sobrenome.",
  }),
  email: z.string().min(1, {
    message: "Por favor, insira seu endereço de e-mail.",
  }),
  password: z.string().min(1, {
    message: "Por favor, insira sua senha.",
  }),
});

export const LoginSchema = z.object({
  email: z.string().min(1, {
    message: "Por favor, insira seu endereço de e-mail.",
  }),
  password: z.string().min(1, {
    message: "Por favor, insira sua senha.",
  }),
});

export const updateNewUserSchema = z.object({
  name: z.string().optional(),
  image: z.string().optional(),
  city: z.string().optional(),
  adress: z.string().optional(),
  cep: z.string().optional(),
  phone: z
    .string()
    .min(11, {
      message: "Por favor, Insira um número valído",
    })
    .optional(),
  language: z.string().optional(),
  birthday: z.string().optional(),
  gender: z.string().optional(),
});

export const createNewService = z.object({
  title: z.string().min(1, {
    message: "Por favor, Adicione um titulo.",
  }),
  description: z.string().min(1, {
    message: "Por favor, Adicione uma descrição.",
  }),
  image: z.string().optional(),
  categories: z.string().array().optional(),
  price: z.string().min(1, {
    message: "Por favor, Adicione um preço ao serviço.",
  }),
});
