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
      onClick={handleSignIn}
      className={`duration-300 ease-out hover:scale-105 hover:bg-green-400`}
    >
      Sign In
    </Button>
  );
};
