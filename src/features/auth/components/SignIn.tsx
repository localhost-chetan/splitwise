"use client";

import { Button } from "@shadcn/button";
import { useAuthActions } from "@convex-dev/auth/react";

export const SignIn = () => {
  const { signIn } = useAuthActions();

  const handleSignIn = async () => {
    await signIn(`github`);
  };

  return (
    <Button
      variant={`outline`}
      onClick={handleSignIn}
      className={`duration-300 ease-out hover:scale-105`}
    >
      Sign In
    </Button>
  );
};
