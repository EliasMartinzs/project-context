import Link from "next/link";
import { Social } from "./Social";

interface FormWrapperProps {
  children: React.ReactNode;
  sso: boolean;
  title: string;
  description: string;
  href?: string;
  message: string;
}

export function FormWrapper({
  children,
  description,
  sso,
  title,
  href,
  message,
}: FormWrapperProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-center text-2xl font-black">{title}</h2>
        <p className="text-center">{description}</p>
      </div>
      {children}
      {sso && <Social />}
      <Link
        href={href ?? ""}
        className="text-sm hover:underline underline-offset-4"
      >
        {message}
      </Link>
    </div>
  );
}
