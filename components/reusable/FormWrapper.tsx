import Link from "next/link";

interface Props {
  children: React.ReactNode;
  title: string;
  subTitle: string;
  buttonTitle: string;
  href: string;
}

export function FormWrapper({
  buttonTitle,
  children,
  href,
  subTitle,
  title,
}: Props) {
  return (
    <div className="space-y-6 max-w-80">
      <div className="mt-1">
        <p>{title}</p>
        <div className="flex gap-x-1">
          <p>{subTitle}</p>
          <Link
            href={href}
            className="font-semibold hover:underline underline-offset-4"
          >
            {buttonTitle}
          </Link>
        </div>
      </div>

      {children}
    </div>
  );
}
