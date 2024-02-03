import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { posts } from "./posts";
import { sql } from "drizzle-orm";
import { users } from "./users";

export const comments = sqliteTable("comments", {
  id: integer("id").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  postId: integer("postId")
    .notNull()
    .references(() => posts.id, { onDelete: "cascade" }),
  parentId: integer("parentId"), // TODO: Add a reference to its own column
  body: text("body").default(""),
  createdOn: text("timestamp").default(sql`CURRENT_TIMESTAMP`),
});

export const CommentType = typeof comments.$inferSelect;
