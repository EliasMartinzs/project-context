import React, { ReactNode } from "react";
import { Header } from "../explorer/_components/Header";

export default function CategoryLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
