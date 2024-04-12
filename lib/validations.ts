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

export const ServiceStep1Schema = z.object({
  title: z.string().min(1, {
    message: "Por favor crie um titulo para o serviço",
  }),
  description: z
    .string()
    .min(1, {
      message: "Por favor crie um descrição para o serviço",
    })
    .max(300, {
      message: "Você só pode digitar até 300 caracteres.",
    }),
  observation: z
    .string()
    .max(300, {
      message: "Você só pode digitar até 300 caracteres.",
    })
    .optional(),
  photo: z.string().min(1, {
    message: "Por favor selecione uma foto",
  }),
});

export const ServiceStep2Schema = z.object({
  categories: z.array(z.string()).min(1, {
    message: "Por favor selecione ao menos uma categoria.",
  }),
});

export const ServiceExtra = z.object({
  name: z
    .string()
    .min(1, "O nome do serviço extra deve ter pelo menos 1 caractere."),
  price: z.number().min(0, "O preço do serviço extra não pode ser negativo."),
});

export const ServiceStep3Schema = z.object({
  price: z.string().min(1, {
    message: "O Preço do serviço tem que ser maior que 1 real",
  }),
  extra: z.array(ServiceExtra).optional(),
});

export const ServiceStep4Schema = z.object({});

export const ServiceSchema = z.object({
  serviceStep1: ServiceStep1Schema,
  serviceStep2: ServiceStep2Schema,
  serviceStep3: ServiceStep3Schema,
});
