"use client";

import { type PropsWithChildren } from "react";
import { getConvexUrl } from "@lib/convex/utils";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(getConvexUrl());

export const ConvexClientProvider = ({ children }: PropsWithChildren) => {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
};
