"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import InputMask from "react-input-mask";

import { updateNewUserSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import "react-datepicker/dist/react-datepicker.css";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import "react-day-picker/dist/style.css";
import { languages } from "@/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { updateUserProfile } from "@/actions/user";
import { toast } from "sonner";
import { User } from "@prisma/client";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";

type validationNewUser = z.infer<typeof updateNewUserSchema>;

interface Props {
  user: User | null;
}

export default function NewUserForm({ user }: Props) {
  const form = useForm<validationNewUser>({
    resolver: zodResolver(updateNewUserSchema),
    defaultValues: {
      adress: user?.address || "",
      birthday: user?.birthday || "",
      cep: user?.cep || undefined,
      city: user?.city || "",
      gender: user?.gender || "",
      language: user?.language || "",
      name: user?.name || "",
      image: user?.image || "",
      phone: user?.phone || undefined,
    },
  });
  const [isPending, startTransition] = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasChanged, setHasChanged] = useState(false);
  const { startUpload } = useUploadThing("imageUploader");
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const handleChange = () => {
      setHasChanged(true);
    };

    form.formState.isDirty && setHasChanged(true);

    window.addEventListener("change", handleChange);

    return () => {
      window.removeEventListener("change", handleChange);
    };
  }, [form.formState.isDirty]);

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      setFiles(Array.from(e.target.files));

      if (!file.type.includes("image")) return;

      fileReader.onload = async (e) => {
        const imageDataUrl = e.target?.result?.toString() || "";

        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: validationNewUser) => {
    const blob = data.image;

    const hasImageChanged = isBase64Image(blob ?? "");

    if (hasImageChanged) {
      const imgRes = await startUpload(files);

      if (imgRes && imgRes[0].url) {
        data.image = imgRes[0].url;
      }
    }

    startTransition(async () => {
      updateUserProfile(data, user?.email ?? "")
        .then((value) => {
          setHasChanged(false);
          toast(value?.sucess);
          form.reset();
        })
        .catch((error) => {
          toast.error("Erro ao salvar perfil");
        });
    });
  };

  const isFormEmpty = () => {
    return Object.values(form.getValues()).every(
      (value) => value === "" || value === undefined
    );
  };

  return (
    <main className="w-full h-svh center">
      <div className="w-3/4 lg:max-w-lg rounded-md p-5 border space-y-8 bg-card shadow-xl dark:shadow-2xl">
        <div className="w-full flex items-center justify-between">
          <h4 className="text-lg">Completar meu Perfil</h4>
          <Link
            href="/explorer"
            className="font-light hover:underline underline-offset-4"
          >
            Pular
          </Link>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex gap-x-4 items-center">
              <div className="w-20 h-20">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <div className="w-full">
                      <label className="flex flex-col items-center justify-center w-20 h-20 relative border-2 border-dashed hover:border-neutral-500 transition-colors rounded-full cursor-pointer">
                        {field.value ? (
                          <>
                            <Image
                              src={field.value}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              fill
                              alt={"img"}
                              className="object-fit rounded-full"
                            />
                            <input
                              ref={inputRef}
                              type="file"
                              accept="image/*"
                              placeholder="Carregar uma foto"
                              className="hidden"
                              disabled={isPending}
                              onChange={(e) => handleImage(e, field.onChange)}
                            />
                          </>
                        ) : (
                          <>
                            {user?.image ? (
                              <>
                                <Image
                                  width={128}
                                  height={128}
                                  alt={user?.name ?? ""}
                                  src={user?.image}
                                  className="rounded-full"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <input
                                  ref={inputRef}
                                  type="file"
                                  accept="image/*"
                                  placeholder="Carregar uma foto"
                                  className="hidden"
                                  disabled={isPending}
                                  onChange={(e) =>
                                    handleImage(e, field.onChange)
                                  }
                                />
                              </>
                            ) : (
                              <>
                                <div className="grid place-items-center">
                                  <svg
                                    className="w-8 h-8 text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                  </svg>
                                </div>
                                <input
                                  ref={inputRef}
                                  type="file"
                                  accept="image/*"
                                  placeholder="Carregar uma foto"
                                  className="hidden"
                                  disabled={isPending}
                                  onChange={(e) =>
                                    handleImage(e, field.onChange)
                                  }
                                />
                                <FormMessage />
                              </>
                            )}
                          </>
                        )}
                      </label>
                    </div>
                  )}
                />
              </div>

              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <input
                          {...field}
                          className="input-outline"
                          placeholder="Nome"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="birthday"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Data de nascimento</FormLabel>
                  <FormControl>
                    <InputMask
                      mask="99/99/9999"
                      {...field}
                      className="bg-card border-b outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Gênero</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex items-center gap-x-4"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="male" />
                        </FormControl>
                        <FormLabel className="font-normal">Masculino</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="female" />
                        </FormControl>
                        <FormLabel className="font-normal">Feminino</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="other" />
                        </FormControl>
                        <FormLabel className="font-normal">Outro</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Idioma</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Idioma nativo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {languages.map(({ label, value }) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="adress"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormControl>
                    <input
                      {...field}
                      className="input-outline"
                      placeholder="Endereço"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cep"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormControl>
                    <InputMask
                      mask="99999-999"
                      {...field}
                      className="input-outline"
                      placeholder="CEP"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormControl>
                    <input
                      {...field}
                      className="input-outline"
                      placeholder="Cidade"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormControl>
                    <InputMask
                      mask="99 99999-9999"
                      {...field}
                      className="input-outline"
                      placeholder="(DD) Telefone"
                      minLength={11}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex gap-x-5">
              <Button
                type="submit"
                disabled={!hasChanged || isFormEmpty()}
                className="w-full rounded-full"
              >
                Salvar
              </Button>
              <Link href="/explorer" className="w-full">
                <Button className="w-full rounded-full">Continuar</Button>
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}
