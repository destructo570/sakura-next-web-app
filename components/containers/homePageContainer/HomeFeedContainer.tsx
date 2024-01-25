import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
      user: users,
    })
    .from(posts)
    .innerJoin(users, eq(users.id, posts.userId))
    .orderBy(desc(posts.createdOn));

  return (
    <section className="w-full">
      <Tabs defaultValue="for_you">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="for_you">For you</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
        </TabsList>
        <TabsContent value="for_you">
          {post_list?.map((item) => (
            <PostContainer post={item} key={item.id} />
          ))}
        </TabsContent>
        <TabsContent value="following">
          <p>Following</p>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default HomeFeedContainer;
