import {
  integer,
  sqliteTable,
  text,
  primaryKey,
} from "drizzle-orm/sqlite-core";
import { users } from "./users";
import { posts } from "./posts";
import { sql } from "drizzle-orm";

export const likes = sqliteTable("likes", {
  id: integer("id").primaryKey(),
  postId: integer("postId")
    .notNull()
    .references(() => posts.id, { onDelete: "cascade" }),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  createdOn: text("timestamp").default(sql`CURRENT_TIMESTAMP`),
});

export const LikeType = typeof likes.$inferSelect;
