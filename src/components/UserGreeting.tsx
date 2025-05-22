"use client";

import { useQuery } from "convex/react";
import { getFirstName } from "@lib/utils";
import { api } from "@convex/_generated/api";

export const UserGreeting = () => {
  const user = useQuery(api.user.currentuser);

  if (user)
    return (
      <h1 className={`text-2xl font-light`}>
        {`Hello `}
        <strong className={`font-extrabold`}>
          {getFirstName(user.name ?? `User`)}
        </strong>
      </h1>
    );
};
