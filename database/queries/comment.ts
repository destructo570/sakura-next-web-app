import { users } from "../schema/users";
import { db } from "..";
import { and, eq } from "drizzle-orm";
import { posts } from "../schema/posts";

export const fetchCommentsByPostId = async (postId: number): Promise<any> => {
  return await db
    .select({
        id: posts.id,
        userId: posts.userId,
        parentId: posts.parentId,
        body: posts.body,
        createdOn: posts.createdOn,
        user: users
    })
    .from(posts)
    .where(and(eq(posts.parentId, postId), eq(posts.type, 'comment')))
    .innerJoin(users, eq(users.id, posts.userId));
};
