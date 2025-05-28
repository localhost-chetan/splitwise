import { cn } from "@lib/utils";
import { type PropsWithChildren } from "react";

type LayoutWrapperProps = {
  className?: string;
} & PropsWithChildren;

export const LayoutWrapper = ({ className, children }: LayoutWrapperProps) => {
  return <div className={cn(`px-4 py-2`, className)}>{children}</div>;
};
