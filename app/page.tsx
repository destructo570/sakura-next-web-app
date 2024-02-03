import React from "react";
import HomeFeedContainer from "@/components/containers/homePageContainer/HomeFeedContainer";
import { db } from "@/database";
import { posts } from "@/database/schema/posts";
import { eq, desc, count } from "drizzle-orm";
import { users } from "@/database/schema/users";
import { likes } from "@/database/schema/likes";
import AuthHeader from "@/components/common/AuthHeader";

const Home = async () => {
  const post_list = await db
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

  return (
    <main className="flex flex-col justify-between">
      <header className="flex justify-center mb-4">
        <h2>S.</h2>
        <h3 className="flex-grow text-center">Home</h3>
        <AuthHeader />
      </header>
      <HomeFeedContainer posts_list={post_list} />
    </main>
  );
};

export default Home;
