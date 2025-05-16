"use client";

import { Button } from "@shadcn/button";
import { useAuthActions } from "@convex-dev/auth/react";

export const SignIn = () => {
  const { signIn } = useAuthActions();

  const handleSignIn = async () => {
    await signIn(`github`);
  };

  return <Button onClick={handleSignIn}>SignIn</Button>;
};
