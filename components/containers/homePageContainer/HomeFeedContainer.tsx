import React from "react";
import PostContainer from "../postContainer/PostContainer";
import { db } from "@/database";
import { posts } from "@/database/schema/posts";
import { eq, desc } from "drizzle-orm";
import { users } from "@/database/schema/users";

const HomeFeedContainer = async () => {
  const post_list = await db
    .select({
      id: posts.id,
      body: posts.body,
      createdOn: posts.createdOn,
      userId: posts.userId,
      user: users,
    })
    .from(posts)
    .innerJoin(users, eq(users.id, posts.userId))
    .orderBy(desc(posts.createdOn));

  return (
    <section className="w-full">
      <header className="flex justify-center">
        <h3>Home</h3>
      </header>
      <div className="mt-4">
        {post_list?.map((item) => (
          <PostContainer post={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default HomeFeedContainer;
