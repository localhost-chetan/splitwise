import GitHub from "@auth/core/providers/github";
import { convexAuth } from "@convex-dev/auth/server";

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [GitHub],

  session: {
    totalDurationMs: 1000 * 60 * 60 * 24 * 7, // 2 Days
    inactiveDurationMs: 1000 * 60 * 60 * 2   // 2 hours
  },

  jwt: {
    durationMs: 1000 * 60 * 60 * 24 // 1 day
  },
});
