import React, { ReactNode } from "react";
import { Header } from "../explorer/_components/Header";

export default function ServiceLayput({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
