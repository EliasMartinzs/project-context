"use client";

import { logout } from "@/actions/logout";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

export const Logout = ({ children }: LogoutButtonProps) => {
  const onClick = () => {
    logout();
  };

  return (
    <div onClick={onClick} className="cursor-pointer">
      {children}
    </div>
  );
};
