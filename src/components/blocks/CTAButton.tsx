import Link from "next/link";
import { cn } from "@lib/utils";
import { MoveRight } from "lucide-react";

type CTAButtonProps = Record<`href` | `label`, string> & {
  isPrimary?: boolean;
  className?: string;
};

export const CTAButton = ({
  href,
  label,
  isPrimary = false,
  className,
}: CTAButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        `dark:bg-secondary bg-secondary-foreground flex scale-85 items-center gap-x-3 rounded-md px-4 py-2 text-base text-white duration-300 ease-out hover:scale-90 md:scale-100 md:hover:scale-105 dark:text-white`,
        className,
        { "gradient-effect shadow-primary": isPrimary },
      )}
      aria-label={label}
    >
      <span className={`font-semibold text-shadow-md`}>{label}</span>
      <MoveRight />
    </Link>
  );
};
