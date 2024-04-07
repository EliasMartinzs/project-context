import { UserCard } from "@/components/reusable/UserCard";
import { User } from "@prisma/client";
import Image from "next/image";

interface Props {
  user: User;
}

export function CardService({ user }: Props) {
  return (
    <div
      className="inline-flex relative rounded-[36px] w-[450px] flex-col bg-card border-b border-r border-l dark:border-none shadow-custom"
      key={user?.id}
    >
      <div className="w-full h-[225px] relative rounded-t-[36px]">
        <Image
          src="/foto.webp"
          fill
          className="object-cover rounded-t-[36px] rounded-[36px] shadow-xl dark:shadow-2xl"
          alt="aaa"
        />
      </div>
      <div className="min-h-52 w-full my-7 flex flex-col gap-y-10">
        <div className="center flex-col gap-y-3 text-center mx-2">
          <h5>Algum titulo</h5>
          <small className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aliquam
            debitis numquam quidem recusandae maiores ratione sapiente natus
            fugit repellat vel, in aspernatur rerum cumque? Eligendi obcaecati
            nostrum voluptatum consectetur.
          </small>
        </div>

        <div className="mx-5 flex items-center gap-x-3">
          <div className="w-full flex items-center justify-between">
            <div className="mx-5 flex items-center gap-x-3">
              <UserCard />
            </div>

            <p className="text-xl">
              <span className="font-semibold">R$ </span>20,00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
