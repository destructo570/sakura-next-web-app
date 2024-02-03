import { db } from "@/database";
import { posts } from "@/database/schema/posts";
import { eq, desc, count } from "drizzle-orm";
import { users } from "@/database/schema/users";
import { likes } from "@/database/schema/likes";
import { PostDataType } from "@/types/interafce";
import { comments } from "../schema/comments";

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
      comments: count(comments),
    })
    .from(posts)
    .innerJoin(users, eq(users.id, posts.userId))
    .leftJoin(likes, eq(posts.id, likes.postId))
    .leftJoin(comments, eq(posts.id, comments.postId))
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
      comments: count(comments),
      user: users,
    })
    .from(posts)
    .where(eq(posts.userId, userId))
    .leftJoin(likes, eq(posts.id, likes.postId))
    .leftJoin(comments, eq(posts.id, comments.postId))
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
      comments: count(comments),
      user: users,
    })
    .from(posts)
    .where(eq(posts.id, postId))
    .leftJoin(likes, eq(posts.id, likes.postId))
    .leftJoin(comments, eq(posts.id, comments.postId))
    .innerJoin(users, eq(users.id, posts.userId))
    .groupBy(posts.id);
};
