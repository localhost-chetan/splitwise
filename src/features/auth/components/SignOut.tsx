"use client";

import { cn } from "@lib/utils";
import { Button } from "@shadcn/button";
import { useAuthActions } from "@convex-dev/auth/react";

type SignOutProps = {
  className?: string;
};

export const SignOut = ({ className }: SignOutProps) => {
  const { signOut } = useAuthActions();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <Button
      variant={`secondary`}
      onClick={handleSignOut}
      className={cn(
        `hover:bg-destructive duration-300 ease-out hover:scale-105`,
        className,
      )}
    >
      Log Out
    </Button>
  );
};
