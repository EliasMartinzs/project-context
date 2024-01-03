"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas";
import { useSearchParams } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { FormWrapper } from "@/components/auth/FormWrapper";
import { LoginButton } from "@/components/auth/LoginButton";
import { FormError } from "@/components/auth/FormError";
import { FormSucess } from "./FormSucess";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export function LoginForm() {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email ja esta sendo usado em outra conta"
      : "";
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [sucess, setSucess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    setError("");
    setSucess("");

    startTransition(() => {
      login(data).then((data) => {
        setError(data?.error);
        // setSucess(data.sucess);
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
            title="Entrar"
            description="faca login"
            href="/auth/register"
            message="Não tem uma conta? Registrar-se"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Nome"
                      type="email"
                      className="form-outlined"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="******"
                      type="password"
                      className="form-outlined"
                    />
                  </FormControl>
                  <Button
                    size="sm"
                    variant="link"
                    asChild
                    className="px-0 font-normal"
                  >
                    <Link href="/auth/reset">Forgot password?</Link>
                  </Button>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error || urlError} />
            <FormSucess message={sucess} />
            <LoginButton>Entrar</LoginButton>
          </FormWrapper>
        </form>
      </Form>
    </div>
  );
}
