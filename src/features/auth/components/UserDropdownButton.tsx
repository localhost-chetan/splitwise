"use client";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@shadcn/dropdown-menu";
import Link from "next/link";
import { cn } from "@lib/utils";
import { useQuery } from "convex/react";
import { SignOut } from "@features/auth";
import { api } from "@convex/_generated/api";
import { Avatar, AvatarFallback, AvatarImage } from "@shadcn/avatar";

type UserButtonProps = {
  className?: string;
};

const UserButton = ({ className }: UserButtonProps) => {
  const user = useQuery(api.user.currentuser);

  if (user) {
    return (
      <Avatar className={cn(`size-10 cursor-pointer`, className)}>
        <AvatarImage src={user.image} alt={`${user.name} logo`} />
        <AvatarFallback>{user.name}</AvatarFallback>
      </Avatar>
    );
  }
};

export const UserDropdownButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserButton />
      </DropdownMenuTrigger>

      <DropdownMenuContent className={`mx-4 w-52`}>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <div className={`space-y-2`}>
          <DropdownMenuItem asChild>
            <Link href={`/dashboard`} className={`cursor-pointer`}>
              My Dashboard
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <SignOut className={`w-full cursor-pointer hover:scale-100`} />
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
