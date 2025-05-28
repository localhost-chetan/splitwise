import { cn } from "@lib/utils";
import { Badge } from "@shadcn/badge";
import { type ReactNode } from "react";

type MyBadgeProps = {
  content: ReactNode;
  className?: string;
};

export const MyBadge = ({ content, className }: MyBadgeProps) => {
  return (
    <Badge
      variant={`secondary`}
      className={cn(
        `dark:bg-primary/15 bg-primary/15 text-primary shadow-primary mb-5 px-5 py-1 sm:scale-110`,
        className,
      )}
    >
      {content}
    </Badge>
  );
};
