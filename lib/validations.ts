import * as z from "zod";

export const RegisterSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "Por favor, insira seu primeiro nome." }),
  lastName: z.string().min(1, {
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
