import { createService } from "@/actions/service";
import { Loading } from "@/components/reusable/Loading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ServiceFormData } from "@/lib/interfaces";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { toast } from "sonner";

interface Props {
  formData: {
    serviceStep1: any;
    serviceStep2: any;
    serviceStep3: any;
  };
  prevStep: () => void;
  currentStep: number;
  userId: string | undefined;
}

const combineFormData = (formData: Props["formData"]): ServiceFormData => {
  const { serviceStep1, serviceStep2, serviceStep3 } = formData;

  const combinedData: ServiceFormData = {
    title: serviceStep1.title,
    description: serviceStep1.description,
    observation: serviceStep1.observation,
    photo: serviceStep1.photo,
    categories: serviceStep2.categories,
    price: serviceStep3.price,
    extra: serviceStep3.extra ?? [],
  };

  return combinedData;
};

export function StepFour({ formData, prevStep, currentStep, userId }: Props) {
  const data = combineFormData(formData);
  const [isPending, startTransition] = useTransition();

  console.log(data);

  async function onCreateService() {
    startTransition(async () => {
      toast("Criando serviço", {
        position: "top-center",
      });
      await createService(data, userId ?? "");
      toast("Serviço criado com sucesso!", {
        position: "top-center",
      });
    });
  }

  return (
    <div className="space-y-8">
      <div className="text-muted-foreground text-center">
        <small>
          Aqui será exibida a forma como você publicou o seu serviço. Na página
          do seu serviço, estarão disponíveis as outras informações que você
          digitou.
        </small>
      </div>

      <div className="center">
        <Card className="w-[420px] lg:w-[450px] bg-card shadow-custom dark: border-t border-r border-l rounded-[36px] space-y-2">
          <CardHeader>
            <div className="relative w-full h-[225px] rounded-[36px] shadow-md">
              <Image
                fill
                alt={data?.title}
                src={data?.photo ?? ""}
                className="object-center object-cover rounded-[36px]"
              />
            </div>
          </CardHeader>

          <CardContent className="flex flex-col gap-y-6 h-40">
            <div className="space-y-8">
              <h4 className="line-clamp-2 text-center uppercase">
                {data?.title}
              </h4>
              <small className="line-clamp-4 text-start">
                {data?.description}
              </small>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-y-4">
            <div className="gap-y-2 flex-col center h-[140px] w-full">
              {data?.categories !== undefined &&
                data?.categories.map((cat) => (
                  <small
                    className="border rounded-full p-1 px-2 shadow-sm"
                    key={cat}
                  >
                    {cat}
                  </small>
                ))}
            </div>

            <Separator />

            <div className="w-full flex items-center justify-between">
              <div></div>
              <div>
                <p className="">R$ {data?.price}</p>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>

      <div className="center">
        <button
          className="w-full lg:w-[450px] border py-3 rounded-[36px] bg-primary text-primary-foreground font-semibold hover:bg-background hover:text-primary transition-colors hover:border-primary disabled:opacity-60 center"
          onClick={onCreateService}
          disabled={isPending}
        >
          {isPending ? (
            <Loading fill="white" size="medium" />
          ) : (
            "Publicar Serviço"
          )}
        </button>
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
    </div>
  );
}
