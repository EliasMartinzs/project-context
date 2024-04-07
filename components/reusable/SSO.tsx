"use client";

import { getSession, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const SSO = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = async (provider: "google" | "github") => {
    try {
      signIn(provider, {
        callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="lg" className="w-full" onClick={() => onClick("google")}>
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button size="lg" className="w-full" onClick={() => onClick("github")}>
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
