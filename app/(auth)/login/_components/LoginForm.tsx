"use client";

import { LoginSchema, RegisterSchema } from "@/lib/validations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { FaRegEyeSlash, FaEye } from "react-icons/fa";
import { useState, useTransition } from "react";

import { CgDanger } from "react-icons/cg";
import { CiCircleCheck } from "react-icons/ci";

import { FormState } from "@/components/reusable/FormState";
import { login } from "@/actions/login";

type RegisterValidation = z.infer<typeof LoginSchema>;

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<RegisterValidation>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: RegisterValidation) {
    startTransition(async () => {
      login(data).then((values) => {
        setError(values?.error);

        form.reset();
      });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-Mail</FormLabel>
              <FormControl>
                <Input type="email" {...field} disabled={isPending} />
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
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    {...field}
                    disabled={isPending}
                  />
                  <span className="absolute top-2 right-3">
                    {showPassword ? (
                      <FaRegEyeSlash
                        className="w-5 h-5 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <FaEye
                        className="w-5 h-5 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )}
                  </span>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <small className="text-muted-foreground">
            Ao fazer login. Ocasionalmente, enviaremos e-mails sobre notícias,
            produtos e serviços; Você pode optar por sair a qualquer hora.
          </small>
        </div>

        {error && (
          <FormState
            text={error}
            style="border border-error text-error rounded-xl shadow-inner"
            icon={CgDanger}
          />
        )}

        <Button type="submit" className="w-full">
          Entrar
        </Button>
      </form>
    </Form>
  );
}
