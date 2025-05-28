"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Links = () => {
  const pathname = usePathname();

  if (pathname === `/`) {
    return (
      <div
        className={`hidden items-center gap-x-10 text-sm transition-colors duration-500 ease-out *:hover:text-green-300 md:flex`}
      >
        <Link href={`#features`}>Features</Link>
        <Link href={`#how-it-works`}>How It Works</Link>
      </div>
    );
  }
};
