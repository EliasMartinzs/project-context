import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";

export function SSO() {
  return (
    <div className="space-y-3">
      <Button className="w-full bg-foreground text-background center gap-x-3">
        <FaGoogle className="w-6 h-6" />
        Continuar com Google
      </Button>

      <Button className="w-full bg-foreground text-background center gap-x-3">
        <FaGithub className="w-6 h-6" />
        Continuar com Github
      </Button>
    </div>
  );
}
