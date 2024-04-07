import { Search } from "@/components/reusable/Search";
import Link from "next/link";
import { Menu } from "./Menu";
import { MenuItems } from "./MenuItems";

export function Header() {
  return (
    <header className="w-full flex flex-row items-center gap-x-5 p-6 lg:px-32">
      <Link href={"/explorer"} className="text-xl font-medium lg:text-2xl">
        Services
        <span className="bg-primary p-2 text-primary-foreground rounded-md ml-1">
          Hub
        </span>
      </Link>

      <div className="flex items-center justify-end w-full">
        <Search />
      </div>

      <Menu>
        <MenuItems />
      </Menu>
    </header>
  );
}
