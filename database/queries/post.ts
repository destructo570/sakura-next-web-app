import { db } from "@/database";
import { posts } from "@/database/schema/posts";
import { eq, desc, count, and } from "drizzle-orm";
import { users } from "@/database/schema/users";
import { likes } from "@/database/schema/likes";
import { PostDataType } from "@/types/interafce";

//TODO: Replace with just one function
export const fetchTopPosts = async (): Promise<PostDataType[]> => {
  return await db
    .select({
      id: posts.id,
      body: posts.body,
      createdOn: posts.createdOn,
      userId: posts.userId,
      user: users,
      likes: count(likes),
    })
    .from(posts)
    .innerJoin(users, eq(users.id, posts.userId))
    .leftJoin(likes, eq(posts.id, likes.postId))
    .orderBy(desc(posts.createdOn))
    .groupBy(posts.id);
};

export const fetchUserPosts = async (
  userId: string
): Promise<PostDataType[]> => {
  return await db
    .select({
      id: posts.id,
      body: posts.body,
      createdOn: posts.createdOn,
      userId: posts.userId,
      likes: count(likes),
      user: users,
    })
    .from(posts)
    .where(eq(posts.userId, userId))
    .leftJoin(likes, eq(posts.id, likes.postId))
    .innerJoin(users, eq(users.id, userId))
    .groupBy(posts.id);
};

export const fetchPost = async (postId: number): Promise<PostDataType[]> => {
  return await db
    .select({
      id: posts.id,
      body: posts.body,
      createdOn: posts.createdOn,
      userId: posts.userId,
      likes: count(likes),
      user: users,
    })
    .from(posts)
    .where(eq(posts.id, postId))
    .leftJoin(likes, eq(posts.id, likes.postId))
    .innerJoin(users, eq(users.id, posts.userId))
    .groupBy(posts.id);
};

export const fetchCommentsByPostId = async (postId: number): Promise<PostDataType[]> => {
  return await db
    .select({
        id: posts.id,
        userId: posts.userId,
        parentId: posts.parentId,
        body: posts.body,
        likes: count(likes),
        createdOn: posts.createdOn,
        user: users
    })
    .from(posts)
    .where(and(eq(posts.parentId, postId), eq(posts.type, 'comment')))
    .leftJoin(likes, eq(posts.id, likes.postId))
    .innerJoin(users, eq(users.id, posts.userId))
    .groupBy(posts.id);
};
