import React, { Suspense, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { ChangeEvent } from "react";
import { ServiceStep1Schema } from "@/lib/validations";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  updateFormData: (step: number, data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
  currentStep: number;
}

type validation = z.infer<typeof ServiceStep1Schema>;

export function StepOne({
  updateFormData,
  nextStep,
  prevStep,
  currentStep,
}: Props) {
  const form = useForm<z.infer<typeof ServiceStep1Schema>>({
    resolver: zodResolver(ServiceStep1Schema),
    defaultValues: {
      title: "",
      description: "",
      photo: "",
      observation: "",
    },
  });

  const [observationLength, setObservationLength] = useState(0);
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [files, setFiles] = useState<File[]>([]);

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

  async function onSubmit(data: validation) {
    const validatedFields = ServiceStep1Schema.safeParse(data);

    if (!validatedFields.success) return null;

    nextStep();

    updateFormData(1, validatedFields.data);
  }

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="photo"
          render={({ field }) =>
            field.value ? (
              <div className="w-full">
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 relative w-full h-64">
                      <Image
                        fill
                        alt="image drop"
                        className="object-cover"
                        src={field.value}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => handleImage(e, field.onChange)}
                    />
                  </label>
                </div>
              </div>
            ) : (
              <div className="w-full">
                <div className="flex items-center justify-center w-full cursor-pointer">
                  <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
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
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 1MB)
                      </p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => handleImage(e, field.onChange)}
                    />
                  </label>
                </div>
                <FormMessage />
              </div>
            )
          }
        />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <div className="flex flex-col">
              <FormLabel>Nome do Serviço</FormLabel>
              <input className="input-outline" {...field} />
              <FormMessage />
            </div>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <div className="flex flex-col">
              <FormLabel className="mb-2">Descrição do Serviço</FormLabel>
              <Textarea
                rows={6}
                maxLength={300}
                onChange={(e) => {
                  field.onChange(e);
                  setDescriptionLength(e.target.value.length);
                }}
              />
              <small className="text-muted-foreground">
                {descriptionLength}/300 caracteres
              </small>
              <FormMessage />
            </div>
          )}
        />

        <FormField
          control={form.control}
          name="observation"
          render={({ field }) => (
            <div className="flex flex-col">
              <FormLabel className="mb-2">Observação do Serviço</FormLabel>
              <Textarea
                rows={6}
                maxLength={300}
                onChange={(e) => {
                  field.onChange(e);
                  setObservationLength(e.target.value.length);
                }}
              />
              <small className="text-muted-foreground">
                {observationLength}/300 caracteres
              </small>
              <FormMessage />
            </div>
          )}
        />

        <div className="center gap-x-5">
          <button
            onClick={prevStep}
            className={cn(
              "hover:text-primary transition-colors",
              currentStep === 1 &&
                "opacity-25 hover:text-foreground cursor-default"
            )}
          >
            <FaChevronCircleLeft className="w-8 h-8" />
          </button>

          <button
            type="submit"
            className={cn(
              "hover:text-primary transition-colors",
              currentStep === 4 &&
                "opacity-25 hover:text-foreground cursor-default"
            )}
          >
            <FaChevronCircleRight className="w-8 h-8" />
          </button>
        </div>
      </form>
    </Form>
  );
}
