import { BiError } from "react-icons/bi";

interface FormErrorProps {
  message: string | undefined;
}

export function FormError({ message }: FormErrorProps) {
  return (
    <>
      {message && (
        <div className="text-start w-full flex items-center justify-start px-4 text-sm h-9 bg-danger-500 bg-opacity-30 gap-x-3">
          <BiError /> {message}
        </div>
      )}
    </>
  );
}
