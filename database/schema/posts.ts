import { sqliteTable, text, integer, primaryKey } from "drizzle-orm/sqlite-core";
import { users } from "./users";
import { sql } from "drizzle-orm";
//TODO: Add constraint to accept either post or comment
export const posts = sqliteTable("posts", {
  id: integer("id").primaryKey(),
  body: text("body").notNull(),
  userId: text("userId").references(() => users.id, { onDelete: "cascade" }),
  parentId: integer("parentId"),
  type: text("type").default("post"),
  createdOn: text("timestamp").default(sql`CURRENT_TIMESTAMP`),
});

export type PostType = typeof posts.$inferSelect;
