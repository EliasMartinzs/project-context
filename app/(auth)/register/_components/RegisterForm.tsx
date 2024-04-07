"use client";

import { RegisterSchema } from "@/lib/validations";
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
import { FormState } from "@/components/reusable/FormState";
import { register } from "@/actions/register";

import { CgDanger } from "react-icons/cg";
import { CiCircleCheck } from "react-icons/ci";
import { Loading } from "@/components/reusable/Loading";
import { useRouter } from "next/navigation";

type RegisterValidation = z.infer<typeof RegisterSchema>;

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<RegisterValidation>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: RegisterValidation) {
    startTransition(() => {
      register(data).then((value) => {
        setError(value.error);
        setSuccess(value.sucess);

        if (value.sucess) {
          router.push("/login");
        }

        form.reset();
      });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome completo</FormLabel>
              <FormControl>
                <Input {...field} disabled={isPending} />
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
            Ao criar uma conta você concorda com os Termos de Serviço e nossa
            Política de Privacidade. Ocasionalmente, enviaremos e-mails sobre
            notícias, produtos e serviços; Você pode optar por sair a qualquer
            hora.
          </small>
        </div>

        {error && (
          <FormState
            text={error}
            style="border border-error text-error rounded-xl shadow-inner"
            icon={CgDanger}
          />
        )}
        {success && (
          <FormState
            text={success}
            style="border text-success border-success rounded-xl shadow-inner"
            icon={CiCircleCheck}
          />
        )}

        <Button type="submit" className="w-full">
          {isPending ? <Loading size="medium" /> : "Registrar-se"}
        </Button>
      </form>
    </Form>
  );
}
