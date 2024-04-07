import React from "react";
import { RegisterForm } from "./_components/RegisterForm";
import { SSO } from "@/components/reusable/SSO";
import { Separator } from "@/components/ui/separator";
import { FormWrapper } from "@/components/reusable/FormWrapper";

export default function Register() {
  return (
    <div className="w-full min-h-svh lg:pt-20 center">
      <FormWrapper
        title="Registrar-se"
        subTitle="Já tem uma conta no Context?"
        href="/login"
        buttonTitle="Login"
      >
        <RegisterForm />
        <Separator />
        <SSO />
      </FormWrapper>
    </div>
  );
}
