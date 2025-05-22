import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";

const schema = defineSchema({
    ...authTables,

    expenses: defineTable({
        description: v.string(),
        amount: v.number(),
        category: v.optional(v.string()),
        date: v.number(), // timestamp
        paidByUserId: v.id(`users`),    // reference to users table
        splitType: v.string(),  // "equal" | "percentage" | "exact"
        splits: v.array(
            v.object({
                userId: v.id(`users`),  // reference to users table
                amount: v.number(), // amount owned by this user
                paid: v.boolean()
            })
        ),
        groupId: v.optional(v.id(`groups`)),    // null for one-on-one expenses
        createdBy: v.id(`users`)    // reference to users table

    })
        .index(`by_group`, [`groupId`])
        .index(`by_user_and_group`, [`paidByUserId`, `groupId`])
        .index(`by_date`, [`date`]),


    groups: defineTable({
        name: v.string(),
        description: v.optional(v.string()),
        createdBy: v.id(`users`),
        members: v.array(
            v.object({
                userId: v.id(`users`),
                role: v.string(),
                joinedAt: v.number()
            })
        )
    }),

    settlements: defineTable({
        amount: v.number(),
        note: v.optional(v.string()),
        date: v.number(),
        paidByUserId: v.id(`users`),
        receivedByUserId: v.id(`users`),
        groupId: v.optional(v.id(`groups`)), // null for one-on-one settlements
        relatedExpenseIds: v.optional(v.array(v.id(`expenses`))),    // which expense this settlement covers
        createdBy: v.id(`users`)
    })
        .index(`by_group`, [`groupId`])
        .index(`by_user_and_group`, [`paidByUserId`, `groupId`])
        .index(`by_receiver_and_group`, [`receivedByUserId`, `groupId`])
        .index(`by_date`, [`date`])
})

export default schema;