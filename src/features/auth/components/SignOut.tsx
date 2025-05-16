"use client";

import { Button } from "@shadcn/button";
import { useAuthActions } from "@convex-dev/auth/react";

export const SignOut = () => {
  const { signOut } = useAuthActions();

  const handleSignOut = async () => {
    await signOut();
  };

  return <Button onClick={handleSignOut}>SignOut</Button>;
};
