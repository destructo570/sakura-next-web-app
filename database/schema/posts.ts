import { integer, sqliteTable, text, primaryKey } from "drizzle-orm/sqlite-core";
import { users } from "./users";
import { sql } from "drizzle-orm";

export const posts = sqliteTable("posts", {
    id: integer('id').primaryKey(),
    body: text('body').notNull(),
    userId: text('userId').references(() => users.id, {onDelete: 'cascade'}),
    createdOn: text("timestamp").default(sql`CURRENT_TIMESTAMP`),
})

export type PostType = typeof posts.$inferSelect;