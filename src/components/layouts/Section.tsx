import { cn } from "@lib/utils";
import { type ReactNode } from "react";
import { MyBadge } from "@components/blocks";

type SectionProps = Record<`id` | `title` | `description`, string> & {
  badgeText?: string;
  className?: string;
  hasMainHeading?: boolean;
  children: ReactNode;
};

export const Section = ({
  id,
  title,
  badgeText,
  hasMainHeading = false,
  description,
  children,
  className,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        `flex flex-col items-center justify-center rounded-md py-20 text-center`,
        className,
      )}
    >
      <MyBadge content={badgeText} />

      <div className={`mt-5 mb-10 flex flex-col items-center gap-y-3`}>
        <h2
          className={cn(
            `gradient-effect bg-clip-text px-5 text-2xl font-bold text-balance text-transparent sm:px-10 sm:text-3xl sm:font-extrabold md:px-24`,
            { "md:text-5xl": hasMainHeading },
          )}
        >
          {title}
        </h2>

        <p
          className={`text-muted-foreground mt-3 max-w-lg text-sm text-balance md:text-base/normal`}
        >
          {description}
        </p>
      </div>
      {children}
    </section>
  );
};
