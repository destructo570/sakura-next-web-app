import React from "react";
import ProfileContainer from "@/components/containers/profileContainer/ProfileContainer";
import { redirect } from "next/navigation";
import { auth } from "@/auth/auth";
import { db } from "@/database";
import { posts } from "@/database/schema/posts";
import { eq } from "drizzle-orm";
import { users } from "@/database/schema/users";

const ProfilePage = async () => {
  const session = await auth();

  if (!session || !session?.user?.id)
    redirect("/api/auth/signin?callbackUrl=/profile");
  const post_list = await db
    .select({
      id: posts.id,
      body: posts.body,
      createdOn: posts.createdOn,
      userId: posts.userId,
      user: users,
    })
    .from(posts)
    .where(eq(posts.userId, session.user.id))
    .innerJoin(users, eq(users.id, session.user.id));

  //Todo: Some way to remove this db call and extract bio from session itself
  const user_data = await db
    .select()
    .from(users)
    .where(eq(users.id, session!.user.id));

  return (
    <div className="h-full">
      <ProfileContainer
        user={user_data?.length ? user_data[0] : session?.user}
        posts_list={post_list}
      />
    </div>
  );
};

export default ProfilePage;
