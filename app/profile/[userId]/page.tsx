import React from "react";
import ProfileContainer from "@/components/containers/profileContainer/ProfileContainer";
import { db } from "@/database";
import { posts } from "@/database/schema/posts";
import { count, eq } from "drizzle-orm";
import { users } from "@/database/schema/users";
import { likes } from "@/database/schema/likes";

const ProfilePage = async ({ params }: { params: { userId: string } }) => {
  const { userId } = params || {};

  //Todo: Some way to remove this db call and extract bio from session itself
  const user_data = await db.select().from(users).where(eq(users.id, userId));

  const post_list = await db
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

  return (
    <div className="h-full">
      <ProfileContainer user={user_data[0]} posts_list={post_list} />
    </div>
  );
};

export default ProfilePage;
