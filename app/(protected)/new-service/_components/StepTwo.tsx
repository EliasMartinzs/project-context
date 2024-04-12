import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormControl, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ServiceStep2Schema } from "@/lib/validations";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { categoriesServices } from "@/constants";
import { toast } from "sonner";

interface Props {
  updateFormData: (step: number, data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
  currentStep: number;
}

type validation = z.infer<typeof ServiceStep2Schema>;

export function StepTwo({
  updateFormData,
  nextStep,
  prevStep,
  currentStep,
}: Props) {
  const form = useForm<validation>({
    resolver: zodResolver(ServiceStep2Schema),
    defaultValues: {
      categories: [],
    },
  });

  const onSubmit = (data: validation) => {
    updateFormData(currentStep, data);
    nextStep();
  };

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {categoriesServices.map(({ label, icon }) => {
            const Icon = icon;
            return (
              <FormField
                key={label}
                control={form.control}
                name="categories"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <label
                        key={label}
                        className={`flex-1 border flex min-h-20 max-h-24 items-center justify-start p-3 rounded-lg cursor-pointer hover:border-primary transition-colors ${
                          field.value.includes(label)
                            ? "bg-purple-500 text-white"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          value={label}
                          checked={field.value.includes(label)}
                          onChange={(e) => {
                            const { checked } = e.target;
                            const selectedCategories =
                              form.getValues("categories");

                            if (checked) {
                              if (selectedCategories.length >= 3) {
                                e.target.checked = false;
                                toast(
                                  "Você só pode selecionar até 3 categorias!",
                                  {
                                    position: "top-center",
                                  }
                                );
                              } else {
                                form.setValue("categories", [
                                  ...selectedCategories,
                                  label,
                                ]);
                              }
                            } else {
                              form.setValue(
                                "categories",
                                selectedCategories.filter(
                                  (category: string) => category !== label
                                )
                              );
                            }
                          }}
                          className="hidden"
                        />
                        <div className="flex items-center gap-x-2">
                          <Icon className="w-8 h-8" />
                          <small>{label}</small>
                        </div>
                      </label>
                    </FormControl>
                  </FormItem>
                )}
              />
            );
          })}
        </div>

        <small className="text-red-500">
          {form.formState.errors.categories?.message}
        </small>

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
