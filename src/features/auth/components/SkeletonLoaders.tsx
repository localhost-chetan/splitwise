import { Skeleton } from "@shadcn/skeleton";

export const ButtonSkeleton = () => {
  return (
    <Skeleton
      className={`bg-primary flex h-9 w-[8ch] items-center justify-center`}
    >
      <div
        className={`border-primary-foreground size-5 animate-spin rounded-full border-3 border-t-transparent`}
      />
    </Skeleton>
  );
};
