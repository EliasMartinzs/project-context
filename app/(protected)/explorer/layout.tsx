import { Header } from "./_components/Header";
import { Menu } from "./_components/Menu";

export default function LayoutInitial({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
