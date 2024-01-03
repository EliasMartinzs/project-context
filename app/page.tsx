import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="background-login-page w-full h-screen grid place-items-center">
      <Button>
        <Link href="/auth/login">Login</Link>
      </Button>
    </div>
  );
}
