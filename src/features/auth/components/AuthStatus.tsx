"use client";

import { SignIn, SignOut } from "@features/auth";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { ButtonSkeleton } from "@features/auth/components/SkeletonLoaders";

export const AuthStatus = () => {
  return (
    <>
      <AuthLoading>
        <ButtonSkeleton />
      </AuthLoading>

      <Unauthenticated>
        <SignIn />
      </Unauthenticated>

      <Authenticated>
        <SignOut />
      </Authenticated>
    </>
  );
};
