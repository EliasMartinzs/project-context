import { CheckCircleIcon } from "lucide-react";

interface FormErrorProps {
  message: string | undefined;
}

export function FormSucess({ message }: FormErrorProps) {
  return (
    <>
      {message && (
        <div className="text-start w-full flex items-center justify-start px-4 text-sm h-9 bg-success-500 bg-opacity-30 gap-x-3">
          <CheckCircleIcon /> {message}
        </div>
      )}
    </>
  );
}
