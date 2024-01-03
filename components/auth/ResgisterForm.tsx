"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "@/schemas";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { KeyRound, MailMinus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormWrapper } from "./FormWrapper";
import { FormError } from "./FormError";
import { useState, useTransition } from "react";
import { FormSucess } from "./FormSucess";
import { register } from "@/actions/register";

export function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [sucess, setSucess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSucess("");

    startTransition(() => {
      register(data).then((data) => {
        setError(data.error);
        setSucess(data.sucess);
      });
    });
  };

  return (
    <div className="max-sm:h-[100svh] h-screen grid place-items-center background-login-page">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="p-5 border border-borderColor rounded-lg space-y-6 md:w-96 backdrop-blur-lg text-white"
        >
          <FormWrapper
            sso
            title="Cadastrar-se"
            description=""
            href="/auth/login"
            message="Já tem uma conta? Entrar"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome:</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center justify-center">
                      <Input
                        {...field}
                        className="form-outlined"
                        placeholder="Jonh Doe"
                      />
                      <MailMinus className="absolute left-0 w-4 h-4" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail:</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center justify-center">
                      <Input
                        {...field}
                        type="email"
                        className="form-outlined"
                        placeholder="E-Mail"
                      />
                      <MailMinus className="absolute left-0 w-4 h-4" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha:</FormLabel>
                    <FormControl>
                      <div className="relative flex items-center justify-center">
                        <Input
                          {...field}
                          type="password"
                          className="form-outlined"
                          placeholder="Password..."
                        />
                        <KeyRound className="absolute left-0 w-4 h-4" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="cursor-pointer hover:underline underline-offset-4 text-sm">
                Esqueceu sua senha?
              </p>
            </div>
            <FormError message={error} />
            <FormSucess message={sucess} />
            <Button variant="custom" size="full">
              Enviar
            </Button>
          </FormWrapper>
        </form>
      </Form>
    </div>
  );
}
