import { query } from "@convex/_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const currentuser = query({
    handler: async (ctx) => {
        const userID = await getAuthUserId(ctx)

        if (userID) return await ctx.db.get(userID);
        return null
    }
})