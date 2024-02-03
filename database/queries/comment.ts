import { UserType, users } from "../schema/users";
import { CommentType, comments } from "../schema/comments";
import { db } from "..";
import { eq } from "drizzle-orm";

// export type CommentWithAuthor = CommentType & { user: UserType };

export const fetchCommentsByPostId = async (postId: number): Promise<any> => {
  return await db
    .select({
        id: comments.id,
        userId: comments.userId,
        postId: comments.postId,
        parentId: comments.parentId,
        body: comments.body,
        createdOn: comments.createdOn,
        user: users
    })
    .from(comments)
    .where(eq(comments.postId, postId))
    .innerJoin(users, eq(users.id, comments.userId));
};
