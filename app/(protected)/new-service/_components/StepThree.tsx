import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useFieldArray, useForm } from "react-hook-form";
import { ServiceStep3Schema, ServiceExtra } from "@/lib/validations";
import * as z from "zod";
import { cn } from "@/lib/utils";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuestionCircle,
} from "react-icons/fa";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Label } from "@/components/ui/label";
import { Delete, Plus } from "lucide-react";
import { useState } from "react";

interface Props {
  updateFormData: (step: number, data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
  currentStep: number;
}

type validation = z.infer<typeof ServiceStep3Schema>;

export function StepThree({
  updateFormData,
  nextStep,
  prevStep,
  currentStep,
}: Props) {
  const form = useForm<validation>({
    resolver: zodResolver(ServiceStep3Schema),
    defaultValues: {
      price: "",
      extra: [],
    },
  });
  const [open, setOpen] = useState(false);
  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");

  const { control } = form;

  const { append, remove, fields } = useFieldArray({
    control,
    name: "extra",
  });

  const addExtra = (name: string, price: number) => {
    append({ name: name, price: price });

    setServiceName("");
    setServicePrice("");
  };

  const removeExtra = (index: number) => {
    remove(index);
  };

  const onSubmit = (data: validation) => {
    updateFormData(currentStep, data);
    nextStep();
  };

  return (
    <Form {...form}>
      <form
        className="space-y-8 center flex-col"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Preço do Serviço</FormLabel>
                <FormControl>
                  <div className="relative">
                    <input
                      {...field}
                      className="input-outline pl-8"
                      type="number"
                    />
                    <span className="absolute top-2 left-0">R$:</span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-y-8">
            <div className="space-y-1">
              <div>
                <button
                  type="button"
                  className="flex items-center gap-x-2"
                  onClick={() => setOpen(!open)}
                >
                  Serviço adicional <Plus className="w-4 h-4" />
                </button>
              </div>

              <div>
                <HoverCard>
                  <HoverCardTrigger>
                    <small className="text-muted-foreground cursor-help">
                      Dúvidas sobre o adicional?
                    </small>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <small className="text-muted-foreground">
                      O adicional oferece a oportunidade de cobrar um valor
                      extra pelos seus serviços, concedendo tempo adicional,
                      recursos adicionais ou outras opções personalizadas. Use
                      essa opção para adaptar seus serviços às necessidades
                      específicas do cliente ou para incluir extras exclusivos
                      em seus projetos.
                    </small>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>

            {open && (
              <div className="space-y-6">
                <div className="flex flex-col">
                  Serviço extra
                  <input
                    className="input-outline"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  Preço extra
                  <input
                    className="input-outline"
                    value={servicePrice}
                    type="number"
                    onChange={(e) => setServicePrice(e.target.value)}
                  />
                </div>
                <div>
                  {fields.map((price) => (
                    <div
                      key={price.id}
                      className="flex items-center justify-between w-full gax3 border-b p-2"
                    >
                      <span>
                        {price.name} {price.price}
                      </span>
                      <button onClick={() => removeExtra(+price.id)}>
                        <Delete className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="w-full border p-2 hover:border-primary hover:text-primary transition-colors"
                  onClick={() => addExtra(serviceName, +servicePrice)}
                >
                  Adicionar
                </button>
              </div>
            )}
          </div>
        </div>

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
