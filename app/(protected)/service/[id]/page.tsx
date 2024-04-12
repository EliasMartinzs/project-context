import { getAllServicesByUser, getServiceById } from "@/data/service";
import Image from "next/image";
import React from "react";
import { Checked } from "../_components/Checked";
import { Button } from "@/components/ui/button";
import { UserCard } from "@/components/reusable/UserCard";
import { Separator } from "@/components/ui/separator";
import { CardService } from "../../explorer/_components/CardService";
import { Slider } from "../../explorer/_components/Slider";
import { DynamicBreacrump } from "@/components/reusable/DynamicBreadcrumb";

export default async function Service({ params }: { params: { id: string } }) {
  const service = await getServiceById(params.id);
  const serviceByUser = await getAllServicesByUser(
    service?.service?.userId ?? ""
  );

  const filteredServices = serviceByUser.services?.filter(
    (service) => service.id !== params.id
  );

  const calculateInterest = (price: number | undefined): number => {
    const interestRate = 0.05;
    const interest = price! * interestRate;
    const total = price! + interest;

    return total;
  };

  return (
    <>
      <DynamicBreacrump
        paths={[
          { label: "Explorar", href: "/explorer" },
          {
            label: `${service?.service?.title}`,
            href: `${service?.service?.id}`,
          },
        ]}
      />
      <div className="p-6 lg:px-32 space-y-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
          <div className="w-full lg:w-[500px] lg:min-w-[500px] h-[500px] relative">
            <Image
              src={service.service?.photo ?? ""}
              alt={service?.service?.title ?? ""}
              fill
              className="object-center object-cover rounded-[36px]"
            />
          </div>

          <div className="lg:w-[40%] gap-y-6 flex flex-col">
            <h4 className="font-semibold text-2xl lg:text-4xl uppercase">
              {service?.service?.title}
            </h4>
            <div>
              <small>Descriçao</small>
              <p>{service?.service?.description}</p>
            </div>

            <div>
              {service?.service?.observation && (
                <div>
                  <small>Observaçoes</small>
                  <p>{service?.service?.observation}</p>
                </div>
              )}
            </div>

            <div className="flex gap-3">
              {service?.service?.categories
                .slice()
                .sort((a, b) => a.category.localeCompare(b.category))
                .map((cat) => (
                  <div key={cat.id} className="border p-2 rounded-full">
                    <p>{cat.category}</p>
                  </div>
                ))}
            </div>
          </div>

          <div className="w-full flex-1 flex flex-col py-6 px-4 space-y-6 border rounded-[36px]">
            <div className="flex items-center gap-x-2">
              <UserCard userId={service?.service?.userId} />
            </div>
            <div className="space-y-4">
              <p className="text-xl flex items-center gap-x-1">
                R$
                <span className="font-semibold">
                  {service?.service?.price.toFixed(2)}
                </span>
              </p>
              <small className="text-muted-foreground">
                à vista no Pix e boleto ou R${" "}
                {calculateInterest(service?.service?.price).toFixed(2)} no
                cartão de crédito
              </small>
            </div>
            <div className="space-y-4">
              <p>Extras</p>
              {service?.service?.extras.length === 0 ? (
                <small className="">
                  Este serviço não contém nenhum extra.
                </small>
              ) : (
                service?.service?.extras.map(({ name, price, check, id }) => (
                  <Checked key={id} name={name} price={price} checked={check} />
                ))
              )}
            </div>

            <div className="w-full h-full flex items-end justify-center">
              <Button className="w-full bg-primary text-primary-foreground border border-primary hover:bg-transparent hover:text-primary transition-colors rounded-[36px] py-6">
                Contratar
              </Button>
            </div>
          </div>
        </div>
        <Separator />

        <div className="space-y-4">
          <h4 className="text-lg flex items-center gap-x-1">
            Outros serviços de
            <span className="font-semibold">
              {service?.service?.user?.name}
            </span>
          </h4>

          <Slider gap="gap-x-4">
            {filteredServices?.map((service) => (
              <CardService service={service} key={service.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
