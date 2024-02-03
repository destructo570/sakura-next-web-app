import { db } from "@/database";
import { posts } from "@/database/schema/posts";
import { eq, desc, count } from "drizzle-orm";
import { users } from "@/database/schema/users";
import { likes } from "@/database/schema/likes";
import { PostDataType } from "@/types/interafce";

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
