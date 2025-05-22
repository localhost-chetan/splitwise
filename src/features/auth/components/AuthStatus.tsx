"use client";

import { Loader } from "@features/auth/components/Loader";
import { SignIn, UserDropdownButton } from "@features/auth";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";

export const AuthStatus = () => {
  return (
    <>
      <AuthLoading>
        <Loader />
      </AuthLoading>

      <Unauthenticated>
        <SignIn />
      </Unauthenticated>

      <Authenticated>
        <UserDropdownButton />
      </Authenticated>
    </>
  );
};
