"use client";

import { FormWrapper } from "@/components/reusable/FormWrapper";
import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { SSO } from "@/components/reusable/SSO";
import { LoginForm } from "./_components/LoginForm";
import { useSearchParams } from "next/navigation";
import { FormState } from "@/components/reusable/FormState";
import { CgDanger } from "react-icons/cg";

export default function Login() {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>("");
  const errors = searchParams.get("error");

  useEffect(() => {
    switch (errors) {
      case "OAuthAccountNotLinked":
        setError("Este e-mail já está associado a outra conta.");
    }
  }, [errors]);

  return (
    <div className="w-full min-h-svh lg:pt-20 center">
      <FormWrapper
        title="Entrar"
        subTitle="Não tem uma conta Context?"
        href="/register"
        buttonTitle="Crie uma"
      >
        {error && (
          <FormState
            text={error ?? ""}
            style="border border-error text-error rounded-xl shadow-inner"
            icon={CgDanger}
          />
        )}
        <LoginForm />
        <Separator />
        <SSO />
      </FormWrapper>
    </div>
  );
}
