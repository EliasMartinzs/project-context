import { Header } from "../explorer/_components/Header";

export default function NewServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
