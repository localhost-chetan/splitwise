"use client";

import { type PropsWithChildren } from "react";
import { getConvexUrl } from "@lib/convex/utils";
import { ConvexReactClient } from "convex/react";
import { ConvexAuthNextjsProvider } from "@convex-dev/auth/nextjs";

const convex = new ConvexReactClient(getConvexUrl(), {
  verbose: true,
});

export const ConvexClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <ConvexAuthNextjsProvider client={convex}>
      {children}
    </ConvexAuthNextjsProvider>
  );
};
