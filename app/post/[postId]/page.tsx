import { db } from "@/database";
import { likes } from "@/database/schema/likes";
import { posts } from "@/database/schema/posts";
import { users } from "@/database/schema/users";
import { count, eq } from "drizzle-orm";
import React from "react";
import Post from "./Post";

const Page = async ({ params }: { params: { postId: string } }) => {
  const { postId } = params || {};

  const posts_list = await db
    .select({
      id: posts.id,
      body: posts.body,
      createdOn: posts.createdOn,
      userId: posts.userId,
      likes: count(likes),
      user: users,
    })
    .from(posts)
    .where(eq(posts.id, parseInt(postId)))
    .leftJoin(likes, eq(posts.id, likes.postId))
    .innerJoin(users, eq(users.id, posts.userId))
    .groupBy(posts.id);

  return (
    <div>
      <Post post={posts_list[0]} />
    </div>
  );
};

export default Page;
