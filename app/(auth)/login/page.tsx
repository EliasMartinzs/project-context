import { FormWrapper } from "@/components/reusable/FormWrapper";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { SSO } from "@/components/reusable/SSO";
import { LoginForm } from "./_components/LoginForm";

export default function Login() {
  return (
    <div className="w-full min-h-svh lg:pt-20 center background">
      <FormWrapper
        title="Entrar"
        subTitle="Não tem uma conta Context?"
        href="/register"
        buttonTitle="Crie uma"
      >
        <LoginForm />
        <Separator />
        <SSO />
      </FormWrapper>
    </div>
  );
}
